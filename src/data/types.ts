/**
 * Types for the exchange data in `src/data/exchanges/`.
 *
 * Every factual value about a referral code, registration, verification, welcome offer or fee
 * is read from the exchange's own website or help centre and listed under `sources`.
 */

export type Fee = { maker: string; taker: string };
export type FaqTopic = "referral" | "signup" | "bonus" | "fees" | "safety";
export type Faq = { q: string; a: string; topic?: FaqTopic };
/** An official page of the exchange that a fact on our page was checked against. */
export type Source = { label: string; url: string };
export type Step = { title: string; text: string };
/** One language version of a guide published outside this site. */
export type GuideLink = {
  /** English name of the language, shown in front of `language`, e.g. "Hindi". Leave out where both are the same. */
  name?: string;
  /** Language name as its readers write it, e.g. "Español". */
  language: string;
  /** BCP 47 language tag of the linked article, e.g. "pt-BR". */
  hreflang: string;
  url: string;
};
/** A short block of links to guides on another platform, e.g. Binance Square. */
export type ExternalGuides = {
  heading: string;
  intro: string;
  /** What every linked article is; shown before the language name in the link text. */
  linkLabel: string;
  links: GuideLink[];
};

/* ------------------------------ Language versions ------------------------------ */

/**
 * The text of an exchange entry in another language (`src/data/i18n/<locale>/<slug>.ts`).
 *
 * Only text lives here. Codes, links, fee numbers, market data and source URLs are always taken from the
 * English entry in `src/data/exchanges/<slug>.ts`, so a translation cannot change a fact by accident.
 * Every array must have the same length and order as in the English entry; `scripts/check-i18n.mjs`
 * verifies that, and that every number of the English text also appears in the translation.
 */
