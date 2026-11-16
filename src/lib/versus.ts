/**
 * Comparison logic for the "[Exchange] vs [Exchange]" pages.
 *
 * Like `compare.ts`, everything here is assembled from the verified fields in `src/data/exchanges/` and
 * `src/data/alternatives/`. A head-to-head page therefore cannot state a number that differs from the
 * exchange pages or the alternatives pages.
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee } from "@/data/exchanges";
import { countryList, featureList } from "@/data/alternatives";
import type { FeatureKey } from "@/data/alternatives";
import { joinList } from "./faqs";
import { formatBn, prettyDate } from "./seo";
import { addLater, advantages, altInfo, feePair, feeSentence, lcFirst, leverageOf, pct } from "./compare";

/* ---------------------------------- helpers --------------------------------- */

/** "a" / "b" – that exchange is ahead; "tie" – level; null – not comparable. */
export type Edge = "a" | "b" | "tie" | null;
export type ScoreRow = { label: string; topic: string; a: string; b: string; edge: Edge };

const byNumber = (va: number, vb: number, higherWins: boolean): Edge => (va === vb ? "tie" : va > vb === higherWins ? "a" : "b");
const byFees = (fa: Fee, fb: Fee): Edge => {
  const m = Math.sign(pct(fa.maker) - pct(fb.maker));
  const t = Math.sign(pct(fa.taker) - pct(fb.taker));
  if (m === 0 && t === 0) return "tie";
  if (m <= 0 && t <= 0) return "a";
  if (m >= 0 && t >= 0) return "b";
  return null; // one is cheaper for makers, the other for takers
};
const laterRank = { yes: 2, request: 1, no: 0 } as const;
const withoutSource = (s: string) => s.replace(/\s*\((per [^)]*|[A-Za-z]+ API)\)/, "");
const lowerUpTo = (s: string) => s.replace(/^Up to/, "up to");
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;

export const productCount = (e: Exchange) => featureList.filter((f) => has(e, f.key)).length;
export const closedCount = (e: Exchange) => countryList.filter((c) => altInfo(e).countries[c.key].status === "restricted").length;

/* ---------------------------------- scorecard -------------------------------- */

/** The side-by-side table of a head-to-head page. `edge` is set only where the figures decide it. */
export function scoreRows(a: Exchange, b: Exchange): ScoreRow[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const micaEdge: Edge = ia.mica && !ib.mica ? "a" : ib.mica && !ia.mica ? "b" : "tie";
  return [
    { label: "Futures fees (maker / taker)", topic: "futures fees", a: feePair(a.futuresFees), b: feePair(b.futuresFees), edge: byFees(a.futuresFees, b.futuresFees) },
    { label: "Spot fees (maker / taker)", topic: "spot fees", a: feePair(a.spotFees), b: feePair(b.spotFees), edge: byFees(a.spotFees, b.spotFees) },
    { label: "Maximum leverage", topic: "maximum leverage", a: a.maxLeverage, b: b.maxLeverage, edge: byNumber(leverageOf(a), leverageOf(b), true) },
    {
      label: "Derivatives open interest",
      topic: "open interest",
      a: formatBn(a.market.openInterestBn),
      b: formatBn(b.market.openInterestBn),
      edge: byNumber(a.market.openInterestBn, b.market.openInterestBn, true),
    },
    {
      label: "24h derivatives volume",
      topic: "24-hour derivatives volume",
      a: formatBn(a.market.volume24hBn),
      b: formatBn(b.market.volume24hBn),
      edge: byNumber(a.market.volume24hBn, b.market.volume24hBn, true),
    },
    { label: "Derivatives markets", topic: "number of derivatives markets", a: String(a.market.markets), b: String(b.market.markets), edge: byNumber(a.market.markets, b.market.markets, true) },
    { label: "Users (own figures)", topic: "user numbers", a: a.users, b: b.users, edge: byNumber(Number.parseFloat(a.users), Number.parseFloat(b.users), true) },
    { label: "Listed assets (own figures)", topic: "", a: a.assets, b: b.assets, edge: null },
    { label: "Founded", topic: "", a: a.founded, b: b.founded, edge: null },
    {
      label: `Products found (of ${featureList.length} compared)`,
      topic: "product range",
      a: `${productCount(a)} of ${featureList.length}`,
      b: `${productCount(b)} of ${featureList.length}`,
      edge: byNumber(productCount(a), productCount(b), true),
    },
    {
      label: `Countries closed (of ${countryList.length} compared)`,
      topic: "country coverage",
      a: `${closedCount(a)} of ${countryList.length}`,
      b: `${closedCount(b)} of ${countryList.length}`,
      edge: byNumber(closedCount(a), closedCount(b), false),
    },
    { label: "MiCA-authorised EEA platform", topic: "MiCA authorisation", a: ia.mica || "None named", b: ib.mica || "None named", edge: micaEdge },
    { label: "Identity verification (KYC)", topic: "", a: a.signup.kycShort, b: b.signup.kycShort, edge: null },
    {
      label: "Add a referral code later?",
      topic: "adding a referral code later",
      a: a.referral.afterSignupShort,
      b: b.referral.afterSignupShort,
      edge: byNumber(laterRank[addLater(a)], laterRank[addLater(b)], true),
    },
    { label: "New-user offer", topic: "", a: offer(a), b: offer(b), edge: null },
    { label: "Proof of reserves", topic: "", a: ia.reserves, b: ib.reserves, edge: null },
    { label: "Protection fund", topic: "", a: ia.fund || "None named", b: ib.fund || "None named", edge: null },
  ];
}

