/**
 * The sentences of the comparison pages in Korean. Same functions and the same logic as `./en.ts`, written in
 * Korean grammar (SOV, 합니다체).
 *
 * Wording: "거래소", "대안 거래소", "레퍼럴 코드", "수수료", "메이커 / 테이커", "본인 인증". Exchange names stay in Latin
 * letters; the Hangul reading is added only in the opening text (`quickAnswer`). Particles after an exchange name, a
 * country name or an inserted data text always come from `josa()` ("Binance는" but "Bitget은"). Where a note in
 * brackets follows a name ("OKX (OKX Europe)"), the particle follows the name itself (`namesJosa`, `withNoteJosa`).
 * Country names stand alone in `name` ("미국"); the sentences add "에서" / "을/를" themselves; `residents` is
 * "미국 거주자". Fee rates come from the data (0.02%); leverage reads "150배".
 * Hangul has no capital letters, and data texts that start with a Latin name must keep it, so inserted data
 * texts are never changed – except that the leading "예 – " of `afterSignupShort` is dropped where English drops
 * "Yes – ". Data texts without a final period (pick, reserves, fund, mica …) get one where they end a sentence.
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee, Step } from "@/data/exchanges";
import { countryList, featureList } from "@/data/alternatives";
import type { CountryKey, CountryStatus, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import {
  addLater,
  altInfo as altInfoIn,
  alternativesTo as alternativesIn,
  cheaper,
  countryGroups,
  feePair,
  highestLeverage,
  largestOpenInterest,
  leverageOf,
  lowestFutures,
  lowestSpot,
  pct,
  withFeature,
  withMica,
} from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import { finalSound, josa, withHangul } from "../ko-josa";
import type { AltFaqGroup, CompareText } from "./en";

const locale = "ko";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const count = (n: number) => n.toLocaleString("ko-KR");

/* --------------------------------- particles -------------------------------- */

/** "OKX, Bybit, MEXC는" – the particle follows the last name of the list. */
const namesJosa = (list: Exchange[], pair: string) => josa(names(list), pair, finalSound(list[list.length - 1].name));
/** A list whose items carry notes in brackets ("OKX (OKX Europe), Bitget은") – the particle follows the last name. */
const withNoteJosa = (items: string[], list: Exchange[], pair: string) => josa(joinList(items), pair, finalSound(list[list.length - 1].name));

/* --------------------------------- endings --------------------------------- */

