import type { Exchange } from "../types";

/** Facts checked against bybit.com on 2026-11-16 (global site, logged out; bybit.eu is a separate platform with its own rules). */
export const bybit: Exchange = {
  slug: "bybit",
  name: "Bybit",
  homepage: "https://www.bybit.com/",
  affiliateUrl: "https://www.bybit.com/invite?ref=VN3KGLE&medium=referral&utm_campaign=evergreen&share_to=link",
  referralCode: "VN3KGLE",
  referral: {
    codeName: "Referral Code",
    whereShort: "“Referral Code (Optional)” field on the sign-up form",
    apply:
      "Enter it in the “Referral Code (Optional)” field of the sign-up form, or open the sign-up link on this page, which fills the field in for you.",
    whereToEnter:
      "Bybit's sign-up form has a field labelled “Referral Code (Optional)”. On the website you reach it after entering your email address or phone number, in the app one step later – in both cases before you tap “Sign Up Now”. The link on this page opens Bybit's invite page with VN3KGLE already in that field; the field stays editable, so check that the code is still there before you submit.",
    afterSignupShort: "No – only during registration",
    afterSignup:
      "No. Bybit's registration guide states that after signing up you will not be able to add, modify or delete your referral or affiliate code. The only exception Bybit documents concerns affiliate codes, which can be added within 14 days on a main account that has no code yet; Bybit says explicitly that Referral Program codes such as VN3KGLE are not supported there.",
    inviteeReward:
      "Under Bybit's referral programme the invited user can earn up to 250 USDT: 50 USDT for a first trade of at least $50 within 14 days of registration, 100 USDT for at least $500 of cumulative trading volume within 30 days after that first trade, and another 100 USDT for at least $10,000 in the same 30 days. Bybit's invite page additionally advertises referee rewards for signing up and completing Identity Verification, and new users get the 100 USDT Welcome Gifts in the Rewards Hub.",
    guide: [
      "Bybit's referral programme rewards both sides with the same amounts, which is why Bybit advertises it as “up to 500 USDT combined”. As the invited user you unlock your part in three stages tied to your own trading: a first trade of at least $50 within 14 days of registration, then $500 and $10,000 of cumulative volume within the 30 days that follow. Volume from spot, derivatives and options counts; trades in zero-fee pairs do not.",
      "Every reward goes through a 3-day risk review and then has to be claimed within 10 days, otherwise it expires. Bybit caps the programme with a monthly pool of 500,000 USDT that is paid out first come, first served. These terms apply to accounts registered on the global site on or after 10 October 2026.",
      "Where you live decides whether the code does anything. Bybit's referral terms state that there is no referral programme in Germany, the United Kingdom, France, Belgium and Hong Kong, and that the programme is not open to EEA residents invited within the EEA. EEA residents use Bybit EU (bybit.eu), a separate platform run by Bybit EU GmbH in Vienna with its own, smaller referral offer.",
    ],
  },
  signup: {
    methods: ["an email address", "a phone number", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Open the Bybit sign-up page",
        text: "Use the sign-up button on this page. It opens Bybit's invite page with the referral code VN3KGLE already filled in.",
      },
      {
        title: "Select your country of residence",
        text: "Bybit asks for it first because products and rewards depend on where you live.",
      },
      {
        title: "Enter your email address or phone number",
        text: "Or continue with Google, Apple or Telegram.",
      },
      {
        title: "Check the referral code",
        text: "The field “Referral Code (Optional)” should show VN3KGLE. This is your only chance – Bybit does not let you add or change the code later.",
      },
      {
        title: "Enter the verification code and set a password",
        text: "Confirm the code Bybit sends you, choose a password and tap “Sign Up Now”. In the app (version 4.47.0 or later) you can also set up a passkey.",
      },
      {
        title: "Complete Identity Verification",
        text: "Bybit requires the Standard verification level before you can deposit or trade.",
      },
    ],
    kycShort: "Mandatory for all products (Standard level)",
    kyc: "Yes. Bybit requires at least Standard Identity Verification for all products. Without it an account cannot deposit or trade and can only withdraw – up to 20,000 USDT a day and 100,000 USDT a month. Standard verification (an ID document plus an identity assessment) raises the daily withdrawal limit to 1 million USDT, Advanced verification with a proof of address to 2 million USDT.",
    documents:
      "Bybit accepts a passport, an identity card, a residence permit or a driving licence. Only physical documents are accepted, and the Advanced level additionally needs a proof of address.",
    minAge: "18 years",
  },
  welcomeTasks: [
    { task: "Referral: first trade of at least $50 within 14 days of registration", reward: "50 USDT" },
    { task: "Referral: at least $500 cumulative trading volume within 30 days after the first trade", reward: "100 USDT" },
    { task: "Referral: at least $10,000 cumulative trading volume within the same 30 days", reward: "100 USDT" },
    { task: "Welcome Gifts: complete Identity Verification", reward: "20 USDT Fee Saver (Derivatives)" },
    { task: "Welcome Gifts: deposit at least $10", reward: "30 USDT Position Airdrop (Derivatives)" },
    { task: "Welcome Gifts: trade at least $10", reward: "50 USDT Fee Saver (Derivatives)" },
  ],
  tokenDiscount:
    "Paying fees in MNT takes 25% off spot fees (0.075% for VIP 0) and 10% off futures fees (0.018% maker / 0.0495% taker). The discount does not apply to inverse contracts, trading bots, copy-trading followers or API trading.",
  extraFees: [{ market: "Options", maker: "0.02%", taker: "0.03%" }],
  sources: [
    { label: "Bybit: How to register an account", url: "https://www.bybit.com/en/help-center/article/How-to-register-an-account" },
    { label: "Bybit: Referral Program – general FAQ", url: "https://www.bybit.com/en/help-center/article/Bybit-Referral-Program-General-FAQ" },
    { label: "Bybit: Referral programme page and terms", url: "https://www.bybit.com/en/referral/" },
    { label: "Bybit: How to add and check a registered affiliate code", url: "https://www.bybit.com/en/help-center/article/How-to-Add-and-Check-Registered-Affiliate-Code" },
    { label: "Bybit: Rewards Hub (Welcome Gifts)", url: "https://www.bybit.com/en/task-center/rewards_hub" },
    { label: "Bybit: Rewards Hub FAQ", url: "https://www.bybit.com/en/help-center/article/FAQ-Rewards-Hub" },
    { label: "Bybit: Trading fee structure", url: "https://www.bybit.com/en/help-center/article/Trading-Fee-Structure" },
    { label: "Bybit: Paying trading fees with MNT", url: "https://www.bybit.com/en/help-center/article/FAQ-Paying-Trading-Fees-with-MNT" },
    { label: "Bybit: Margin parameters (leverage tiers)", url: "https://www.bybit.com/en/announcement-info/margin-parameters/" },
    { label: "Bybit: Individual KYC FAQ", url: "https://www.bybit.com/en/help-center/article/Individual-KYC-FAQ" },
    { label: "Bybit: Benefits of different KYC levels", url: "https://www.bybit.com/en/help-center/article/Benefits-of-Different-KYC-Levels" },
    { label: "Bybit: Service-restricted countries", url: "https://www.bybit.com/en/help-center/article/Service-Restricted-Countries" },
    { label: "Bybit: About us", url: "https://www.bybit.com/en/global-about-us" },
    { label: "Bybit: Proof of reserves", url: "https://www.bybit.com/en/app/user/proof-of-reserve" },
    { label: "Bybit: Security incident timeline (February 2025)", url: "https://www.bybit.com/en/learn/this-week-in-bybit/bybit-security-incident-timeline" },
    { label: "Bybit: Bybit Europe and MiCAR", url: "https://www.bybit.com/en/learn/regulations/bybit-europe-eu-and-micar" },
    { label: "Bybit EU: Referral programme", url: "https://www.bybit.eu/en-EU/referral/" },
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Derivatives", "Options"],
  bonusHeadline: "Up to 250 USDT in referral rewards",
  benefits: [
    "Up to 250 USDT for the invited user: 50 USDT after a first trade of $50+ within 14 days, plus 100 USDT each at $500 and $10,000 of volume",
    "100 USDT Welcome Gifts in the Rewards Hub for verifying, depositing $10 and trading $10",
    "One referral code for the whole account – spot, derivatives and options volume all count",
    "25% off spot fees and 10% off futures fees when you pay fees in MNT",
  ],
  benefitNote:
    "Referral rewards apply to accounts registered on Bybit's global site on or after 10 October 2026, pass a 3-day risk review, must be claimed within 10 days and come from a monthly pool of 500,000 USDT (first come, first served). Bybit runs no referral programme in Germany, the United Kingdom, France, Belgium and Hong Kong and does not open it to EEA residents invited within the EEA. Welcome Gifts require Identity Verification Lv. 1, vary by user and region, expire and cannot be withdrawn.",
  feesUrl: "https://www.bybit.com/en/help-center/article/Trading-Fee-Structure",
  brandColor: "#F7A600",
  brandInk: "#17181E",
  logo: "/logos/bybit.svg",
  founded: "2018",
  headquarters: "Dubai, UAE",
  regulation: "MiCAR authorisation via Bybit EU GmbH, Vienna (supervised by the Austrian FMA) for the EEA except Malta",
  users: "90M+ users (per Bybit)",
  assets: "390 coins, 509 spot pairs (Bybit API)",
  maxLeverage: "Up to 150x (BTCUSDT perpetual)",
  spotFees: { maker: "0.10%", taker: "0.10%" },
  futuresFees: { maker: "0.02%", taker: "0.055%" },
  feeNote:
    "Rates fall with the VIP level – Supreme VIP pays 0% maker on derivatives – and can differ by region; the “My Fee Rate” page in your account is authoritative.",
  products: ["USDT & USDC perpetuals", "Inverse contracts", "Options", "Spot", "Copy trading", "Trading bots", "Unified trading account"],
  market: { rank: 3, openInterestBn: 6.62, volume24hBn: 6.77, markets: 792 },
  tagline: "Fast, derivatives-first trading engine",
  quickAnswer:
    "The Bybit referral code is VN3KGLE. Enter it in the “Referral Code (Optional)” field when you sign up – the button on this page fills it in for you. It has to be there at registration: Bybit does not let you add or change a referral code afterwards. Invited users can earn up to 250 USDT in three trading stages, starting with 50 USDT for a first trade of $50 within 14 days.",
  about: [
    "Bybit launched in 2018 as a derivatives exchange and moved its headquarters to Dubai in 2023. It now reports more than 90 million users in over 181 countries and describes itself as the world's second-largest exchange by trading volume. The platform still feels built for active traders: fast order entry, a unified trading account and a polished mobile app.",
    "Besides USDT and USDC perpetuals, Bybit offers inverse contracts, options, spot, copy trading and trading bots. Standard users pay 0.02% maker and 0.055% taker on perpetuals and futures and 0.1% on spot. Leverage goes up to 150x on the BTCUSDT perpetual in the lowest risk tier and falls as the position grows. European customers are served by Bybit EU GmbH in Vienna, which is supervised by the Austrian FMA under MiCAR and covers the EEA except Malta.",
    "On 21 February 2025 attackers took about $1.46 billion from one of Bybit's Ethereum cold wallets – the largest hack in crypto history. Bybit kept withdrawals open, replaced the missing ETH through bridge loans, large deposits and OTC purchases, and a proof-of-reserves audit by Hacken on 24 February showed the gap closed within 72 hours. According to Bybit, client assets remained backed 1:1 throughout.",
  ],
  highlights: [
    { title: "Derivatives DNA", text: "Built for futures traders from day one, with a fast matching engine." },
    { title: "Up to 250 USDT", text: "Referral rewards in three stages, tied to your own trading volume." },
    { title: "Gap closed in 72 hours", text: "After the 2025 hack Bybit kept withdrawals open and restored reserves." },
  ],
  pros: [
    "Fast, stable engine and top-tier mobile app",
    "Wide range of perpetual, inverse and options contracts",
    "Clear referral rewards of up to 250 USDT for the invited user",
    "Proof of reserves with a Merkle-tree self-check",
  ],
  cons: [
    "Major security incident in February 2025 ($1.46 billion taken from an Ethereum cold wallet)",
    "A referral code cannot be added or changed after registration",
    "No referral programme for EEA residents and for Germany, the UK, France, Belgium and Hong Kong",
    "Not available in the US, Canada, Singapore, Hong Kong and mainland China",
  ],
  bestFor: ["Active perpetual futures traders", "Mobile-first traders", "Users who want copy trading with derivatives"],
  signupTip:
    "Check the “Referral Code (Optional)” field before you tap “Sign Up Now” – it cannot be corrected later. Then make your first trade of at least $50 within 14 days to unlock the first 50 USDT.",
  safety:
    "Bybit keeps client assets in multi-signature cold wallets and publishes a proof of reserves that it says shows 1:1 backing; the latest snapshot at our check dated from 27 October 2026, and you can verify your own balance with a Merkle-tree check and an open-source tool. For your account Bybit offers Google Authenticator and an anti-phishing code. The February 2025 hack shows that even large exchanges can be breached – keep only trading capital on the platform.",
  restricted:
    "Bybit lists as service-restricted: the United States, mainland China, Hong Kong, Singapore, Canada, North Korea, Cuba, Iran, Uzbekistan, Sudan, Syria, and Crimea, Sevastopol and the non-government-controlled parts of Donetsk, Luhansk, Kherson and Zaporizhzhia. In the United Kingdom Bybit accepts no new registrations, and since 21 October 2026 UK accounts are limited to withdrawals.",
  faqs: [
    {
      topic: "referral",
      q: "Is VN3KGLE a working Bybit referral code?",
      a: "Yes. On 16 November 2026 the link on this page opened Bybit's invite page with VN3KGLE prefilled in the “Referral Code (Optional)” field.",
    },
    {
      topic: "referral",
      q: "Is a Bybit referral code the same as an affiliate code?",
      a: "No. Bybit treats them differently: an affiliate code can be added within 14 days of registration on a main account that has no code yet, while Referral Program codes such as VN3KGLE cannot be added after sign-up at all.",
    },
    {
      topic: "referral",
      q: "Does the Bybit referral code work in the EU?",
      a: "No. Bybit's referral terms state that the programme is not open to EEA residents invited within the EEA and that there is no referral programme in Germany, France and Belgium. EEA residents use Bybit EU (bybit.eu), which runs its own referral offer.",
    },
    {
      topic: "referral",
      q: "Which trades count towards the Bybit referral rewards?",
      a: "Trading volume from spot, derivatives and options counts, and Bybit also names Alpha, Convert and a few newer products. Trades in zero-fee pairs are excluded.",
    },
    {
      topic: "signup",
      q: "Can I sign up to Bybit with Google, Apple or Telegram?",
      a: "Yes. Bybit's registration offers Google, Apple and Telegram in addition to an email address or phone number. In the app (version 4.47.0 or later) you can also create a passkey.",
    },
    {
      topic: "signup",
      q: "Can I use Bybit without KYC?",
      a: "Not for trading. Without Identity Verification a Bybit account cannot deposit or trade; it can only withdraw, up to 20,000 USDT a day and 100,000 USDT a month.",
    },
    {
      topic: "signup",
      q: "What are the Bybit KYC levels and withdrawal limits?",
      a: "Standard verification (ID document plus identity assessment) allows withdrawals of up to 1 million USDT a day. Advanced verification, which adds a proof of address, raises the limit to 2 million USDT a day. A Pro level with enhanced due diligence exists for higher limits.",
    },
    {
      topic: "bonus",
      q: "How much is the Bybit referral bonus for new users?",
      a: "Up to 250 USDT for the invited user: 50 USDT for a first trade of at least $50 within 14 days of registration, 100 USDT for $500 of cumulative volume within 30 days after that trade and 100 USDT for $10,000 in the same period. The referrer receives the same amounts, which is why Bybit advertises up to 500 USDT combined.",
    },
    {
      topic: "bonus",
      q: "What are the Bybit Welcome Gifts?",
      a: "Bybit's Rewards Hub lists 100 USDT in Welcome Gifts: a 20 USDT Fee Saver for completing Identity Verification, a 30 USDT Position Airdrop for a deposit of at least $10 and a 50 USDT Fee Saver for a trade of at least $10 – all for derivatives. Tasks vary by user and region.",
    },
    {
      topic: "bonus",
      q: "Do I have to claim Bybit referral rewards?",
      a: "Yes. Each reward first goes through a 3-day risk review and then has to be claimed within 10 days, otherwise it expires. Rewards come from a monthly pool of 500,000 USDT and are paid first come, first served.",
    },
    {
      topic: "bonus",
      q: "Can I withdraw Bybit Welcome Gifts?",
      a: "No. Bybit states that Rewards Hub rewards expire and are not withdrawable. Fee Savers offset trading fees and Position Airdrops are used as margin in derivatives trading.",
    },
    {
      topic: "fees",
      q: "What are Bybit futures fees?",
      a: "VIP 0 users pay 0.02% maker and 0.055% taker on perpetual and futures contracts, 0.1% on spot and 0.02% maker / 0.03% taker on options. Paying in MNT lowers futures fees by 10% to 0.018% / 0.0495%.",
    },
    {
      topic: "fees",
      q: "What is the maximum leverage on Bybit?",
      a: "Up to 150x on the BTCUSDT perpetual in the first risk tier (positions up to 300,000 USDT); the maximum drops to 100x in the next tier and further as the position grows. High leverage sharply increases the risk of liquidation.",
    },
    {
      topic: "fees",
      q: "How much is the Bybit MNT fee discount?",
      a: "Paying fees in MNT gives 25% off spot fees and 10% off futures fees. It does not apply to inverse contracts, trading bots, copy-trading followers or API trading.",
    },
    {
      topic: "safety",
      q: "Was Bybit hacked?",
      a: "Yes. On 21 February 2025 about $1.46 billion was taken from one Ethereum cold wallet. Bybit did not halt withdrawals, sourced replacement ETH through bridge loans, large deposits and OTC purchases, and a Hacken proof-of-reserves audit on 24 February showed the gap closed within 72 hours.",
    },
    {
      topic: "safety",
      q: "Is Bybit available in the UK?",
      a: "No. Bybit accepts no new registrations from the United Kingdom, and since 21 October 2026 accounts with UK residency are limited to withdrawals.",
    },
    {
      topic: "safety",
      q: "Is Bybit available in Europe?",
      a: "EEA residents are served by Bybit EU GmbH in Vienna, which is supervised by the Austrian Financial Market Authority under MiCAR and covers the EEA except Malta. It is a separate platform with its own fees and product range.",
    },
  ],
};
