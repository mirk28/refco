import type { AlternativesInfo } from "../types";

/**
 * Products, countries and regional platforms checked against gate.com on 2026-11-16 (global site, logged out).
 * Everything else restates facts from `../exchanges/gate.ts`.
 */
export const gate: AlternativesInfo = {
  role: "Largest altcoin selection",
  pick: "Gate lists the most assets (5,400+) and goes up to 200x on the BTCUSDT perpetual",
  pitch:
    "Gate lists more than 5,400 digital assets – one of the largest altcoin catalogues of any exchange – and offers up to 200x on the BTCUSDT perpetual at 0.02% maker / 0.05% taker. Through our link Gate shows a 10% commission reward on your trading fees for one year, and it has published proof of reserves since 2020.",
  chooseIf: [
    "You trade altcoins and want tokens and futures you will not find on other large exchanges",
    "You want part of your fees back – Gate's sign-up page shows a 10% commission reward for one year",
    "You value a long track record: founded in 2013, proof of reserves since 2020 and 118% at the latest batch",
  ],
  thinkTwiceIf: [
    "You live in a country the global site excludes – the list includes the US, the UK, Canada, Germany, France, Spain and the Netherlands, and the regional Gate sites that serve some of them offer fewer products",
    "You might forget the referral link – Gate documents no way to add a code later",
    "You mainly trade small tokens with leverage – they carry high volatility and liquidity risk",
  ],
  intro:
    "Gate – known as Gate.io until 2025 – has one of the broadest altcoin catalogues of any exchange and has been running since 2013. People look for a Gate alternative mainly because the global site is closed to a long list of countries, because the regional Gate sites offer fewer products, or because they would rather have a simpler platform than the broadest one. This page compares the six closest alternatives with Gate, using figures from the exchanges' own sites.",
  reasons: [
    {
      title: "The global site excludes many countries",
      text: "Gate's User Agreement (updated 22 July 2026) names 36 restricted locations, among them the United States, the United Kingdom, Canada, Germany, France, Spain, the Netherlands, Austria, India, Japan, Singapore, Hong Kong, South Korea and the United Arab Emirates – and says the list is not exhaustive.",
    },
    {
      title: "Regional sites offer less",
      text: "Residents of the EEA, the US, the UK, Australia, Dubai and Japan are served by separate Gate platforms. At our check Gate EU showed spot, convert, OTC, staking and a card, and Gate UK showed spot, convert and OTC.",
    },
    {
      title: "Referrals do not cross sites",
      text: "Gate does not support cross-site invitations: a referral made on the global site is not carried over to a regional Gate site. In the EEA, commission is paid on spot trading only.",
    },
    {
      title: "No way to add a referral code later",
      text: "Gate publishes no way to add a referral code to an existing account, and its own guide warns that the referral may not be recorded if you register without the link.",
    },
    {
      title: "Small tokens are risky",
      text: "With more than 5,400 assets, many markets are small. Gate's smaller tokens carry high volatility and liquidity risk, especially when traded with leverage.",
    },
    {
      title: "Short deadlines for new accounts",
      text: "Newbie tasks must be completed within 15 days of sign-up, and new futures accounts are limited to 20x leverage for their first three days.",
    },
  ],
  stayIf: [
    "You trade tokens that only Gate lists",
    "You are inside your first year – the 10% fee rebate from Super Commission runs for one year",
    "You pay spot fees in GT, which lowers the standard rate from 0.10% to 0.09%",
  ],
  faqs: [
    {
      q: "Is Gate.io the same as Gate?",
      a: "Yes. Gate.io adopted the international domain gate.com in May 2025; it is the same exchange, founded in 2013. Anyone searching for Gate.io alternatives is looking for alternatives to Gate.",
    },
    {
      q: "Is Gate available in the US?",
      a: "Not on the global site: the User Agreement lists the United States as a restricted location and bars US persons. US residents are served by Gate US, Inc. (gate.com/en-us), which holds state money-transmitter licences and does not operate in New York, Texas, Washington, North Carolina, Louisiana, Alaska and the US Virgin Islands.",
    },
    {
      q: "Does Gate have a MiCA licence?",
      a: "Yes, for its European platform. Gate Technology Ltd in Malta is authorised by the Malta Financial Services Authority as a crypto-asset service provider under MiCA and serves EEA residents through gate.com/en-eu. It is separate from the global site, and referral commission is paid on spot trading only there.",
    },
  ],
  reserves: "118% across 496 assets (batch of 18 October 2026)",
  fund: "Gate SAFU fund of $500 million (as of 8 August 2025)",
  features: {
    copyTrading: { has: true, note: "Futures copy trading, plus CFD and stock tabs" },
    tradingBots: { has: true, note: "Spot and futures grid, DCA, margin grid, rebalance and arbitrage bots" },
    options: { has: true, note: "Crypto options on 12 underlyings such as BTC, ETH and SOL" },
    demoTrading: { has: true, note: "Demo trading with virtual funds on testnet.gate.com" },
    margin: { has: true, note: "Isolated and cross margin" },
    p2p: { has: true, note: "P2P Express for USDT, USDC, BTC and DOGE" },
    fiat: { has: true, note: "Cards, bank transfer, Apple Pay, Google Pay, PIX and PromptPay" },
    earn: { has: true, note: "Simple Earn, staking, dual investment and auto-invest" },
    launchpad: { has: true, note: "Launchpad, Launchpool and CandyDrop" },
    web3Wallet: { has: true, note: "Gate Wallet, self-custodial, as app and Chrome extension" },
    card: { has: true, note: "Gate Card on Visa or Mastercard, in non-restricted countries only" },
  },
  countries: {
    us: { status: "regional", note: "Gate US, not in New York, Texas and five other jurisdictions" },
    uk: { status: "regional", note: "Gate UK, with spot, convert and OTC only" },
    ca: { status: "restricted" },
    de: { status: "regional", note: "Gate EU" },
    fr: { status: "regional", note: "Gate EU" },
    nl: { status: "regional", note: "Gate EU" },
    es: { status: "regional", note: "Gate EU" },
    it: { status: "regional", note: "Gate EU" },
    au: { status: "regional", note: "Gate Australia" },
    jp: { status: "regional", note: "Gate Japan, a separate company" },
    sg: { status: "restricted" },
    hk: { status: "restricted" },
    in: { status: "restricted" },
    ae: { status: "regional", note: "Gate Dubai" },
  },
  regional:
    "Gate serves several regions through separate platforms: Gate EU (Gate Technology Ltd, Malta, authorised by the MFSA under MiCA and passported across the EEA), Gate US (Gate US, Inc., state money-transmitter licences; not in New York, Texas, Washington, North Carolina, Louisiana, Alaska and the US Virgin Islands), Gate UK (spot, convert and OTC), Gate Australia (registered with AUSTRAC), Gate Dubai (Gate Technology FZE, licensed by VARA) and Gate Japan. The regional sites show fewer products than the global one, and referrals are not carried across sites.",
  mica: "Gate Technology Ltd, Malta, authorised by the MFSA",
  formerName: "Gate.io",
  sources: [
    { label: "Gate: Copy trading", url: "https://www.gate.com/copytrading" },
    { label: "Gate: Trading bots", url: "https://www.gate.com/crypto-trading-bots" },
    { label: "Gate: Options", url: "https://www.gate.com/options/BTC_USDT" },
    { label: "Gate: Demo trading (testnet)", url: "https://testnet.gate.com/futures/USDT/BTC_USDT" },
    { label: "Gate: Margin trading", url: "https://www.gate.com/help/trade/margin-trading/16634" },
    { label: "Gate: P2P Express", url: "https://www.gate.com/p2p-express" },
    { label: "Gate: Buying crypto by card or bank transfer", url: "https://www.gate.com/crypto/buy-USD-USDT" },
    { label: "Gate: Earn", url: "https://www.gate.com/earn" },
    { label: "Gate: Launchpad", url: "https://www.gate.com/launchpad" },
    { label: "Gate Wallet", url: "https://web3.gate.com/" },
    { label: "Gate: Gate Card", url: "https://www.gate.com/card" },
    { label: "Gate: SAFU user asset security fund", url: "https://www.gate.com/safu-user-assets-security-fund" },
    { label: "Gate EU", url: "https://www.gate.com/en-eu" },
    { label: "Gate US: Licences", url: "https://www.gate.com/en-us/legal/licenses" },
    { label: "Gate UK", url: "https://www.gate.com/en-uk" },
    { label: "Gate Australia", url: "https://www.gate.com/en-au" },
    { label: "Gate Dubai", url: "https://www.gate.com/en-dubai" },
    { label: "Gate Japan", url: "https://www.gate.com/ja-jp/about-us" },
  ],
};
