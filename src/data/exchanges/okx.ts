import type { Exchange } from "../types";

/**
 * Facts checked against okx.com on 2026-11-16. Visitors from Europe are served OKX Europe (okx.com/en-eu, my.okx.com);
 * values for the global site come from OKX's global help articles, its global join page and its public API.
 */
export const okx: Exchange = {
  slug: "okx",
  name: "OKX",
  homepage: "https://www.okx.com/",
  affiliateUrl: "https://okx.com/join/T7IRGAR3",
  referralCode: "T7IRGAR3",
  referral: {
    codeName: "referral code",
    whereShort: "“Referral code (optional)” field on the email step of sign-up",
    apply:
      "Enter it in the “Referral code (optional)” field on the email step of sign-up – the field is collapsed and has to be expanded – or open the sign-up link on this page, which carries the code for you.",
    whereToEnter:
      "On the OKX website the code goes into the field “Referral code (optional)” on the step where you enter your email address. The field is collapsed, so expand it first. If you come through a referral link the code is carried along, and OKX states that a code prefilled from a link cannot be edited. On a phone, OKX's instructions are to enter your email on the invite page first, then install the app through that link and sign up with the same email – if you install the app separately and register there, the code may not carry over.",
    afterSignupShort: "No – only during sign-up",
    afterSignup:
      "No. OKX states that invite codes only take effect during sign-up and cannot be added retroactively; its referral FAQ says a code usually cannot be added or changed afterwards. Deleting your account and registering again does not restore eligibility and may count as a violation. A link of the form okx.com/join/… cannot be attached to an existing account.",
    inviteeReward:
      "As an invited user you get OKX's Welcome Rewards, also called the New User Bonus. They are separate from the inviter's reward and depend on your country, the campaign and the link you used; the offer is fixed at the moment you sign up. At our check the invite page for this code showed a welcome reward of up to €400 on OKX Europe, and OKX's global invite page promised up to 100 USDT for registering and completing tasks.",
    guide: [
      "An OKX referral code links your new account to the person who invited you. For you the practical effect is access to the Welcome Rewards: a set of deposit and trading tasks whose amounts OKX sets per country, campaign and user group. Which offer you get is decided when you sign up, which is why the code has to be in place at that moment.",
      "Which OKX you land on depends on where you live. Visitors from the EEA – and from several other European countries – are routed to OKX Europe (okx.com/en-eu), operated by OKX Europe Limited in Malta under MiCA. There the rewards are paid as crypto, X-Perps vouchers or a VIP Pass, crypto rewards stay locked for up to 45 days (tradable but not withdrawable), and X-Perps volume does not count towards the trading tasks.",
      "On the global site the rewards arrive as crypto or rebate cards that have to be opened within 30 days, a trading task must be met with a single trade, and unfinished tasks disappear 180 days after sign-up.",
    ],
  },
  signup: {
    methods: ["an email address (a phone number is added and confirmed during sign-up)"],
    steps: [
      {
        title: "Open the OKX invite page",
        text: "Use the sign-up button on this page. OKX opens the invite page for the code T7IRGAR3 and shows the welcome reward that applies in your country.",
      },
      {
        title: "Choose your country or region of residence",
        text: "Select where you live, acknowledge the Terms of Service and click “Next”.",
      },
      {
        title: "Enter your email address and check the referral code",
        text: "Expand “Referral code (optional)” – it should contain T7IRGAR3 – then click “Sign up”.",
      },
      {
        title: "Confirm the 6-digit email code",
        text: "OKX sends a 6-digit code to your email address. It is valid for 10 minutes.",
      },
      {
        title: "Add your phone number",
        text: "Enter your phone number and the 6-digit code sent to it. OKX requires both an email address and a phone number on every account.",
      },
      {
        title: "Set a password",
        text: "Choose a strong, unique password for the account.",
      },
      {
        title: "Verify your identity",
        text: "Complete identity verification with a government-issued ID and a selfie or facial check. Trading, deposits and withdrawals come after it.",
      },
    ],
    kycShort: "Mandatory before trading, deposits and withdrawals",
    kyc: "Yes. OKX requires identity verification to use an individual account – trading, deposits and withdrawals all come after it. You provide your residence, nationality, name, date of birth and ID details, upload a government-issued document and pass a selfie or facial check; OKX may also ask for a proof of address issued within the last 6 months. OKX says the review is completed within 24 hours, and one identity document can be used for one account only.",
    documents:
      "A valid government-issued ID: passport, national ID card, driving licence or residence permit – the list shown for your country during verification is the definitive one – plus a selfie or facial check and, if requested, a proof of address no older than 6 months.",
    minAge: "18 years",
  },
  welcomeTasks: [],
  tokenDiscount: "",
  extraFees: [{ market: "Options", maker: "0.03%", taker: "0.03%" }],
  sources: [
    { label: "OKX: How to register an account", url: "https://www.okx.com/en-eu/help/how-to-register-an-account-on-okx" },
    { label: "OKX: Referral programme FAQ", url: "https://www.okx.com/en-eu/help/okx-referral-program-faq-eea" },
    { label: "OKX: Affiliate FAQ (invite codes and rebates)", url: "https://www.okx.com/en-eu/help/affiliate-faq-eea" },
    { label: "OKX: New User Bonus terms and conditions (EEA)", url: "https://www.okx.com/en-eu/help/new-user-bonus-program-terms-and-conditions-eea" },
    { label: "OKX: New User Bonus FAQ (EEA)", url: "https://www.okx.com/en-eu/help/new-user-bonus-program-faq-eea" },
    { label: "OKX: New User Bonus terms and conditions (global)", url: "https://www.okx.com/en-eu/help/new-user-bonus-program-terms-and-conditions" },
    { label: "OKX: Fee schedule", url: "https://www.okx.com/en-eu/fees" },
    { label: "OKX: Trading fee rules FAQ", url: "https://www.okx.com/en-eu/help/trading-fee-rules-faq" },
    { label: "OKX: X-Perps leverage in the EEA", url: "https://www.okx.com/en-eu/help/okx-x-perps-eea-leverage-explained" },
    { label: "OKX public API: perpetual swap instruments (maximum leverage)", url: "https://www.okx.com/api/v5/public/instruments?instType=SWAP" },
    { label: "OKX: How to verify an individual account", url: "https://www.okx.com/en-eu/help/how-do-i-verify-an-individual-account" },
    { label: "OKX: Identity verification – eligibility, review time and documents", url: "https://www.okx.com/en-eu/help/individual-identity-verification-eligibility-review-time-and-supported" },
    { label: "OKX: Risk and compliance disclosure (restricted locations)", url: "https://www.okx.com/en-eu/help/risk-compliance-disclosure" },
    { label: "OKX: Terms of Service", url: "https://www.okx.com/en-eu/help/terms-of-service" },
    { label: "OKX Europe: About", url: "https://www.okx.com/en-eu/about" },
    { label: "OKX Middle East: About (VARA licence)", url: "https://www.okx.com/en-ae/about" },
    { label: "OKX: Proof of reserves", url: "https://www.okx.com/en-eu/proof-of-reserves" },
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futures & perpetual swaps"],
  bonusHeadline: "Welcome reward of up to €400 or 100 USDT",
  benefits: [
    "OKX Welcome Rewards for new users: up to €400 on OKX Europe, up to 100 USDT on the global site, unlocked through deposit and trading tasks",
    "Low standard fees: 0.08% maker / 0.10% taker on spot and 0.02% / 0.05% on futures and perpetuals",
    "A code carried by the link cannot be mistyped – OKX locks a prefilled code",
    "Monthly proof of reserves you can check against your own balance",
  ],
  benefitNote:
    "Welcome Rewards require sign-up through a designated link and completed identity verification, followed by deposit and trading tasks. On OKX Europe internal transfers do not count as deposits, zero-fee pairs and X-Perps volume do not count as trades, crypto rewards stay locked for up to 45 days and crediting can take up to 48 hours. On the global site rewards must be opened within 30 days and tasks expire 180 days after sign-up. Amounts and tasks differ by country and campaign.",
  feesUrl: "https://www.okx.com/fees",
  brandColor: "#000000",
  brandInk: "#FFFFFF",
  logo: "/logos/okx.svg",
  founded: "2017",
  headquarters: "Aux Cayes FinTech Co. Ltd. (Seychelles) for the global site; OKX Europe Limited (Malta); OKX Middle East Fintech FZE (Dubai)",
  regulation: "MiCA authorisation via OKX Europe Limited (Malta, MFSA); VARA licence in Dubai",
  users: "120M+ users (per OKX Europe)",
  assets: "270+ coins (per OKX Europe)",
  maxLeverage: "Up to 100x (global site; up to 10x on OKX Europe)",
  spotFees: { maker: "0.08%", taker: "0.10%" },
  futuresFees: { maker: "0.02%", taker: "0.05%" },
  feeNote:
    "These are the Regular-user rates; the tier above starts at 100,000 in assets or at 1,000,000 of 30-day spot volume (5,000,000 for futures), counted in EUR on OKX Europe and in USD on the global site. Expiry futures carry a 0.01% settlement fee.",
  products: ["Spot", "Perpetual swaps", "Expiry futures", "Options", "Trading bots"],
  market: { rank: 2, openInterestBn: 7.86, volume24hBn: 10.93, markets: 553 },
  tagline: "Low-fee spot and derivatives with monthly proof of reserves",
  quickAnswer:
    "The OKX referral code is T7IRGAR3. On the website it goes into the “Referral code (optional)” field on the email step of sign-up; the button on this page carries it for you. It only works during sign-up – OKX does not add invite codes retroactively. New users get OKX's Welcome Rewards: up to €400 on OKX Europe or up to 100 USDT on the global site, after identity verification and deposit and trading tasks.",
  about: [
    "OKX was founded in 2017 and is one of the largest crypto exchanges for both spot and derivatives. OKX Europe's pages speak of more than 120 million users and list over 270 coins. Regular users pay 0.08% maker and 0.10% taker on spot, 0.02% / 0.05% on futures and perpetual swaps and 0.03% on options.",
    "The product range covers spot, perpetual swaps, expiry futures, options and trading bots, but what you can use depends on where you live. On the global site the highest leverage is 100x, available on perpetuals such as BTC-USDT, ETH-USDT, SOL-USDT and XRP-USDT. On OKX Europe the perpetual product is called X-Perps and is limited to 10x, less for larger positions.",
    "OKX publishes a proof of reserves every month. The 49th report covered $33.87 billion across 21 assets; the verification of 1 November 2026 showed reserve ratios of 108% for BTC, 101% for ETH, 106% for USDT and 100% for USDC. It is built on zk-STARK and a Merkle tree, so logged-in users can check that their own balance is included. OKX Europe Limited is authorised by the Malta Financial Services Authority as a crypto-asset service provider under MiCA, and OKX Middle East Fintech FZE holds a licence from Dubai's VARA.",
  ],
  highlights: [
    { title: "Low standard fees", text: "0.08% / 0.10% on spot and 0.02% / 0.05% on futures and perpetuals." },
    { title: "Monthly proof of reserves", text: "49 reports so far, verifiable with zk-STARK and a Merkle tree." },
    { title: "MiCA-authorised in the EEA", text: "OKX Europe Limited is authorised by the Maltese regulator MFSA." },
  ],
  pros: [
    "Low standard fees on spot, futures and options",
    "Monthly, self-verifiable proof of reserves with ratios above 100%",
    "MiCA-authorised entity for EEA users and a VARA licence in Dubai",
    "Options and expiry futures alongside perpetual swaps",
  ],
  cons: [
    "A referral code cannot be added after sign-up",
    "Products depend heavily on your country – perpetuals are capped at 10x on OKX Europe",
    "Welcome rewards on OKX Europe stay locked for up to 45 days",
    "Not available in Canada, India, Japan, Hong Kong and parts of the United States",
  ],
  bestFor: ["Fee-conscious spot and futures traders", "Options traders", "EEA users who want a MiCA-authorised platform"],
  signupTip:
    "On a phone, enter your email on the invite page first and install the app through that link – if you download the app separately and sign up there, the referral code may not carry over.",
  safety:
    "OKX publishes a monthly proof of reserves – ratios of 108% for BTC, 101% for ETH, 106% for USDT and 100% for USDC at the verification of 1 November 2026 – and lets logged-in users check their own balance through “View my report”, with open-source tools and published wallet addresses. Every account must have both an email address and a phone number bound. As with any exchange, only keep trading capital on the platform.",
  restricted:
    "OKX lists as restricted locations: Afghanistan, Canada, Cuba, Hong Kong, Iran, India, Japan, Malaysia, Nepal, North Korea, Syria, Uzbekistan, the Crimea, Donetsk and Luhansk regions and certain US jurisdictions including all US territories. Partial restrictions apply in Australia, Brazil, South Korea and the United Kingdom (no derivatives) and for fiat payments in Russia. The list was last updated on 14 November 2026.",
  faqs: [
    {
      topic: "referral",
      q: "Is T7IRGAR3 a working OKX referral code?",
      a: "Yes. On 16 November 2026 the link okx.com/join/T7IRGAR3 opened OKX's own invite page for that code, with a welcome reward and a sign-up link carrying the code.",
    },
    {
      topic: "referral",
      q: "Why can't I see the referral code field on OKX?",
      a: "The field “Referral code (optional)” is collapsed on the sign-up form and has to be expanded. OKX adds that if the field is not shown at all, you should sign up through the referral link instead.",
    },
    {
      topic: "referral",
      q: "How do I use the OKX referral code in the app?",
      a: "Open the invite link on your phone and enter your email address there, then install the OKX app through that link and sign up with the same email. OKX warns that the code may not carry over if you install the app separately and register in it.",
    },
    {
      topic: "referral",
      q: "Can I get the OKX referral by deleting my account and signing up again?",
      a: "No. OKX states that deleting an account and re-registering does not restore eligibility and may be treated as a violation.",
    },
    {
      topic: "signup",
      q: "Do I need a phone number to sign up on OKX?",
      a: "Yes. OKX's registration asks for an email address first and then a phone number, each confirmed with a 6-digit code. Both must be bound, and each email address and phone number can be used for one account only.",
    },
    {
      topic: "signup",
      q: "How long is the OKX email verification code valid?",
      a: "The 6-digit code OKX sends to your email address during sign-up is valid for 10 minutes.",
    },
    {
      topic: "signup",
      q: "How long does OKX identity verification take?",
      a: "OKX says the review is completed within 24 hours after you submit your document and the selfie or facial check.",
    },
    {
      topic: "signup",
      q: "Can I use OKX without KYC?",
      a: "No. Identity verification is required to use an individual account; trading, deposits and withdrawals are only available afterwards.",
    },
    {
      topic: "bonus",
      q: "What is the OKX welcome bonus?",
      a: "New users who sign up through a referral link get OKX's Welcome Rewards (New User Bonus). At our check the invite page showed up to €400 on OKX Europe, and the global invite page showed up to 100 USDT. The rewards are unlocked by completing identity verification, deposit tasks and trading tasks, and they differ by country and campaign.",
    },
    {
      topic: "bonus",
      q: "Can I withdraw the OKX welcome reward straight away?",
      a: "No. On OKX Europe crypto rewards are locked for up to 45 days – you can trade them but not withdraw them. On the global site rewards are locked on arrival and cannot be traded or withdrawn during the lock-up.",
    },
    {
      topic: "bonus",
      q: "Which deposits and trades count for the OKX welcome tasks?",
      a: "On OKX Europe deposits of crypto or of fiat via SEPA, iDEAL or Bancontact count, internal transfers do not. Trades through Buy, Sell, Convert or the spot order book count; zero-fee pairs and X-Perps volume do not. On the global site a trading task has to be met with a single trade.",
    },
    {
      topic: "fees",
      q: "What are OKX options fees?",
      a: "Regular users pay 0.03% maker and 0.03% taker on options.",
    },
    {
      topic: "fees",
      q: "What is the maximum leverage on OKX?",
      a: "100x on the global site, on perpetual swaps such as BTC-USDT, ETH-USDT, SOL-USDT and XRP-USDT, and lower for larger positions. On OKX Europe, X-Perps are limited to 10x. High leverage sharply increases the risk of liquidation.",
    },
    {
      topic: "fees",
      q: "How do I get lower fees on OKX?",
      a: "OKX's fee tiers depend on your asset balance or your 30-day trading volume. The Regular tier ends at 100,000 in assets, or at 1,000,000 of 30-day volume on spot and 5,000,000 on futures; above that, VIP rates apply.",
    },
    {
      topic: "safety",
      q: "Is OKX regulated in Europe?",
      a: "Yes. OKX Europe Limited is authorised by the Malta Financial Services Authority as a crypto-asset service provider under MiCA and serves EEA customers through okx.com/en-eu.",
    },
    {
      topic: "safety",
      q: "Is OKX available in the US?",
      a: "Only to a limited extent: OKX lists certain US jurisdictions and all US territories as restricted locations. Canada, India, Japan and Hong Kong are fully restricted.",
    },
    {
      topic: "safety",
      q: "Does OKX publish proof of reserves?",
      a: "Yes, every month. The 49th report covered $33.87 billion across 21 assets, and the verification of 1 November 2026 showed 108% for BTC, 101% for ETH, 106% for USDT and 100% for USDC.",
    },
  ],
};
