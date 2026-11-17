/**
 * Exchange entries in other languages.
 *
 * A translation holds text only: `./<locale>/<slug>.ts` for the referral-code pages and
 * `./<locale>/alternatives/<slug>.ts` for the comparison pages. `localizeExchange` and `localizeAlternatives`
 * lay it over the English entry, so codes, links, fee numbers, market data, product and country facts and
 * source URLs always come from `src/data/exchanges/` and `src/data/alternatives/`.
 * A translation whose lists do not match the English entry stops the build; `scripts/check-i18n.mjs`
 * additionally compares the numbers in every text.
 */
import type { AlternativesInfo, AlternativesText, CountryKey, Exchange, ExchangeText, FeatureKey } from "../types";
import { exchanges } from "../exchanges";
import { binance as enAltBinance } from "../alternatives/binance";
import { okx as enAltOkx } from "../alternatives/okx";
import { bybit as enAltBybit } from "../alternatives/bybit";
import { bitget as enAltBitget } from "../alternatives/bitget";
import { gate as enAltGate } from "../alternatives/gate";
import { kucoin as enAltKucoin } from "../alternatives/kucoin";
import { mexc as enAltMexc } from "../alternatives/mexc";
import { localRate } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { binance as esBinance } from "./es/binance";
import { okx as esOkx } from "./es/okx";
import { bybit as esBybit } from "./es/bybit";
import { bitget as esBitget } from "./es/bitget";
import { gate as esGate } from "./es/gate";
import { kucoin as esKucoin } from "./es/kucoin";
import { mexc as esMexc } from "./es/mexc";
import { binance as esAltBinance } from "./es/alternatives/binance";
import { okx as esAltOkx } from "./es/alternatives/okx";
import { bybit as esAltBybit } from "./es/alternatives/bybit";
import { bitget as esAltBitget } from "./es/alternatives/bitget";
import { gate as esAltGate } from "./es/alternatives/gate";
import { kucoin as esAltKucoin } from "./es/alternatives/kucoin";
import { mexc as esAltMexc } from "./es/alternatives/mexc";
import { binance as ptBinance } from "./pt/binance";
import { okx as ptOkx } from "./pt/okx";
import { bybit as ptBybit } from "./pt/bybit";
import { bitget as ptBitget } from "./pt/bitget";
import { gate as ptGate } from "./pt/gate";
import { kucoin as ptKucoin } from "./pt/kucoin";
import { mexc as ptMexc } from "./pt/mexc";
import { binance as ptAltBinance } from "./pt/alternatives/binance";
import { okx as ptAltOkx } from "./pt/alternatives/okx";
import { bybit as ptAltBybit } from "./pt/alternatives/bybit";
import { bitget as ptAltBitget } from "./pt/alternatives/bitget";
import { gate as ptAltGate } from "./pt/alternatives/gate";
import { kucoin as ptAltKucoin } from "./pt/alternatives/kucoin";
import { mexc as ptAltMexc } from "./pt/alternatives/mexc";
import { binance as trBinance } from "./tr/binance";
import { okx as trOkx } from "./tr/okx";
import { bybit as trBybit } from "./tr/bybit";
import { bitget as trBitget } from "./tr/bitget";
import { gate as trGate } from "./tr/gate";
import { kucoin as trKucoin } from "./tr/kucoin";
import { mexc as trMexc } from "./tr/mexc";
import { binance as trAltBinance } from "./tr/alternatives/binance";
import { okx as trAltOkx } from "./tr/alternatives/okx";
import { bybit as trAltBybit } from "./tr/alternatives/bybit";
import { bitget as trAltBitget } from "./tr/alternatives/bitget";
import { gate as trAltGate } from "./tr/alternatives/gate";
import { kucoin as trAltKucoin } from "./tr/alternatives/kucoin";
import { mexc as trAltMexc } from "./tr/alternatives/mexc";

