/**
 * The head-to-head pages ("/ko/<a>-vs-<b>") and the comparison hub in Korean.
 * Same keys as `./en.tsx`, written natively in 합니다체.
 *
 * Wording: "거래소", "수수료", "레퍼럴 코드", "레버리지", "본인 인증(KYC)", "현물" / "선물". The pages call themselves
 * “맞대결 비교”, the hub “거래소 비교”; the mark for the better value is “우위”. "vs" stays "vs".
 * Exchange names stay in Latin letters; the Hangul reading (`withHangul`, `hangulName`) is added in the H1, the
 * keywords and the first mention in the opening text. Every particle after a name or an inserted data text comes
 * from `josa()` ("Binance는" but "Bitget은"). Hangul has no capital letters, so texts from the data are inserted
 * unchanged; `withoutSource` strips the source bracket "(… 발표)" / "(… API)".
 */
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import { hangulName, josa, withHangul } from "../ko-josa";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "ko";
const ct = compareText(locale);
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const { advantages, feeSentence, names } = ct;
const featureList = ct.features;
const countryList = ct.countries;
type Country = (typeof countryList)[number];

/* ---------------------------------- helpers --------------------------------- */

/** "등록 사용자 3억 2,000만 명 이상 (Binance 발표)" → without the bracket; "코인 390개, 현물 거래쌍 509개 (Bybit API)" → without the bracket. */
const withoutSource = (s: string) => s.replace(/\s*\([^()]*(?:발표|API)\)/, "");
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
/** The Hangul reading alone ("바이낸스"), for the keywords. */
const reading = (e: Exchange) => hangulName[e.slug] ?? e.name;
const leverageRisk = "레버리지가 높을수록 청산 위험이 크게 높아집니다.";
const regionalNote = "지역 플랫폼은 보통 상품 구성, 수수료, 한도가 따로 정해져 있습니다.";
const safeWay = "레퍼럴 링크로 가입하는 것이 가장 확실합니다.";
/** "Binance가 3개, OKX가 5개 항목에서 앞서고, 2개 항목은 동률입니다" – the tail after the two counts. */
const aheadTail = (s: ScoreSummary) => (s.tie.length ? `앞서고, ${s.tie.length}개 항목은 동률입니다` : "앞섭니다");

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `${josa(e.name, "이/가")} 앞서는 항목은 ${joinList(rows.map((r) => r.topic))}입니다` : `${josa(e.name, "이/가")} 앞서는 항목은 없습니다`;
  return `${josa(a.name, "과/와")} ${b.name} 중 모든 항목에서 앞서는 거래소는 없습니다. 이 비교에서 수치로 가릴 수 있는 ${s.measurable}개 항목 가운데 ${josa(a.name, "이/가")} ${s.a.length}개, ${josa(b.name, "이/가")} ${s.b.length}개 항목에서 ${aheadTail(s)}. ${lead(a, s.a)}. ${lead(b, s.b)}. ${josa(altInfo(a).chooseIf[0], "이라면/라면")} ${josa(a.name, "을/를")} 선택하세요. ${josa(altInfo(b).chooseIf[0], "이라면/라면")} ${josa(b.name, "을/를")} 선택하세요.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb)
    return `${josa(a.name, "과/와")} ${b.name}의 최대 레버리지는 같습니다. ${josa(a.name, "은/는")} ${a.maxLeverage}, ${josa(b.name, "은/는")} ${b.maxLeverage}입니다.`;
  const [high, low] = la > lb ? [a, b] : [b, a];
  return `최대 레버리지는 ${josa(high.name, "이/가")} 더 높습니다. ${josa(high.name, "은/는")} ${high.maxLeverage}, ${josa(low.name, "은/는")} ${low.maxLeverage}입니다.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `CoinMarketCap 파생상품 순위(${prettyDate(site.marketDataDate)})에서 ${josa(a.name, "은/는")} ${a.market.markets}개 마켓에서 미결제약정 ${josa(formatBn(a.market.openInterestBn), "을/를")}, ${josa(b.name, "은/는")} ${b.market.markets}개 마켓에서 ${josa(formatBn(b.market.openInterestBn), "을/를")} 기록했습니다. 시장은 ${deeper.name} 쪽이 더 깊으며, 이는 보통 대량 주문에서 스프레드가 더 좁다는 뜻입니다.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${josa(a.name, "은/는")} ${josa(joinList(notOffered.map((f) => f.noun)), "을/를")} 제공하지만 ${josa(b.name, "은/는")} 제공하지 않습니다.` : "",
    notFound.length ? `${josa(a.name, "은/는")} ${josa(joinList(notFound.map((f) => f.noun)), "을/를")} 제공하며, ${b.name} 공식 사이트에서는 이런 상품을 찾지 못했습니다.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** One exchange's status in one country as a sentence without its period. The note follows the country name. */
const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const place = note ? `${c.name}(${note})` : c.name;
  if (status === "restricted") return `${josa(e.name, "은/는")} ${place} 거주자가 이용할 수 없습니다`;
  if (status === "regional") return `${josa(e.name, "은/는")} ${c.residents}에게 ${josa(`지역 플랫폼${note ? `(${note})` : ""}`, "으로/로")} 서비스를 제공합니다`;
  if (status === "partial") return `${josa(e.name, "은/는")} ${place}에서 이용을 일부 제한합니다`;
  return `${josa(e.name, "은/는")} ${josa(c.name, "을/를")} 제한 국가 목록에 올리지 않았습니다`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("ko").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. 국가 목록은 바뀔 수 있으며, 목록에 없는 국가라고 해서 그곳에서 모든 상품이 제공된다는 보장은 없습니다 – 최종 기준은 각 거래소의 약관입니다.`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key) ? "두 거래소 모두 제공" : has(a, key) ? `${a.name}만 제공` : has(b, key) ? `${b.name}만 제공` : "두 거래소 사이트 모두에서 찾지 못함";
  const aOrB = `${josa(a.name, "과/와")} ${b.name} 중`;
  const noTokenDiscount = "이런 할인은 공개되어 있지 않습니다.";
  const noFund = "보호 기금은 명시되어 있지 않습니다.";
  const noMica = "자체 페이지에 MiCA 인가 법인을 밝히지 않음";

  const verdict: Faq[] = [
    { q: `${aOrB} 어디가 더 나을까요?`, a: versusAnswer(a, b, s) },
    {
      q: `${josa(a.name, "과/와")} ${b.name}의 가장 큰 차이는 무엇인가요?`,
      a: `${ia.pick}. ${ib.pick}.${aheadA.length ? ` 수치로 확인되는 ${a.name}의 가장 뚜렷한 우위: ${aheadA.slice(0, 2).join("; ")}.` : ""}${aheadB.length ? ` ${b.name}의 우위: ${aheadB.slice(0, 2).join("; ")}.` : ""}`,
    },
    {
      q: `${josa(a.name, "이/가")} ${b.name}보다 규모가 큰가요?`,
      a: `CoinMarketCap 파생상품 순위(${marketDate})에서 ${josa(a.name, "은/는")} 미결제약정 ${josa(formatBn(a.market.openInterestBn), "과/와")} 24시간 거래량 ${josa(formatBn(a.market.volume24hBn), "을/를")} 기록했고, ${josa(b.name, "은/는")} ${josa(formatBn(b.market.openInterestBn), "과/와")} ${josa(formatBn(b.market.volume24hBn), "을/를")} 기록했습니다. 각 거래소가 밝힌 수치로는 ${josa(a.name, "이/가")} ${withoutSource(a.users)}, ${josa(b.name, "이/가")} ${withoutSource(b.users)}입니다.`,
    },
    {
      q: `초보자에게는 ${aOrB} 어디가 더 나을까요?`,
      a: `첫 계정을 만들 때는 세 가지가 중요합니다. 암호화폐를 쉽게 살 수 있는 방법, 연습할 수 있는 환경, 낮은 수수료입니다. 카드·은행 송금으로 구매: ${state("fiat")}. 모의 거래: ${state("demoTrading")}. 카피 트레이딩: ${state("copyTrading")}. ${feeSentence(a, b, "spot")} 본인 인증 – ${a.name}: ${a.signup.kycShort}; ${b.name}: ${b.signup.kycShort}.`,
    },
    {
      q: `선물 거래에는 ${aOrB} 어디가 더 나을까요?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${aOrB} 수수료가 더 낮은 곳은 어디인가요?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} 모두 기본(VIP 미적용) 요율이며, VIP 등급과 거래소 토큰을 이용하면 더 낮아집니다.`,
    },
    {
      q: `${josa(a.name, "과/와")} ${josa(b.name, "은/는")} 자체 토큰으로 수수료를 내면 할인해 주나요?`,
      a: `${a.name}: ${a.tokenDiscount || noTokenDiscount} ${b.name}: ${b.tokenDiscount || noTokenDiscount}`,
    },
    { q: `${aOrB} 레버리지가 더 높은 곳은 어디인가요?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${aOrB} 상장 코인이 더 많은 곳은 어디인가요?`,
      a: `각 거래소가 밝힌 수치로는 ${a.name}에는 ${withoutSource(a.assets)}, ${b.name}에는 ${josa(withoutSource(b.assets), "이/가")} 있습니다. 거래소마다 세는 방식이 달라 코인 수를 세는 곳도 있고 거래쌍 수를 세는 곳도 있으므로, 두 수치를 그대로 비교할 수는 없습니다.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({
      q: `${c.name}에서 ${josa(a.name, "이나/나")} ${josa(b.name, "을/를")} 이용할 수 있나요?`,
      a: countryPairAnswer(a, b, c),
    })),
    {
      q: `${josa(a.name, "과/와")} ${b.name}에서는 KYC가 필수인가요?`,
      a: `예, 두 거래소 모두 신규 사용자에게 본인 인증을 요구합니다. ${a.name}: ${a.signup.kycShort}. ${b.name}: ${b.signup.kycShort}. 인증 없이 거래하려는 경우에는 둘 다 선택지가 될 수 없습니다.`,
    },
    {
      q: `${aOrB} 어디가 더 안전한가요?`,
      a: `위험이 전혀 없는 중앙화 거래소는 없으므로, 공정하게 비교할 수 있는 것은 각 거래소가 스스로 공개한 내용입니다. ${a.name}: ${a.regulation}. 준비금 증명 – ${ia.reserves}. ${ia.fund ? `${ia.fund}.` : noFund} ${b.name}: ${b.regulation}. 준비금 증명 – ${ib.reserves}. ${ib.fund ? `${ib.fund}.` : noFund} 어느 거래소든 실제로 거래에 쓰는 자금만 보관하세요.`,
    },
    {
      q: `${josa(a.name, "과/와")} ${josa(b.name, "은/는")} EU에서 MiCA 인가를 받았나요?`,
      a: `${a.name}: ${ia.mica ? `예 – ${ia.mica}` : noMica}. ${b.name}: ${ib.mica ? `예 – ${ib.mica}` : noMica}. ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `비교한 상품 ${featureList.length}개 가운데에는 없습니다. ${josa(x.name, "이/가")} 공식 사이트에서 안내하는 상품은 모두 ${y.name}도 안내하고 있습니다.`;
  const products: Faq[] = [
    { q: `${b.name}에는 없고 ${a.name}에만 있는 상품은 무엇인가요?`, a: onlyA || nothing(a, b) },
    { q: `${a.name}에는 없고 ${b.name}에만 있는 상품은 무엇인가요?`, a: onlyB || nothing(b, a) },
    {
      q: `${josa(a.name, "과/와")} ${b.name}에서 카피 트레이딩, 트레이딩 봇, 옵션, 모의 거래를 이용할 수 있나요?`,
      a: `카피 트레이딩: ${state("copyTrading")}. 트레이딩 봇: ${state("tradingBots")}. 옵션: ${state("options")}. 모의 거래: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` 한 거래소만 적힌 항목은 ${prettyDate(site.lastReviewed)}에 다른 거래소의 공식 사이트에서 해당 상품 페이지를 찾지 못한 경우입니다.` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `${josa(a.name, "과/와")} ${b.name}의 추천인 코드는 무엇인가요?`,
      a: `${a.name}: ${a.referralCode} – ${a.referral.whereShort}. ${b.name}: ${b.referralCode} – ${b.referral.whereShort}. 두 코드 모두 무료로 쓸 수 있으며 거래 수수료가 올라가지 않습니다.`,
    },
    {
      q: `${aOrB} 가입 보너스가 더 좋은 곳은 어디인가요?`,
      a: `${a.name}: ${offer(a)}. ${b.name}: ${offer(b)}. 두 거래소 모두 웰컴 보상에는 본인 인증, 입금, 거래량 같은 조건이 붙어 있고 국가마다 내용이 다르므로, 광고에 나온 최대 금액이 아니라 조건을 비교하세요.`,
    },
    {
      q: `${josa(a.name, "이나/나")} ${b.name}에서 레퍼럴 코드를 나중에 추가할 수 있나요?`,
      a: `${a.name}: ${a.referral.afterSignupShort}. ${b.name}: ${b.referral.afterSignupShort}. 두 거래소 모두 ${safeWay}`,
    },
    {
      q: `${josa(a.name, "과/와")} ${josa(b.name, "을/를")} 동시에 이용할 수 있나요?`,
      a: "예. 두 거래소는 별개의 회사이므로 한쪽 계정이 다른 쪽 계정에 영향을 주지 않으며, 두 거래소에 자금을 나눠 두는 트레이더도 많습니다. 수수료 등급, 레퍼럴, 보상은 계정별로 적용되며 다른 거래소로 넘어가지 않습니다.",
    },
    {
      q: `${a.name}에서 ${josa(b.name, "으로/로")} 암호화폐를 옮기려면 어떻게 하나요?`,
      a: `1. 레퍼럴 코드 ${josa(b.referralCode, "으로/로")} ${b.name} 계정을 만들고 본인 인증을 마치세요. 2. ${a.name}에서 열려 있는 선물·마진 포지션을 정리하세요 – 포지션은 거래소 간에 옮길 수 없습니다. 3. ${b.name}에서 보낼 코인과 사용할 네트워크의 입금 주소를 복사하세요. 4. ${a.name}에서 같은 네트워크로 그 주소에 출금하되, 먼저 소액으로 테스트하세요. 네트워크를 잘못 고르면 자산을 잃을 수 있습니다. 반대 방향으로 옮길 때도 순서는 같습니다.`,
    },
  ];

  return [
    { id: "verdict", title: `${aOrB} 어디가 더 나을까?`, faqs: verdict },
    { id: "fees", title: "수수료, 레버리지, 코인", faqs: fees },
    { id: "countries", title: "국가, KYC, 안전성", faqs: countries },
    { id: "products", title: "상품", faqs: products },
    { id: "referral", title: "레퍼럴 코드와 거래소 간 이동", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

/** The hub's quick answer. Each exchange carries its Hangul reading at its first mention in the paragraph. */
const hubAnswer = ({ lowF, hi: top, oi, mica }: HubFacts) => {
  const seen = new Set<string>();
  const named = (list: Exchange[]) => joinList(list.map((e) => (seen.has(e.slug) ? e.name : (seen.add(e.slug), withHangul(e)))));
  const fees = `${josa(named(lowF), "이/가")} 가장 낮고`;
  const leverage = `${josa(named(top), "이/가")} 가장 높으며`;
  const depth = `${josa(named(oi), "이/가")} 가장 깊습니다`;
  const micaNames = josa(named(mica), "은/는");
  return `선물 기본 수수료는 메이커 / 테이커 ${feePair(lowF[0].futuresFees)}인 ${fees}, 레버리지는 ${leverageOf(top[0])}배인 ${leverage}, 파생상품 시장은 미결제약정 ${formatBn(oi[0].market.openInterestBn)}인 ${depth}. ${micaNames} EEA(유럽경제지역) 거주자를 위한 MiCA 인가 플랫폼을 두고 있습니다. 어느 거래소가 더 나은지는 어떤 두 곳 사이에서 고민하느냐에 따라 달라집니다 – 아래에서 비교할 두 거래소를 고르세요.`;
};

function hubFaqs({ all, ranked, lowF, lowS, hi: top, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "수수료가 가장 낮은 암호화폐 거래소는 어디인가요?",
      a: `기본 등급 기준으로 선물 수수료는 ${josa(names(lowF), "이/가")} ${josa(`${feePair(lowF[0].futuresFees)}(메이커 / 테이커)`, "으로/로")} 가장 낮고, 현물 수수료는 ${josa(names(lowS), "이/가")} ${josa(feePair(lowS[0].spotFees), "으로/로")} 가장 낮습니다. 나머지 거래소: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} 선물 ${feePair(e.futuresFees)}, 현물 ${feePair(e.spotFees)}`)
        .join("; ")}. VIP 등급과 거래소 토큰을 이용하면 요율이 더 낮아집니다.`,
    },
    {
      q: "레버리지가 가장 높은 암호화폐 거래소는 어디인가요?",
      a: `${names(top)}: ${top[0].maxLeverage}. 나머지 거래소: ${ranked
        .filter((e) => !top.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}배`)
        .join(", ")}. ${leverageRisk}`,
    },
    {
      q: "선물 시장이 가장 깊은 암호화폐 거래소는 어디인가요?",
      a: `CoinMarketCap 파생상품 순위(${marketDate})의 미결제약정 기준: ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}. 시장이 깊을수록 보통 대량 주문에서 스프레드가 좁습니다.`,
    },
    {
      q: "EEA용 MiCA 인가 플랫폼이 있는 거래소는 어디인가요?",
      a: `${joinList(mica.map((e) => `${e.name}(${altInfo(e).mica})`))}. ${josa(names(noMica), "은/는")} 자체 페이지에 MiCA 인가 법인을 밝히지 않았습니다. ${regionalNote}`,
    },
    {
      q: "가입 후에 레퍼럴 코드를 추가할 수 있는 거래소는 어디인가요?",
      a: `${later.map((e) => `${e.name}: ${e.referral.afterSignupShort}`).join(". ")}. ${names(signupOnly)}에서는 코드가 가입할 때만 인정되거나 나중에 추가하는 방법이 안내되어 있지 않습니다 – 어느 거래소든 ${safeWay}`,
    },
    {
      q: "이 비교는 어떻게 작성되나요?",
      a: `모든 수치는 수수료표, 약관, 제한 국가 목록, 상품 페이지 등 각 거래소의 공식 웹사이트나 고객센터에서 확인했으며, 페이지마다 출처를 밝혀 두었습니다. 미결제약정, 거래량, 파생상품 마켓 수는 CoinMarketCap 파생상품 순위에서 가져왔습니다. 항목별로 어느 거래소가 앞서는지는 이 수치에서 읽어낸 것이며, 자체 순위는 매기지 않습니다. 현재 검토 기준일은 ${date}입니다.`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const ko: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row inside "…가 앞서는 항목은 {topics}입니다" ---- */
  rows: {
    futuresFees: { label: "선물 수수료(메이커 / 테이커)", topic: "선물 수수료" },
    spotFees: { label: "현물 수수료(메이커 / 테이커)", topic: "현물 수수료" },
    leverage: { label: "최대 레버리지", topic: "최대 레버리지" },
    openInterest: { label: "파생상품 미결제약정", topic: "미결제약정" },
    volume: { label: "24시간 파생상품 거래량", topic: "24시간 파생상품 거래량" },
    markets: { label: "파생상품 마켓 수", topic: "파생상품 마켓 수" },
    users: { label: "사용자 수(자체 발표)", topic: "사용자 수" },
    assets: { label: "상장 자산(자체 발표)", topic: "" },
    founded: { label: "설립 연도", topic: "" },
    products: { label: (compared) => `제공 상품(비교 대상 ${compared}개 중)`, topic: "상품 구성" },
    countries: { label: (compared) => `제한 국가(비교 대상 ${compared}개국 중)`, topic: "이용 가능 국가" },
    mica: { label: "MiCA 인가 EEA 플랫폼", topic: "MiCA 인가" },
    kyc: { label: "본인 인증(KYC)", topic: "" },
    addLater: { label: "레퍼럴 코드를 나중에 추가할 수 있나요?", topic: "가입 후 레퍼럴 코드 추가" },
    offer: { label: "신규 가입 혜택", topic: "" },
    reserves: { label: "준비금 증명", topic: "" },
    fund: { label: "보호 기금", topic: "" },
  },
  countOf: (count, of) => `${of}개 중 ${count}개`,
  noMica: "명시 없음",
  noFund: "명시 없음",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    title: (a, b, shortMonthYear) => `${a.name} vs ${b.name} 비교 (${shortMonthYear}): 수수료·레버리지·KYC·보너스`,
    description: (a, b, monthYear) =>
      `${a.name} vs ${b.name}: 선물 수수료 ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, 레버리지 ${leverageOf(a)}배 vs ${leverageOf(b)}배, 상품, 국가, KYC, 레퍼럴 코드까지 – 공식 데이터, ${monthYear} 확인.`,
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${reading(a)} vs ${reading(b)}`,
      `${reading(a)} ${reading(b)} 비교`,
      `${josa(a.name, "과/와")} ${b.name} 중 어디가 나을까`,
      `${a.name} vs ${b.name} 수수료`,
      `${a.name} vs ${b.name} 선물`,
      `${a.name} ${b.name} 비교`,
      `${josa(a.name, "이/가")} ${b.name}보다 나을까`,
      `${josa(b.name, "이/가")} ${a.name}보다 나을까`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "홈",
    crumbHub: "거래소 비교",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${josa(e.name, "은/는")} 예전에 ${josa(formerName, "이라는/라는")} 이름으로 운영되던 거래소입니다.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${josa(withHangul(a), "과/와")} ${josa(withHangul(b), "은/는")} 모두 현물(Spot) 거래와 레버리지 선물(Futures) 거래를 지원하는 중앙화 거래소이며, 둘 다 신규 사용자를 위한 레퍼럴 프로그램을 운영합니다. ${pickA}. ${pickB}.${formerNote ? ` ${formerNote}` : ""} 이 맞대결 비교에서는 두 거래소의 수수료, 레버리지, 상품, 국가별 이용 가능 여부, 본인 인증 규정, 레퍼럴 코드(추천인 코드) 혜택을 나란히 놓고 살펴봅니다 – 모든 수치는 ${date}에 각 거래소 공식 사이트에서 확인했습니다.`,

    toc: {
      "at-a-glance": "한눈에 보기",
      verdict: "어느 쪽을 고를까",
      fees: "수수료",
      leverage: "레버리지·시장 깊이",
      products: "상품",
      countries: "국가",
      kyc: "본인 인증(KYC)",
      safety: "안전성·규제",
      referral: "레퍼럴 코드",
      "pros-cons": "장단점",
      faq: "자주 묻는 질문",
      sources: "출처",
    },
    onThisPage: "목차",

    /* Hero */
    updated: (date) => `확인 및 업데이트: ${date}`,
    h1: (a, b) => `${withHangul(a)} vs ${withHangul(b)} 비교: 수수료, 레버리지, 안전성`,
    quickAnswer: "핵심 요약",
    keyFigures: "주요 수치",
    chips: (a, b, oiA, oiB) => [
      `선물 ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `현물 ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `레버리지 ${leverageOf(a)}배 vs ${leverageOf(b)}배`,
      `미결제약정 ${oiA} vs ${oiB}`,
    ],
    boxTitle: "레퍼럴 코드로 가입하기",
    boxNote: "두 코드 모두 무료이며 수수료가 올라가는 일은 없습니다.",
    codeLabel: (e) => `${e.name} 레퍼럴 코드`,
    boxRisk: () => (
      <>
        레버리지 거래는 위험이 높습니다. 두 거래소 모두 모든 국가에서 이용할 수 있는 것은 아닙니다 – <a href="#countries">국가</a> 항목을 확인하세요.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name} 한눈에 보기`,
    glanceText: (a, b, s) =>
      `${josa(`${a.name} vs ${b.name}`, "으로/로")} 검색하든 ${josa(`${b.name} vs ${a.name}`, "으로/로")} 검색하든 비교 내용은 같습니다. 수치로 가릴 수 있는 ${s.measurable}개 항목 가운데 ${josa(a.name, "이/가")} ${s.a.length}개, ${josa(b.name, "이/가")} ${s.b.length}개 항목에서 ${aheadTail(s)}. 항목마다 중요도는 다릅니다 – 활발하게 거래하는 트레이더에게는 상장 코인이 많은 것보다 수수료가 낮은 것이 더 중요하므로, 자신의 거래 방식에 맞는 항목을 중심으로 보세요.`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: 수수료, 레버리지, 시장 규모, 상품, 국가, 본인 인증, 레퍼럴 규정`,
    compared: "비교 항목",
    ahead: "우위",
    level: "동률",
    glanceNote: (marketDate, date) =>
      `수수료: 기본(VIP 미적용) 등급. 미결제약정, 거래량, 마켓 수: CoinMarketCap 파생상품 순위, ${marketDate}. “–”는 두 값의 우열을 가릴 수 없다는 뜻입니다. 그 밖의 내용은 모두 ${date}에 각 거래소 공식 사이트에서 확인했습니다.`,

    /* Verdict */
    verdictTitle: (a, b) => `${josa(a.name, "과/와")} ${b.name} 중 어느 쪽을 선택해야 할까요?`,
    verdictText:
      "종합 우승자는 없습니다 – 두 거래소는 서로 다른 유형의 트레이더에 맞춰져 있습니다. 아래 두 상자에서 각 거래소가 어떤 사람에게 맞는지, 상대보다 수치상 어디에서 앞서는지 확인하세요.",
    bestFor: (role) => `강점: ${role}`,
    chooseIf: (e) => `다음과 같은 경우 ${josa(e.name, "을/를")} 선택하세요`,
    aheadOf: (e, other) => `${josa(e.name, "이/가")} ${other.name}보다 우위인 점`,
    noAdvantage: "비교한 항목 가운데 수치로 확인되는 우위가 없습니다.",
    thinkTwice: "다음과 같은 경우 한 번 더 생각해 보세요",
    codeButton: (e) => `${e.name} 레퍼럴 코드 ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `수수료: ${a.name} vs ${b.name}`,
    feesModel:
      "두 거래소 모두 메이커/테이커 방식으로 수수료를 매깁니다. 유동성을 공급하는 지정가 주문에는 메이커 수수료가, 유동성을 가져가는 주문에는 테이커 수수료가 부과됩니다.",
    feesCaption: (a, b) => `${josa(a.name, "과/와")} ${b.name}의 현물·선물 기본 수수료`,
    exchange: "거래소",
    futuresMaker: "선물 메이커",
    futuresTaker: "선물 테이커",
    spotMaker: "현물 메이커",
    spotTaker: "현물 테이커",
    otherMarkets: "기타 마켓(메이커 / 테이커)",
    feesNote: (date) => `각 거래소가 공개한 기본(VIP 미적용) 요율이며 ${date}에 확인했습니다. 수수료는 바뀔 수 있으니 거래 전에 거래소에서 직접 확인하세요.`,
    tokenTitle: "토큰 할인과 세부 조건",
    noTokenDiscount: "거래소 토큰으로 수수료를 낼 때 적용되는 할인은 공개되어 있지 않습니다.",

    /* Leverage */
    leverageTitle: "레버리지와 시장 깊이",
    leverageRisk: "레버리지가 높을수록 청산 위험이 크게 높아집니다 – 최대 레버리지는 한도일 뿐 권장 수준이 아닙니다.",
    leverageCaption: (a, b) => `${josa(a.name, "과/와")} ${b.name}의 레버리지와 파생상품 시장 데이터`,
    maxLeverage: "최대 레버리지",
    openInterest: "미결제약정",
    volume24h: "24시간 파생상품 거래량",
    derivativesMarkets: "파생상품 마켓 수",
    listedAssets: "상장 자산(자체 발표)",
    leverageNote: (marketDate) =>
      `시장 데이터: CoinMarketCap 파생상품 순위, ${marketDate}. 상장 자산은 거래소마다 세는 방식이 달라, 코인 수를 세는 곳도 있고 거래쌍 수를 세는 곳도 있습니다.`,

    /* Products */
    productsTitle: (a, b) => `상품: ${josa(a.name, "과/와")} ${b.name}에서 이용할 수 있는 것`,
    productsSame: (compared) => `두 거래소 모두 비교 대상 상품 ${compared}개를 모두 공식 사이트에서 안내하고 있으며, 차이는 세부 내용에 있습니다.`,
    productsLegend: (date) => `체크 표시는 거래소가 공식 사이트에서 해당 상품을 안내한다는 뜻이고, 줄표는 ${date}에 그 사이트에서 해당 상품 페이지를 찾지 못했다는 뜻입니다.`,
    productsCaption: (a, b) => `${josa(a.name, "과/와")} ${b.name}의 제공 상품`,
    product: "상품",
    offered: "제공",
    notOffered: "미제공",
    noPage: "공식 사이트에서 페이지를 찾지 못함",

    /* Countries */
    countriesTitle: (a, b) => `국가: ${josa(a.name, "과/와")} ${josa(b.name, "을/를")} 이용할 수 있는 곳`,
    countriesText: (compared, differing) =>
      `${compared}개국에 대해 각 거래소 약관에 적힌 내용을 정리했습니다. 두 거래소의 상태가 다른 국가는 ${differing}곳입니다. ${josa(`“${ct.statusLabel.regional}”`, "은/는")} 거래소가 상품, 수수료, 한도를 따로 정한 별도 플랫폼으로 해당 국가에 서비스를 제공한다는 뜻입니다.`,
    countriesCaption: (a, b) => `${josa(a.name, "과/와")} ${b.name}의 국가별 이용 가능 여부`,
    country: "국가",
    countriesNote: (date) =>
      `${josa(`“${ct.statusLabel.open}”`, "은/는")} ${date} 기준으로 거래소의 제한 국가 목록에 없다는 뜻일 뿐, 그 국가에서 모든 상품이 제공된다는 보장은 아닙니다. 두 거래소 모두 VPN이나 허위 정보로 제한을 우회하는 것을 금지합니다.`,
    differTitle: "두 거래소의 상태가 다른 국가",
    differQuestion: (a, b, countryName) => `${countryName}에서 ${josa(a.name, "과/와")} ${b.name} 이용 가능 여부는?`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        거주 국가에서 두 거래소를 모두 이용할 수 없나요? 대안 거래소 페이지의 국가별 표에서 해당 국가를 받아 주는 다른 거래소를 확인할 수 있습니다:{" "}
        <Link href={hrefA}>국가별 {a.name} 대안 거래소</Link> · <Link href={hrefB}>국가별 {b.name} 대안 거래소</Link>.
      </>
    ),
    restrictedTitle: "제한 국가와 지역 플랫폼",
    whereNot: (e) => `${josa(e.name, "을/를")} 이용할 수 없는 국가는 어디인가요?`,
    regionalPlatforms: "지역 플랫폼:",

    /* Verification */
    kycTitle: (a, b) => `본인 인증: ${a.name} vs ${b.name}`,
    kycText:
      "두 거래소 모두 신규 사용자에게 본인 인증을 요구하므로, KYC 없이 거래하려는 경우에는 둘 다 선택지가 되지 않습니다. 차이는 인증하지 않은 계정으로 무엇까지 할 수 있는지, 인증 절차가 어떻게 진행되는지에 있습니다.",
    documents: "필요 서류:",
    minAge: "최소 연령:",
    howToRegister: (e) => `${e.name} 가입과 본인 인증 방법 단계별 안내`,

    /* Safety */
    safetyTitle: (a, b) => `안전성과 규제: ${a.name} vs ${b.name}`,
    safetyText:
      "위험이 전혀 없는 중앙화 거래소는 없습니다. 비교할 수 있는 것은 각 거래소가 스스로 공개한 내용입니다. 어디에서 라이선스를 받았는지, 준비금을 증명하는지, 비상 상황에 대비한 기금을 두고 있는지입니다.",
    safetyCaption: (a, b) => `${josa(a.name, "과/와")} ${b.name}의 규제, 준비금 증명, 보호 기금`,
    licences: "거래소가 밝힌 라이선스",
    entity: "운영 법인",
    reserves: "준비금 증명",
    fund: "보호 기금",
    founded: "설립 연도",
    isSafe: (e) => `${josa(e.name, "은/는")} 안전한가요?`,
    safetyDetail: (e) => `${e.name} 안전성과 이용 가능 국가 자세히 보기`,

    /* Referral codes */
    referralTitle: (a, b) => `레퍼럴 코드와 신규 가입 혜택: ${a.name} vs ${b.name}`,
    referralText:
      "어느 거래소를 고르든 레퍼럴 코드를 입력하고 가입하세요. 비용이 들지 않고, 수수료가 올라가는 일도 없으며, 거래소의 신규 가입 혜택을 받을 수 있습니다. 마지막 행을 꼭 확인하세요 – 빠뜨린 코드를 나중에 언제나 추가할 수 있는 것은 아닙니다.",
    referralCaption: (a, b) => `${josa(a.name, "과/와")} ${b.name}의 레퍼럴 코드와 신규 가입 혜택`,
    referralCodeOf: (e) => `${e.name} 레퍼럴 코드`,
    referralCode: "레퍼럴 코드",
    newUserOffer: "신규 가입 혜택",
    inviteeReward: "초대받은 사용자로서 받는 혜택",
    covers: "레퍼럴 하나로 적용되는 범위",
    whereCode: "코드 입력 위치",
    addLater: "나중에 추가할 수 있나요?",
    referralNote: (date) => `혜택은 ${date}에 확인했습니다. 웰컴 보상은 미션을 완료해야 받을 수 있고, 본인 인증이 필요하며, 국가마다 다릅니다.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `${josa(a.name, "과/와")} ${b.name}의 장단점`,
    pros: "장점",
    cons: "단점",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – 자주 묻는 질문`,
    faqText: (count, a, b) =>
      `${josa(a.name, "과/와")} ${b.name} 사이의 선택에 관한 질문 ${count}개입니다. 수수료, 레버리지, 국가, 본인 인증, 상품, 레퍼럴 코드를 다룹니다.`,

    /* Sources */
    sourcesTitle: "출처: 수치를 확인한 곳",
    sourcesText: (date, marketDate) =>
      `이 페이지에 실린 수수료, 레버리지, 상품, 본인 인증, 국가, 라이선스, 준비금, 레퍼럴 규정에 관한 내용은 모두 ${date}에 두 거래소의 공식 웹사이트와 고객센터에서 확인했습니다. 미결제약정, 거래량, 파생상품 마켓 수는 CoinMarketCap 파생상품 순위(${marketDate})에서 가져왔습니다. 거래소는 예고 없이 약관을 바꾸므로 최종 기준은 아래 페이지들입니다.`,
    officialPages: (e, count) => `${e.name}: 공식 페이지 ${count}개`,

    /* More comparisons */
    moreTitle: "더 많은 거래소 비교",
    against: (e) => `${josa(e.name, "과/와")} 다른 거래소의 맞대결 비교`,
    allAlternatives: (e) => `${e.name} 대안 거래소 전체`,
    allComparisons: "모든 거래소 비교",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>위험 고지:</strong> 암호화폐 파생상품은 복잡한 금융 상품입니다. 레버리지는 수익과 손실을 모두 키우며, 몇 분 사이에 마진 전액을 잃을 수
        있습니다. 이 페이지는 정보 제공만을 목적으로 하며 금융 조언이 아닙니다. 저희 링크를 통해 가입하면 저희가 커미션을 받을 수 있습니다 –{" "}
        <Link href={disclosureHref}>제휴 고지</Link>를 확인하세요. 그렇다고 수치가 달라지지는 않습니다. 수치는 모두 거래소가 직접 공개한 것입니다.
      </>
    ),
    ctaTitle: (a, b) => `${a.name} 또는 ${b.name}? 레퍼럴 코드로 시작하세요`,
    ctaText: "어느 거래소든 계정 하나로 현물과 선물을 모두 거래할 수 있으며, 추가 비용은 없습니다.",
    ctaButton: "다른 거래소도 비교하기",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) => `암호화폐 거래소 비교 (${shortMonthYear}): 맞대결 비교 ${pairs}개`,
    description: (exchangeNames, pairs, monthYear) =>
      `${josa(exchangeNames, "을/를")} 두 곳씩 묶어 수수료, 레버리지, 국가, KYC, 레퍼럴 코드를 비교한 맞대결 비교 ${pairs}개 – 공식 데이터, ${monthYear} 확인.`,
    crumbHome: "홈",
    crumbPage: "거래소 비교",
    listName: "암호화폐 거래소 맞대결 비교",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `확인 및 업데이트: ${date}`,
    h1: (pairs) => `암호화폐 거래소 비교: 맞대결 비교 ${pairs}개`,
    lead: (exchangeCount) =>
      `거래소 ${exchangeCount}곳의 모든 조합을 같은 항목으로 비교했습니다. 수수료, 레버리지, 시장 깊이, 상품, 국가별 이용 가능 여부, 본인 인증, 규제, 레퍼럴 혜택입니다. 비교마다 각 거래소 공식 사이트의 수치를 사용했습니다.`,
    quickAnswer: "핵심 요약",

    pickTitle: "비교할 거래소 두 곳을 고르세요",
    pickText: (others) =>
      `상자마다 거래소 하나를 나머지 ${others}곳과 맞붙인 비교가 모여 있습니다. 조합마다 페이지는 하나뿐이어서 “Binance vs OKX”와 “OKX vs Binance”는 같은 비교로 연결됩니다.`,
    alternativesOf: (e) => `${e.name} 대안 거래소`,
    referralCodeOf: (e) => `${e.name} 레퍼럴 코드`,

    tableTitle: (exchangeCount) => `거래소 ${exchangeCount}곳 전체 나란히 보기`,
    tableText: "모든 거래소의 신규 가입 혜택, 기본(VIP 미적용) 수수료, 레버리지, 시장 깊이를 표 하나에 담았습니다.",
    tableNote: (date, marketDate) => `수수료: 각 거래소가 공개한 기본 등급, ${date} 확인. 미결제약정과 마켓 수: CoinMarketCap, ${marketDate}.`,

    alternativesTitle: "거래소 하나를 나머지 모두와 비교",
    alternativesText: (others) =>
      `두 곳 중에서 고르는 것이 아니라 대신할 거래소를 찾고 있나요? 대안 거래소 페이지는 거래소 하나를 나머지 ${others}곳과 한꺼번에 비교하고, 그중 어느 곳을 거주 국가에서 이용할 수 있는지 보여 줍니다.`,

    faqTitle: "거래소 비교 – 자주 묻는 질문",

    ctaTitle: "결정하셨나요? 레퍼럴 코드로 가입하세요",
    ctaText: (exchangeCount) => `거래소 ${exchangeCount}곳 전체의 검증된 코드 – 계정 하나로 현물과 선물을 거래할 수 있고 추가 비용은 없습니다.`,
    ctaButton: "모든 레퍼럴 코드 보기",
  },
};
