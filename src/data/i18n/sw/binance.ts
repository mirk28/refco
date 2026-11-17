import type { ExchangeText } from "../../types";

export const binance: ExchangeText = {
  referral: {
    codeName: "Referral ID",
    whereShort: "Sehemu ya “Referral ID (Optional)” katika hatua ya mwisho ya usajili",
    apply:
      "Uweke kwenye sehemu ya “Referral ID (Optional)” katika hatua ya mwisho ya usajili, au fungua kiungo cha usajili kilicho kwenye ukurasa huu, ambacho hukujazia msimbo moja kwa moja.",
    whereToEnter:
      "Binance inaomba msimbo wa rufaa katika hatua ya mwisho ya usajili – baada ya kuthibitisha barua pepe au namba yako ya simu na kuweka nenosiri – kwenye tovuti na pia kwenye app. Ukifika kupitia kiungo cha rufaa, Binance inakujazia msimbo yenyewe na kuonyesha alama ya vema ya kijani yenye “Linked” kando yake. Vinginevyo, andika REFCO888 kwenye sehemu ya “Referral ID (Optional)”. Hatua hii ni ya hiari na unaweza kuiruka.",
    afterSignupShort: "Ndiyo – ndani ya siku 30, kabla ya kuweka pesa au kufanya biashara yoyote",
    afterSignup:
      "Ndiyo, kwa masharti. Binance inakuruhusu kuunganisha msimbo wa rufaa uliokosekana kwenye ukurasa wake wa kuunganisha rufaa (binance.com/en/activity/referral/bind-ref) ikiwa akaunti yako ina umri wa chini ya siku 30, haina amana wala shughuli yoyote ya biashara, bado haina rufaa na ni akaunti kuu; ikiwa uthibitishaji wa utambulisho wako haukutumika kwenye akaunti nyingine katika siku 180 zilizopita; na ikiwa akaunti haijawekewa alama ya wash trading. Rufaa ikishaunganishwa, Binance inasema haiwezi kubadilishwa wala kuondolewa.",
    inviteeReward:
      "REFCO888 ni msimbo wa Binance Referral Pro. Katika njia ya Pro, mwalikwa hurudishiwa sehemu ya ada zake mwenyewe za biashara, ikilipwa kwa USDC, ikiwa mwalikaji amechagua kugawana kamisheni yake – Binance inaonyesha kiwango kinachohusika wakati wa usajili. Mbali na msimbo huu, Binance inampa kila mtumiaji mpya aliyethibitishwa kazi za wanaoanza zenye thamani ya hadi 100 USD katika vocha za marejesho ya ada za biashara.",
    guide: [
      "Binance ina njia mbili za rufaa, na mtumiaji mpya anaweza kuwa katika moja tu kati ya hizo. Viungo vya muundo binance.com/register?ref=… – kama kile kilicho kwenye ukurasa huu – ni vya Referral Pro: mwalikaji anapata kamisheni kutoka kwenye ada zako za biashara na anaweza kukurudishia sehemu yake kama marejesho kwa USDC. Njia nyingine, Referral Lite, inatumia vocha za marejesho ya ada za biashara kwa ununuzi na biashara ndogo za kwanza; Binance haitoi vocha hizo chini ya msimbo wa Pro.",
      "Rufaa moja ya Pro inahusu spot, margin na futures. Ukifungua akaunti ya futures baadaye, Binance inaonyesha sehemu ya pili ya hiari, “Futures Referral ID”. Sehemu hiyo inakubali msimbo wa mwalikaji yule yule aliyealika akaunti yako kuu pekee, kwa hivyo huwezi kuchanganya waalikaji wawili tofauti.",
      "Mahali unapoishi ni muhimu. Tangu 1 Julai 2026, watumiaji waliosajiliwa katika nchi za Eneo la Kiuchumi la Ulaya (EEA) hawawezi tena kushiriki katika mpango wa rufaa wa Binance kwa namna yoyote, na masharti ya rufaa ya Binance pia yanataja vizuizi kwa Uingereza, Singapore, Japani, Uturuki, Hong Kong na Israeli. Bado unaweza kufungua akaunti kutoka nchi ambazo Binance inahudumia, lakini hapo rufaa haina athari yoyote.",
    ],
  },
  signup: {
    methods: ["barua pepe", "namba ya simu", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Fungua ukurasa wa usajili wa Binance",
        text: "Tumia kitufe cha kujisajili kilicho kwenye ukurasa huu. Kinafungua accounts.binance.com huku rufaa ikiwa imeshaunganishwa – Binance inaonyesha msimbo REFCO888 kando ya fomu.",
      },
      {
        title: "Weka barua pepe au namba yako ya simu",
        text: "Au endelea na Google, Apple au Telegram. Kubali Masharti ya Matumizi na Taarifa ya Faragha ili kuendelea.",
      },
      {
        title: "Thibitisha msimbo wa tarakimu 6",
        text: "Binance inatuma msimbo wa uthibitishaji wa tarakimu 6 kwenye barua pepe au simu yako. Msimbo huo unafanya kazi kwa dakika 30.",
      },
      {
        title: "Weka nenosiri",
        text: "Angalau herufi 8, zikiwemo herufi kubwa moja na tarakimu moja.",
      },
      {
        title: "Kagua msimbo wa rufaa",
        text: "Katika hatua ya mwisho, sehemu ya Referral ID inapaswa kuwa imeshajazwa, ikiwa na alama ya vema ya kijani na “Linked”. Ikiwa sehemu hiyo iko wazi, weka REFCO888 – au iruke ikiwa hutaki rufaa.",
      },
      {
        title: "Thibitisha utambulisho wako",
        text: "Kisha Binance inakupeleka kwenye uthibitishaji wa utambulisho. Kila mtumiaji mpya lazima aukamilishe kabla ya kuweka pesa au kufanya biashara.",
      },
    ],
    kycShort: "Lazima kwa bidhaa zote",
    kyc: "Ndiyo. Binance inamtaka kila mtumiaji mpya akamilishe uthibitishaji wa utambulisho (hali “Verified”) kabla ya kutumia bidhaa yoyote – ikiwemo kuweka crypto na kufanya biashara. Unachagua hati, unaipakia kisha unapitia ukaguzi wa uso (liveness check); Binance inasema ukaguzi huo kwa kawaida hukamilika ndani ya saa 48. Akaunti za zamani ambazo hazijawahi kuthibitishwa zinaweza kutoa pesa tu.",
    documents:
      "Watumiaji wengi wanaweza kuthibitisha kwa pasipoti, kitambulisho cha taifa au leseni ya udereva, kisha hufuata ukaguzi wa uso (liveness check).",
    minAge: "Miaka 18 (Masharti ya Matumizi ya Binance)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Kulipa ada kwa BNB kunapunguza ada za spot kwa 25% (0.075% badala ya 0.10%) na ada za futures za USDⓈ-M kwa 10% (0.018% maker / 0.045% taker badala ya 0.02% / 0.05%).",
  extraFeeMarkets: ["Futures za COIN-M"],
  sourceLabels: [
    "Binance: Jinsi ya kujisajili kwenye tovuti (hatua ya msimbo wa rufaa)",
    "Binance: Jinsi ya kujisajili kwenye app",
    "Binance: Kuunganisha msimbo wa rufaa baada ya usajili",
    "Binance: Njia za Referral Pro na Referral Lite",
    "Binance: Masharti ya mpango wa rufaa na vizuizi vya kikanda",
    "Binance: Zawadi za ukaribisho kwa watumiaji wapya (vocha za marejesho ya ada)",
    "Binance: Viwango vya ada za biashara ya spot",
    "Binance: Viwango vya ada za futures za USDⓈ-M",
    "Binance: Viwango vya ada za futures za COIN-M",
    "Binance: Leverage na margin kwenye futures za USDⓈ-M",
    "Binance: Kikomo cha leverage kwa akaunti mpya za futures",
    "Binance: Uthibitishaji wa utambulisho",
    "Binance: Masharti ya Matumizi",
    "Binance: Orodha ya nchi zilizopigwa marufuku",
    "Binance: Leseni na usajili",
    "Binance: Uthibitisho wa akiba (proof of reserves)",
    "Binance: Mfuko wa SAFU",
    "Binance: Kuhusu Binance",
  ],
  guides: {
    heading: "Miongozo kwenye Binance Square",
    intro:
      "Miongozo mirefu zaidi ya maswali na majibu kuhusu mpango wa rufaa wa Binance inachapishwa kwenye Binance Square, jukwaa la maudhui la Binance yenyewe – mmoja kwa kila lugha, kila mmoja ukiwa umeandikwa kwa ajili ya wasomaji wake badala ya kutafsiriwa:",
    linkLabel: "Msimbo wa rufaa wa Binance: maswali na majibu",
  },
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures"],
  bonusHeadline: "Vocha za marejesho ya ada za hadi 100 USD",
  benefits: [
    "Kazi za wanaoanza zenye thamani ya hadi 100 USD katika vocha za marejesho ya ada za biashara, mara akaunti yako inapothibitishwa",
    "Rufaa moja inahusu spot, margin na futures – hakuna haja ya msimbo wa pili",
    "Punguzo la 25% kwenye ada za spot na la 10% kwenye ada za futures za USDⓈ-M unapolipa ada kwa BNB",
    "Msimbo bado unaweza kuunganishwa hadi siku 30 baada ya usajili ikiwa hujaweka pesa wala kufanya biashara",
  ],
  benefitNote:
    "Vocha za ukaribisho ni ofa ya jumla ya Binance kwa watumiaji wapya, si zawadi ya msimbo wa rufaa. Zinatolewa baada ya uthibitishaji wa utambulisho, zinarejesha ada za biashara ya spot, haziwezi kufidia biashara zinazofanywa kupitia API na zinatumika ndani ya app ya Binance pekee. Binance inaziweka nchi nyingi nje ya ofa hii; orodha yake ndefu inajumuisha Uingereza, Marekani, Kanada, Uholanzi, Norwei, Serbia, Japani, Singapore na Hong Kong.",
  headquarters: "Inaendeshwa kupitia kampuni zenye leseni ya ADGM mjini Abu Dhabi",
  regulation:
    "Inasimamiwa na ADGM FSRA (Abu Dhabi); leseni na usajili mwingine ikiwemo Dubai (VARA), Bahrain, Kazakhstan, Australia na Japani",
  users: "Watumiaji milioni 320+ waliosajiliwa (kwa mujibu wa Binance)",
  assets: "Sarafu za kidijitali 600+",
  maxLeverage: "Hadi 150x (mikataba ya perpetual ya BTCUSDT na ETHUSDT)",
  feeNote: "Ngazi za juu za VIP hupunguza viwango hivi zaidi.",
  products: ["Spot", "Margin", "Futures za USDⓈ-M na COIN-M", "Options", "Copy trading", "Roboti za biashara", "Earn na Launchpool"],
  tagline: "Ukwasi mkubwa zaidi kwenye derivatives za crypto",
  quickAnswer:
    "Msimbo wa rufaa wa Binance ni REFCO888. Binance inauomba katika hatua ya mwisho ya usajili; ukitumia kitufe kilicho kwenye ukurasa huu, unajazwa moja kwa moja. Msimbo mmoja unahusu spot, margin na futures. Ikiwa ulisahau kuuweka, Binance inakuruhusu kuunganisha msimbo ndani ya siku 30 baada ya usajili, ilimradi hujaweka pesa wala kufanya biashara. Watumiaji wapya waliothibitishwa wanaweza pia kupata hadi 100 USD katika vocha za marejesho ya ada za biashara.",
  about: [
    "Binance ilianzishwa Julai 2017 na, kwa maelezo yake yenyewe, ndani ya siku 180 ikawa jukwaa kubwa zaidi la crypto (exchange) duniani. Leo inaripoti kuwa na watumiaji waliosajiliwa zaidi ya milioni 320 katika nchi zaidi ya 180, na inaorodhesha sarafu za kidijitali (crypto) zaidi ya 600. Kwenye derivatives ndiyo namba moja bila ubishi: katika tarehe ya takwimu zetu za soko, ilikuwa na open interest (jumla ya mikataba iliyo wazi) kubwa kuliko majukwaa matatu yanayoifuata kwenye orodha ya derivatives ya CoinMarketCap yakijumlishwa. Hili ni muhimu kwa wafanyabiashara, kwa sababu vitabu vya oda vyenye kina humaanisha spread ndogo zaidi na slippage ndogo kwenye oda kubwa.",
    "Kwa akaunti moja unapata biashara ya spot na margin, futures zenye margin ya USDⓈ na zenye margin ya sarafu, options, roboti za biashara (trading bots) na copy trading, pamoja na Earn na Launchpool. Kwenye futures za USDⓈ-M, leverage inafika hadi 150x kwenye mikataba ya perpetual ya BTCUSDT na ETHUSDT kwa nafasi za hadi 300,000 USDT; mikataba yenye margin ya sarafu inafika hadi 125x. Akaunti mpya za futures haziwezi kutumia zaidi ya 20x katika siku 30 za kwanza.",
    "Binance.com inasimamiwa na Financial Services Regulatory Authority ya Abu Dhabi Global Market (ADGM) kupitia kampuni tatu zenye leseni. Binance pia inaorodhesha leseni na usajili katika Dubai (VARA), Bahrain, Kazakhstan, Australia (AUSTRAC), India, Indonesia, Japani, New Zealand, Thailand, Mexico, El Salvador, Argentina, Brazili na Afrika Kusini. Uthibitisho wake wa akiba (proof of reserves) unachanganya Merkle tree na zk-SNARKs ili watumiaji waweze kukagua kwamba salio lao wenyewe limejumuishwa, na mfuko wake wa dharura wa SAFU, ulioanzishwa mwaka 2018, ulikuwa na takriban dola bilioni 1 za Marekani kufikia Februari 2026.",
  ],
  highlights: [
    { title: "#1 kwa ukwasi", text: "Open interest kubwa zaidi na kiasi kikubwa zaidi cha biashara ya futures kuliko jukwaa lolote." },
    { title: "Ada za chini za futures", text: "0.02% maker / 0.05% taker katika kiwango cha kawaida, 10% chini zaidi ukitumia BNB." },
    { title: "Kila kitu ndani ya app moja", text: "Futures, options, roboti, copy trading na Earn chini ya akaunti moja." },
  ],
  pros: [
    "Ukwasi (liquidity) usio na mpinzani kwenye mikataba ya perpetual ya BTC, ETH na altcoin kubwa",
    "Ada za kawaida zenye ushindani, pamoja na punguzo la ziada la BNB",
    "Uthibitisho wa akiba unaoweza kuukagua mwenyewe na mfuko wa SAFU wa takriban dola bilioni 1 za Marekani",
    "Msimbo wa rufaa uliokosekana bado unaweza kuunganishwa ndani ya siku 30",
  ],
  cons: [
    "Haipatikani nchini Marekani, Kanada na Uholanzi",
    "Uthibitishaji wa utambulisho unahitajika kabla ya kuweka pesa au kufanya biashara",
    "Akaunti mpya za futures zina kikomo cha leverage ya 20x katika siku 30 za kwanza",
    "Wakazi wa EEA wameondolewa kwenye mpango wa rufaa tangu Julai 2026",
  ],
  bestFor: [
    "Wafanyabiashara wa futures wanaofanya biashara mara kwa mara na wanaohitaji ukwasi mkubwa",
    "Wafanyabiashara wanaotaka jukwaa moja kwa kila kitu",
    "Watumiaji wenye kiasi kikubwa cha biashara wanaonufaika na ngazi za VIP",
  ],
  signupTip:
    "Kamilisha uthibitishaji wa utambulisho mara moja: Binance hairuhusu akaunti mpya kuweka pesa wala kufanya biashara bila huo, na kazi za ukaribisho hutolewa tu baada ya kuthibitishwa.",
  safety:
    "Binance inachapisha uthibitisho wa akiba (proof of reserves) ambao, kwa mujibu wake, unaonyesha kwamba salio la akaunti zote linadhaminiwa kwa uwiano wa 1:1 – ukaguzi wa 12 Novemba 2026 ulionyesha uwiano wa akiba ya BTC wa 100.05% – na inakuruhusu kukagua akaunti yako mwenyewe chini ya Wallet → Verification. Ulinzi wa akaunti unajumuisha uthibitishaji wa hatua mbili, passkeys na orodha ya anwani zilizoruhusiwa kutolea pesa (withdrawal whitelist). Mfuko wa SAFU umekusudiwa kuwalinda watumiaji katika hali za dharura kali. Hakuna jukwaa la kati (centralised exchange) lisilo na hatari, kwa hivyo weka huko tu pesa unazozifanyia biashara kwa sasa.",
  restricted:
    "Orodha ya Binance ya nchi zilizopigwa marufuku (iliyosasishwa 5 Januari 2026) inataja Marekani, Kanada, Uholanzi, Cuba, Korea Kaskazini, Iran, Crimea na zile zinazoitwa Jamhuri za Watu za Donetsk na Luhansk.",
  faqs: [
    {
      topic: "referral",
      q: "Je, REFCO888 ni msimbo wa rufaa wa Binance unaofanya kazi?",
      a: "Ndiyo. Mnamo 16 Novemba 2026, kiungo binance.com/register?ref=REFCO888 kilifungua ukurasa wa usajili wa Binance yenyewe, ambao ulionyesha msimbo REFCO888 kando ya fomu ya usajili.",
    },
    {
      topic: "referral",
      q: "Tofauti kati ya Binance Referral Pro na Referral Lite ni ipi?",
      a: "Ni njia mbili tofauti, na mtumiaji mpya anaweza kuwa katika moja tu. Katika Referral Pro, mwalikaji anapata kamisheni kutoka kwenye ada zako za biashara na anaweza kukugawia sehemu yake kama marejesho yanayolipwa kwa USDC. Katika Referral Lite, pande zote mbili hupokea vocha za marejesho ya ada za biashara kwa kukamilisha kazi ndogo za ununuzi wa kwanza na biashara ya kwanza. REFCO888 ni msimbo wa Referral Pro, kwa hivyo vocha za Lite hazihusiki.",
    },
    {
      topic: "referral",
      q: "Je, kuna msimbo maalum wa rufaa wa Binance Futures?",
      a: "Binance inaonyesha sehemu ya hiari ya “Futures Referral ID” unapofungua akaunti ya futures. Sehemu hiyo inakubali tu msimbo wa mwalikaji yule yule ambaye ulitumia msimbo au kiungo chake cha Referral Pro kujisajili, kwa hivyo kwa vitendo rufaa moja inahusu spot, margin na futures.",
    },
    {
      topic: "referral",
      q: "Je, naweza kubadilisha msimbo wangu wa rufaa wa Binance baadaye?",
      a: "Hapana. Binance inasema kwamba uhusiano wa rufaa ukishaanzishwa hauwezi kubadilishwa wala kuondolewa. Ni akaunti isiyo na rufaa yoyote pekee inayoweza kuunganisha msimbo, ndani ya siku 30 baada ya usajili na kabla ya kuweka pesa au kufanya biashara kwa mara ya kwanza.",
    },
    {
      topic: "referral",
      q: "Je, msimbo wa rufaa wa Binance unafanya kazi katika Umoja wa Ulaya (EU)?",
      a: "Si tena. Kwa mujibu wa masharti ya rufaa ya Binance, watumiaji waliosajiliwa chini ya nchi za Eneo la Kiuchumi la Ulaya (EEA) hawaruhusiwi kushiriki katika Binance Referral Program tangu 1 Julai 2026. Masharti hayo pia yanataja vizuizi kwa Uingereza, Singapore, Japani, Uturuki, Hong Kong na Israeli.",
    },
    {
      topic: "signup",
      q: "Je, naweza kujisajili Binance kwa Google, Apple au Telegram?",
      a: "Ndiyo. Mbali na barua pepe au namba ya simu, ukurasa wa usajili wa Binance una “Continue with Google”, “Continue with Apple” na “Continue with Telegram”.",
    },
    {
      topic: "signup",
      q: "Masharti ya nenosiri la Binance ni yapi?",
      a: "Nenosiri la Binance linahitaji angalau herufi 8, zikiwemo herufi kubwa moja na tarakimu moja.",
    },
    {
      topic: "signup",
      q: "Msimbo wa uthibitishaji wa Binance unafanya kazi kwa muda gani?",
      a: "Msimbo wa tarakimu 6 ambao Binance inatuma kwenye barua pepe au simu yako wakati wa usajili unafanya kazi kwa dakika 30.",
    },
    {
      topic: "signup",
      q: "Uthibitishaji wa utambulisho wa Binance huchukua muda gani?",
      a: "Binance inasema ukaguzi kwa kawaida hukamilika ndani ya saa 48 baada ya kuwasilisha hati yako na kupita ukaguzi wa uso (liveness check).",
    },
    {
      topic: "signup",
      q: "Je, naweza kutumia Binance bila KYC?",
      a: "Hapana. Watumiaji wote wapya lazima wathibitishwe kabla ya kutumia bidhaa za Binance, ikiwemo kuweka crypto na kufanya biashara. Akaunti za zamani ambazo hazijathibitishwa zinaweza kutoa pesa tu.",
    },
    {
      topic: "bonus",
      q: "Bonasi ya ukaribisho ya Binance kwa watumiaji wapya ni ipi?",
      a: "Binance inawapa watumiaji wapya kazi tatu za wanaoanza ambazo hufungua vocha za marejesho ya ada za biashara zenye thamani ya hadi 100 USD. Kazi hizo hutolewa tu baada ya kukamilisha uthibitishaji wa akaunti, na kila vocha inarejesha asilimia maalum ya ada zako za biashara ya spot.",
    },
    {
      topic: "bonus",
      q: "Je, naweza kutoa bonasi ya ukaribisho ya Binance?",
      a: "Hapana. Zawadi hii ni vocha ya marejesho ya ada za biashara, si pesa taslimu: inarejesha ada za biashara ya spot, haiwezi kutumika kwa biashara zinazofanywa kupitia API na inatumika ndani ya app ya Binance pekee.",
    },
    {
      topic: "bonus",
      q: "Nchi zilizoondolewa kwenye vocha za ukaribisho za Binance ni zipi?",
      a: "Masharti ya Binance yanaziondoa, miongoni mwa nyingine, Uingereza, Marekani, Kanada, Uholanzi, Kroatia, Norwei, Iceland, Liechtenstein, Serbia, Albania, Urusi, Japani, Singapore na Hong Kong. Orodha kamili iko kwenye makala ya msaada ya Binance kuhusu zawadi za ukaribisho.",
    },
    {
      topic: "fees",
      q: "Punguzo la ada kwa BNB kwenye Binance ni kiasi gani?",
      a: "Kulipa ada kwa BNB kunapunguza ada za spot kwa 25% – 0.075% badala ya 0.10% kwa watumiaji wa kawaida – na ada za futures za USDⓈ-M kwa 10%, hivyo zinakuwa 0.018% maker na 0.045% taker.",
    },
    {
      topic: "fees",
      q: "Leverage ya juu zaidi kwenye Binance ni kiasi gani?",
      a: "Hadi 150x kwenye mikataba ya perpetual ya BTCUSDT na ETHUSDT ya USDⓈ-M kwa nafasi za hadi 300,000 USDT, na hadi 125x kwenye mkataba wa perpetual wa BTCUSD wenye margin ya sarafu. Akaunti za futures zenye umri wa chini ya siku 30 haziwezi kutumia zaidi ya 20x. Leverage kubwa huongeza sana hatari ya liquidation (nafasi kufungwa kwa lazima).",
    },
    {
      topic: "fees",
      q: "Ada za futures za COIN-M kwenye Binance ni zipi?",
      a: "Watumiaji wa kawaida hulipa 0.02% maker na 0.05% taker kwenye futures za COIN-M, viwango sawa na vya mikataba ya USDⓈ-M yenye margin ya USDT.",
    },
    {
      topic: "safety",
      q: "Je, Binance inapatikana Marekani?",
      a: "Hapana. Marekani imo kwenye orodha ya Binance ya nchi zilizopigwa marufuku, pamoja na Kanada na Uholanzi.",
    },
    {
      topic: "safety",
      q: "Mfuko wa SAFU wa Binance ni nini?",
      a: "SAFU (Secure Asset Fund for Users) ni mfuko wa dharura ambao Binance iliuanzisha mwaka 2018 ili kuwalinda watumiaji katika hali za dharura kali. Binance inasema mfuko huo ulikuwa na mali za crypto zenye thamani ya takriban dola bilioni 1 za Marekani kufikia Februari 2026, na huongezewa fedha ukishuka chini ya dola milioni 800 za Marekani.",
    },
    {
      topic: "safety",
      q: "Jinsi ya kukagua uthibitisho wa akiba wa Binance?",
      a: "Binance inachapisha uwiano wake wa akiba kwenye ukurasa wake wa uthibitisho wa akiba (proof of reserves) na inatumia Merkle tree pamoja na zk-SNARKs. Watumiaji walioingia kwenye akaunti wanaweza kuthibitisha chini ya Wallet → Verification kwamba salio lao wenyewe limejumuishwa.",
    },
  ],
};
