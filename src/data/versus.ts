/**
 * Head-to-head pairs for the "[Exchange] vs [Exchange]" pages (`/<a>-vs-<b>`).
 *
 * Every pair exists once. The order inside a pair follows the order of `exchanges`, so the URL of a pair
 * never changes when market data changes. The reverse URL (`/<b>-vs-<a>`) is redirected in `next.config.mjs`.
 * The pages hold no data of their own: everything is read from `./exchanges/` and `./alternatives/`.
 */
import type { Exchange } from "./types";
import { exchanges } from "./exchanges";

export type Pair = { a: Exchange; b: Exchange };

export const versusPairs: Pair[] = exchanges.flatMap((a, i) => exchanges.slice(i + 1).map((b) => ({ a, b })));

const position = (x: Exchange) => exchanges.findIndex((e) => e.slug === x.slug);
/** Canonical path of the comparison of two exchanges, whichever way round they are passed in. */
export const versusPath = (x: Exchange, y: Exchange) => {
  const [a, b] = position(x) < position(y) ? [x, y] : [y, x];
  return `/${a.slug}-vs-${b.slug}`;
};
/** "A vs B" in the same order as the URL – one spelling for every link to a comparison. */
export const versusLabel = (x: Exchange, y: Exchange) => {
  const [a, b] = position(x) < position(y) ? [x, y] : [y, x];
  return `${a.name} vs ${b.name}`;
};
export const versusSlug = (p: Pair) => `${p.a.slug}-vs-${p.b.slug}`;
export const getPairByPathSlug = (pathSlug: string) => versusPairs.find((p) => versusSlug(p) === pathSlug);

/** The other exchanges one exchange is compared with, largest first (CoinMarketCap derivatives ranking). */
export const opponentsOf = (e: Exchange) => exchanges.filter((x) => x.slug !== e.slug).sort((x, y) => x.market.rank - y.market.rank);

/** Hub page that lists every comparison. */
export const comparePath = "/compare";
