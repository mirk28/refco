import type { ReactNode } from "react";
import Link from "next/link";
import type { Exchange } from "@/data/types";

/**
 * Texts of the "[Exchange] alternatives" pages in English (template: `src/components/AlternativesPage.tsx`).
 * This file defines the shape (`AlternativesTexts` below); every other language in this folder provides the
 * same keys. The sentences that are built from the data live in `../compare/`.
 */
export const en = {
  /* ------------------------------- metadata ------------------------------- */
  title: (x: Exchange, n: number, shortMonthYear: string) => `${x.name} Alternatives (${shortMonthYear}): ${n} Exchanges Compared`,
  description: (x: Exchange, names: string, n: number, former: string | undefined, monthYear: string) =>
    `${names}: ${n} ${x.name}${former ? ` (${former})` : ""} alternatives compared by fees, leverage, KYC, countries and referral codes – official data, checked ${monthYear}.`,
  keywords: (x: Exchange, alts: Exchange[], former: string | undefined) => [
    `${x.name} alternatives`,
    `${x.name} alternative`,
    `exchanges like ${x.name}`,
    `best ${x.name} alternatives`,
    `${x.name} competitors`,
    `${x.name} alternative lower fees`,
    `${x.name} alternative without KYC`,
    ...(former ? [`${former} alternatives`, `${former} alternative`] : []),
    ...alts.map((a) => `${a.name} vs ${x.name}`),
  ],
  crumbHome: "Home",
  crumbReferral: (name: string) => `${name} referral code`,
  crumbAlternatives: (name: string) => `${name} alternatives`,
  listLdName: (name: string) => `${name} alternatives`,
  listLdDescription: (name: string) => `Exchanges compared with ${name}, in the order of CoinMarketCap's derivatives ranking.`,
  howToLdName: (name: string) => `How to switch from ${name} to another exchange`,
  howToLdDescription: (name: string) => `What to check and in which order when you move from ${name} to another crypto exchange.`,
  /** Share card. */
  ogTitle: (name: string) => `${name} Alternatives`,
  ogSubtitle: (names: string) => `${names} – fees, leverage, KYC and countries compared`,

  /* --------------------------------- words --------------------------------- */
  /** Joins the last two names of a list of links: " and ". */
  and: (_next: string) => " and ",
  noneOfThem: "None of them",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date: string) => `Checked and updated ${date}`,
  h1: (name: string, n: number) => `${name} Alternatives: ${n} Exchanges Compared`,
  quickAnswer: "Quick answer",
  chipsLabel: "What is compared",
  chips: (n: number, products: number, countries: number) => [`${n} exchanges`, "Fees & leverage", `${products} products`, `${countries} countries`, "KYC & regulation", "Referral codes"],
  glanceTitle: (name: string) => `${name} alternatives at a glance`,
  glanceIntro: "What each one is best for, with its standard futures fees (maker / taker).",
  glanceOrder: (marketDate: string) => `Order: CoinMarketCap derivatives ranking, ${marketDate}. Leveraged trading is high-risk.`,
  onThisPage: "On this page",
  toc: (name: string, n: number): [string, string][] => [
    ["at-a-glance", "At a glance"],
    ["why", `Why switch from ${name}?`],
    ["alternatives", `The ${n} alternatives`],
    ["by-need", "Best for each need"],
    ["fees", "Fees"],
    ["products", "Products"],
    ["countries", "Countries"],
    ["kyc", "Verification (KYC)"],
    ["safety", "Regulation & reserves"],
    ["referral-codes", "Referral codes"],
    ["switch", "How to switch"],
    ["faq", "FAQ"],
    ["sources", "Sources"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name: string, monthYear: string) => `${name} alternatives compared (${monthYear})`,
  comparedIntro: (name: string, n: number, date: string) =>
    `The ${n} alternatives next to ${name} itself. Fees are the standard (non-VIP) rates each exchange publishes, shown as maker / taker; leverage is the maximum it documents; the referral code is the one you can use to sign up. Every figure was read on the exchange's own site on ${date}.`,
  comparedCaption: (name: string, n: number) => `${name} and ${n} alternatives: what each is best for, fees, leverage and referral code`,
  colExchange: "Exchange",
  colBestFor: "Best for",
  colFuturesFees: "Futures fees",
  colSpotFees: "Spot fees",
  colMaxLeverage: "Max leverage",
  colReferralCode: "Referral code",
  colAction: "Action",
  forComparison: "for comparison",
  signUp: "Sign up",
  comparedOrder: (marketDate: string) => `Order of the alternatives: CoinMarketCap derivatives ranking, ${marketDate}.`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name: string) => `Why look for an alternative to ${name}?`,
  whyIntro: (name: string, sourcesHref: string): ReactNode => (
    <>
      These are the points on which {name} itself sets limits – each taken from {name}&apos;s own pages (see the{" "}
      <Link href={sourcesHref}>source list on our {name} page</Link>). If none of them affects you, staying is a perfectly good choice.
    </>
  ),
  stayTitle: (name: string) => `When ${name} is still the right choice`,
  stayOutro: (name: string, code: string, href: string): ReactNode => (
    <>
      Decided to stay? Our <Link href={href}>{name} referral code page</Link> has the code {code}, the sign-up steps and the current new-user offer.
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name: string, n: number) => `The ${n} best ${name} alternatives in detail`,
  detailIntro: (name: string) =>
    `Each alternative is measured against ${name} on the same points: fees, leverage, market size, verification, referral rules, products and the countries it accepts. "Ahead" only lists differences that can be read off the exchanges' own figures.`,
  rowFuturesFees: "Futures fees (maker / taker)",
  rowSpotFees: "Spot fees (maker / taker)",
  rowMaxLeverage: "Max leverage",
  rowAssets: "Listed assets",
  rowOpenInterest: "Derivatives open interest",
  rowUsers: "Users",
  rowFounded: "Founded",
  rowKyc: "Identity verification",
  rowAddLater: "Add referral code later?",
  rowOffer: "New-user offer",
  bestFor: (role: string) => `Best for: ${role}`,
  asAlternative: (name: string) => `as a ${name} alternative`,
  chooseIf: (a: string, x: string) => `Choose ${a} instead of ${x} if …`,
  thinkTwiceIf: "Think twice if …",
  whereAhead: (a: string, x: string) => `Where ${a} is ahead of ${x}`,
  whereBehind: (x: string) => `Where ${x} is ahead`,
  noAdvantage: "No measurable advantage on the points we compare.",
  codeLabel: (name: string) => `${name} referral code`,
  signUpOn: (name: string) => `Sign up on ${name}`,
  linkReferral: (name: string, code: string) => `${name} referral code ${code}: offer, sign-up steps and KYC`,
  linkVersus: (a: string, x: string) => `${a} vs ${x}: full head-to-head comparison`,
  linkAlternatives: (name: string) => `${name} alternatives`,
  sideBySide: (a: string, x: string) => `${a} vs ${x}: all figures side by side`,
  sideBySideCaption: (a: string, x: string) => `${a} vs ${x}: fees, leverage, assets, verification and referral rules`,
  versusHead: (a: string, x: string) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name: string) => `The best ${name} alternative for each need`,
  needIntro: (n: number) => `Which of the ${n} comes out on top depends on what you are looking for. The table answers it per need – from the numbers, without a ranking of our own.`,
  needCaption: (name: string) => `Best ${name} alternative by need`,
  needColWant: "If you want …",
  needColLook: "Look at",
  needColWhy: "Why",
  needLowestFutures: "Lowest futures fees",
  needLowestSpot: "Lowest spot fees",
  needHighestLeverage: "Highest leverage",
  needDeepest: "Deepest derivatives market",
  needMostMarkets: "Most derivatives markets",
  needMica: "MiCA-authorised platform for the EEA",
  needAddLater: "Referral code can be added after sign-up",
  whyStandardTier: (fees: string) => `${fees} maker / taker on the standard tier`,
  whyOpenInterest: (amount: string, marketDate: string) => `${amount} open interest (CoinMarketCap, ${marketDate})`,
  whyMarkets: (markets: number, marketDate: string) => `${markets} markets (CoinMarketCap, ${marketDate})`,
  whyFeature: "Shown on the exchange's own site – what exactly is offered is listed under Products",
  needNotFound: (n: number) => `Not found on the sites of the ${n} alternatives at our check.`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name: string) => `Fees: ${name} vs. its alternatives`,
  feesIntro:
    "All seven exchanges use a maker/taker model: limit orders that add liquidity pay the maker fee, orders that take liquidity pay the taker fee. The table shows the standard tier – the rates a new account pays before any VIP level or token discount.",
  feesCaption: (name: string) => `Standard spot and futures fees of ${name} and its alternatives`,
  colFuturesMaker: "Futures maker",
  colFuturesTaker: "Futures taker",
  colSpotMaker: "Spot maker",
  colSpotTaker: "Spot taker",
  colOtherMarkets: "Other markets (maker / taker)",
  feesNote: (date: string) => `Standard (non-VIP) rates as published by each exchange, checked ${date}. Fees change – confirm on the exchange before trading.`,
  cheaperTitle: (name: string) => `Who is cheaper than ${name}?`,
  tokenTitle: "Token discounts and fine print",
  noTokenDiscount: "No discount for paying fees with an exchange token is published.",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "Products: what each exchange offers",
  productsIntro: (date: string) =>
    `A tick means the exchange shows the product on its own site. A dash means we found no page for it there on ${date} – it does not prove that the product does not exist. What is offered can differ by country, especially on regional platforms.`,
  productsCaption: (name: string) => `Products offered by ${name} and its alternatives`,
  colProduct: "Product",
  productDetailsTitle: "Product details per exchange",
  productDetails: (name: string) => `${name}: products in detail`,
  offered: "Offered",
  notOffered: "Not offered",
  noPageFound: "No page found on the exchange's own site",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name: string) => `Availability: ${name} and its alternatives by country`,
  countriesIntro: (count: number) =>
    `Where you live is the most common reason to need an alternative. The table shows, for ${count} countries, what each exchange's own terms say. "Regional site" means the exchange serves the country through a separate platform with its own products, fees and limits.`,
  countriesCaption: (name: string) => `Country availability of ${name} and its alternatives`,
  colCountry: "Country",
  legendRestricted: "closed to residents according to the exchange's own terms or notices",
  legendRegional: "served by a separate regional platform",
  legendPartial: "only some products or regions",
  legendOpen: (date: string) => `not on the restricted list on ${date}`,
  countriesNote:
    '"Not restricted" is no guarantee that every product is offered in that country. The exchange\'s terms at the moment you register are the ones that apply, and all of these exchanges forbid getting around a restriction with a VPN or false details.',
  countryHeading: (name: string, country: string) => `${name} alternatives in ${country}`,
  restrictedTitle: "Restricted countries and regional platforms per exchange",
  whereNotAvailable: (name: string) => `Where is ${name} not available?`,
  regionalPlatforms: "Regional platforms:",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name: string) => `Verification: is there a ${name} alternative without KYC?`,
  kycIntro: (n: number) =>
    `Not among these ${n}. Every exchange in this comparison asks new users for identity verification, and on most of them deposits or trading stay locked until it is done. The differences are in what an unverified account can still do.`,
  kycCaption: (name: string) => `Identity verification on ${name} and its alternatives`,
  colKyc: "Identity verification",
  kycDetailsTitle: "What each exchange says about verification",
  kycQuestion: (name: string) => `Do I need identity verification (KYC) on ${name}?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "Regulation, proof of reserves and protection funds",
  safetyIntro:
    "No centralised exchange is risk-free. What can be compared is what each one publishes about itself: where it is licensed, whether it proves its reserves and whether it keeps a fund for emergencies.",
  safetyCaption: (name: string) => `Regulation, proof of reserves and protection funds of ${name} and its alternatives`,
  colLicences: "Licences named by the exchange",
  colReserves: "Proof of reserves",
  colFund: "Protection fund",
  noneNamed: "None named",
  safetyNote: "Reserve ratios are the exchanges' own figures from the snapshot dates given. Only keep funds on an exchange that you actively trade with.",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name: string) => `Referral codes for the ${name} alternatives`,
  codesIntro:
    "If you open an account on one of the alternatives, do it with a referral code: it costs nothing, never raises your fees and unlocks the exchange's new-user offer. The last column matters most – on several exchanges a forgotten code cannot be added afterwards.",
  codesCaption: (name: string) => `Referral codes of ${name} and its alternatives`,
  colOffer: "New-user offer",
  colWhere: "Where the code goes",
  colLater: "Can it be added later?",
  codesRow: (name: string) => `${name} referral code`,
  codesNote: (date: string) => `Offers checked ${date}. Welcome rewards are task-based, require identity verification and differ by country.`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name: string) => `How to switch from ${name} to another exchange`,
  switchIntro: "Moving is less work than it sounds, as long as you keep the order: account first, verification second, funds last.",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name: string) => `${name} alternatives – FAQ`,
  faqIntro: (name: string, count: number) => `${count} questions about replacing ${name}: which exchange fits which need, fees, countries, verification and how to move.`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "Sources: where these figures come from",
  sourcesIntro: (date: string, marketDate: string) =>
    `Everything on this page about fees, leverage, products, verification, countries, licences, reserves and referral rules was read on the exchanges' own websites and help centres on ${date}. Open interest and the number of derivatives markets come from CoinMarketCap's derivatives ranking (${marketDate}). Exchanges change terms without notice, so the pages below are the final word.`,
  sourcesSummary: (name: string, count: number, focus: boolean) => `${name}: ${count} official pages${focus ? "" : " checked for this comparison"}`,
  sourcesMore: (name: string, count: number, href: string): ReactNode => (
    <>
      Fees, leverage, verification, referral rules and the restricted list of {name}:{" "}
      <Link href={href}>
        all {count} sources on our {name} page
      </Link>
      .
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "More exchange comparisons",
  headToHeadTitle: (name: string) => `${name} head to head`,
  headToHeadIntro: "One alternative on your shortlist? The pair pages go deeper on fees, products, countries and referral offers:",
  otherAlternativesTitle: "Alternatives to the other exchanges",
  otherAlternativesIntro: "The same comparison from the point of view of each of the other exchanges:",
  referralLink: (name: string, code: string) => `${name} referral code ${code}`,
  allComparisons: "All exchange comparisons",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref: string): ReactNode => (
    <>
      <strong>Risk warning:</strong> Crypto derivatives are complex instruments. Leverage multiplies gains and losses, and you can lose your entire
      margin within minutes. This page is for information only and is not financial advice. We may earn a commission if you sign up through our
      links – see our <Link href={disclosureHref}>affiliate disclosure</Link>. That does not change the figures: they are the exchanges&apos; own.
    </>
  ),
  ctaTitle: (name: string) => `Found your ${name} alternative?`,
  ctaText: "Sign up with a verified referral code – one account for spot and futures, at no extra cost.",
  ctaButton: "See all referral codes",
};

export type AlternativesTexts = typeof en;
