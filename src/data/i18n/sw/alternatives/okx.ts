import type { AlternativesText } from "../../../types";

export const okx: AlternativesText = {
  role: "Ada za chini, options na MiCA",
  pick: "OKX inachanganya ada za chini na options pamoja na jukwaa lililoidhinishwa chini ya MiCA kwa ajili ya EEA",
  pitch:
    "OKX inatoza 0.08% maker / 0.10% taker kwenye spot na 0.02% / 0.05% kwenye futures na mikataba ya perpetual, ina options kwa 0.03% na huchapisha uthibitisho wa akiba (proof of reserves) kila mwezi. Wakazi wa Eneo la Kiuchumi la Ulaya (EEA) wanapata jukwaa lililoidhinishwa chini ya MiCA, OKX Europe – ingawa huko mikataba ya perpetual ina kikomo cha 10x.",
  chooseIf: [
    "Unataka ada za kawaida za chini kwenye spot, futures na options",
    "Unaishi katika EEA na unataka jukwaa lililoidhinishwa chini ya MiCA",
    "Unathamini uthibitisho wa akiba wa kila mwezi unaoweza kuulinganisha na salio lako mwenyewe",
  ],
  thinkTwiceIf: [
    "Unataka leverage kubwa barani Ulaya – OKX Europe inaweka kikomo cha 10x kwenye mikataba yake ya perpetual (X-Perps)",
    "Unaishi Kanada, India, Japani au Hong Kong – OKX inaziorodhesha kama maeneo yaliyozuiwa",
    "Unaweza kusahau msimbo wa rufaa – OKX haiuongezi baada ya kujisajili",
  ],
  intro:
    "OKX ni mojawapo ya majukwaa (exchange) makubwa zaidi ya spot na derivatives, yenye ada za kawaida za chini na uthibitisho wa akiba (proof of reserves) kila mwezi. Watu hutafuta mbadala wa OKX hasa kwa sababu unachoweza kufanyia biashara kinategemea sana mahali unapoishi (kwenye OKX Europe mikataba ya perpetual ina kikomo cha 10x), kwa sababu tovuti ya kimataifa inaishia 100x, au kwa sababu OKX imefungwa kwa Kanada, India, Japani na Hong Kong. Ukurasa huu unalinganisha OKX na majukwaa mbadala sita yaliyo karibu zaidi nayo, kwa kutumia takwimu kutoka tovuti za majukwaa yenyewe.",
  reasons: [
    {
      title: "Leverage ina kikomo – hasa barani Ulaya",
      text: "Kwenye tovuti ya kimataifa, leverage ya juu zaidi ni 100x, kwenye mikataba ya perpetual kama BTC-USDT na ETH-USDT. Kwenye OKX Europe, bidhaa ya perpetual inaitwa X-Perps na ina kikomo cha 10x, na chini ya hapo kwa nafasi kubwa zaidi.",
    },
    {
      title: "OKX imezuiwa mahali unapoishi",
      text: "OKX inaorodhesha Kanada, India, Japani, Hong Kong, Malaysia na baadhi ya maeneo ya Marekani kama maeneo yaliyozuiwa (orodha ilisasishwa 14 Novemba 2026). Nchini Uingereza, Australia, Brazili na Korea Kusini, derivatives zimezuiwa.",
    },
    {
      title: "Orodha ndogo ya sarafu",
      text: "Kurasa za OKX Europe zinataja sarafu zaidi ya 270 – orodha ndogo kuliko ile ya majukwaa yanayojikita kwenye altcoin.",
    },
    {
      title: "Zawadi za ukaribisho zimefungwa",
      text: "Kwenye OKX Europe, zawadi za crypto hufungwa kwa hadi siku 45 – unaweza kuzitumia kufanya biashara lakini huwezi kuzitoa. Kwenye tovuti ya kimataifa, zawadi lazima zifunguliwe ndani ya siku 30, na kazi ambazo hazijakamilika huisha muda wake siku 180 baada ya kujisajili.",
    },
    {
      title: "Msimbo wa rufaa uliosahaulika hauwezi kuongezwa",
      text: "OKX inasema kwamba misimbo ya mwaliko inafanya kazi wakati wa usajili pekee na haiwezi kuongezwa kwa kurudi nyuma. Kufuta akaunti na kujisajili upya hakusaidii.",
    },
    {
      title: "Namba ya simu ni lazima",
      text: "OKX inataka kila akaunti iwe na barua pepe pamoja na namba ya simu, na inahitaji uthibitishaji wa utambulisho kabla ya kufanya biashara, kuweka pesa na kutoa pesa.",
    },
  ],
  stayIf: [
    "Unajali ada: 0.08% / 0.10% kwenye spot na 0.02% / 0.05% kwenye futures ni viwango vya kawaida vya chini",
    "Unafanya biashara ya options au futures zenye tarehe ya kuisha pamoja na mikataba ya perpetual",
    "Unaishi katika EEA na unataka kubaki kwenye jukwaa lililoidhinishwa chini ya MiCA",
  ],
  faqs: [
    {
      q: "Leverage ya juu zaidi kwenye OKX Europe ni kiasi gani?",
      a: "10x. Kwenye OKX Europe, bidhaa ya perpetual inaitwa X-Perps na ina kikomo cha 10x, na chini ya hapo kwa nafasi kubwa zaidi. Kwenye tovuti ya kimataifa, OKX inafika hadi 100x kwenye mikataba ya perpetual kama BTC-USDT na ETH-USDT.",
    },
    {
      q: "Je, OKX inapatikana Kanada, India, Japani au Hong Kong?",
      a: "Hapana. Zote nne ziko kwenye orodha ya OKX ya maeneo yaliyozuiwa (iliyosasishwa mara ya mwisho 14 Novemba 2026), pamoja na Malaysia, Afghanistan, Nepal, Uzbekistan na nchi zilizowekewa vikwazo.",
    },
    {
      q: "Je, OKX inapatikana Uingereza?",
      a: "Kwa sehemu tu. Nchini Uingereza, OKX inazuia huduma zinazohusiana na derivatives, huduma zinazohusiana na CeFi na huduma za P2P. Wakazi wa Uingereza hutumia kurasa za Uingereza za jukwaa la kimataifa (okx.com/en-gb), bila kupata bidhaa zote.",
    },
  ],
  reserves: "BTC 108%, ETH 101%, USDT 106%, USDC 100% (ripoti ya kila mwezi, uthibitishaji wa 1 Novemba 2026)",
  fund: "Mfuko wa usalama kwa biashara ya margin na derivatives pekee – unafidia upungufu unaotokana na liquidation",
  featureNotes: {
    copyTrading: "Copy trading ya spot na futures kwenye tovuti ya kimataifa",
    tradingBots: "Spot grid, futures grid na mikakati mingine ya roboti",
    options: "Options kwa 0.03% maker / 0.03% taker kwenye tovuti ya kimataifa",
    demoTrading: "Mazingira ya biashara ya demo, yanayotumika kwa akaunti yako ya OKX",
    margin: "Margin ya spot hadi 10x kwenye tovuti ya kimataifa",
    p2p: "Soko la P2P lenye huduma ya escrow kwenye tovuti ya kimataifa",
    fiat: "Kadi, uhamisho wa benki, PayPal na Apple Pay kulingana na eneo; SEPA, Visa na Mastercard kwenye OKX Europe",
    earn: "Simple Earn, On-chain Earn na dual investment",
    launchpad: "Mauzo ya tokeni kupitia Jumpstart kwenye tovuti ya kimataifa",
    web3Wallet: "OKX Wallet, pochi ya self-custody, mitandao (chains) zaidi ya 130",
    card: "OKX Card, kadi ya Mastercard inayolipa kutoka kwenye stablecoin",
  },
  countryNotes: {
    us: "OKX US, katika maeneo ya Marekani yaliyoidhinishwa pekee",
    uk: "huduma za derivatives, zinazohusiana na CeFi na za P2P zimezuiwa",
    de: "OKX Europe",
    fr: "OKX Europe",
    nl: "OKX Europe",
    es: "OKX Europe",
    it: "OKX Europe",
    au: "OKX Australia",
    sg: "OKX Singapore",
    ae: "OKX Middle East huko Dubai",
  },
  regional:
    "OKX inaendesha majukwaa tofauti kwa maeneo kadhaa: OKX Europe Limited nchini Malta (okx.com/en-eu), iliyoidhinishwa na MFSA chini ya MiCA, kwa wakazi wa Eneo la Kiuchumi la Ulaya (EEA); OKX US (OKX INC., kampuni ya huduma za fedha – money services business – iliyosajiliwa na FinCEN) kwa maeneo ya Marekani yaliyoidhinishwa; OKX Australia; OKX Singapore (OKX SG Pte. Ltd.); OKX Middle East Fintech FZE huko Dubai, yenye leseni ya VARA; na OKX Brazil. Aux Cayes FinTech Co. Ltd. nchini Ushelisheli inahudumia wateja wengine wote. Kila jukwaa la kikanda lina bidhaa zake – kwa mfano, OKX Europe inaweka kikomo cha 10x kwenye mikataba ya perpetual.",
  mica: "OKX Europe Limited, Malta, iliyoidhinishwa na MFSA",
  sourceLabels: [
    "OKX: Copy trading ya spot",
    "OKX: Roboti ya biashara ya spot grid",
    "OKX: Biashara ya options",
    "Nyaraka za API ya OKX: biashara ya demo",
    "OKX: Biashara ya margin ya spot",
    "OKX: Biashara ya P2P",
    "OKX: Kununua crypto kwa kadi au uhamisho wa benki",
    "OKX: Simple Earn",
    "OKX: Jumpstart",
    "OKX Wallet",
    "OKX: OKX Card",
    "OKX Europe: Masharti ya Huduma (EEA)",
    "OKX US",
    "OKX Australia: Kuhusu",
    "OKX UK",
  ],
};
