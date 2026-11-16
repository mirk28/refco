import type { AlternativesInfo } from "../types";

/**
 * Products, countries and regional platforms checked against bybit.com on 2026-11-16 (global site, logged out).
 * Everything else restates facts from `../exchanges/bybit.ts`.
 */
export const bybit: AlternativesInfo = {
  role: "Fast perpetual trading",
  pick: "Bybit is built for active perpetual trading, with up to 150x leverage and referral rewards of up to 250 USDT",
  pitch:
    "Bybit started as a derivatives exchange in 2018 and still feels built for active traders: USDT and USDC perpetuals, inverse contracts and options, up to 150x on the BTCUSDT perpetual and standard futures fees of 0.02% maker / 0.055% taker. Invited users can earn up to 250 USDT in three trading stages.",
  chooseIf: [
    "You mainly trade perpetuals and want a fast engine and a strong mobile app",
    "You want referral rewards with clear amounts: 50, 100 and 100 USDT in three trading stages",
    "You want to practise first – Bybit's demo trading covers spot and derivatives",
  ],
  thinkTwiceIf: [
    "The hack of February 2025 worries you: about $1.46 billion was taken from an Ethereum cold wallet, even though Bybit closed the gap within 72 hours",
    "You live in the United States, Canada, Singapore, Hong Kong or the United Kingdom",
    "You are an EEA resident – you are served by Bybit EU, a separate platform with its own fees, products and referral offer",
  ],
  intro:
    "Bybit is one of the three largest exchanges on CoinMarketCap's derivatives ranking and a favourite of active futures traders. People look for a Bybit alternative mainly after the hack of February 2025, because Bybit no longer serves the United Kingdom, or because its futures taker fee of 0.055% is not the lowest on the market. This page compares the six closest alternatives with Bybit, using figures from the exchanges' own sites.",
  reasons: [
    {
      title: "The security incident of February 2025",
      text: "On 21 February 2025 attackers took about $1.46 billion from one of Bybit's Ethereum cold wallets – the largest hack in crypto history. Bybit kept withdrawals open and a proof-of-reserves audit by Hacken on 24 February showed the gap closed within 72 hours, but for some traders the incident is reason enough to keep funds on a second exchange.",
    },
    {
      title: "Bybit has left the United Kingdom",
      text: "Bybit accepts no new registrations from the United Kingdom, and since 21 October 2026 accounts with UK residency are limited to withdrawals.",
    },
    {
      title: "The global site is closed to several countries",
      text: "Bybit lists the United States, Canada, Singapore, Hong Kong and mainland China as service-restricted. EEA residents are served by Bybit EU in Vienna, a separate platform with its own rules.",
    },
    {
      title: "The futures taker fee is not the lowest",
      text: "VIP 0 users pay 0.02% maker and 0.055% taker on perpetuals and futures and 0.10% on spot. Paying fees in MNT lowers futures fees by 10% to 0.018% / 0.0495%.",
    },
    {
      title: "No referral programme in much of Europe",
      text: "Bybit runs no referral programme in Germany, the United Kingdom, France, Belgium and Hong Kong and does not open it to EEA residents invited within the EEA.",
    },
    {
      title: "A missed referral code is gone for good",
      text: "Bybit's registration guide states that after signing up you cannot add, modify or delete your referral code.",
    },
  ],
  stayIf: [
    "You trade perpetuals actively and value Bybit's engine, its unified trading account and the mobile app",
    "You want the whole product range under one login: options, copy trading, bots, demo trading, P2P and a card",
    "You are still inside the referral reward window – the up to 250 USDT depend on your trading in the first 14 and 30 days",
  ],
  faqs: [
    {
      q: "Is Bybit safe to use after the 2025 hack?",
      a: "On 21 February 2025 about $1.46 billion was taken from one of Bybit's Ethereum cold wallets. Bybit did not halt withdrawals, replaced the missing ETH through bridge loans, large deposits and OTC purchases, and a Hacken proof-of-reserves audit on 24 February showed the gap closed within 72 hours. According to Bybit, client assets remained backed 1:1 throughout. The incident shows that even large exchanges can be breached, which is why many traders keep funds on more than one platform.",
    },
    {
      q: "Can UK residents still use Bybit?",
      a: "No. Bybit accepts no new registrations from the United Kingdom, and since 21 October 2026 accounts with UK residency are limited to withdrawals. The country table on this page shows which alternatives do not list the United Kingdom as restricted.",
    },
    {
      q: "Is Bybit EU the same as Bybit?",
      a: "No. EEA residents are served by Bybit EU GmbH in Vienna (bybit.eu), which is licensed under MiCAR and supervised by the Austrian Financial Market Authority. It covers the EEA except Malta and is a separate platform with its own fees, product range and referral offer. According to Bybit, new EEA users can no longer register on the global platform.",
    },
  ],
  reserves: "1:1 backing according to Bybit (snapshot of 27 October 2026, with a Merkle-tree self-check)",
  fund: "Insurance Fund for derivatives only – it covers losses from liquidations",
  features: {
    copyTrading: { has: true, note: "Copy Trading Classic and Copy Trading TradFi" },
    tradingBots: { has: true, note: "Futures grid, futures martingale, spot grid and DCA bots" },
    options: { has: true, note: "Options at 0.02% maker / 0.03% taker" },
    demoTrading: { has: true, note: "Demo account for spot and derivatives, plus a separate testnet" },
    margin: { has: true, note: "Up to 10x in the Unified Trading Account" },
    p2p: { has: true, note: "P2P marketplace with escrow" },
    fiat: { has: true, note: "Bank transfer, SEPA, FPS, Visa and Mastercard" },
    earn: { has: true, note: "Easy Earn, On-Chain Earn and Advanced Earn" },
    launchpad: { has: true, note: "Launchpad and Launchpool" },
    web3Wallet: { has: true, note: "Bybit Wallet with a self-custody seed-phrase wallet" },
    card: { has: true, note: "Bybit Card, virtual and physical, in certain countries only" },
  },
  countries: {
    us: { status: "restricted" },
    uk: { status: "restricted", note: "no new registrations; UK accounts are limited to withdrawals since 21 October 2026" },
    ca: { status: "restricted" },
    de: { status: "regional", note: "Bybit EU" },
    fr: { status: "regional", note: "Bybit EU" },
    nl: { status: "regional", note: "Bybit EU" },
    es: { status: "regional", note: "Bybit EU" },
    it: { status: "regional", note: "Bybit EU" },
    au: { status: "open" },
    jp: { status: "open" },
    sg: { status: "restricted" },
    hk: { status: "restricted" },
    in: { status: "open" },
    ae: { status: "partial", note: "Bybit's list excludes Dubai for its UAE entity" },
  },
  regional:
    "EEA residents are served by Bybit EU GmbH in Vienna (bybit.eu), licensed under MiCAR and supervised by the Austrian FMA. It covers the EEA except Malta, and new EEA users can no longer register on the global platform.",
  mica: "Bybit EU GmbH, Vienna, supervised by the Austrian FMA",
  sources: [
    { label: "Bybit: Copy trading", url: "https://www.bybit.com/en/copyTrade/" },
    { label: "Bybit: Trading bots", url: "https://www.bybit.com/en/tradingbot" },
    { label: "Bybit: Trading products (options)", url: "https://www.bybit.com/en/help-center/topic-list/trading-products" },
    { label: "Bybit: Demo trading", url: "https://www.bybit.com/en/help-center/article/Demo-Trading" },
    { label: "Bybit: Spot margin trading FAQ", url: "https://www.bybit.com/en/help-center/article/FAQ-Spot-Margin-Trading" },
    { label: "Bybit: P2P trading", url: "https://www.bybit.com/en/p2p/" },
    { label: "Bybit: Buying crypto by card or bank transfer", url: "https://www.bybit.com/en/fiat/trade/express/home/" },
    { label: "Bybit: Earn", url: "https://www.bybit.com/en/earn/home/" },
    { label: "Bybit: Launchpad", url: "https://www.bybit.com/en/trade/spot/launchpad" },
    { label: "Bybit: Wallet types (seed-phrase wallet)", url: "https://www.bybit.com/en/help-center/article/Differences-Between-Seed-Phrase-Wallet-Keyless-Wallet-and-Cloud-Wallet" },
    { label: "Bybit: Bybit Card", url: "https://www.bybit.com/en/cards/" },
    { label: "Bybit: Insurance Fund", url: "https://www.bybit.com/en/announcement-info/insurance-fund/" },
  ],
};