export type ExchangeText = {
  referral: ReferralInfo;
  signup: SignupInfo;
  welcomeTasks: { task: string; reward: string }[];
  tokenDiscount: string;
  /** Names of the markets in `extraFees`, same order. */
  extraFeeMarkets: string[];
  /** Labels of `sources`, same order. The linked pages stay the official (English) ones. */
  sourceLabels: string[];
  /** Texts of the `guides` block; leave out if the English entry has none. */
  guides?: { heading: string; intro: string; linkLabel: string };
  feeDiscount: string;
  referralCovers: string[];
  bonusHeadline: string;
  benefits: string[];
  benefitNote: string;
  headquarters: string;
  regulation: string;
  users: string;
  assets: string;
  maxLeverage: string;
  feeNote: string;
  products: string[];
  tagline: string;
  quickAnswer: string;
  about: string[];
  highlights: { title: string; text: string }[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  signupTip: string;
  safety: string;
  restricted: string;
  faqs: Faq[];
};

/* ------------------------- "[Exchange] alternatives" pages ------------------------- */

/** Products compared on the alternatives pages. */
export type FeatureKey =
  | "copyTrading"
  | "tradingBots"
  | "options"
  | "demoTrading"
  | "p2p"
  | "fiat"
  | "earn"
  | "launchpad"
  | "web3Wallet"
  | "card"
  | "margin";
/**
 * `has: true` – the exchange shows the product on its own site (see `sources`).
 * `has: false` – the exchange itself says it does not offer it.
 * `has: null` – no official page for it was found at the review date.
 */
export type FeatureInfo = { has: boolean | null; note: string };

/** Countries compared on the alternatives pages. */
export type CountryKey = "us" | "uk" | "ca" | "de" | "fr" | "nl" | "es" | "it" | "au" | "jp" | "sg" | "hk" | "in" | "ae";
/**
 * `restricted` – closed to residents according to the exchange's own list of restricted countries or its own notices.
 * `regional` – served by a separate regional platform that the exchange names.
 * `partial` – only some products or regions are restricted.
 * `open` – not on the restricted list at the review date (no guarantee that every product is offered).
 */
export type CountryStatus = "restricted" | "regional" | "partial" | "open";
export type CountryInfo = { status: CountryStatus; note?: string };

/**
 * Content and researched facts for the alternatives pages (`src/data/alternatives/<slug>.ts`).
 * Every fact is taken from the exchange's own pages: either from `Exchange.sources` or from `sources` here.
 */
export type AlternativesInfo = {
  /* --- this exchange as an alternative to another one --- */
  /** Short label for tables, e.g. "Copy trading". */
  role: string;
  /** Half sentence for quick answers, starting with the exchange name, e.g. "Gate lists the most assets (5,400+)". */
  pick: string;
  /** Two or three sentences on what this exchange offers as an alternative. */
  pitch: string;
  chooseIf: string[];
  thinkTwiceIf: string[];
  /* --- this exchange as the one people want to replace --- */
  /** Lead paragraph of its alternatives page. */
  intro: string;
  /** Why people look for an alternative – facts about this exchange only. */
  reasons: { title: string; text: string }[];
  /** When staying is the better choice. */
  stayIf: string[];
  /** Questions specific to this exchange's alternatives page. */
  faqs: Faq[];
  /* --- researched facts --- */
  /** Proof of reserves in one line, with the snapshot date. */
  reserves: string;
  /** User-protection or insurance fund in one line ("" if the exchange names none). */
  fund: string;
  features: Record<FeatureKey, FeatureInfo>;
  countries: Record<CountryKey, CountryInfo>;
  /** Regional platforms named by the exchange, in one or two sentences ("" if none). */
  regional: string;
  /** The MiCA-authorised entity the exchange names for EEA residents, e.g. "OKX Europe Limited, Malta" ("" if it names none). */
  mica: string;
  /** Earlier brand name people still search for, e.g. "Gate.io". */
  formerName?: string;
  /** Official pages the features, countries and regional platforms were checked against. */
  sources: Source[];
};

/** How the referral code works on this exchange. */
export type ReferralInfo = {
  /** What the exchange itself calls the code, e.g. "Referral ID". */
  codeName: string;
  /** Short value for the facts table: where the code goes (only field labels that were seen on the official form). */
  whereShort: string;
  /** One sentence telling the reader how to apply the code – used in the "What is the code?" answer. */
  apply: string;
  /** Where the code goes on web and in the app. */
  whereToEnter: string;
  /** Short value for the facts table, e.g. "No – only at sign-up" or "Yes – within 14 days". */
  afterSignupShort: string;
  /** The official rule on adding a code to an existing account. */
  afterSignup: string;
  /** What the invited user receives under the official referral programme. */
  inviteeReward: string;
  /** Explanatory paragraphs for the "how the code works" section. */
  guide: string[];
};

export type SignupInfo = {
  /** Sign-up methods offered on the official registration form. */
  methods: string[];
  /** Registration steps as documented by the exchange. */
  steps: Step[];
  /** Short value for the facts table, e.g. "Mandatory". */
  kycShort: string;
  /** What identity verification is needed for, and what works without it. */
  kyc: string;
  documents: string;
  minAge: string;
};

export type Exchange = {
  slug: string;
  name: string;
  homepage: string;
  affiliateUrl: string;
  referralCode: string;
  /** Optional separate app-download referral link for the QR code (defaults to affiliateUrl). */
  appUrl?: string;
  referral: ReferralInfo;
  signup: SignupInfo;
  /** Welcome-offer tasks and their rewards as listed by the exchange (empty if it publishes none publicly). */
  welcomeTasks: { task: string; reward: string }[];
  /** Fee discount for paying with the exchange token, as published ("" if none). */
  tokenDiscount: string;
  /** Additional fee rows beyond spot and USDT futures, e.g. options or coin-margined contracts. */
  extraFees: { market: string; maker: string; taker: string }[];
  /** Official pages the facts were checked against. */
  sources: Source[];
  /** Guides about this exchange on another platform; shown on the exchange page and listed in llms.txt. */
  guides?: ExternalGuides;
  /**
   * Fee discount YOU pass on to users (kickback set in your affiliate dashboard),
   * e.g. "10% off trading fees for life". Leave empty if you don't share commission.
   * When set, it is shown as the main benefit everywhere.
   */
  feeDiscount: string;
  /** Products the referral/affiliate link covers – one link, all products. */
  referralCovers: string[];
  /** Short benefit headline used in titles, cards and hero (verified at review date). */
  bonusHeadline: string;
  /** Concrete new-user benefits (verified at review date). */
  benefits: string[];
  /** Small print for the benefits (conditions). */
  benefitNote: string;
  feesUrl: string;
  brandColor: string;
  brandInk: string;
  /** Path to logo in /public/logos – leave empty to show the monogram tile. */
  logo: string;
  founded: string;
  headquarters: string;
  regulation: string;
  users: string;
  assets: string;
  maxLeverage: string;
  spotFees: Fee;
  futuresFees: Fee;
  feeNote: string;
  products: string[];
  /** CoinMarketCap derivatives ranking snapshot (see site.marketDataDate) – third-party data. */
  market: { rank: number; openInterestBn: number; volume24hBn: number; markets: number };
  tagline: string;
  quickAnswer: string;
  about: string[];
  highlights: { title: string; text: string }[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  signupTip: string;
  safety: string;
  restricted: string;
  /** Exchange-specific questions; the common ones are generated in `src/lib/faqs.ts`. */
  faqs: Faq[];
};
