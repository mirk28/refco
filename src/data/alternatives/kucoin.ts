import type { AlternativesInfo } from "../types";

/**
 * Products, countries and regional platforms checked against kucoin.com on 2026-11-16 (KuCoin Global, logged out).
 * Everything else restates facts from `../exchanges/kucoin.ts`.
 */
export const kucoin: AlternativesInfo = {
  role: "Free trading bots",
  pick: "KuCoin offers free trading bots and more than 1,000 listed tokens",
  pitch:
    "KuCoin lists more than 1,000 tokens and makes automated trading easy: its trading bots cost nothing beyond the trading fee. Futures cost 0.02% maker / 0.06% taker with up to 125x leverage, and a referral runs for 365 days.",
  chooseIf: [
    "You want to automate your trading – KuCoin's bots are free to use",
    "You are looking for altcoins: more than 1,000 listed tokens and 1,300+ trading pairs",
    "You may have missed the referral code – KuCoin's Help Centre has a “Link Referrer” request",
  ],
  thinkTwiceIf: [
    "You live in the United States, Singapore, Hong Kong, France, the Netherlands or the Canadian provinces of Ontario and British Columbia",
    "You trade small tokens – spot fees rise to 0.20% and 0.30% for Class B and Class C tokens",
    "You want options – KuCoin closed its options trading on 15 January 2026",
  ],
  intro:
    "KuCoin is known for early altcoin listings and free trading bots. People look for a KuCoin alternative mainly because it closed the accounts of US users in January 2025, because France, the Netherlands, Singapore and parts of Canada are restricted, or because they want a larger futures market than KuCoin's. This page compares the six closest alternatives with KuCoin, using figures from the exchanges' own sites.",
  reasons: [
    {
      title: "KuCoin left the United States",
      text: "On 27 January 2025 KuCoin announced a resolution with the US Department of Justice; it had already closed the accounts of US users with effect from 23 January 2025. The United States, including its territories, is a restricted location in KuCoin's Terms of Use.",
    },
    {
      title: "More restricted countries",
      text: "The Terms of Use (updated 29 October 2026) also list Singapore, mainland China and Hong Kong, Malaysia, Kazakhstan, Uzbekistan, Russia, Belarus, France, the Netherlands and the Canadian provinces of Ontario and British Columbia.",
    },
    {
      title: "A smaller futures market",
      text: "KuCoin's futures volume is lower than that of the top five exchanges on CoinMarketCap's derivatives ranking. Larger order books usually mean tighter spreads on big orders.",
    },
    {
      title: "Higher fees on smaller tokens",
      text: "The standard spot rate of 0.10% applies to Class A tokens only. Class B tokens cost 0.20% and Class C tokens 0.30%, and futures takers pay 0.06%.",
    },
    {
      title: "No options any more",
      text: "KuCoin announced on 24 December 2025 that it would end its options trading service; the entry points on web and app closed on 15 January 2026.",
    },
    {
      title: "The 2020 hack",
      text: "In 2020 a hack affected about $285 million. KuCoin states that it and its insurance fund covered the roughly $45.55 million that could not be recovered and that no user sustained a loss.",
    },
  ],
  stayIf: [
    "You use KuCoin's free trading bots and they do what you need",
    "You hold KCS – paying fees in KCS gives 20% off spot and margin fees",
    "You are in the EEA and content with KuCoin EU, which holds a MiCAR licence in Austria",
  ],
  faqs: [
    {
      q: "Can US users still trade on KuCoin?",
      a: "No. The United States, including its territories, is a restricted location in KuCoin's Terms of Use, and KuCoin closed the accounts of US users with effect from 23 January 2025. The country table on this page shows how the alternatives handle the United States.",
    },
    {
      q: "Does KuCoin still offer options trading?",
      a: "No. KuCoin announced on 24 December 2025 that it would end its options trading service, and the entry points on web and app closed on 15 January 2026.",
    },
    {
      q: "Is KuCoin EU the same as KuCoin?",
      a: "No. KuCoin EU Exchange GmbH in Vienna serves EEA residents except Malta under a MiCAR licence and is supervised by the Austrian Financial Market Authority. Its help centre has sections for spot, convert, margin, Simple Earn, KuCard and SEPA deposits, but none for futures.",
    },
  ],
  reserves: "BTC 112%, ETH 115%, USDT 110%, USDC 127% (data of 31 October 2026)",
  fund: "",
  features: {
    copyTrading: { has: true, note: "Futures copy trading on USDT perpetuals" },
    tradingBots: { has: true, note: "Free bots, including spot grid and DCA" },
    options: { has: false, note: "Options trading was closed on 15 January 2026" },
    demoTrading: { has: null, note: "" },
    margin: { has: true, note: "Spot margin, 10x on BTC/USDT" },
    p2p: { has: true, note: "P2P marketplace for buying USDT with local currencies" },
    fiat: { has: true, note: "Visa and Mastercard cards, Apple Pay and bank transfer" },
    earn: { has: true, note: "KuCoin Earn, including flexible savings and dual investment" },
    launchpad: { has: true, note: "Spotlight token sales and GemPool" },
    web3Wallet: { has: true, note: "KuCoin Web3 Wallet, multi-chain and self-custody" },
    card: { has: true, note: "KuCard: Visa for EEA residents except Malta, Mastercard in Australia" },
  },
  countries: {
    us: { status: "restricted" },
    uk: { status: "open" },
    ca: { status: "partial", note: "Ontario and British Columbia are restricted" },
    de: { status: "regional", note: "KuCoin EU" },
    fr: { status: "partial", note: "restricted on the global site; KuCoin EU covers the EEA except Malta without naming France" },
    nl: { status: "partial", note: "restricted on the global site; KuCoin EU covers the EEA except Malta without naming the Netherlands" },
    es: { status: "regional", note: "KuCoin EU" },
    it: { status: "regional", note: "KuCoin EU" },
    au: { status: "regional", note: "KuCoin AU" },
    jp: { status: "open" },
    sg: { status: "restricted" },
    hk: { status: "restricted" },
    in: { status: "open" },
    ae: { status: "open" },
  },
  regional:
    "KuCoin EU Exchange GmbH in Vienna (kucoin.com/en-eu) serves EEA residents except Malta under a MiCAR licence, supervised by the Austrian FMA. KuCoin AU (Axis One Markets Pty Ltd, registered with AUSTRAC) serves Australia, KuCoin Thailand runs on kucoin.th, and residents of Brazil come under separate KuCoin Brasil terms.",
  mica: "KuCoin EU Exchange GmbH, Vienna, supervised by the Austrian FMA",
  sources: [
    { label: "KuCoin: Futures copy trading", url: "https://www.kucoin.com/copytrading" },
    { label: "KuCoin: Trading bots (strategy trading)", url: "https://www.kucoin.com/trade/strategy/BTC-USDT" },
    { label: "KuCoin: Notice on ending options trading", url: "https://www.kucoin.com/announcement/kucoin-option-trading-notice-251224" },
    { label: "KuCoin: Margin trading", url: "https://www.kucoin.com/trade/margin/BTC-USDT" },
    { label: "KuCoin: P2P trading", url: "https://www.kucoin.com/otc" },
    { label: "KuCoin: Buying crypto by card or bank transfer", url: "https://www.kucoin.com/express" },
    { label: "KuCoin: Earn", url: "https://www.kucoin.com/earn" },
    { label: "KuCoin: Spotlight launchpad", url: "https://www.kucoin.com/spotlight-center" },
    { label: "KuCoin: Web3 Wallet", url: "https://www.kucoin.com/web3" },
    { label: "KuCoin: KuCard", url: "https://www.kucoin.com/kucard/home/eea" },
    { label: "KuCoin EU: General Terms", url: "https://www.kucoin.com/en-eu/support/47185419968075" },
    { label: "KuCoin AU", url: "https://www.kucoin.com/en-au" },
  ],
};
