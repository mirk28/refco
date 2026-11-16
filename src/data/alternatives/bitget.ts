import type { AlternativesInfo } from "../types";

/**
 * Products, countries and regional platforms checked against bitget.com on 2026-11-16 (global site, logged out).
 * Everything else restates facts from `../exchanges/bitget.ts`.
 */
export const bitget: AlternativesInfo = {
  role: "Copy trading",
  pick: "Bitget is built around copy trading, which starts at 50 USDT",
  pitch:
    "Bitget calls itself the largest crypto copy-trading platform: you pick a lead trader, set an amount from 50 USDT and Bitget mirrors the positions in your account. It lists 600+ spot pairs and 200+ futures pairs with up to 150x on BTC and ETH, reports reserves of 124% and keeps a Protection Fund valued at $274 million.",
  chooseIf: [
    "You want to copy experienced traders instead of managing every position yourself",
    "You value a published safety net: monthly proof of reserves at 124% and a $274 million Protection Fund",
    "You also want exposure to stocks – Bitget offers tokenized stocks, stock perps and CFDs",
  ],
  thinkTwiceIf: [
    "You live in the United States, Canada, Germany, France, Austria, Japan, Singapore, Hong Kong or the United Arab Emirates – all are prohibited countries in Bitget's Terms of Use",
    "You are fee-sensitive on futures – takers pay 0.06% on the standard tier",
    "You want an EU-licensed platform – Bitget's MiCAR application in Austria was still pending at its statement of 2 July 2026",
  ],
  intro:
    "Bitget made its name with copy trading and has grown into one of the five largest exchanges on CoinMarketCap's derivatives ranking. People look for a Bitget alternative mostly because of where they live – Bitget's Terms of Use exclude the United States, Canada, Germany, France, Austria, Japan and Singapore, among others – or because its futures taker fee of 0.06% is not the lowest on the market. This page compares the six closest alternatives with Bitget, using figures from the exchanges' own sites.",
  reasons: [
    {
      title: "Bitget is closed in many countries",
      text: "The Terms of Use (updated 4 November 2026) list as prohibited, among others, the United States, Canada, Germany, France, Austria, Japan, Singapore, Hong Kong, Malaysia, Thailand, Russia and the United Arab Emirates. Bitget's verification page additionally names India, Italy and Spain as unsupported.",
    },
    {
      title: "Bitget is leaving Canada and France",
      text: "Addenda to the Terms of Use state that Bitget discontinues its services for Canadian users – with a withdrawal period from 18 September to 17 November 2026 – and for residents of France.",
    },
    {
      title: "No EU licence yet",
      text: "Bitget EU has applied to the Austrian Financial Market Authority for an authorisation under MiCAR. According to Bitget's statement of 2 July 2026 it intends to offer services in the EU once that authorisation is granted.",
    },
    {
      title: "Futures takers pay 0.06%",
      text: "Standard users pay 0.02% maker and 0.06% taker on USDT-M, Coin-M and USDC-M futures and 0.10% on spot. The BGB discount of 20% applies to spot and margin fees, not to futures.",
    },
    {
      title: "A missed referral code needs a support ticket",
      text: "Referral codes must be entered during registration. Afterwards the only route is a support ticket with proof that the invitation was sent before you registered – with no guaranteed outcome.",
    },
    {
      title: "The top welcome reward is out of reach for most",
      text: "Of the up to 6,200 USDT, 6,000 USDT require a net deposit of 100,000 USDT and 80 million USDT of futures volume within seven days.",
    },
  ],
  stayIf: [
    "Copy trading is the reason you are there – on Bitget it covers futures, spot, bots and CFDs",
    "You hold BGB and trade spot: paying fees in BGB gives 20% off",
    "You value the Protection Fund of $274 million and reserves of 124% at the latest snapshot",
  ],
  faqs: [
    {
      q: "Is Bitget available in Germany, France or the United States?",
      a: "No. All three are prohibited countries in Bitget's Terms of Use (updated 4 November 2026), as are Austria, Canada, Japan, Singapore, Hong Kong and the United Arab Emirates. Bitget's verification page also names India, Italy and Spain as unsupported.",
    },
    {
      q: "Is Bitget closing in Canada?",
      a: "Yes. An addendum to Bitget's Terms of Use for Canadian users states that Bitget will discontinue its services to them, with a withdrawal period from 18 September to 17 November 2026.",
    },
    {
      q: "Does Bitget have a MiCA licence?",
      a: "Not yet. Bitget EU has applied to the Austrian Financial Market Authority for an authorisation as a crypto-asset service provider under MiCAR. According to Bitget's statement of 2 July 2026 it intends to offer services in the European Union as soon as the authorisation is granted.",
    },
  ],
  reserves: "124% in total – BTC 127%, USDT 114%, ETH 103% (snapshot of 12 November 2026)",
  fund: "Protection Fund valued at $274 million",
  features: {
    copyTrading: { has: true, note: "Futures, spot, bot and CFD copy trading, from 50 USDT" },
    tradingBots: { has: true, note: "Grid, martingale, auto-invest and funding-rate arbitrage bots" },
    options: { has: null, note: "No crypto options found; Bitget lists US stock options (Stock+) instead" },
    demoTrading: { has: true, note: "Free futures trading simulator with demo pairs" },
    margin: { has: true, note: "Cross and isolated margin, up to 10x" },
    p2p: { has: true, note: "Zero-fee P2P for USDT with verified merchants" },
    fiat: { has: true, note: "Visa, Mastercard, Google Pay and Apple Pay, plus bank deposits" },
    earn: { has: true, note: "Simple Earn (flexible and fixed) and on-chain products" },
    launchpad: { has: true, note: "Launchpad, Launchpool and PoolX" },
    web3Wallet: { has: true, note: "Bitget Wallet, self-custody and multi-chain" },
    card: { has: true, note: "Bitget Wallet Card, applied for in Bitget Wallet" },
  },
  countries: {
    us: { status: "restricted" },
    uk: { status: "regional", note: "UK version at bitget.com/en-GB" },
    ca: { status: "restricted", note: "services are being discontinued" },
    de: { status: "restricted" },
    fr: { status: "restricted", note: "services discontinued" },
    nl: { status: "open" },
    es: { status: "restricted", note: "named as unsupported on Bitget's verification page" },
    it: { status: "restricted", note: "named as unsupported on Bitget's verification page" },
    au: { status: "open" },
    jp: { status: "restricted" },
    sg: { status: "restricted" },
    hk: { status: "restricted" },
    in: { status: "restricted", note: "named as unsupported on Bitget's verification page" },
    ae: { status: "restricted" },
  },
  regional:
    "Bitget runs a UK version of its site (bitget.com/en-GB) whose promotions are approved by Archax, an FCA-authorised firm. For the EU, Bitget EU has applied to the Austrian FMA for a MiCAR authorisation and, according to Bitget's statement of 2 July 2026, will only offer services once it is granted.",
  mica: "",
  sources: [
    { label: "Bitget: Copy trading", url: "https://www.bitget.com/copy-trading/futures" },
    { label: "Bitget: Trading bots", url: "https://www.bitget.com/activity-hub/trading-bots" },
    { label: "Bitget: Launch of US stock options", url: "https://www.bitget.com/support/articles/12560603889520" },
    { label: "Bitget: Demo futures trading", url: "https://www.bitget.com/futures/susdt/SBTCSUSDT" },
    { label: "Bitget: Spot margin trading", url: "https://www.bitget.com/spot/BTCUSDT?type=cross" },
    { label: "Bitget: P2P trading", url: "https://www.bitget.com/p2p-trade" },
    { label: "Bitget: Buying crypto by card", url: "https://www.bitget.com/buy-sell-crypto" },
    { label: "Bitget: Earn", url: "https://www.bitget.com/finance" },
    { label: "Bitget: Launchpad", url: "https://www.bitget.com/launchhub/launchpad" },
    { label: "Bitget Wallet", url: "https://web3.bitget.com/en" },
    { label: "Bitget Wallet Card", url: "https://web3.bitget.com/card" },
    { label: "Bitget: Addendum to the Terms of Use for Canadian users", url: "https://www.bitget.com/terms/legal/12560603895498" },
    { label: "Bitget: Addendum to the Terms of Use for French users", url: "https://www.bitget.com/terms/legal/12560603873688" },
    { label: "Bitget: Statement on the MiCAR application of Bitget EU", url: "https://www.bitget.com/support/articles/12560603885949" },
  ],
};
