import type { AlternativesInfo } from "../types";

/**
 * Products, countries and regional platforms checked against okx.com on 2026-11-16. English pages of okx.com redirect
 * European visitors to OKX Europe (/en-eu), so the global product range was read from OKX's global help articles,
 * other language versions of the global site and its public API. Everything else restates facts from `../exchanges/okx.ts`.
 */
export const okx: AlternativesInfo = {
  role: "Low fees, options and MiCA",
  pick: "OKX combines low fees with options and a MiCA-authorised platform for the EEA",
  pitch:
    "OKX charges 0.08% maker / 0.10% taker on spot and 0.02% / 0.05% on futures and perpetuals, lists options at 0.03% and publishes a proof of reserves every month. EEA residents get a MiCA-authorised platform, OKX Europe – with perpetuals limited to 10x there.",
  chooseIf: [
    "You want low standard fees on spot, futures and options",
    "You live in the EEA and want an exchange that is authorised under MiCA",
    "You value a monthly proof of reserves that you can check against your own balance",
  ],
  thinkTwiceIf: [
    "You want high leverage in Europe – OKX Europe limits its perpetuals (X-Perps) to 10x",
    "You live in Canada, India, Japan or Hong Kong – OKX lists them as restricted locations",
    "You might forget the referral code – OKX does not add it after sign-up",
  ],
  intro:
    "OKX is one of the largest exchanges for spot and derivatives, with low standard fees and a monthly proof of reserves. People look for an OKX alternative mainly because what you can trade depends heavily on where you live – perpetuals are limited to 10x on OKX Europe –, because the global site stops at 100x, or because OKX is closed to Canada, India, Japan and Hong Kong. This page compares the six closest alternatives with OKX, using figures from the exchanges' own sites.",
  reasons: [
    {
      title: "Leverage is capped – especially in Europe",
      text: "On the global site the highest leverage is 100x, on perpetual swaps such as BTC-USDT and ETH-USDT. On OKX Europe the perpetual product is called X-Perps and is limited to 10x, less for larger positions.",
    },
    {
      title: "OKX is restricted where you live",
      text: "OKX lists Canada, India, Japan, Hong Kong, Malaysia and certain US jurisdictions as restricted locations (list updated 14 November 2026). In the United Kingdom, Australia, Brazil and South Korea derivatives are restricted.",
    },
    {
      title: "A smaller coin list",
      text: "OKX Europe's pages speak of more than 270 coins – a smaller catalogue than that of exchanges which focus on altcoins.",
    },
    {
      title: "Welcome rewards are locked",
      text: "On OKX Europe crypto rewards stay locked for up to 45 days – tradable but not withdrawable. On the global site rewards must be opened within 30 days and unfinished tasks expire 180 days after sign-up.",
    },
    {
      title: "A missed referral code cannot be added",
      text: "OKX states that invite codes only take effect during sign-up and cannot be added retroactively. Deleting the account and registering again does not help.",
    },
    {
      title: "A phone number is mandatory",
      text: "OKX requires both an email address and a phone number on every account, and identity verification before trading, deposits and withdrawals.",
    },
  ],
  stayIf: [
    "You are fee-conscious: 0.08% / 0.10% on spot and 0.02% / 0.05% on futures are low standard rates",
    "You trade options or expiry futures next to perpetual swaps",
    "You are an EEA resident and want to stay on a MiCA-authorised platform",
  ],
  faqs: [
    {
      q: "What is the maximum leverage on OKX Europe?",
      a: "10x. On OKX Europe the perpetual product is called X-Perps and is limited to 10x, less for larger positions. On the global site OKX goes up to 100x on perpetual swaps such as BTC-USDT and ETH-USDT.",
    },
    {
      q: "Is OKX available in Canada, India, Japan or Hong Kong?",
      a: "No. All four are on OKX's list of restricted locations (last updated 14 November 2026), together with Malaysia, Afghanistan, Nepal, Uzbekistan and sanctioned countries.",
    },
    {
      q: "Is OKX available in the UK?",
      a: "Only in part. OKX restricts derivatives-related, CeFi-related and P2P services in the United Kingdom. UK residents use the UK pages of the global platform (okx.com/en-gb), without the full product range.",
    },
  ],
  reserves: "BTC 108%, ETH 101%, USDT 106%, USDC 100% (monthly report, verification of 1 November 2026)",
  fund: "Security fund for margin and derivatives trading only – it covers liquidation shortfalls",
  features: {
    copyTrading: { has: true, note: "Spot and futures copy trading on the global site" },
    tradingBots: { has: true, note: "Spot grid, futures grid and further bot strategies" },
    options: { has: true, note: "Options at 0.03% maker / 0.03% taker on the global site" },
    demoTrading: { has: true, note: "Demo trading environment, used with your OKX account" },
    margin: { has: true, note: "Spot margin up to 10x on the global site" },
    p2p: { has: true, note: "P2P marketplace with escrow on the global site" },
    fiat: { has: true, note: "Cards, bank transfer, PayPal and Apple Pay depending on region; SEPA, Visa and Mastercard on OKX Europe" },
    earn: { has: true, note: "Simple Earn, On-chain Earn and dual investment" },
    launchpad: { has: true, note: "Jumpstart token sales on the global site" },
    web3Wallet: { has: true, note: "OKX Wallet, self-custody, more than 130 chains" },
    card: { has: true, note: "OKX Card, a Mastercard that pays from stablecoins" },
  },
  countries: {
    us: { status: "regional", note: "OKX US, in approved US locations only" },
    uk: { status: "partial", note: "derivatives, CeFi-related and P2P services are restricted" },
    ca: { status: "restricted" },
    de: { status: "regional", note: "OKX Europe" },
    fr: { status: "regional", note: "OKX Europe" },
    nl: { status: "regional", note: "OKX Europe" },
    es: { status: "regional", note: "OKX Europe" },
    it: { status: "regional", note: "OKX Europe" },
    au: { status: "regional", note: "OKX Australia" },
    jp: { status: "restricted" },
    sg: { status: "regional", note: "OKX Singapore" },
    hk: { status: "restricted" },
    in: { status: "restricted" },
    ae: { status: "regional", note: "OKX Middle East in Dubai" },
  },
  regional:
    "OKX runs separate platforms for several regions: OKX Europe Limited in Malta (okx.com/en-eu), authorised by the MFSA under MiCA, for EEA residents; OKX US (OKX INC., a money services business registered with FinCEN) for approved US locations; OKX Australia; OKX Singapore (OKX SG Pte. Ltd.); OKX Middle East Fintech FZE in Dubai, licensed by VARA; and OKX Brazil. Everyone else is served by Aux Cayes FinTech Co. Ltd. in the Seychelles. A regional platform has its own product range – OKX Europe, for example, limits perpetuals to 10x.",
  mica: "OKX Europe Limited, Malta, authorised by the MFSA",
  sources: [
    { label: "OKX: Spot copy trading", url: "https://www.okx.com/en-eu/help/copy-traders-product-cheat-sheet-for-spot-copy-trading" },
    { label: "OKX: Spot grid trading bot", url: "https://www.okx.com/en-eu/help/how-do-i-automate-grid-trading-strategies-on-spot-grid-crypto-trading-bot" },
    { label: "OKX: Options trading", url: "https://www.okx.com/en-eu/help/whats-options-trading" },
    { label: "OKX API documentation: demo trading", url: "https://www.okx.com/docs-v5/en/" },
    { label: "OKX: Spot margin trading", url: "https://www.okx.com/en-eu/help/margin-trading-app" },
    { label: "OKX: P2P trading", url: "https://www.okx.com/en-eu/help/what-is-p2p-trading" },
    { label: "OKX: Buying crypto by card or bank transfer", url: "https://www.okx.com/fr/buy-crypto" },
    { label: "OKX: Simple Earn", url: "https://www.okx.com/en-eu/earn/simple-earn" },
    { label: "OKX: Jumpstart", url: "https://www.okx.com/fr/jumpstart" },
    { label: "OKX Wallet", url: "https://web3.okx.com/" },
    { label: "OKX: OKX Card", url: "https://www.okx.com/en-eu/pay" },
    { label: "OKX Europe: Terms of Service (EEA)", url: "https://www.okx.com/en-eu/help/terms-of-service-eea" },
    { label: "OKX US", url: "https://www.okx.com/en-us" },
    { label: "OKX Australia: About", url: "https://www.okx.com/en-au/about" },
    { label: "OKX UK", url: "https://www.okx.com/en-gb" },
  ],
};
