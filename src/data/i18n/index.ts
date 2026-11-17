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
import { binance as deBinance } from "./de/binance";
import { okx as deOkx } from "./de/okx";
import { bybit as deBybit } from "./de/bybit";
import { bitget as deBitget } from "./de/bitget";
import { gate as deGate } from "./de/gate";
import { kucoin as deKucoin } from "./de/kucoin";
import { mexc as deMexc } from "./de/mexc";
import { binance as deAltBinance } from "./de/alternatives/binance";
import { okx as deAltOkx } from "./de/alternatives/okx";
import { bybit as deAltBybit } from "./de/alternatives/bybit";
import { bitget as deAltBitget } from "./de/alternatives/bitget";
import { gate as deAltGate } from "./de/alternatives/gate";
import { kucoin as deAltKucoin } from "./de/alternatives/kucoin";
import { mexc as deAltMexc } from "./de/alternatives/mexc";
import { binance as hiBinance } from "./hi/binance";
import { okx as hiOkx } from "./hi/okx";
import { bybit as hiBybit } from "./hi/bybit";
import { bitget as hiBitget } from "./hi/bitget";
import { gate as hiGate } from "./hi/gate";
import { kucoin as hiKucoin } from "./hi/kucoin";
import { mexc as hiMexc } from "./hi/mexc";
import { binance as hiAltBinance } from "./hi/alternatives/binance";
import { okx as hiAltOkx } from "./hi/alternatives/okx";
import { bybit as hiAltBybit } from "./hi/alternatives/bybit";
import { bitget as hiAltBitget } from "./hi/alternatives/bitget";
import { gate as hiAltGate } from "./hi/alternatives/gate";
import { kucoin as hiAltKucoin } from "./hi/alternatives/kucoin";
import { mexc as hiAltMexc } from "./hi/alternatives/mexc";
import { binance as urBinance } from "./ur/binance";
import { okx as urOkx } from "./ur/okx";
import { bybit as urBybit } from "./ur/bybit";
import { bitget as urBitget } from "./ur/bitget";
import { gate as urGate } from "./ur/gate";
import { kucoin as urKucoin } from "./ur/kucoin";
import { mexc as urMexc } from "./ur/mexc";
import { binance as urAltBinance } from "./ur/alternatives/binance";
import { okx as urAltOkx } from "./ur/alternatives/okx";
import { bybit as urAltBybit } from "./ur/alternatives/bybit";
import { bitget as urAltBitget } from "./ur/alternatives/bitget";
import { gate as urAltGate } from "./ur/alternatives/gate";
import { kucoin as urAltKucoin } from "./ur/alternatives/kucoin";
import { mexc as urAltMexc } from "./ur/alternatives/mexc";
import { binance as koBinance } from "./ko/binance";
import { okx as koOkx } from "./ko/okx";
import { bybit as koBybit } from "./ko/bybit";
import { bitget as koBitget } from "./ko/bitget";
import { gate as koGate } from "./ko/gate";
import { kucoin as koKucoin } from "./ko/kucoin";
import { mexc as koMexc } from "./ko/mexc";
import { binance as koAltBinance } from "./ko/alternatives/binance";
import { okx as koAltOkx } from "./ko/alternatives/okx";
import { bybit as koAltBybit } from "./ko/alternatives/bybit";
import { bitget as koAltBitget } from "./ko/alternatives/bitget";
import { gate as koAltGate } from "./ko/alternatives/gate";
import { kucoin as koAltKucoin } from "./ko/alternatives/kucoin";
import { mexc as koAltMexc } from "./ko/alternatives/mexc";
import { binance as arBinance } from "./ar/binance";
import { okx as arOkx } from "./ar/okx";
import { bybit as arBybit } from "./ar/bybit";
import { bitget as arBitget } from "./ar/bitget";
import { gate as arGate } from "./ar/gate";
import { kucoin as arKucoin } from "./ar/kucoin";
import { mexc as arMexc } from "./ar/mexc";
import { binance as arAltBinance } from "./ar/alternatives/binance";
import { okx as arAltOkx } from "./ar/alternatives/okx";
import { bybit as arAltBybit } from "./ar/alternatives/bybit";
import { bitget as arAltBitget } from "./ar/alternatives/bitget";
import { gate as arAltGate } from "./ar/alternatives/gate";
import { kucoin as arAltKucoin } from "./ar/alternatives/kucoin";
import { mexc as arAltMexc } from "./ar/alternatives/mexc";
import { binance as viBinance } from "./vi/binance";
import { okx as viOkx } from "./vi/okx";
import { bybit as viBybit } from "./vi/bybit";
import { bitget as viBitget } from "./vi/bitget";
import { gate as viGate } from "./vi/gate";
import { kucoin as viKucoin } from "./vi/kucoin";
import { mexc as viMexc } from "./vi/mexc";
import { binance as viAltBinance } from "./vi/alternatives/binance";
import { okx as viAltOkx } from "./vi/alternatives/okx";
import { bybit as viAltBybit } from "./vi/alternatives/bybit";
import { bitget as viAltBitget } from "./vi/alternatives/bitget";
import { gate as viAltGate } from "./vi/alternatives/gate";
import { kucoin as viAltKucoin } from "./vi/alternatives/kucoin";
import { mexc as viAltMexc } from "./vi/alternatives/mexc";

