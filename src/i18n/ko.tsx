import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";
import { hangulName, josa, withHangul } from "./ko-josa";

/**
 * Interface texts in Korean. Same keys as `en.tsx`, written natively from the English text.
 *
 * Wording: "레퍼럴 코드" for referral code (main keyword), "추천인 코드" as the second keyword, "초대 코드" for invite
 * code, "거래소" for the exchange, "수수료" for fees, "현물" / "선물" for spot and futures, 합니다체 in running text,
 * the reader addressed without a pronoun. Exchange names stay in Latin letters; the Hangul reading
 * ("Binance(바이낸스)") is added in the title, the H1, the opening text of a referral-code page and the keywords only.
 * A particle after a name, a code or a data text comes from `josa()` – "Binance는" but "Bitget은". Numbers in Latin
 * digits with a decimal point (0.02%, 10,000 USDT); billions of US dollars in Korean units ("341억 달러"). Field and
 * button names of the exchanges stay in English, because only the English interface was checked.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B, C" – Korean lists with commas throughout; a particle after the list follows its last item. */
const list = (items: string[]) => items.join(", ");
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** Only the particle for `word` – for JSX, where the word itself sits inside <strong>: "<strong>REFCO888</strong>을". */
const particle = (word: string, pair: string) => josa(word, pair).slice(word.length);
/** The sign-up methods as an adverb: "이메일 주소, 전화번호, Google 중 원하는 방법으로", or "이메일 주소로" for a single one. */
const viaMethods = (methods: string[]) => (methods.length <= 1 ? josa(list(methods), "으로/로") : `${list(methods)} 중 원하는 방법으로`);
/** A step title inside a running answer, without a closing period. */
const stepTitle = (s: string) => s.trim().replace(/\.$/, "");
/**
 * Billions of US dollars in Korean units with Latin digits, as Korean media write them. One billion is 10억:
 * "34.1" → "341억 달러", "8.68" → "86.8억 달러"; from 1조 (1,000 billion) on "1조 2,050억 달러".
 */
const usd = (billions: string) => {
  const decimals = Math.max(0, (billions.split(".")[1] ?? "").length - 1);
  const eok = Number((Number(billions) * 10).toFixed(decimals));
  const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: decimals });
  const jo = Math.floor(eok / 10000);
  const rest = Number((eok - jo * 10000).toFixed(decimals));
  return `${jo ? `${fmt(jo)}조${rest ? ` ${fmt(rest)}억` : ""}` : `${fmt(eok)}억`} 달러`;
};

