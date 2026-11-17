/**
 * Head-to-head pairs for the "[Exchange] vs [Exchange]" pages (`/<a>-vs-<b>`).
 *
 * Every pair exists once. The order inside a pair follows the order of `exchanges`, so the URL of a pair
 * never changes when market data changes. The reverse URL (`/<b>-vs-<a>`) is redirected in `next.config.mjs`.
 * The pages hold no data of their own: everything is read from `./exchanges/` and `./alternatives/`.
 */
import type { Exchange } from "./types";
import { exchanges } from "./exchanges";
import { exchangesFor } from "./i18n";
import { pagePath, versusPagePath, versusPageSlug } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export type Pair = { a: Exchange; b: Exchange };

const pairsOf = (list: Exchange[]): Pair[] => list.flatMap((a, i) => list.slice(i + 1).map((b) => ({ a, b })));

/** The pairs with the English entries. */
export const versusPairs: Pair[] = pairsOf(exchanges);
/** The pairs with the entries in the given language. */
export const versusPairsFor = (locale: Locale): Pair[] => (locale === "en" ? versusPairs : pairsOf(exchangesFor(locale)));

const position = (x: Exchange) => exchanges.findIndex((e) => e.slug === x.slug);
/** Canonical path of the comparison of two exchanges, whichever way round they are passed in. */
export const versusPath = (x: Exchange, y: Exchange, locale: Locale = "en") => {
  const [a, b] = position(x) < position(y) ? [x, y] : [y, x];
  return versusPagePath(a.slug, b.slug, locale);
};
/** "A vs B" in the same order as the URL – one spelling for every link to a comparison. */
export const versusLabel = (x: Exchange, y: Exchange) => {
  const [a, b] = position(x) < position(y) ? [x, y] : [y, x];
  return `${a.name} vs ${b.name}`;
};
export const versusSlug = (p: Pair) => versusPageSlug(p.a.slug, p.b.slug);
export const getPairByPathSlug = (pathSlug: string, locale: Locale = "en") => versusPairsFor(locale).find((p) => versusSlug(p) === pathSlug);

/** The other exchanges one exchange is compared with, largest first (CoinMarketCap derivatives ranking). */
export const opponentsOf = (e: Exchange, locale: Locale = "en") =>
  exchangesFor(locale)
    .filter((x) => x.slug !== e.slug)
    .sort((x, y) => x.market.rank - y.market.rank);

/** Hub page that lists every comparison (English). Other languages: `comparePathFor(locale)`. */
export const comparePath = pagePath("compare");
export const comparePathFor = (locale: Locale) => pagePath("compare", locale);
