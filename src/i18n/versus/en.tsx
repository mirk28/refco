/**
 * The head-to-head pages ("/<a>-vs-<b>") and the comparison hub ("/compare") in English.
 *
 * This file defines the shape of a language (`VersusText` below); every other language in this folder
 * provides the same keys. It holds
 *   – the labels of the scorecard and the sentences built from the comparison (`src/lib/versus.ts` has the logic),
 *   – the interface texts of `src/components/VersusPage.tsx` (`page`),
 *   – the interface texts of `src/components/CompareHubPage.tsx` (`hub`).
 * Sentences shared with the alternatives pages (fee sentences, advantages, products, countries) come from
 * `../compare`. Pass exchange entries of the same language.
 */
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, lcFirst, leverageOf, verb } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";

const locale = "en";
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

const withoutSource = (s: string) => s.replace(/\s*\((per [^)]*|[A-Za-z]+ API)\)/, "");
const lowerUpTo = (s: string) => s.replace(/^Up to/, "up to");
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) => (rows.length ? `${e.name} is ahead on ${joinList(rows.map((r) => r.topic))}` : `${e.name} is ahead on none of them`);
  return `Neither ${a.name} nor ${b.name} is better on every point. Of the ${s.measurable} measurable points in this comparison ${a.name} is ahead on ${s.a.length} and ${b.name} on ${s.b.length}${s.tie.length ? `, and ${s.tie.length} ${s.tie.length === 1 ? "is" : "are"} level` : ""}. ${lead(a, s.a)}. ${lead(b, s.b)}. Choose ${a.name} if ${lcFirst(altInfo(a).chooseIf[0])}. Choose ${b.name} if ${lcFirst(altInfo(b).chooseIf[0])}.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb) return `${a.name} and ${b.name} have the same maximum leverage: ${a.name} ${lowerUpTo(a.maxLeverage)}, ${b.name} ${lowerUpTo(b.maxLeverage)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} offers the higher maximum leverage – ${lowerUpTo(hi.maxLeverage)} – against ${lowerUpTo(lo.maxLeverage)} on ${lo.name}.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `On CoinMarketCap's derivatives ranking (${prettyDate(site.marketDataDate)}) ${a.name} held ${formatBn(a.market.openInterestBn)} of open interest across ${a.market.markets} markets and ${b.name} ${formatBn(b.market.openInterestBn)} across ${b.market.markets}. ${deeper.name} has the deeper market, which usually means tighter spreads on large orders.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} offers ${joinList(notOffered.map((f) => f.noun))}, which ${b.name} does not.` : "",
    notFound.length ? `${a.name} offers ${joinList(notFound.map((f) => f.noun))}; on ${b.name}'s own site we found no such product.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} is closed to ${c.residents}${extra}`;
  if (status === "regional") return `${e.name} serves ${c.residents} through a regional platform${extra}`;
  if (status === "partial") return `${e.name} restricts ${c.name} in part${extra}`;
  return `${e.name} does not list ${c.name} as restricted`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText(locale).countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. Country lists change, and a country that is not listed is no guarantee that every product is offered there – the exchange's own terms decide.`;

/* ------------------------------------ FAQ ------------------------------------ */

export type VersusFaqGroup = { id: string; title: string; faqs: Faq[] };

