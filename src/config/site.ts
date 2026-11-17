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
  lastReviewed: "2026-11-16",
  /** Snapshot date of the CoinMarketCap market data shown on the pages. */
  marketDataDate: "2026-10-11",
  contactEmail: "hello@referral-code.org",
  /**
   * Google Analytics 4 measurement ID. Analytics is loaded only after the visitor has allowed it in the
   * consent banner (src/components/Analytics.tsx). Set to "" to switch Analytics and the banner off.
   */
  analyticsId: "G-95BQH69LCJ",
  themeColor: "#0B1B33",
  social: {
    // Add profiles when they exist – they are used in Organization schema (sameAs).
    x: "",
    telegram: "",
  },
} as const;

/**
 * Operator shown in the imprint (Impressum) and named as controller in the privacy policy.
 *
 * `operatorType: "private"` – a private individual: the imprint shows no representative, no register entry
 * and no VAT number. Set it to "company" and fill `representative`, `registerEntry` and `vatId` if the
 * website is run by a company. Empty optional fields (`phone`) are not shown.
 */
export const legal = {
  operatorType: "private" as "private" | "company",
  operator: "Vitali Vendeta",
  representative: "",
  street: "Plac Defilad 1",
  zipCity: "00-901 Warszawa",
  country: "Polska",
  email: "hello@referral-code.org",
  phone: "",
  registerEntry: "",
  vatId: "",
  hostingProvider: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA",
} as const;

