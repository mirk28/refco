import type { ExchangeText } from "../../types";

export const kucoin: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Sehemu ya “Referral Code (Optional)” katika hatua ya kwanza ya usajili",
    apply:
      "Uweke kwenye sehemu ya “Referral Code (Optional)” katika hatua ya kwanza ya usajili, au fungua kiungo cha usajili kilicho kwenye ukurasa huu, ambacho hujaza sehemu hiyo na kuifunga.",
    whereToEnter:
      "KuCoin inaomba msimbo wa rufaa katika hatua ya kwanza kabisa ya usajili, pamoja na anwani yako ya barua pepe au namba yako ya simu – kwenye tovuti na kwenye app. Sehemu hiyo imeandikwa “Referral Code (Optional)”. Kiungo kilicho kwenye ukurasa huu kinafungua ukurasa wa usajili wa KuCoin ukiwa tayari na QBSS4BT7 ndani yake na sehemu hiyo ikiwa imefungwa, kwa hiyo hakuna kinachoweza kwenda kombo. Mwongozo wa usajili wa KuCoin unaongeza kwamba unaweza kuandika msimbo mwenyewe ikiwa kiungo hakitaujaza.",
    afterSignupShort: "Kwa ombi – “Link Referrer” katika Kituo cha Msaada (masharti hayajachapishwa)",
    afterSignup:
      "Inawezekana. Kituo cha Msaada cha KuCoin kina ombi la kujihudumia linaloitwa “Link Referrer” (“Submit a request to add a referrer manually” – yaani ombi la kuongeza mwalikaji kwa mkono), pamoja na ombi linalolingana nalo la kumwondoa mwalikaji. Maombi yote mawili yanakuhitaji uingie kwenye akaunti yako, na KuCoin haichapishi masharti wala muda wa mwisho, kwa hiyo hakuna uhakika kwamba ombi lako litakubaliwa. Kuweka msimbo wakati wa kujisajili bado ndiyo njia ya uhakika.",
    inviteeReward:
      "Ukurasa wa rufaa wa KuCoin unasema kwamba marafiki walioalikwa “stand to receive cashback and exclusive newcomer rewards” – yaani wanaweza kupata cashback na zawadi maalum kwa watumiaji wapya. Cashback hiyo ni sehemu ya ada zako mwenyewe za biashara: mwalikaji anaweza kuweka kiwango maalum cha cashback kwa watu anaowaalika, kisichozidi kiwango chake cha sasa cha kamisheni, kwa hiyo hakuna asilimia isiyobadilika. Uhusiano wa rufaa unadumu kwa siku 365 baada ya usajili wako. Juu ya hayo, KuCoin inatangaza bonasi ya hadi 10,650 USDT kwa watumiaji wapya.",
    guide: [
      "Mpango wa rufaa wa KuCoin unamlipa mwalikaji kamisheni kutoka kwenye ada za biashara za watu aliowaalika, na unamruhusu kumrudishia mtumiaji aliyealikwa sehemu ya kamisheni hiyo kama cashback. KuCoin haiweki asilimia isiyobadilika ya cashback – ni kiwango chochote ambacho mwalikaji amekiweka, lakini kisichozidi kiwango chake mwenyewe cha kamisheni.",
      "Rufaa inahusu biashara ya spot (ambayo kwa KuCoin inajumuisha spot, margin na roboti za biashara), ETF na biashara ya futures. Biashara zinazofanywa kupitia API hazistahiki. Uhusiano huu unadumu kwa siku 365 baada ya kujisajili kwako na unakoma mapema zaidi ukifikia VIP 3. Kamisheni hulipwa kila siku kwa sarafu ileile ambayo ada ililipwa kwayo.",
      "KuCoin inaeleza kwamba mpango wa rufaa haupatikani kwa wakazi wa Ubelgiji, Ufaransa, Uholanzi na nchi au maeneo mengine ambako huduma zake zimezuiwa.",
    ],
  },
  signup: {
    methods: ["anwani ya barua pepe", "namba ya simu", "Telegram", "Google", "Apple"],
    steps: [
      {
        title: "Fungua ukurasa wa usajili wa KuCoin",
        text: "Tumia kitufe cha usajili kilicho kwenye ukurasa huu. KuCoin inafungua ukurasa wa “Welcome to KuCoin” ukiwa na msimbo wa rufaa QBSS4BT7 tayari kwenye sehemu ya “Referral Code (Optional)”.",
      },
      {
        title: "Weka anwani yako ya barua pepe au namba ya simu",
        text: "Au endelea kwa Telegram, Google au Apple. Msimbo wa rufaa uko kwenye hatua hiihii ya kwanza.",
      },
      {
        title: "Kubali Masharti ya Matumizi",
        text: "Weka tiki kwenye kisanduku cha Masharti ya Matumizi na Sera ya Faragha, kisha chagua “Create Account and Claim Reward”.",
      },
      {
        title: "Weka msimbo wa uthibitishaji",
        text: "KuCoin inatuma msimbo kwenye barua pepe au simu yako ili kuthibitisha kwamba ni yako.",
      },
      {
        title: "Weka nenosiri la kuingia",
        text: "Chagua nenosiri lako kisha chagua “Confirm” – sasa akaunti yako ipo.",
      },
      {
        title: "Thibitisha utambulisho wako",
        text: "Chagua nchi yako na aina ya kitambulisho, pakia picha za hati hiyo na ukamilishe uthibitishaji wa uso. Watumiaji wapya wanahitaji hatua hii ili kutumia bidhaa za KuCoin.",
      },
    ],
    kycShort: "Lazima kwa watumiaji wapya",
    kyc: "Ndiyo. Tangu 31 Agosti 2023, watumiaji wapya lazima wakamilishe uthibitishaji wa utambulisho (KYC) ili kutumia bidhaa na huduma za KuCoin. Uthibitishaji unahusisha kuchagua nchi yako na aina ya kitambulisho, kupakia picha za hati hiyo na ukaguzi wa uso, na mtu mmoja anaweza kuthibitisha akaunti moja tu ya KuCoin. Akaunti za zamani ambazo hazijawahi kuthibitishwa bado zinaweza kuuza crypto, kufunga nafasi za futures na margin, kukomboa bidhaa za Earn na kutoa pesa, lakini haziwezi kuweka pesa.",
    documents:
      "KuCoin inakubali kitambulisho cha taifa, leseni ya udereva, pasipoti au kibali cha ukaazi, kisha unafuata uthibitishaji wa uso.",
    minAge: "Miaka 18 (Masharti ya Matumizi ya KuCoin)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Ukilipa ada kwa KCS unapata punguzo la 20%, ambalo KuCoin inalitoa kwenye biashara ya spot na margin na kulirudisha kwako kama marejesho ya ada; KuCoin inabainisha kwamba punguzo halisi linaweza kuwa chini kidogo. Ngazi za juu za VIP zinapunguza ada kwa hadi 75%.",
  extraFeeMarkets: ["Spot – tokeni za daraja B", "Spot – tokeni za daraja C"],
  sourceLabels: [
    "KuCoin: Jinsi ya kujisajili (tovuti na app)",
    "KuCoin: Mpango wa rufaa na sheria zake",
    "KuCoin: Huduma binafsi za Kituo cha Msaada (Link Referrer)",
    "KuCoin: Rewards Hub (kazi za watumiaji wapya)",
    "KuCoin: Maswali yanayoulizwa mara kwa mara kuhusu Rewards Hub",
    "KuCoin: Jedwali la ada kwa kila ngazi ya VIP",
    "KuCoin: Kulipa ada kwa KCS",
    "KuCoin: Uthibitishaji wa utambulisho na vikomo vya akaunti",
    "KuCoin: Leverage ya futures kulingana na ukubwa wa nafasi",
    "KuCoin: Ada za roboti za biashara",
    "KuCoin: Masharti ya Matumizi (maeneo yaliyozuiwa, umri wa chini)",
    "KuCoin: Kuhusu sisi",
    "KuCoin: Uthibitisho wa akiba (proof of reserves)",
    "KuCoin EU: Leseni ya MiCAR ya KuCoin EU Exchange GmbH",
    "KuCoin: Taarifa kuhusu makubaliano na Wizara ya Sheria ya Marekani",
    "KuCoin: Barua ya CEO kuhusu tukio la usalama la mwaka 2020",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures", "Roboti za biashara", "ETF"],
  bonusHeadline: "Bonasi ya hadi 10,650 USDT kwa watumiaji wapya",
  benefits: [
    "Ukurasa wa usajili wa KuCoin unatangaza bonasi ya hadi 10,650 USDT kwa watumiaji wapya, inayofunguliwa kwa kukamilisha kazi kwenye Rewards Hub",
    "Cashback kwenye ada zako za biashara ikiwa mwalikaji ameweka kiwango – mpango wa KuCoin unairuhusu kwa siku 365",
    "Rufaa moja inahusu spot, margin, futures, roboti za biashara na ETF",
    "Roboti za biashara ni bure kutumia; unalipa ada ya biashara ya roboti pekee",
  ],
  benefitNote:
    "Kiasi cha 10,650 USDT ni tangazo la KuCoin yenyewe na ni kiwango cha juu kabisa: Rewards Hub inakilipa kwa njia ya vifurushi vya kuponi, fedha za majaribio, vocha za ada na zawadi ndogo za pesa taslimu kwa kujisajili, kuthibitisha utambulisho wako, kuweka amana ya kwanza, kufanya biashara ya kwanza na kukamilisha kazi za muda maalum. Kazi za muda maalum lazima zikamilishwe ndani ya siku 7 baada ya usajili, na zawadi ni halali kwa siku 30. Jozi za stablecoin na biashara zisizo na ada hazihesabiwi, na market makers pamoja na watumiaji wa kitaasisi hawaruhusiwi kushiriki. Ukurasa wa maswali ya mara kwa mara wa Rewards Hub bado unataja kiwango cha juu cha zamani cha 3,200 USDT.",
  headquarters: "KuCoin haiyataji (Masharti ya Matumizi yanafuata sheria ya Visiwa vya Turks na Caicos)",
  regulation: "Leseni ya MiCAR kupitia KuCoin EU Exchange GmbH, Vienna (EEA isipokuwa Malta); usajili wa AUSTRAC nchini Australia",
  users: "Watumiaji milioni 45+ (kwa mujibu wa KuCoin)",
  assets: "Tokeni 1,000+ zilizoorodheshwa, jozi 1,300+ za biashara",
  maxLeverage: "Hadi 125x (ngazi ya nafasi ndogo zaidi)",
  feeNote:
    "KuCoin hupanga tokeni katika madaraja: ada ya spot iliyo hapo juu ni ya tokeni za daraja A (Class A), wakati tokeni za daraja B na daraja C zinagharimu zaidi. Daraja hutegemea sarafu ya msingi (base currency) ya jozi husika.",
  products: ["Futures zenye margin ya USDT na ya sarafu", "Spot", "Margin", "Roboti za biashara", "Copy trading", "Earn", "KuCoin Web3 Wallet"],
  tagline: "Altcoin na roboti za biashara kwa kila mtu",
  quickAnswer:
    "Msimbo wa rufaa wa KuCoin ni QBSS4BT7. Unauweka kwenye sehemu ya “Referral Code (Optional)” katika hatua ya kwanza ya usajili; kitufe kilicho kwenye ukurasa huu kinafungua KuCoin msimbo ukiwa tayari umejazwa na kufungwa. Rufaa inahusu spot, margin, futures na roboti za biashara (trading bots) kwa siku 365, na KuCoin inatangaza bonasi ya hadi 10,650 USDT kwa watumiaji wapya. Ukisahau msimbo, Kituo cha Msaada cha KuCoin kina ombi la “Link Referrer”, lakini masharti yake hayajawekwa hadharani.",
  about: [
    "KuCoin ilizinduliwa katika robo ya tatu ya mwaka 2017 na inasema sasa inahudumia watumiaji zaidi ya milioni 45 katika nchi na maeneo zaidi ya 200, ikiwa na tokeni zaidi ya 1,000 zilizoorodheshwa. Ilijijengea wafuasi kwa kuorodhesha altcoin mapema na kwa kurahisisha biashara ya kiotomatiki: roboti zake za biashara hazina gharama yoyote zaidi ya ada zao za biashara.",
    "Derivatives kwenye KuCoin ni pamoja na futures zenye margin ya USDT na ya sarafu, zenye leverage ya juu zaidi ya 125x kwenye ngazi ya nafasi ndogo zaidi – kikomo kinashuka hadi 100x kwenye ngazi inayofuata, na zaidi kadiri nafasi inavyokua. Jukwaa hili pia linatoa biashara ya margin, copy trading, bidhaa za Earn na pochi ya Web3, na tokeni ya KCS inaleta punguzo la 20% kwenye ada za spot na margin.",
    "KuCoin ilitangaza mnamo 27 Januari 2025 kwamba imefikia makubaliano na Wizara ya Sheria ya Marekani; ilikuwa tayari imefunga akaunti za watumiaji wa Marekani kuanzia 23 Januari 2025. Katika Eneo la Kiuchumi la Ulaya (EEA), kundi la KuCoin linafanya kazi kupitia KuCoin EU Exchange GmbH iliyoko Vienna, mtoa huduma za mali za crypto mwenye leseni chini ya MiCAR anayesimamiwa na FMA ya Austria. Baada ya udukuzi wa mwaka 2020 ulioathiri takriban dola milioni 285, KuCoin inasema kwamba ilifidia, pamoja na mfuko wake wa bima, takriban dola milioni 45.55 ambazo hazikuweza kurejeshwa, na kwamba hakuna mtumiaji aliyepata hasara.",
  ],
  highlights: [
    { title: "Roboti za biashara za bure", text: "Roboti zenyewe hazilipiwi – unalipa ada ya biashara ya roboti pekee." },
    { title: "Msimbo umefungwa", text: "Kiungo cha usajili kinajaza QBSS4BT7 na kufunga sehemu hiyo." },
    { title: "Akiba zaidi ya 100%", text: "BTC 112%, ETH 115%, USDT 110% kufikia 31 Oktoba 2026." },
  ],
  pros: [
    "Biashara ya kiotomatiki iliyo rahisi kwa wanaoanza, kwa roboti za bure",
    "Uchaguzi mpana wa altcoin, wenye tokeni zaidi ya 1,000 zilizoorodheshwa",
    "Ada za chini za kawaida kwenye futures: 0.02% maker / 0.06% taker",
    "Uthibitisho wa akiba zaidi ya 100% kwa BTC, ETH, USDT na USDC",
  ],
  cons: [
    "Haipatikani nchini Marekani, Ufaransa, Uholanzi, Singapore na sehemu za Kanada",
    "Ada za spot hupanda hadi 0.2% na 0.3% kwa tokeni za daraja B na daraja C",
    "Masharti ya kuongeza mwalikaji baada ya kujisajili hayajachapishwa",
    "Kiasi cha biashara ya futures ni kidogo kuliko cha majukwaa matano makubwa zaidi",
  ],
  bestFor: ["Wafanyabiashara wanaotaka kuendesha biashara kiotomatiki kwa roboti", "Wapenzi wa altcoin", "Wafanyabiashara wa futures wa kiwango cha kati"],
  signupTip:
    "Kamilisha uthibitishaji wa utambulisho mara tu baada ya kujisajili – bila hatua hiyo watumiaji wapya hawawezi kutumia KuCoin kabisa – na anza kazi za muda maalum kwenye Rewards Hub ndani ya siku 7 baada ya usajili.",
  safety:
    "KuCoin huchapisha mara kwa mara ripoti za uthibitisho wa akiba (proof of reserves). Takwimu za 31 Oktoba 2026 zilionyesha uwiano wa akiba wa 112% kwa BTC, 115% kwa ETH, 110% kwa USDT na 127% kwa USDC, pamoja na ripoti ya ukaguzi ya 9 Novemba 2026. Kuhusu udukuzi wa mwaka 2020, KuCoin inasema kwamba hakuna mtumiaji aliyepata hasara. Roboti hufanya utekelezaji wa oda kiotomatiki, si udhibiti wa hatari – weka sharti la kusimama kila wakati, na acha kwenye jukwaa pesa za kufanyia biashara pekee.",
  restricted:
    "Masharti ya Matumizi ya KuCoin (yaliyosasishwa 29 Oktoba 2026) yanataja maeneo haya kuwa yamezuiwa: Marekani ikiwemo maeneo yake, Singapore, China bara na Hong Kong, Malaysia, Kazakhstan, Uzbekistan, Urusi, Belarus, majimbo ya Kanada ya Ontario na British Columbia, Ufaransa, Uholanzi pamoja na maeneo ya Crimea, Donetsk, Luhansk, Zaporizhzhia na Kherson. Kutumia VPN kukwepa kizuizi hiki ni marufuku.",
  faqs: [
    {
      topic: "referral",
      q: "Je, QBSS4BT7 ni msimbo wa rufaa wa KuCoin unaofanya kazi?",
      a: "Ndiyo. Mnamo 16 Novemba 2026, kiungo kilicho kwenye ukurasa huu kilifungua ukurasa wa usajili wa KuCoin, msimbo QBSS4BT7 ukiwa tayari umejazwa na kufungwa kwenye sehemu ya “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Rufaa ya KuCoin hudumu kwa muda gani?",
      a: "Siku 365 baada ya usajili wako. Kwa mujibu wa sheria za KuCoin, kamisheni – na pamoja nazo cashback yoyote – pia hukoma ukifikia ngazi ya VIP 3.",
    },
    {
      topic: "referral",
      q: "Msimbo wa rufaa wa KuCoin unanipa cashback kiasi gani?",
      a: "KuCoin haiweki kiwango kisichobadilika. Mwalikaji anaweza kuweka kiwango maalum cha cashback kwa watumiaji aliowaalika, kisichozidi kiwango chake mwenyewe cha kamisheni, na cashback hiyo hulipwa kwenye biashara ya spot, margin, roboti za biashara, ETF na futures. Biashara zinazofanywa kupitia API hazistahiki.",
    },
    {
      topic: "referral",
      q: "“Link Referrer” kwenye KuCoin ni nini?",
      a: "Ni ombi la kujihudumia katika Kituo cha Msaada cha KuCoin, linaloelezwa kama “Submit a request to add a referrer manually” – yaani ombi la kuongeza mwalikaji kwa mkono. Ndiyo njia kwa akaunti zilizosajiliwa bila msimbo. Lazima uingie kwenye akaunti yako ili kulitumia, na KuCoin haichapishi masharti yake.",
    },
    {
      topic: "referral",
      q: "Mpango wa rufaa wa KuCoin haupatikani katika nchi zipi?",
      a: "KuCoin inaeleza kwamba mpango huu haupatikani kwa wakazi wa Ubelgiji, Ufaransa, Uholanzi na nchi au maeneo mengine ambako huduma zake zimezuiwa.",
    },
    {
      topic: "signup",
      q: "Je, naweza kujisajili kwenye KuCoin kwa Google, Apple au Telegram?",
      a: "Ndiyo. Ukurasa wa usajili wa KuCoin unaonyesha “Or continue with” pamoja na Telegram, Google na Apple chini ya sehemu ya barua pepe na namba ya simu.",
    },
    {
      topic: "signup",
      q: "Je, naweza kutumia KuCoin bila KYC?",
      a: "Hapana, si kama mtumiaji mpya. Tangu 31 Agosti 2023, watumiaji wapya lazima wakamilishe uthibitishaji wa utambulisho ili kutumia bidhaa na huduma za KuCoin.",
    },
    {
      topic: "signup",
      q: "Je, naweza kuwa na akaunti mbili za KuCoin?",
      a: "Si akaunti zilizothibitishwa. KuCoin inasema kwamba mtu mmoja anaweza kuthibitisha akaunti moja tu ya KuCoin.",
    },
    {
      topic: "bonus",
      q: "Bonasi ya ukaribisho ya KuCoin ni ipi?",
      a: "KuCoin inatangaza hadi 10,650 USDT kwa watumiaji wapya kwenye ukurasa wake wa mwanzo na kwenye ukurasa wa usajili. Kiasi hiki hulipwa kupitia kazi za watumiaji wapya kwenye Rewards Hub – kujisajili, kuthibitisha utambulisho, amana ya kwanza, biashara ya kwanza na kazi za muda maalum – kwa njia ya vifurushi vya kuponi, fedha za majaribio, vocha za ada na zawadi ndogo za pesa taslimu. Kazi ya kujisajili imeorodheshwa kama kifurushi cha bonasi cha 400 USDT pamoja na zawadi ya pesa taslimu (Bonus Pack and Cash Reward).",
    },
    {
      topic: "bonus",
      q: "Nina muda gani wa kudai zawadi za watumiaji wapya za KuCoin?",
      a: "Kazi za changamoto za muda maalum lazima zikamilishwe ndani ya siku 7 baada ya usajili, na KuCoin inasema kwamba zawadi ni halali kwa siku 30 kabla ya muda wake kuisha.",
    },
    {
      topic: "bonus",
      q: "Biashara zipi hazihesabiwi kwenye kazi za watumiaji wapya za KuCoin?",
      a: "Biashara za jozi za stablecoin na biashara zisizo na ada hazihesabiwi. Market makers na watumiaji wa kitaasisi hawastahiki kabisa.",
    },
    {
      topic: "fees",
      q: "Ada za futures za KuCoin ni kiasi gani?",
      a: "Watumiaji wa VIP 0 hulipa 0.02% maker na 0.06% taker kwenye futures. Roboti ya Futures Grid inatumia ada ya biashara isiyobadilika ya 0.06%.",
    },
    {
      topic: "fees",
      q: "Punguzo la KCS kwenye KuCoin ni kiasi gani?",
      a: "20%. KuCoin inalitoa kwenye biashara ya spot na margin unapolipa ada kwa KCS, na kulirudisha kwako kama marejesho ya ada; punguzo halisi linaweza kuwa chini kidogo.",
    },
    {
      topic: "fees",
      q: "Je, roboti za biashara za KuCoin ni bure?",
      a: "Ndiyo, KuCoin inasema kwamba roboti zenyewe ni bure. Biashara zinazofanywa na roboti zinafuata kanuni tofauti ya ada: roboti za spot zinapata punguzo la 20% kwenye ada ya maker na taker ya VIP 0, roboti ya Futures Grid inalipa 0.06% isiyobadilika, na makato ya KCS pamoja na ngazi za VIP hayatumiki.",
    },
    {
      topic: "fees",
      q: "Leverage ya juu zaidi kwenye KuCoin ni ipi?",
      a: "125x kwa akaunti zilizothibitishwa kwenye ngazi ya nafasi ndogo zaidi. Leverage ya futures kwenye KuCoin imepangwa kwa ngazi kulingana na ukubwa wa nafasi – ngazi inayofuata ina kikomo cha 100x.",
    },
    {
      topic: "safety",
      q: "Je, KuCoin inapatikana Marekani?",
      a: "Hapana. Masharti ya Matumizi ya KuCoin yanaitaja Marekani kuwa eneo lililozuiwa, na KuCoin ilifunga akaunti za watumiaji wa Marekani kuanzia 23 Januari 2025.",
    },
    {
      topic: "safety",
      q: "Je, KuCoin inasimamiwa barani Ulaya?",
      a: "KuCoin EU Exchange GmbH iliyoko Vienna ni mtoa huduma za mali za crypto mwenye leseni chini ya MiCAR, na inasimamiwa na Mamlaka ya Masoko ya Fedha ya Austria (FMA). Inahudumia Eneo la Kiuchumi la Ulaya (EEA) isipokuwa Malta.",
    },
    {
      topic: "safety",
      q: "Je, KuCoin iliwahi kudukuliwa?",
      a: "Ndiyo, mwaka 2020. Takriban dola milioni 285 ziliathirika. KuCoin inasema kwamba ilifidia, pamoja na mfuko wake wa bima, takriban dola milioni 45.55 (16%) ambazo hazikuweza kurejeshwa, na kwamba hakuna mtumiaji aliyepata hasara.",
    },
  ],
};
