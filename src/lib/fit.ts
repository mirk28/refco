// Helpers for search-snippet sized titles and meta descriptions (2026-11-26).
// Google cuts titles at about 600 px (≈ 60 Latin characters) and descriptions at about 920 px (≈ 155 characters).
// Every language file builds its titles and descriptions from a list of candidates, longest first, and `fit`
// takes the first one that fits, so long exchange names or offers fall back to a shorter wording.

/** Character limits for Latin-like scripts. Wide scripts (Korean) pass their own smaller limits. */
export const TITLE_MAX = 60;
export const DESC_MAX = 155;

const len = (s: string) => [...s].length;

/** First candidate with at most `max` characters; the shortest candidate if none fits. */
export const fit = (max: number, ...candidates: string[]): string =>
  candidates.find((c) => len(c) <= max) ?? candidates.reduce((a, b) => (len(b) < len(a) ? b : a));

const ORDER = ["binance", "okx", "bybit", "bitget", "gate", "kucoin", "mexc"];

/** Stable 0..n-1 choice per exchange (or pair), so titles of different pages are worded differently. */
export const variant = (n: number, ...slugs: string[]): number =>
  slugs.length === 1
    ? Math.max(0, ORDER.indexOf(slugs[0])) % n
    : slugs.reduce((acc, s) => acc + Math.max(0, ORDER.indexOf(s)) * 3 + s.length, 0) % n;

/** The four-digit year inside a localized "month year" string. */
export const yearOf = (monthYear: string): string => monthYear.match(/\d{4}/)?.[0] ?? "";
