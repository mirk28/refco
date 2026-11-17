import type { AlternativesText } from "../../../types";

export const kucoin: AlternativesText = {
  role: "Libreng trading bot",
  pick: "Ang KuCoin ay may libreng trading bot at mahigit 1,000 nakalistang token",
  pitch:
    "Mahigit 1,000 token ang nakalista sa KuCoin, at pinadadali nito ang automated trading: walang bayad ang mga trading bot nito bukod sa trading fee. Sa futures, 0.02% maker / 0.06% taker ang fees at may leverage na hanggang 125x, at tumatagal nang 365 araw ang referral.",
  chooseIf: [
    "Gusto mong gawing automated ang trading mo – libreng gamitin ang mga bot ng KuCoin",
    "Naghahanap ka ng mga altcoin: mahigit 1,000 nakalistang token at 1,300+ trading pair",
    "Baka nakaligtaan mo ang referral code – may request na “Link Referrer” sa help center ng KuCoin",
  ],
  thinkTwiceIf: [
    "Nakatira ka sa United States, Singapore, Hong Kong, France, Netherlands o sa mga probinsya ng Canada na Ontario at British Columbia",
    "Nagte-trade ka ng maliliit na token – tumataas sa 0.20% at 0.30% ang spot fees para sa mga Class B at Class C token",
    "Gusto mo ng options – isinara ng KuCoin ang options trading nito noong Enero 15, 2026",
  ],
  intro:
    "Kilala ang KuCoin sa maagang paglilista ng mga altcoin at sa libreng trading bot. Naghahanap ng mga alternatibo sa KuCoin ang mga trader pangunahin dahil isinara nito ang mga account ng mga user sa US noong Enero 2025, dahil restricted ang France, Netherlands, Singapore at ilang bahagi ng Canada, o dahil gusto nila ng futures market na mas malaki kaysa sa KuCoin. Inihahambing ng page na ito ang anim na pinakamalapit na alternatibo sa KuCoin, gamit ang mga numero mula sa sariling website ng mga exchange.",
  reasons: [
    {
      title: "Umalis ang KuCoin sa United States",
      text: "Noong Enero 27, 2025, inanunsyo ng KuCoin ang kasunduan nito sa US Department of Justice; naisara na nito ang mga account ng mga user sa US simula Enero 23, 2025. Restricted na lokasyon sa Terms of Use ng KuCoin ang United States, kasama ang mga teritoryo nito.",
    },
    {
      title: "Iba pang restricted na bansa",
      text: "Nakalista rin sa Terms of Use (na-update noong Oktubre 29, 2026) ang Singapore, mainland China at Hong Kong, Malaysia, Kazakhstan, Uzbekistan, Russia, Belarus, France, Netherlands at ang mga probinsya ng Canada na Ontario at British Columbia.",
    },
    {
      title: "Mas maliit na futures market",
      text: "Mas mababa ang futures volume ng KuCoin kaysa sa limang nangungunang exchange sa derivatives ranking ng CoinMarketCap. Kadalasan, mas maliit ang spread sa malalaking order kapag mas malaki ang order book.",
    },
    {
      title: "Mas mataas na fees sa maliliit na token",
      text: "Para lang sa mga Class A token ang standard spot rate na 0.10%. Sa mga Class B token, 0.20% ang fee, at 0.30% sa mga Class C token; 0.06% naman ang binabayaran ng mga taker sa futures.",
    },
    {
      title: "Wala nang options",
      text: "Inanunsyo ng KuCoin noong Disyembre 24, 2025, na ititigil nito ang options trading service nito; isinara ang mga entry point sa web at app noong Enero 15, 2026.",
    },
    {
      title: "Ang hack noong 2020",
      text: "Noong 2020, humigit-kumulang $285 milyon ang naapektuhan ng isang hack. Ayon sa KuCoin, ito at ang insurance fund nito ang sumagot sa humigit-kumulang $45.55 milyong hindi na nabawi, at walang user na nalugi.",
    },
  ],
  stayIf: [
    "Ginagamit mo ang mga libreng trading bot ng KuCoin at nagagawa ng mga ito ang kailangan mo",
    "May hawak kang KCS – kapag KCS ang ipinambayad mo, may 20% diskwento ka sa spot at margin fees",
    "Nasa EEA ka at sapat na sa iyo ang KuCoin EU, na may lisensya sa ilalim ng MiCAR sa Austria",
  ],
  faqs: [
    {
      q: "Puwede pa bang mag-trade sa KuCoin ang mga user sa US?",
      a: "Hindi. Restricted na lokasyon sa Terms of Use ng KuCoin ang United States, kasama ang mga teritoryo nito, at isinara ng KuCoin ang mga account ng mga user sa US simula Enero 23, 2025. Makikita sa table ng mga bansa sa page na ito kung paano tinatrato ng mga alternatibo ang United States.",
    },
    {
      q: "May options trading pa ba ang KuCoin?",
      a: "Hindi na. Inanunsyo ng KuCoin noong Disyembre 24, 2025, na ititigil nito ang options trading service nito, at isinara ang mga entry point sa web at app noong Enero 15, 2026.",
    },
    {
      q: "Pareho ba ang KuCoin EU at ang KuCoin?",
      a: "Hindi. Ang KuCoin EU Exchange GmbH sa Vienna ang nagsisilbi sa mga residente ng EEA (European Economic Area) maliban sa Malta, gamit ang lisensya sa ilalim ng MiCAR, at pinangangasiwaan ito ng Financial Market Authority ng Austria. May mga seksyon ang help center nito para sa spot, convert, margin, Simple Earn, KuCard at SEPA deposit, pero wala para sa futures.",
    },
  ],
  reserves: "BTC 112%, ETH 115%, USDT 110%, USDC 127% (data noong Oktubre 31, 2026)",
  fund: "",
  featureNotes: {
    copyTrading: "Copy trading sa futures, sa mga USDT perpetual contract",
    tradingBots: "Libreng bot, kasama ang spot grid at DCA",
    options: "Isinara ang options trading noong Enero 15, 2026",
    demoTrading: "",
    margin: "Spot margin, 10x sa BTC/USDT",
    p2p: "P2P marketplace para bumili ng USDT gamit ang lokal na currency",
    fiat: "Visa at Mastercard na card, Apple Pay at bank transfer",
    earn: "KuCoin Earn, kasama ang flexible savings at dual investment",
    launchpad: "Mga token sale sa Spotlight at GemPool",
    web3Wallet: "KuCoin Web3 Wallet, multi-chain at self-custody",
    card: "KuCard: Visa para sa mga residente ng EEA maliban sa Malta, Mastercard sa Australia",
  },
  countryNotes: {
    ca: "restricted ang Ontario at British Columbia",
    de: "KuCoin EU",
    fr: "restricted sa global site; sakop ng KuCoin EU ang EEA maliban sa Malta, pero hindi nito binabanggit ang France",
    nl: "restricted sa global site; sakop ng KuCoin EU ang EEA maliban sa Malta, pero hindi nito binabanggit ang Netherlands",
    es: "KuCoin EU",
    it: "KuCoin EU",
    au: "KuCoin AU",
  },
  regional:
    "Ang KuCoin EU Exchange GmbH sa Vienna (kucoin.com/en-eu) ang nagsisilbi sa mga residente ng EEA (European Economic Area) maliban sa Malta, gamit ang lisensya sa ilalim ng MiCAR at sa ilalim ng pangangasiwa ng FMA ng Austria. Ang KuCoin AU (Axis One Markets Pty Ltd, rehistrado sa AUSTRAC) ang para sa Australia, tumatakbo ang KuCoin Thailand sa kucoin.th, at may hiwalay na tuntunin ng KuCoin Brasil para sa mga residente ng Brazil.",
  mica: "KuCoin EU Exchange GmbH, Vienna, pinangangasiwaan ng FMA ng Austria",
  sourceLabels: [
    "KuCoin: Copy trading sa futures",
    "KuCoin: Mga trading bot (strategy trading)",
    "KuCoin: Abiso sa pagtigil ng options trading",
    "KuCoin: Margin trading",
    "KuCoin: P2P trading",
    "KuCoin: Pagbili ng crypto gamit ang card o bank transfer",
    "KuCoin: Earn",
    "KuCoin: Spotlight launchpad",
    "KuCoin: Web3 Wallet",
    "KuCoin: KuCard",
    "KuCoin EU: General Terms",
    "KuCoin AU",
  ],
};