export const ko: Dictionary = {
  list,

  format: {
    billions: (n) => usd(n.toFixed(n >= 10 ? 1 : 2)),
    billionsExact: (n) => usd(n.toFixed(2)),
    billionsFloor: (n) => `${usd(String(Math.floor(n)))} 이상`,
  },

  meta: {
    siteTitle: `${site.name} – 검증된 암호화폐 거래소 레퍼럴 코드`,
    siteDescription:
      "Binance, OKX, Bybit, Bitget, Gate, KuCoin, MEXC의 검증된 레퍼럴 코드(추천인 코드) – 가입 링크 하나로 현물·선물 거래의 신규 가입 보너스와 수수료 페이백을 받으세요. 수수료와 주요 정보, 솔직한 장단점까지 정리했습니다.",
  },

  layout: {
    skip: "본문으로 바로가기",
    mainNav: "주 메뉴",
    nav: { exchanges: "거래소", benefits: "혜택", compare: "비교", howItWorks: "이용 방법", about: "소개" },
    getCodes: "코드 받기",
    homeLabel: `${site.name} – ${site.domain} 홈`,
    language: "언어",
    footerAbout:
      "규모가 가장 큰 암호화폐 거래소의 검증된 레퍼럴 코드 – 현물·선물 거래를 위한 웰컴 보너스와 수수료 페이백. 공식 출처에서 확인한 정보를 명확하게 전합니다.",
    referralCodes: "레퍼럴 코드",
    referralCodeOf: (name) => `${name} 레퍼럴 코드`,
    alternatives: "대안 거래소",
    alternativesOf: (name) => `${name} 대안 거래소`,
    guides: "가이드",
    comparisons: "거래소 비교",
    howCodesWork: "레퍼럴 코드 사용법",
    faq: "자주 묻는 질문",
    about: "소개 및 검증 방법",
    legal: "법적 정보",
    imprint: "운영자 정보",
    privacy: "개인정보 처리방침",
    disclosure: "제휴 고지",
    cookieSettings: "쿠키 설정",
    risk: (
      <>
        <strong>위험 경고:</strong> 레버리지를 이용한 암호화폐 파생상품 거래는 위험이 매우 높으며, 입금한 자금을 모두 잃을 수 있습니다. 잃어도 감당할 수
        있는 돈으로만 거래하세요. 이 웹사이트의 어떤 내용도 금융, 투자 또는 세무 자문이 아닙니다.
      </>
    ),
    affiliate: (
      <>
        <strong>제휴 고지:</strong> 일부 링크는 레퍼럴 링크입니다. 이 링크로 가입하면 저희가 커미션을 받을 수 있으며, 이용자가 부담하는 추가 비용은 없습니다.
        이는 저희가 게시하는 정보에 어떤 영향도 주지 않습니다. 거래소 이름과 로고는 각 소유자의 상표이며, {josa(site.name, "은/는")} 이들 거래소와 소속
        관계가 없고 거래소의 보증을 받지도 않습니다.
      </>
    ),
  },

  consent: {
    label: "애널리틱스 동의",
    text: (privacyHref) => (
      <>
        <strong>애널리틱스 사용 여부는 직접 선택하세요.</strong> 어떤 페이지가 읽히는지 알아보기 위해 Google Analytics를 사용하고자 합니다. Google
        Analytics는 쿠키를 설정하고 이용 데이터를 Google로 전송하며, 허용한 경우에만 작동합니다. 어느 쪽을 선택하든 광고 쿠키는 사용하지 않습니다. 자세한
        내용은 <Link href={privacyHref}>개인정보 처리방침</Link>에서 확인하세요.
      </>
    ),
    decline: "거부",
    allow: "애널리틱스 허용",
  },

  notFound: {
    title: "존재하지 않는 페이지입니다",
    text: "찾고 있는 레퍼럴 코드가 다른 페이지로 옮겨졌을 수 있습니다. 다음 페이지를 이용해 보세요:",
    back: "홈으로 돌아가기",
  },

  og: {
    footer: ["검증된 링크", "수수료·정보", "공식 출처"],
    homeAlt: "RefCo – 검증된 암호화폐 거래소 레퍼럴 코드",
    homeKicker: (monthYear) => `${monthYear} 업데이트`,
    homeTitle: "검증된 암호화폐 거래소 레퍼럴 코드",
    exchangeAlt: "거래소 레퍼럴 코드, 대안 거래소, 비교 – RefCo",
    exchangeKicker: (monthYear) => `${monthYear} 확인`,
    exchangeTitle: (e) => `${e.name} 레퍼럴 코드`,
    exchangeSubtitle: (e) => `${benefit(e)} · 링크 하나로 현물·선물`,
    versusBadge: "맞대결 비교",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `선물 수수료 ${feesA} vs ${feesB} · 레버리지 ${leverageA}배 vs ${leverageB}배 · KYC, 국가, 보너스`,
  },

  blocks: {
    signUpOn: (name) => `${name} 가입하기`,
    signUp: "가입하기",
    details: "자세히 보기",
    breadcrumb: "이동 경로",
    copy: "복사",
    copied: "복사됨 ✓",
    spotMakerTaker: "현물 메이커 / 테이커",
    futuresMakerTaker: "선물 메이커 / 테이커",
    maxLeverage: "최대 레버리지",
    since: "설립",
    tableCaption: "암호화폐 거래소 비교: 신규 가입 혜택, 현물·선물 수수료, 레버리지, 시장 데이터",
    exchange: "거래소",
    newUserOffer: "신규 가입 혜택",
    futuresFees: "선물 수수료 (메이커 / 테이커)",
    spotFees: "현물 수수료",
    openInterest: "미결제약정",
    markets: "마켓 수",
    action: "바로가기",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => `암호화폐 거래소 레퍼럴 코드 (${monthYear}): 현물·선물 가입 보너스`,
    description: (monthYear) =>
      `Binance, OKX, Bybit, Bitget, Gate, KuCoin, MEXC의 검증된 레퍼럴 코드(추천인 코드). 링크 하나로 현물·선물 신규 가입 보너스와 수수료 페이백을 받으세요 – ${monthYear} 업데이트.`,
    listName: "현물·선물 거래를 위한 암호화폐 거래소 레퍼럴 코드",
    updated: (monthYear) => `${monthYear} 업데이트`,
    h1: (
      <>
        암호화폐 거래소 레퍼럴 코드, <span className="hl">검증</span>하고 알기 쉽게 정리했습니다.
      </>
    ),
    lead: (
      <>
        세계 최대 암호화폐 거래소의 웰컴 보너스와 수수료 페이백을 받으세요. 레퍼럴 코드(추천인 코드) 하나로 현물과 선물에 <em>모두</em> 적용됩니다. 수수료,
        레버리지, 라이선스, 솔직한 장단점 등 거래소를 고르는 데 필요한 정보도 함께 정리했습니다.
      </>
    ),
    browse: "레퍼럴 코드 보기",
    seeBenefits: "혜택 확인하기",
    trust: (date) => [`${date} 확인`, "공식 링크만 사용", "동의한 경우에만 애널리틱스 사용"],
    featured: "주요 거래소",
    ticketName: (name) => `${name} 레퍼럴 코드`,
    ticketTag: "현물 + 선물",
    stats: ["주요 현물·선물 거래소", "미결제약정 합계", "파생상품 마켓 수", "최저 메이커 수수료 (MEXC)"],
    marketData: (date) => `시장 데이터: CoinMarketCap 파생상품 순위(${date} 기준).`,

    benefitsEyebrow: "혜택",
    benefitsTitle: `왜 ${site.name} 레퍼럴 코드로 가입해야 할까요?`,
    benefitsLead: "거래소도, 수수료도 그대로입니다. 다만 직접 가입하면 놓치게 되는 신규 사용자 혜택을 받을 수 있습니다.",
    benefits: [
      {
        title: "웰컴 보너스",
        text: "거래소의 신규 사용자 혜택을 받으세요. 수수료 페이백 바우처, 선물 보너스, 미션 보상 등 규모가 최대 수천 USDT에 이릅니다.",
      },
      {
        title: "더 낮은 거래 수수료",
        text: "거래소가 허용하는 경우, 레퍼럴 커미션의 일부가 거래할 때마다 페이백으로 돌아옵니다.",
      },
      {
        title: "현물과 선물, 링크 하나로",
        text: "레퍼럴은 계정에 연결되므로 현물, 선물, 마진, 옵션에 모두 적용됩니다. 두 번째 코드는 필요 없습니다.",
      },
      { title: "추가 비용 없음", text: "레퍼럴 때문에 수수료가 오르는 일은 없습니다. 이용자는 혜택만 받고, 프로그램 비용은 거래소가 부담합니다." },
      { title: "공식 가입 페이지", text: "모든 링크는 거래소 공식 웹사이트로 연결됩니다. 중개자도 없고, 저희와 공유되는 데이터도 없습니다." },
      {
        title: "가입할 때 적용하는 것이 최선",
        text: "30일 동안 코드를 추가할 수 있는 거래소도 있지만, 끝내 허용하지 않는 거래소도 있습니다. 계정을 만들기 전에 링크를 이용하면 어느 거래소에서든 안심할 수 있습니다.",
      },
    ],
    offersCaption: "거래소별 신규 가입 혜택",
    offersHead: ["거래소", "레퍼럴 가입 시 신규 가입 혜택", "링크 하나로 적용"],
    claim: "받기",
    offersNote: (date) =>
      `혜택은 ${date}에 확인했습니다. 웰컴 보상은 미션을 완료해야 받을 수 있고, 본인 인증이 필요하며, 지역마다 다릅니다. 현재 적용되는 조건은 각 거래소의 가입 페이지에 표시됩니다.`,

    exchangesEyebrow: "레퍼럴 코드",
    exchangesTitle: "거래소를 선택하세요",
    exchangesLead: "거래소별 페이지에서 레퍼럴과 수수료, 그리고 어떤 사람에게 가장 잘 맞는 거래소인지 설명합니다. 나에게 맞는 플랫폼을 골라 한 번에 가입하세요.",
    sideBySide: "나란히 비교",
    notSure: "아직 고민 중인가요?",
    notSureText: (count) => `거래소 ${count}곳의 수수료, 레버리지, 미결제약정을 표 하나로 모두 비교해 보세요.`,
    compareExchanges: "거래소 비교하기",

    compareTitle: "암호화폐 거래소 비교: 현물·선물",
    compareLead: "신규 가입 혜택, 현물·선물 기본(VIP 미적용) 수수료, 레버리지, 시장 규모를 한눈에 확인하세요.",
    compareNote: (reviewed, market) =>
      `수수료: 각 거래소가 공개한 기본 등급 요율(${reviewed} 확인). 미결제약정과 마켓 수: CoinMarketCap(${market}). 수수료는 바뀔 수 있으니 거래하기 전에 거래소에서 확인하세요.`,
    versusStrip: {
      title: "두 거래소 맞대결 비교",
      text: (pairs, hubHref) => (
        <>
          {pairs}개 맞대결 비교에서 수수료, 레버리지, 상품, 국가, KYC, 레퍼럴 혜택을 나란히 확인하세요 – <Link href={hubHref}>모든 거래소 비교</Link>.
        </>
      ),
    },
    alternativesStrip: {
      title: "지금 쓰는 거래소의 대안을 찾고 있나요?",
      text: (others) => `각 비교 페이지는 한 거래소를 나머지 ${others}곳과 견주어 수수료, 레버리지, 상품, 본인 인증, 가입 가능한 국가를 비교합니다.`,
    },

    picksEyebrow: "핵심 요약",
    picksTitle: "나에게 맞는 거래소는 어디일까요?",
    picks: [
      { label: "가장 깊은 유동성", slug: "binance", why: "전 세계에서 미결제약정과 선물 거래량이 가장 큽니다." },
      { label: "낮은 수수료·옵션", slug: "okx", why: "현물 0.08% / 0.10%, 옵션 0.03%의 수수료에 매월 준비금 증명을 공개합니다." },
      { label: "모바일 선물 거래", slug: "bybit", why: "빠른 매칭 엔진과 손꼽히는 트레이딩 앱을 갖췄습니다." },
      { label: "카피 트레이딩", slug: "bitget", why: "경험 많은 선물 트레이더의 거래를 자동으로 따라 할 수 있습니다." },
      { label: "가장 많은 알트코인", slug: "gate", why: "5,400개 이상의 자산을 상장하고, 틈새 토큰의 선물도 제공합니다." },
      { label: "트레이딩 봇", slug: "kucoin", why: "현물·선물용 트레이딩 봇을 무료로 제공합니다." },
      { label: "가장 낮은 수수료", slug: "mexc", why: "현물과 대부분의 선물 계약에서 메이커 수수료가 0%입니다." },
    ],

    howEyebrow: "이용 방법",
    howTitle: "레퍼럴 코드, 3단계로 사용하기",
    steps: [
      { title: "거래소 고르기", text: "위에서 수수료, 레버리지, 기능을 비교하고 내 거래 스타일에 맞는 거래소의 페이지를 여세요." },
      {
        title: "저희 링크로 가입하기",
        text: "레퍼럴은 자동으로 적용됩니다. 다른 곳에서 계정을 만들기 전에 이메일이나 휴대폰 번호로 가입하세요.",
      },
      {
        title: "인증하고 보상 받기",
        text: "본인 인증(KYC)을 마치고 이중 인증(2FA)으로 계정을 보호한 뒤, 대시보드에 표시되는 웰컴 보상을 확인하세요.",
      },
    ],

    trustEyebrow: `왜 ${site.name}인가`,
    trustTitle: "클릭이 아니라 신뢰를 위해 만들었습니다",
    trustCards: [
      { title: "검증된 혜택", text: "거래소마다 신규 가입 혜택을 확인하고, 실제로 받을 수 있는 것만 소개합니다." },
      { title: "날짜가 표시된 최신 정보", text: "수수료, 레버리지, 라이선스를 정기적으로 다시 확인하며, 모든 페이지에 검토 날짜를 표시합니다." },
      { title: "개인정보 보호 우선", text: "광고 픽셀도, 광고 쿠키도 없습니다. 애널리틱스는 허용한 경우에만 작동합니다." },
      { title: "빠르고 명확하게", text: "어떤 휴대폰에서도 바로 열리는 가벼운 페이지입니다. 답을 먼저 보여 드리고, 자세한 내용은 그다음에 설명합니다." },
      { title: "솔직한 장단점", text: "마케팅 문구만 옮기지 않습니다. 약점, 사고, 지역별 제한도 함께 적습니다." },
      { title: "위험부터 먼저", text: "레버리지는 입금한 자금을 순식간에 날릴 수 있습니다. 모든 페이지에서 이 점을 분명히 밝힙니다." },
    ],

    faqEyebrow: "자주 묻는 질문",
    faqTitle: "레퍼럴 코드 – 자주 묻는 질문",
    faqs: (reviewed) => [
      {
        q: "암호화폐 거래소 레퍼럴 코드란 무엇인가요?",
        a: "레퍼럴 코드(추천인 코드, 초대 코드 또는 레퍼럴 ID라고도 합니다)는 새로 만든 거래소 계정을 그 거래소를 추천한 사람이나 웹사이트와 연결해 주는 짧은 식별 코드입니다. 거래소는 이 코드로 양쪽 모두에게 보상을 줍니다. 신규 사용자는 보통 웰컴 보상이나 거래 수수료 할인을 받고, 추천인은 수수료의 일부를 받습니다.",
      },
      {
        q: "레퍼럴 코드를 사용하면 어떤 혜택이 있나요?",
        a: "레퍼럴로 가입한 신규 사용자는 거래소의 웰컴 혜택을 받을 수 있습니다. 예를 들어 Bybit에서는 최대 250 USDT의 레퍼럴 보상, MEXC에서는 최대 10,000 USDT의 신규 사용자 보상이 있습니다. 추천인이 커미션을 나눠 주는 경우에는 Gate의 1년간 10%처럼 거래 수수료의 일부도 돌려받습니다. 추가 비용은 없습니다.",
      },
      {
        q: "레퍼럴 코드 하나로 현물과 선물 거래에 모두 적용되나요?",
        a: "예. Binance, OKX, Bybit, Bitget, Gate, KuCoin, MEXC에서는 레퍼럴이 특정 상품이 아니라 계정에 연결됩니다. 한 번 가입하면 현물과 선물 거래는 물론, 거래소가 제공하는 경우 마진, 옵션, 카피 트레이딩에도 적용됩니다.",
      },
      {
        q: "레퍼럴 코드로 가입하면 수수료를 더 내나요?",
        a: "아니요. 레퍼럴 링크로 가입해도 수수료는 절대 오르지 않습니다. 거래소와 거주 지역에 따라서는 레퍼럴 없이는 받을 수 없는 수수료 할인이나 웰컴 보너스를 받을 수도 있습니다.",
      },
      {
        q: "가입한 뒤에도 추천인 코드를 입력할 수 있나요?",
        a: "거래소마다 다릅니다. Binance에서는 입금이나 거래를 하지 않았다면 가입 후 30일 이내에 코드를 연결할 수 있고, MEXC에서는 가입 후 30일 이내에 직접 추천인을 연결할 수 있습니다. KuCoin은 고객센터에서 “Link Referrer” 요청을 받습니다. Bybit, OKX, Bitget은 가입할 때만 코드를 받으며, Gate는 나중에 추가하는 방법을 안내하지 않습니다. 계정을 만들기 전에 링크를 이용하는 것이 가장 안전합니다.",
      },
      {
        q: "선물 수수료가 가장 낮은 암호화폐 거래소는 어디인가요?",
        a: `마지막 검토일(${reviewed}) 기준으로 기본 선물 수수료가 가장 낮은 곳은 MEXC로, BTCUSDT에서 메이커 0%, 테이커 0.02%였습니다. Binance, OKX, Gate는 기본 등급에서 메이커 0.02% / 테이커 0.05%, Bybit는 0.02% / 0.055%, Bitget과 KuCoin은 0.02% / 0.06%입니다.`,
      },
      {
        q: "암호화폐 파생상품 거래에는 어느 거래소가 가장 좋나요?",
        a: "무엇을 거래하느냐에 따라 다릅니다. Binance는 유동성이 가장 깊고, OKX는 낮은 수수료에 옵션까지 갖췄으며, Bybit는 빠른 무기한 선물 거래에 맞춰져 있습니다. 카피 트레이딩은 Bitget, 알트코인 선물은 Gate, 봇은 KuCoin, 최저 수수료는 MEXC가 강점입니다.",
      },
      {
        q: "이 거래소들을 미국에서 이용할 수 있나요?",
        a: "대부분 이용할 수 없습니다. Binance, Bybit, Bitget, Gate, KuCoin, MEXC는 미국을 제한 국가 또는 금지 국가로 명시하고 있으며, OKX는 미국 내 일부 관할 지역을 제한합니다. 영국, 캐나다, EU에서도 이용 가능 여부가 거래소마다 다릅니다. 각 거래소 페이지에 해당 거래소의 약관에 나온 제한 국가를 정리해 두었습니다.",
      },
      {
        q: "이 정보는 얼마나 자주 업데이트되나요?",
        a: `수수료, 레버리지, 라이선스, 시장 데이터를 정기적으로 다시 확인합니다. 모든 페이지에 마지막 검토 날짜를 표시하며, 현재 데이터는 ${reviewed}에 확인했습니다.`,
      },
    ],
    countryFaq: null,

    ctaTitle: "웰컴 보너스를 받으세요",
    ctaText: "거래소를 고르고 검증된 레퍼럴로 가입한 뒤, 계정 하나로 현물과 선물을 거래하세요.",
    ctaButton: "모든 레퍼럴 코드 보기",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    title: (e, shortMonthYear) => `${withHangul(e)} 레퍼럴 코드 ${e.referralCode} (${shortMonthYear}): ${benefit(e)}`,
    description: (e, monthYear) =>
      `${e.name} 레퍼럴 코드(추천인 코드)는 ${e.referralCode}입니다. ${benefit(e)}, 코드 입력 위치, 가입 절차, KYC, 수수료를 정리했습니다(${monthYear} 확인).`,
    keywords: (e) => {
      const reading = hangulName[e.slug];
      const same = (k: string) => k.toLowerCase().replace(/[\s-]/g, "");
      return [
        `${e.name} 레퍼럴 코드`,
        ...(reading ? [`${reading} 레퍼럴 코드`, `${reading} 추천인 코드`] : []),
        `${e.name} 추천인 코드`,
        `${e.name} referral code`,
        `${e.name} 레퍼럴 코드 ${e.referralCode}`,
        `${e.name} ${e.referral.codeName}`,
        `${e.name} 레퍼럴 링크`,
        `${e.name} 초대 코드`,
        `${e.name} 가입 보너스`,
        `${e.name} 가입 방법`,
        `${e.name} KYC`,
        `${e.name} 선물 수수료`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "코드 한눈에 보기",
      benefits: "혜택",
      "use-code": "코드 사용 방법",
      "how-to": "가입 방법",
      verification: "본인 인증(KYC)",
      "key-facts": "주요 정보",
      fees: "수수료",
      about: "거래소 소개",
      "pros-cons": "장단점",
      "best-for": "추천 대상",
      safety: "안전성·이용 가능 여부",
      faq: "자주 묻는 질문",
      sources: "출처",
      alternatives: "대안 거래소·비교",
    },
    onThisPage: "목차",
    crumbHome: "홈",
    crumbCodes: "레퍼럴 코드",
    crumbPage: (e) => `${e.name} 레퍼럴 코드`,

    /* JSON-LD */
    offerName: (e) => `${e.name} 레퍼럴 코드 ${e.referralCode}`,
    offerDescription: (e) => `신규 가입 혜택: ${benefit(e)}. 레퍼럴 하나로 ${list(e.referralCovers)}에 모두 적용됩니다.`,
    offerCategory: "암호화폐 거래소 회원가입",
    howToName: (e) => `레퍼럴 코드 ${josa(e.referralCode, "으로/로")} ${e.name}에 가입하는 방법`,
    howToDescription: (e) =>
      `거래소가 직접 안내하는 ${e.name} 가입 절차로, 레퍼럴 코드 ${josa(e.referralCode, "을/를")} 입력하는 위치도 함께 담았습니다.`,

    /* Hero */
    updated: (date) => `확인 및 업데이트: ${date}`,
    h1: (e) => `${withHangul(e)} 레퍼럴 코드: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – 레퍼럴 하나로 {list(e.referralCovers)}에 모두 적용됩니다. 받을 수 있는 혜택과 거래 비용, 그리고{" "}
        {josa(withHangul(e), "이/가")} 나에게 맞는 거래소인지 정리했습니다.
      </>
    ),
    quickAnswer: "핵심 요약",
    highlights: "주요 특징",
    chips: (e) => [
      `현물 ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `선물 ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `레버리지 ${shortLeverage(e)}`,
      `파생상품 마켓 ${e.market.markets}개`,
      `${e.founded}년 설립`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `${e.name} 회원가입`,
    appliedByLink: "이 링크로 가입하면 레퍼럴이 자동으로 적용됩니다.",
    goesToOfficial: (domain) => `공식 웹사이트 ${josa(domain, "으로/로")} 바로 연결됩니다.`,
    codeLabel: "레퍼럴 코드",
    noCodeToType: "입력할 코드 없음 – 링크로 자동 적용",
    officialSite: (domain) => `공식 사이트: ${domain}`,
    yourBenefits: "혜택",
    freeNeverRaises: "무료 – 레퍼럴을 써도 수수료는 오르지 않습니다",
    qrLabel: (e) => `QR 코드: 레퍼럴 ${josa(e.referralCode, "으로/로")} ${e.name} 앱에서 가입하기`,
    preferApp: "앱으로 가입하고 싶다면?",
    scan: (e) => (
      <>
        휴대폰 카메라로 스캔하면 {josa(e.name, "이/가")}{" "}
        {e.referralCode ? (
          <>
            열리며, 레퍼럴 <strong>{e.referralCode}</strong>도 함께 적용됩니다
          </>
        ) : (
          "열립니다"
        )}
        . iOS와 Android에서 모두 사용할 수 있습니다.
      </>
    ),
    riskLine: (e, links) => (
      <>
        레버리지 거래는 위험이 높습니다. 모든 국가에서 이용할 수 있는 것은 아니므로 <a href="#safety">이용 가능 여부</a>나{" "}
        <Link href={links.alternatives}>{e.name} 대안 거래소</Link>를 확인하세요.
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `${e.name} 레퍼럴 코드 ${e.referralCode} 한눈에 보기`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        {monthYear} 기준 {e.name} 레퍼럴 코드는 <strong>{e.referralCode}</strong>입니다. 아래 표에 이 코드의 역할과 입력 위치, 그리고{" "}
        {josa(e.name, "이/가")} 신규 계정에 요구하는 사항을 정리했습니다. 모든 항목은 {date}에 {e.name} 공식 페이지와 대조해 확인했습니다.
      </>
    ),
    codeFactsCaption: (e) => `${e.name} 레퍼럴 코드 ${e.referralCode}: 주요 정보`,
    codeFacts: (e, date) => [
      [`${e.name} 레퍼럴 코드`, <strong key="code">{e.referralCode}</strong>],
      [`${e.name}에서 쓰는 명칭`, e.referral.codeName],
      ["신규 사용자 혜택", benefit(e)],
      ["입력 위치", e.referral.whereShort],
      ["가입 후에 추가할 수 있나요?", e.referral.afterSignupShort],
      ["적용 범위", e.referralCovers.join(", ")],
      ["본인 인증(KYC)", e.signup.kycShort],
      ["비용", "무료 – 수수료가 오르지 않음"],
      ["마지막 확인", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `${e.name} 레퍼럴 가입 혜택`,
    benefitsIntro: (e) => (
      <>
        {e.name} 레퍼럴 코드 <strong>{e.referralCode}</strong>
        {particle(e.referralCode, "으로/로")} 가입해도 추가 비용은 없습니다. 아래는 현재 {josa(e.name, "이/가")} 신규 계정에 제공하는 혜택입니다. 같은
        코드가 <strong>{list(e.referralCovers)}</strong>에 모두 적용되므로 현물과 선물에 코드를 따로 쓸 필요가 없습니다.
      </>
    ),
    offerChecked: (date) => `신규 가입 혜택 · ${date} 확인`,
    appliedWhenRegistering: "이 레퍼럴로 가입하면 적용",
    noExtraCost: "추가 비용 없음 – 레퍼럴 때문에 거래 수수료가 오르는 일은 없습니다",
    oneReferralCovers: "레퍼럴 하나로 적용되는 범위:",
    claimOffer: (e) => `${e.name} 웰컴 혜택 받기`,
    tasksTitle: (e) => `${e.name} 웰컴 혜택: 미션과 보상`,
    tasksCaption: (e) => `${e.name} 신규 사용자 미션과 미션별 보상`,
    task: "미션",
    reward: "보상",
    tasksNote: (e, date) =>
      `${date}에 ${josa(e.name, "이/가")} 안내한 내용입니다. 혜택은 국가마다 다르고 자주 바뀌므로, 가입 후 계정에 표시되는 조건이 실제로 적용되는 조건입니다.`,

    /* How to use the code */
    useCodeTitle: (e) => `${e.name} 레퍼럴 코드 ${e.referralCode} 사용 방법`,
    whereToEnter: (e) => `${e.name} 레퍼럴 코드 입력 위치`,
    forgotCode: "코드를 빠뜨렸다면? 가입 후 추가하기",
    asInvited: "초대받은 사용자가 받는 혜택",
    interfaceNote: (e) => (
      <>
        따옴표 안의 입력란과 버튼 이름은 저희가 확인한 {e.name} 영문 인터페이스의 표기입니다. 한국어 인터페이스에서는 이름이 다를 수 있습니다.
      </>
    ),

    /* Registration */
    howToTitle: (e) => `${e.name} 가입 방법: 단계별 안내`,
    howToIntro: (e) => (
      <>
        {e.name}에서는 {viaMethods(e.signup.methods)} 계정을 만들 수 있습니다. 아래는 {josa(e.name, "이/가")} 안내하는 가입 단계이며, 레퍼럴 코드{" "}
        <strong>{e.referralCode}</strong>
        {particle(e.referralCode, "이/가")} 들어가는 단계도 함께 표시했습니다.
      </>
    ),
    startRegistration: (e) => `${e.name} 가입 시작하기`,

    /* Verification */
    kycTitle: (e) => `${e.name} 본인 인증(KYC)`,
    verification: "인증",
    minAge: "최소 연령",
    documents: "제출 가능한 서류",

    /* Key facts */
    factsTitle: (e) => `${e.name} 한눈에 보기`,
    founded: "설립",
    headquarters: "본사",
    futuresFees: "선물 수수료 (메이커 / 테이커)",
    spotFees: "현물 수수료 (메이커 / 테이커)",
    maxLeverage: "최대 레버리지",
    assets: "상장 자산",
    openInterest: "미결제약정",
    volume24h: "24시간 파생상품 거래량",
    users: "사용자 수",
    regulation: "규제",
    factsNote: (date) => `미결제약정, 거래량, 마켓 수: CoinMarketCap 파생상품 순위(${date}). 수수료: 검토일 기준 기본 등급.`,

    /* Fees */
    feesTitle: (e) => `${e.name} 수수료 구조`,
    feesIntro: (e) =>
      `${josa(e.name, "은/는")} 메이커/테이커 방식을 사용합니다. 호가창에 유동성을 더하는 주문(지정가 주문)에는 메이커 수수료가, 유동성을 가져가는 주문(시장가 주문)에는 테이커 수수료가 붙습니다. 30일 거래량이나 보유 자산이 늘수록 수수료율은 낮아집니다.`,
    market: "시장",
    maker: "메이커",
    taker: "테이커",
    futuresRow: "선물 / 무기한 선물",
    spotRow: "현물",
    feesNote: (e, date) => `${josa(e.name, "이/가")} 공개한 기본(VIP 미적용) 요율, ${date} 확인.`,
    funding: "무기한 계약의 펀딩비는 거래소가 아니라 트레이더끼리 주고받습니다.",
    liveSchedule: (e) => `${e.name} 최신 수수료표 보기`,
    feesCompare: (e, others, links) => (
      <>
        다른 거래소와 비교하면 어떨까요? <Link href={`${links.alternatives}#fees`}>{e.name} 대안 거래소 비교</Link>에서 {e.name} 수수료를{" "}
        {list(others)}의 수수료와 나란히 놓고 비교합니다.
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `${e.name} 소개`,
    products: "상품",
    prosConsTitle: (e) => `${e.name} 장단점`,
    pros: "장점",
    cons: "단점",
    bestForTitle: (e) => `${josa(e.name, "은/는")} 누구에게 맞는 거래소인가요?`,
    openAccount: (e) => `${e.name} 계정 만들기`,
    notAMatch: (e, count, links, pairs) => (
      <>
        잘 맞지 않나요? <Link href={links.alternatives}>가장 좋은 {e.name} 대안 거래소 {count}곳</Link>과 각 거래소가 어떤 경우에 가장 잘 맞는지 확인하거나,{" "}
        <Link href={pairs[0].href}>{pairs[0].label}</Link>, <Link href={pairs[1].href}>{pairs[1].label}</Link> 맞대결 비교를 살펴보세요.
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `${josa(e.name, "은/는")} 안전한가요?`,
    availability: "이용 가능 여부:",
    closedWhereYouLive: (e, links) => (
      <>
        거주 국가에서 {josa(e.name, "을/를")} 이용할 수 없나요? <Link href={`${links.alternatives}#countries`}>{e.name} 대안 거래소 페이지의 국가별 표</Link>
        에서 다른 거래소 가운데 어느 곳이 거주 국가의 이용자를 받는지 확인할 수 있습니다.
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `${e.name} 레퍼럴 코드와 가입 – 자주 묻는 질문`,
    faqIntro: (e, count) =>
      `${e.name} 레퍼럴 코드 ${e.referralCode}, 계정 만들기와 본인 인증, 웰컴 혜택, 수수료에 관한 질문 ${count}개를 정리했습니다.`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "출처: 이 정보를 확인한 곳",
    sourcesIntro: (e, date) =>
      `레퍼럴 코드, 가입, 인증, 웰컴 혜택, 수수료에 관한 이 페이지의 모든 내용은 ${date}에 ${e.name} 공식 웹사이트와 고객센터에서 확인했습니다. 거래소는 예고 없이 혜택과 수수료를 바꾸고 국가마다 다른 조건을 보여 주므로, 최종 기준은 아래 페이지입니다.`,

    /* Alternatives */
    alternativesTitle: (e) => `${e.name} 대안 거래소`,
    alternativesIntro: (e, count, links) => (
      <>
        {josa(e.name, "이/가")} 나에게 맞는지 확신이 서지 않나요? 아래는 가장 가까운 대안 거래소로, 거래소마다 레퍼럴 가입 링크를 함께 실었습니다.{" "}
        <Link href={links.alternatives}>{e.name} 대안 거래소 전체 비교</Link>에서는 {count}곳 모두를 수수료, 레버리지, 상품, 인증, 국가별 이용 가능 여부로{" "}
        {josa(e.name, "과/와")} 비교합니다.
      </>
    ),
    headToHeadTitle: (e) => `${e.name} 맞대결 비교`,
    headToHeadIntro: (e) =>
      `${josa(e.name, "과/와")} 다른 거래소 한 곳 사이에서 고민 중인가요? 두 거래소씩 짝지어 수수료, 레버리지, 상품, 국가, 레퍼럴 혜택을 비교한 페이지가 따로 있습니다:`,
    compareAll: (e, count) => `${e.name} 대안 거래소 ${count}곳 모두 비교하기`,
    allComparisons: "모든 거래소 비교 보기 →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>위험 경고:</strong> 암호화폐 파생상품은 복잡한 상품입니다. 레버리지는 수익과 손실을 모두 키우며, 몇 분 사이에 증거금 전부를 잃을 수
        있습니다. 이 페이지는 정보 제공용이며 금융 조언이 아닙니다. 저희 링크로 가입하면 저희가 커미션을 받을 수 있습니다. 자세한 내용은{" "}
        <Link href={disclosureHref}>제휴 고지</Link>를 확인하세요.
      </>
    ),
    joinTitle: (e) => `3분 안에 ${e.name} 가입하기`,
    joinText: (e) => `${benefit(e)} – 레퍼럴 하나로 현물과 선물에 모두 적용됩니다.`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `${name} 레퍼럴 코드`,
      signup: (name) => `${name} 가입과 본인 인증`,
      bonus: (name) => `${name} 웰컴 보너스와 보상`,
      fees: (name) => `${name} 수수료와 거래`,
      safety: () => "안전성과 이용 가능 여부",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `${e.name} 레퍼럴 코드는 무엇인가요?`,
          a: `${e.name} 레퍼럴 코드는 ${e.referralCode}입니다. ${r.apply} ${josa(e.name, "은/는")} 이 코드를 ${josa(r.codeName, "이라/라")}고 부릅니다.`,
        },
        { topic: "referral", q: `${e.name} 레퍼럴 코드는 어디에 입력하나요?`, a: r.whereToEnter },
        { topic: "referral", q: `가입한 뒤에도 ${e.name} 레퍼럴 코드를 추가할 수 있나요?`, a: r.afterSignup },
        { topic: "referral", q: `${e.name} 레퍼럴 코드 ${josa(e.referralCode, "으로/로")} 무엇을 받을 수 있나요?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `${e.name} 레퍼럴 코드는 현물과 선물에 모두 적용되나요?`,
          a: `예. 레퍼럴은 특정 상품이 아니라 ${e.name} 계정에 연결되므로, ${josa(e.referralCode, "으로/로")} 한 번 가입하면 ${list(e.referralCovers)}에 모두 적용됩니다.`,
        },
        {
          topic: "referral",
          q: `${e.name} 레퍼럴 코드를 쓰면 비용이 드나요?`,
          a: `아니요. ${josa(e.referralCode, "을/를")} 입력하는 것은 무료이며 거래 수수료도 오르지 않습니다. ${josa(e.name, "은/는")} 레퍼럴 프로그램 비용을 자체 수수료 수입에서 지급합니다.`,
        },
        {
          topic: "signup",
          q: `${e.name}에는 어떻게 가입하나요?`,
          a: `가입은 ${s.steps.map((st, i) => `${i + 1}. ${stepTitle(st.title)}`).join(", ")} 순서로 진행됩니다. ${viaMethods(s.methods)} 가입할 수 있습니다.`,
        },
        { topic: "signup", q: `${e.name}에서 본인 인증(KYC)을 꼭 해야 하나요?`, a: s.kyc },
        { topic: "signup", q: `${e.name} 본인 인증에 사용할 수 있는 서류는 무엇인가요?`, a: s.documents },
        { topic: "signup", q: `${e.name} 계정은 몇 살부터 만들 수 있나요?`, a: s.minAge },
        {
          topic: "fees",
          q: `${e.name} 거래 수수료는 얼마인가요?`,
          a: `기본 등급 기준으로 ${josa(e.name, "은/는")} 현물에서 메이커 ${e.spotFees.maker} / 테이커 ${e.spotFees.taker}, 무기한 선물에서 메이커 ${e.futuresFees.maker} / 테이커 ${e.futuresFees.taker}의 수수료를 받습니다.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `${josa(e.name, "을/를")} 이용할 수 없는 국가는 어디인가요?`, a: e.restricted },
      ];
    },
  },
};