/**
 * All questions a head-to-head page answers, grouped for display.
 * `s` is the score of the pair, `differing` the countries in which the two have a different status
 * (both from `src/lib/versus.ts`, which wraps this function as `buildVersusFaqs(a, b, locale)`).
 */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) => (has(a, key) && has(b, key) ? "both" : has(a, key) ? `${a.name} only` : has(b, key) ? `${b.name} only` : "found on neither site");

  const verdict: Faq[] = [
    { q: `Which is better, ${a.name} or ${b.name}?`, a: versusAnswer(a, b, s) },
    {
      q: `What is the main difference between ${a.name} and ${b.name}?`,
      a: `${ia.pick}. ${ib.pick}.${aheadA.length ? ` ${a.name}'s clearest measurable advantages: ${aheadA.slice(0, 2).map(lcFirst).join("; ")}.` : ""}${aheadB.length ? ` ${b.name}'s: ${aheadB.slice(0, 2).map(lcFirst).join("; ")}.` : ""}`,
    },
    {
      q: `Is ${a.name} bigger than ${b.name}?`,
      a: `On CoinMarketCap's derivatives ranking (${marketDate}) ${a.name} held ${formatBn(a.market.openInterestBn)} of open interest and ${formatBn(a.market.volume24hBn)} of 24-hour volume, ${b.name} ${formatBn(b.market.openInterestBn)} and ${formatBn(b.market.volume24hBn)}. By their own figures ${a.name} has ${withoutSource(a.users)} and ${b.name} ${withoutSource(b.users)}.`,
    },
    {
      q: `Which is better for beginners, ${a.name} or ${b.name}?`,
      a: `For a first account three things matter: an easy way to buy crypto, a way to practise and low fees. Purchases by card or bank transfer: ${state("fiat")}. Demo trading: ${state("demoTrading")}. Copy trading: ${state("copyTrading")}. ${feeSentence(a, b, "spot")} Identity verification – ${a.name}: ${lcFirst(a.signup.kycShort)}; ${b.name}: ${lcFirst(b.signup.kycShort)}.`,
    },
    {
      q: `Which is better for futures trading, ${a.name} or ${b.name}?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} High leverage sharply increases the risk of liquidation.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Which has lower fees, ${a.name} or ${b.name}?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} These are the standard (non-VIP) rates; VIP levels and exchange tokens lower them further.`,
    },
    {
      q: `Do ${a.name} and ${b.name} give a discount for paying fees with their own token?`,
      a: `${a.name}: ${a.tokenDiscount || "No such discount is published."} ${b.name}: ${b.tokenDiscount || "No such discount is published."}`,
    },
    { q: `Which offers higher leverage, ${a.name} or ${b.name}?`, a: `${leverageSentence(a, b)} High leverage sharply increases the risk of liquidation.` },
    {
      q: `Which lists more coins, ${a.name} or ${b.name}?`,
      a: `By their own figures ${a.name} lists ${withoutSource(a.assets)} and ${b.name} ${withoutSource(b.assets)}. The exchanges count differently – some count coins, others trading pairs – so the two figures are not directly comparable.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `Can I use ${a.name} or ${b.name} in ${c.name}?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `Do ${a.name} and ${b.name} require KYC?`,
      a: `Yes, both ask new users for identity verification. ${a.name}: ${lcFirst(a.signup.kycShort)}. ${b.name}: ${lcFirst(b.signup.kycShort)}. Neither is an option for trading without verification.`,
    },
    {
      q: `Which is safer, ${a.name} or ${b.name}?`,
      a: `No centralised exchange is risk-free, so the honest comparison is what each one publishes. ${a.name}: ${a.regulation}. Proof of reserves – ${ia.reserves}. ${ia.fund ? `${ia.fund}.` : "No protection fund named."} ${b.name}: ${b.regulation}. Proof of reserves – ${ib.reserves}. ${ib.fund ? `${ib.fund}.` : "No protection fund named."} Keep only the funds you actively trade with on either exchange.`,
    },
    {
      q: `Are ${a.name} and ${b.name} regulated in the EU under MiCA?`,
      a: `${a.name}: ${ia.mica ? `yes – ${ia.mica}` : "names no MiCA-authorised entity on its own pages"}. ${b.name}: ${ib.mica ? `yes – ${ib.mica}` : "names no MiCA-authorised entity on its own pages"}. A regional platform usually has its own product range, fees and limits.`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const products: Faq[] = [
    {
      q: `What does ${a.name} offer that ${b.name} does not?`,
      a: onlyA || `Nothing among the ${featureList.length} products we compare: every product ${a.name} shows on its site is also shown by ${b.name}.`,
    },
    {
      q: `What does ${b.name} offer that ${a.name} does not?`,
      a: onlyB || `Nothing among the ${featureList.length} products we compare: every product ${b.name} shows on its site is also shown by ${a.name}.`,
    },
    {
      q: `Do ${a.name} and ${b.name} offer copy trading, trading bots, options and demo trading?`,
      a: `Copy trading: ${state("copyTrading")}. Trading bots: ${state("tradingBots")}. Options: ${state("options")}. Demo trading: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Where only one exchange is named, we found no page for the product on the other one's own site on ${prettyDate(site.lastReviewed)}.` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `What are the referral codes for ${a.name} and ${b.name}?`,
      a: `${a.name}: ${a.referralCode} – ${lcFirst(a.referral.whereShort)}. ${b.name}: ${b.referralCode} – ${lcFirst(b.referral.whereShort)}. Both codes are free to use and do not raise your trading fees.`,
    },
    {
      q: `Which has the better sign-up bonus, ${a.name} or ${b.name}?`,
      a: `${a.name}: ${lcFirst(offer(a))}. ${b.name}: ${lcFirst(offer(b))}. Welcome rewards on both exchanges are tied to conditions such as identity verification, deposits or trading volume and differ by country, so compare the conditions, not the headline figure.`,
    },
    {
      q: `Can I add a referral code later on ${a.name} or ${b.name}?`,
      a: `${a.name}: ${lcFirst(a.referral.afterSignupShort)}. ${b.name}: ${lcFirst(b.referral.afterSignupShort)}. The safe way on both is to register through the referral link.`,
    },
    {
      q: `Can I use ${a.name} and ${b.name} at the same time?`,
      a: `Yes. They are separate companies, so an account on one does not affect an account on the other, and many traders keep funds on two exchanges. Fee tiers, referrals and rewards are tied to each account and do not carry over.`,
    },
    {
      q: `How do I move crypto from ${a.name} to ${b.name}?`,
      a: `1. Open your ${b.name} account with the referral code ${b.referralCode} and complete identity verification. 2. Close open futures and margin positions on ${a.name} – positions cannot be moved between exchanges. 3. In ${b.name}, copy the deposit address for the coin and the network you want to use. 4. Withdraw from ${a.name} to that address on the same network, and send a small test amount first: a transfer on the wrong network can be lost. The same steps work in the other direction.`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} or ${b.name}: which is better?`, faqs: verdict },
    { id: "fees", title: "Fees, leverage and coins", faqs: fees },
    { id: "countries", title: "Countries, KYC and safety", faqs: countries },
    { id: "products", title: "Products", faqs: products },
    { id: "referral", title: "Referral codes and moving between them", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

/** What the hub page says about the whole field. `all` is in the order of the `exchanges` array, `ranked` by market size. */
export type HubFacts = {
  all: Exchange[];
  ranked: Exchange[];
  lowF: Exchange[];
  lowS: Exchange[];
  hi: Exchange[];
  oi: Exchange[];
  mica: Exchange[];
  /** Review date and date of the market data, already formatted. */
  date: string;
  marketDate: string;
};

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) =>
  `${names(lowF)} ${verb(lowF, "has", "have")} the lowest standard futures fees (${feePair(lowF[0].futuresFees)} maker / taker), ${names(hi)} the highest leverage (${leverageOf(hi[0])}x) and ${names(oi)} the deepest derivatives market (${formatBn(oi[0].market.openInterestBn)} open interest). ${names(mica)} ${verb(mica, "names", "name")} a MiCA-authorised platform for EEA residents. Which exchange is better for you depends on the pair you are deciding between – pick it below.`;

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  return [
    {
      q: "Which crypto exchange has the lowest fees?",
      a: `On the standard tier ${names(lowF)} ${verb(lowF, "has", "have")} the lowest futures fees with ${feePair(lowF[0].futuresFees)} (maker / taker), and ${names(lowS)} the lowest spot fees with ${feePair(lowS[0].spotFees)}. The other exchanges: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} ${feePair(e.futuresFees)} on futures and ${feePair(e.spotFees)} on spot`)
        .join("; ")}. VIP levels and exchange tokens lower these rates further.`,
    },
    {
      q: "Which crypto exchange offers the highest leverage?",
      a: `${names(hi)}: ${hi[0].maxLeverage.replace(/^Up to/, "up to")}. The others: ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}. High leverage sharply increases the risk of liquidation.`,
    },
    {
      q: "Which crypto exchange has the deepest futures market?",
      a: `Measured by open interest on CoinMarketCap's derivatives ranking (${marketDate}): ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}. A deeper market usually means tighter spreads on large orders.`,
    },
    {
      q: "Which exchanges have a MiCA-authorised platform for the EEA?",
      a: `${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}. ${names(all.filter((e) => !altInfo(e).mica))} name no MiCA-authorised entity on their own pages. A regional platform usually has its own product range, fees and limits.`,
    },
    {
      q: "Which exchanges let me add a referral code after signing up?",
      a: `${later.map((e) => `${e.name}: ${e.referral.afterSignupShort.charAt(0).toLowerCase()}${e.referral.afterSignupShort.slice(1)}`).join(". ")}. On ${names(all.filter((e) => addLater(e) === "no"))} the code only counts at registration or no way to add it later is documented – the safe way everywhere is to register through the referral link.`,
    },
    {
      q: "How are these comparisons made?",
      a: `Every figure is read on the exchange's own website or help centre – fee schedules, terms, restricted-country lists, product pages – and each page lists its sources. Open interest, volume and the number of derivatives markets come from CoinMarketCap's derivatives ranking. Which exchange is ahead on a point is read off those figures; there is no ranking of our own. The current review date is ${date}.`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const en = {
  /* ---- scorecard: label of each row and how the row is named inside a sentence ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "Futures fees (maker / taker)", topic: "futures fees" },
    spotFees: { label: "Spot fees (maker / taker)", topic: "spot fees" },
    leverage: { label: "Maximum leverage", topic: "maximum leverage" },
    openInterest: { label: "Derivatives open interest", topic: "open interest" },
    volume: { label: "24h derivatives volume", topic: "24-hour derivatives volume" },
    markets: { label: "Derivatives markets", topic: "number of derivatives markets" },
    users: { label: "Users (own figures)", topic: "user numbers" },
    assets: { label: "Listed assets (own figures)", topic: "" },
    founded: { label: "Founded", topic: "" },
    products: { label: (compared: number) => `Products found (of ${compared} compared)`, topic: "product range" },
    countries: { label: (compared: number) => `Countries closed (of ${compared} compared)`, topic: "country coverage" },
    mica: { label: "MiCA-authorised EEA platform", topic: "MiCA authorisation" },
    kyc: { label: "Identity verification (KYC)", topic: "" },
    addLater: { label: "Add a referral code later?", topic: "adding a referral code later" },
    offer: { label: "New-user offer", topic: "" },
    reserves: { label: "Proof of reserves", topic: "" },
    fund: { label: "Protection fund", topic: "" },
  },
  /** "3 of 11" */
  countOf: (count: number, of: number) => `${count} of ${of}`,
  /** Cell of an exchange that names no MiCA-authorised platform / no protection fund. */
  noMica: "None named",
  noFund: "None named",

  /* ---- sentences ---- */
  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    // Three wordings, chosen per pair.
    title: (a: Exchange, b: Exchange, shortMonthYear: string) =>
      fit(
        TITLE_MAX,
        [
          `${a.name} vs ${b.name} (${shortMonthYear}): Fees, Leverage & Bonus`,
          `${a.name} or ${b.name}? Fees, Leverage & KYC Compared`,
          `${a.name} vs ${b.name}: Which Exchange Is Better in ${yearOf(shortMonthYear)}?`,
        ][variant(3, a.slug, b.slug)],
        `${a.name} vs ${b.name} (${shortMonthYear})`,
      ),
    description: (a: Exchange, b: Exchange, monthYear: string) =>
      fit(
        DESC_MAX,
        `${a.name} vs ${b.name}: futures fees ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, leverage ${leverageOf(a)}x vs ${leverageOf(b)}x, products, countries, KYC and referral codes. Checked ${monthYear}.`,
        `${a.name} vs ${b.name}: futures fees ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, leverage ${leverageOf(a)}x vs ${leverageOf(b)}x, products, countries, KYC and referral codes.`,
      ),
    /** `former`: [earlier brand name of one exchange, name of the other exchange]. */
    keywords: (a: Exchange, b: Exchange, former: string[][]) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} or ${b.name}`,
      `${a.name} vs ${b.name} fees`,
      `${a.name} vs ${b.name} futures`,
      `${a.name} ${b.name} comparison`,
      `is ${a.name} better than ${b.name}`,
      `is ${b.name} better than ${a.name}`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "Home",
    crumbHub: "Exchange comparisons",
    crumbPage: (a: Exchange, b: Exchange) => `${a.name} vs ${b.name}`,

    formerNote: (e: Exchange, formerName: string) => `${e.name} is the exchange formerly known as ${formerName}.`,
    /** `pickA`, `pickB`: the half sentences from the alternatives data; `formerNote`: "" or the joined notes above. */
    lead: (a: Exchange, b: Exchange, pickA: string, pickB: string, formerNote: string, date: string) =>
      `${a.name} and ${b.name} are both centralised exchanges for spot and leveraged futures trading, and both run a referral programme for new users. ${pickA}. ${pickB}.${formerNote ? ` ${formerNote}` : ""} This page puts their fees, leverage, products, country availability, verification rules and referral offers side by side – every figure read on the exchanges' own sites on ${date}.`,

    toc: {
      "at-a-glance": "At a glance",
      verdict: "Which one to choose",
      fees: "Fees",
      leverage: "Leverage & depth",
      products: "Products",
      countries: "Countries",
      kyc: "Verification (KYC)",
      safety: "Safety & regulation",
      referral: "Referral codes",
      "pros-cons": "Pros & cons",
      faq: "FAQ",
      sources: "Sources",
    },
    onThisPage: "On this page",

    /* Hero */
    updated: (date: string) => `Checked and updated ${date}`,
    h1: (a: Exchange, b: Exchange) => `${a.name} vs ${b.name}: Fees, Leverage and Safety Compared`,
    quickAnswer: "Quick answer",
    keyFigures: "Key figures",
    /** `oiA`, `oiB`: open interest, already formatted. */
    chips: (a: Exchange, b: Exchange, oiA: string, oiB: string) => [
      `Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `${leverageOf(a)}x vs ${leverageOf(b)}x leverage`,
      `${oiA} vs ${oiB} open interest`,
    ],
    boxTitle: "Sign up with a referral code",
    boxNote: "Both codes are free and never raise your fees.",
    codeLabel: (e: Exchange) => `${e.name} referral code`,
    boxRisk: () => (
      <>
        Leveraged trading is high-risk. Neither exchange is available in every country – see <a href="#countries">countries</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a: Exchange, b: Exchange) => `${a.name} vs ${b.name} at a glance`,
    glanceText: (a: Exchange, b: Exchange, s: ScoreSummary) =>
      `Whether you search for ${a.name} vs ${b.name} or ${b.name} vs ${a.name}, the comparison is the same. Of the ${s.measurable} points that can be decided by the figures, ${a.name} is ahead on ${s.a.length} and ${b.name} on ${s.b.length}${s.tie.length ? `; ${s.tie.length} ${s.tie.length === 1 ? "is" : "are"} level` : ""}. The points are not equally important – lower fees matter more to an active trader than a longer coin list – so read the column that fits how you trade.`,
    glanceCaption: (a: Exchange, b: Exchange) => `${a.name} vs ${b.name}: fees, leverage, market size, products, countries, verification and referral rules`,
    compared: "Compared",
    ahead: "Ahead",
    /** Cell of the "Ahead" column when the two are level. */
    level: "Level",
    glanceNote: (marketDate: string, date: string) =>
      `Fees: standard (non-VIP) tier. Open interest, volume and markets: CoinMarketCap derivatives ranking, ${marketDate}. "–" means the two values cannot be ranked against each other. Everything else was read on the exchanges' own sites on ${date}.`,

    /* Verdict */
    verdictTitle: (a: Exchange, b: Exchange) => `${a.name} or ${b.name}: which one should you choose?`,
    verdictText:
      "There is no overall winner – each exchange is built for a different kind of trader. The two boxes show who each one suits and where it is measurably ahead of the other.",
    bestFor: (role: string) => `Best for: ${role}`,
    chooseIf: (e: Exchange) => `Choose ${e.name} if …`,
    aheadOf: (e: Exchange, other: Exchange) => `Where ${e.name} is ahead of ${other.name}`,
    noAdvantage: "No measurable advantage on the points we compare.",
    thinkTwice: "Think twice if …",
    codeButton: (e: Exchange) => `${e.name} referral code ${e.referralCode}`,

    /* Fees */
    feesTitle: (a: Exchange, b: Exchange) => `Fees: ${a.name} vs ${b.name}`,
    feesModel: "Both use a maker/taker model: limit orders that add liquidity pay the maker fee, orders that take liquidity pay the taker fee.",
    feesCaption: (a: Exchange, b: Exchange) => `Standard spot and futures fees of ${a.name} and ${b.name}`,
    exchange: "Exchange",
    futuresMaker: "Futures maker",
    futuresTaker: "Futures taker",
    spotMaker: "Spot maker",
    spotTaker: "Spot taker",
    otherMarkets: "Other markets (maker / taker)",
    feesNote: (date: string) => `Standard (non-VIP) rates as published by each exchange, checked ${date}. Fees change – confirm on the exchange before trading.`,
    tokenTitle: "Token discounts and fine print",
    noTokenDiscount: "No discount for paying fees with an exchange token is published.",

    /* Leverage */
    leverageTitle: "Leverage and market depth",
    leverageRisk: "High leverage sharply increases the risk of liquidation – the maximum is a limit, not a recommendation.",
    leverageCaption: (a: Exchange, b: Exchange) => `Leverage and derivatives market data of ${a.name} and ${b.name}`,
    maxLeverage: "Maximum leverage",
    openInterest: "Open interest",
    volume24h: "24h derivatives volume",
    derivativesMarkets: "Derivatives markets",
    listedAssets: "Listed assets (own figures)",
    leverageNote: (marketDate: string) =>
      `Market data: CoinMarketCap derivatives ranking, ${marketDate}. The exchanges count listed assets differently – some count coins, others trading pairs.`,

    /* Products */
    productsTitle: (a: Exchange, b: Exchange) => `Products: what ${a.name} and ${b.name} offer`,
    productsSame: (compared: number) => `Both exchanges show all ${compared} products we compare on their own sites; the differences are in the details.`,
    productsLegend: (date: string) => `A tick means the exchange shows the product on its own site; a dash means we found no page for it there on ${date}.`,
    productsCaption: (a: Exchange, b: Exchange) => `Products offered by ${a.name} and ${b.name}`,
    product: "Product",
    offered: "Offered",
    notOffered: "Not offered",
    noPage: "No page found on its own site",

    /* Countries */
    countriesTitle: (a: Exchange, b: Exchange) => `Countries: where ${a.name} and ${b.name} are available`,
    countriesText: (compared: number, differing: number) =>
      `For ${compared} countries, this is what each exchange's own terms say. The two differ in ${differing} of them. "Regional site" means the exchange serves the country through a separate platform with its own products, fees and limits.`,
    countriesCaption: (a: Exchange, b: Exchange) => `Country availability of ${a.name} and ${b.name}`,
    country: "Country",
    countriesNote: (date: string) =>
      `"Not restricted" means not on the exchange's restricted list on ${date} – no guarantee that every product is offered there. Both exchanges forbid getting around a restriction with a VPN or false details.`,
    differTitle: "Where the two differ",
    /** `countryName` carries its article where the language needs one. */
    differQuestion: (a: Exchange, b: Exchange, countryName: string) => `${a.name} or ${b.name} in ${countryName}?`,
    /** `hrefA`, `hrefB`: the country tables of the two alternatives pages. */
    neither: (a: Exchange, b: Exchange, hrefA: string, hrefB: string) => (
      <>
        Is neither open where you live? The country tables of the alternatives pages show which other exchanges accept your country:{" "}
        <Link href={hrefA}>{a.name} alternatives by country</Link> · <Link href={hrefB}>{b.name} alternatives by country</Link>.
      </>
    ),
    restrictedTitle: "Restricted countries and regional platforms",
    whereNot: (e: Exchange) => `Where is ${e.name} not available?`,
    regionalPlatforms: "Regional platforms:",

    /* Verification */
    kycTitle: (a: Exchange, b: Exchange) => `Verification: ${a.name} vs ${b.name}`,
    kycText:
      "Both ask new users for identity verification, so neither is an option for trading without KYC. The difference is in what an unverified account can still do and how the check works.",
    documents: "Documents:",
    minAge: "Minimum age:",
    howToRegister: (e: Exchange) => `How to register and verify on ${e.name}, step by step`,

    /* Safety */
    safetyTitle: (a: Exchange, b: Exchange) => `Safety and regulation: ${a.name} vs ${b.name}`,
    safetyText:
      "No centralised exchange is risk-free. What can be compared is what each one publishes about itself: where it is licensed, whether it proves its reserves and whether it keeps a fund for emergencies.",
    safetyCaption: (a: Exchange, b: Exchange) => `Regulation, proof of reserves and protection funds of ${a.name} and ${b.name}`,
    licences: "Licences named by the exchange",
    entity: "Operating entity",
    reserves: "Proof of reserves",
    fund: "Protection fund",
    founded: "Founded",
    isSafe: (e: Exchange) => `Is ${e.name} safe?`,
    safetyDetail: (e: Exchange) => `${e.name} safety and availability in detail`,

    /* Referral codes */
    referralTitle: (a: Exchange, b: Exchange) => `Referral codes and new-user offers: ${a.name} vs ${b.name}`,
    referralText:
      "Whichever you choose, register with a referral code: it costs nothing, never raises your fees and unlocks the exchange's new-user offer. Mind the last row – a forgotten code cannot always be added afterwards.",
    referralCaption: (a: Exchange, b: Exchange) => `Referral codes and new-user offers of ${a.name} and ${b.name}`,
    referralCodeOf: (e: Exchange) => `${e.name} referral code`,
    referralCode: "Referral code",
    newUserOffer: "New-user offer",
    inviteeReward: "What you get as an invited user",
    covers: "One referral covers",
    whereCode: "Where the code goes",
    addLater: "Can it be added later?",
    referralNote: (date: string) => `Offers checked ${date}. Welcome rewards are task-based, require identity verification and differ by country.`,

    /* Pros and cons */
    prosConsTitle: (a: Exchange, b: Exchange) => `Pros and cons of ${a.name} and ${b.name}`,
    pros: "Pros",
    cons: "Cons",

    /* FAQ */
    faqTitle: (a: Exchange, b: Exchange) => `${a.name} vs ${b.name} – FAQ`,
    faqText: (count: number, a: Exchange, b: Exchange) =>
      `${count} questions about choosing between ${a.name} and ${b.name}: fees, leverage, countries, verification, products and referral codes.`,

    /* Sources */
    sourcesTitle: "Sources: where these figures come from",
    sourcesText: (date: string, marketDate: string) =>
      `Everything on this page about fees, leverage, products, verification, countries, licences, reserves and referral rules was read on the two exchanges' own websites and help centres on ${date}. Open interest, volume and the number of derivatives markets come from CoinMarketCap's derivatives ranking (${marketDate}). Exchanges change terms without notice, so the pages below are the final word.`,
    officialPages: (e: Exchange, count: number) => `${e.name}: ${count} official pages`,

    /* More comparisons */
    moreTitle: "More comparisons",
    against: (e: Exchange) => `${e.name} against the other exchanges`,
    allAlternatives: (e: Exchange) => `All ${e.name} alternatives`,
    allComparisons: "All exchange comparisons",

    /* Risk notice and closing call to action */
    risk: (disclosureHref: string) => (
      <>
        <strong>Risk warning:</strong> Crypto derivatives are complex instruments. Leverage multiplies gains and losses, and you can lose your entire
        margin within minutes. This page is for information only and is not financial advice. We may earn a commission if you sign up through our
        links – see our <Link href={disclosureHref}>affiliate disclosure</Link>. That does not change the figures: they are the exchanges&apos; own.
      </>
    ),
    ctaTitle: (a: Exchange, b: Exchange) => `${a.name} or ${b.name}? Start with a referral code`,
    ctaText: "One account for spot and futures on either exchange, at no extra cost.",
    ctaButton: "Compare more exchanges",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear: string, pairs: number) =>
      fit(TITLE_MAX, `Crypto Exchange Comparisons (${shortMonthYear}): ${pairs} Matchups`, `Crypto Exchange Comparisons (${shortMonthYear})`),
    /** `exchangeNames`: all exchanges as one list ("A, B and C"). */
    description: (exchangeNames: string, pairs: number, monthYear: string) =>
      fit(
        DESC_MAX,
        `${exchangeNames} in pairs: ${pairs} comparisons of fees, leverage, countries, KYC and referral codes. Checked ${monthYear}.`,
        `${exchangeNames} in pairs: ${pairs} comparisons of fees, leverage, countries, KYC and referral codes.`,
      ),
    crumbHome: "Home",
    crumbPage: "Exchange comparisons",
    /** Name of the list of all comparisons in the structured data. */
    listName: "Crypto exchange head-to-head comparisons",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date: string) => `Checked and updated ${date}`,
    h1: (pairs: number) => `Crypto exchange comparisons: ${pairs} head-to-head matchups`,
    lead: (exchangeCount: number) =>
      `${exchangeCount} exchanges, every pair compared on the same points: fees, leverage, market depth, products, country availability, identity verification, regulation and referral offers. Each comparison uses the figures from the exchanges' own sites.`,
    quickAnswer: "Quick answer",

    pickTitle: "Pick two exchanges to compare",
    pickText: (others: number) =>
      `Each box lists one exchange against the other ${others}. Every pair has one page, so "Binance vs OKX" and "OKX vs Binance" lead to the same comparison.`,
    alternativesOf: (e: Exchange) => `${e.name} alternatives`,
    referralCodeOf: (e: Exchange) => `${e.name} referral code`,

    tableTitle: (exchangeCount: number) => `All ${exchangeCount} exchanges side by side`,
    tableText: "New-user offers, standard (non-VIP) fees, leverage and market depth of every exchange in one table.",
    tableNote: (date: string, marketDate: string) =>
      `Fees: standard tier as published by each exchange, checked ${date}. Open interest and markets: CoinMarketCap, ${marketDate}.`,

    alternativesTitle: "One exchange against all others",
    alternativesText: (others: number) =>
      `Not deciding between two, but looking for a replacement? The alternatives pages measure one exchange against the other ${others} at once and show which of them accept your country.`,

    faqTitle: "Exchange comparisons – FAQ",

    ctaTitle: "Decided? Sign up with a referral code",
    ctaText: (exchangeCount: number) => `Verified codes for all ${exchangeCount} exchanges – one account for spot and futures, at no extra cost.`,
    ctaButton: "See all referral codes",
  },
};

export type VersusText = typeof en;
