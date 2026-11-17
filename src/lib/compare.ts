/**
 * Comparison logic for the "[Exchange] alternatives" and "[Exchange] vs [Exchange]" pages.
 *
 * Only the logic lives here: who is cheaper, who offers what, which country is open. It reads the verified
 * fields in `src/data/exchanges/` and `src/data/alternatives/`, so a comparison can never state a fee, a
 * leverage limit or a country rule that differs from the exchange pages.
 *
 * The sentences built from it are written once per language in `src/i18n/compare/<locale>.ts`
 * (`compareText(locale)`): every language phrases them in its own grammar, from the same facts.
 */
import type { Exchange, Fee } from "@/data/exchanges";
import { getExchange } from "@/data/exchanges";
import { alternativesData } from "@/data/alternatives";
import type { AlternativesInfo, CountryKey, FeatureKey } from "@/data/alternatives";
import { alternativesFor, exchangesFor } from "@/data/i18n";
import { rateValue } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

/* --------------------------------- helpers --------------------------------- */

/** The English entry of an exchange – for rules that are read off its (English) wording. */
const english = (e: Exchange) => getExchange(e.slug) ?? e;
/** The researched facts of an exchange (products, countries, MiCA). They are the same in every language. */
const facts = (e: Exchange): AlternativesInfo => alternativesData[e.slug];

/** The number in a fee rate, whatever the notation of the language (`0.02%`, `0,02%`, `%0,02`). */
export const pct = (s: string) => rateValue(s);
export const leverageOf = (e: Exchange) => Number(english(e).maxLeverage.match(/(\d+)x/)?.[1] ?? 0);
export const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
export const feePair = (f: Fee) => `${f.maker} / ${f.taker}`;
/** The alternatives entry of an exchange with its texts in the given language. */
export const altInfo = (e: Exchange, locale: Locale): AlternativesInfo => alternativesFor(locale)[e.slug];
export const lcFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
export const verb = (list: unknown[], singular: string, plural: string) => (list.length === 1 ? singular : plural);

/** The other exchanges with their texts in the given language, ordered by CoinMarketCap's derivatives ranking. */
export const alternativesTo = (e: Exchange, locale: Locale) =>
  exchangesFor(locale)
    .filter((x) => x.slug !== e.slug)
    .sort((a, b) => a.market.rank - b.market.rank);

/** All entries sharing the best score (lower is better). */
function best<T>(list: T[], score: (t: T) => number): T[] {
  const min = Math.min(...list.map(score));
  return list.filter((t) => score(t) === min);
}
const feeScore = (f: Fee) => pct(f.taker) * 1000 + pct(f.maker);

export const lowestFutures = (list: Exchange[]) => best(list, (e) => feeScore(e.futuresFees));
export const lowestSpot = (list: Exchange[]) => best(list, (e) => feeScore(e.spotFees));
export const highestLeverage = (list: Exchange[]) => best(list, (e) => -leverageOf(e));
export const largestOpenInterest = (list: Exchange[]) => best(list, (e) => -e.market.openInterestBn);
export const mostMarkets = (list: Exchange[]) => best(list, (e) => -e.market.markets);
export const withFeature = (list: Exchange[], key: FeatureKey) => list.filter((e) => facts(e).features[key].has === true);
export const withMica = (list: Exchange[]) => list.filter((e) => facts(e).mica);

/** "yes" – the exchange documents a self-service way; "request" – only by support request; "no" – sign-up only or undocumented. */
export const addLater = (e: Exchange): "yes" | "request" | "no" => {
  const rule = english(e).referral.afterSignupShort;
  return /^yes/i.test(rule) ? "yes" : /^by request/i.test(rule) ? "request" : "no";
};

/** Is the standard fee `a` lower than `b`? The taker fee decides, the maker fee breaks a tie. */
export const cheaper = (a: Fee, b: Fee) => feeScore(a) < feeScore(b);

/* ---------------------------------- country --------------------------------- */

/** Where the alternatives stand in one country, grouped by status. */
export function countryGroups(alts: Exchange[], key: CountryKey) {
  const by = (status: string) => alts.filter((a) => facts(a).countries[key].status === status);
  return { open: by("open"), regional: by("regional"), partial: by("partial"), restricted: by("restricted") };
}
