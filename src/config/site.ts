/**
 * Central site configuration.
 * Everything brand- or legal-related lives here so it can be changed in one place.
 */
export const site = {
  name: "RefCo",
  domain: "referral-code.org",
  url: "https://referral-code.org",
  tagline: "Verified referral codes for crypto exchanges – spot & futures",
  description:
    "Verified referral codes for Binance, OKX, Bybit, Bitget, Gate, KuCoin and MEXC – unlock new-user bonuses and fee rebates for spot and futures trading with one sign-up link. Fees, facts and honest pros and cons.",
  locale: "en_US",
  language: "en",
  /** Date the facts on the site were last reviewed (ISO). Update whenever you re-check data. */
  lastReviewed: "2026-10-11",
  /** Snapshot date of the CoinMarketCap market data shown on the pages. */
  marketDataDate: "2026-10-11",
  contactEmail: "hello@referral-code.org",
  themeColor: "#0B1B33",
  social: {
    // Add profiles when they exist – they are used in Organization schema (sameAs).
    x: "",
    telegram: "",
  },
} as const;

/**
 * Legal entity for the imprint (Impressum) and privacy policy.
 * >>> Replace all values in [BRACKETS] before going live. <<<
 */
export const legal = {
  operator: "[COMPANY / FULL NAME]",
  representative: "[NAME OF RESPONSIBLE PERSON]",
  street: "[STREET AND NUMBER]",
  zipCity: "[ZIP CITY]",
  country: "[COUNTRY]",
  email: "hello@referral-code.org",
  phone: "[PHONE – optional]",
  registerEntry: "[COMMERCIAL REGISTER / UID, e.g. CHE-123.456.789 – if registered]",
  vatId: "[VAT NUMBER – if applicable]",
  hostingProvider: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA",
} as const;

export const nav = [
  { href: "/#exchanges", label: "Exchanges" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/#compare", label: "Compare" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
] as const;
