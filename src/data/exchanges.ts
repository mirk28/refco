/**
 * Exchange data + editorial content.
 *
 * HOW TO ADD YOUR AFFILIATE LINKS LATER:
 *   1. Paste your personal referral URL into `affiliateUrl`.
 *   2. Paste your referral code into `referralCode` (shown in the copy box).
 *   As long as `affiliateUrl` is empty, all buttons point to the official homepage.
 *
 * Market data = CoinMarketCap derivatives ranking snapshot (see site.marketDataDate).
 * Fees = standard (non-VIP) tier as published by the exchange / its CMC profile at review date.
 */

export type Fee = { maker: string; taker: string };
export type Faq = { q: string; a: string };

export type Exchange = {
  slug: string;
  name: string;
  homepage: string;
  affiliateUrl: string;
  referralCode: string;
  /** Optional separate app-download referral link for the QR code (defaults to affiliateUrl). */
  appUrl?: string;
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
  faqs: Faq[];
};

export const exchanges: Exchange[] = [
  {
    slug: "binance",
    name: "Binance",
    homepage: "https://www.binance.com/",
    affiliateUrl: "https://www.binance.com/register?ref=REFCO888",
    referralCode: "REFCO888",
    feeDiscount: "",
    referralCovers: ["Spot", "Margin", "USDⓈ-M & COIN-M futures"],
    bonusHeadline: "Up to 100 USDT fee rebate vouchers",
    benefits: ["Up to 100 USDT in trading-fee rebate vouchers for verified new users", "Binance allows a spot & margin fee rebate of up to 20% for referred users (rate set by the referrer)", "One sign-up link covers spot, margin and futures – no second code needed", "Full access to Binance's new-user tasks and promotions"],
    benefitNote: "Vouchers offset trading fees, are time-limited and require identity verification (KYC). Amounts depend on your region and the referrer's tier.",
    feesUrl: "https://www.binance.com/en/fee/schedule",
    brandColor: "#F0B90B",
    brandInk: "#1E2026",
    logo: "/logos/binance.svg",
    founded: "2017",
    headquarters: "No single disclosed HQ (global entities)",
    regulation: "Registered or licensed in several jurisdictions, e.g. Dubai (VARA), France, Italy and Poland",
    users: "280M+ registered users (reported)",
    assets: "500+ coins, 1,500+ trading pairs",
    maxLeverage: "Up to 125x (selected perpetuals)",
    spotFees: { maker: "0.10%", taker: "0.10%" },
    futuresFees: { maker: "0.02%", taker: "0.05%" },
    feeNote: "Paying fees in BNB and higher VIP tiers reduce costs further.",
    products: ["Spot", "USDⓈ-M & COIN-M futures", "Options", "Margin", "Copy trading", "Trading bots", "Earn & Launchpool"],
    market: { rank: 1, openInterestBn: 34.09, volume24hBn: 27.59, markets: 819 },
    tagline: "The deepest liquidity in crypto derivatives",
    quickAnswer:
      "Sign up through the button on this page and the referral is attached automatically – nothing to type. Verified new users can receive up to 100 USDT in trading-fee rebate vouchers, and the same referral covers spot, margin and futures trading. A referral can only be added when you create your account, not afterwards.",
    about: [
      "Binance launched in July 2017 and grew into the largest crypto exchange in the world within a year. Today it is still the clear number one in derivatives: on our review date it held more open interest than the next three exchanges on CoinMarketCap's derivatives ranking combined. For traders that matters, because deep order books mean tighter spreads and less slippage on large orders.",
      "The product range covers almost everything a trader needs under one login: USDⓈ-margined and coin-margined perpetuals, quarterly futures, European-style options, cross and isolated margin, grid and DCA bots, plus a copy-trading marketplace. Outside trading, Binance Earn, Launchpool and the BNB Chain ecosystem keep users inside the platform.",
      "Binance publishes a Merkle-tree proof of reserves and maintains SAFU, an emergency insurance fund created in 2018. In 2023 the company settled with US authorities and changed its leadership; since then it has invested heavily in compliance and obtained registrations in a growing list of countries. Binance.com does not serve US residents – they use the separate Binance.US, which does not offer derivatives.",
    ],
    highlights: [
      { title: "#1 liquidity", text: "Largest open interest and futures volume of any exchange." },
      { title: "Low futures fees", text: "0.02% maker / 0.05% taker on the standard tier, lower with BNB." },
      { title: "Everything in one app", text: "Futures, options, bots, copy trading and Earn under one account." },
    ],
    pros: [
      "Unmatched liquidity on BTC, ETH and major altcoin perpetuals",
      "Competitive standard fees with extra BNB discount",
      "Proof of reserves and the SAFU user-protection fund",
      "Huge selection of perpetual and quarterly contracts",
    ],
    cons: [
      "Not available to US residents (Binance.com) and restricted in some countries",
      "Feature-rich interface can overwhelm complete beginners",
      "History of regulatory disputes, settled in 2023",
    ],
    bestFor: ["Active futures traders who need deep liquidity", "Traders who want one platform for everything", "High-volume users who benefit from VIP tiers"],
    signupTip: "Use your real details – Binance requires identity verification (KYC) before you can trade futures or withdraw.",
    safety:
      "Binance runs monthly proof-of-reserves snapshots, offers 2FA, passkeys, anti-phishing codes and withdrawal whitelists. Enable all of them after sign-up. Remember that no centralised exchange is risk-free – only keep funds there that you actively trade with.",
    restricted: "Binance.com is not available in the United States, Ontario (Canada) and sanctioned regions. Check the country list during registration.",
    faqs: [
      { q: "What is the Binance referral code?", a: "A Binance referral code is a short ID that links your new account to the person or site that invited you. On this page the referral is attached automatically through our sign-up link, so you do not need to type anything." },
      { q: "Can I add a Binance referral code after I registered?", a: "No. Binance only accepts a referral ID during account creation. If you already have an account, the referral cannot be added retroactively." },
      { q: "What are Binance futures fees?", a: "On the standard tier, USDⓈ-M futures cost 0.02% for makers and 0.05% for takers. Paying with BNB and reaching higher VIP levels lowers the rate. Always check Binance's live fee schedule before trading." },
      { q: "What is the maximum leverage on Binance?", a: "Up to 125x on selected perpetual contracts. Maximum leverage drops as your position size grows, and many regions cap leverage for new users. High leverage dramatically increases the risk of liquidation." },
      { q: "Is Binance available in the US?", a: "No. US residents cannot use Binance.com. They can use Binance.US, a separate company that offers spot trading but no crypto derivatives." },
      { q: "Do I need KYC to trade futures on Binance?", a: "Yes. Identity verification is mandatory to trade derivatives, deposit fiat and withdraw. Have a valid ID and a selfie ready when you sign up." },
    ],
  },
  {
    slug: "okx",
    name: "OKX",
    homepage: "https://www.okx.com/",
    affiliateUrl: "https://okx.com/join/T7IRGAR3",
    referralCode: "T7IRGAR3",
    feeDiscount: "",
    referralCovers: ["Spot", "Perpetual swaps & futures", "Options"],
    bonusHeadline: "New-user bonus for spot & futures",
    benefits: ["Eligible for OKX's current new-user bonus (shown during sign-up)", "OKX lets referrers add a fee rebate for invited users (rate set by the referrer)", "One referral covers spot, futures, perpetual swaps and options", "Unified account: use one balance for spot and derivatives"],
    benefitNote: "New-user rewards vary by region and require identity verification and a first deposit or trade.",
    feesUrl: "https://www.okx.com/fees",
    brandColor: "#000000",
    brandInk: "#FFFFFF",
    logo: "/logos/okx.svg",
    founded: "2017",
    headquarters: "Global entities (Seychelles, Bahamas), offices in Dubai, Singapore and Hong Kong",
    regulation: "Licences include Dubai (VARA) and an EU MiCA licence via Malta",
    users: "Tens of millions of users worldwide",
    assets: "350+ coins, 500+ trading pairs",
    maxLeverage: "Up to 125x (selected perpetuals)",
    spotFees: { maker: "0.08%", taker: "0.10%" },
    futuresFees: { maker: "0.02%", taker: "0.05%" },
    feeNote: "Fees fall with OKB holdings and 30-day trading volume.",
    products: ["Spot", "Perpetual swaps", "Expiry futures", "Options", "Unified trading account", "Trading bots", "OKX Wallet (self-custody)"],
    market: { rank: 2, openInterestBn: 7.86, volume24hBn: 10.93, markets: 553 },
    tagline: "Pro-grade derivatives with a unified account",
    quickAnswer:
      "Register on OKX through the button on this page and the referral is applied automatically. You stay eligible for OKX's new-user bonus, and the same link covers spot, futures, perpetual swaps and options. The referral must be added at registration; it cannot be linked later.",
    about: [
      "OKX started in 2017 as OKEx and rebranded in 2022. It is consistently the second-largest derivatives venue by trading volume and is especially popular with professional and API traders thanks to its unified trading account, which lets one balance margin spot, futures, perpetuals and options at the same time.",
      "Options are a real strength: OKX runs one of the most liquid crypto options books outside Deribit, alongside perpetual swaps and dated futures. Built-in grid, DCA and arbitrage bots, a copy-trading hub and the self-custody OKX Wallet round out the offer.",
      "OKX publishes monthly proof-of-reserves reports that users can verify themselves. Its European arm holds a MiCA licence issued in Malta, and the group is licensed in Dubai. In February 2025 OKX resolved a US Department of Justice case relating to past onboarding of US customers. Derivatives on OKX.com are not available to US residents.",
    ],
    highlights: [
      { title: "Unified account", text: "One margin balance for spot, futures, swaps and options." },
      { title: "Strong options book", text: "One of the most liquid crypto options markets." },
      { title: "Monthly PoR", text: "Self-verifiable proof-of-reserves every month." },
    ],
    pros: [
      "Excellent liquidity in perpetuals and options",
      "Capital-efficient unified/portfolio margin",
      "Powerful API and built-in trading bots",
      "MiCA-licensed entity for EU users",
    ],
    cons: [
      "Advanced interface has a learning curve",
      "Product availability varies strongly by country",
      "Derivatives not offered to US residents",
    ],
    bestFor: ["Experienced derivatives and options traders", "API / algorithmic traders", "Users who want capital-efficient portfolio margin"],
    signupTip: "OKX shows different products depending on your verified country – complete KYC first to see what is available to you.",
    safety:
      "OKX offers 2FA, passkeys, anti-phishing codes, withdrawal address whitelists and device management. Its proof of reserves is published monthly with a Merkle tree you can check against your own balance.",
    restricted: "Derivatives on OKX.com are unavailable in the US and several other regions; EU users are onboarded through OKX Europe with a product set allowed under MiCA.",
    faqs: [
      { q: "What is the OKX referral code?", a: "It is an invitation ID that connects your new OKX account to the inviter. Using the sign-up button on this page applies it automatically." },
      { q: "Can I enter an OKX referral code after sign-up?", a: "No. The referral relationship is created at registration and cannot be added to an existing account." },
      { q: "What are OKX trading fees?", a: "On the standard tier spot fees are 0.08% maker / 0.10% taker and perpetual swaps 0.02% maker / 0.05% taker. Holding OKB or trading more lowers your tier." },
      { q: "Does OKX offer options trading?", a: "Yes. OKX lists BTC, ETH and other crypto options and lets you margin them together with futures in the unified account." },
      { q: "Is OKX regulated in Europe?", a: "OKX Europe holds a MiCA licence issued in Malta, which allows it to serve customers across the European Economic Area. Product availability under MiCA can differ from the global site." },
      { q: "Is OKX safe?", a: "OKX publishes monthly proof of reserves and offers strong account security tools. As with any exchange, enable 2FA and only keep trading capital on the platform." },
    ],
  },
  {
    slug: "bybit",
    name: "Bybit",
    homepage: "https://www.bybit.com/",
    affiliateUrl: "https://www.bybit.com/invite?ref=VN3KGLE&medium=referral&utm_campaign=evergreen&share_to=link",
    referralCode: "VN3KGLE",
    feeDiscount: "",
    referralCovers: ["Spot", "Derivatives", "Options", "Copy trading & bots"],
    bonusHeadline: "Welcome rewards for new users",
    benefits: ["Welcome rewards for referred users – e.g. 50 USDT after your first trade of $50+ within 14 days, plus more for trading volume", "Rewards count spot, derivatives and options trading", "One referral covers spot, derivatives, options, copy trading and bots", "Bonus vouchers can be used to reduce trading fees or as margin"],
    benefitNote: "Bybit's welcome tasks and amounts change frequently and depend on your region; the live offer is shown in the Rewards Hub after sign-up. KYC required.",
    feesUrl: "https://www.bybit.com/en/help-center/article/Trading-Fee-Structure",
    brandColor: "#F7A600",
    brandInk: "#17181E",
    logo: "/logos/bybit.svg",
    founded: "2018",
    headquarters: "Dubai, UAE",
    regulation: "EU MiCA licence via Austria (Bybit EU); additional registrations in several countries",
    users: "Tens of millions of users worldwide",
    assets: "Hundreds of coins, 300+ spot pairs",
    maxLeverage: "Up to 100x",
    spotFees: { maker: "0.10%", taker: "0.10%" },
    futuresFees: { maker: "0.01%", taker: "0.06%" },
    feeNote: "VIP and Pro tiers go down to 0% maker on derivatives.",
    products: ["USDT & USDC perpetuals", "Inverse contracts", "Options", "Spot", "Copy trading", "Trading bots", "Unified trading account"],
    market: { rank: 3, openInterestBn: 6.62, volume24hBn: 6.77, markets: 792 },
    tagline: "Fast, derivatives-first trading engine",
    quickAnswer:
      "Open your Bybit account with the button on this page and the referral is linked automatically. New users get access to Bybit's task-based welcome rewards, and the referral covers spot, derivatives, options and copy trading. A referral cannot be added after the account has been created.",
    about: [
      "Bybit was founded in 2018 as a derivatives-only exchange and still feels like one: the matching engine is fast, the order types are built for active traders and the app is among the most polished in the industry. Today it ranks among the top three derivatives venues by volume and open interest.",
      "Beyond USDT and USDC perpetuals, Bybit offers inverse (coin-margined) contracts, options, a unified trading account, copy trading and a wide set of trading bots. Its spot market has grown quickly, and Bybit EU serves European customers under a MiCA licence obtained in Austria.",
      "In February 2025 Bybit suffered one of the largest hacks in crypto history when attackers drained an Ethereum cold wallet. The exchange covered the loss in full from its own reserves and partner loans, kept withdrawals open and published proof of reserves shortly after – a response that was widely credited for preventing a crisis.",
    ],
    highlights: [
      { title: "Derivatives DNA", text: "Built for futures traders from day one, with a fast matching engine." },
      { title: "Low maker fees", text: "0.01% maker / 0.06% taker on derivatives for standard users." },
      { title: "Full reimbursement", text: "Covered 100% of customer funds after the 2025 hack." },
    ],
    pros: [
      "Fast, stable engine and top-tier mobile app",
      "Wide range of perpetual, inverse and options contracts",
      "Strong copy-trading and bot ecosystem",
      "MiCA-licensed EU entity",
    ],
    cons: [
      "Major security incident in 2025 (users were fully reimbursed)",
      "Not available in the US and several other countries",
      "Maximum leverage lower than some offshore rivals",
    ],
    bestFor: ["Active perpetual futures traders", "Mobile-first traders", "Users who want copy trading with derivatives"],
    signupTip: "European users are routed to Bybit EU automatically – the product list there follows MiCA rules.",
    safety:
      "Bybit uses multi-signature cold wallets, proof of reserves, 2FA, withdrawal whitelists and anti-phishing codes. After the 2025 incident it reworked its wallet infrastructure and partner security reviews.",
    restricted: "Bybit does not serve the US, the UK (for derivatives), mainland China, Singapore and sanctioned regions. Check the list during sign-up.",
    faqs: [
      { q: "What is the Bybit referral code?", a: "A Bybit referral code links your new account to an inviter so you can receive any new-user rewards on offer. Our button applies the referral automatically." },
      { q: "Can I add a Bybit referral code later?", a: "No. Bybit only records referrals during registration." },
      { q: "What are Bybit futures fees?", a: "For standard users derivatives cost about 0.01% maker / 0.06% taker; spot is 0.10% / 0.10%. VIP and Pro tiers are cheaper. Check Bybit's fee page for live rates." },
      { q: "Was Bybit hacked?", a: "Yes. In February 2025 attackers stole ETH from a Bybit cold wallet. Bybit replaced the funds in full, kept withdrawals running and published updated proof of reserves. Customer balances were not reduced." },
      { q: "What leverage does Bybit offer?", a: "Up to 100x on major perpetual contracts, with lower limits for larger positions and in some regions." },
      { q: "Is Bybit available in Europe?", a: "Yes, through Bybit EU, which operates under a MiCA licence from Austria. Some products may differ from the global platform." },
    ],
  },
  {
    slug: "bitget",
    name: "Bitget",
    homepage: "https://www.bitget.com/",
    affiliateUrl: "https://share.bitget.com/u/19MAJ6SK?clacCode=JZVEV1M3",
    referralCode: "JZVEV1M3",
    feeDiscount: "",
    referralCovers: ["Spot", "USDT-M & Coin-M futures", "Copy trading", "Stock perps & CFDs"],
    bonusHeadline: "New-user welcome package",
    benefits: ["Access to Bitget's new-user welcome package in the Rewards Center", "One referral covers spot, futures, copy trading and stock perps", "Spot fees drop to 0.08% when you pay with BGB", "Copy top traders from day one"],
    benefitNote: "Welcome rewards are task-based (KYC, first deposit, first trades) and vary by region. Bonuses are typically usable as trading vouchers, not as withdrawable cash.",
    feesUrl: "https://www.bitget.com/fee",
    brandColor: "#00C2D1",
    brandInk: "#0B1B24",
    logo: "/logos/bitget.svg",
    founded: "2018",
    headquarters: "Seychelles (registered)",
    regulation: "VASP registrations in Poland, Lithuania and Bulgaria, plus El Salvador",
    users: "Tens of millions of users worldwide",
    assets: "600+ coins, 700+ spot pairs",
    maxLeverage: "Up to 150x (selected contracts)",
    spotFees: { maker: "0.10%", taker: "0.10%" },
    futuresFees: { maker: "0.02%", taker: "0.06%" },
    feeNote: "Paying spot fees in BGB cuts them to 0.08%.",
    products: ["USDT-M & Coin-M futures", "Spot", "Copy trading", "Trading bots", "Tokenized stocks & CFDs", "Earn", "Bitget Wallet"],
    market: { rank: 5, openInterestBn: 4.26, volume24hBn: 3.45, markets: 739 },
    tagline: "The home of crypto copy trading",
    quickAnswer:
      "Create your Bitget account with the button on this page and the referral is added automatically. You get access to Bitget's new-user welcome package, and the same referral covers spot, futures and copy trading. Referrals can only be set at registration.",
    about: [
      "Bitget launched in 2018 and made its name with copy trading: users can follow experienced futures traders and mirror their positions automatically. That feature, combined with an aggressive listing policy, pushed Bitget into the top five derivatives exchanges worldwide.",
      "The platform offers USDT- and coin-margined futures, spot, grid and martingale bots, savings products and – unusually for a crypto exchange – tokenized stocks and CFDs on traditional assets. The self-custody Bitget Wallet and the BGB token complete the ecosystem.",
      "Bitget maintains a user Protection Fund that it publicly reports and publishes monthly proof of reserves. It holds VASP registrations in several EU countries. Bitget does not serve the US, Canada (Ontario), Singapore and other restricted regions.",
    ],
    highlights: [
      { title: "Copy trading leader", text: "Follow top futures traders and mirror their trades automatically." },
      { title: "Protection Fund", text: "A dedicated fund to cover users in extreme events." },
      { title: "Beyond crypto", text: "Tokenized stocks and CFDs alongside crypto futures." },
    ],
    pros: [
      "Best-in-class copy trading for futures",
      "Large selection of futures markets including new listings",
      "Protection Fund and monthly proof of reserves",
      "Easy interface for intermediate traders",
    ],
    cons: [
      "Fewer full licences than the largest competitors",
      "Copy trading can create a false sense of safety",
      "Not available in the US",
    ],
    bestFor: ["Traders who want to copy experienced futures traders", "Altcoin futures traders", "Users who also want exposure to stocks via crypto"],
    signupTip: "If you plan to copy trade, finish KYC first – it is required before you can follow lead traders with futures.",
    safety:
      "Bitget offers 2FA, passkeys, anti-phishing codes and withdrawal whitelists, publishes proof of reserves and keeps a Protection Fund. Copy-trading results are past performance and do not guarantee future returns.",
    restricted: "Bitget is not available in the US, Canada (Ontario), Singapore, Hong Kong and sanctioned regions.",
    faqs: [
      { q: "What is the Bitget referral code?", a: "It is an invitation code that ties your account to the inviter. Our sign-up button applies it automatically, so there is no need to copy anything." },
      { q: "Can I add a Bitget referral code after registering?", a: "No – Bitget only accepts referral codes at account creation." },
      { q: "What are Bitget futures fees?", a: "Standard futures fees are 0.02% maker / 0.06% taker. Spot fees are 0.10%, or 0.08% when paid in BGB." },
      { q: "How does Bitget copy trading work?", a: "You choose a lead trader, set the amount and risk limits, and Bitget mirrors that trader's futures or spot positions in your account. The lead trader earns a share of your profits." },
      { q: "What is the Bitget Protection Fund?", a: "A reserve fund Bitget set aside to compensate users in extreme situations such as a security breach. Its balance is reported publicly." },
      { q: "Is Bitget available in the US?", a: "No. Bitget does not accept US residents." },
    ],
  },
  {
    slug: "gate",
    name: "Gate",
    homepage: "https://www.gate.com/",
    affiliateUrl: "https://www.gate.com/signup/VAAXAW9YVA?ref_type=103",
    referralCode: "VAAXAW9YVA",
    feeDiscount: "",
    referralCovers: ["Spot", "Margin", "Perpetual & delivery futures", "Alpha"],
    bonusHeadline: "Up to 100 USDT in vouchers",
    benefits: ["Invited friends can earn up to 100 USDT in vouchers", "One referral covers spot, margin, futures and Gate Alpha", "Access to Gate's new-user challenges and campaigns", "Trade 5,000+ assets with a single account"],
    benefitNote: "Vouchers are task-based (KYC, first deposit and trades), time-limited and vary by region and campaign.",
    feesUrl: "https://www.gate.com/fee",
    brandColor: "#2354E6",
    brandInk: "#FFFFFF",
    logo: "/logos/gate.svg",
    founded: "2013",
    headquarters: "Global entities; licensed in multiple regions",
    regulation: "Registrations or licences in Malta, Italy, Gibraltar, the Bahamas, Hong Kong, Dubai (VARA) and Australia (AUSTRAC)",
    users: "60M+ users (reported)",
    assets: "5,000+ crypto assets",
    maxLeverage: "Up to 100x (selected perpetuals)",
    spotFees: { maker: "0.20%", taker: "0.20%" },
    futuresFees: { maker: "0.02%", taker: "0.05%" },
    feeNote: "Gate updated its spot schedule in 2026; GT holders and VIPs pay considerably less.",
    products: ["Perpetual futures", "Delivery futures", "Options", "Spot", "Copy trading", "Startup launchpad", "Earn"],
    market: { rank: 4, openInterestBn: 13.27, volume24hBn: 5.4, markets: 824 },
    tagline: "The widest altcoin selection, since 2013",
    quickAnswer:
      "Sign up on Gate through the button on this page and the referral is linked automatically. Invited new users can earn up to 100 USDT in vouchers, and the same referral covers spot, margin and futures trading. The referral must be used at sign-up.",
    about: [
      "Gate is one of the oldest exchanges still operating: it started in 2013 as Bter, rebranded to Gate.io in 2017 and now runs as Gate. Its trademark is breadth – more than 5,000 crypto assets, often listed long before other large exchanges pick them up.",
      "On the derivatives side Gate carries the second-largest open interest on CoinMarketCap's ranking, with USDT-margined perpetuals on hundreds of altcoins, delivery futures and options. Copy trading, a launchpad for new tokens and a range of Earn products sit next to the trading screens.",
      "Gate was among the first exchanges to publish a proof of reserves (in 2020) and has expanded its licence footprint to Malta, Italy, Gibraltar, the Bahamas, Hong Kong, Dubai and Australia. Gate does not serve users in the US.",
    ],
    highlights: [
      { title: "5,000+ assets", text: "One of the largest altcoin catalogues of any exchange." },
      { title: "Huge open interest", text: "Second-highest OI on CoinMarketCap's derivatives ranking." },
      { title: "Early PoR", text: "Publishing proof of reserves since 2020." },
    ],
    pros: [
      "Futures on many altcoins you won't find elsewhere",
      "Very high open interest and active order books",
      "Long track record since 2013",
      "Growing list of regional licences",
    ],
    cons: [
      "Higher standard spot fees than most rivals",
      "Interface is dense and busy",
      "Smaller tokens carry high volatility and liquidity risk",
    ],
    bestFor: ["Altcoin futures traders", "Early-listing hunters", "Traders who value breadth over simplicity"],
    signupTip: "Reduce trading costs by holding a small amount of GT or by checking Gate's current fee promotions after sign-up.",
    safety:
      "Gate offers 2FA, anti-phishing codes, withdrawal whitelists and fund passwords, and publishes regular proof of reserves. With small-cap altcoins, always check liquidity before opening leveraged positions.",
    restricted: "Gate is not available in the US and several other jurisdictions; some regions are served through locally licensed entities.",
    faqs: [
      { q: "What is the Gate referral code?", a: "It is an invitation code that links your new Gate account to the inviter. The button on this page applies it automatically." },
      { q: "Is Gate the same as Gate.io?", a: "Yes. Gate.io rebranded to Gate and moved to gate.com; it is the same exchange founded in 2013 as Bter." },
      { q: "What are Gate futures fees?", a: "Standard perpetual futures fees are roughly 0.02% maker / 0.05% taker. Spot fees are higher on the base tier but fall with GT holdings and VIP level." },
      { q: "Can I add a referral code on Gate after sign-up?", a: "No. Gate attaches referrals only during registration." },
      { q: "Is Gate available in the US?", a: "No, Gate does not accept US residents." },
      { q: "Why trade futures on Gate?", a: "Mainly for choice: Gate lists perpetual contracts on many smaller altcoins and has very high open interest across its markets." },
    ],
  },
  {
    slug: "kucoin",
    name: "KuCoin",
    homepage: "https://www.kucoin.com/",
    affiliateUrl: "https://www.kucoin.com/r/rf/QBSS4BT7",
    referralCode: "QBSS4BT7",
    feeDiscount: "",
    referralCovers: ["Spot", "Futures", "Margin", "Trading bots"],
    bonusHeadline: "Up to 3,200 USDT newcomer benefits",
    benefits: ["Up to 3,200 USDT in newcomer benefits via KuCoin Rewards", "KuCoin supports a fee cashback for invited users (rate set by the referrer)", "One referral covers spot, futures and margin", "Free access to KuCoin's trading bots"],
    benefitNote: "Newcomer benefits are task-based coupons and bonuses that require KYC, deposits and trading volume; most users receive a fraction of the maximum.",
    feesUrl: "https://www.kucoin.com/vip/privilege",
    brandColor: "#23AF91",
    brandInk: "#FFFFFF",
    logo: "/logos/kucoin.svg",
    founded: "2017",
    headquarters: "Seychelles (registered)",
    regulation: "Registrations in several countries; EU access depends on local status",
    users: "45M+ users (reported)",
    assets: "1,000+ crypto assets",
    maxLeverage: "Up to 125x (selected contracts)",
    spotFees: { maker: "0.10%", taker: "0.10%" },
    futuresFees: { maker: "0.02%", taker: "0.06%" },
    feeNote: "Paying with KCS and higher VIP levels lower fees (up to 75% off).",
    products: ["USDT & coin-margined futures", "Spot", "Margin", "Trading bots", "Copy trading", "Earn", "KuCoin Web3 Wallet"],
    market: { rank: 8, openInterestBn: 3.13, volume24hBn: 1.59, markets: 671 },
    tagline: "Altcoins and trading bots for everyone",
    quickAnswer:
      "Register on KuCoin via the button on this page and the referral is applied automatically. New users can unlock up to 3,200 USDT in newcomer benefits, and the referral covers spot, futures and margin trading. Referral codes cannot be added once an account exists.",
    about: [
      "KuCoin launched in 2017 and branded itself 'The People's Exchange'. It built a loyal following by listing promising altcoins early and by making automated trading accessible: its built-in grid, DCA and futures bots are among the easiest to set up anywhere.",
      "Derivatives on KuCoin include USDT- and coin-margined perpetuals with up to 125x leverage on selected pairs. The exchange also offers margin, copy trading, staking and savings products, and the KCS token for fee discounts.",
      "In January 2025 KuCoin resolved a US Department of Justice case and agreed to exit the US market. It has made identity verification mandatory, publishes proof of reserves and runs an insurance fund. KuCoin recovered most funds after a 2020 hack and compensated affected users.",
    ],
    highlights: [
      { title: "Easy trading bots", text: "Grid, DCA and futures bots set up in a few clicks." },
      { title: "1,000+ assets", text: "Large altcoin catalogue with early listings." },
      { title: "KCS discounts", text: "Fee reductions for KCS holders and VIPs." },
    ],
    pros: [
      "Beginner-friendly automated trading",
      "Broad altcoin and futures selection",
      "Low standard futures maker fee",
      "Clean, intuitive app",
    ],
    cons: [
      "Lower futures volume than the top five",
      "Exited the US after a 2025 settlement",
      "Fewer licences than tier-1 competitors",
    ],
    bestFor: ["Traders who want to automate with bots", "Altcoin enthusiasts", "Intermediate futures traders"],
    signupTip: "KYC is mandatory on KuCoin – complete it right after sign-up to unlock futures and bots.",
    safety:
      "KuCoin provides 2FA, trading passwords, anti-phishing phrases, withdrawal whitelists and proof of reserves. Bots automate execution, not risk management – always set a stop condition.",
    restricted: "KuCoin is not available in the US, Canada (Ontario) and several other jurisdictions.",
    faqs: [
      { q: "What is the KuCoin referral code?", a: "A short invitation code that links your KuCoin account to the inviter. Our sign-up button applies it automatically." },
      { q: "Can I add a KuCoin referral code after sign-up?", a: "No. KuCoin only records referral codes during registration." },
      { q: "What are KuCoin futures fees?", a: "Standard futures fees are 0.02% maker / 0.06% taker, and spot is 0.10%. KCS and VIP levels reduce them." },
      { q: "Is KuCoin available in the US?", a: "No. After its January 2025 settlement KuCoin stopped serving US customers." },
      { q: "Does KuCoin require KYC?", a: "Yes. Identity verification is mandatory to trade, use futures and withdraw." },
      { q: "Are KuCoin trading bots free?", a: "The bots themselves are free to use; you pay the normal trading fees on every order the bot places." },
    ],
  },
  {
    slug: "mexc",
    name: "MEXC",
    homepage: "https://www.mexc.com/",
    affiliateUrl: "https://s.mexc.com/referral/ELJPr0e2XR",
    referralCode: "4E3xM",
    feeDiscount: "",
    referralCovers: ["Spot", "USDT-M & Coin-M futures", "Copy trading"],
    bonusHeadline: "Welcome gifts of up to 10,000 USDT",
    benefits: ["New-user welcome gifts of up to 10,000 USDT (futures bonus, vouchers, copy-trade bonus)", "One referral covers spot and futures trading", "0% maker fees on spot and futures (standard tier)", "Early access to new token listings"],
    benefitNote: "Welcome gifts are task-based, require KYC and qualifying deposits/volume, expire after 15 days and are not withdrawable – only profits made with them are. Amounts vary by region.",
    feesUrl: "https://www.mexc.com/fee",
    brandColor: "#1972E2",
    brandInk: "#FFFFFF",
    logo: "/logos/mexc.svg",
    founded: "2018",
    headquarters: "Seychelles (registered)",
    regulation: "Registrations in several jurisdictions; restricted in the US, Singapore and mainland China",
    users: "40M+ users (reported)",
    assets: "3,000+ crypto assets",
    maxLeverage: "Up to 500x (selected perpetuals)",
    spotFees: { maker: "0.00%", taker: "0.05%" },
    futuresFees: { maker: "0.00%", taker: "0.01%" },
    feeNote: "MEXC regularly runs zero-fee campaigns; rates may differ by region.",
    products: ["USDT-M & Coin-M futures", "Spot", "Margin", "Copy trading", "Launchpad", "Earn"],
    market: { rank: 7, openInterestBn: 6.14, volume24hBn: 6.14, markets: 846 },
    tagline: "Lowest fees and the fastest new listings",
    quickAnswer:
      "Create your MEXC account through the button on this page and the referral is added automatically. New users can unlock welcome gifts of up to 10,000 USDT, and the same referral covers spot and futures trading. A referral can only be set when you sign up.",
    about: [
      "MEXC was founded in 2018 and competes on two things: price and speed of listing. Its standard fees are among the lowest in the market – zero maker fees on spot and futures for regular users at our review date – and new tokens often appear on MEXC days or weeks before larger exchanges list them.",
      "The futures platform offers more than 800 markets on CoinMarketCap's count, USDT- and coin-margined contracts and leverage of up to 500x on selected pairs. Copy trading, a launchpad and Earn products are also available.",
      "MEXC holds fewer licences than the tier-1 exchanges and does not serve users in the US, Singapore or mainland China. Its main appeal is cost: for high-frequency futures traders, the zero-maker fee can make a meaningful difference.",
    ],
    highlights: [
      { title: "0% maker fees", text: "Zero maker fees on spot and futures on the standard tier." },
      { title: "Fast listings", text: "New tokens and futures markets listed very early." },
      { title: "846 markets", text: "The largest number of derivatives markets in the top ten." },
    ],
    pros: [
      "Among the lowest trading fees in the industry",
      "Very early access to new tokens and contracts",
      "Huge number of perpetual markets",
      "Simple onboarding",
    ],
    cons: [
      "Fewer regulatory licences than top-tier rivals",
      "500x leverage is extremely risky",
      "Many small-cap markets carry high volatility and thin liquidity",
    ],
    bestFor: ["Cost-sensitive, high-frequency futures traders", "Traders hunting new listings", "Experienced users comfortable with offshore venues"],
    signupTip: "Complete identity verification to raise withdrawal limits and unlock the full futures product range in your region.",
    safety:
      "MEXC offers 2FA, anti-phishing codes and withdrawal whitelists and publishes proof of reserves. Because it lists very new tokens, check liquidity and contract specs carefully before trading them with leverage.",
    restricted: "MEXC does not serve the US, Singapore, mainland China, Canada (Ontario) and sanctioned regions.",
    faqs: [
      { q: "What is the MEXC referral code?", a: "It is an invitation code that connects your account to the inviter so you can claim any new-user rewards. Our sign-up button applies it automatically." },
      { q: "Can I use a MEXC referral code after registering?", a: "No. MEXC only accepts referral codes at sign-up." },
      { q: "What are MEXC futures fees?", a: "At our review date the standard tier paid 0.00% maker and about 0.01% taker on futures, and 0% maker / 0.05% taker on spot. MEXC changes fees with campaigns, so check its fee page." },
      { q: "Does MEXC really offer 500x leverage?", a: "Yes, on selected perpetual contracts and only for small position sizes. Leverage this high means a 0.2% move against you can liquidate the position." },
      { q: "Is MEXC available in the US?", a: "No. MEXC does not accept residents of the US, Singapore or mainland China." },
      { q: "Is MEXC safe?", a: "MEXC publishes proof of reserves and provides standard security tools. It holds fewer licences than tier-1 exchanges, so use strong account security and do not store long-term savings there." },
    ],
  },
];

export const exchangePath = (slug: string) => `/${slug}-referral-code`;
export const getExchangeByPathSlug = (pathSlug: string) =>
  exchanges.find((e) => `${e.slug}-referral-code` === pathSlug);
export const getExchange = (slug: string) => exchanges.find((e) => e.slug === slug);
/** The URL every CTA uses: affiliate link if set, otherwise the official homepage. */
export const outboundUrl = (e: Exchange) => e.affiliateUrl || e.homepage;
export const hasAffiliate = (e: Exchange) => Boolean(e.affiliateUrl);
/** URL encoded in the "scan with your phone" QR code. */
export const qrUrl = (e: Exchange) => e.appUrl || e.affiliateUrl;