/** Ends a data text with a full stop unless it already ends a sentence. */
const stop = (s: string) => (/[.!?]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** The `pick` lines of several exchanges as consecutive sentences ("…합니다. …합니다."). */
const picks = (list: Exchange[]) => list.map((a) => stop(altInfo(a).pick)).join(" ");
/** `afterSignupShort` without its leading "예 – ". */
const withoutYes = (s: string) => s.replace(/^예\s*–\s*/, "");

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` for sentences ("카피 트레이딩을 제공합니다"). */
const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "카피 트레이딩", noun: "카피 트레이딩" },
  tradingBots: { label: "트레이딩 봇", noun: "트레이딩 봇" },
  options: { label: "옵션", noun: "옵션 거래" },
  demoTrading: { label: "모의 거래", noun: "모의 거래" },
  margin: { label: "현물 마진", noun: "현물 마진 거래" },
  p2p: { label: "P2P 거래", noun: "P2P 거래" },
  fiat: { label: "카드·은행 송금 구매", noun: "카드나 은행 송금을 통한 암호화폐 구매" },
  earn: { label: "Earn / 스테이킹", noun: "Earn 상품" },
  launchpad: { label: "Launchpad / Launchpool", noun: "Launchpad" },
  web3Wallet: { label: "Web3 지갑", noun: "셀프 커스터디 Web3 지갑" },
  card: { label: "암호화폐 카드", noun: "암호화폐 카드" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** The country names of the Korean pages; tables and sentences use the same name. */
const countryNames: Record<CountryKey, string> = {
  us: "미국",
  uk: "영국",
  ca: "캐나다",
  de: "독일",
  fr: "프랑스",
  nl: "네덜란드",
  es: "스페인",
  it: "이탈리아",
  au: "호주",
  jp: "일본",
  sg: "싱가포르",
  hk: "홍콩",
  in: "인도",
  ae: "아랍에미리트(UAE)",
};
/** `residents` ("미국 거주자") takes "에게" in the sentences. */
const countries = countryList.map((c) => ({ key: c.key, name: countryNames[c.key], short: countryNames[c.key], residents: `${countryNames[c.key]} 거주자` }));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "제한",
  regional: "지역 사이트",
  partial: "일부 제한",
  open: "제한 없음",
};

/** The market of a fee comparison. */
const marketName = (market: "spot" | "futures") => (market === "spot" ? "현물" : "무기한 선물");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketName(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0)
    return `${josa(a.name, "과/와")} ${x.name}의 ${label} 기본 수수료는 메이커 ${fa.maker} / 테이커 ${josa(fa.taker, "으로/로")} 같습니다.`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `메이커와 테이커 모두 ${josa(who, "이/가")} 더 저렴합니다`
      : mm !== 0
        ? `메이커는 ${josa(who, "이/가")} 더 저렴하고 테이커 수수료는 같습니다`
        : `테이커는 ${josa(who, "이/가")} 더 저렴하고 메이커 수수료는 같습니다`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `메이커는 ${josa(a.name, "이/가")}, 테이커는 ${josa(x.name, "이/가")} 더 저렴합니다`
          : `메이커는 ${josa(x.name, "이/가")}, 테이커는 ${josa(a.name, "이/가")} 더 저렴합니다`;
  return `${label} 수수료는 ${josa(a.name, "이/가")} 메이커 ${fa.maker} / 테이커 ${fa.taker}, ${josa(x.name, "이/가")} ${fx.maker} / ${josa(fx.taker, "으로/로")} ${verdict}.`;
}

/** Which alternatives are cheaper than, level with or more expensive than `x` on one market (standard tier). */
function feeSummary(x: Exchange, alts: Exchange[], market: "spot" | "futures"): string {
  const fee = (e: Exchange) => (market === "spot" ? e.spotFees : e.futuresFees);
  const fx = fee(x);
  const diff = (a: Exchange) => [Math.sign(pct(fee(a).maker) - pct(fx.maker)), Math.sign(pct(fee(a).taker) - pct(fx.taker))];
  const same = alts.filter((a) => diff(a).every((d) => d === 0));
  const lower = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d <= 0));
  const higher = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d >= 0));
  const mixed = alts.filter((a) => !same.includes(a) && !lower.includes(a) && !higher.includes(a));
  const rates = (list: Exchange[]) => joinList(list.map((a) => `${a.name} (${feePair(fee(a))})`));
  return [
    `${marketName(market)}에서 ${x.name}의 수수료는 ${feePair(fx)} (메이커 / 테이커)입니다.`,
    lower.length ? `더 저렴한 곳: ${rates(lower)}.` : `대안 거래소 ${alts.length}곳 가운데 더 저렴한 곳은 없습니다.`,
    same.length ? `수수료가 같은 곳: ${names(same)}.` : "",
    higher.length ? `더 비싼 곳: ${rates(higher)}.` : "",
    mixed.length ? `메이커나 테이커 한쪽만 더 저렴한 곳: ${rates(mixed)}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (label: string, fa: Fee, fx: Fee) => {
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`더 낮은 ${label} 수수료: ${feePair(fx)} 대신 ${feePair(fa)} (메이커 / 테이커)`);
    else if (m < 0 && t === 0) out.push(`더 낮은 ${label} 메이커 수수료: ${fx.maker} 대신 ${fa.maker}`);
    else if (t < 0 && m === 0) out.push(`더 낮은 ${label} 테이커 수수료: ${fx.taker} 대신 ${fa.taker}`);
    else if (m < 0) out.push(`더 낮은 ${label} 메이커 수수료: ${fx.maker} 대신 ${fa.maker} (테이커 수수료는 더 높음)`);
    else if (t < 0) out.push(`더 낮은 ${label} 테이커 수수료: ${fx.taker} 대신 ${fa.taker} (메이커 수수료는 더 높음)`);
  };
  fee("현물", a.spotFees, x.spotFees);
  fee("선물", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`더 높은 최대 레버리지: ${leverageOf(x)}배 대신 ${leverageOf(a)}배`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`더 큰 파생상품 미결제약정: ${formatBn(a.market.openInterestBn)} 대 ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`더 많은 파생상품 마켓: ${count(a.market.markets)}개 대 ${count(x.market.markets)}개`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`빠뜨린 레퍼럴 코드도 나중에 추가 가능 (${withoutYes(a.referral.afterSignupShort)})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`${joinList(notOffered.map((f) => f.noun))} 제공 – ${josa(x.name, "은/는")} 제공하지 않음`);
  if (notFound.length) out.push(`${joinList(notFound.map((f) => f.noun))} 제공 – ${x.name} 공식 사이트에서는 이런 상품을 찾지 못함`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`MiCA 인가를 받은 EEA(유럽경제지역) 플랫폼 (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`${josa(x.name, "을/를")} 이용할 수 없는 ${joinList(openWhere.map((c) => c.name))}에서 제한 없음`);
  if (regionalWhere.length)
    out.push(`${josa(x.name, "을/를")} 이용할 수 없는 ${joinList(regionalWhere.map((c) => c.name))}에서 지역 플랫폼으로 서비스 제공`);
  return out;
}

/* ---------------------------------- country --------------------------------- */

/** Plain-text answer to "Which alternatives to x can be used in this country?". */
function countryAnswer(x: Exchange, alts: Exchange[], country: (typeof countryList)[number]): string {
  const c = countries.find((it) => it.key === country.key)!;
  const own = altInfo(x).countries[c.key];
  const g = countryGroups(alts, c.key);
  const note = (a: Exchange) => altInfo(a).countries[c.key].note;
  const withNote = (list: Exchange[]) => list.map((a) => (note(a) ? `${a.name} (${note(a)})` : a.name));
  const ownNote = own.note ? ` (${own.note})` : "";
  const parts: string[] = [];
  if (own.status === "restricted") parts.push(`${josa(x.name, "은/는")} 자체 제한 국가 목록에 ${josa(c.name, "을/를")} 올려 두고 있습니다.`);
  else if (own.status === "partial") parts.push(`${josa(x.name, "은/는")} ${c.name}에서 서비스를 일부 제한합니다${ownNote}.`);
  else if (own.status === "regional")
    parts.push(`${josa(x.name, "은/는")} ${c.residents}에게 ${josa(`지역 플랫폼${own.note ? `(${own.note})` : ""}`, "으로/로")} 서비스를 제공합니다.`);
  else parts.push(`${josa(x.name, "은/는")} ${josa(c.name, "을/를")} 제한 국가 목록에 올리지 않았습니다.`);
  if (g.open.length) parts.push(`${namesJosa(g.open, "은/는")} ${josa(c.name, "을/를")} 제한 국가 목록에 올리지 않았습니다.`);
  if (g.regional.length)
    parts.push(`${withNoteJosa(withNote(g.regional), g.regional, "은/는")} ${c.residents}에게 별도의 지역 플랫폼으로 서비스를 제공합니다.`);
  if (g.partial.length) parts.push(`일부 제한: ${withNote(g.partial).join("; ")}.`);
  if (g.restricted.length)
    parts.push(
      `${own.status === "restricted" ? `${names(g.restricted)}도` : namesJosa(g.restricted, "은/는")} ${josa(c.name, "을/를")} 제한 국가로 두고 있습니다.`,
    );
  if (!g.open.length && !g.regional.length) parts.push(`대안 거래소 ${alts.length}곳 가운데 ${c.residents}에게 제한 없이 열려 있는 곳은 없습니다.`);
  parts.push("국가 목록은 바뀌며, 목록에 없는 국가라고 해서 그곳에서 모든 상품이 제공된다는 보장은 없습니다. 기준은 각 거래소의 약관입니다.");
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `여기서 비교하는 ${withHangul(x)} 대안 거래소 ${alts.length}곳은 ${names(alts)}입니다. ${picks(alts)} ${alts.length}곳 모두 신규 사용자에게 본인 인증(KYC)을 요구하고 거래소마다 제한 국가 목록이 따로 있으니, 가입하기 전에 국가별 표를 확인하세요.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `${x.name}보다 무엇이 나아야 하는지 정하세요`,
      text: `더 낮은 수수료, 더 높은 레버리지, 더 많은 코인, 또는 단순히 거주 국가에서 가입할 수 있는 거래소: 이 페이지의 표를 보면 각 대안 거래소가 어떤 점에서 ${x.name}보다 앞서고 어떤 점에서 그렇지 않은지 알 수 있습니다.`,
    },
    {
      title: "거래소가 거주 국가를 지원하는지 확인하세요",
      text: "거래소마다 제한 국가 목록이 따로 있으며, 일부 거래소는 상품과 한도가 다른 지역 플랫폼으로 안내합니다. 가입하기 전에 국가별 표를 확인하세요.",
    },
    {
      title: "레퍼럴 링크로 가입하세요",
      text: `${namesJosa(signupOnly, "은/는")} 가입할 때만 레퍼럴 코드를 받거나 나중에 추가하는 방법을 안내하지 않으므로, 계정을 만들기 전에 링크를 이용하세요.${later.length ? ` ${names(later)}에서는 조건에 따라 나중에 추가할 수 있습니다.` : ""}`,
    },
    {
      title: "자금을 옮기기 전에 본인 인증을 마치세요",
      text: `대안 거래소 ${alts.length}곳 모두 신규 사용자에게 본인 인증을 요구하며, 대부분은 인증을 마칠 때까지 입금이나 거래가 막혀 있습니다. 여권, 신분증 또는 운전면허증을 준비해 두세요.`,
    },
    {
      title: `${x.name}에서 보유 중인 포지션을 정리하세요`,
      text: `선물·마진 포지션은 거래소 간에 옮길 수 없습니다. 먼저 ${x.name}에서 정리하거나, 포지션이 끝날 때까지 계정을 유지하세요.`,
    },
    {
      title: "새 입금 주소로 출금하세요",
      text: "새 거래소에서 입금 주소를 복사하고, 양쪽에서 같은 코인과 같은 네트워크를 선택한 뒤 먼저 소액을 테스트로 보내 보세요. 잘못된 네트워크로 보낸 자산은 잃어버릴 수 있습니다.",
    },
    {
      title: `${x.name} 계정을 어떻게 할지 정하세요`,
      text: `계정은 그대로 유지해도 됩니다. 거래소별 계정은 서로 독립적입니다. 수수료 등급, 레퍼럴 연결, 사용하지 않은 보상은 ${x.name}에 남으며 새 거래소로 넘어가지 않습니다.`,
    },
  ];
}

