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
