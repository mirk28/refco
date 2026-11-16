import type { Exchange } from "../types";

/** Facts checked against kucoin.com on 2026-11-16 (KuCoin Global, English; KuCoin EU is a separate entity). */
export const kucoin: Exchange = {
  slug: "kucoin",
  name: "KuCoin",
  homepage: "https://www.kucoin.com/",
  affiliateUrl: "https://www.kucoin.com/r/rf/QBSS4BT7",
  referralCode: "QBSS4BT7",
  referral: {
    codeName: "Referral Code",
    whereShort: "“Referral Code (Optional)” field on the first step of sign-up",
    apply:
      "Enter it in the “Referral Code (Optional)” field on the first step of sign-up, or open the sign-up link on this page, which fills the field in and locks it.",
    whereToEnter:
      "KuCoin asks for the referral code on the very first step of registration, together with your email address or phone number – on the website and in the app. The field is labelled “Referral Code (Optional)”. The link on this page opens KuCoin's sign-up page with QBSS4BT7 already entered and the field locked, so nothing can go wrong. KuCoin's registration guide adds that you can type the code in by hand if a link fails to fill it.",
    afterSignupShort: "By request – “Link Referrer” in the Help Centre (conditions not published)",
    afterSignup:
      "Possibly. KuCoin's Help Centre offers a self-service request called “Link Referrer” (“Submit a request to add a referrer manually”), and a matching one to unlink a referrer. Both require you to log in, and KuCoin does not publish the conditions or a time limit, so approval is not guaranteed. Entering the code when you sign up remains the reliable way.",
    inviteeReward:
      "KuCoin's referral page says invited friends “stand to receive cashback and exclusive newcomer rewards”. The cashback is a share of your own trading fees: the referrer can set an exclusive cashback rate for the people they invite, up to their current commission rate, so there is no fixed percentage. The referral relationship runs for 365 days after your registration. On top of that, KuCoin advertises a bonus of up to 10,650 USDT for new users.",
    guide: [
      "KuCoin's referral programme pays the referrer a commission on the trading fees of the people they invite, and lets the referrer hand part of it back to the invited user as cashback. KuCoin sets no fixed cashback percentage – it is whatever rate the referrer has configured, capped at the referrer's own commission rate.",
      "The referral covers spot trades (which for KuCoin includes spot, margin and trading bots), ETFs and futures trades. Trades placed through the API are not eligible. The relationship lasts for 365 days after you register and ends earlier if you reach VIP 3. Commissions are settled daily in the currency the fee was paid in.",
      "KuCoin states that the referral programme is not available to residents of Belgium, France, the Netherlands and other countries or regions where its services are restricted.",
    ],
  },
  signup: {
    methods: ["an email address", "a phone number", "Telegram", "Google", "Apple"],
    steps: [
      {
        title: "Open the KuCoin sign-up page",
        text: "Use the sign-up button on this page. KuCoin opens “Welcome to KuCoin” with the referral code QBSS4BT7 already in the “Referral Code (Optional)” field.",
      },
      {
        title: "Enter your email address or phone number",
        text: "Or continue with Telegram, Google or Apple. The referral code sits on this same first step.",
      },
      {
        title: "Accept the Terms of Use",
        text: "Tick the box for the Terms of Use and Privacy Policy and select “Create Account and Claim Reward”.",
      },
      {
        title: "Enter the verification code",
        text: "KuCoin sends a code to your email or phone to confirm it is yours.",
      },
      {
        title: "Set a login password",
        text: "Choose your password and select “Confirm” – the account now exists.",
      },
      {
        title: "Verify your identity",
        text: "Pick your country and ID type, upload photos of the document and complete the face verification. New users need this to use KuCoin's products.",
      },
    ],
    kycShort: "Mandatory for new users",
    kyc: "Yes. Since 31 August 2023 new users must complete Identity Verification to use KuCoin's products and services. Verification consists of choosing your country and ID type, uploading photos of the document and a face check, and one person can verify only one KuCoin account. Older accounts that never verified can still sell crypto, close futures and margin positions, redeem Earn products and withdraw, but cannot deposit.",
    documents: "KuCoin accepts an ID card, a driver's licence, a passport or a residence permit, followed by face verification.",
    minAge: "18 years (KuCoin Terms of Use)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Paying fees in KCS gives a 20% discount, which KuCoin applies to spot and margin trading and credits as a rebate; KuCoin notes the actual discount can turn out slightly lower. Higher VIP levels reduce fees by up to 75%.",
  extraFees: [
    { market: "Spot – Class B tokens", maker: "0.20%", taker: "0.20%" },
    { market: "Spot – Class C tokens", maker: "0.30%", taker: "0.30%" },
  ],
  sources: [
    { label: "KuCoin: How to sign up (web and app)", url: "https://www.kucoin.com/support/30808055892633" },
    { label: "KuCoin: Referral programme and rules", url: "https://www.kucoin.com/referral" },
    { label: "KuCoin: Help Centre self-service (Link Referrer)", url: "https://www.kucoin.com/support" },
    { label: "KuCoin: Rewards Hub (new-user tasks)", url: "https://www.kucoin.com/rewardshub" },
    { label: "KuCoin: Rewards Hub FAQ", url: "https://www.kucoin.com/support/8434569945113" },
    { label: "KuCoin: Fee schedule by VIP level", url: "https://www.kucoin.com/vip/privilege/fee" },
    { label: "KuCoin: Paying fees with KCS", url: "https://www.kucoin.com/support/30380295503769" },
    { label: "KuCoin: Identity verification and account limits", url: "https://www.kucoin.com/support/360015102254" },
    { label: "KuCoin: Futures leverage by position size", url: "https://www.kucoin.com/support/26693511734809" },
    { label: "KuCoin: Trading bot fees", url: "https://www.kucoin.com/support/5090571400217" },
    { label: "KuCoin: Terms of Use (restricted locations, minimum age)", url: "https://www.kucoin.com/support/47185419968079" },
    { label: "KuCoin: About us", url: "https://www.kucoin.com/about-us" },
    { label: "KuCoin: Proof of reserves", url: "https://www.kucoin.com/proof-of-reserves" },
    { label: "KuCoin EU: MiCAR licence of KuCoin EU Exchange GmbH", url: "https://www.kucoin.com/en-eu/support/48142946141541" },
    { label: "KuCoin: Statement on the resolution with the US Department of Justice", url: "https://www.kucoin.com/blog/kucoin-reaches-settlement-with-doj-official-statement" },
    { label: "KuCoin: CEO letter on the 2020 security incident", url: "https://www.kucoin.com/announcement/en-a-letter-from-kucoin-ceo-2020-2021-and-beyond" },
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures", "Trading bots", "ETFs"],
  bonusHeadline: "Up to 10,650 USDT bonus for new users",
  benefits: [
    "KuCoin's sign-up page advertises a bonus of up to 10,650 USDT for new users, unlocked through tasks in the Rewards Hub",
    "Cashback on your trading fees if the referrer has set a rate – KuCoin's programme allows it for 365 days",
    "One referral covers spot, margin, futures, trading bots and ETFs",
    "Trading bots are free to use; you only pay the bot trading fee",
  ],
  benefitNote:
    "The 10,650 USDT figure is KuCoin's own headline and a maximum: the Rewards Hub pays it out as coupon packs, trial funds, fee vouchers and small cash rewards for signing up, verifying your identity, a first deposit, a first trade and limited-time tasks. Limited-time tasks must be completed within 7 days of registration and rewards are valid for 30 days. Stablecoin pairs and zero-fee trades do not count, and market makers and institutional users are excluded. KuCoin's Rewards Hub FAQ still mentions an older maximum of 3,200 USDT.",
  feesUrl: "https://www.kucoin.com/vip/privilege/fee",
  brandColor: "#23AF91",
  brandInk: "#FFFFFF",
  logo: "/logos/kucoin.svg",
  founded: "2017",
  headquarters: "Not stated by KuCoin (Terms of Use governed by the law of the Turks and Caicos Islands)",
  regulation: "MiCAR licence via KuCoin EU Exchange GmbH, Vienna (EEA except Malta); AUSTRAC registration in Australia",
  users: "45M+ users (per KuCoin)",
  assets: "1,000+ listed tokens, 1,300+ trading pairs",
  maxLeverage: "Up to 125x (smallest position tier)",
  spotFees: { maker: "0.10%", taker: "0.10%" },
  futuresFees: { maker: "0.02%", taker: "0.06%" },
  feeNote:
    "KuCoin sorts tokens into classes: the spot rate above is for Class A tokens, while Class B and Class C tokens cost more. The class depends on the base currency of the pair.",
  products: ["USDT & coin-margined futures", "Spot", "Margin", "Trading bots", "Copy trading", "Earn", "KuCoin Web3 Wallet"],
  market: { rank: 8, openInterestBn: 3.13, volume24hBn: 1.59, markets: 671 },
  tagline: "Altcoins and trading bots for everyone",
  quickAnswer:
    "The KuCoin referral code is QBSS4BT7. It goes into the “Referral Code (Optional)” field on the first step of sign-up; the button on this page opens KuCoin with the code already filled in and locked. The referral covers spot, margin, futures and trading bots for 365 days, and KuCoin advertises a bonus of up to 10,650 USDT for new users. If you forget the code, KuCoin's Help Centre has a “Link Referrer” request, but its conditions are not public.",
  about: [
    "KuCoin launched in the third quarter of 2017 and says it now serves over 45 million users in more than 200 countries and regions, with more than 1,000 listed tokens. It built its following by listing altcoins early and by making automated trading easy: its trading bots cost nothing to use beyond their trading fees.",
    "Derivatives on KuCoin include USDT- and coin-margined futures with a maximum leverage of 125x in the smallest position tier – the limit falls to 100x in the next tier and further as the position grows. The exchange also offers margin trading, copy trading, Earn products and a Web3 wallet, and the KCS token brings a 20% discount on spot and margin fees.",
    "On 27 January 2025 KuCoin announced a resolution with the US Department of Justice; it had already closed the accounts of US users with effect from 23 January 2025. In the EEA the group operates through KuCoin EU Exchange GmbH in Vienna, a crypto-asset service provider licensed under MiCAR and supervised by the Austrian FMA. After a hack in 2020 that affected about $285 million, KuCoin states that it and its insurance fund covered the roughly $45.55 million that could not be recovered and that no user sustained a loss.",
  ],
  highlights: [
    { title: "Free trading bots", text: "No charge for the bots themselves – only the bot trading fee." },
    { title: "Code locked in", text: "The sign-up link fills in QBSS4BT7 and locks the field." },
    { title: "Reserves above 100%", text: "BTC 112%, ETH 115%, USDT 110% at 31 October 2026." },
  ],
  pros: [
    "Beginner-friendly automated trading with free bots",
    "Broad altcoin selection with more than 1,000 listed tokens",
    "Low standard futures fees of 0.02% maker / 0.06% taker",
    "Proof of reserves above 100% for BTC, ETH, USDT and USDC",
  ],
  cons: [
    "Not available in the US, France, the Netherlands, Singapore and parts of Canada",
    "Spot fees rise to 0.2% and 0.3% for Class B and Class C tokens",
    "The conditions for adding a referrer after sign-up are not published",
    "Lower futures volume than the top five exchanges",
  ],
  bestFor: ["Traders who want to automate with bots", "Altcoin enthusiasts", "Intermediate futures traders"],
  signupTip:
    "Complete Identity Verification right after sign-up – new users need it to use KuCoin at all – and start the limited-time tasks in the Rewards Hub within 7 days of registering.",
  safety:
    "KuCoin regularly publishes proof-of-reserves reports. The data of 31 October 2026 showed reserve ratios of 112% for BTC, 115% for ETH, 110% for USDT and 127% for USDC, with an audit report dated 9 November 2026. After the 2020 hack KuCoin states that no user sustained a loss. Bots automate execution, not risk management – always set a stop condition, and keep only trading capital on the exchange.",
  restricted:
    "KuCoin's Terms of Use (updated 29 October 2026) list as restricted locations: the United States including its territories, Singapore, mainland China and Hong Kong, Malaysia, Kazakhstan, Uzbekistan, Russia, Belarus, the Canadian provinces of Ontario and British Columbia, France, the Netherlands, and the Crimea, Donetsk, Luhansk, Zaporizhzhia and Kherson regions. Using a VPN to get around the restriction is prohibited.",
  faqs: [
    {
      topic: "referral",
      q: "Is QBSS4BT7 a working KuCoin referral code?",
      a: "Yes. On 16 November 2026 the link on this page opened KuCoin's sign-up page with QBSS4BT7 prefilled and locked in the “Referral Code (Optional)” field.",
    },
    {
      topic: "referral",
      q: "How long does a KuCoin referral last?",
      a: "365 days after your registration. According to KuCoin's rules the commissions – and with them any cashback – also stop if you reach VIP level 3.",
    },
    {
      topic: "referral",
      q: "How much cashback do I get with a KuCoin referral code?",
      a: "KuCoin sets no fixed rate. The referrer can set an exclusive cashback rate for invited users, up to the referrer's own commission rate, and it is paid on spot, margin, trading-bot, ETF and futures trades. API trades are not eligible.",
    },
    {
      topic: "referral",
      q: "What does “Link Referrer” mean on KuCoin?",
      a: "It is a self-service request in KuCoin's Help Centre, described as “Submit a request to add a referrer manually”. It is the route for accounts that registered without a code. You have to log in to use it, and KuCoin does not publish its conditions.",
    },
    {
      topic: "referral",
      q: "In which countries does the KuCoin referral programme not apply?",
      a: "KuCoin states that the programme is not available to residents of Belgium, France, the Netherlands and other countries or regions where its services are restricted.",
    },
    {
      topic: "signup",
      q: "Can I sign up to KuCoin with Google, Apple or Telegram?",
      a: "Yes. KuCoin's sign-up page shows “Or continue with” Telegram, Google and Apple below the email and phone field.",
    },
    {
      topic: "signup",
      q: "Can I use KuCoin without KYC?",
      a: "Not as a new user. Since 31 August 2023 new users must complete Identity Verification to use KuCoin's products and services.",
    },
    {
      topic: "signup",
      q: "Can I have two KuCoin accounts?",
      a: "Not verified ones. KuCoin states that one person can only verify one KuCoin account.",
    },
    {
      topic: "bonus",
      q: "What is the KuCoin welcome bonus?",
      a: "KuCoin's homepage and sign-up page advertise up to 10,650 USDT for new users. It is paid out through new-user tasks in the Rewards Hub – sign up, verify identity, first deposit, first trade and limited-time tasks – as coupon packs, trial funds, fee vouchers and small cash rewards. The sign-up task is listed as a 400 USDT Bonus Pack and Cash Reward.",
    },
    {
      topic: "bonus",
      q: "How long do I have to claim KuCoin's new-user rewards?",
      a: "Limited-time challenge tasks must be completed within 7 days of registration, and KuCoin states that rewards are valid for 30 days before they expire.",
    },
    {
      topic: "bonus",
      q: "Which trades do not count towards KuCoin's new-user tasks?",
      a: "Trades in stablecoin pairs and zero-fee trades do not count. Market makers and institutional users are not eligible at all.",
    },
    {
      topic: "fees",
      q: "What are KuCoin futures fees?",
      a: "VIP 0 users pay 0.02% maker and 0.06% taker on futures. The Futures Grid bot uses a fixed trading fee of 0.06%.",
    },
    {
      topic: "fees",
      q: "How much is the KuCoin KCS discount?",
      a: "20%. KuCoin applies it to spot and margin trading when you pay fees in KCS and credits it as a rebate; the actual discount can be slightly lower.",
    },
    {
      topic: "fees",
      q: "Are KuCoin trading bots free?",
      a: "Yes, KuCoin states that the bots themselves are free. Trades follow a separate bot fee rule: spot bots get a 20% discount on the VIP 0 maker and taker rate, the Futures Grid bot pays a fixed 0.06%, and KCS deductions and VIP levels do not apply.",
    },
    {
      topic: "fees",
      q: "What is the maximum leverage on KuCoin?",
      a: "125x for verified accounts in the smallest position tier. KuCoin's futures leverage is tiered by position size – the next tier is limited to 100x.",
    },
    {
      topic: "safety",
      q: "Is KuCoin available in the US?",
      a: "No. The United States is a restricted location in KuCoin's Terms of Use, and KuCoin closed the accounts of US users with effect from 23 January 2025.",
    },
    {
      topic: "safety",
      q: "Is KuCoin regulated in Europe?",
      a: "KuCoin EU Exchange GmbH in Vienna is a crypto-asset service provider licensed under MiCAR and supervised by the Austrian Financial Market Authority. It serves the EEA except Malta.",
    },
    {
      topic: "safety",
      q: "Was KuCoin hacked?",
      a: "Yes, in 2020. About $285 million was affected. KuCoin states that it and its insurance fund covered the roughly $45.55 million (16%) that could not be recovered and that no user sustained a loss.",
    },
  ],
};
