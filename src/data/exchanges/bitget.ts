import type { Exchange } from "../types";

/** Facts checked against bitget.com on 2026-11-16 (global site, operator named in the Terms: BTG Technology Holdings Limited). */
export const bitget: Exchange = {
  slug: "bitget",
  name: "Bitget",
  homepage: "https://www.bitget.com/",
  affiliateUrl: "https://share.bitget.com/u/19MAJ6SK?clacCode=JZVEV1M3",
  referralCode: "JZVEV1M3",
  referral: {
    codeName: "Referral code",
    whereShort: "“Referral code” field on the sign-up form (optional)",
    apply:
      "Enter it in the “Referral code” field of the sign-up form, or open the sign-up link on this page, which fills the field in and locks it.",
    whereToEnter:
      "Bitget's sign-up form has an optional field labelled “Referral code”. On the website it comes right after your email address or mobile number, before you set the password; in the app it comes after the password, before you tap “Create account”. The link on this page opens Bitget's referral sign-up page with JZVEV1M3 already entered and the field locked.",
    afterSignupShort: "No – only during registration (exceptions only through support)",
    afterSignup:
      "Not by yourself. Bitget's Help Centre states that referral codes must be entered during registration and cannot be added or changed after your account is created. According to the same Help Centre answer, the only route is a support ticket with your UID, the code and proof that the invitation was sent before you registered – with no guaranteed outcome. Bitget publishes no time window for this.",
    inviteeReward:
      "Bitget's public Referral Program rewards the invited user with BTC airdrops and Mystery Boxes: a BTC airdrop worth $9 plus a Mystery Box of up to 500 USDT for a net deposit of at least 200 USDT within 15 days and a qualifying first trade, and a further $18 in BTC plus a Mystery Box of up to 1,000 USDT once your total trading volume passes 100,000 USDT. These rewards require the inviter to be enrolled in the promotion and are not paid if either side holds an affiliate, market-maker or broker account, so the amounts shown in your account after sign-up are the ones that apply. Independently of the code, new users get Bitget's welcome package of up to 6,200 USDT.",
    guide: [
      "A Bitget referral code ties your new account to the inviter. Bitget counts almost everything you trade towards the programme: spot trading including copy trading and margin, futures, stock perps, commodity perps, spot stocks and CFDs.",
      "The first reward stage needs a net deposit of at least 200 USDT within 15 days of registration and, on the day of your first trade, at least 1,000 USDT of spot volume, 4,000 USDT of futures volume or 100,000 USDT of CFD volume. A Mystery Box can contain USDT, futures trading bonuses, futures position boost vouchers, Earn APR vouchers or spot fee rebate vouchers and has to be claimed within 30 days of being credited.",
      "Bitget does not list a fee discount for invited users. What lowers your costs on Bitget is the BGB token: paying spot or margin fees in BGB gives 20% off.",
    ],
  },
  signup: {
    methods: ["an email address", "a mobile number", "Google", "Telegram", "a crypto wallet"],
    steps: [
      {
        title: "Open the Bitget sign-up page",
        text: "Use the sign-up button on this page. Bitget opens its referral registration page with the code JZVEV1M3 already entered and locked.",
      },
      {
        title: "Enter your email address or mobile number",
        text: "Bitget's registration guide also lists sign-up with Google, Telegram or a wallet.",
      },
      {
        title: "Check the referral code and accept the terms",
        text: "The “Referral code” field should show JZVEV1M3. Agree to the terms and click “Next”.",
      },
      {
        title: "Set a password",
        text: "Between 8 and 32 characters.",
      },
      {
        title: "Pass the captcha and enter the 6-digit code",
        text: "Complete the security check and type in the 6-digit code Bitget sends to your email or phone. No documents are needed to register.",
      },
      {
        title: "Verify your identity",
        text: "Complete Level 1 verification with an ID document and a face check – without it you cannot deposit, trade or withdraw.",
      },
    ],
    kycShort: "Mandatory for all users",
    kyc: "Yes. Bitget states that all new users must complete identity verification immediately upon signing up; the rule has applied since 1 September 2023. Without it you are unable to deposit, trade or withdraw funds, including on-chain withdrawals and internal transfers. Level 1 consists of an ID document and face verification; a proof of address is only needed if Bitget asks for it. After verification the standard withdrawal limit is 3 million USDT per 24 hours.",
    documents: "A government-issued ID card, passport, driver's licence or residence permit, plus face verification.",
    minAge: "18 years",
  },
  welcomeTasks: [
    { task: "Welcome pack: check in for three days", reward: "200 USDT BTC USDT-M futures position boost voucher" },
    { task: "Challenge: net deposit of at least 1,000 USDT, 100 USDT spot volume and 300,000 USDT futures volume", reward: "50 USDT" },
    { task: "Challenge: net deposit of at least 20,000 USDT, 10,000 USDT spot volume and 2,000,000 USDT futures volume", reward: "400 USDT" },
    { task: "Challenge: net deposit of at least 100,000 USDT, 100,000 USDT spot volume and 80,000,000 USDT futures volume", reward: "6,000 USDT" },
    { task: "Referral: net deposit of at least 200 USDT within 15 days plus a qualifying first trade", reward: "BTC airdrop worth $9 and a Mystery Box (up to 500 USDT)" },
    { task: "Referral: total trading volume above 100,000 USDT", reward: "$18 in BTC and a Mystery Box (up to 1,000 USDT)" },
  ],
  tokenDiscount:
    "Paying spot or margin fees in BGB gives a 20% discount – 0.08% instead of 0.1% for standard users. Bitget's fee table shows no BGB discount for futures.",
  extraFees: [
    { market: "Coin-M futures", maker: "0.02%", taker: "0.06%" },
    { market: "USDC-M futures", maker: "0.02%", taker: "0.06%" },
  ],
  sources: [
    { label: "Bitget: How to register (website)", url: "https://www.bitget.com/support/articles/12560603808241" },
    { label: "Bitget: How to register (app)", url: "https://www.bitget.com/support/articles/12560603808267" },
    { label: "Bitget: Referral Program and rules", url: "https://www.bitget.com/events/referral" },
    { label: "Bitget Help Centre: adding a referral code after registration", url: "https://www.bitget.com/support/search?query=add%20referral%20code" },
    { label: "Bitget: New-user rewards (welcome package)", url: "https://www.bitget.com/events/rewards" },
    { label: "Bitget: Trading bonus rules", url: "https://www.bitget.com/support/articles/12560603821848" },
    { label: "Bitget: Fee schedule", url: "https://www.bitget.com/fee" },
    { label: "Bitget: Using BGB to pay trading fees", url: "https://www.bitget.com/support/articles/12560603820584" },
    { label: "Bitget: Identity verification (KYC)", url: "https://www.bitget.com/events/kyc" },
    { label: "Bitget: Withdrawal limits", url: "https://www.bitget.com/support/articles/12560603808893" },
    { label: "Bitget: Terms of Use (prohibited countries)", url: "https://www.bitget.com/support/articles/360014944032-terms-of-use" },
    { label: "Bitget: About us", url: "https://www.bitget.com/promotion/aboutus" },
    { label: "Bitget: Regulatory licences", url: "https://www.bitget.com/promotion/regulatory-license" },
    { label: "Bitget: Proof of reserves", url: "https://www.bitget.com/promotion/proof-of-reserves" },
    { label: "Bitget: Protection Fund", url: "https://www.bitget.com/promotion/protection-fund" },
    { label: "Bitget: Copy trading for followers", url: "https://www.bitget.com/support/articles/12560603826748" },
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures", "Copy trading", "Stock perps & CFDs"],
  bonusHeadline: "Welcome package of up to 6,200 USDT",
  benefits: [
    "New-user rewards of up to 6,200 USDT, starting with a 200 USDT futures position boost voucher for checking in three days",
    "Referral Program rewards for the invited user: BTC airdrops and Mystery Boxes of up to 500 and 1,000 USDT",
    "One referral counts spot, margin, futures, copy trading, stock perps and CFDs",
    "20% off spot and margin fees when you pay them in BGB",
  ],
  benefitNote:
    "The 6,200 USDT figure is a maximum: 200 USDT comes as a futures position boost voucher and the rest from a deposit and trading challenge in which only the highest tier you reach is paid, so the top reward needs a net deposit of 100,000 USDT and 80 million USDT of futures volume. Requirements must be met within seven days; only taker orders count for futures, and copy, API and bot trades are excluded. Rewards are claimed manually and trading bonuses cannot be withdrawn as cash. Referral rewards depend on the inviter being enrolled in Bitget's promotion and are not paid to or through affiliate accounts.",
  feesUrl: "https://www.bitget.com/fee",
  brandColor: "#00C2D1",
  brandInk: "#0B1B24",
  logo: "/logos/bitget.svg",
  founded: "2018",
  headquarters: "Not stated by Bitget (operator named in the Terms: BTG Technology Holdings Limited)",
  regulation: "Registrations or licences in Australia (AUSTRAC), El Salvador (BSP, DASP), Argentina (VASP), South Africa, Mexico, Mauritius and Georgia",
  users: "150M registered users (per Bitget)",
  assets: "600+ spot trading pairs, 200+ futures pairs",
  maxLeverage: "Up to 150x (BTC and ETH futures)",
  spotFees: { maker: "0.10%", taker: "0.10%" },
  futuresFees: { maker: "0.02%", taker: "0.06%" },
  feeNote: "Higher VIP levels pay less.",
  products: ["USDT-M, Coin-M & USDC-M futures", "Spot", "Margin", "Copy trading", "Trading bots", "Tokenized stocks & CFDs", "Earn", "Bitget Wallet"],
  market: { rank: 5, openInterestBn: 4.26, volume24hBn: 3.45, markets: 739 },
  tagline: "The home of crypto copy trading",
  quickAnswer:
    "The Bitget referral code is JZVEV1M3. Enter it in the “Referral code” field when you sign up – the button on this page fills it in and locks it. It has to be entered during registration: Bitget's Help Centre says codes cannot be added or changed afterwards, except through a support ticket. New users can claim a welcome package of up to 6,200 USDT, starting with a 200 USDT futures voucher for checking in three days.",
  about: [
    "Bitget was founded in 2018 and reports 150 million registered users and more than 20 billion USDT in daily trading volume. It made its name with copy trading and calls itself the largest crypto copy-trading platform: followers pick a lead trader, set an amount from 50 USDT and Bitget mirrors that trader's positions automatically, with the lead trader receiving a share of the follower's profits.",
    "The platform lists over 600 spot trading pairs and more than 200 futures pairs, with leverage of up to 150x on BTC and ETH and up to 10x on margin. Standard users pay 0.1% on spot – 0.08% with BGB – and 0.02% maker / 0.06% taker on USDT-M, Coin-M and USDC-M futures. Trading bots, Earn products, tokenized stocks, CFDs and the self-custody Bitget Wallet complete the offer.",
    "Bitget publishes a Merkle-tree proof of reserves every month; the snapshot of 12 November 2026 showed a total reserve ratio of 124%, with 127% for BTC, 114% for USDT and 103% for ETH. Its Protection Fund is valued at $274 million and is meant to cover losses from platform-wide events that are not the user's fault. Bitget lists registrations or licences in Australia, El Salvador, Argentina, South Africa, Mexico, Mauritius and Georgia, and its Terms of Use exclude a long list of countries, including the United States, Canada, Germany, France and Austria.",
  ],
  highlights: [
    { title: "Copy trading leader", text: "Follow lead traders from 50 USDT and mirror their positions automatically." },
    { title: "$274M Protection Fund", text: "A dedicated fund for losses from platform-wide events." },
    { title: "Reserves at 124%", text: "Monthly Merkle-tree proof of reserves, latest snapshot 12 November 2026." },
  ],
  pros: [
    "Copy trading for futures and spot from 50 USDT",
    "Monthly proof of reserves at 124% and a $274 million Protection Fund",
    "Standard futures fees of 0.02% maker / 0.06% taker and 20% off spot fees with BGB",
    "The referral link fills in the code and locks it, so it cannot be mistyped",
  ],
  cons: [
    "A referral code cannot be added after registration, except through a support ticket",
    "Not available in the United States, Canada, Germany, France, Austria, Japan and Singapore",
    "The top welcome reward needs a very large deposit and trading volume",
    "Copy trading can create a false sense of safety – past results do not guarantee future returns",
  ],
  bestFor: ["Traders who want to copy experienced futures traders", "Altcoin futures traders", "Users who also want exposure to stocks via crypto"],
  signupTip:
    "Verify your identity straight after registering – Bitget does not allow deposits, trades or withdrawals without it – and check in on three days to collect the 200 USDT futures position boost voucher.",
  safety:
    "Bitget publishes a monthly Merkle-tree proof of reserves – 124% in total at the snapshot of 12 November 2026 – and keeps a Protection Fund valued at $274 million; claims on the fund are assessed by Bitget. Set up two-factor authentication when you register. Copy-trading results are past performance and do not guarantee future returns.",
  restricted:
    "Bitget's Terms of Use (last updated 4 November 2026) list as prohibited countries, among others: Austria, Belarus, Canada, Cuba, France, Germany, Hong Kong, Iran, Japan, Kazakhstan, Malaysia, North Korea, Russia, Singapore, Sudan, Thailand, the United Arab Emirates and the United States including its territories. Bitget's verification page additionally names India, Italy and Spain. Using a VPN to get around the restriction is forbidden.",
  faqs: [
    {
      topic: "referral",
      q: "Is JZVEV1M3 a working Bitget referral code?",
      a: "Yes. On 16 November 2026 the link on this page opened Bitget's referral sign-up page with JZVEV1M3 prefilled and locked in the referral code field.",
    },
    {
      topic: "referral",
      q: "Why does the Bitget sign-up link open on a different domain or language?",
      a: "Bitget's share links redirect through several of its own domains – at our check the same link opened once on bitget.com and once on bitget.site – and may open in the language the link was created in. The referral code JZVEV1M3 was filled in each time.",
    },
    {
      topic: "referral",
      q: "Which trades count towards the Bitget Referral Program?",
      a: "Spot trading including copy trading and margin, futures trading, stock perps, commodity perps, spot stock trading and CFD trading.",
    },
    {
      topic: "referral",
      q: "What is a Bitget Mystery Box?",
      a: "A reward from Bitget's Referral Program. It can contain USDT, futures trading bonuses, futures position boost vouchers, Earn APR vouchers or spot fee rebate vouchers, and it must be claimed within 30 days of being credited.",
    },
    {
      topic: "signup",
      q: "Do I need documents to register on Bitget?",
      a: "Not to create the account – Bitget's guide says no documents are needed to register. You do need an ID document and a face check for the identity verification that follows, and without it you cannot deposit, trade or withdraw.",
    },
    {
      topic: "signup",
      q: "What are the Bitget password requirements?",
      a: "A Bitget password has to be between 8 and 32 characters long.",
    },
    {
      topic: "signup",
      q: "Can I sign up to Bitget with Google or Telegram?",
      a: "Yes. Bitget's registration guide says you can also register directly using Google, Telegram or a wallet, in addition to an email address or mobile number.",
    },
    {
      topic: "signup",
      q: "Can I use Bitget without KYC?",
      a: "No. Since 1 September 2023 all new users must complete identity verification immediately after signing up; without it Bitget does not allow deposits, trades or withdrawals.",
    },
    {
      topic: "bonus",
      q: "What is the Bitget welcome bonus?",
      a: "Bitget advertises up to 6,200 USDT in new-user rewards. It consists of a 200 USDT BTC USDT-M futures position boost voucher for checking in on three days and a deposit and trading challenge worth 50, 400 or 6,000 USDT, of which only the highest tier you reach is paid.",
    },
    {
      topic: "bonus",
      q: "What do I have to do for the Bitget 6,000 USDT reward?",
      a: "Within seven days: a net deposit of at least 100,000 USDT, 100,000 USDT of spot volume and 80,000,000 USDT of futures volume. The 50 USDT tier needs 1,000 USDT deposited, 100 USDT of spot volume and 300,000 USDT of futures volume. For futures only taker orders count, and copy, API and bot trades are excluded.",
    },
    {
      topic: "bonus",
      q: "Can I withdraw Bitget trading bonuses?",
      a: "No. Bitget states that trading bonuses are non-withdrawable and cannot be taken out as cash. Withdrawing funds within three days after the challenge period also forfeits the challenge reward.",
    },
    {
      topic: "fees",
      q: "What are Bitget futures fees?",
      a: "Standard users pay 0.02% maker and 0.06% taker on USDT-M, Coin-M and USDC-M futures.",
    },
    {
      topic: "fees",
      q: "How much is the Bitget BGB fee discount?",
      a: "20% on spot and margin fees, which brings the standard spot rate from 0.1% down to 0.08%. Bitget's fee table shows no BGB discount for futures.",
    },
    {
      topic: "fees",
      q: "What is the maximum leverage on Bitget?",
      a: "Up to 150x on BTC and ETH futures; the maximum varies by coin. Margin trading goes up to 10x. High leverage sharply increases the risk of liquidation.",
    },
    {
      topic: "fees",
      q: "How does Bitget copy trading work and what does it cost?",
      a: "You choose a lead trader, set your amount – the minimum is 50 USDT – and Bitget mirrors the trader's positions in your account. The lead trader receives a share of your profits; Bitget's own help pages give different ranges for that share, so check the rate shown on the trader's profile before you follow.",
    },
    {
      topic: "safety",
      q: "What is the Bitget Protection Fund?",
      a: "A fund Bitget keeps to cover user losses from platform-wide events that are not caused by the user's own actions. Bitget values it at $274 million, held as 4,204.71 BTC, and assesses claims itself.",
    },
    {
      topic: "safety",
      q: "Is Bitget available in the US or in Germany?",
      a: "No. The United States, Germany, France, Austria, Canada, Japan and Singapore are all on the list of prohibited countries in Bitget's Terms of Use.",
    },
    {
      topic: "safety",
      q: "Does Bitget publish proof of reserves?",
      a: "Yes, every month, as a Merkle-tree proof. The snapshot of 12 November 2026 showed a total reserve ratio of 124%: 127% for BTC, 114% for USDT and 103% for ETH.",
    },
  ],
};
