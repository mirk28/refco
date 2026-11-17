/**
 * Data for the "[Exchange] alternatives" pages (`/<slug>-alternatives`).
 *
 * One file per exchange under `./alternatives/`. Each holds
 *   – how the exchange is described when it appears as an alternative to another one,
 *   – why people look for an alternative to it (shown on its own alternatives page),
 *   – researched facts that the referral-code pages do not need: products, country availability,
 *     regional platforms, proof of reserves and protection funds.
 *
 * Fees, leverage, KYC rules, referral rules and offers are NOT repeated here – the alternatives pages
 * read them from `./exchanges/<slug>.ts`, so the two page types can never disagree.
 */
import type { AlternativesInfo, CountryKey, CountryStatus, FeatureKey } from "./types";
import { exchanges } from "./exchanges";
import { alternativesPagePath, alternativesPageSlug } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { binance } from "./alternatives/binance";
import { okx } from "./alternatives/okx";
import { bybit } from "./alternatives/bybit";
import { bitget } from "./alternatives/bitget";
import { gate } from "./alternatives/gate";
import { kucoin } from "./alternatives/kucoin";
import { mexc } from "./alternatives/mexc";

export type { AlternativesInfo, AlternativesText, CountryInfo, CountryKey, CountryStatus, FeatureInfo, FeatureKey } from "./types";

/** The English entries. Other languages: `alternativesFor(locale)` in `./i18n`. */
export const alternativesData: Record<string, AlternativesInfo> = { binance, okx, bybit, bitget, gate, kucoin, mexc };

/** Path of the alternatives page: `/binance-alternatives`, in Spanish `/es/alternativas-a-binance`. */
export const alternativesPath = (slug: string, locale: Locale = "en") => alternativesPagePath(slug, locale);
export const getExchangeByAlternativesSlug = (pathSlug: string) => exchanges.find((e) => alternativesPageSlug(e.slug) === pathSlug);

/**
 * Rows of the product table, in display order. `noun` is used in sentences ("offers copy trading").
 * These are the English words; every language has the same list in `src/i18n/compare/<locale>.ts`.
 */
export const featureList: { key: FeatureKey; label: string; noun: string }[] = [
  { key: "copyTrading", label: "Copy trading", noun: "copy trading" },
  { key: "tradingBots", label: "Trading bots", noun: "trading bots" },
  { key: "options", label: "Options", noun: "options trading" },
  { key: "demoTrading", label: "Demo trading", noun: "demo trading" },
  { key: "margin", label: "Spot margin", noun: "spot margin trading" },
  { key: "p2p", label: "P2P trading", noun: "P2P trading" },
  { key: "fiat", label: "Card / bank purchase", noun: "crypto purchases by card or bank transfer" },
  { key: "earn", label: "Earn / staking", noun: "Earn products" },
  { key: "launchpad", label: "Launchpad / launchpool", noun: "a launchpad" },
  { key: "web3Wallet", label: "Web3 wallet", noun: "a self-custody Web3 wallet" },
  { key: "card", label: "Crypto card", noun: "a crypto card" },
];

/**
 * Rows of the country table, in display order. `name` already carries the article where English needs one.
 * These are the English words; every language has the same list in `src/i18n/compare/<locale>.ts`.
 */
export const countryList: { key: CountryKey; name: string; short: string; residents: string }[] = [
  { key: "us", name: "the United States", short: "United States", residents: "US residents" },
  { key: "uk", name: "the United Kingdom", short: "United Kingdom", residents: "UK residents" },
  { key: "ca", name: "Canada", short: "Canada", residents: "Canadian residents" },
  { key: "de", name: "Germany", short: "Germany", residents: "German residents" },
  { key: "fr", name: "France", short: "France", residents: "French residents" },
  { key: "nl", name: "the Netherlands", short: "Netherlands", residents: "Dutch residents" },
  { key: "es", name: "Spain", short: "Spain", residents: "Spanish residents" },
  { key: "it", name: "Italy", short: "Italy", residents: "Italian residents" },
  { key: "au", name: "Australia", short: "Australia", residents: "Australian residents" },
  { key: "jp", name: "Japan", short: "Japan", residents: "Japanese residents" },
  { key: "sg", name: "Singapore", short: "Singapore", residents: "Singapore residents" },
  { key: "hk", name: "Hong Kong", short: "Hong Kong", residents: "Hong Kong residents" },
  { key: "in", name: "India", short: "India", residents: "Indian residents" },
  { key: "ae", name: "the United Arab Emirates", short: "UAE", residents: "UAE residents" },
];

export const countryStatusLabel: Record<CountryStatus, string> = {
  restricted: "Restricted",
  regional: "Regional site",
  partial: "Partly",
  open: "Not restricted",
};
