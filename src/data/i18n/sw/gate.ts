import type { ExchangeText } from "../../types";

export const gate: ExchangeText = {
  referral: {
    codeName: "msimbo wa rufaa",
    whereShort: "Huunganishwa kupitia kiungo cha usajili – Gate inaonyesha mwalikaji kwenye fomu ya usajili",
    apply:
      "Fungua kiungo cha usajili kilicho kwenye ukurasa huu: Gate inaunganisha msimbo na usajili wako na kuonyesha kwenye fomu bango la mwalikaji pamoja na zawadi.",
    whereToEnter:
      "Kwa Gate, njia salama zaidi ni kiungo cha rufaa. Kiungo kilicho kwenye ukurasa huu kinafungua gate.com/signup huku msimbo VAAXAW9YVA ukiwa umeshaunganishwa. Gate inathibitisha hilo kwa bango lililo juu ya fomu (“Register now to receive a gift from your friend”). Hatua ya kwanza ya fomu ya tovuti inauliza tu nchi unakoishi, kwa hivyo hapo hakuna kisanduku tofauti cha kujaza msimbo – usipoona bango la mwalikaji, fungua kiungo tena kabla ya kufungua akaunti.",
    afterSignupShort: "Gate haijataja njia yoyote – tumia kiungo unapojisajili",
    afterSignup:
      "Gate haichapishi njia yoyote ya kuongeza msimbo wa rufaa kwenye akaunti ambayo tayari ipo. Kanuni zake za rufaa zinasema kwamba kila mtumiaji anaweza kujisajili kupitia njia moja tu ya rufaa. Mwongozo wa Gate wenyewe pia unaonya kwamba uhusiano wa rufaa huenda usirekodiwe ikiwa mtumiaji mpya atajisajili bila kiungo au msimbo wa mwaliko. Tumia kiungo kabla ya kufungua akaunti.",
    inviteeReward:
      "Ukijisajili kupitia kiungo hiki, unaingia kwenye mpango wa Super Commission wa Gate: ukurasa wa usajili wa Gate unasema kwamba unapata zawadi ya kamisheni ya 10% kwenye ada zako za biashara. Kwa mujibu wa kanuni za mpango huo, marejesho hayo yanakokotolewa kwa ada zako za biashara za mwaka 1 na hayahusu miamala ya fiat.",
    guide: [
      "Gate inaendesha mipango kadhaa ya rufaa kwa wakati mmoja. Msimbo VAAXAW9YVA ni wa Super Commission, ambapo mwalikaji hugawana sehemu ya kamisheni yake na watu anaowaalika: Gate inaonyesha mgawanyo wa 30% kwa mwalikaji na 10% kwa rafiki aliyealikwa, kwa kuzingatia ada za biashara za rafiki huyo kwa mwaka mmoja. Miamala ya fiat haihusiki.",
      "Usajili mmoja unahusu spot, margin, futures na Trenches (sehemu ambayo Gate pia huiita Gate Alpha). Kampeni nyingine za rufaa za Gate zinatumia vocha badala yake – “Earn Voucher” na “Token Crew” – lakini kanuni za Super Commission zinasema kwamba akaunti zilizoalikwa kwa njia hii hazistahili zawadi za kampeni nyingine, kwa hivyo usitegemee kuzichanganya.",
      "Gate haiwezeshi mialiko kati ya tovuti zake tofauti. Ikiwa unaishi katika Eneo la Kiuchumi la Ulaya (EEA), kampuni tofauti ya Gate iliyoko Malta (gate.com/en-eu) ndiyo inayokuhudumia; huko kamisheni hulipwa kwa biashara ya spot pekee na rufaa iliyofanywa kwenye tovuti ya kimataifa haihamishiwi. Super Commission pia haipatikani kwa watumiaji kutoka Ubelgiji, Uingereza, Ufaransa, Ujerumani, Uholanzi, Uturuki, Austria na Korea Kusini.",
    ],
  },
  signup: {
    methods: ["barua pepe", "namba ya simu", "Google", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Fungua ukurasa wa usajili wa Gate",
        text: "Tumia kitufe cha kujisajili kilicho kwenye ukurasa huu. Juu ya fomu, Gate inaonyesha bango lenye mwalikaji na zawadi ya 10% kwenye ada – hiyo ndiyo ishara kwamba rufaa imeunganishwa.",
      },
      {
        title: "Chagua nchi au eneo unakoishi",
        text: "Chagua mahali unapoishi na ukubali Makubaliano ya Mtumiaji (User Agreement), kisha bofya “Create Account”.",
      },
      {
        title: "Weka barua pepe au namba yako ya simu",
        text: "Chagua mojawapo kati ya hizo mbili; Gate inaitumia kwa kuingia kwenye akaunti na kwa misimbo ya usalama.",
      },
      {
        title: "Weka msimbo wa uthibitisho",
        text: "Gate inatuma msimbo kwenye barua pepe au simu yako. Kwa mujibu wa mwongozo wa app ya Gate, msimbo huo ni halali kwa dakika 15.",
      },
      {
        title: "Weka nenosiri lako",
        text: "Chagua nenosiri imara ambalo hulitumii mahali pengine ili kumaliza kufungua akaunti.",
      },
      {
        title: "Thibitisha utambulisho wako",
        text: "Kamilisha uthibitishaji wa utambulisho (KYC) kwa pasipoti, kitambulisho au leseni ya udereva. Bila hiyo, Gate haikuruhusu kuweka wala kutoa crypto.",
      },
    ],
    kycShort: "Lazima ili kuweka na kutoa crypto",
    kyc: "Ndiyo. Gate inasema kwamba uthibitishaji wa utambulisho (KYC) ni lazima kwa watumiaji wote ili kuweka na kutoa sarafu za kidijitali, kufanya biashara ya sarafu za fiat na kujiandikisha kwenye Startup. Uthibitishaji wa anwani ni wa hiari na huongeza vikomo vyako vya kutoa pesa. Kazi ya kuthibitisha utambulisho pia ni sehemu ya zawadi za Gate kwa watumiaji wapya.",
    documents:
      "Kwa uthibitishaji wa utambulisho, Gate inakubali pasipoti, kitambulisho au leseni ya udereva. Unaweza kuongeza uthibitisho wa anwani kwa hiari ili upate vikomo vya juu zaidi.",
    minAge: "Miaka 18 (Makubaliano ya Mtumiaji ya Gate)",
  },
  welcomeTasks: [
    { task: "Kujisajili", reward: "Vocha yenye thamani ya 50 USDT" },
    { task: "Kukamilisha uthibitishaji wa utambulisho", reward: "Vocha yenye thamani ya 50 USDT" },
    { task: "Amana ya kwanza ya angalau 10 USDT", reward: "Vocha yenye thamani ya 10 USDT" },
    { task: "Biashara ya kwanza ya angalau 10 USDT", reward: "Vocha yenye thamani ya 5 USDT" },
    { task: "Kupakua app kwa mara ya kwanza", reward: "Vocha yenye thamani ya 10 USDT" },
    {
      task: "Kazi ya kiwango cha juu, hatua ya kwanza: amana halisi (net deposit) ya angalau 50 USDT na kiasi cha biashara cha 500 USDT",
      reward: "100 USDT (kazi za kiwango cha juu hufika hadi 10,000 USDT)",
    },
  ],
  tokenDiscount: "Ukilipa ada za spot kwa GT, kiwango cha kawaida kinashuka kutoka 0.1% hadi 0.09% kwa maker na taker.",
  extraFeeMarkets: ["Delivery futures za USDT"],
  sourceLabels: [
    "Gate: Mpango wa rufaa wa Super Commission na kanuni zake",
    "Gate: Kampeni ya rufaa ya Earn Voucher",
    "Gate: Kampeni ya rufaa ya Token Crew",
    "Gate Learn: Mwongozo wa mpango wa rufaa wa Gate",
    "Gate: Rewards Hub (kazi za watumiaji wapya)",
    "Gate: Kanuni za kazi za watumiaji wapya",
    "Gate: Jedwali la ada",
    "Gate: Margin na viwango vya leverage vya mkataba wa perpetual wa BTCUSDT",
    "Gate: Kikomo cha leverage kwa akaunti mpya za futures",
    "Gate: Jinsi ya kujisajili kwenye tovuti",
    "Gate: Jinsi ya kujisajili kwenye app",
    "Gate: Sharti la KYC",
    "Gate: Jinsi ya kukamilisha uthibitishaji wa utambulisho",
    "Gate: Makubaliano ya Mtumiaji (maeneo yaliyozuiwa, umri wa chini)",
    "Gate: Kuhusu Gate",
    "Gate: Leseni",
    "Gate: Uthibitisho wa akiba",
    "Gate: Kuhamia kikoa cha gate.com (tangazo)",
  ],
  feeDiscount: "Marejesho ya 10% ya ada zako za biashara kwa mwaka 1",
  referralCovers: ["Spot", "Margin", "Futures", "Trenches (Gate Alpha)"],
  bonusHeadline: "Marejesho ya 10% ya ada pamoja na kazi za watumiaji wapya zenye thamani ya 125 USDT",
  benefits: [
    "Rewards Hub ya Gate inaorodhesha kazi za watumiaji wapya zenye thamani ya 125 USDT katika vocha (kujisajili, kuthibitisha utambulisho, amana ya kwanza, biashara ya kwanza, kupakua app)",
    "Rufaa moja inahusu spot, margin, futures na Trenches kwa mwaka mmoja",
    "Ada za spot za 0.1% au 0.09% ukizilipa kwa GT",
    "Fanya biashara ya sarafu za kidijitali zaidi ya 5,400 kwa akaunti moja tu",
  ],
  benefitNote:
    "Marejesho ya 10% ni zawadi ambayo Gate inaonyesha kwenye ukurasa wa usajili unaofunguka kupitia kiungo hiki; hayahusu miamala ya fiat na hayapatikani kwa watumiaji kutoka Ubelgiji, Uingereza, Ufaransa, Ujerumani, Uholanzi, Uturuki, Austria na Korea Kusini. Kazi za watumiaji wapya lazima zikamilishwe ndani ya siku 15 baada ya kujisajili, zinaweza kutofautiana kulingana na eneo na hazihusu akaunti za taasisi, za API wala za ushirika (affiliate). Kanuni za Gate zinasema kwamba akaunti zilizoalikwa kupitia ugawanaji wa kamisheni hazistahili zawadi za kampeni nyingine – Rewards Hub iliyo kwenye akaunti yako ndiyo inayoonyesha kile unachoweza kudai kwa kweli.",
  headquarters: "Gate Group, yenye kampuni zenye leseni katika maeneo kadhaa",
  regulation:
    "Leseni au usajili nchini Malta (MFSA, MiCA), Gibraltar, Bahamas, Hong Kong, Dubai (VARA, DMCC), Australia (AUSTRAC), Japani na Cyprus",
  users: "Watumiaji milioni 63+ (kwa mujibu wa Gate)",
  assets: "Sarafu za kidijitali 5,400+",
  maxLeverage: "Hadi 200x (mkataba wa perpetual wa BTCUSDT)",
  feeNote:
    "Ngazi za juu za VIP hulipa ada ndogo zaidi. Ukiwasha Points Deduction badala ya GT, Gate inatumia viwango visivyobadilika: 0.2% kwenye spot na ada ya taker ya 0.075% kwenye futures.",
  products: ["Mikataba ya perpetual", "Delivery futures", "Options", "Spot", "Margin", "Copy trading", "Launchpad", "Earn"],
  tagline: "Uteuzi mpana zaidi wa altcoin, tangu 2013",
  quickAnswer:
    "Msimbo wa rufaa wa Gate ni VAAXAW9YVA. Fungua kiungo cha usajili kilicho kwenye ukurasa huu na Gate itauunganisha yenyewe – kisha fomu ya usajili inaonyesha bango linalokuahidi zawadi ya kamisheni ya 10% kwenye ada zako za biashara. Marejesho hayo yanadumu kwa mwaka mmoja na yanahusu spot, margin, futures na Trenches. Gate haielezi njia yoyote ya kuongeza msimbo baadaye, kwa hivyo tumia kiungo kabla ya kufungua akaunti.",
  about: [
    "Gate ilianzishwa mwaka 2013 – ilianza kama Bter.com, ikawa Gate.io na mwezi Mei 2025 ikahamia kwenye kikoa cha kimataifa gate.com. Sifa yake kuu ni wigo mpana: Gate inasema inaorodhesha sarafu za kidijitali zaidi ya 5,400 na inahudumia watumiaji zaidi ya milioni 63. Mara nyingi tokeni mpya huonekana humo muda mrefu kabla majukwaa mengine makubwa hayajaziorodhesha.",
    "Kwenye derivatives, Gate ilikuwa na open interest (jumla ya mikataba iliyo wazi) ya pili kwa ukubwa katika orodha ya CoinMarketCap katika tarehe ya takwimu zetu za soko, ikiwa na mikataba ya perpetual yenye margin ya USDT kwa mamia ya altcoin, delivery futures na options. Leverage kwenye mkataba wa perpetual wa BTCUSDT inafika hadi 200x katika kiwango cha chini kabisa cha hatari, lakini akaunti mpya za futures zinaanza na kikomo cha 20x katika siku zao tatu za kwanza. Copy trading, launchpad ya tokeni mpya na bidhaa za Earn ziko kando ya skrini za biashara.",
    "Gate imechapisha uthibitisho wa akiba (proof of reserves) tangu Mei 2020. Ripoti ya 18 Oktoba 2026 ilionyesha akiba ya jumla ya dola bilioni 8.68 za Marekani katika sarafu 496 na uwiano wa akiba wa 118%. Kundi hilo linataja leseni na usajili nchini Malta (MFSA, chini ya MiCA), Gibraltar, Bahamas, Hong Kong, Dubai, Australia, Japani na Cyprus. Tovuti ya kimataifa gate.com imefungwa kwa wakazi wa Marekani na orodha ndefu ya nchi nyingine; kampuni ya Gate iliyoko Malta ndiyo inayowahudumia wakazi wa Eneo la Kiuchumi la Ulaya (EEA).",
  ],
  highlights: [
    { title: "Sarafu 5,400+", text: "Mojawapo ya orodha kubwa zaidi za altcoin kati ya majukwaa yote." },
    { title: "Unarudishiwa 10% ya ada zako", text: "Gate inaonyesha zawadi hii kwenye ukurasa wa usajili unaofunguka kupitia kiungo hiki." },
    { title: "Akiba ya 118%", text: "Uthibitisho wa akiba tangu 2020; ripoti ya karibuni ni ya 18 Oktoba 2026." },
  ],
  pros: [
    "Futures kwenye altcoin nyingi ambazo huzipati kwingine",
    "Ada ya kawaida ya spot ni 0.1% (0.09% ukitumia GT); kwenye mikataba ya perpetual ya USDT ni 0.02% / 0.05%",
    "Uthibitisho wa akiba tangu 2020, wenye uwiano wa akiba wa 118%",
    "Historia ndefu tangu 2013 na orodha inayokua ya leseni za kikanda",
  ],
  cons: [
    "Tovuti ya kimataifa imefungwa kwa nchi nyingi, zikiwemo Marekani, Uingereza, Kanada, Ujerumani, Ufaransa, Uhispania na Uholanzi",
    "Hakuna njia iliyoelezwa ya kuongeza msimbo wa rufaa baada ya kujisajili",
    "Rufaa hazihamishwi kati ya tovuti za kikanda za Gate",
    "Tokeni ndogo zina hatari kubwa ya kuyumba kwa bei (volatility) na ya ukwasi (liquidity)",
  ],
  bestFor: [
    "Wafanyabiashara wa futures za altcoin",
    "Wanaosaka tokeni mpya mara tu zinapoorodheshwa",
    "Wafanyabiashara wanaothamini wigo mpana kuliko urahisi",
  ],
  signupTip:
    "Kamilisha kazi za watumiaji wapya ndani ya siku 15 baada ya kujisajili – baada ya hapo vocha za wanaoanza zinaisha muda – na fikiria kulipa ada za spot kwa GT ili zishuke hadi 0.09%.",
  safety:
    "Gate inachapisha uthibitisho wa akiba wenye uwiano wa akiba wa zaidi ya 100% – 118% katika ripoti ya 18 Oktoba 2026 – na kituo chake cha msaada kinaeleza uthibitishaji wa hatua mbili, msimbo wa kuzuia ulaghai (anti-phishing code), orodha ya anwani zinazoruhusiwa kutoa pesa (withdrawal whitelist) na nenosiri la fedha (fund password). Washa vipengele hivi kabla ya kuweka pesa. Kwa altcoin zenye thamani ndogo ya soko, kagua ukwasi (liquidity) kila mara kabla ya kufungua nafasi zenye leverage.",
  restricted:
    "Makubaliano ya Mtumiaji ya Gate (yaliyosasishwa mwisho 22 Julai 2026) yanaorodhesha maeneo yaliyozuiwa kwa tovuti ya kimataifa, yakiwemo Marekani, China bara, Singapore, Kanada, Ufaransa, Ujerumani, Hong Kong, Malaysia, Malta, Uhispania, Uholanzi, Uingereza, Austria, India, Indonesia, Japani, Argentina, UAE, Thailand, Korea Kusini, Ufilipino, Pakistan, Vietnam, Urusi na Belarus, pamoja na maeneo yaliyowekewa vikwazo. Kampuni tofauti za Gate, zenye tovuti na kanuni zake, zinahudumia baadhi ya nchi hizi.",
  faqs: [
    {
      topic: "referral",
      q: "Je, VAAXAW9YVA ni msimbo wa rufaa wa Gate unaofanya kazi?",
      a: "Ndiyo. Mnamo 16 Novemba 2026, kiungo gate.com/signup/VAAXAW9YVA kilifungua ukurasa rasmi wa usajili wa Gate huku msimbo ukiwa umeunganishwa, pamoja na bango la mwalikaji lenye maandishi “Sign up and trade to receive 10% commission reward on trading fees!”.",
    },
    {
      topic: "referral",
      q: "Marejesho ya rufaa ya Gate hudumu kwa muda gani?",
      a: "Mwaka mmoja. Kwa mujibu wa kanuni za Super Commission za Gate, marejesho ya ada yanakokotolewa kwa ada zako za biashara za mwaka 1 na hayahusu miamala ya fiat.",
    },
    {
      topic: "referral",
      q: "Je, Gate.io ni sawa na Gate? Je, msimbo bado unafanya kazi?",
      a: "Ndiyo. Gate.io ilihamia kwenye kikoa cha kimataifa gate.com mwezi Mei 2025; ni jukwaa lile lile, lililoanzishwa mwaka 2013. Msimbo VAAXAW9YVA unatumika kwenye gate.com.",
    },
    {
      topic: "referral",
      q: "Je, msimbo wa rufaa wa Gate unafanya kazi katika Umoja wa Ulaya (EU)?",
      a: "Si kwa namna ile ile. Wakazi wa Eneo la Kiuchumi la Ulaya (EEA) wanahudumiwa kupitia tovuti tofauti ya Gate (gate.com/en-eu, inayoendeshwa kutoka Malta), ambako kamisheni inahusu biashara ya spot pekee; Gate inasema kwamba mialiko kati ya tovuti tofauti haiwezekani. Super Commission pia haipatikani kwa watumiaji kutoka Ubelgiji, Ufaransa, Ujerumani, Uholanzi na Austria.",
    },
    {
      topic: "referral",
      q: "Je, naweza kuchanganya marejesho ya rufaa ya Gate na vocha za rufaa za Gate?",
      a: "Usitegemee hilo. Kanuni za Super Commission za Gate zinasema kwamba akaunti zilizoalikwa kwa njia hii hazistahili zawadi za kampeni nyingine – zikiwemo kampeni za vocha “Earn Voucher” na “Token Crew”.",
    },
    {
      topic: "signup",
      q: "Kwa nini fomu ya usajili ya Gate inauliza nchi yangu kwanza?",
      a: "Usajili wa Gate unaanza na nchi au eneo unakoishi kwa sababu bidhaa, zawadi na hata kampuni ya Gate itakayokuhudumia hutegemea hilo. Ni baada ya hapo tu ndipo unaweka barua pepe au namba yako ya simu.",
    },
    {
      topic: "signup",
      q: "Msimbo wa uthibitisho wa Gate ni halali kwa muda gani?",
      a: "Kwa mujibu wa mwongozo wa Gate wa kujisajili kupitia app, msimbo wa uthibitisho unaotumwa kwenye barua pepe au simu yako ni halali kwa dakika 15.",
    },
    {
      topic: "signup",
      q: "Je, naweza kutumia Gate bila KYC?",
      a: "Kwa kiasi kidogo tu. Gate inasema kwamba KYC ni lazima kwa watumiaji wote ili kuweka na kutoa sarafu za kidijitali, kufanya biashara ya sarafu za fiat na kujiandikisha kwenye Startup.",
    },
    {
      topic: "bonus",
      q: "Bonasi ya ukaribisho ya Gate kwa watumiaji wapya ni ipi?",
      a: "Rewards Hub ya Gate inaorodhesha kazi za watumiaji wapya zenye thamani ya 125 USDT katika vocha: 50 kwa kujisajili, 50 kwa kuthibitisha utambulisho, 10 kwa amana ya kwanza ya angalau 10 USDT, 5 kwa biashara ya kwanza ya angalau 10 USDT na 10 kwa kupakua app kwa mara ya kwanza. Kazi za kiwango cha juu hufika hadi 10,000 USDT. Ukurasa wa usajili wenyewe unatangaza hadi 135 USDT, kwa hivyo kiasi kinachoonyeshwa kwenye akaunti yako ndicho kinachohesabika.",
    },
    {
      topic: "bonus",
      q: "Nina muda gani wa kukamilisha kazi za watumiaji wapya za Gate?",
      a: "Kazi za wanaoanza lazima zikamilishwe ndani ya siku 15 baada ya kujisajili. Biashara za stablecoin hazihesabiwi kwenye kazi za biashara. Akaunti za taasisi, za API na za ushirika haziruhusiwi.",
    },
    {
      topic: "fees",
      q: "Ada za spot za Gate ni zipi?",
      a: "Ada ya kawaida ya spot (VIP 0) ni 0.1% kwa maker na taker au 0.09% ukilipa ada kwa GT. Ukiwasha Points Deduction badala yake, Gate inatoza kiwango kisichobadilika cha 0.2%.",
    },
    {
      topic: "fees",
      q: "Ada za futures za Gate ni zipi?",
      a: "Mikataba ya perpetual ya USDT inagharimu 0.02% kwa maker na 0.05% kwa taker katika kiwango cha kawaida. Kwa delivery futures za USDT, Gate inaonyesha -0.015% kwa maker (yaani unarudishiwa) na 0.016% kwa taker.",
    },
    {
      topic: "fees",
      q: "Leverage ya juu zaidi kwenye Gate ni ipi?",
      a: "Hadi 200x kwenye mkataba wa perpetual wa BTCUSDT katika kiwango cha chini kabisa cha hatari (cross margin, nafasi hadi kikomo cha kwanza cha hatari). Akaunti mpya za futures zina kikomo cha 20x katika siku zao tatu za kwanza. Leverage kubwa kiasi hiki inaweza kusababisha liquidation (nafasi kufungwa kwa lazima) hata bei ikisogea kidogo sana.",
    },
    {
      topic: "safety",
      q: "Je, Gate inapatikana Marekani?",
      a: "Hapana. Marekani imo kwenye orodha ya maeneo yaliyozuiwa katika Makubaliano ya Mtumiaji ya Gate.",
    },
    {
      topic: "safety",
      q: "Je, Gate inachapisha uthibitisho wa akiba (proof of reserves)?",
      a: "Ndiyo, tangu Mei 2020. Ripoti ya 18 Oktoba 2026 ilionyesha akiba ya jumla ya dola bilioni 8.68 za Marekani katika sarafu 496 na uwiano wa akiba wa 118%.",
    },
    {
      topic: "safety",
      q: "Gate ina leseni wapi?",
      a: "Gate inataja leseni au usajili huko Hong Kong, Gibraltar, Malta (MFSA, chini ya MiCA), Australia (AUSTRAC), Dubai (VARA na DMCC), Bahamas, Japani na Cyprus.",
    },
  ],
};
