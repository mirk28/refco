import type { Exchange } from "../types";

/** Facts checked against binance.com on 2026-11-16 (global site, no regional redirect). */
export const binance: Exchange = {
  slug: "binance",
  name: "Binance",
  homepage: "https://www.binance.com/",
  affiliateUrl: "https://www.binance.com/register?ref=REFCO888",
  referralCode: "REFCO888",
  referral: {
    codeName: "Referral ID",
    whereShort: "“Referral ID (Optional)” field on the last step of registration",
    apply:
      "Enter it in the “Referral ID (Optional)” field on the last step of registration, or open the sign-up link on this page, which fills it in for you.",
    whereToEnter:
      "Binance asks for the referral code on the last step of registration – after you have confirmed your email address or phone number and set a password – both on the website and in the app. If you arrive through a referral link, Binance fills the code in for you and shows a green tick with “Linked” next to it. Otherwise type REFCO888 into the “Referral ID (Optional)” field. The step is optional and can be skipped.",
    afterSignupShort: "Yes – within 30 days, before any deposit or trade",
    afterSignup:
      "Yes, under conditions. Binance lets you bind a missing referral code on its referral binding page (binance.com/en/activity/referral/bind-ref) if your account is less than 30 days old, has no deposit or trading activity, has no referral yet and is a main account, if your identity verification was not used on another account in the past 180 days, and if the account is not flagged for wash trading. Once a referral is linked, Binance states that it cannot be changed or removed.",
    inviteeReward:
      "REFCO888 is a Binance Referral Pro code. In Pro mode the invited user receives a share of their own trading fees back, paid in USDC, if the referrer has chosen to share commission – Binance shows the rate that applies during sign-up. Separately from the code, Binance gives every verified new user beginner tasks worth up to 100 USD in trading-fee rebate vouchers.",
    guide: [
      "Binance runs two referral modes, and a new user can only be in one of them. Links of the form binance.com/register?ref=… – like the one on this page – belong to Referral Pro: the referrer earns a commission on your trading fees and can pass part of it back to you as a rebate in USDC. The other mode, Referral Lite, works with trading-fee rebate vouchers for small first purchases and trades; Binance does not issue those vouchers under a Pro code.",
      "One Pro referral covers Spot, Margin and Futures. When you later open a Futures account, Binance shows a second, optional “Futures Referral ID” field. It only accepts a code from the same referrer who invited your main account, so you cannot combine two different inviters.",
      "Where you live matters. Since 1 July 2026, users registered in EEA countries can no longer take part in the Binance referral programme in any capacity, and Binance's referral terms also list restrictions for the United Kingdom, Singapore, Japan, Turkey, Hong Kong and Israel. You can still open an account from the countries Binance serves, but the referral then has no effect.",
    ],
  },
  signup: {
    methods: ["an email address", "a phone number", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Open the Binance registration page",
        text: "Use the sign-up button on this page. It opens accounts.binance.com with the referral attached – Binance shows the code REFCO888 next to the form.",
      },
      {
        title: "Enter your email address or phone number",
        text: "Or continue with Google, Apple or Telegram. Accept the Terms of Use and Privacy Notice to go on.",
      },
      {
        title: "Confirm the 6-digit code",
        text: "Binance sends a 6-digit verification code to your email or phone. It is valid for 30 minutes.",
      },
      {
        title: "Set a password",
        text: "At least 8 characters, including one uppercase letter and one number.",
      },
      {
        title: "Check the referral code",
        text: "On the last step the Referral ID should already be filled in, with a green tick and “Linked”. If the field is empty, enter REFCO888 – or skip it if you do not want a referral.",
      },
      {
        title: "Verify your identity",
        text: "Binance then leads you to identity verification. Every new user has to complete it before depositing or trading.",
      },
    ],
    kycShort: "Mandatory for all products",
    kyc: "Yes. Binance requires every new user to complete identity verification (status “Verified”) before using any product – including crypto deposits and trades. You pick a document, upload it and pass a liveness check; Binance says the review is usually finished within 48 hours. Older accounts that never verified are limited to withdrawals.",
    documents: "Most users can verify with a passport, a national ID card or a driver's licence, followed by a liveness (face) check.",
    minAge: "18 years (Binance Terms of Use)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Paying fees in BNB takes 25% off spot fees (0.075% instead of 0.10%) and 10% off USDⓈ-M futures fees (0.018% maker / 0.045% taker instead of 0.02% / 0.05%).",
  extraFees: [{ market: "COIN-M futures", maker: "0.02%", taker: "0.05%" }],
  sources: [
    { label: "Binance: How to register on the website (referral step)", url: "https://www.binance.com/en/support/faq/detail/08f314ad219e45fc9b7a27b67801a5c4" },
    { label: "Binance: How to register in the app", url: "https://www.binance.com/en/support/faq/detail/360042718372" },
    { label: "Binance: Binding a referral code after registration", url: "https://www.binance.com/en/support/faq/detail/6233094e540b4ea4ac50387d1518911b" },
    { label: "Binance: Referral Pro and Referral Lite modes", url: "https://www.binance.com/en/support/faq/detail/d10f95a5ac8847bdb6f422a26921745d" },
    { label: "Binance: Referral programme terms and regional restrictions", url: "https://www.binance.com/en/support/faq/detail/d06a66559cdd4185aea360752405633e" },
    { label: "Binance: New-user welcome rewards (fee rebate vouchers)", url: "https://www.binance.com/en/support/faq/detail/cfb6e84202c54687b1b639228b56f59e" },
    { label: "Binance: Spot trading fee rates", url: "https://www.binance.com/en/fee/trading" },
    { label: "Binance: USDⓈ-M futures fee rates", url: "https://www.binance.com/en/fee/futureFee" },
    { label: "Binance: COIN-M futures fee rates", url: "https://www.binance.com/en/fee/deliveryFee" },
    { label: "Binance: Leverage and margin of USDⓈ-M futures", url: "https://www.binance.com/en/futures/trading-parameters/perpetual/leverage-margin" },
    { label: "Binance: Leverage limits for new futures accounts", url: "https://www.binance.com/en/support/faq/detail/360033162192" },
    { label: "Binance: Identity verification", url: "https://www.binance.com/en/support/faq/detail/360027287111" },
    { label: "Binance: Terms of Use", url: "https://www.binance.com/en/terms" },
    { label: "Binance: List of prohibited countries", url: "https://www.binance.com/en/about-legal/list-of-prohibited-countries" },
    { label: "Binance: Licences and registrations", url: "https://www.binance.com/en/about-legal/licenses" },
    { label: "Binance: Proof of reserves", url: "https://www.binance.com/en/proof-of-reserves" },
    { label: "Binance: SAFU fund", url: "https://www.binance.com/en/support/faq/detail/028799e730294ae4a9b382d60d350116" },
    { label: "Binance: About", url: "https://www.binance.com/en/about" },
  ],
  video: {
    src: "/video/binance-referral-code-guide.mp4",
    poster: "/video/binance-referral-code-guide.jpg",
    captions: "/video/binance-referral-code-guide.en.vtt",
    title: "Binance referral code REFCO888: how to enter it and what it gives you",
    description:
      "Step-by-step video: where the Referral ID field is in Binance registration, what the REFCO888 Referral Pro code gives you, and three mistakes that cost you the referral.",
    duration: "PT1M52S",
    uploadDate: "2026-11-26",
    transcript: "A referral code on Binance only works if you enter it at the right moment. Here are the four steps, and then the three mistakes that make a code count for nothing. First, on binance.com, choose register and enter your email or phone number. Confirm it is you with the 6-digit code Binance sends. Choose a password with at least eight characters, a number and an uppercase letter. Now the final screen. Find the optional field called Referral ID and type REFCO888, spelled R-E-F-C-O-8-8-8. If you used the sign-up link on referral-code.org, the field is already filled in for you. So why use a code at all? First, REFCO888 is a Referral Pro code, so you get part of your own trading fees back, paid in USDC. Binance shows your exact rate on the sign-up page. Second, one code covers spot, margin and futures. Third, it costs you nothing. Your fee rate stays the same, and the rebate comes back on top. Mistake one. Depositing before the code is linked. After your first deposit or trade, a code can no longer be added. Mistake two. Typing a different code into the Futures Referral ID field. It only accepts the code from whoever referred your main account. Mistake three. Not checking your region. Since July 2026, users registered in EEA countries cannot take part in the referral programme. The code is REFCO888. The full rules and answers are on referral-code.org.",
  },
  guides: {
    heading: "Guides on Binance Square",
    intro:
      "A longer checklist-style guide to signing up with a Binance referral code is published on Binance Square, Binance's own content platform. The original is in Spanish; Binance Square can show it translated:",
    linkLabel: "Binance referral code FAQ",
    videoLinkLabel: "Video: how to register on Binance, step by step",
    links: [
      {
        language: "English",
        hreflang: "en",
        url: "https://www.binance.com/en/square/post/391114726726736",
        // Binance Square has its own translation in these languages; the other pages link the English view.
        byLocale: {
          ar: { language: "العربية", hreflang: "ar", url: "https://www.binance.com/ar/square/post/391114726726736" },
          de: { language: "Deutsch", hreflang: "de", url: "https://www.binance.com/de/square/post/391114726726736" },
          es: { language: "Español", hreflang: "es", url: "https://www.binance.com/es/square/post/391114726726736" },
          fr: { language: "Français", hreflang: "fr", url: "https://www.binance.com/fr/square/post/391114726726736" },
          id: { language: "Bahasa Indonesia", hreflang: "id", url: "https://www.binance.com/id/square/post/391114726726736" },
          pt: { language: "Português, Brasil", hreflang: "pt-BR", url: "https://www.binance.com/pt-BR/square/post/391114726726736" },
          ru: { language: "Русский", hreflang: "ru", url: "https://www.binance.com/ru/square/post/391114726726736" },
          uk: { language: "Українська", hreflang: "uk", url: "https://www.binance.com/uk-UA/square/post/391114726726736" },
          vi: { language: "Tiếng Việt", hreflang: "vi", url: "https://www.binance.com/vi/square/post/391114726726736" },
        },
      },
      {
        kind: "video",
        language: "English",
        hreflang: "en",
        url: "https://www.binance.com/en/square/post/392240953624239",
        byLocale: {
          ar: { language: "العربية", hreflang: "ar", url: "https://www.binance.com/ar/square/post/392240953624239" },
          de: { language: "Deutsch", hreflang: "de", url: "https://www.binance.com/de/square/post/392240953624239" },
          es: { language: "Español", hreflang: "es", url: "https://www.binance.com/es/square/post/392240953624239" },
          fr: { language: "Français", hreflang: "fr", url: "https://www.binance.com/fr/square/post/392240953624239" },
          id: { language: "Bahasa Indonesia", hreflang: "id", url: "https://www.binance.com/id/square/post/392240953624239" },
          pt: { language: "Português, Brasil", hreflang: "pt-BR", url: "https://www.binance.com/pt-BR/square/post/392240953624239" },
          ru: { language: "Русский", hreflang: "ru", url: "https://www.binance.com/ru/square/post/392240953624239" },
          uk: { language: "Українська", hreflang: "uk", url: "https://www.binance.com/uk-UA/square/post/392240953624239" },
          vi: { language: "Tiếng Việt", hreflang: "vi", url: "https://www.binance.com/vi/square/post/392240953624239" },
        },
      },
    ],
  },
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures"],
  bonusHeadline: "Up to 100 USD in fee rebate vouchers",
  benefits: [
    "Beginner tasks worth up to 100 USD in trading-fee rebate vouchers once your account is verified",
    "One referral covers Spot, Margin and Futures – no second code needed",
    "25% off spot fees and 10% off USDⓈ-M futures fees when you pay fees in BNB",
    "The code can still be linked up to 30 days after registration if you have not deposited or traded",
  ],
  benefitNote:
    "The welcome vouchers are Binance's general new-user offer, not a reward of the referral code. They are issued after identity verification, refund spot trading fees, cannot offset API trades and can only be used in the Binance app. Binance excludes a long list of countries from them, among them the United Kingdom, the United States, Canada, the Netherlands, Norway, Serbia, Japan, Singapore and Hong Kong.",
  feesUrl: "https://www.binance.com/en/fee/trading",
  brandColor: "#F0B90B",
  brandInk: "#1E2026",
  logo: "/logos/binance.svg",
  founded: "2017",
  headquarters: "Operated through ADGM-licensed entities in Abu Dhabi",
  regulation: "Regulated by the ADGM FSRA (Abu Dhabi); further licences and registrations incl. Dubai (VARA), Bahrain, Kazakhstan, Australia and Japan",
  users: "320M+ registered users (per Binance)",
  assets: "600+ cryptocurrencies",
  maxLeverage: "Up to 150x (BTCUSDT and ETHUSDT perpetuals)",
  spotFees: { maker: "0.10%", taker: "0.10%" },
  futuresFees: { maker: "0.02%", taker: "0.05%" },
  feeNote: "Higher VIP levels lower the rates further.",
  products: ["Spot", "Margin", "USDⓈ-M & COIN-M futures", "Options", "Copy trading", "Trading bots", "Earn & Launchpool"],
  market: { rank: 1, openInterestBn: 34.09, volume24hBn: 27.59, markets: 819 },
  tagline: "The deepest liquidity in crypto derivatives",
  quickAnswer:
    "The Binance referral code is REFCO888. Binance asks for it on the last step of registration; through the button on this page it is filled in automatically. One code covers Spot, Margin and Futures. If you forgot it, Binance lets you bind a code within 30 days of registration as long as you have not deposited or traded. Verified new users can also earn up to 100 USD in trading-fee rebate vouchers.",
  about: [
    "Binance launched in July 2017 and, by its own account, became the largest crypto exchange in the world within 180 days. Today it reports more than 320 million registered users in over 180 countries and lists more than 600 cryptocurrencies. In derivatives it is the clear number one: on our market-data date it held more open interest than the next three exchanges on CoinMarketCap's derivatives ranking combined. For traders that matters, because deep order books mean tighter spreads and less slippage on large orders.",
    "One login gives access to spot and margin trading, USDⓈ-margined and coin-margined futures, options, trading bots and copy trading, plus Earn and Launchpool. Leverage on USDⓈ-M futures goes up to 150x on the BTCUSDT and ETHUSDT perpetuals for positions of up to 300,000 USDT; coin-margined contracts go up to 125x. New futures accounts cannot use more than 20x during their first 30 days.",
    "Binance.com is regulated by the Financial Services Regulatory Authority of Abu Dhabi Global Market (ADGM) through three licensed entities. Binance also lists licences and registrations in Dubai (VARA), Bahrain, Kazakhstan, Australia (AUSTRAC), India, Indonesia, Japan, New Zealand, Thailand, Mexico, El Salvador, Argentina, Brazil and South Africa. Its proof of reserves combines a Merkle tree with zk-SNARKs so that users can check that their own balance is included, and its SAFU emergency fund, set up in 2018, held about US$1 billion as of February 2026.",
  ],
  highlights: [
    { title: "#1 liquidity", text: "Largest open interest and futures volume of any exchange." },
    { title: "Low futures fees", text: "0.02% maker / 0.05% taker on the standard tier, 10% less with BNB." },
    { title: "Everything in one app", text: "Futures, options, bots, copy trading and Earn under one account." },
  ],
  pros: [
    "Unmatched liquidity on BTC, ETH and major altcoin perpetuals",
    "Competitive standard fees with an extra BNB discount",
    "Proof of reserves you can verify yourself and the SAFU fund of about US$1 billion",
    "A missing referral code can still be linked within 30 days",
  ],
  cons: [
    "Not available in the United States, Canada and the Netherlands",
    "Identity verification is required before you can deposit or trade",
    "New futures accounts are limited to 20x leverage for the first 30 days",
    "EEA residents have been excluded from the referral programme since July 2026",
  ],
  bestFor: ["Active futures traders who need deep liquidity", "Traders who want one platform for everything", "High-volume users who benefit from VIP tiers"],
  signupTip:
    "Finish identity verification straight away: Binance does not let new accounts deposit or trade without it, and the welcome tasks are only issued once you are verified.",
  safety:
    "Binance publishes a proof of reserves that it says shows all account balances backed 1:1 – the audit of 12 November 2026 showed a BTC reserve ratio of 100.05% – and lets you verify your own account under Wallet → Verification. Account protection includes two-factor authentication, passkeys and a withdrawal whitelist. The SAFU fund is meant to protect users in extreme cases. No centralised exchange is risk-free, so only keep funds there that you actively trade with.",
  restricted:
    "Binance's list of prohibited countries (updated 5 January 2026) names the United States, Canada, the Netherlands, Cuba, North Korea, Iran, Crimea and the so-called Donetsk and Luhansk People's Republics.",
  faqs: [
    {
      topic: "referral",
      q: "Is REFCO888 a working Binance referral code?",
      a: "Yes. On 16 November 2026 the link binance.com/register?ref=REFCO888 opened Binance's own registration page, which displayed the code REFCO888 next to the sign-up form.",
    },
    {
      topic: "referral",
      q: "What is the difference between Binance Referral Pro and Referral Lite?",
      a: "They are two separate modes, and a new user can only be in one. In Referral Pro the referrer earns commission on your trading fees and may share part of it with you as a rebate paid in USDC. In Referral Lite both sides receive trading-fee rebate vouchers for completing small first-purchase and first-trade tasks. REFCO888 is a Referral Pro code, so the Lite vouchers do not apply.",
    },
    {
      topic: "referral",
      q: "Is there a separate Binance Futures referral code?",
      a: "Binance shows an optional “Futures Referral ID” field when you open a Futures account. It only accepts a code from the same referrer whose Referral Pro code or link you used to register, so one referral effectively covers Spot, Margin and Futures.",
    },
    {
      topic: "referral",
      q: "Can I change my Binance referral code later?",
      a: "No. Binance states that once the referral relationship has been established, it cannot be changed or removed. Only an account without any referral can bind one, within 30 days of registration and before its first deposit or trade.",
    },
    {
      topic: "referral",
      q: "Does the Binance referral code work in the EU?",
      a: "No longer. According to Binance's referral terms, users registered under EEA countries have not been eligible to take part in the Binance Referral Program since 1 July 2026. The terms also list restrictions for the United Kingdom, Singapore, Japan, Turkey, Hong Kong and Israel.",
    },
    {
      topic: "signup",
      q: "Can I sign up to Binance with Google, Apple or Telegram?",
      a: "Yes. Besides an email address or phone number, Binance's registration page offers “Continue with Google”, “Continue with Apple” and “Continue with Telegram”.",
    },
    {
      topic: "signup",
      q: "What are the Binance password requirements?",
      a: "A Binance password needs at least 8 characters, including one uppercase letter and one number.",
    },
    {
      topic: "signup",
      q: "How long is the Binance verification code valid?",
      a: "The 6-digit code Binance sends to your email or phone during registration is valid for 30 minutes.",
    },
    {
      topic: "signup",
      q: "How long does Binance identity verification take?",
      a: "Binance says the review is usually completed within 48 hours after you submit your document and pass the liveness check.",
    },
    {
      topic: "signup",
      q: "Can I use Binance without KYC?",
      a: "No. All new users must be verified before they can use Binance products, including crypto deposits and trades. Unverified older accounts can only withdraw.",
    },
    {
      topic: "bonus",
      q: "What is the Binance welcome bonus for new users?",
      a: "Binance gives new users three beginner tasks that unlock up to 100 USD worth of trading-fee rebate vouchers. The tasks are issued only after you complete account verification, and each voucher refunds a set percentage of your spot trading fees.",
    },
    {
      topic: "bonus",
      q: "Can I withdraw the Binance welcome bonus?",
      a: "No. The reward is a trading-fee rebate voucher, not cash: it refunds spot trading fees, cannot be used for trades placed through the API and can only be used in the Binance app.",
    },
    {
      topic: "bonus",
      q: "Which countries are excluded from the Binance welcome vouchers?",
      a: "Binance's terms exclude, among others, the United Kingdom, the United States, Canada, the Netherlands, Croatia, Norway, Iceland, Liechtenstein, Serbia, Albania, Russia, Japan, Singapore and Hong Kong. The full list is in Binance's help article on the welcome rewards.",
    },
    {
      topic: "fees",
      q: "How much is the Binance BNB fee discount?",
      a: "Paying fees in BNB takes 25% off spot fees – 0.075% instead of 0.10% for regular users – and 10% off USDⓈ-M futures fees, which gives 0.018% maker and 0.045% taker.",
    },
    {
      topic: "fees",
      q: "What is the maximum leverage on Binance?",
      a: "Up to 150x on the BTCUSDT and ETHUSDT USDⓈ-M perpetual contracts for positions of up to 300,000 USDT, and up to 125x on the BTCUSD coin-margined perpetual. Futures accounts younger than 30 days cannot use more than 20x. High leverage sharply increases the risk of liquidation.",
    },
    {
      topic: "fees",
      q: "What are Binance COIN-M futures fees?",
      a: "Regular users pay 0.02% maker and 0.05% taker on COIN-M futures, the same rates as on USDT-margined USDⓈ-M contracts.",
    },
    {
      topic: "safety",
      q: "Is Binance available in the US?",
      a: "No. The United States is on Binance's list of prohibited countries, together with Canada and the Netherlands.",
    },
    {
      topic: "safety",
      q: "What is the Binance SAFU fund?",
      a: "SAFU (Secure Asset Fund for Users) is an emergency fund Binance set up in 2018 to protect users in extreme cases. Binance states that it held crypto assets worth about US$1 billion as of February 2026 and is topped up if it falls below US$800 million.",
    },
    {
      topic: "safety",
      q: "How do I check Binance's proof of reserves?",
      a: "Binance publishes its reserve ratios on its proof-of-reserves page and uses a Merkle tree with zk-SNARKs. Logged-in users can confirm that their own balance is included under Wallet → Verification.",
    },
  ],
};
