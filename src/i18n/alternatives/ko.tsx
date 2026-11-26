import Link from "next/link";
import type { AlternativesTexts } from "./en";
import { hangulName, josa, withHangul } from "../ko-josa";
import { fit, variant, yearOf } from "@/lib/fit";

/** Snippet limits for Korean: Hangul is about twice as wide as Latin letters (`scripts/meta-check.tsx`). */
const TITLE_KO = 33;
const DESC_KO = 85;

/**
 * Texts of the "[Exchange] alternatives" pages in Korean. Same keys as `./en.tsx`.
 * Wording: "대안 거래소" (search form "Binance 대안 거래소"), "수수료", "레퍼럴 코드", "본인 인증(KYC)", 합니다체.
 * Exchange names stay in Latin letters; the Hangul reading is added in the title, the H1 and the keywords only.
 * Particles after a name come from `josa()` – "Binance와" but "Bitget과".
 * Country names come unchanged from `../compare/ko.ts` and are followed by "에서".
 */

/** "Binance(바이낸스)" for the texts that receive only the Latin name. */
const withReading = (name: string) => {
  const reading = hangulName[name.toLowerCase()];
  return reading ? `${name}(${reading})` : name;
};

export const ko: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  // Four wordings, chosen per exchange.
  title: (x, n, shortMonthYear) => {
    const y = yearOf(shortMonthYear);
    return fit(
      TITLE_KO,
      [
        `${withHangul(x)} 대안 거래소 ${n}곳 비교 (${shortMonthYear})`,
        `${x.name} 대안 거래소 ${n}곳: 수수료·보너스 비교 (${y})`,
        `${josa(x.name, "과/와")} 비슷한 거래소: 대안 ${n}곳 비교 (${y})`,
        `${josa(x.name, "을/를")} 떠난다면? 대안 거래소 ${n}곳 (${y})`,
      ][variant(4, x.slug)],
      `${x.name} 대안 거래소 ${n}곳 비교 (${shortMonthYear})`,
      `${x.name} 대안 거래소 ${n}곳 비교 (${y})`,
      `${x.name} 대안 거래소 ${n}곳 비교`,
    );
  },
  description: (x, names, n, former, monthYear) =>
    fit(
      DESC_KO,
      `${names}: ${x.name}${former ? `(${former})` : ""} 대안 거래소 ${n}곳의 수수료·레버리지·KYC·레퍼럴 코드 비교(${monthYear} 확인).`,
      `${names}: ${x.name} 대안 거래소 ${n}곳의 수수료·레버리지·KYC·레퍼럴 코드 비교(${monthYear} 확인).`,
      `${x.name} 대안 거래소 ${n}곳의 수수료·레버리지·KYC·국가·레퍼럴 코드를 공식 데이터로 비교했습니다(${monthYear} 확인).`,
      `${x.name} 대안 거래소 ${n}곳의 수수료·레버리지·KYC·국가·레퍼럴 코드를 공식 데이터로 비교했습니다.`,
    ),
  keywords: (x, alts, former) => {
    const reading = hangulName[x.slug];
    return [
      `${x.name} 대안 거래소`,
      ...(reading ? [`${reading} 대안 거래소`, `${reading} 대체 거래소`] : []),
      `${x.name} alternatives`,
      `${x.name} 대안`,
      `${x.name} 같은 거래소`,
      `${x.name} 대안 거래소 추천`,
      `${x.name} 경쟁 거래소`,
      `${x.name}보다 수수료 낮은 거래소`,
      `KYC 없는 ${x.name} 대안 거래소`,
      ...(former ? [`${former} 대안 거래소`, `${former} 대안`] : []),
      ...alts.map((a) => `${a.name} vs ${x.name}`),
    ];
  },
  crumbHome: "홈",
  crumbReferral: (name) => `${name} 레퍼럴 코드`,
  crumbAlternatives: (name) => `${name} 대안 거래소`,
  listLdName: (name) => `${name} 대안 거래소`,
  listLdDescription: (name) => `${josa(name, "과/와")} 비교한 거래소 목록입니다. 순서는 CoinMarketCap 파생상품 순위를 따릅니다.`,
  howToLdName: (name) => `${name}에서 다른 거래소로 옮기는 방법`,
  howToLdDescription: (name) => `${name}에서 다른 암호화폐 거래소로 옮길 때 무엇을 어떤 순서로 확인해야 하는지 안내합니다.`,
  /** Share card. */
  ogTitle: (name) => `${name} 대안 거래소`,
  ogSubtitle: (names) => `${names} – 수수료, 레버리지, KYC, 국가 비교`,

  /* --------------------------------- words --------------------------------- */
  /** Before the last name of a list of links. Korean lists names with commas throughout: "OKX, Bybit, MEXC". */
  and: () => ", ",
  noneOfThem: "해당 거래소 없음",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `확인 및 업데이트: ${date}`,
  h1: (name, n) => `${withReading(name)} 대안 거래소 ${n}곳 비교`,
  quickAnswer: "핵심 요약",
  chipsLabel: "비교 항목",
  chips: (n, products, countries) => [`거래소 ${n}곳`, "수수료·레버리지", `상품 ${products}개`, `${countries}개국`, "KYC·규제", "레퍼럴 코드"],
  glanceTitle: (name) => `${name} 대안 거래소 한눈에 보기`,
  glanceIntro: "거래소별 강점과 선물 기본 수수료(메이커 / 테이커)를 정리했습니다.",
  glanceOrder: (marketDate) => `순서: CoinMarketCap 파생상품 순위(${marketDate} 기준). 레버리지 거래는 위험이 높습니다.`,
  onThisPage: "목차",
  toc: (name, n) => [
    ["at-a-glance", "한눈에 보기"],
    ["why", `${name}에서 옮기는 이유`],
    ["alternatives", `대안 거래소 ${n}곳`],
    ["by-need", "목적별 최적 거래소"],
    ["fees", "수수료"],
    ["products", "상품"],
    ["countries", "국가"],
    ["kyc", "본인 인증(KYC)"],
    ["safety", "규제·준비금"],
    ["referral-codes", "레퍼럴 코드"],
    ["switch", "옮기는 방법"],
    ["faq", "자주 묻는 질문"],
    ["sources", "출처"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `${name} 대안 거래소 비교 (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `대안 거래소 ${n}곳을 ${josa(name, "과/와")} 나란히 놓고 비교합니다. 수수료는 각 거래소가 공개한 기본(VIP 미적용) 요율이며 메이커 / 테이커 순으로 표시합니다. 레버리지는 거래소가 문서에 밝힌 최대치이고, 레퍼럴 코드는 가입할 때 입력할 수 있는 코드입니다. 모든 수치는 ${date}에 각 거래소 공식 사이트에서 직접 확인했습니다.`,
  comparedCaption: (name, n) => `${josa(name, "과/와")} 대안 거래소 ${n}곳: 거래소별 강점, 수수료, 레버리지, 레퍼럴 코드`,
  colExchange: "거래소",
  colBestFor: "강점",
  colFuturesFees: "선물 수수료",
  colSpotFees: "현물 수수료",
  colMaxLeverage: "최대 레버리지",
  colReferralCode: "레퍼럴 코드",
  colAction: "바로가기",
  forComparison: "비교 기준",
  signUp: "가입하기",
  comparedOrder: (marketDate) => `대안 거래소 순서: CoinMarketCap 파생상품 순위(${marketDate} 기준).`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `${name} 대안 거래소를 찾는 이유`,
  whyIntro: (name, sourcesHref) => (
    <>
      아래는 {josa(name, "이/가")} 스스로 제한을 두는 부분입니다. 모두 {name} 공식 페이지에서 가져온 내용입니다(
      <Link href={sourcesHref}>저희 {name} 페이지의 출처 목록</Link> 참고). 이 가운데 해당하는 것이 하나도 없다면 그대로 남는 것도 충분히 좋은
      선택입니다.
    </>
  ),
  stayTitle: (name) => `다음과 같은 경우 ${josa(name, "이/가")} 여전히 맞는 선택입니다`,
  stayOutro: (name, code, href) => (
    <>
      그대로 남기로 하셨나요? <Link href={href}>{name} 레퍼럴 코드 페이지</Link>에 코드 {code}, 가입 절차, 현재 진행 중인 신규 가입 혜택을 정리해
      두었습니다.
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `${name} 대안 거래소 추천 ${n}곳 자세히 보기`,
  detailIntro: (name) =>
    `모든 대안 거래소를 ${josa(name, "과/와")} 같은 항목으로 비교합니다. 수수료, 레버리지, 시장 규모, 본인 인증, 레퍼럴 코드 규정, 상품, 이용 가능 국가입니다. “우위” 목록에는 거래소가 직접 공개한 수치에서 읽어낼 수 있는 차이만 실었습니다.`,
  rowFuturesFees: "선물 수수료(메이커 / 테이커)",
  rowSpotFees: "현물 수수료(메이커 / 테이커)",
  rowMaxLeverage: "최대 레버리지",
  rowAssets: "상장 자산",
  rowOpenInterest: "파생상품 미결제약정",
  rowUsers: "사용자 수",
  rowFounded: "설립 연도",
  rowKyc: "본인 인증",
  rowAddLater: "레퍼럴 코드를 나중에 추가할 수 있나요?",
  rowOffer: "신규 가입 혜택",
  bestFor: (role) => `강점: ${role}`,
  asAlternative: (name) => `– ${name} 대안 거래소`,
  chooseIf: (a, x) => `다음과 같은 경우 ${x} 대신 ${josa(a, "을/를")} 선택하세요`,
  thinkTwiceIf: "다음과 같은 경우 한 번 더 생각해 보세요",
  whereAhead: (a, x) => `${josa(a, "이/가")} ${x}보다 우위인 점`,
  whereBehind: (x) => `${josa(x, "이/가")} 우위인 점`,
  noAdvantage: "비교한 항목 가운데 수치로 확인되는 우위가 없습니다.",
  codeLabel: (name) => `${name} 레퍼럴 코드`,
  signUpOn: (name) => `${name} 가입하기`,
  linkReferral: (name, code) => `${name} 레퍼럴 코드 ${code}: 혜택, 가입 절차, KYC`,
  linkVersus: (a, x) => `${a} vs ${x}: 맞대결 비교 전체 보기`,
  linkAlternatives: (name) => `${name} 대안 거래소`,
  sideBySide: (a, x) => `${a} vs ${x}: 모든 수치 나란히 보기`,
  sideBySideCaption: (a, x) => `${a} vs ${x}: 수수료, 레버리지, 상장 자산, 본인 인증, 레퍼럴 코드 규정`,
  versusHead: (a, x) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `목적별로 가장 잘 맞는 ${name} 대안 거래소`,
  needIntro: (n) =>
    `${n}곳 가운데 어디가 가장 앞서는지는 무엇을 찾느냐에 따라 달라집니다. 아래 표는 목적별로 그 답을 보여 줍니다. 자체 순위 없이 수치만을 근거로 했습니다.`,
  needCaption: (name) => `목적별 최적의 ${name} 대안 거래소`,
  needColWant: "원하는 조건",
  needColLook: "살펴볼 거래소",
  needColWhy: "이유",
  needLowestFutures: "가장 낮은 선물 수수료",
  needLowestSpot: "가장 낮은 현물 수수료",
  needHighestLeverage: "가장 높은 레버리지",
  needDeepest: "가장 깊은 파생상품 시장",
  needMostMarkets: "가장 많은 파생상품 마켓",
  needMica: "EEA(유럽경제지역)용 MiCA 인가 플랫폼",
  needAddLater: "가입 후에도 레퍼럴 코드 추가 가능",
  whyStandardTier: (fees) => `기본 등급 기준 메이커 / 테이커 ${fees}`,
  whyOpenInterest: (amount, marketDate) => `미결제약정 ${amount} (CoinMarketCap, ${marketDate})`,
  whyMarkets: (markets, marketDate) => `마켓 ${markets}개 (CoinMarketCap, ${marketDate})`,
  whyFeature: "거래소 공식 사이트에 표시됨 – 구체적인 제공 내용은 상품 항목 참고",
  needNotFound: (n) => `확인 당시 대안 거래소 ${n}곳의 사이트에서 찾지 못했습니다.`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `수수료: ${name} vs 대안 거래소`,
  feesIntro:
    "거래소 일곱 곳 모두 메이커/테이커 방식으로 수수료를 매깁니다. 유동성을 공급하는 지정가 주문에는 메이커 수수료가, 유동성을 가져가는 주문에는 테이커 수수료가 부과됩니다. 표에는 기본 등급의 요율, 즉 VIP 등급이나 토큰 할인이 적용되기 전에 신규 계정이 내는 수수료를 담았습니다.",
  feesCaption: (name) => `${josa(name, "과/와")} 대안 거래소의 현물·선물 기본 수수료`,
  colFuturesMaker: "선물 메이커",
  colFuturesTaker: "선물 테이커",
  colSpotMaker: "현물 메이커",
  colSpotTaker: "현물 테이커",
  colOtherMarkets: "기타 마켓(메이커 / 테이커)",
  feesNote: (date) => `각 거래소가 공개한 기본(VIP 미적용) 요율이며 ${date}에 확인했습니다. 수수료는 바뀌므로 거래 전에 거래소에서 직접 확인하세요.`,
  cheaperTitle: (name) => `${name}보다 수수료가 저렴한 거래소는?`,
  tokenTitle: "토큰 할인과 세부 조건",
  noTokenDiscount: "거래소 토큰으로 수수료를 낼 때 적용되는 할인은 공개되어 있지 않습니다.",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "상품: 거래소별 제공 현황",
  productsIntro: (date) =>
    `체크 표시는 거래소가 공식 사이트에서 해당 상품을 안내하고 있다는 뜻입니다. 줄표는 ${date}에 그 사이트에서 해당 상품 페이지를 찾지 못했다는 뜻일 뿐, 상품이 없다는 증거는 아닙니다. 제공되는 상품은 국가마다 다를 수 있으며, 지역 플랫폼에서는 특히 그렇습니다.`,
  productsCaption: (name) => `${josa(name, "과/와")} 대안 거래소가 제공하는 상품`,
  colProduct: "상품",
  productDetailsTitle: "거래소별 상품 상세 정보",
  productDetails: (name) => `${name}: 상품 자세히 보기`,
  offered: "제공",
  notOffered: "미제공",
  noPageFound: "거래소 공식 사이트에서 해당 페이지를 찾지 못함",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `국가별 이용 가능 여부: ${josa(name, "과/와")} 대안 거래소`,
  countriesIntro: (count) =>
    `대안 거래소가 필요해지는 가장 흔한 이유는 거주 국가입니다. 아래 표는 ${count}개국에 대해 각 거래소의 약관에 적힌 내용을 보여 줍니다. “지역 사이트”는 거래소가 상품, 수수료, 한도를 따로 정한 별도 플랫폼으로 해당 국가에 서비스를 제공한다는 뜻입니다.`,
  countriesCaption: (name) => `${josa(name, "과/와")} 대안 거래소의 국가별 이용 가능 여부`,
  colCountry: "국가",
  legendRestricted: "거래소 약관 또는 공지에 따라 거주자 이용 불가",
  legendRegional: "별도의 지역 플랫폼으로 서비스 제공",
  legendPartial: "일부 상품 또는 지역만 해당",
  legendOpen: (date) => `${date} 기준 제한 국가 목록에 없음`,
  countriesNote:
    "“제한 없음”이 해당 국가에서 모든 상품이 제공된다는 보장은 아닙니다. 적용되는 것은 가입 시점의 거래소 약관이며, 이 거래소들은 모두 VPN이나 허위 정보로 제한을 우회하는 것을 금지합니다.",
  countryHeading: (name, country) => `${country}에서 찾는 ${name} 대안 거래소`,
  restrictedTitle: "거래소별 제한 국가와 지역 플랫폼",
  whereNotAvailable: (name) => `${josa(name, "을/를")} 이용할 수 없는 국가는 어디인가요?`,
  regionalPlatforms: "지역 플랫폼:",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `본인 인증: KYC 없는 ${name} 대안 거래소가 있나요?`,
  kycIntro: (n) =>
    `이 ${n}곳 중에는 없습니다. 이 비교에 포함된 모든 거래소가 신규 사용자에게 본인 인증을 요구하며, 대부분은 인증을 마칠 때까지 입금이나 거래가 막혀 있습니다. 차이는 인증하지 않은 계정으로 무엇까지 할 수 있느냐에 있습니다.`,
  kycCaption: (name) => `${josa(name, "과/와")} 대안 거래소의 본인 인증`,
  colKyc: "본인 인증",
  kycDetailsTitle: "본인 인증에 대한 거래소별 안내",
  kycQuestion: (name) => `${name}에서 본인 인증(KYC)이 필요한가요?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "규제, 준비금 증명, 보호 기금",
  safetyIntro:
    "위험이 전혀 없는 중앙화 거래소는 없습니다. 비교할 수 있는 것은 각 거래소가 스스로 공개한 내용입니다. 어디에서 라이선스를 받았는지, 준비금을 증명하는지, 비상 상황에 대비한 기금을 두고 있는지입니다.",
  safetyCaption: (name) => `${josa(name, "과/와")} 대안 거래소의 규제, 준비금 증명, 보호 기금`,
  colLicences: "거래소가 밝힌 라이선스",
  colReserves: "준비금 증명",
  colFund: "보호 기금",
  noneNamed: "명시 없음",
  safetyNote: "준비금 비율은 표시된 스냅샷 날짜 기준으로 각 거래소가 직접 발표한 수치입니다. 자금은 실제로 활발히 거래하는 거래소에만 보관하세요.",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `${name} 대안 거래소의 레퍼럴 코드`,
  codesIntro:
    "대안 거래소 중 한 곳에 계정을 만든다면 레퍼럴 코드를 입력하고 가입하세요. 비용이 들지 않고, 수수료가 올라가는 일도 전혀 없으며, 거래소의 신규 가입 혜택을 받을 수 있게 됩니다. 가장 중요한 것은 마지막 열입니다. 여러 거래소에서 빠뜨린 코드는 나중에 추가할 수 없습니다.",
  codesCaption: (name) => `${josa(name, "과/와")} 대안 거래소의 레퍼럴 코드`,
  colOffer: "신규 가입 혜택",
  colWhere: "코드 입력 위치",
  colLater: "나중에 추가할 수 있나요?",
  codesRow: (name) => `${name} 레퍼럴 코드`,
  codesNote: (date) => `혜택은 ${date}에 확인했습니다. 웰컴 보상은 과제를 완료해야 받을 수 있고, 본인 인증이 필요하며, 국가마다 다릅니다.`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `${name}에서 다른 거래소로 옮기는 방법`,
  switchIntro: "순서만 지키면 거래소를 옮기는 일은 생각만큼 번거롭지 않습니다. 계정이 먼저, 본인 인증이 그다음, 자금은 마지막입니다.",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `${name} 대안 거래소 – 자주 묻는 질문`,
  faqIntro: (name, count) =>
    `${josa(name, "을/를")} 대체할 거래소에 관한 질문 ${count}개입니다. 어떤 목적에 어떤 거래소가 맞는지, 수수료, 국가, 본인 인증, 옮기는 방법을 다룹니다.`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "출처: 수치를 확인한 곳",
  sourcesIntro: (date, marketDate) =>
    `이 페이지에 실린 수수료, 레버리지, 상품, 본인 인증, 국가, 라이선스, 준비금, 레퍼럴 코드 규정에 관한 내용은 모두 ${date}에 각 거래소의 공식 웹사이트와 고객센터에서 확인했습니다. 미결제약정과 파생상품 마켓 수는 CoinMarketCap 파생상품 순위(${marketDate})에서 가져왔습니다. 거래소는 예고 없이 약관을 바꾸므로 최종 기준은 아래 페이지들입니다.`,
  sourcesSummary: (name, count, focus) => `${name}: ${focus ? "" : "이번 비교를 위해 확인한 "}공식 페이지 ${count}개`,
  sourcesMore: (name, count, href) => (
    <>
      {name}의 수수료, 레버리지, 본인 인증, 레퍼럴 코드 규정, 제한 국가 목록은{" "}
      <Link href={href}>
        저희 {name} 페이지의 출처 {count}개 전체
      </Link>
      에서 확인할 수 있습니다.
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "더 많은 거래소 비교",
  headToHeadTitle: (name) => `${name} 맞대결 비교`,
  headToHeadIntro: "눈여겨보는 대안 거래소가 있나요? 맞대결 비교 페이지에서 수수료, 상품, 국가, 레퍼럴 혜택을 더 깊이 다룹니다.",
  otherAlternativesTitle: "다른 거래소의 대안 거래소",
  otherAlternativesIntro: "같은 비교를 다른 거래소 각각의 입장에서 정리한 페이지입니다.",
  referralLink: (name, code) => `${name} 레퍼럴 코드 ${code}`,
  allComparisons: "모든 거래소 비교",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>위험 고지:</strong> 암호화폐 파생상품은 복잡한 금융 상품입니다. 레버리지는 수익과 손실을 모두 몇 배로 키우며, 몇 분 만에 마진 전액을 잃을 수
      있습니다. 이 페이지는 정보 제공만을 목적으로 하며 금융 조언이 아닙니다. 저희 링크를 통해 가입하면 저희가 커미션을 받을 수 있습니다. 자세한 내용은{" "}
      <Link href={disclosureHref}>제휴 고지</Link>를 확인하세요. 그렇다고 수치가 달라지지는 않습니다. 수치는 모두 거래소가 직접 공개한 것입니다.
    </>
  ),
  ctaTitle: (name) => `${name} 대안 거래소를 찾으셨나요?`,
  ctaText: "검증된 레퍼럴 코드로 가입하세요. 계정 하나로 현물과 선물을 모두 거래할 수 있으며 추가 비용은 없습니다.",
  ctaButton: "모든 레퍼럴 코드 보기",
};
