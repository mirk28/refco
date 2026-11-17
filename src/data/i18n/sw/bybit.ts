import type { ExchangeText } from "../../types";

export const bybit: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Sehemu ya “Referral Code (Optional)” kwenye fomu ya usajili",
    apply:
      "Weka msimbo huu kwenye sehemu ya “Referral Code (Optional)” ya fomu ya usajili, au fungua kiungo cha usajili kilicho kwenye ukurasa huu – kinakujazia sehemu hiyo.",
    whereToEnter:
      "Fomu ya usajili ya Bybit ina sehemu yenye jina “Referral Code (Optional)”. Kwenye tovuti unaifikia baada ya kuweka barua pepe au namba yako ya simu, na kwenye app hatua moja baadaye – kwa njia zote mbili kabla ya kugusa “Sign Up Now”. Kiungo kilicho kwenye ukurasa huu kinafungua ukurasa wa mwaliko wa Bybit ambao tayari una VN3KGLE kwenye sehemu hiyo; sehemu bado inaweza kuhaririwa, kwa hiyo hakikisha msimbo bado upo kabla ya kutuma fomu.",
    afterSignupShort: "Hapana – wakati wa usajili tu",
    afterSignup:
      "Hapana. Mwongozo wa usajili wa Bybit unasema kwamba baada ya kujisajili hutaweza kuongeza, kubadilisha wala kufuta msimbo wako wa rufaa au wa ushirika (affiliate). Hali pekee ya tofauti ambayo Bybit imeiandika inahusu misimbo ya ushirika, ambayo inaweza kuongezwa ndani ya siku 14 kwenye akaunti kuu isiyo na msimbo bado; Bybit inasema wazi kwamba njia hiyo haikubali misimbo ya mpango wa rufaa (Referral Program) kama VN3KGLE.",
    inviteeReward:
      "Katika mpango wa rufaa wa Bybit, mtumiaji aliyealikwa anaweza kupata hadi 250 USDT: 50 USDT kwa biashara ya kwanza ya angalau dola 50 ndani ya siku 14 tangu kujisajili, 100 USDT jumla ya biashara zake ikifikia angalau dola 500 ndani ya siku 30 baada ya biashara hiyo ya kwanza, na 100 USDT nyingine jumla hiyo ikifikia angalau dola 10,000 ndani ya siku hizo hizo 30. Ukurasa wa mwaliko wa Bybit pia unatangaza zawadi kwa mwalikwa anayejisajili na kukamilisha uthibitishaji wa utambulisho, na watumiaji wapya hupata Welcome Gifts za 100 USDT kwenye Rewards Hub.",
    guide: [
      "Mpango wa rufaa wa Bybit huzawadia pande zote mbili kiasi kilekile, ndiyo maana Bybit inautangaza kama “up to 500 USDT combined” – yaani kiasi hicho kwa pande zote mbili kwa pamoja. Ukiwa mtumiaji uliyealikwa, unafungua fungu lako kwa hatua tatu zinazotegemea biashara zako mwenyewe: biashara ya kwanza ya angalau dola 50 ndani ya siku 14 tangu kujisajili, kisha jumla ya biashara ya dola 500 na dola 10,000 ndani ya siku 30 zinazofuata. Kiasi cha biashara ya spot, derivatives na options kinahesabiwa, lakini biashara kwenye jozi zisizo na ada hazihesabiwi.",
      "Kila zawadi hupitia ukaguzi wa hatari wa siku 3, kisha lazima uidai ndani ya siku 10, la sivyo muda wake unaisha. Bybit imeweka kikomo cha mpango huu kwa mfuko wa kila mwezi wa 500,000 USDT, unaolipwa kwa utaratibu wa anayewahi kwanza ndiye hupata. Masharti haya yanahusu akaunti zilizosajiliwa kwenye tovuti ya kimataifa kuanzia 10 Oktoba 2026.",
      "Nchi unayoishi ndiyo inayoamua kama msimbo una manufaa yoyote. Masharti ya rufaa ya Bybit yanasema kwamba hakuna mpango wa rufaa nchini Ujerumani, Uingereza, Ufaransa na Ubelgiji, wala huko Hong Kong, na kwamba mpango huo haupo wazi kwa wakazi wa Eneo la Kiuchumi la Ulaya (EEA) walioalikwa ndani ya EEA. Wakazi wa EEA hutumia Bybit EU (bybit.eu), jukwaa tofauti linaloendeshwa na Bybit EU GmbH mjini Vienna, lenye ofa yake ya rufaa iliyo ndogo zaidi.",
    ],
  },
  signup: {
    methods: ["barua pepe", "namba ya simu", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Fungua ukurasa wa usajili wa Bybit",
        text: "Tumia kitufe cha kujisajili kilicho kwenye ukurasa huu. Kinafungua ukurasa wa mwaliko wa Bybit, ambapo msimbo wa rufaa VN3KGLE umeshajazwa.",
      },
      {
        title: "Chagua nchi unayoishi",
        text: "Bybit inauliza swali hili kwanza kwa sababu bidhaa na zawadi hutegemea mahali unapoishi.",
      },
      {
        title: "Weka barua pepe au namba yako ya simu",
        text: "Au endelea kwa Google, Apple au Telegram.",
      },
      {
        title: "Kagua msimbo wa rufaa",
        text: "Sehemu ya “Referral Code (Optional)” inapaswa kuonyesha VN3KGLE. Hii ndiyo nafasi yako pekee – Bybit haikuruhusu kuongeza wala kubadilisha msimbo baadaye.",
      },
      {
        title: "Weka msimbo wa uthibitishaji kisha uchague nenosiri",
        text: "Thibitisha msimbo ambao Bybit inakutumia, chagua nenosiri kisha gusa “Sign Up Now”. Kwenye app (toleo la 4.47.0 au jipya zaidi) unaweza pia kuweka passkey.",
      },
      {
        title: "Kamilisha uthibitishaji wa utambulisho",
        text: "Bybit inahitaji kiwango cha uthibitishaji cha Standard kabla ya kuweka pesa au kufanya biashara.",
      },
    ],
    kycShort: "Lazima kwa bidhaa zote (kiwango cha Standard)",
    kyc: "Ndiyo. Bybit inahitaji angalau uthibitishaji wa utambulisho wa kiwango cha Standard kwa bidhaa zote. Bila huo, akaunti haiwezi kuweka pesa wala kufanya biashara, na inaweza kutoa pesa tu – hadi 20,000 USDT kwa siku na 100,000 USDT kwa mwezi. Uthibitishaji wa Standard (hati ya utambulisho pamoja na tathmini ya utambulisho) hupandisha kikomo cha kutoa pesa kwa siku hadi USDT milioni 1, na uthibitishaji wa Advanced, unaoongeza uthibitisho wa anwani, hadi USDT milioni 2.",
    documents:
      "Bybit inakubali pasipoti, kitambulisho, kibali cha ukaazi au leseni ya kuendesha gari. Hati halisi pekee ndizo zinazokubaliwa, na kiwango cha Advanced kinahitaji pia uthibitisho wa anwani.",
    minAge: "Miaka 18",
  },
  welcomeTasks: [
    { task: "Rufaa: biashara ya kwanza ya angalau dola 50 ndani ya siku 14 tangu kujisajili", reward: "50 USDT" },
    { task: "Rufaa: jumla ya biashara ya angalau dola 500 ndani ya siku 30 baada ya biashara ya kwanza", reward: "100 USDT" },
    { task: "Rufaa: jumla ya biashara ya angalau dola 10,000 ndani ya siku hizo hizo 30", reward: "100 USDT" },
    { task: "Welcome Gifts: kamilisha uthibitishaji wa utambulisho", reward: "Fee Saver ya 20 USDT (derivatives)" },
    { task: "Welcome Gifts: weka pesa za angalau dola 10", reward: "Position Airdrop ya 30 USDT (derivatives)" },
    { task: "Welcome Gifts: fanya biashara ya angalau dola 10", reward: "Fee Saver ya 50 USDT (derivatives)" },
  ],
  tokenDiscount:
    "Ukilipa ada kwa MNT, unapata punguzo la 25% kwenye ada za spot (0.075% kwa VIP 0) na 10% kwenye ada za futures (0.018% maker / 0.0495% taker). Punguzo hili halihusu mikataba ya inverse, roboti za biashara (trading bots), wafuasi wa copy trading wala biashara kupitia API.",
  extraFeeMarkets: ["Options"],
  sourceLabels: [
    "Bybit: Jinsi ya kufungua akaunti",
    "Bybit: Mpango wa rufaa – maswali ya jumla (FAQ)",
    "Bybit: Ukurasa na masharti ya mpango wa rufaa",
    "Bybit: Jinsi ya kuongeza na kukagua msimbo wa ushirika uliosajiliwa",
    "Bybit: Welcome Gifts kwenye Rewards Hub",
    "Bybit: Maswali kuhusu Rewards Hub (FAQ)",
    "Bybit: Muundo wa ada za biashara",
    "Bybit: Kulipa ada za biashara kwa MNT",
    "Bybit: Vigezo vya margin (ngazi za leverage)",
    "Bybit: Maswali kuhusu KYC kwa watu binafsi (FAQ)",
    "Bybit: Faida za viwango tofauti vya KYC",
    "Bybit: Nchi zenye vizuizi vya huduma",
    "Bybit: Kuhusu sisi",
    "Bybit: Uthibitisho wa akiba (proof of reserves)",
    "Bybit: Mfuatano wa tukio la usalama (Februari 2025)",
    "Bybit: Bybit Europe na MiCAR",
    "Bybit EU: Mpango wa rufaa",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Derivatives", "Options"],
  bonusHeadline: "Zawadi za rufaa za hadi 250 USDT",
  benefits: [
    "Hadi 250 USDT kwa mtumiaji aliyealikwa: 50 USDT baada ya biashara ya kwanza ya dola 50+ ndani ya siku 14, pamoja na 100 USDT kwa kila hatua ya kiasi cha biashara: dola 500 na dola 10,000",
    "Welcome Gifts za 100 USDT kwenye Rewards Hub kwa kuthibitisha utambulisho, kuweka dola 10 na kufanya biashara ya dola 10",
    "Msimbo mmoja wa rufaa kwa akaunti nzima – kiasi cha biashara ya spot, derivatives na options chote kinahesabiwa",
    "Punguzo la 25% kwenye ada za spot na 10% kwenye ada za futures unapolipa ada kwa MNT",
  ],
  benefitNote:
    "Zawadi za rufaa zinahusu akaunti zilizosajiliwa kwenye tovuti ya kimataifa ya Bybit kuanzia 10 Oktoba 2026, hupitia ukaguzi wa hatari wa siku 3, lazima zidaiwe ndani ya siku 10 na hutoka kwenye mfuko wa kila mwezi wa 500,000 USDT (anayewahi kwanza ndiye hupata). Bybit haina mpango wa rufaa nchini Ujerumani, Uingereza, Ufaransa na Ubelgiji, wala huko Hong Kong, na haiufungui kwa wakazi wa EEA walioalikwa ndani ya EEA. Welcome Gifts zinahitaji uthibitishaji wa utambulisho wa Lv. 1, hutofautiana kulingana na mtumiaji na eneo, huisha muda wake na haziwezi kutolewa kama pesa.",
  headquarters: "Dubai, UAE",
  regulation: "Leseni ya MiCAR kupitia Bybit EU GmbH, Vienna (inasimamiwa na FMA ya Austria) kwa EEA isipokuwa Malta",
  users: "Watumiaji milioni 90+ (kwa mujibu wa Bybit)",
  assets: "Sarafu 390, jozi 509 za spot (Bybit API)",
  maxLeverage: "Hadi 150x (mkataba wa perpetual wa BTCUSDT)",
  feeNote:
    "Ada hushuka kadiri ngazi ya VIP inavyopanda – Supreme VIP hulipa ada ya maker ya 0% kwenye derivatives – na zinaweza kutofautiana kulingana na eneo; ukurasa wa “My Fee Rate” kwenye akaunti yako ndio wenye kauli ya mwisho.",
  products: [
    "Mikataba ya perpetual ya USDT na USDC",
    "Mikataba ya inverse",
    "Options",
    "Spot",
    "Copy trading",
    "Roboti za biashara (trading bots)",
    "Akaunti ya biashara iliyounganishwa (unified trading account)",
  ],
  tagline: "Injini ya biashara yenye kasi, inayolenga derivatives kwanza",
  quickAnswer:
    "Msimbo wa rufaa wa Bybit ni VN3KGLE. Weka msimbo huu kwenye sehemu ya “Referral Code (Optional)” unapojisajili – kitufe kilicho kwenye ukurasa huu kinakujazia. Ni lazima uwepo wakati wa usajili: Bybit haikuruhusu kuongeza wala kubadilisha msimbo wa rufaa baadaye. Watumiaji walioalikwa wanaweza kupata hadi 250 USDT kwa hatua tatu za biashara, kuanzia 50 USDT kwa biashara ya kwanza ya dola 50 ndani ya siku 14.",
  about: [
    "Bybit ilianzishwa mwaka 2018 kama jukwaa la derivatives na ikahamishia makao yake makuu Dubai mwaka 2023. Leo inaripoti zaidi ya watumiaji milioni 90 katika zaidi ya nchi 181 na inajieleza kuwa jukwaa la pili kwa ukubwa duniani kwa kiasi cha biashara. Hadi sasa jukwaa hili linaonyesha wazi kwamba limeundwa kwa ajili ya wafanyabiashara wa mara kwa mara: kuweka oda kwa kasi, akaunti ya biashara iliyounganishwa na app ya simu iliyoboreshwa vizuri.",
    "Mbali na mikataba ya perpetual ya USDT na USDC, Bybit inatoa mikataba ya inverse, options, spot, copy trading na roboti za biashara. Watumiaji wa kawaida hulipa ada ya maker ya 0.02% na ada ya taker ya 0.055% kwenye perpetual na futures, na 0.1% kwenye spot. Leverage inafika hadi 150x kwenye mkataba wa perpetual wa BTCUSDT katika ngazi ya chini kabisa ya hatari, na hupungua kadiri nafasi inavyokua. Wateja wa Ulaya wanapata huduma kupitia Bybit EU GmbH ya Vienna, ambayo inasimamiwa na FMA ya Austria chini ya MiCAR na inashughulikia EEA isipokuwa Malta.",
    "Mnamo 21 Februari 2025 wadukuzi walichukua takriban dola bilioni 1.46 za Marekani kutoka kwenye mojawapo ya cold wallet za Ethereum za Bybit – udukuzi mkubwa zaidi katika historia ya crypto. Bybit iliendelea kuruhusu watu kutoa pesa, ikafidia ETH iliyopotea kupitia mikopo ya muda mfupi (bridge loans), amana kubwa na ununuzi wa OTC, na ukaguzi wa uthibitisho wa akiba (proof of reserves) ambao Hacken ilifanya 24 Februari ulionyesha kwamba pengo lilizibwa ndani ya saa 72. Kwa mujibu wa Bybit, mali za wateja ziliendelea kuwa na akiba ya 1:1 muda wote.",
  ],
  highlights: [
    { title: "Asili yake ni derivatives", text: "Imejengwa kwa ajili ya wafanyabiashara wa futures tangu siku ya kwanza, ikiwa na injini ya kulinganisha oda (matching engine) yenye kasi." },
    { title: "Hadi 250 USDT", text: "Zawadi za rufaa kwa hatua tatu, zinazotegemea kiasi chako mwenyewe cha biashara." },
    { title: "Pengo lilizibwa ndani ya saa 72", text: "Baada ya udukuzi wa mwaka 2025, Bybit iliendelea kuruhusu kutoa pesa na ikarejesha akiba yake." },
  ],
  pros: [
    "Injini yenye kasi na thabiti, pamoja na app ya simu ya kiwango cha juu",
    "Aina nyingi za mikataba ya perpetual, inverse na options",
    "Zawadi za rufaa zilizo wazi, za hadi 250 USDT kwa mtumiaji aliyealikwa",
    "Uthibitisho wa akiba (proof of reserves) unaokuwezesha kujikagua mwenyewe kwa Merkle tree",
  ],
  cons: [
    "Tukio kubwa la usalama mnamo Februari 2025 (dola bilioni 1.46 za Marekani zilichukuliwa kutoka kwenye cold wallet ya Ethereum)",
    "Msimbo wa rufaa hauwezi kuongezwa wala kubadilishwa baada ya kujisajili",
    "Hakuna mpango wa rufaa kwa wakazi wa EEA, wala nchini Ujerumani, Uingereza, Ufaransa na Ubelgiji, wala huko Hong Kong",
    "Haipatikani nchini Marekani, Kanada na Singapore, huko Hong Kong, wala China bara",
  ],
  bestFor: [
    "Wafanyabiashara wanaofanya biashara ya mikataba ya perpetual mara kwa mara",
    "Wafanyabiashara wanaotegemea zaidi app ya simu",
    "Watumiaji wanaotaka copy trading kwenye derivatives",
  ],
  signupTip:
    "Kagua sehemu ya “Referral Code (Optional)” kabla ya kugusa “Sign Up Now” – haiwezi kurekebishwa baadaye. Kisha fanya biashara yako ya kwanza ya angalau dola 50 ndani ya siku 14 ili kufungua 50 USDT za kwanza.",
  safety:
    "Bybit huhifadhi mali za wateja kwenye cold wallet zenye saini nyingi (multi-signature) na huchapisha uthibitisho wa akiba (proof of reserves) ambao, kwa mujibu wake, unaonyesha akiba ya 1:1; tulipokagua, snapshot ya hivi karibuni zaidi ilikuwa ya 27 Oktoba 2026, na unaweza kuthibitisha salio lako mwenyewe kwa ukaguzi wa Merkle tree na zana ya chanzo huria (open-source). Kwa ajili ya akaunti yako, Bybit inatoa Google Authenticator na msimbo wa kuzuia ulaghai (anti-phishing code). Udukuzi wa Februari 2025 unaonyesha kwamba hata majukwaa makubwa yanaweza kudukuliwa – weka kwenye jukwaa mtaji wa biashara pekee.",
  restricted:
    "Kwenye orodha ya Bybit ya maeneo yenye vizuizi vya huduma kuna: Marekani, China bara, Hong Kong, Singapore, Kanada, Korea Kaskazini, Cuba, Iran, Uzbekistan, Sudan, Syria, pamoja na Crimea, Sevastopol na maeneo ya Donetsk, Luhansk, Kherson na Zaporizhzhia yasiyo chini ya udhibiti wa serikali. Nchini Uingereza Bybit haipokei usajili mpya, na tangu 21 Oktoba 2026 akaunti za Uingereza zinaweza kutoa pesa tu.",
  faqs: [
    {
      topic: "referral",
      q: "Je, VN3KGLE ni msimbo wa rufaa wa Bybit unaofanya kazi?",
      a: "Ndiyo. Mnamo 16 Novemba 2026 kiungo kilicho kwenye ukurasa huu kilifungua ukurasa wa mwaliko wa Bybit, msimbo VN3KGLE ukiwa tayari umejazwa kwenye sehemu ya “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Je, msimbo wa rufaa wa Bybit ni sawa na msimbo wa ushirika (affiliate code)?",
      a: "Hapana. Bybit inaishughulikia misimbo hii kwa njia tofauti: msimbo wa ushirika unaweza kuongezwa ndani ya siku 14 baada ya kujisajili kwenye akaunti kuu ambayo bado haina msimbo, ilhali misimbo ya mpango wa rufaa (Referral Program) kama VN3KGLE haiwezi kuongezwa kabisa baada ya kujisajili.",
    },
    {
      topic: "referral",
      q: "Je, msimbo wa rufaa wa Bybit unafanya kazi katika Umoja wa Ulaya (EU)?",
      a: "Hapana. Masharti ya rufaa ya Bybit yanasema kwamba mpango huu haupo wazi kwa wakazi wa Eneo la Kiuchumi la Ulaya (EEA) walioalikwa ndani ya EEA, na kwamba hakuna mpango wa rufaa nchini Ujerumani, Ufaransa na Ubelgiji. Wakazi wa EEA hutumia Bybit EU (bybit.eu), ambayo ina ofa yake ya rufaa.",
    },
    {
      topic: "referral",
      q: "Kwa zawadi za rufaa za Bybit, biashara zinazohesabiwa ni zipi?",
      a: "Kiasi cha biashara ya spot, derivatives na options kinahesabiwa, na Bybit pia inataja Alpha, Convert na bidhaa chache mpya zaidi. Biashara kwenye jozi zisizo na ada hazihesabiwi.",
    },
    {
      topic: "signup",
      q: "Je, naweza kujisajili Bybit kwa Google, Apple au Telegram?",
      a: "Ndiyo. Usajili wa Bybit unatoa Google, Apple na Telegram pamoja na barua pepe au namba ya simu. Kwenye app (toleo la 4.47.0 au jipya zaidi) unaweza pia kuunda passkey.",
    },
    {
      topic: "signup",
      q: "Je, naweza kutumia Bybit bila KYC?",
      a: "Si kwa kufanya biashara. Bila uthibitishaji wa utambulisho, akaunti ya Bybit haiwezi kuweka pesa wala kufanya biashara; inaweza kutoa pesa tu, hadi 20,000 USDT kwa siku na 100,000 USDT kwa mwezi.",
    },
    {
      topic: "signup",
      q: "Viwango vya KYC vya Bybit ni vipi, na vikomo vya kutoa pesa ni kiasi gani?",
      a: "Uthibitishaji wa Standard (hati ya utambulisho pamoja na tathmini ya utambulisho) unaruhusu kutoa hadi USDT milioni 1 kwa siku. Uthibitishaji wa Advanced, unaoongeza uthibitisho wa anwani, hupandisha kikomo hadi USDT milioni 2 kwa siku. Kuna pia kiwango cha Pro chenye uchunguzi wa kina (enhanced due diligence) kwa vikomo vya juu zaidi.",
    },
    {
      topic: "bonus",
      q: "Bonasi ya rufaa ya Bybit kwa watumiaji wapya ni kiasi gani?",
      a: "Hadi 250 USDT kwa mtumiaji aliyealikwa: 50 USDT kwa biashara ya kwanza ya angalau dola 50 ndani ya siku 14 tangu kujisajili, 100 USDT jumla ya biashara ikifikia dola 500 ndani ya siku 30 baada ya biashara hiyo, na 100 USDT ikifikia dola 10,000 katika kipindi hicho hicho. Mwalikaji hupata kiasi kilekile, ndiyo maana Bybit inatangaza hadi 500 USDT kwa pamoja.",
    },
    {
      topic: "bonus",
      q: "Welcome Gifts za Bybit ni nini?",
      a: "Rewards Hub ya Bybit inaorodhesha Welcome Gifts za 100 USDT: Fee Saver ya 20 USDT kwa kukamilisha uthibitishaji wa utambulisho, Position Airdrop ya 30 USDT kwa kuweka angalau dola 10 na Fee Saver ya 50 USDT kwa biashara ya angalau dola 10 – zote kwa derivatives. Kazi hizi hutofautiana kulingana na mtumiaji na eneo.",
    },
    {
      topic: "bonus",
      q: "Je, ni lazima nidai zawadi za rufaa za Bybit?",
      a: "Ndiyo. Kila zawadi kwanza hupitia ukaguzi wa hatari wa siku 3, kisha lazima uidai ndani ya siku 10, la sivyo muda wake unaisha. Zawadi hutoka kwenye mfuko wa kila mwezi wa 500,000 USDT na hulipwa kwa utaratibu wa anayewahi kwanza ndiye hupata.",
    },
    {
      topic: "bonus",
      q: "Je, Welcome Gifts za Bybit zinaweza kutolewa kama pesa?",
      a: "Hapana. Bybit inasema kwamba zawadi za Rewards Hub huisha muda wake na haziwezi kutolewa. Fee Saver hupunguza ada za biashara, na Position Airdrop hutumika kama margin kwenye biashara ya derivatives.",
    },
    {
      topic: "fees",
      q: "Ada za futures za Bybit ni kiasi gani?",
      a: "Watumiaji wa VIP 0 hulipa 0.02% maker na 0.055% taker kwenye mikataba ya perpetual na futures, 0.1% kwenye spot, na 0.02% maker / 0.03% taker kwenye options. Ukilipa kwa MNT, ada za futures hushuka kwa 10% hadi 0.018% / 0.0495%.",
    },
    {
      topic: "fees",
      q: "Leverage ya juu zaidi kwenye Bybit ni kiasi gani?",
      a: "Hadi 150x kwenye mkataba wa perpetual wa BTCUSDT katika ngazi ya kwanza ya hatari (nafasi hadi 300,000 USDT); kiwango cha juu hushuka hadi 100x katika ngazi inayofuata, na zaidi kadiri nafasi inavyokua. Leverage kubwa huongeza sana hatari ya liquidation (nafasi kufungwa kwa lazima).",
    },
    {
      topic: "fees",
      q: "Punguzo la ada kwa MNT kwenye Bybit ni kiasi gani?",
      a: "Ukilipa ada kwa MNT, unapata punguzo la 25% kwenye ada za spot na 10% kwenye ada za futures. Punguzo hili halihusu mikataba ya inverse, roboti za biashara, wafuasi wa copy trading wala biashara kupitia API.",
    },
    {
      topic: "safety",
      q: "Je, Bybit ilidukuliwa?",
      a: "Ndiyo. Mnamo 21 Februari 2025 takriban dola bilioni 1.46 za Marekani zilichukuliwa kutoka kwenye cold wallet moja ya Ethereum. Bybit haikusimamisha utoaji wa pesa, ilipata ETH ya kufidia kupitia mikopo ya muda mfupi (bridge loans), amana kubwa na ununuzi wa OTC, na ukaguzi wa uthibitisho wa akiba ambao Hacken ilifanya 24 Februari ulionyesha kwamba pengo lilizibwa ndani ya saa 72.",
    },
    {
      topic: "safety",
      q: "Je, Bybit inapatikana Uingereza?",
      a: "Hapana. Bybit haipokei usajili mpya kutoka Uingereza, na tangu 21 Oktoba 2026 akaunti za wakazi wa Uingereza zinaweza kutoa pesa tu.",
    },
    {
      topic: "safety",
      q: "Je, Bybit inapatikana Ulaya?",
      a: "Bybit EU GmbH ya Vienna inawahudumia wakazi wa Eneo la Kiuchumi la Ulaya (EEA); inasimamiwa na Mamlaka ya Masoko ya Fedha ya Austria chini ya MiCAR na inashughulikia EEA isipokuwa Malta. Ni jukwaa tofauti lenye ada zake na bidhaa zake.",
    },
  ],
};