/** How many of the measurable rows each side is ahead on. */
export function scoreSummary(a: Exchange, b: Exchange) {
  const rows = scoreRows(a, b).filter((r) => r.edge !== null);
  return {
    measurable: rows.length,
    a: rows.filter((r) => r.edge === "a"),
    b: rows.filter((r) => r.edge === "b"),
    tie: rows.filter((r) => r.edge === "tie"),
  };
}

/** The "answer first" paragraph of a head-to-head page. */
export function versusAnswer(a: Exchange, b: Exchange): string {
  const s = scoreSummary(a, b);
  const lead = (e: Exchange, rows: ScoreRow[]) => (rows.length ? `${e.name} is ahead on ${joinList(rows.map((r) => r.topic))}` : `${e.name} is ahead on none of them`);
  return `Neither ${a.name} nor ${b.name} is better on every point. Of the ${s.measurable} measurable points in this comparison ${a.name} is ahead on ${s.a.length} and ${b.name} on ${s.b.length}${s.tie.length ? `, and ${s.tie.length} ${s.tie.length === 1 ? "is" : "are"} level` : ""}. ${lead(a, s.a)}. ${lead(b, s.b)}. Choose ${a.name} if ${lcFirst(altInfo(a).chooseIf[0])}. Choose ${b.name} if ${lcFirst(altInfo(b).chooseIf[0])}.`;
}

/* ---------------------------------- sentences -------------------------------- */

export function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb) return `${a.name} and ${b.name} have the same maximum leverage: ${a.name} ${lowerUpTo(a.maxLeverage)}, ${b.name} ${lowerUpTo(b.maxLeverage)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} offers the higher maximum leverage – ${lowerUpTo(hi.maxLeverage)} – against ${lowerUpTo(lo.maxLeverage)} on ${lo.name}.`;
}

export function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `On CoinMarketCap's derivatives ranking (${prettyDate(site.marketDataDate)}) ${a.name} held ${formatBn(a.market.openInterestBn)} of open interest across ${a.market.markets} markets and ${b.name} ${formatBn(b.market.openInterestBn)} across ${b.market.markets}. ${deeper.name} has the deeper market, which usually means tighter spreads on large orders.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
export function onlyOnSentence(a: Exchange, b: Exchange): string {
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

type Country = (typeof countryList)[number];
const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} is closed to ${c.residents}${extra}`;
  if (status === "regional") return `${e.name} serves ${c.residents} through a regional platform${extra}`;
  if (status === "partial") return `${e.name} restricts ${c.name} in part${extra}`;
  return `${e.name} does not list ${c.name} as restricted`;
};

/** Plain-text answer to "Can I use a or b in this country?". */
export const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. Country lists change, and a country that is not listed is no guarantee that every product is offered there – the exchange's own terms decide.`;

/** Countries in which the two exchanges have a different status. */
export const countryDifferences = (a: Exchange, b: Exchange) => countryList.filter((c) => altInfo(a).countries[c.key].status !== altInfo(b).countries[c.key].status);

/* ------------------------------------ FAQ ------------------------------------ */

export type VersusFaqGroup = { id: string; title: string; faqs: Faq[] };

/** All questions a head-to-head page answers, grouped for display. */
export function buildVersusFaqs(a: Exchange, b: Exchange): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) => (has(a, key) && has(b, key) ? "both" : has(a, key) ? `${a.name} only` : has(b, key) ? `${b.name} only` : "found on neither site");

  const verdict: Faq[] = [
    { q: `Which is better, ${a.name} or ${b.name}?`, a: versusAnswer(a, b) },
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
  const differing = countryDifferences(a, b).filter((c) => c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...differing.slice(0, 2)].map((c) => ({ q: `Can I use ${a.name} or ${b.name} in ${c.name}?`, a: countryPairAnswer(a, b, c) })),
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
