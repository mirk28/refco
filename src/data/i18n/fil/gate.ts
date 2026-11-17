import type { ExchangeText } from "../../types";

export const gate: ExchangeText = {
  referral: {
    codeName: "referral code",
    whereShort: "Kasama na sa link sa pag-sign up – ipinapakita ng Gate ang nag-imbita sa registration form",
    apply:
      "Buksan ang link sa pag-sign up sa pahinang ito: ikinakabit ng Gate ang code sa registration mo, at may lalabas na banner ng nag-imbita, kasama ang reward, sa form.",
    whereToEnter:
      "Sa Gate, ang referral link ang pinakaligtas na paraan. Binubuksan ng link sa pahinang ito ang gate.com/signup na nakakabit na ang code na VAAXAW9YVA, at kinukumpirma ito ng Gate gamit ang banner sa itaas ng form (“Register now to receive a gift from your friend”). Bansang tinitirhan mo lang ang itinatanong sa unang hakbang ng web form, kaya walang hiwalay na field para sa code na kailangang punan doon – kung hindi mo makita ang banner ng nag-imbita, buksan ulit ang link bago ka gumawa ng account.",
    afterSignupShort: "Walang dokumentadong paraan ang Gate – gamitin ang link sa pag-sign up",
    afterSignup:
      "Walang inilalathalang paraan ang Gate para magdagdag ng referral code sa exchange account na mayroon ka na. Ayon sa mga tuntunin ng referral program nito, sa iisang paraan ng referral lang puwedeng mag-sign up ang bawat user, at nagbababala mismo ang gabay ng Gate na baka hindi maitala ang ugnayan ng referral kung mag-sign up ang bagong user nang walang link o code ng imbitasyon. Gamitin ang link bago ka gumawa ng account.",
    inviteeReward:
      "Kapag nag-sign up ka sa link na ito, mapapasama ka sa Super Commission program ng Gate: nakasaad sa registration page ng Gate na makakatanggap ka ng 10% na komisyon bilang reward sa trading fees mo. Ayon sa mga tuntunin ng program, kinukuwenta ang rebate batay sa trading fees mo sa loob ng 1 taon, at hindi kasama ang mga fiat transaction.",
    guide: [
      "Sabay-sabay na nagpapatakbo ang Gate ng ilang referral program. Kabilang ang code na VAAXAW9YVA sa Super Commission, kung saan ibinabahagi ng referrer ang bahagi ng komisyon niya sa mga taong inimbitahan niya: sa hatiang ipinapakita ng Gate, 30% ang para sa referrer at 10% ang para sa inimbitahang kaibigan, batay sa trading fees ng kaibigan sa loob ng isang taon. Hindi kasama ang mga fiat transaction.",
      "Sakop ng iisang pag-sign up ang Spot, Margin, Futures at Trenches (ang seksyong tinatawag ding Gate Alpha ng Gate). Voucher naman ang gamit ng iba pang referral campaign ng Gate – “Earn Voucher” at “Token Crew” – pero nakasaad sa mga tuntunin ng Super Commission na hindi puwedeng makakuha ng reward mula sa ibang event ang mga account na inimbitahan sa ganitong paraan, kaya huwag umasang mapagsasabay mo ang mga ito.",
      "Hindi sinusuportahan ng Gate ang imbitasyon sa pagitan ng magkakaibang site nito. Kung nakatira ka sa EEA (European Economic Area), isang hiwalay na entity ng Gate sa Malta (gate.com/en-eu) ang nagsisilbi sa iyo; doon, sa spot trading lang binabayaran ang komisyon, at hindi nadadala roon ang referral na ginawa sa global site. Hindi rin available ang Super Commission sa mga user mula sa Belgium, United Kingdom, France, Germany, Netherlands, Turkey, Austria at South Korea.",
    ],
  },
  signup: {
    methods: ["email address", "phone number", "Google", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Buksan ang registration page ng Gate",
        text: "Gamitin ang sign-up button sa pahinang ito. Sa itaas ng form, may banner ang Gate na nagpapakita ng nag-imbita at ng 10% na reward sa fees – iyan ang kumpirmasyon mo na nakakabit na ang referral.",
      },
      {
        title: "Piliin ang bansa o rehiyong tinitirhan mo",
        text: "Piliin kung saan ka nakatira at tanggapin ang User Agreement, saka pindutin ang “Create Account”.",
      },
      {
        title: "Ilagay ang email address o phone number mo",
        text: "Pumili ng isa sa dalawa; ito ang gagamitin ng Gate para sa login at mga security code mo.",
      },
      {
        title: "Ilagay ang verification code",
        text: "Magpapadala ang Gate ng code sa email o telepono mo. Ayon sa gabay ng Gate para sa app, may bisa ito sa loob ng 15 minuto.",
      },
      {
        title: "Gumawa ng password",
        text: "Pumili ng matibay na password na hindi mo ginagamit kahit saan pa para matapos ang paggawa ng account.",
      },
      {
        title: "I-verify ang identity mo",
        text: "Kumpletuhin ang KYC gamit ang passport, ID card o driver's license. Kailangan ito ng Gate bago ka mag-deposit o mag-withdraw ng crypto.",
      },
    ],
    kycShort: "Kailangan para mag-deposit at mag-withdraw",
    kyc: "Oo. Ayon sa Gate, obligado ang lahat ng user na dumaan sa identity verification (KYC) para mag-deposit at mag-withdraw ng cryptocurrency, mag-trade ng fiat currency at sumali sa mga Startup subscription. Opsyonal ang address verification, at tinataas nito ang withdrawal limit mo. Kabilang din ang task na identity verification sa mga newbie reward ng Gate.",
    documents:
      "Para sa identity verification, tumatanggap ang Gate ng passport, ID card o driver's license. Puwede ka ring kusang magdagdag ng proof of address para sa mas mataas na limit.",
    minAge: "18 taong gulang (User Agreement ng Gate)",
  },
  welcomeTasks: [
    { task: "Mag-sign up", reward: "50 USDT na voucher" },
    { task: "Kumpletuhin ang identity verification", reward: "50 USDT na voucher" },
    { task: "Unang deposit na hindi bababa sa 10 USDT", reward: "10 USDT na voucher" },
    { task: "Unang trade na hindi bababa sa 10 USDT", reward: "5 USDT na voucher" },
    { task: "Unang pag-download ng app", reward: "10 USDT na voucher" },
    {
      task: "Advanced task, unang yugto: net deposit na hindi bababa sa 50 USDT at 500 USDT na trading volume",
      reward: "100 USDT (hanggang 10,000 USDT ang mga advanced task)",
    },
  ],
  tokenDiscount:
    "Kapag GT ang ipinambayad mo sa spot fees, bumababa ang standard fee mula 0.1% tungo sa 0.09% para sa parehong maker at taker.",
  extraFeeMarkets: ["USDT delivery futures"],
  sourceLabels: [
    "Gate: Super Commission referral program at mga tuntunin nito",
    "Gate: referral campaign na Earn Voucher",
    "Gate: referral campaign na Token Crew",
    "Gate Learn: gabay sa referral program ng Gate",
    "Gate: Rewards Hub (mga newbie task)",
    "Gate: Mga tuntunin ng newbie task",
    "Gate: Listahan ng fees",
    "Gate: Margin at mga leverage tier ng BTCUSDT perpetual contract",
    "Gate: Limit sa leverage ng mga bagong futures account",
    "Gate: Paano mag-sign up sa website",
    "Gate: Paano mag-sign up sa app",
    "Gate: Kailan kailangan ang KYC",
    "Gate: Paano kumpletuhin ang identity verification",
    "Gate: User Agreement (mga restricted na lokasyon, minimum na edad)",
    "Gate: Tungkol sa Gate",
    "Gate: Mga lisensya",
    "Gate: Proof of reserves",
    "Gate: Paglipat sa domain na gate.com (anunsyo)",
  ],
  feeDiscount: "10% ng trading fees mo ang ibinabalik sa loob ng 1 taon",
  referralCovers: ["Spot", "Margin", "Futures", "Trenches (Gate Alpha)"],
  bonusHeadline: "10% na fee rebate, dagdag pa ang mga newbie task na nagkakahalaga ng 125 USDT",
  benefits: [
    "Nakalista sa Rewards Hub ng Gate ang mga newbie task na may voucher na nagkakahalaga ng 125 USDT (pag-sign up, verification, unang deposit, unang trade, pag-download ng app)",
    "Sakop ng iisang referral ang Spot, Margin, Futures at Trenches sa loob ng isang taon",
    "Spot fees na 0.1%, o 0.09% kapag GT ang ipinambayad mo",
    "Mag-trade ng mahigit 5,400 digital asset gamit ang iisang account",
  ],
  benefitNote:
    "Ang 10% na rebate ang reward na ipinapakita ng Gate sa registration page na nabubuksan ng link na ito; hindi kasama rito ang mga fiat transaction, at hindi ito available sa mga user mula sa Belgium, United Kingdom, France, Germany, Netherlands, Turkey, Austria at South Korea. Dapat matapos ang mga newbie task sa loob ng 15 araw mula sa pag-sign up, puwedeng mag-iba ang mga ito depende sa rehiyon, at hindi kasama ang mga institutional, API at affiliate account. Ayon sa mga tuntunin ng Gate, hindi puwedeng makakuha ng reward mula sa ibang event ang mga account na inimbitahan sa ilalim ng commission sharing – makikita sa Rewards Hub ng account mo kung ano talaga ang puwede mong i-claim.",
  headquarters: "Gate Group na may mga lisensyadong entity sa ilang rehiyon",
  regulation:
    "Mga lisensya o rehistro sa Malta (MFSA, MiCA), Gibraltar, Bahamas, Hong Kong, Dubai (VARA, DMCC), Australia (AUSTRAC), Japan at Cyprus",
  users: "Mahigit 63 milyong user (ayon sa Gate)",
  assets: "5,400+ digital asset",
  maxLeverage: "Hanggang 200x (BTCUSDT perpetual contract)",
  feeNote:
    "Mas mababa ang fees sa mas matataas na VIP level. Kung papaganahin mo ang Points Deduction sa halip na GT, nakapirming fee ang sinisingil ng Gate: 0.2% sa spot at 0.075% na taker fee sa futures.",
  products: ["Perpetual futures", "Delivery futures", "Options", "Spot", "Margin", "Copy trading", "Launchpad", "Earn"],
  tagline: "Pinakamalawak na pagpipilian ng altcoin, mula pa noong 2013",
  quickAnswer:
    "Ang Gate referral code ay VAAXAW9YVA. Buksan ang link sa pag-sign up sa pahinang ito at awtomatiko itong ikinakabit ng Gate – pagkatapos, may lalabas na banner sa registration form na nangangakong 10% na komisyon bilang reward sa trading fees mo. Tumatagal nang isang taon ang rebate, at sakop nito ang Spot, Margin, Futures at Trenches. Walang dokumentadong paraan ang Gate para magdagdag ng code sa ibang pagkakataon, kaya gamitin ang link bago ka gumawa ng account.",
  about: [
    "Itinatag ang Gate noong 2013 – nagsimula ito bilang Bter.com, naging Gate.io, at lumipat sa international domain na gate.com noong Mayo 2025. Lawak ng pagpipilian ang tatak nito: ayon sa Gate, mahigit 5,400 digital asset ang nakalista rito at mahigit 63 milyong user ang pinagsisilbihan nito, at madalas lumalabas dito ang mga bagong token matagal bago pa ilista ng ibang malalaking exchange.",
    "Sa derivatives, ang Gate ang may ikalawang pinakamalaking open interest sa ranking ng CoinMarketCap noong petsa ng market data namin, kabilang ang USDT-margined perpetual contract sa daan-daang altcoin, delivery futures at options. Umaabot hanggang 200x ang leverage sa BTCUSDT perpetual contract sa pinakamababang risk tier, pero 20x ang limit ng mga bagong futures account sa unang tatlong araw nila. Katabi ng mga trading screen ang copy trading, isang launchpad para sa mga bagong token at mga Earn product.",
    "Naglalathala ang Gate ng proof of reserves mula pa noong Mayo 2020. Ipinakita ng batch noong Oktubre 18, 2026 ang kabuuang reserba na $8.68 bilyon sa 496 asset at reserve ratio na 118%. Naglilista ang grupo ng mga lisensya at rehistro sa Malta (MFSA, sa ilalim ng MiCA), Gibraltar, Bahamas, Hong Kong, Dubai, Australia, Japan at Cyprus. Sarado ang global site na gate.com sa mga residente ng United States at ng mahabang listahan ng iba pang bansa; ang entity ng Gate sa Malta ang nagsisilbi sa mga residente ng EEA.",
  ],
  highlights: [
    { title: "5,400+ asset", text: "Isa sa pinakamalalaking katalogo ng altcoin sa lahat ng exchange." },
    { title: "10% ng fees mo, ibinabalik", text: "Ipinapakita ng Gate sa registration page na nabubuksan ng link na ito." },
    { title: "Reserba na 118%", text: "Proof of reserves mula 2020; pinakabagong batch noong Oktubre 18, 2026." },
  ],
  pros: [
    "Futures sa maraming altcoin na hindi mo makikita sa ibang exchange",
    "Standard spot fee na 0.1%, 0.09% kapag GT ang ipinambayad, at 0.02% / 0.05% sa USDT perpetual contract",
    "Proof of reserves mula 2020, na may 118% na reserve ratio",
    "Mahabang kasaysayan mula 2013 at lumalaking listahan ng mga regional na lisensya",
  ],
  cons: [
    "Sarado ang global site sa maraming bansa, kabilang ang US, UK, Canada, Germany, France, Spain at Netherlands",
    "Walang dokumentadong paraan para magdagdag ng referral code pagkatapos mag-sign up",
    "Hindi nadadala ang referral sa pagitan ng mga regional site ng Gate",
    "Mataas ang panganib sa volatility at liquidity ng maliliit na token",
  ],
  bestFor: [
    "Mga trader ng altcoin futures",
    "Mga naghahanap ng maagang listing",
    "Mga trader na mas pinahahalagahan ang dami ng pagpipilian kaysa sa pagiging simple",
  ],
  signupTip:
    "Tapusin ang mga newbie task sa loob ng 15 araw mula sa pag-sign up – pagkatapos nito, mawawalan na ng bisa ang mga beginner voucher – at pag-isipang ipambayad ang GT sa spot fees para bumaba ang mga ito sa 0.09%.",
  safety:
    "Naglalathala ang Gate ng proof of reserves na may reserve ratio na lampas 100% – 118% sa batch noong Oktubre 18, 2026 – at nakadokumento sa help center nito ang two-factor authentication, anti-phishing code, withdrawal whitelist at fund password. Paganahin ang mga ito bago ka mag-deposit. Sa mga small-cap na altcoin, laging suriin ang liquidity bago magbukas ng posisyong may leverage.",
  restricted:
    "Naglilista ang User Agreement ng Gate (huling na-update noong Hulyo 22, 2026) ng mga restricted na lokasyon para sa global site, kabilang ang United States, mainland China, Singapore, Canada, France, Germany, Hong Kong, Malaysia, Malta, Spain, Netherlands, United Kingdom, Austria, India, Indonesia, Japan, Argentina, UAE, Thailand, South Korea, Philippines, Pakistan, Vietnam, Russia at Belarus, pati na ang mga rehiyong may sanctions. May mga hiwalay na entity ng Gate, na may sariling site at tuntunin, na nagsisilbi sa ilan sa mga bansang ito.",
  faqs: [
    {
      topic: "referral",
      q: "Gumagana ba ang Gate referral code na VAAXAW9YVA?",
      a: "Oo. Noong Nobyembre 16, 2026, binuksan ng link na gate.com/signup/VAAXAW9YVA ang sariling registration page ng Gate na nakakabit na ang code, kasama ang banner ng nag-imbita na may nakasulat na “Sign up and trade to receive 10% commission reward on trading fees!”.",
    },
    {
      topic: "referral",
      q: "Gaano katagal ang rebate ng Gate referral code?",
      a: "Isang taon. Ayon sa mga tuntunin ng Super Commission ng Gate, batay sa trading fees mo sa loob ng 1 taon ang fee rebate, at hindi kasama ang mga fiat transaction.",
    },
    {
      topic: "referral",
      q: "Pareho ba ang Gate.io at Gate, at gumagana pa ba ang code?",
      a: "Oo. Lumipat ang Gate.io sa international domain na gate.com noong Mayo 2025; iisang exchange ito, na itinatag noong 2013. Sa gate.com ginagamit ang code na VAAXAW9YVA.",
    },
    {
      topic: "referral",
      q: "Gumagana ba ang Gate referral code sa EU?",
      a: "Hindi sa parehong paraan. Isang hiwalay na Gate site (gate.com/en-eu, pinapatakbo mula sa Malta) ang nagsisilbi sa mga residente ng EEA, at doon, sa spot trading lang may komisyon; ayon din sa Gate, hindi sinusuportahan ang imbitasyon sa pagitan ng magkakaibang site. Hindi rin available ang Super Commission sa mga user mula sa Belgium, France, Germany, Netherlands at Austria.",
    },
    {
      topic: "referral",
      q: "Puwede ko bang pagsabayin ang rebate ng Gate referral code at ang mga referral voucher ng Gate?",
      a: "Huwag umasa rito. Nakasaad sa mga tuntunin ng Super Commission ng Gate na hindi puwedeng makakuha ng reward mula sa ibang event ang mga account na inimbitahan sa ganitong paraan, at sakop nito ang mga voucher campaign na “Earn Voucher” at “Token Crew”.",
    },
    {
      topic: "signup",
      q: "Bakit bansa ko muna ang tinatanong ng sign-up form ng Gate?",
      a: "Nagsisimula ang registration sa Gate sa bansa o rehiyong tinitirhan mo, dahil dito nakadepende ang mga produkto, ang mga reward at maging ang entity ng Gate na magsisilbi sa iyo. Pagkatapos lang nito mo ilalagay ang email address o phone number mo.",
    },
    {
      topic: "signup",
      q: "Gaano katagal valid ang verification code ng Gate?",
      a: "Ayon sa gabay ng Gate sa pag-sign up sa app, may bisa sa loob ng 15 minuto ang verification code na ipinapadala sa email o telepono mo.",
    },
    {
      topic: "signup",
      q: "Puwede ko bang gamitin ang Gate nang walang KYC?",
      a: "Sa limitadong paraan lang. Ayon sa Gate, kailangan ng KYC ang lahat ng user para mag-deposit at mag-withdraw ng cryptocurrency, mag-trade ng fiat currency at sumali sa mga Startup subscription.",
    },
    {
      topic: "bonus",
      q: "Ano ang welcome bonus ng Gate para sa mga bagong user?",
      a: "Nakalista sa Rewards Hub ng Gate ang mga newbie task na may voucher na nagkakahalaga ng 125 USDT: 50 para sa pag-sign up, 50 para sa identity verification, 10 para sa unang deposit na hindi bababa sa 10 USDT, 5 para sa unang trade na hindi bababa sa 10 USDT at 10 para sa unang pag-download ng app. Umaabot hanggang 10,000 USDT ang mga advanced task. Hanggang 135 USDT naman ang inaalok mismo ng registration page, kaya ang mga halagang nakikita sa account mo ang masusunod.",
    },
    {
      topic: "bonus",
      q: "Hanggang kailan ko dapat tapusin ang mga newbie task ng Gate?",
      a: "Dapat matapos ang mga beginner task sa loob ng 15 araw mula sa pag-sign up. Hindi binibilang sa mga trading task ang mga trade ng stablecoin, at hindi kasama ang mga institutional, API at affiliate account.",
    },
    {
      topic: "fees",
      q: "Magkano ang spot fees sa Gate?",
      a: "0.1% ang standard spot fee (VIP 0) para sa maker at taker, o 0.09% kapag GT ang ipinambayad mo sa fees. Kung Points Deduction naman ang pinagana mo, nakapirming 0.2% ang sinisingil ng Gate.",
    },
    {
      topic: "fees",
      q: "Magkano ang futures fees sa Gate?",
      a: "Sa standard tier, 0.02% maker at 0.05% taker ang fees ng USDT perpetual futures. Nakalista naman ang USDT delivery futures sa -0.015% maker (isang rebate) at 0.016% taker.",
    },
    {
      topic: "fees",
      q: "Ano ang maximum leverage sa Gate?",
      a: "Hanggang 200x sa BTCUSDT perpetual contract sa pinakamababang risk tier (cross margin, mga posisyong hanggang sa unang risk limit). Limitado sa 20x ang mga bagong futures account sa unang tatlong araw nila. Sa ganito kataas na leverage, puwedeng ma-liquidate ang posisyon kahit sa napakaliit na galaw ng presyo.",
    },
    {
      topic: "safety",
      q: "Available ba ang Gate sa US?",
      a: "Hindi. Nasa listahan ng mga restricted na lokasyon sa User Agreement ng Gate ang United States.",
    },
    {
      topic: "safety",
      q: "Naglalathala ba ang Gate ng proof of reserves?",
      a: "Oo, mula pa noong Mayo 2020. Ipinakita ng batch noong Oktubre 18, 2026 ang kabuuang reserba na $8.68 bilyon sa 496 asset at reserve ratio na 118%.",
    },
    {
      topic: "safety",
      q: "Saan lisensyado ang Gate?",
      a: "Naglilista ang Gate ng mga lisensya o rehistro sa Hong Kong, Gibraltar, Malta (MFSA, sa ilalim ng MiCA), Australia (AUSTRAC), Dubai (VARA at DMCC), Bahamas, Japan at Cyprus.",
    },
  ],
};