const texts: Partial<Record<Locale, Record<string, ExchangeText>>> = {
  es: { binance: esBinance, okx: esOkx, bybit: esBybit, bitget: esBitget, gate: esGate, kucoin: esKucoin, mexc: esMexc },
  pt: { binance: ptBinance, okx: ptOkx, bybit: ptBybit, bitget: ptBitget, gate: ptGate, kucoin: ptKucoin, mexc: ptMexc },
  tr: { binance: trBinance, okx: trOkx, bybit: trBybit, bitget: trBitget, gate: trGate, kucoin: trKucoin, mexc: trMexc },
  de: { binance: deBinance, okx: deOkx, bybit: deBybit, bitget: deBitget, gate: deGate, kucoin: deKucoin, mexc: deMexc },
  hi: { binance: hiBinance, okx: hiOkx, bybit: hiBybit, bitget: hiBitget, gate: hiGate, kucoin: hiKucoin, mexc: hiMexc },
  ur: { binance: urBinance, okx: urOkx, bybit: urBybit, bitget: urBitget, gate: urGate, kucoin: urKucoin, mexc: urMexc },
  ko: { binance: koBinance, okx: koOkx, bybit: koBybit, bitget: koBitget, gate: koGate, kucoin: koKucoin, mexc: koMexc },
  ar: { binance: arBinance, okx: arOkx, bybit: arBybit, bitget: arBitget, gate: arGate, kucoin: arKucoin, mexc: arMexc },
  vi: { binance: viBinance, okx: viOkx, bybit: viBybit, bitget: viBitget, gate: viGate, kucoin: viKucoin, mexc: viMexc },
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
  de: { binance: deAltBinance, okx: deAltOkx, bybit: deAltBybit, bitget: deAltBitget, gate: deAltGate, kucoin: deAltKucoin, mexc: deAltMexc },
  hi: { binance: hiAltBinance, okx: hiAltOkx, bybit: hiAltBybit, bitget: hiAltBitget, gate: hiAltGate, kucoin: hiAltKucoin, mexc: hiAltMexc },
  ur: { binance: urAltBinance, okx: urAltOkx, bybit: urAltBybit, bitget: urAltBitget, gate: urAltGate, kucoin: urAltKucoin, mexc: urAltMexc },
  ko: { binance: koAltBinance, okx: koAltOkx, bybit: koAltBybit, bitget: koAltBitget, gate: koAltGate, kucoin: koAltKucoin, mexc: koAltMexc },
  ar: { binance: arAltBinance, okx: arAltOkx, bybit: arAltBybit, bitget: arAltBitget, gate: arAltGate, kucoin: arAltKucoin, mexc: arAltMexc },
  vi: { binance: viAltBinance, okx: viAltOkx, bybit: viAltBybit, bitget: viAltBitget, gate: viAltGate, kucoin: viAltKucoin, mexc: viAltMexc },
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
