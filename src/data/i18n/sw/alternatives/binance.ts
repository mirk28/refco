import type { AlternativesText } from "../../../types";

export const binance: AlternativesText = {
  role: "Ukwasi mkubwa zaidi",
  pick: "Binance ina soko la derivatives lenye ukwasi mkubwa zaidi na inakuruhusu kuunganisha msimbo wa rufaa uliousahau ndani ya siku 30",
  pitch:
    "Binance ni jukwaa kubwa zaidi kwenye orodha ya derivatives ya CoinMarketCap na ndiyo kipimo cha ukwasi (liquidity): spread ndogo kwenye mikataba ya perpetual ya BTC, ETH na sarafu kubwa, 0.02% maker / 0.05% taker kwenye futures na leverage ya hadi 150x kwenye BTCUSDT na ETHUSDT. Spot, margin, futures, options, roboti na copy trading zote ziko chini ya akaunti moja.",
  chooseIf: [
    "Unafanya biashara kwa kiasi kikubwa na unahitaji spread ndogo zaidi kwenye mikataba ya perpetual ya BTC, ETH na sarafu kubwa",
    "Unataka spot, margin, futures, options, roboti na copy trading chini ya akaunti moja",
    "Ulijisajili bila msimbo wa rufaa – Binance inakuruhusu kuunganisha msimbo ndani ya siku 30 ikiwa hujaweka pesa wala kufanya biashara",
  ],
  thinkTwiceIf: [
    "Unaishi Marekani, Kanada au Uholanzi – nchi zote tatu ziko kwenye orodha ya Binance ya nchi zilizopigwa marufuku",
    "Unaishi katika EEA na unataka manufaa ya rufaa – Binance imewaondoa watumiaji wa EEA kwenye mpango wake wa rufaa tangu 1 Julai 2026",
    "Unataka leverage kubwa tangu siku ya kwanza – akaunti mpya za futures zina kikomo cha 20x katika siku 30 za kwanza",
  ],
  intro:
    "Kwa open interest (jumla ya mikataba iliyo wazi) ya derivatives, Binance ndiyo jukwaa kubwa zaidi la crypto (exchange), lakini haipatikani kwa kila mtu, na si nafuu zaidi wala yenye unyumbufu zaidi katika kila kipengele. Watu hutafuta mbadala wa Binance hasa kwa sababu Binance imefungwa katika nchi yao – Marekani, Kanada na Uholanzi ziko kwenye orodha yake ya nchi zilizopigwa marufuku –, kwa sababu wanataka ada za chini au leverage kubwa zaidi, au kwa sababu hawataki pesa zao zote ziwe kwenye jukwaa moja tu. Ukurasa huu unalinganisha majukwaa mbadala sita yaliyo karibu zaidi na Binance, kwa kutumia takwimu kutoka kwenye tovuti za majukwaa yenyewe.",
  reasons: [
    {
      title: "Binance haipatikani katika nchi yako",
      text: "Orodha ya Binance ya nchi zilizopigwa marufuku (iliyosasishwa 5 Januari 2026) inataja Marekani, Kanada na Uholanzi, mbali na nchi na maeneo yaliyowekewa vikwazo. Nchini Uingereza, baadhi ya huduma hazipatikani kwa wateja wa rejareja.",
    },
    {
      title: "Unataka ada za chini",
      text: "Katika kiwango cha kawaida, Binance inatoza 0.10% maker na taker kwenye spot na 0.02% / 0.05% kwenye futures za USDⓈ-M. Ukilipa ada kwa BNB, viwango hivyo vinashuka hadi 0.075% kwenye spot na 0.018% / 0.045% kwenye futures.",
    },
    {
      title: "Unataka leverage zaidi au sarafu nyingi zaidi",
      text: "Leverage inaishia 150x kwenye mikataba ya perpetual ya BTCUSDT na ETHUSDT, na akaunti mpya za futures haziwezi kutumia zaidi ya 20x katika siku 30 za kwanza. Binance inaorodhesha sarafu za kidijitali 600+.",
    },
    {
      title: "Hakuna manufaa ya rufaa katika EEA",
      text: "Tangu 1 Julai 2026, watumiaji waliosajiliwa katika nchi za Eneo la Kiuchumi la Ulaya (EEA) hawawezi tena kushiriki katika mpango wa rufaa wa Binance. Masharti ya rufaa ya Binance pia yanataja vizuizi kwa Uingereza, Singapore, Japani, Uturuki, Hong Kong na Israeli.",
    },
    {
      title: "Uthibitishaji unatangulia kila kitu",
      text: "Kila mtumiaji mpya lazima akamilishe uthibitishaji wa utambulisho kabla ya kuweka pesa au kufanya biashara. Binance inasema ukaguzi kwa kawaida hukamilika ndani ya saa 48.",
    },
    {
      title: "Hutaki kila kitu kiwe kwenye jukwaa moja",
      text: "Hakuna jukwaa la kati (centralised exchange) lisilo na hatari. Kuweka mtaji wa biashara pia kwenye jukwaa la pili kunapunguza utegemezi wako kwa jukwaa moja.",
    },
  ],
  stayIf: [
    "Unathamini ukwasi kuliko yote – Binance ina open interest kubwa zaidi na kiasi kikubwa zaidi cha biashara ya futures kuliko jukwaa lolote",
    "Unalipa ada kwa BNB: punguzo la 25% kwenye ada za spot na la 10% kwenye ada za futures za USDⓈ-M",
    "Unathamini usimamizi wa ADGM FSRA, uthibitisho wa akiba unaoweza kuukagua mwenyewe na mfuko wa SAFU wa takriban dola bilioni 1 za Marekani",
  ],
  faqs: [
    {
      q: "Je, Binance inapatikana Marekani, Kanada au Uholanzi?",
      a: "Hapana. Orodha ya Binance ya nchi zilizopigwa marufuku (iliyosasishwa 5 Januari 2026) inataja Marekani, Kanada na Uholanzi. Kwa Marekani, orodha hiyo pia inawahusu raia wa Marekani na mtu yeyote anayefanya shughuli nchini Marekani.",
    },
    {
      q: "Je, mpango wa rufaa wa Binance unafanya kazi barani Ulaya?",
      a: "Si tena kwa wakazi wa Eneo la Kiuchumi la Ulaya (EEA). Kwa mujibu wa masharti ya rufaa ya Binance, watumiaji waliosajiliwa chini ya nchi za EEA hawaruhusiwi kushiriki katika Binance Referral Program tangu 1 Julai 2026, na masharti hayo pia yanataja vizuizi kwa Uingereza. Bado unaweza kufungua akaunti ya Binance kutoka nchi ambazo Binance inahudumia, lakini huko rufaa haina athari yoyote.",
    },
    {
      q: "Je, Binance inaweka kikomo cha leverage kwa akaunti mpya?",
      a: "Ndiyo. Akaunti za futures zenye umri wa chini ya siku 30 haziwezi kutumia zaidi ya 20x. Baada ya hapo, Binance inafika hadi 150x kwenye mikataba ya perpetual ya BTCUSDT na ETHUSDT kwa nafasi za hadi 300,000 USDT.",
    },
  ],
  reserves: "BTC 100.05% (ukaguzi wa 12 Novemba 2026); mtumiaji anaweza kujikagulia mwenyewe kupitia Merkle tree na zk-SNARKs",
  fund: "Mfuko wa SAFU wa takriban dola bilioni 1 za Marekani (kufikia Februari 2026)",
  featureNotes: {
    copyTrading: "Copy trading ya futures na spot",
    tradingBots: "Roboti za grid, DCA, arbitrage, rebalancing na TWAP kwa spot na futures",
    options: "Options za BTC, ETH, BNB, SOL, XRP na DOGE",
    demoTrading: "Biashara ya demo kwa pesa za majaribio kwenye spot na futures",
    margin: "Isolated margin na cross margin",
    p2p: "Binance P2P yenye njia za malipo za ndani ya nchi",
    fiat: "Uhamisho wa benki na kadi ya credit au debit, kulingana na eneo",
    earn: "Simple Earn, dual investment na staking ya ETH",
    launchpad: "Launchpool na HODLer Airdrops",
    web3Wallet: "Binance Wallet, pochi unayoidhibiti mwenyewe (self-custody) ndani ya app ya Binance",
    card: "Binance Card, kwa wakazi wa Brazili pekee",
  },
  countryNotes: {
    uk: "baadhi ya huduma hazipatikani kwa wateja wa rejareja wa Uingereza",
    au: "Binance Australia",
    jp: "Binance Japan",
    sg: "nje ya orodha ya marufuku, lakini mpango wa rufaa una vizuizi huko",
    hk: "nje ya orodha ya marufuku, lakini mpango wa rufaa una vizuizi huko",
    ae: "Binance UAE mjini Dubai",
  },
  regional:
    "Binance.com inaendeshwa na kampuni tatu zenye leseni ya ADGM Financial Services Regulatory Authority mjini Abu Dhabi. Kuna majukwaa tofauti ya ndani kwa Japani (Binance Japan Inc.), Australia (Binance Australia, iliyosajiliwa na AUSTRAC) na UAE (Binance FZE, yenye leseni ya VARA mjini Dubai), na Binance inaorodhesha kampuni nyingine zenye leseni nchini Bahrain, Kazakhstan, New Zealand, Thailand, Indonesia, Mexico, El Salvador, Argentina, Brazili na Afrika Kusini. Ukurasa wake wa leseni hautaji kampuni yoyote ya EU wala ya EEA.",
  mica: "",
  sourceLabels: [
    "Binance: Copy trading",
    "Binance: Roboti za biashara",
    "Binance: Options",
    "Binance: Biashara ya demo",
    "Binance: Isolated margin",
    "Binance P2P",
    "Binance: Kununua crypto kwa kadi au uhamisho wa benki",
    "Binance: Earn",
    "Binance: Launchpool",
    "Binance: Binance Wallet",
    "Binance: Binance Card",
    "Binance UK",
    "Binance Australia",
    "Binance Japan",
    "Binance UAE",
  ],
};
