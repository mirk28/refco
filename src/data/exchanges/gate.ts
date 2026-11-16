import type { Exchange } from "../types";

/** Facts checked against gate.com on 2026-11-16 (global site, logged out; the EEA site gate.com/en-eu has different rules). */
export const gate: Exchange = {
  slug: "gate",
  name: "Gate",
  homepage: "https://www.gate.com/",
  affiliateUrl: "https://www.gate.com/signup/VAAXAW9YVA?ref_type=103",
  referralCode: "VAAXAW9YVA",
  referral: {
    codeName: "referral code",
    whereShort: "Attached through the sign-up link – Gate shows the inviter on the registration form",
    apply:
      "Open the sign-up link on this page: Gate attaches the code to your registration and shows an inviter banner with the reward on the form.",
    whereToEnter:
      "With Gate the safest way is the referral link. The link on this page opens gate.com/signup with the code VAAXAW9YVA attached, and Gate confirms it with a banner above the form (“Register now to receive a gift from your friend”). The first step of the web form only asks for your country of residence, so there is no separate code box to fill in there – if you do not see the inviter banner, reopen the link before you create the account.",
    afterSignupShort: "Not documented by Gate – use the link when you register",
    afterSignup:
      "Gate does not publish a way to add a referral code to an existing exchange account. Its referral rules say that each user can only sign up through one referral method, and Gate's own guide warns that the referral relationship may not be recorded if a new user registers without the invitation link or code. Use the link before you create the account.",
    inviteeReward:
      "Signing up through this link puts you in Gate's Super Commission programme: Gate's sign-up page states that you receive a 10% commission reward on your trading fees. According to the programme rules the rebate is calculated on your trading fees for 1 year and excludes fiat transactions.",
    guide: [
      "Gate runs several referral programmes side by side. The code VAAXAW9YVA belongs to Super Commission, where the referrer shares part of the commission with the people they invite: the split shown by Gate is 30% for the referrer and 10% for the invited friend, based on the friend's trading fees for one year. Fiat transactions are excluded.",
      "One sign-up covers Spot, Margin, Futures and Trenches (the section Gate also calls Gate Alpha). Gate's other referral campaigns work with vouchers instead – “Earn Voucher” and “Token Crew” – but the Super Commission rules state that accounts invited this way are not eligible for rewards from other events, so do not count on combining them.",
      "Gate does not support cross-site invitations. If you live in the EEA you are served by a separate Gate entity in Malta (gate.com/en-eu), where commission is paid on spot trading only, and a referral made on the global site is not carried over. Super Commission is also not available to users from Belgium, the United Kingdom, France, Germany, the Netherlands, Turkey, Austria and South Korea.",
    ],
  },
  signup: {
    methods: ["an email address", "a phone number", "Google", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Open the Gate sign-up page",
        text: "Use the sign-up button on this page. Gate shows a banner with the inviter and the 10% fee reward above the form – that is your confirmation that the referral is attached.",
      },
      {
        title: "Select your country or region of residence",
        text: "Choose where you live and accept the User Agreement, then click “Create Account”.",
      },
      {
        title: "Enter your email address or phone number",
        text: "Pick one of the two; Gate uses it for your login and security codes.",
      },
      {
        title: "Enter the verification code",
        text: "Gate sends a code to your email or phone. According to Gate's app guide it is valid for 15 minutes.",
      },
      {
        title: "Set your password",
        text: "Choose a strong, unique password to finish creating the account.",
      },
      {
        title: "Verify your identity",
        text: "Complete KYC with a passport, ID card or driver's licence. Gate requires it before you can deposit or withdraw crypto.",
      },
    ],
    kycShort: "Mandatory to deposit and withdraw",
    kyc: "Yes. Gate states that KYC identity verification is mandatory for all users to deposit and withdraw cryptocurrencies, trade fiat currencies and take part in Startup subscriptions. Address verification is optional and raises your withdrawal limits. The identity-verification task is also part of Gate's newbie rewards.",
    documents: "Gate accepts a passport, an ID card or a driver's licence for identity verification. A proof of address can be added voluntarily for higher limits.",
    minAge: "18 years (Gate User Agreement)",
  },
  welcomeTasks: [
    { task: "Sign up", reward: "Voucher worth 50 USDT" },
    { task: "Complete identity verification", reward: "Voucher worth 50 USDT" },
    { task: "First deposit of at least 10 USDT", reward: "Voucher worth 10 USDT" },
    { task: "First trade of at least 10 USDT", reward: "Voucher worth 5 USDT" },
    { task: "First app download", reward: "Voucher worth 10 USDT" },
    { task: "Advanced task, first stage: net deposit of at least 50 USDT and 500 USDT trading volume", reward: "100 USDT (advanced tasks go up to 10,000 USDT)" },
  ],
  tokenDiscount: "Paying spot fees in GT lowers the standard rate from 0.1% to 0.09% for both makers and takers.",
  extraFees: [{ market: "USDT delivery futures", maker: "-0.015%", taker: "0.016%" }],
  sources: [
    { label: "Gate: Super Commission referral programme and rules", url: "https://www.gate.com/referral/super-rebate" },
    { label: "Gate: Earn Voucher referral campaign", url: "https://www.gate.com/referral/earn-voucher" },
    { label: "Gate: Token Crew referral campaign", url: "https://www.gate.com/referral/earn-together" },
    { label: "Gate Learn: Gate referral programme guide", url: "https://www.gate.com/learn/articles/gate-referral-program" },
    { label: "Gate: Rewards Hub (newbie tasks)", url: "https://www.gate.com/rewards_hub" },
    { label: "Gate: Newbie task rules", url: "https://www.gate.com/help/guide/functional_guidelines/41110" },
    { label: "Gate: Fee schedule", url: "https://www.gate.com/fee" },
    { label: "Gate: BTCUSDT perpetual margin and leverage tiers", url: "https://www.gate.com/futures-introduction/margin/perpetual-usdtm-BTC_USDT" },
    { label: "Gate: Leverage limit for new futures accounts", url: "https://www.gate.com/help/futures/futures-video/22121" },
    { label: "Gate: How to register on the website", url: "https://www.gate.com/help/guide/register_install/49476" },
    { label: "Gate: How to register in the app", url: "https://www.gate.com/help/guide/register_install/22296" },
    { label: "Gate: KYC requirement", url: "https://www.gate.com/help/guide/security-settings/23118" },
    { label: "Gate: How to complete identity verification", url: "https://www.gate.com/help/guide/security-settings/17293" },
    { label: "Gate: User Agreement (restricted locations, minimum age)", url: "https://www.gate.com/legal/user-agreement" },
    { label: "Gate: About us", url: "https://www.gate.com/about-us" },
    { label: "Gate: Licences", url: "https://www.gate.com/gategroup/legal/licenses" },
    { label: "Gate: Proof of reserves", url: "https://www.gate.com/proof-of-reserves" },
    { label: "Gate: Move to the gate.com domain (announcement)", url: "https://www.gate.com/announcements/article/45055" },
  ],
  feeDiscount: "10% of your trading fees back for 1 year",
  referralCovers: ["Spot", "Margin", "Futures", "Trenches (Gate Alpha)"],
  bonusHeadline: "10% fee rebate plus newbie tasks worth 125 USDT",
  benefits: [
    "Gate's Rewards Hub lists newbie tasks worth 125 USDT in vouchers (sign-up, verification, first deposit, first trade, app download)",
    "One referral covers Spot, Margin, Futures and Trenches for one year",
    "Spot fees of 0.1%, or 0.09% when you pay them in GT",
    "Trade more than 5,400 digital assets with a single account",
  ],
  benefitNote:
    "The 10% rebate is the reward Gate shows on the sign-up page reached through this link; it excludes fiat transactions and is not available to users from Belgium, the United Kingdom, France, Germany, the Netherlands, Turkey, Austria and South Korea. Newbie tasks must be completed within 15 days of sign-up, may vary by region and exclude institutional, API and affiliate accounts. Gate's rules say accounts invited through commission sharing are not eligible for rewards from other events – the Rewards Hub in your account shows what you can actually claim.",
  feesUrl: "https://www.gate.com/fee",
  brandColor: "#2354E6",
  brandInk: "#FFFFFF",
  logo: "/logos/gate.svg",
  founded: "2013",
  headquarters: "Gate Group with licensed entities in several regions",
  regulation: "Licences or registrations in Malta (MFSA, MiCA), Gibraltar, the Bahamas, Hong Kong, Dubai (VARA, DMCC), Australia (AUSTRAC), Japan and Cyprus",
  users: "63M+ users (per Gate)",
  assets: "5,400+ digital assets",
  maxLeverage: "Up to 200x (BTCUSDT perpetual)",
  spotFees: { maker: "0.10%", taker: "0.10%" },
  futuresFees: { maker: "0.02%", taker: "0.05%" },
  feeNote:
    "Higher VIP levels pay less. If you switch on Points Deduction instead of GT, Gate applies fixed rates of 0.2% on spot and a 0.075% taker fee on futures.",
  products: ["Perpetual futures", "Delivery futures", "Options", "Spot", "Margin", "Copy trading", "Launchpad", "Earn"],
  market: { rank: 4, openInterestBn: 13.27, volume24hBn: 5.4, markets: 824 },
  tagline: "The widest altcoin selection, since 2013",
  quickAnswer:
    "The Gate referral code is VAAXAW9YVA. Open the sign-up link on this page and Gate attaches it automatically – the registration form then shows a banner promising a 10% commission reward on your trading fees. The rebate runs for one year and covers Spot, Margin, Futures and Trenches. Gate does not document a way to add a code later, so use the link before you create the account.",
  about: [
    "Gate was founded in 2013 – it started as Bter.com, became Gate.io and adopted the international domain gate.com in May 2025. Its trademark is breadth: Gate says it lists more than 5,400 digital assets and serves over 63 million users, and new tokens often appear there long before other large exchanges pick them up.",
    "On the derivatives side Gate carried the second-largest open interest on CoinMarketCap's ranking at our market-data date, with USDT-margined perpetuals on hundreds of altcoins, delivery futures and options. Leverage on the BTCUSDT perpetual goes up to 200x in the lowest risk tier, while new futures accounts start with a 20x limit for their first three days. Copy trading, a launchpad for new tokens and Earn products sit next to the trading screens.",
    "Gate has published proof of reserves since May 2020. The batch of 18 October 2026 showed total reserves of $8.68 billion across 496 assets and a reserve ratio of 118%. The group lists licences and registrations in Malta (MFSA, under MiCA), Gibraltar, the Bahamas, Hong Kong, Dubai, Australia, Japan and Cyprus. The global site gate.com is closed to residents of the United States and a long list of other countries; EEA residents are served by Gate's Maltese entity.",
  ],
  highlights: [
    { title: "5,400+ assets", text: "One of the largest altcoin catalogues of any exchange." },
    { title: "10% of your fees back", text: "Shown by Gate on the sign-up page reached through this link." },
    { title: "Reserves at 118%", text: "Proof of reserves since 2020, latest batch on 18 October 2026." },
  ],
  pros: [
    "Futures on many altcoins you won't find elsewhere",
    "Standard spot fee of 0.1%, 0.09% with GT, and 0.02% / 0.05% on USDT perpetuals",
    "Proof of reserves since 2020 with a 118% reserve ratio",
    "Long track record since 2013 and a growing list of regional licences",
  ],
  cons: [
    "The global site is closed to many countries, including the US, the UK, Canada, Germany, France, Spain and the Netherlands",
    "No documented way to add a referral code after sign-up",
    "Referrals are not carried across Gate's regional sites",
    "Smaller tokens carry high volatility and liquidity risk",
  ],
  bestFor: ["Altcoin futures traders", "Early-listing hunters", "Traders who value breadth over simplicity"],
  signupTip:
    "Complete the newbie tasks within 15 days of signing up – after that the beginner vouchers expire – and consider paying spot fees in GT to bring them down to 0.09%.",
  safety:
    "Gate publishes proof of reserves with a reserve ratio above 100% – 118% at the batch of 18 October 2026 – and its help centre documents two-factor authentication, an anti-phishing code, a withdrawal whitelist and a fund password. Switch them on before you deposit. With small-cap altcoins, always check liquidity before opening leveraged positions.",
  restricted:
    "Gate's User Agreement (last updated 22 July 2026) lists restricted locations for the global site, including the United States, mainland China, Singapore, Canada, France, Germany, Hong Kong, Malaysia, Malta, Spain, the Netherlands, the United Kingdom, Austria, India, Indonesia, Japan, Argentina, the UAE, Thailand, South Korea, the Philippines, Pakistan, Vietnam, Russia and Belarus, plus sanctioned regions. Some of these countries are served by separate Gate entities with their own sites and rules.",
  faqs: [
    {
      topic: "referral",
      q: "Is VAAXAW9YVA a working Gate referral code?",
      a: "Yes. On 16 November 2026 the link gate.com/signup/VAAXAW9YVA opened Gate's own registration page with the code attached and an inviter banner reading “Sign up and trade to receive 10% commission reward on trading fees!”.",
    },
    {
      topic: "referral",
      q: "How long does the Gate referral rebate last?",
      a: "One year. Under Gate's Super Commission rules the fee rebate is based on your trading fees for 1 year and excludes fiat transactions.",
    },
    {
      topic: "referral",
      q: "Is Gate.io the same as Gate, and does the code still work?",
      a: "Yes. Gate.io adopted the international domain gate.com in May 2025; it is the same exchange, founded in 2013. The code VAAXAW9YVA is used on gate.com.",
    },
    {
      topic: "referral",
      q: "Does the Gate referral code work in the EU?",
      a: "Not in the same way. EEA residents are served by a separate Gate site (gate.com/en-eu, operated from Malta) where commission applies to spot trading only, and Gate states that cross-site invitations are not supported. Super Commission is also unavailable to users from Belgium, France, Germany, the Netherlands and Austria.",
    },
    {
      topic: "referral",
      q: "Can I combine the Gate referral rebate with Gate's referral vouchers?",
      a: "Do not count on it. Gate's Super Commission rules state that accounts invited this way are not eligible for rewards from other events, which covers the voucher campaigns “Earn Voucher” and “Token Crew”.",
    },
    {
      topic: "signup",
      q: "Why does the Gate sign-up form ask for my country first?",
      a: "Gate's registration starts with your country or region of residence because the products, rewards and even the Gate entity that serves you depend on it. Only after that do you enter your email address or phone number.",
    },
    {
      topic: "signup",
      q: "How long is the Gate verification code valid?",
      a: "According to Gate's app registration guide, the verification code sent to your email or phone is valid for 15 minutes.",
    },
    {
      topic: "signup",
      q: "Can I use Gate without KYC?",
      a: "Only to a limited extent. Gate states that KYC is mandatory for all users to deposit and withdraw cryptocurrencies, to trade fiat currencies and to join Startup subscriptions.",
    },
    {
      topic: "bonus",
      q: "What is the Gate welcome bonus for new users?",
      a: "Gate's Rewards Hub lists newbie tasks worth 125 USDT in vouchers: 50 for signing up, 50 for identity verification, 10 for a first deposit of at least 10 USDT, 5 for a first trade of at least 10 USDT and 10 for the first app download. Advanced tasks go up to 10,000 USDT. The sign-up page itself advertises up to 135 USDT, so the amounts shown in your account are the ones that count.",
    },
    {
      topic: "bonus",
      q: "How long do I have to complete Gate's newbie tasks?",
      a: "Beginner tasks must be completed within 15 days of signing up. Stablecoin trades do not count towards the trading tasks, and institutional, API and affiliate accounts are excluded.",
    },
    {
      topic: "fees",
      q: "What are Gate spot fees?",
      a: "The standard (VIP 0) spot fee is 0.1% for makers and takers, or 0.09% when you pay fees in GT. With Points Deduction switched on instead, Gate applies a fixed 0.2%.",
    },
    {
      topic: "fees",
      q: "What are Gate futures fees?",
      a: "USDT perpetual futures cost 0.02% maker and 0.05% taker on the standard tier. USDT delivery futures are listed at -0.015% maker (a rebate) and 0.016% taker.",
    },
    {
      topic: "fees",
      q: "What is the maximum leverage on Gate?",
      a: "Up to 200x on the BTCUSDT perpetual in the lowest risk tier (cross margin, positions up to the first risk limit). New futures accounts are limited to 20x for their first three days. Leverage this high can liquidate a position on a very small price move.",
    },
    {
      topic: "safety",
      q: "Is Gate available in the US?",
      a: "No. The United States is on the list of restricted locations in Gate's User Agreement.",
    },
    {
      topic: "safety",
      q: "Does Gate publish proof of reserves?",
      a: "Yes, since May 2020. The batch of 18 October 2026 showed total reserves of $8.68 billion across 496 assets and a reserve ratio of 118%.",
    },
    {
      topic: "safety",
      q: "Where is Gate licensed?",
      a: "Gate lists licences or registrations in Hong Kong, Gibraltar, Malta (MFSA, under MiCA), Australia (AUSTRAC), Dubai (VARA and DMCC), the Bahamas, Japan and Cyprus.",
    },
  ],
};