/** All questions an alternatives page answers, grouped for display. Answers are built from the data files. */
function buildAlternativesFaqs(x: Exchange, alts: Exchange[]): AltFaqGroup[] {
  const n = alts.length;
  const date = prettyDate(site.lastReviewed);
  const lowF = lowestFutures(alts);
  const lowS = lowestSpot(alts);
  const highest = highestLeverage(alts);
  const oi = largestOpenInterest(alts);
  const cheaperF = alts.filter((a) => cheaper(a.futuresFees, x.futuresFees));
  const cheaperS = alts.filter((a) => cheaper(a.spotFees, x.spotFees));
  const mica = withMica(alts);
  const noMica = alts.filter((a) => !altInfo(a).mica);
  const xInfo = altInfo(x);

  const choosing: Faq[] = [
    {
      q: `가장 좋은 ${x.name} 대안 거래소는 어디인가요?`,
      a: `누구에게나 가장 좋은 ${x.name} 대안 거래소가 따로 있지는 않습니다. 왜 옮기려 하는지에 따라 달라집니다. ${picks(alts)} 이 페이지에서는 ${n}곳 모두를 수수료, 레버리지, 상품, 국가별 이용 가능 여부, 본인 인증을 기준으로 ${josa(x.name, "과/와")} 비교하며, 수치는 각 거래소 공식 사이트에서 가져와 ${date}에 확인했습니다.`,
    },
    {
      q: `${josa(x.name, "과/와")} 비슷한 거래소에는 어떤 곳이 있나요?`,
      a: `가장 가까운 거래소는 ${names(alts)}입니다. 이들도 ${josa(x.name, "과/와")} 마찬가지로 하나의 계정에서 현물과 레버리지 선물을 거래할 수 있는 중앙화 거래소이며, 신규 사용자를 위한 레퍼럴 프로그램을 운영합니다. 차이는 수수료, 최대 레버리지, 상장 자산 수, 그리고 가입을 받는 국가에 있습니다.`,
    },
    {
      q: `가장 큰 ${x.name} 대안 거래소는 어디인가요?`,
      a: `CoinMarketCap의 파생상품 미결제약정(${prettyDate(site.marketDataDate)} 기준)으로 보면 대안 거래소 ${n}곳 가운데 ${namesJosa(oi, "이/가")} ${josa(formatBn(oi[0].market.openInterestBn), "으로/로")} 가장 큽니다. ${x.name}의 미결제약정은 ${josa(formatBn(x.market.openInterestBn), "이었습니다/였습니다")}.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `수수료가 가장 낮은 ${x.name} 대안 거래소는 어디인가요?`,
      a: `${n}곳 가운데 선물 기본 수수료가 가장 낮은 곳은 ${namesJosa(lowF, "으로/로")}, ${feePair(lowF[0].futuresFees)} (메이커 / 테이커)입니다. 현물에서는 ${namesJosa(lowS, "이/가")} ${josa(feePair(lowS[0].spotFees), "으로/로")} 가장 저렴합니다. ${x.name}의 수수료는 선물 ${feePair(x.futuresFees)}, 현물 ${feePair(x.spotFees)}입니다.${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} 모두 기본 등급 요율이며, VIP 등급과 거래소 자체 토큰을 이용하면 더 낮아집니다.`,
    },
    {
      q: `${x.name}보다 수수료가 저렴한 거래소는 어디인가요?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `무기한 선물에서는 ${withNoteJosa(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`), cheaperF, "이/가")} ${x.name}의 ${feePair(x.futuresFees)}보다 저렴합니다.` : `무기한 선물에서는 대안 거래소 ${n}곳 가운데 ${x.name}의 ${feePair(x.futuresFees)}보다 저렴한 곳이 없습니다.`} ${cheaperS.length ? `현물에서는 ${withNoteJosa(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`), cheaperS, "이/가")} ${x.name}의 ${feePair(x.spotFees)}보다 저렴합니다.` : `현물에서는 ${x.name}의 ${feePair(x.spotFees)}보다 저렴한 곳이 없습니다.`} 모든 수치는 기본 등급의 메이커 / 테이커 수수료입니다.`
          : `기본 등급에서 ${x.name}보다 저렴한 곳은 대안 거래소 ${n}곳 가운데 없습니다. ${x.name}의 수수료는 선물 ${feePair(x.futuresFees)}, 현물 ${josa(`${feePair(x.spotFees)} (메이커 / 테이커)`, "으로/로")} 이 비교에서 가장 낮습니다. 그래도 규제, 상품, 가입을 받는 국가처럼 다른 이유로 대안 거래소를 살펴볼 만합니다.`,
    },
    {
      q: `레버리지가 가장 높은 ${x.name} 대안 거래소는 어디인가요?`,
      a: `${n}곳 가운데 레버리지가 가장 높은 곳은 ${namesJosa(highest, "으로/로")}, ${highest[0].maxLeverage}입니다. 나머지는 ${alts
        .filter((a) => !highest.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}배`)
        .join(", ")}입니다. ${x.name}의 레버리지는 ${x.maxLeverage}입니다. 높은 레버리지는 청산 위험을 크게 높입니다.`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `${c.name}에서 이용할 수 있는 ${x.name} 대안 거래소는 어디인가요?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `KYC 없는 ${x.name} 대안 거래소가 있나요?`,
      a: `이 ${n}곳 중에는 없습니다. 모두 신규 사용자에게 본인 인증을 요구합니다: ${alts.map((a) => `${a.name} – ${a.signup.kycShort}`).join("; ")}. ${x.name}의 경우: ${stop(x.signup.kycShort)}`,
    },
    {
      q: `EU에서 MiCA에 따라 규제받는 ${x.name} 대안 거래소는 어디인가요?`,
      a: `${mica.length ? `${withNoteJosa(mica.map((a) => `${a.name} (${altInfo(a).mica})`), mica, "은/는")} EEA(유럽경제지역) 거주자를 위한 MiCA 인가 법인을 명시하고 있습니다.` : `대안 거래소 ${n}곳 가운데 MiCA 인가 법인을 명시한 곳은 없습니다.`}${noMica.length ? ` ${namesJosa(noMica, "은/는")} 자사 페이지에 MiCA 인가를 명시하지 않습니다.` : ""} ${xInfo.mica ? `${x.name}의 경우: ${stop(xInfo.mica)}` : `${x.name}의 경우 MiCA 인가 법인을 명시하지 않습니다.`} 지역 플랫폼은 대개 상품 구성, 수수료, 한도가 따로 정해져 있습니다.`,
    },
    {
      q: `가장 안전한 ${x.name} 대안 거래소는 어디인가요?`,
      a: `위험이 전혀 없는 중앙화 거래소는 없으므로, 솔직하게 비교할 수 있는 것은 각 거래소가 공개한 내용입니다. ${alts.map((a) => `${a.name}: 준비금 증명 – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "명시된 보호 기금은 없습니다."}`).join(" ")} 어느 거래소든 실제로 거래에 쓰는 자금만 두세요.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `${josa(f.noun, "을/를")} 제공하는 ${x.name} 대안 거래소는 어디인가요?`,
      a: `${yes.length ? `${withNoteJosa(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)), yes, "은/는")} ${josa(f.noun, "을/를")} 제공합니다.` : `대안 거래소 ${n}곳 가운데 공식 사이트에서 ${josa(f.noun, "을/를")} 안내하는 곳은 없습니다.`}${no.length ? ` ${namesJosa(no, "은/는")} 제공하지 않습니다.` : ""}${unknown.length ? ` ${names(unknown)}의 사이트에서는 확인 당시 이런 상품을 찾지 못했습니다.` : ""} ${own === true ? `${x.name}도 이 상품을 제공합니다.` : own === false ? `${josa(x.name, "은/는")} 제공하지 않습니다.` : `${josa(x.name, "은/는")} 자사 사이트에서 이런 상품을 안내하지 않습니다.`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `상장 코인이 가장 많은 ${x.name} 대안 거래소는 어디인가요?`,
      a: `각 거래소가 밝힌 수치는 다음과 같습니다: ${alts.map((a) => `${a.name} – ${a.assets}`).join("; ")}. ${x.name}: ${stop(x.assets)} 거래소마다 세는 방식이 달라 코인 수를 세는 곳도 있고 거래쌍 수를 세는 곳도 있으므로, 수치를 그대로 비교할 수는 없습니다.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `${x.name}에서 다른 거래소로 옮기려면 어떻게 하나요?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `다른 거래소에 계정을 만들어도 ${x.name} 계정을 유지할 수 있나요?`,
      a: `예. 거래소들은 서로 별개의 회사이므로 한 거래소의 계정이 다른 거래소의 계정에 영향을 주지 않으며, 두 계정을 함께 쓸 수 있습니다. 다만 계정에 묶인 것은 옮겨지지 않습니다. ${x.name} 레퍼럴 연결, 수수료 등급, 웰컴 보상, 거래 내역은 ${x.name}에 그대로 남습니다.`,
    },
    {
      q: `${x.name}에서 보유 중인 선물 포지션을 다른 거래소로 옮길 수 있나요?`,
      a: `아니요. 선물 포지션은 그 포지션을 연 거래소에만 존재합니다. 옮기려면 ${x.name}에서 포지션을 정리하고 자금을 출금한 뒤, 다른 거래소에서 새 포지션을 여세요. 이때는 그 거래소의 가격과 수수료가 적용됩니다.`,
    },
    {
      q: `${x.name} 대안 거래소에도 레퍼럴 코드가 있나요?`,
      a: `예, ${n}곳 모두 있습니다: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("; ")}. 레퍼럴 코드 사용은 무료이며 거래 수수료가 올라가지도 않습니다.`,
    },
    {
      q: `${x.name} 대안 거래소에서 레퍼럴 코드를 나중에 추가할 수 있나요?`,
      a: `${alts.map((a) => `${a.name}: ${a.referral.afterSignupShort}`).join(". ")}. 어느 거래소에서든 가장 안전한 방법은 레퍼럴 링크로 가입하는 것입니다.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `${josa(a.name, "이/가")} ${x.name}보다 나은가요?`,
      a: `${ahead.length ? `${josa(a.name, "은/는")} 다음 점에서 ${x.name}보다 우위입니다: ${ahead.join("; ")}.` : `비교한 항목에서 ${josa(a.name, "은/는")} ${x.name}보다 수치로 확인되는 우위가 없습니다.`} ${behind.length ? `${josa(x.name, "은/는")} 다음 점에서 우위입니다: ${behind.join("; ")}.` : `${josa(x.name, "이/가")} 우위인 항목은 없습니다.`} ${josa(altInfo(a).chooseIf[0], "이라면/라면")} ${josa(a.name, "이/가")} 잘 맞습니다.`,
    };
  });

  return [
    { id: "choosing", title: `${x.name} 대안 거래소 고르기`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "수수료와 레버리지", faqs: fees },
    { id: "countries", title: "국가, KYC, 규제", faqs: countryFaqs },
    { id: "features", title: "상품과 코인", faqs: featureFaqs },
    { id: "switching", title: `${x.name}에서 옮기기와 레퍼럴 코드`, faqs: switching },
    { id: "versus", title: `${x.name} vs 대안 거래소`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `추천할 만한 ${x.name} 대안 거래소는 어디인가요?`,
    a: `${picks(alts)} 저희 ${x.name} 대안 거래소 페이지에서는 ${alts.length}곳 모두를 수수료, 레버리지, 상품, 국가별 이용 가능 여부, 본인 인증을 기준으로 ${josa(x.name, "과/와")} 비교합니다.`,
  };
}

export const ko: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "예", no: "아니요", notFound: "거래소 사이트에서 찾지 못함" },
  names,
  feeSentence,
  feeSummary,
  advantages,
  countryAnswer,
  quickAnswer,
  switchSteps,
  buildAlternativesFaqs,
  alternativesTeaserFaq,
};
