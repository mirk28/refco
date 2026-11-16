import type { Exchange } from "../types";

/** Facts checked against mexc.com on 2026-11-16 (global site, en-US, no regional redirect). */
export const mexc: Exchange = {
  slug: "mexc",
  name: "MEXC",
  homepage: "https://www.mexc.com/",
  affiliateUrl: "https://s.mexc.com/referral/ELJPr0e2XR",
  referralCode: "4E3xM",
  referral: {
    codeName: "Referral Code",
    whereShort: "“Referral Code (Optional)” field on the sign-up form (case-sensitive)",
    apply:
      "Enter it in the “Referral Code (Optional)” field of the sign-up form – the code is case-sensitive – or open the sign-up link on this page, which fills the field in and locks it.",
    whereToEnter:
      "MEXC's sign-up form has a field labelled “Referral Code (Optional)” with the hint “Enter invitation code (case-sensitive)”, so type 4E3xM exactly as written, with the capital E and M. On the website you tick “Enter Referral Code” to reveal the field, in the app you tap the small arrow to expand it. The link on this page opens MEXC's invite page with 4E3xM already filled in and the field locked.",
    afterSignupShort: "Yes – within 30 days of sign-up",
    afterSignup:
      "Yes. MEXC has a self-service function for linking a referrer after registration: only accounts that signed up within the past 30 days are eligible, it works for main accounts, and you link by referral code or by the referrer's UID. The referrer must have registered before you did. Once an invitation code has been linked, MEXC states that it cannot be changed or removed.",
    inviteeReward:
      "MEXC does not give invited users a standing fee discount. What the code unlocks is MEXC's referral event: its invite page shows referral sign-ups an extra reward of up to 140 USDT on top of the new-user rewards of up to 10,000 USDT. The referral reward is paid in futures bonuses when you complete a net-deposit task and a futures-trading task within 7 days of signing up.",
    guide: [
      "On MEXC the referral code does two things. It records who invited you – the referrer earns commission on your spot and futures trades – and it makes you eligible for the referral event that MEXC runs for new sign-ups. That event is tiered: 50 USDT for a net deposit of at least $100 and $1,000 of futures volume, 90 USDT at $10,000 of futures volume and 140 USDT at $20,000, all within 7 days of registration and after Primary KYC.",
      "The rewards are futures bonuses, fee vouchers and position airdrops, not cash. MEXC marks the event as time-limited and “only open to designated users”, and its event FAQ says the referral bonus cannot be combined with the 10,000 USDT event or Rewards Hub bonuses – even though the invite page advertises both together. Treat the amounts shown in your own account after sign-up as the ones that apply.",
      "Because the code is case-sensitive, a link is the safest way to apply it. If you registered without it, you still have 30 days to link it yourself.",
    ],
  },
  signup: {
    methods: ["an email address", "a phone number", "Google", "Apple", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Open the MEXC sign-up page",
        text: "Use the sign-up button on this page. MEXC opens “Your Friend Invites You to Join MEXC” with the referral code 4E3xM already filled in and locked.",
      },
      {
        title: "Enter your email address or phone number and a password",
        text: "Or continue with Google, Apple, Telegram or MetaMask. The password needs at least 10 characters with upper- and lower-case letters, a number and a symbol.",
      },
      {
        title: "Check the referral code",
        text: "The field “Referral Code (Optional)” should show 4E3xM. If you type it yourself, mind the capital letters – the code is case-sensitive.",
      },
      {
        title: "Solve the slider puzzle",
        text: "MEXC shows a slider puzzle as a security check.",
      },
      {
        title: "Enter the 6-digit code",
        text: "Type in the 6-digit verification code MEXC sends you and select “Confirm”.",
      },
      {
        title: "Complete KYC",
        text: "Finish Primary KYC to unlock the rewards and avoid restrictions on deposits, withdrawals and trading.",
      },
    ],
    kycShort: "Needed for deposits, withdrawals and trading",
    kyc: "In practice, yes. MEXC states that not completing KYC verification may affect your access to services such as deposits, withdrawals and trading, and its rewards require at least Primary KYC. Primary KYC allows crypto withdrawals of 80 BTC a day; Advanced KYC raises that to 200 BTC a day and adds fiat limits of 20,000 USD a day. Spot, futures and events are open at both levels.",
    documents: "MEXC accepts an ID card, a passport, a driver's licence or a residence permit.",
    minAge: "Legal age in your country – MEXC's User Agreement requires you to be of legal age to form a binding contract and names no number",
  },
  welcomeTasks: [
    { task: "Sign up", reward: "10 USDT voucher" },
    { task: "First login in the app", reward: "10 USDT voucher" },
    { task: "Complete Primary KYC within 7 days", reward: "$200 BTCUSDT position airdrop" },
    { task: "Cumulative futures trading (top tier: at least 1,000,000 USDT)", reward: "Futures bonus of up to 7,620 USDT" },
    { task: "Referral event: net deposit of at least $100 and $1,000 futures volume within 7 days", reward: "50 USDT in futures bonuses" },
    { task: "Referral event: futures volume of at least $10,000 within 7 days", reward: "90 USDT in futures bonuses" },
    { task: "Referral event: futures volume of at least $20,000 within 7 days", reward: "140 USDT in futures bonuses" },
  ],
  tokenDiscount:
    "Paying fees with MX gives a 20% discount on spot and futures fees; for futures the MX has to sit in your Futures wallet. The former 50% discount for holding 500 MX or more has been suspended since 9 February 2026.",
  extraFees: [{ market: "Coin-M futures (BTCUSD, ETHUSD)", maker: "0.00%", taker: "0.02%" }],
  sources: [
    { label: "MEXC: Account sign-up process (web)", url: "https://www.mexc.com/support/article/mexc-account-sign-up-process-web-17827791531471" },
    { label: "MEXC: Account sign-up process (app)", url: "https://www.mexc.com/support/article/mexc-account-sign-up-process-app-17451382199193" },
    { label: "MEXC: Referral guide", url: "https://www.mexc.com/support/article/mexc-referral-guide-17827791531472" },
    { label: "MEXC: Self-service referrer linking guide", url: "https://www.mexc.com/support/article/self-service-referrer-linking-guide-17827791527001" },
    { label: "MEXC: Referral event and rules", url: "https://www.mexc.com/invite/activity-invite" },
    { label: "MEXC: Rewards Hub (new-user rewards)", url: "https://www.mexc.com/rewards-hub" },
    { label: "MEXC: Welcome rewards announcement (bonus validity)", url: "https://www.mexc.com/announcements/article/the-industry-s-best-welcome-17827791527250" },
    { label: "MEXC: Fee schedule", url: "https://www.mexc.com/fee" },
    { label: "MEXC: How to use MX for trading-fee discounts", url: "https://www.mexc.com/learn/article/how-to-use-mx-for-trading-fee-discounts/1" },
    { label: "MEXC: Launch of 500x leverage on futures", url: "https://www.mexc.com/announcements/article/launch-of-500x-leverage-on-futures-17827791523511" },
    { label: "MEXC: KYC FAQ", url: "https://www.mexc.com/support/article/mexc-kyc-faq-342632287349720064" },
    { label: "MEXC: Common questions about KYC verification", url: "https://www.mexc.com/support/article/common-questions-about-kyc-verification-17827791529664" },
    { label: "MEXC: User Agreement (prohibited jurisdictions)", url: "https://www.mexc.com/terms" },
    { label: "MEXC Learn: Restricted countries", url: "https://www.mexc.com/learn/article/mexc-restricted-countries-complete-list-of-prohibited-limited-regions/1" },
    { label: "MEXC: About", url: "https://www.mexc.com/about" },
    { label: "MEXC: Why MEXC (pairs and contracts)", url: "https://www.mexc.com/why-mexc" },
    { label: "MEXC: Proof of reserves", url: "https://www.mexc.com/proof-of-reserve" },
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futures"],
  bonusHeadline: "Up to 10,000 USDT in new-user rewards",
  benefits: [
    "New-user rewards of up to 10,000 USDT in the Rewards Hub – vouchers, position airdrops and futures bonuses",
    "Referral sign-ups are shown an extra reward of up to 140 USDT in futures bonuses",
    "0% maker fee on spot and on most futures contracts",
    "The code can still be linked within 30 days of sign-up",
  ],
  benefitNote:
    "All rewards are task-based and need at least Primary KYC. Bonuses cannot be withdrawn – only profits made with them can – and moving funds out of the Futures account before a bonus is fully used forfeits the whole bonus. Futures bonuses work on USDT-M contracts and were announced with a validity of 15 days. The referral event is time-limited and open to designated users only, MEXC's event FAQ says its bonus cannot be combined with the 10,000 USDT event, and rewards pass a risk review of up to 7 days. Regions where derivatives are prohibited may be ineligible.",
  feesUrl: "https://www.mexc.com/fee",
  brandColor: "#1972E2",
  brandInk: "#FFFFFF",
  logo: "/logos/mexc.svg",
  founded: "2018",
  headquarters: "MEXC (Comoros) Ltd, registered in the Union of Comoros",
  regulation: "No licence named on MEXC's own pages; MEXC states it has no tier-one licence and no MiCA authorisation",
  users: "40M+ users (per MEXC)",
  assets: "1,384 spot pairs and 1,152 futures contracts (per MEXC)",
  maxLeverage: "Up to 500x (BTCUSDT and ETHUSDT futures)",
  spotFees: { maker: "0.00%", taker: "0.05%" },
  futuresFees: { maker: "0.00%", taker: "0.02%" },
  feeNote:
    "The futures rate shown is MEXC's rate for BTCUSDT and ETHUSDT; across all contracts its fee page gives a range of 0% to 0.04% for makers and 0% to 0.1% for takers, and some pairs trade at zero fees. MEXC notes that maker rates may vary with platform events or your region.",
  products: ["USDT-M & Coin-M futures", "Spot", "Copy trading", "Launchpad", "Earn"],
  market: { rank: 7, openInterestBn: 6.14, volume24hBn: 6.14, markets: 846 },
  tagline: "Zero maker fees and up to 500x leverage",
  quickAnswer:
    "The MEXC referral code is 4E3xM – it is case-sensitive. Enter it in the “Referral Code (Optional)” field when you sign up, or use the button on this page, which fills it in and locks it. If you forgot it, MEXC lets you link a referrer yourself within 30 days of sign-up. New users can unlock up to 10,000 USDT in rewards, and MEXC's invite page shows referral sign-ups an extra bonus of up to 140 USDT.",
  about: [
    "MEXC has operated since 2018 and says it serves more than 40 million users in over 170 countries and regions. It competes on price and breadth: regular users pay no maker fee on spot and on most futures contracts, and MEXC lists 1,384 spot pairs and 1,152 futures contracts.",
    "The futures platform offers USDT-margined and coin-margined contracts with leverage of up to 500x on BTCUSDT and ETHUSDT. That maximum is not available everywhere – MEXC excludes Australia, Austria, Belgium, Canada, France, Hong Kong, Italy, Russia, the United Kingdom and Yemen from it – and copy trading does not support 250x or 500x. Copy trading, a launchpad and Earn products are also available.",
    "The contracting entity is MEXC (Comoros) Ltd, registered in the Union of Comoros. MEXC names no licence on its own pages and states itself that it has no tier-one licence and no MiCA authorisation; its own guide notes that it appears in ESMA's interim register of non-compliant entities. It publishes a proof of reserves – the snapshot of 9 November 2026 showed 122.42% for USDT, 109.84% for USDC, 317.61% for BTC and 112.41% for ETH – and maintains a $100 million Guardian Fund and a futures insurance fund.",
  ],
  highlights: [
    { title: "0% maker fees", text: "Zero maker fees on spot and on most futures contracts." },
    { title: "Link within 30 days", text: "Forgot the code? MEXC lets you link a referrer for 30 days after sign-up." },
    { title: "Reserves above 100%", text: "USDT 122%, BTC 318%, ETH 112% at the snapshot of 9 November 2026." },
  ],
  pros: [
    "Among the lowest trading fees in the industry: 0% maker, 0.02% taker on BTCUSDT futures",
    "A referral code can be linked up to 30 days after sign-up",
    "1,384 spot pairs and 1,152 futures contracts",
    "Proof of reserves above 100% and a $100 million Guardian Fund",
  ],
  cons: [
    "No tier-one licence and no MiCA authorisation, by MEXC's own statement",
    "Not available in the US, the UK, Canada, France, the Netherlands, Singapore and Hong Kong",
    "Bonuses are not withdrawable and are forfeited if you move funds out early",
    "500x leverage is extremely risky",
  ],
  bestFor: ["Cost-sensitive, high-frequency futures traders", "Traders hunting new listings", "Experienced users comfortable with offshore venues"],
  signupTip:
    "Complete Primary KYC within 7 days of signing up – it unlocks the $200 BTCUSDT position airdrop – and do not move funds out of your Futures account while a futures bonus is still in use, or the bonus is forfeited.",
  safety:
    "MEXC publishes a proof of reserves – 122.42% for USDT, 109.84% for USDC, 317.61% for BTC and 112.41% for ETH at the snapshot of 9 November 2026 – and maintains a $100 million Guardian Fund and a futures insurance fund. MEXC itself states that it holds no tier-one licence and no MiCA authorisation, so use strong account security and do not store long-term savings there. With very new tokens, check liquidity and contract specifications before trading them with leverage.",
  restricted:
    "MEXC's User Agreement (last updated 13 October 2026) prohibits users from North Korea, Cuba, Sudan, Iran, mainland China, Singapore, Malaysia, the United States, the United Kingdom, Hong Kong, Kazakhstan, Russia, Russian-controlled regions of Ukraine, Belarus, Canada, France and the Netherlands, plus sanctioned and FATF-blacklisted countries.",
  faqs: [
    {
      topic: "referral",
      q: "Is 4E3xM a working MEXC referral code?",
      a: "Yes. On 16 November 2026 the link on this page opened MEXC's invite page with inviteCode=4E3xM in the address and 4E3xM prefilled and locked in the “Referral Code (Optional)” field.",
    },
    {
      topic: "referral",
      q: "Is the MEXC referral code case-sensitive?",
      a: "Yes. MEXC's sign-up field carries the hint “Enter invitation code (case-sensitive)”. The code is 4E3xM – digit 4, capital E, digit 3, lower-case x, capital M.",
    },
    {
      topic: "referral",
      q: "How do I link a referrer on MEXC after registration?",
      a: "Use MEXC's self-service referrer linking within 30 days of signing up. It is available to main accounts, you enter either the referral code or the referrer's UID, and the referrer must have registered before you. The link cannot be changed or removed afterwards.",
    },
    {
      topic: "referral",
      q: "Does the MEXC referral code give a fee discount?",
      a: "No standing fee discount for the invited user is listed by MEXC. The benefit is the referral event with rewards of up to 140 USDT in futures bonuses, plus the general new-user rewards.",
    },
    {
      topic: "signup",
      q: "What are the MEXC password requirements?",
      a: "At least 10 characters, including an upper-case letter, a lower-case letter, a number and a symbol.",
    },
    {
      topic: "signup",
      q: "Can I sign up to MEXC with Google, Apple, Telegram or MetaMask?",
      a: "Yes. MEXC's sign-up page offers Google and Apple directly and Telegram and MetaMask under “More Options”, in addition to email and phone.",
    },
    {
      topic: "signup",
      q: "What are the MEXC KYC levels and limits?",
      a: "Primary KYC allows crypto withdrawals of 80 BTC a day and P2P trading. Advanced KYC raises the limit to 200 BTC a day and allows fiat transactions of up to 20,000 USD a day. Spot, futures and events are open at both levels.",
    },
    {
      topic: "signup",
      q: "Can I use MEXC without KYC?",
      a: "Only with restrictions. MEXC states that not completing KYC verification may affect your access to services such as deposits, withdrawals and trading, and the new-user and referral rewards require at least Primary KYC.",
    },
    {
      topic: "bonus",
      q: "What is the MEXC welcome bonus?",
      a: "MEXC advertises up to 10,000 USDT in new-user rewards. Examples from its Rewards Hub: a 10 USDT voucher for signing up, a 10 USDT voucher for the first app login, a $200 BTCUSDT position airdrop for completing Primary KYC within 7 days and a futures bonus of up to 7,620 USDT for cumulative trading, with the top tier at 1,000,000 USDT of volume.",
    },
    {
      topic: "bonus",
      q: "How much is the MEXC referral bonus?",
      a: "In MEXC's referral event the invited user receives 50 USDT for a net deposit of at least $100 plus $1,000 of futures volume, 90 USDT at $10,000 of futures volume and 140 USDT at $20,000, all within 7 days of signing up. It is paid as futures bonus, fee voucher and position airdrop. The event is time-limited and open to designated users only.",
    },
    {
      topic: "bonus",
      q: "Can I withdraw the MEXC bonus?",
      a: "No. MEXC states that bonuses cannot be withdrawn, but profits earned from bonus-funded trades can. Transferring any assets out of the Futures account before the bonus is fully used forfeits the entire bonus.",
    },
    {
      topic: "bonus",
      q: "How long is a MEXC futures bonus valid?",
      a: "MEXC announced a validity of 15 days for futures bonuses and for vouchers. A futures bonus can only be used on USDT-M contracts.",
    },
    {
      topic: "fees",
      q: "What are MEXC futures fees?",
      a: "On BTCUSDT and ETHUSDT regular users pay 0% maker and 0.02% taker. Across all contracts MEXC's fee page gives a range of 0% to 0.04% for makers and 0% to 0.1% for takers, and some pairs are fee-free.",
    },
    {
      topic: "fees",
      q: "How much is the MEXC MX fee discount?",
      a: "20% on spot and futures fees when you pay them with MX; for futures the MX must be in your Futures wallet. The earlier 50% discount for holding at least 500 MX has been suspended since 9 February 2026.",
    },
    {
      topic: "fees",
      q: "Does MEXC really offer 500x leverage?",
      a: "Yes, on BTCUSDT and ETHUSDT futures. It is not offered in Australia, Austria, Belgium, Canada, France, Hong Kong, Italy, Russia, the United Kingdom and Yemen, and copy trading does not support it. At 500x a move of 0.2% against you can wipe out the position.",
    },
    {
      topic: "safety",
      q: "Is MEXC regulated?",
      a: "MEXC names no licence on its own pages and states that it has no tier-one licence and no MiCA authorisation. Its contracting entity is MEXC (Comoros) Ltd, registered in the Union of Comoros.",
    },
    {
      topic: "safety",
      q: "Is MEXC available in the US or the UK?",
      a: "No. Both the United States and the United Kingdom are prohibited jurisdictions in MEXC's User Agreement, as are Canada, France, the Netherlands, Singapore and Hong Kong.",
    },
    {
      topic: "safety",
      q: "Does MEXC publish proof of reserves?",
      a: "Yes. The snapshot of 9 November 2026 showed reserve ratios of 122.42% for USDT, 109.84% for USDC, 317.61% for BTC and 112.41% for ETH. MEXC also maintains a $100 million Guardian Fund.",
    },
  ],
};
