import type { AlternativesInfo } from "../types";

/**
 * Products, countries and regional platforms checked against binance.com on 2026-11-16 (global site, logged out).
 * Everything else restates facts from `../exchanges/binance.ts`.
 */
export const binance: AlternativesInfo = {
  role: "Deepest liquidity",
  pick: "Binance has the deepest derivatives market and lets you bind a forgotten referral code within 30 days",
  pitch:
    "Binance is the largest exchange on CoinMarketCap's derivatives ranking and the reference for liquidity: tight spreads on BTC, ETH and large-cap perpetuals, 0.02% maker / 0.05% taker on futures and up to 150x on BTCUSDT and ETHUSDT. Spot, margin, futures, options, bots and copy trading run under one login.",
  chooseIf: [
    "You trade size and need the tightest spreads on BTC, ETH and large-cap perpetuals",
    "You want spot, margin, futures, options, bots and copy trading under one login",
    "You registered without a referral code – Binance lets you bind one within 30 days if you have not deposited or traded",
  ],
  thinkTwiceIf: [
    "You live in the United States, Canada or the Netherlands – all three are on Binance's list of prohibited countries",
    "You are an EEA resident and want referral benefits – Binance has excluded EEA users from its referral programme since 1 July 2026",
    "You want high leverage from day one – new futures accounts are limited to 20x for their first 30 days",
  ],
  intro:
    "Binance is the largest crypto exchange by derivatives open interest, but it is not open to everyone and not the cheapest or the most flexible on every point. People look for a Binance alternative mainly because Binance is closed in their country – the United States, Canada and the Netherlands are on its list of prohibited countries –, because they want lower fees or more leverage, or because they do not want all their funds on a single exchange. This page compares the six closest alternatives with Binance, using figures from the exchanges' own sites.",
  reasons: [
    {
      title: "Binance is not available in your country",
      text: "Binance's list of prohibited countries (updated 5 January 2026) names the United States, Canada and the Netherlands, besides sanctioned countries and regions. In the United Kingdom certain services are not accessible to retail clients.",
    },
    {
      title: "You want lower fees",
      text: "Binance charges 0.10% maker and taker on spot and 0.02% / 0.05% on USDⓈ-M futures on the standard tier. Paying fees in BNB lowers that to 0.075% on spot and 0.018% / 0.045% on futures.",
    },
    {
      title: "You want more leverage or more coins",
      text: "Leverage stops at 150x on the BTCUSDT and ETHUSDT perpetuals, and new futures accounts cannot use more than 20x during their first 30 days. Binance lists 600+ cryptocurrencies.",
    },
    {
      title: "No referral benefits in the EEA",
      text: "Since 1 July 2026, users registered in EEA countries can no longer take part in the Binance referral programme. Binance's referral terms also list restrictions for the United Kingdom, Singapore, Japan, Turkey, Hong Kong and Israel.",
    },
    {
      title: "Verification comes before everything",
      text: "Every new user has to complete identity verification before depositing or trading. Binance says the review is usually finished within 48 hours.",
    },
    {
      title: "You do not want everything on one exchange",
      text: "No centralised exchange is risk-free. Keeping trading capital on a second exchange reduces your dependence on a single platform.",
    },
  ],
  stayIf: [
    "Liquidity matters most to you – Binance has the largest open interest and futures volume of any exchange",
    "You pay fees in BNB: 25% off spot fees and 10% off USDⓈ-M futures fees",
    "You value regulation by the ADGM FSRA, a proof of reserves you can verify yourself and the SAFU fund of about US$1 billion",
  ],
  faqs: [
    {
      q: "Is Binance available in the US, Canada or the Netherlands?",
      a: "No. Binance's list of prohibited countries (updated 5 January 2026) names the United States, Canada and the Netherlands. For the United States the list also covers US citizens and anyone operating in the US.",
    },
    {
      q: "Does the Binance referral programme work in Europe?",
      a: "No longer for EEA residents. According to Binance's referral terms, users registered under EEA countries have not been eligible to take part in the Binance Referral Program since 1 July 2026, and the terms also list restrictions for the United Kingdom. You can still open a Binance account from the countries Binance serves, but a referral has no effect there.",
    },
    {
      q: "Does Binance limit leverage for new accounts?",
      a: "Yes. Futures accounts younger than 30 days cannot use more than 20x. After that Binance goes up to 150x on the BTCUSDT and ETHUSDT perpetuals for positions of up to 300,000 USDT.",
    },
  ],
  reserves: "BTC 100.05% (audit of 12 November 2026), self-verifiable with a Merkle tree and zk-SNARKs",
  fund: "SAFU fund of about US$1 billion (as of February 2026)",
  features: {
    copyTrading: { has: true, note: "Futures and spot copy trading" },
    tradingBots: { has: true, note: "Spot and futures grid, DCA, arbitrage, rebalancing and TWAP bots" },
    options: { has: true, note: "Options on BTC, ETH, BNB, SOL, XRP and DOGE" },
    demoTrading: { has: true, note: "Demo trading with virtual funds for spot and futures" },
    margin: { has: true, note: "Isolated and cross margin" },
    p2p: { has: true, note: "Binance P2P with local payment methods" },
    fiat: { has: true, note: "Bank transfer and credit or debit card, depending on region" },
    earn: { has: true, note: "Simple Earn, dual investment and ETH staking" },
    launchpad: { has: true, note: "Launchpool and HODLer Airdrops" },
    web3Wallet: { has: true, note: "Binance Wallet, a self-custody wallet inside the Binance app" },
    card: { has: true, note: "Binance Card, for residents of Brazil only" },
  },
  countries: {
    us: { status: "restricted" },
    uk: { status: "partial", note: "certain services are not accessible to UK retail clients" },
    ca: { status: "restricted" },
    de: { status: "open" },
    fr: { status: "open" },
    nl: { status: "restricted" },
    es: { status: "open" },
    it: { status: "open" },
    au: { status: "regional", note: "Binance Australia" },
    jp: { status: "regional", note: "Binance Japan" },
    sg: { status: "partial", note: "not on the prohibited list, but the referral programme is restricted there" },
    hk: { status: "partial", note: "not on the prohibited list, but the referral programme is restricted there" },
    in: { status: "open" },
    ae: { status: "regional", note: "Binance UAE in Dubai" },
  },
  regional:
    "Binance.com is run by three entities licensed by the ADGM Financial Services Regulatory Authority in Abu Dhabi. Separate local platforms exist for Japan (Binance Japan Inc.), Australia (Binance Australia, registered with AUSTRAC) and the UAE (Binance FZE, licensed by VARA in Dubai), and Binance lists further licensed entities in Bahrain, Kazakhstan, New Zealand, Thailand, Indonesia, Mexico, El Salvador, Argentina, Brazil and South Africa. Its licence page names no EU or EEA entity.",
  mica: "",
  sources: [
    { label: "Binance: Copy trading", url: "https://www.binance.com/en/copy-trading" },
    { label: "Binance: Trading bots", url: "https://www.binance.com/en/trading-bots/marketplace" },
    { label: "Binance: Options", url: "https://www.binance.com/en/eoptions/BTCUSDT" },
    { label: "Binance: Demo trading", url: "https://www.binance.com/en/support/faq/detail/9be58f73e5e14338809e3b705b9687dd" },
    { label: "Binance: Isolated margin", url: "https://www.binance.com/en/support/faq/detail/c19042bab23f44d090fc158ab0ee0943" },
    { label: "Binance P2P", url: "https://p2p.binance.com/en" },
    { label: "Binance: Buying crypto by card or bank transfer", url: "https://www.binance.com/en/crypto/buy/USD/BTC" },
    { label: "Binance: Earn", url: "https://www.binance.com/en/earn" },
    { label: "Binance: Launchpool", url: "https://www.binance.com/en/launchpool" },
    { label: "Binance: Binance Wallet", url: "https://www.binance.com/en/support/faq/detail/048ee79532494c03918dc4004214ad11" },
    { label: "Binance: Binance Card", url: "https://www.binance.com/en/cards" },
    { label: "Binance UK", url: "https://www.binance.com/en-GB" },
    { label: "Binance Australia", url: "https://www.binance.com/en-AU" },
    { label: "Binance Japan", url: "https://www.binance.com/en-JP" },
    { label: "Binance UAE", url: "https://www.binance.com/en-AE" },
  ],
};
