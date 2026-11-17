/**
 * Comparison logic for the "[Exchange] vs [Exchange]" pages.
 *
 * Only the logic lives here: which of two exchanges is ahead on a point. Like `compare.ts`, it reads the
 * verified fields in `src/data/exchanges/` and `src/data/alternatives/`, so a head-to-head page cannot state
 * a number that differs from the exchange pages or the alternatives pages.
 *
 * The labels and sentences are written once per language in `src/i18n/versus/<locale>.tsx`
 * (`versusText(locale)`). Pass the exchange entries of the same language (`versusPairsFor(locale)`).
 */
import type { Exchange, Fee } from "@/data/exchanges";
import { getExchange } from "@/data/exchanges";
import { countryList, featureList } from "@/data/alternatives";
import type { FeatureKey } from "@/data/alternatives";
import type { Locale } from "@/i18n/config";
import { versusText } from "@/i18n/versus";
import { formatBn } from "./seo";
import { addLater, altInfo, feePair, leverageOf, pct } from "./compare";

export type { VersusFaqGroup } from "@/i18n/versus";

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
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** The English entry of an exchange – for numbers that are read off its (English) wording. */
const english = (e: Exchange) => getExchange(e.slug) ?? e;
/** The researched facts of an exchange (products, countries). They are the same in every language. */
const facts = (e: Exchange) => altInfo(e, "en");
const has = (e: Exchange, key: FeatureKey) => facts(e).features[key].has === true;

export const productCount = (e: Exchange) => featureList.filter((f) => has(e, f.key)).length;
export const closedCount = (e: Exchange) => countryList.filter((c) => facts(e).countries[c.key].status === "restricted").length;

/* ---------------------------------- scorecard -------------------------------- */

/** The side-by-side table of a head-to-head page. `edge` is set only where the figures decide it. */
export function scoreRows(a: Exchange, b: Exchange, locale: Locale = "en"): ScoreRow[] {
  const t = versusText(locale);
  const r = t.rows;
  const ia = altInfo(a, locale);
  const ib = altInfo(b, locale);
  const bn = (n: number) => formatBn(n, locale);
  const micaEdge: Edge = ia.mica && !ib.mica ? "a" : ib.mica && !ia.mica ? "b" : "tie";
  return [
    { ...r.futuresFees, a: feePair(a.futuresFees), b: feePair(b.futuresFees), edge: byFees(a.futuresFees, b.futuresFees) },
    { ...r.spotFees, a: feePair(a.spotFees), b: feePair(b.spotFees), edge: byFees(a.spotFees, b.spotFees) },
    { ...r.leverage, a: a.maxLeverage, b: b.maxLeverage, edge: byNumber(leverageOf(a), leverageOf(b), true) },
    {
      ...r.openInterest,
      a: bn(a.market.openInterestBn),
      b: bn(b.market.openInterestBn),
      edge: byNumber(a.market.openInterestBn, b.market.openInterestBn, true),
    },
    {
      ...r.volume,
      a: bn(a.market.volume24hBn),
      b: bn(b.market.volume24hBn),
      edge: byNumber(a.market.volume24hBn, b.market.volume24hBn, true),
    },
    { ...r.markets, a: String(a.market.markets), b: String(b.market.markets), edge: byNumber(a.market.markets, b.market.markets, true) },
    { ...r.users, a: a.users, b: b.users, edge: byNumber(Number.parseFloat(english(a).users), Number.parseFloat(english(b).users), true) },
    { ...r.assets, a: a.assets, b: b.assets, edge: null },
    { ...r.founded, a: a.founded, b: b.founded, edge: null },
    {
      label: r.products.label(featureList.length),
      topic: r.products.topic,
      a: t.countOf(productCount(a), featureList.length),
      b: t.countOf(productCount(b), featureList.length),
      edge: byNumber(productCount(a), productCount(b), true),
    },
    {
      label: r.countries.label(countryList.length),
      topic: r.countries.topic,
      a: t.countOf(closedCount(a), countryList.length),
      b: t.countOf(closedCount(b), countryList.length),
      edge: byNumber(closedCount(a), closedCount(b), false),
    },
    { ...r.mica, a: ia.mica || t.noMica, b: ib.mica || t.noMica, edge: micaEdge },
    { ...r.kyc, a: a.signup.kycShort, b: b.signup.kycShort, edge: null },
    {
      ...r.addLater,
      a: a.referral.afterSignupShort,
      b: b.referral.afterSignupShort,
      edge: byNumber(laterRank[addLater(a)], laterRank[addLater(b)], true),
    },
    { ...r.offer, a: offer(a), b: offer(b), edge: null },
    { ...r.reserves, a: ia.reserves, b: ib.reserves, edge: null },
    { ...r.fund, a: ia.fund || t.noFund, b: ib.fund || t.noFund, edge: null },
  ];
}

/** How many of the measurable rows each side is ahead on. */
export function scoreSummary(a: Exchange, b: Exchange, locale: Locale = "en") {
  const rows = scoreRows(a, b, locale).filter((r) => r.edge !== null);
  return {
    measurable: rows.length,
    a: rows.filter((r) => r.edge === "a"),
    b: rows.filter((r) => r.edge === "b"),
    tie: rows.filter((r) => r.edge === "tie"),
  };
}
export type ScoreSummary = ReturnType<typeof scoreSummary>;

/** Countries in which the two exchanges have a different status. */
export const countryDifferences = (a: Exchange, b: Exchange) => countryList.filter((c) => facts(a).countries[c.key].status !== facts(b).countries[c.key].status);

/* ------------------------- sentences in one language ------------------------- */

/** The "answer first" paragraph of a head-to-head page. */
export const versusAnswer = (a: Exchange, b: Exchange, locale: Locale = "en") => versusText(locale).versusAnswer(a, b, scoreSummary(a, b, locale));

/** All questions a head-to-head page answers, grouped for display. */
export const buildVersusFaqs = (a: Exchange, b: Exchange, locale: Locale = "en") =>
  versusText(locale).buildVersusFaqs(
    a,
    b,
    scoreSummary(a, b, locale),
    countryDifferences(a, b).map((c) => c.key),
  );
