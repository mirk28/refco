/**
 * Exchange entries in other languages.
 *
 * A translation (`./<locale>/<slug>.ts`) holds text only. `localizeExchange` lays it over the English entry,
 * so codes, links, fee numbers, market data and source URLs always come from `src/data/exchanges/`.
 * A translation whose lists do not match the English entry stops the build; `scripts/check-i18n.mjs`
 * additionally compares the numbers in every text.
 */
import type { Exchange, ExchangeText } from "../types";
import { exchanges } from "../exchanges";
import type { Locale } from "@/i18n/config";
import { binance as esBinance } from "./es/binance";
import { okx as esOkx } from "./es/okx";
import { bybit as esBybit } from "./es/bybit";
import { bitget as esBitget } from "./es/bitget";
import { gate as esGate } from "./es/gate";
import { kucoin as esKucoin } from "./es/kucoin";
import { mexc as esMexc } from "./es/mexc";

const texts: Partial<Record<Locale, Record<string, ExchangeText>>> = {
  es: { binance: esBinance, okx: esOkx, bybit: esBybit, bitget: esBitget, gate: esGate, kucoin: esKucoin, mexc: esMexc },
};

/** Lists that must have the same length in the translation as in the English entry. */
function lengthProblems(e: Exchange, t: ExchangeText): string[] {
  const pairs: [string, unknown[], unknown[]][] = [
    ["referral.guide", e.referral.guide, t.referral.guide],
    ["signup.methods", e.signup.methods, t.signup.methods],
    ["signup.steps", e.signup.steps, t.signup.steps],
    ["welcomeTasks", e.welcomeTasks, t.welcomeTasks],
    ["extraFeeMarkets", e.extraFees, t.extraFeeMarkets],
    ["sourceLabels", e.sources, t.sourceLabels],
    ["referralCovers", e.referralCovers, t.referralCovers],
    ["benefits", e.benefits, t.benefits],
    ["products", e.products, t.products],
    ["about", e.about, t.about],
    ["highlights", e.highlights, t.highlights],
    ["pros", e.pros, t.pros],
    ["cons", e.cons, t.cons],
    ["bestFor", e.bestFor, t.bestFor],
    ["faqs", e.faqs, t.faqs],
  ];
  const problems = pairs.filter(([, a, b]) => a.length !== b.length).map(([key, a, b]) => `${key}: ${b.length} instead of ${a.length}`);
  e.faqs.forEach((f, i) => {
    if (t.faqs[i] && (t.faqs[i].topic ?? "referral") !== (f.topic ?? "referral")) problems.push(`faqs[${i}]: topic differs`);
  });
  if (Boolean(e.guides) !== Boolean(t.guides)) problems.push("guides: present in one language only");
  if (Boolean(e.feeDiscount) !== Boolean(t.feeDiscount)) problems.push("feeDiscount: set in one language only");
  if (Boolean(e.tokenDiscount) !== Boolean(t.tokenDiscount)) problems.push("tokenDiscount: set in one language only");
  return problems;
}

export function localizeExchange(e: Exchange, t: ExchangeText, locale: string): Exchange {
  const problems = lengthProblems(e, t);
  if (problems.length) throw new Error(`Translation "${locale}" of ${e.slug} does not match the English entry – ${problems.join("; ")}`);
  const { extraFeeMarkets, sourceLabels, guides, ...text } = t;
  return {
    ...e,
    ...text,
    extraFees: e.extraFees.map((f, i) => ({ ...f, market: extraFeeMarkets[i] })),
    sources: e.sources.map((s, i) => ({ ...s, label: sourceLabels[i] })),
    guides: e.guides && guides ? { ...e.guides, ...guides } : e.guides,
  };
}

const cache = new Map<Locale, Exchange[]>();

/** All exchanges with their texts in the given language, in the order of `exchanges`. */
export function exchangesFor(locale: Locale): Exchange[] {
  if (locale === "en") return exchanges;
  const cached = cache.get(locale);
  if (cached) return cached;
  const set = texts[locale];
  if (!set) throw new Error(`No exchange texts for language "${locale}"`);
  const localized = exchanges.map((e) => {
    const t = set[e.slug];
    if (!t) throw new Error(`No "${locale}" text for ${e.slug}`);
    return localizeExchange(e, t, locale);
  });
  cache.set(locale, localized);
  return localized;
}

export const exchangeFor = (slug: string, locale: Locale) => exchangesFor(locale).find((e) => e.slug === slug);
