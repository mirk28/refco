import type { AlternativesInfo } from "../types";

/**
 * Products and countries checked against mexc.com on 2026-11-16 (global site, logged out). MEXC names no regional platform.
 * Everything else restates facts from `../exchanges/mexc.ts`.
 */
export const mexc: AlternativesInfo = {
  role: "Lowest fees, highest leverage",
  pick: "MEXC has the lowest fees (0% maker) and the highest leverage (up to 500x), but no tier-one licence",
  pitch:
    "MEXC competes on price: no maker fee on spot and on most futures contracts, 0.02% taker on BTCUSDT futures and up to 500x on BTCUSDT and ETHUSDT. It lists 1,384 spot pairs and 1,152 futures contracts – and states itself that it holds no tier-one licence and no MiCA authorisation.",
  chooseIf: [
    "You trade often and fees are your biggest cost – makers pay 0% on spot and on most futures contracts",
    "You hunt new listings: 1,384 spot pairs and 1,152 futures contracts",
    "You registered without a referral code – MEXC lets you link a referrer yourself within 30 days",
  ],
  thinkTwiceIf: [
    "Regulation matters to you – MEXC states that it has no tier-one licence and no MiCA authorisation",
    "You live in the United States, the United Kingdom, Canada, France, the Netherlands, Singapore or Hong Kong – all are prohibited jurisdictions in MEXC's User Agreement",
    "You count on the bonuses – they cannot be withdrawn and are forfeited if you move funds out of the Futures account early",
  ],
  intro:
    "MEXC attracts traders with zero maker fees, up to 500x leverage and a very long list of markets. People look for a MEXC alternative mainly for regulatory reasons – MEXC states that it holds no tier-one licence and no MiCA authorisation –, because it is winding down in France and the Netherlands and is closed to the United States, the United Kingdom and Canada, or because they need products MEXC does not show on its site, such as options or spot margin. This page compares the six closest alternatives with MEXC, using figures from the exchanges' own sites.",
  reasons: [
    {
      title: "No tier-one licence",
      text: "The contracting entity is MEXC (Comoros) Ltd, registered in the Union of Comoros. MEXC names no licence on its own pages, states that it has no tier-one licence and no MiCA authorisation, and notes in its own guide that it appears in ESMA's interim register of non-compliant entities.",
    },
    {
      title: "MEXC is leaving France and the Netherlands",
      text: "The User Agreement (updated 13 October 2026) names France and the Netherlands as prohibited. MEXC set 16 November 2026 as the final offboarding date for the Netherlands and is winding down in France in batches until 5 March 2027.",
    },
    {
      title: "Closed to the US, the UK and Canada",
      text: "The United States, the United Kingdom, Canada, Singapore, Hong Kong, Malaysia, mainland China, Russia, Belarus and Kazakhstan are prohibited jurisdictions as well.",
    },
    {
      title: "Verification is needed in practice",
      text: "MEXC states that not completing KYC may affect your access to deposits, withdrawals and trading, and its rewards require at least Primary KYC.",
    },
    {
      title: "Bonuses with strings attached",
      text: "Bonuses cannot be withdrawn – only the profit made with them – and moving funds out of the Futures account before a bonus is used up forfeits the whole bonus.",
    },
    {
      title: "Products we did not find",
      text: "On MEXC's own site we found no options trading, no spot margin and no self-custody wallet on 16 November 2026.",
    },
  ],
  stayIf: [
    "Fees decide for you: 0% maker and 0.02% taker on BTCUSDT futures, 0% / 0.05% on spot",
    "You trade new and small tokens early – 1,384 spot pairs and 1,152 futures contracts",
    "You accept an offshore venue and keep only trading capital there",
  ],
  faqs: [
    {
      q: "Is MEXC leaving France and the Netherlands?",
      a: "Yes. MEXC's User Agreement (updated 13 October 2026) names both as prohibited jurisdictions. For the Netherlands MEXC set 16 November 2026 as the final offboarding date; in France it is winding down in batches between 28 October 2026 and 5 March 2027, and registrations are already closed.",
    },
    {
      q: "Does MEXC serve the EU?",
      a: "MEXC's own pages do not agree. Its User Agreement prohibits France and the Netherlands, and its article on restricted countries calls the other EU and EEA countries not prohibited – while stating that MEXC has no MiCA authorisation and is listed in ESMA's interim register of non-compliant entities. A newer MEXC article says that MEXC does not serve the EU/EEA. Anyone in the EEA who wants a platform authorised under MiCA has to look at the alternatives.",
    },
    {
      q: "Does MEXC offer options or spot margin trading?",
      a: "We found neither on MEXC's own site on 16 November 2026: its help centre returns no results for options, and the account types it describes are Spot, Futures, Fiat and Copy Trade. MEXC's derivatives are USDT-margined and coin-margined futures.",
    },
  ],
  reserves: "USDT 122.42%, USDC 109.84%, BTC 317.61%, ETH 112.41% (snapshot of 9 November 2026)",
  fund: "Guardian Fund of $100 million, plus a futures insurance fund",
  features: {
    copyTrading: { has: true, note: "Futures copy trading with a separate Copy Trade account" },
    tradingBots: { has: true, note: "Futures grid bot, plus spot grid and DCA bots" },
    options: { has: null, note: "" },
    demoTrading: { has: true, note: "Futures demo trading on live market data" },
    margin: { has: null, note: "" },
    p2p: { has: true, note: "Zero-fee P2P for USDT, BTC, ETH and other coins" },
    fiat: { has: true, note: "Visa and Mastercard cards, bank transfer and Apple Pay" },
    earn: { has: true, note: "Flexible and fixed savings and On-Chain Earn" },
    launchpad: { has: true, note: "Launchpad token subscriptions" },
    web3Wallet: { has: null, note: "" },
    card: { has: true, note: "MEXC Card, a crypto payment card" },
  },
  countries: {
    us: { status: "restricted" },
    uk: { status: "restricted" },
    ca: { status: "restricted" },
    de: { status: "partial", note: "not on the prohibited list, but MEXC has no MiCA authorisation and says in a newer article that it does not serve the EU/EEA" },
    fr: { status: "restricted", note: "winding down until 5 March 2027" },
    nl: { status: "restricted", note: "final offboarding on 16 November 2026" },
    es: { status: "partial", note: "not on the prohibited list, but MEXC has no MiCA authorisation and says in a newer article that it does not serve the EU/EEA" },
    it: { status: "partial", note: "not on the prohibited list, but MEXC has no MiCA authorisation and says in a newer article that it does not serve the EU/EEA" },
    au: { status: "partial", note: "not on the prohibited list; 500x leverage is not offered" },
    jp: { status: "partial", note: "not prohibited, but MEXC lists Japan as limited – its app is not in Japanese app stores" },
    sg: { status: "restricted" },
    hk: { status: "restricted" },
    in: { status: "partial", note: "not prohibited, but MEXC lists India as limited – its app is not listed there" },
    ae: { status: "open" },
  },
  regional: "",
  mica: "",
  sources: [
    { label: "MEXC: Copy trading", url: "https://www.mexc.com/futures/copyTrade/home" },
    { label: "MEXC: Futures grid bot", url: "https://www.mexc.com/futures/trading-bots/grid" },
    { label: "MEXC: Futures demo trading", url: "https://www.mexc.com/support/article/mexc-futures-demo-trading-395243119875185664" },
    { label: "MEXC: Account types explained", url: "https://www.mexc.com/support/article/mexc-account-types-explained-468775038747179008" },
    { label: "MEXC: P2P trading", url: "https://www.mexc.com/buy-crypto/p2p" },
    { label: "MEXC: Buying crypto by card or bank transfer", url: "https://www.mexc.com/buy-crypto" },
    { label: "MEXC: Earn", url: "https://www.mexc.com/earn" },
    { label: "MEXC: Launchpad", url: "https://www.mexc.com/launchpad" },
    { label: "MEXC: Understanding the MEXC Card", url: "https://www.mexc.com/support/article/understanding-the-mexc-card-446453561133852672" },
    { label: "MEXC: Service wind-down in France", url: "https://www.mexc.com/support/article/mexc-france-service-wind-down-493960039776252928" },
    { label: "MEXC Learn: Looking for MEXC alternatives", url: "https://www.mexc.com/learn/article/looking-for-mexc-alternatives-three-reasons-to-switch-and-336-reasons-to-stay/1" },
  ],
};