const texts: Partial<Record<Locale, Record<string, ExchangeText>>> = {
  es: { binance: esBinance, okx: esOkx, bybit: esBybit, bitget: esBitget, gate: esGate, kucoin: esKucoin, mexc: esMexc },
  pt: { binance: ptBinance, okx: ptOkx, bybit: ptBybit, bitget: ptBitget, gate: ptGate, kucoin: ptKucoin, mexc: ptMexc },
  tr: { binance: trBinance, okx: trOkx, bybit: trBybit, bitget: trBitget, gate: trGate, kucoin: trKucoin, mexc: trMexc },
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

export function localizeExchange(e: Exchange, t: ExchangeText, locale: Locale): Exchange {
  const problems = lengthProblems(e, t);
  if (problems.length) throw new Error(`Translation "${locale}" of ${e.slug} does not match the English entry – ${problems.join("; ")}`);
  const { extraFeeMarkets, sourceLabels, guides, ...text } = t;
  // Fee rates are facts from the English entry, shown in the notation of the language (0,02% / %0,02).
  const rate = (r: string) => localRate(r, locale);
  return {
    ...e,
    ...text,
    spotFees: { maker: rate(e.spotFees.maker), taker: rate(e.spotFees.taker) },
    futuresFees: { maker: rate(e.futuresFees.maker), taker: rate(e.futuresFees.taker) },
    extraFees: e.extraFees.map((f, i) => ({ ...f, market: extraFeeMarkets[i], maker: rate(f.maker), taker: rate(f.taker) })),
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

/* ------------------------------ alternatives entries ------------------------------ */

// Imported from the files, not from `../alternatives`, which itself builds on this module's neighbours.
const englishAlternatives: Record<string, AlternativesInfo> = {
  binance: enAltBinance,
  okx: enAltOkx,
  bybit: enAltBybit,
  bitget: enAltBitget,
  gate: enAltGate,
  kucoin: enAltKucoin,
  mexc: enAltMexc,
};

const alternativesTexts: Partial<Record<Locale, Record<string, AlternativesText>>> = {
  es: { binance: esAltBinance, okx: esAltOkx, bybit: esAltBybit, bitget: esAltBitget, gate: esAltGate, kucoin: esAltKucoin, mexc: esAltMexc },
  pt: { binance: ptAltBinance, okx: ptAltOkx, bybit: ptAltBybit, bitget: ptAltBitget, gate: ptAltGate, kucoin: ptAltKucoin, mexc: ptAltMexc },
  tr: { binance: trAltBinance, okx: trAltOkx, bybit: trAltBybit, bitget: trAltBitget, gate: trAltGate, kucoin: trAltKucoin, mexc: trAltMexc },
};

function alternativesProblems(info: AlternativesInfo, t: AlternativesText): string[] {
  const lists: [string, unknown[], unknown[]][] = [
    ["chooseIf", info.chooseIf, t.chooseIf],
    ["thinkTwiceIf", info.thinkTwiceIf, t.thinkTwiceIf],
    ["reasons", info.reasons, t.reasons],
    ["stayIf", info.stayIf, t.stayIf],
    ["faqs", info.faqs, t.faqs],
    ["sourceLabels", info.sources, t.sourceLabels],
  ];
  const problems = lists.filter(([, a, b]) => a.length !== b.length).map(([key, a, b]) => `${key}: ${b.length} instead of ${a.length}`);
  for (const key of ["fund", "regional", "mica", "reserves"] as const) {
    if (Boolean(info[key]) !== Boolean(t[key])) problems.push(`${key}: set in one language only`);
  }
  for (const key of Object.keys(info.features) as FeatureKey[]) {
    if (Boolean(info.features[key].note) !== Boolean(t.featureNotes[key])) problems.push(`featureNotes.${key}: set in one language only`);
  }
  for (const key of Object.keys(info.countries) as CountryKey[]) {
    if (Boolean(info.countries[key].note) !== Boolean(t.countryNotes[key])) problems.push(`countryNotes.${key}: set in one language only`);
  }
  return problems;
}

export function localizeAlternatives(info: AlternativesInfo, t: AlternativesText, locale: string, slug: string): AlternativesInfo {
  const problems = alternativesProblems(info, t);
  if (problems.length) throw new Error(`Translation "${locale}" of the alternatives entry ${slug} does not match the English entry – ${problems.join("; ")}`);
  const { featureNotes, countryNotes, sourceLabels, ...text } = t;
  const features = Object.fromEntries(
    (Object.keys(info.features) as FeatureKey[]).map((key) => [key, { ...info.features[key], note: featureNotes[key] }]),
  ) as AlternativesInfo["features"];
  const countries = Object.fromEntries(
    (Object.keys(info.countries) as CountryKey[]).map((key) => [key, countryNotes[key] ? { ...info.countries[key], note: countryNotes[key] } : info.countries[key]]),
  ) as AlternativesInfo["countries"];
  return { ...info, ...text, features, countries, sources: info.sources.map((s, i) => ({ ...s, label: sourceLabels[i] })) };
}

const alternativesCache = new Map<Locale, Record<string, AlternativesInfo>>();

/** The alternatives entries of all exchanges with their texts in the given language, by exchange slug. */
export function alternativesFor(locale: Locale): Record<string, AlternativesInfo> {
  if (locale === "en") return englishAlternatives;
  const cached = alternativesCache.get(locale);
  if (cached) return cached;
  const set = alternativesTexts[locale];
  if (!set) throw new Error(`No alternatives texts for language "${locale}"`);
  const localized = Object.fromEntries(
    Object.entries(englishAlternatives).map(([slug, info]) => {
      const t = set[slug];
      if (!t) throw new Error(`No "${locale}" alternatives text for ${slug}`);
      return [slug, localizeAlternatives(info, t, locale, slug)];
    }),
  );
  alternativesCache.set(locale, localized);
  return localized;
}
