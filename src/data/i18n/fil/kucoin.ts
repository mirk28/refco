import type { ExchangeText } from "../../types";

export const kucoin: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Field na “Referral Code (Optional)” sa unang hakbang ng pag-sign up",
    apply:
      "Ilagay ito sa field na “Referral Code (Optional)” sa unang hakbang ng pag-sign up, o buksan ang link sa pag-sign up na nasa page na ito – ito na ang pupuno sa field, at hindi na mababago ang code.",
    whereToEnter:
      "Sa pinakaunang hakbang ng registration, hinihingi ng KuCoin ang referral code, kasabay ng email address o phone number mo – sa website man o sa app. “Referral Code (Optional)” ang label ng field. Binubuksan ng link sa page na ito ang registration page ng KuCoin na nakalagay na ang QBSS4BT7 at hindi na mababago ang field, kaya hindi ka magkakamali. Dagdag ng registration guide ng KuCoin, puwede mong ilagay nang mano-mano ang code kung hindi ito napunan ng link.",
    afterSignupShort: "Kapag hiniling – “Link Referrer” sa help center (hindi inilalathala ang mga kondisyon)",
    afterSignup:
      "Posible. May self-service request sa help center ng KuCoin na tinatawag na “Link Referrer” (“Submit a request to add a referrer manually”), at may katapat itong request para alisin ang referrer. Sa parehong request, kailangan mong mag-log in, at hindi inilalathala ng KuCoin ang mga kondisyon o anumang palugit, kaya hindi garantisadong maaaprubahan ito. Ang paglalagay ng code sa pag-sign up pa rin ang maaasahang paraan.",
    inviteeReward:
      "Sabi ng referral page ng KuCoin, ang mga inimbitahang kaibigan ay “stand to receive cashback and exclusive newcomer rewards” – ibig sabihin, puwede silang makatanggap ng cashback at eksklusibong reward para sa bagong user. Bahagi ng sarili mong trading fees ang cashback: puwedeng magtakda ang referrer ng eksklusibong cashback rate para sa mga taong inimbitahan niya, hanggang sa kasalukuyan niyang rate ng komisyon, kaya walang nakapirming porsyento. Tumatagal ang referral nang 365 araw mula sa registration mo. Bukod dito, inaanunsyo ng KuCoin ang bonus na hanggang 10,650 USDT para sa mga bagong user.",
    guide: [
      "Binibigyan ng referral program ng KuCoin ang referrer ng komisyon mula sa trading fees ng mga taong inimbitahan niya, at puwede niyang ibalik ang bahagi nito sa inimbitahang user bilang cashback. Walang itinakdang porsyento ng cashback ang KuCoin – nakadepende ito sa rate na itinakda ng referrer, na hindi puwedeng lumampas sa sarili niyang rate ng komisyon.",
      "Sakop ng referral ang mga trade sa spot (sa KuCoin, kasama rito ang spot, margin at mga trading bot), sa ETF at sa futures. Hindi kasama ang mga trade na ginawa gamit ang API. Tumatagal ang referral nang 365 araw mula nang mag-sign up ka, at mas maaga itong natatapos kapag umabot ka sa VIP 3. Araw-araw ibinibigay ang mga komisyon, sa currency na ginamit sa pagbabayad ng fee.",
      "Ayon sa KuCoin, hindi available ang referral program sa mga residente ng Belgium, France, Netherlands at iba pang bansa o rehiyon kung saan restricted ang mga serbisyo nito.",
    ],
  },
  signup: {
    methods: ["email address", "phone number", "Telegram", "Google", "Apple"],
    steps: [
      {
        title: "Buksan ang registration page ng KuCoin",
        text: "Gamitin ang button para mag-sign up sa page na ito. Magbubukas ang page na “Welcome to KuCoin”, at nasa field na “Referral Code (Optional)” na ang referral code na QBSS4BT7.",
      },
      {
        title: "Ilagay ang email address o phone number mo",
        text: "O magpatuloy gamit ang Telegram, Google o Apple. Nasa parehong unang hakbang din ang referral code.",
      },
      {
        title: "Tanggapin ang Terms of Use",
        text: "Lagyan ng check ang box para sa Terms of Use at Privacy Policy, saka piliin ang “Create Account and Claim Reward”.",
      },
      {
        title: "Ilagay ang verification code",
        text: "Nagpapadala ang KuCoin ng code sa email o phone mo para kumpirmahing sa iyo ito.",
      },
      {
        title: "Magtakda ng login password",
        text: "Pumili ng password at pindutin ang “Confirm” – may account ka na.",
      },
      {
        title: "I-verify ang identity mo",
        text: "Piliin ang bansa mo at ang uri ng ID, isumite ang mga litrato ng dokumento at tapusin ang face verification. Kailangan ito ng mga bagong user para magamit ang mga produkto ng KuCoin.",
      },
    ],
    kycShort: "Kailangan para sa mga bagong user",
    kyc: "Oo. Mula Agosto 31, 2023, kailangang tapusin ng mga bagong user ang Identity Verification para magamit ang mga produkto at serbisyo ng KuCoin. Kasama sa verification ang pagpili ng bansa at uri ng ID, ang pagsumite ng mga litrato ng dokumento at isang face check, at isang KuCoin account lang ang puwedeng i-verify ng bawat tao. Sa mga lumang account na hindi kailanman na-verify, puwede pa ring magbenta ng crypto, magsara ng mga futures at margin na posisyon, maglabas ng pondo mula sa mga Earn product at mag-withdraw, pero hindi na puwedeng mag-deposit.",
    documents:
      "Tumatanggap ang KuCoin ng ID card, driver's license, passport o residence permit, at susundan ito ng face verification.",
    minAge: "18 taong gulang (Terms of Use ng KuCoin)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "May 20% diskwento kapag KCS ang ipinambayad mo sa fees; inilalapat ito ng KuCoin sa spot at margin trading at ibinabalik bilang rebate, pero ayon sa KuCoin, puwedeng bahagyang mas mababa ang aktwal na diskwento. Sa mas mataas na VIP level, bumababa ang fees nang hanggang 75%.",
  extraFeeMarkets: ["Spot – mga Class B token", "Spot – mga Class C token"],
  sourceLabels: [
    "KuCoin: Paano mag-sign up (web at app)",
    "KuCoin: Referral program at mga tuntunin",
    "KuCoin: Self-service sa help center (Link Referrer)",
    "KuCoin: Rewards Hub (mga task para sa bagong user)",
    "KuCoin: FAQ ng Rewards Hub",
    "KuCoin: Fees ayon sa VIP level",
    "KuCoin: Pagbabayad ng fees gamit ang KCS",
    "KuCoin: Identity verification at mga limit ng account",
    "KuCoin: Futures leverage ayon sa laki ng posisyon",
    "KuCoin: Fees ng mga trading bot",
    "KuCoin: Terms of Use (mga restricted na lokasyon, minimum na edad)",
    "KuCoin: Tungkol sa amin",
    "KuCoin: Proof of reserves",
    "KuCoin EU: Lisensya sa ilalim ng MiCAR ng KuCoin EU Exchange GmbH",
    "KuCoin: Pahayag tungkol sa kasunduan nito sa US Department of Justice",
    "KuCoin: Liham ng CEO tungkol sa security incident noong 2020",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures", "Trading bot", "ETF"],
  bonusHeadline: "Hanggang 10,650 USDT na bonus para sa mga bagong user",
  benefits: [
    "Inaanunsyo ng registration page ng KuCoin ang bonus na hanggang 10,650 USDT para sa mga bagong user, na makukuha mo sa pagtapos ng mga task sa Rewards Hub",
    "Cashback sa trading fees mo kung nagtakda ng rate ang referrer – pinapayagan ito ng program ng KuCoin nang 365 araw",
    "Sakop ng iisang referral ang spot, margin, futures, trading bot at ETF",
    "Libreng gamitin ang mga trading bot; ang trading fee lang ng bot ang babayaran mo",
  ],
  benefitNote:
    "Sariling headline ng KuCoin ang 10,650 USDT, at ito ang pinakamataas na posibleng halaga: ibinibigay ito ng Rewards Hub bilang mga coupon pack, trial fund, fee voucher at maliliit na cash reward para sa pag-sign up, pag-verify ng identity mo, unang deposit, unang trade at mga limited-time task. Kailangang matapos ang mga limited-time task sa loob ng 7 araw mula sa registration, at may bisa ang mga reward nang 30 araw. Hindi binibilang ang mga stablecoin pair at ang mga trade na walang fee, at hindi kwalipikado ang mga market maker at institutional user. Binabanggit pa rin ng FAQ ng Rewards Hub ng KuCoin ang mas lumang maximum na 3,200 USDT.",
  headquarters: "Hindi sinasabi ng KuCoin (sakop ng batas ng Turks and Caicos Islands ang Terms of Use)",
  regulation:
    "Lisensya sa ilalim ng MiCAR na hawak ng KuCoin EU Exchange GmbH, Vienna (EEA maliban sa Malta); rehistrado sa AUSTRAC sa Australia",
  users: "Mahigit 45 milyong user (ayon sa KuCoin)",
  assets: "1,000+ nakalistang token, 1,300+ trading pair",
  maxLeverage: "Hanggang 125x (pinakamaliit na tier ng posisyon)",
  feeNote:
    "Hinahati ng KuCoin sa mga class ang mga token: para sa mga Class A token ang spot rate sa itaas, habang mas mahal ang mga Class B at Class C token. Nakadepende ang class sa base currency ng pair.",
  products: ["USDT-margined at coin-margined futures", "Spot", "Margin", "Trading bot", "Copy trading", "Earn", "KuCoin Web3 Wallet"],
  tagline: "Mga altcoin at trading bot para sa lahat",
  quickAnswer:
    "Ang KuCoin referral code ay QBSS4BT7. Inilalagay ito sa field na “Referral Code (Optional)” sa unang hakbang ng pag-sign up; binubuksan ng button sa page na ito ang KuCoin na nakalagay na ang code at hindi na ito mababago. Sakop ng referral ang spot, margin, futures at trading bot nang 365 araw, at inaanunsyo ng KuCoin ang bonus na hanggang 10,650 USDT para sa mga bagong user. Kung makalimutan mo ang code, may request na “Link Referrer” sa help center ng KuCoin, pero hindi inilalathala ang mga kondisyon nito.",
  about: [
    "Inilunsad ang KuCoin noong ikatlong quarter ng 2017, at ayon sa exchange, mahigit 45 milyong user na ang gumagamit nito sa mahigit 200 bansa at rehiyon, at mahigit 1,000 token na ang nakalista rito. Nakilala ito dahil maaga itong naglilista ng mga altcoin at pinadali nito ang automated trading: walang bayad ang paggamit ng mga trading bot nito bukod sa trading fees.",
    "Kasama sa derivatives ng KuCoin ang USDT-margined at coin-margined futures na may maximum leverage na 125x sa pinakamaliit na tier ng posisyon – bumababa ang limit sa 100x sa susunod na tier, at lalo pang bumababa habang lumalaki ang posisyon. May margin trading, copy trading, mga Earn product at Web3 wallet din ang exchange, at nagbibigay ang KCS token ng 20% diskwento sa spot at margin fees.",
    "Noong Enero 27, 2025, inanunsyo ng KuCoin ang kasunduan nito sa US Department of Justice; naisara na nito ang mga account ng mga user sa US simula Enero 23, 2025. Sa EEA (European Economic Area), ang KuCoin EU Exchange GmbH sa Vienna ang entity ng grupo – isang crypto-asset service provider na lisensyado sa ilalim ng MiCAR at pinangangasiwaan ng FMA ng Austria. Pagkatapos ng hack noong 2020 na nakaapekto sa humigit-kumulang $285 milyon, sinasabi ng KuCoin na ito at ang insurance fund nito ang sumagot sa humigit-kumulang $45.55 milyong hindi na nabawi, at walang user na nalugi.",
  ],
  highlights: [
    { title: "Libreng trading bot", text: "Walang bayad ang mismong mga bot – ang trading fee lang ng bot ang babayaran." },
    { title: "Nakapirmi na ang code", text: "Inilalagay ng link sa pag-sign up ang QBSS4BT7, at hindi na mababago ang field." },
    { title: "Reserves na lampas sa 100%", text: "BTC 112%, ETH 115%, USDT 110% noong Oktubre 31, 2026." },
  ],
  pros: [
    "Automated trading na madali kahit sa baguhan, gamit ang mga libreng bot",
    "Malawak na pagpipilian ng altcoin, na may mahigit 1,000 nakalistang token",
    "Mababang standard futures fees: 0.02% maker / 0.06% taker",
    "Proof of reserves na lampas sa 100% para sa BTC, ETH, USDT at USDC",
  ],
  cons: [
    "Hindi available sa US, France, Netherlands, Singapore at ilang bahagi ng Canada",
    "Tumataas sa 0.2% at 0.3% ang spot fees para sa mga Class B at Class C token",
    "Hindi inilalathala ang mga kondisyon para magdagdag ng referrer pagkatapos mag-sign up",
    "Mas mababa ang futures volume kaysa sa limang pinakamalaking exchange",
  ],
  bestFor: [
    "Mga trader na gustong gawing automated ang trading nila gamit ang mga bot",
    "Mga mahilig sa altcoin",
    "Mga intermediate na futures trader",
  ],
  signupTip:
    "Tapusin agad ang Identity Verification pagkatapos mag-sign up – kung wala ito, hindi talaga magagamit ng bagong user ang KuCoin – at simulan ang mga limited-time task sa Rewards Hub sa loob ng 7 araw mula sa registration.",
  safety:
    "Regular na naglalathala ang KuCoin ng mga proof-of-reserves report. Sa data noong Oktubre 31, 2026, 112% ang reserve ratio ng BTC, 115% ng ETH, 110% ng USDT at 127% ng USDC, kasama ang audit report na may petsang Nobyembre 9, 2026. Tungkol sa hack noong 2020, sinasabi ng KuCoin na walang user na nalugi. Ang execution ang ginagawang automated ng mga bot, hindi ang risk management – laging magtakda ng stop condition, at ang pondong pang-trade lang ang iwan sa exchange.",
  restricted:
    "Nakalista bilang mga restricted na lokasyon sa Terms of Use ng KuCoin (na-update noong Oktubre 29, 2026): ang United States kasama ang mga teritoryo nito, Singapore, mainland China at Hong Kong, Malaysia, Kazakhstan, Uzbekistan, Russia, Belarus, ang mga probinsya ng Canada na Ontario at British Columbia, France, Netherlands, at ang mga rehiyon ng Crimea, Donetsk, Luhansk, Zaporizhzhia at Kherson. Ipinagbabawal ang paggamit ng VPN para makaiwas sa restriction.",
  faqs: [
    {
      topic: "referral",
      q: "Gumagana ba ang KuCoin referral code na QBSS4BT7?",
      a: "Oo. Noong Nobyembre 16, 2026, binuksan ng link sa page na ito ang registration page ng KuCoin, at nakalagay na at hindi na mababago ang QBSS4BT7 sa field na “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Gaano katagal ang isang KuCoin referral?",
      a: "365 araw mula sa registration mo. Ayon sa mga tuntunin ng KuCoin, humihinto rin ang mga komisyon – at kasama nito ang anumang cashback – kapag umabot ka sa VIP level 3.",
    },
    {
      topic: "referral",
      q: "Magkano ang cashback ko gamit ang KuCoin referral code?",
      a: "Walang nakapirming rate ang KuCoin. Puwedeng magtakda ang referrer ng eksklusibong cashback rate para sa mga inimbitahang user, hanggang sa sarili niyang rate ng komisyon, at ibinibigay ito sa mga trade sa spot, margin, trading bot, ETF at futures. Hindi kasama ang mga trade gamit ang API.",
    },
    {
      topic: "referral",
      q: "Ano ang ibig sabihin ng “Link Referrer” sa KuCoin?",
      a: "Isa itong self-service request sa help center ng KuCoin, na inilalarawan bilang “Submit a request to add a referrer manually” – isang request para manu-manong maidagdag ang referrer. Ito ang paraan para sa mga account na nag-sign up nang walang code. Kailangan mong mag-log in para magamit ito, at hindi inilalathala ng KuCoin ang mga kondisyon nito.",
    },
    {
      topic: "referral",
      q: "Saang mga bansa hindi available ang KuCoin referral program?",
      a: "Ayon sa KuCoin, hindi available ang program sa mga residente ng Belgium, France, Netherlands at iba pang bansa o rehiyon kung saan restricted ang mga serbisyo nito.",
    },
    {
      topic: "signup",
      q: "Puwede ba akong mag-sign up sa KuCoin gamit ang Google, Apple o Telegram?",
      a: "Oo. Sa registration page ng KuCoin, makikita ang “Or continue with” na may Telegram, Google at Apple sa ilalim ng field para sa email at phone number.",
    },
    {
      topic: "signup",
      q: "Puwede ko bang gamitin ang KuCoin nang walang KYC?",
      a: "Hindi kung bagong user ka. Mula Agosto 31, 2023, kailangang tapusin ng mga bagong user ang Identity Verification para magamit ang mga produkto at serbisyo ng KuCoin.",
    },
    {
      topic: "signup",
      q: "Puwede ba akong magkaroon ng dalawang KuCoin account?",
      a: "Hindi kung parehong verified ang mga ito. Ayon sa KuCoin, isang KuCoin account lang ang puwedeng i-verify ng bawat tao.",
    },
    {
      topic: "bonus",
      q: "Ano ang welcome bonus ng KuCoin?",
      a: "Inaanunsyo ng homepage at registration page ng KuCoin ang hanggang 10,650 USDT para sa mga bagong user. Makukuha ito sa mga task para sa bagong user sa Rewards Hub – pag-sign up, pag-verify ng identity, unang deposit, unang trade at mga limited-time task – bilang mga coupon pack, trial fund, fee voucher at maliliit na cash reward. Nakalista ang task sa pag-sign up bilang 400 USDT na Bonus Pack at Cash Reward.",
    },
    {
      topic: "bonus",
      q: "Gaano katagal ko puwedeng i-claim ang mga reward para sa bagong user sa KuCoin?",
      a: "Kailangang matapos ang mga limited-time challenge task sa loob ng 7 araw mula sa registration, at ayon sa KuCoin, puwedeng gamitin ang mga reward nang 30 araw bago mawalan ng bisa ang mga ito.",
    },
    {
      topic: "bonus",
      q: "Aling mga trade ang hindi binibilang sa mga task para sa bagong user sa KuCoin?",
      a: "Hindi binibilang ang mga trade sa stablecoin pair at ang mga trade na walang fee. Hindi talaga kwalipikado ang mga market maker at institutional user.",
    },
    {
      topic: "fees",
      q: "Magkano ang futures fees sa KuCoin?",
      a: "Nagbabayad ang mga VIP 0 user ng 0.02% maker at 0.06% taker sa futures. May nakapirming trading fee na 0.06% ang Futures Grid bot.",
    },
    {
      topic: "fees",
      q: "Magkano ang diskwento ng KCS sa KuCoin?",
      a: "20%. Inilalapat ito ng KuCoin sa spot at margin trading kapag KCS ang ipinambayad mo sa fees, at ibinabalik ito bilang rebate; puwedeng bahagyang mas mababa ang aktwal na diskwento.",
    },
    {
      topic: "fees",
      q: "Libre ba ang mga trading bot ng KuCoin?",
      a: "Oo, ayon sa KuCoin, libre ang mismong mga bot. May hiwalay na tuntunin sa fees ang mga trade ng bot: may 20% diskwento ang mga spot bot sa maker at taker rate ng VIP 0, nakapirming 0.06% ang binabayaran ng Futures Grid bot, at hindi ginagamit dito ang KCS deduction at ang mga VIP level.",
    },
    {
      topic: "fees",
      q: "Ano ang maximum leverage sa KuCoin?",
      a: "125x para sa mga verified na account sa pinakamaliit na tier ng posisyon. Hinahati ng KuCoin sa mga tier ang futures leverage ayon sa laki ng posisyon – hanggang 100x lang ang susunod na tier.",
    },
    {
      topic: "safety",
      q: "Available ba ang KuCoin sa US?",
      a: "Hindi. Restricted na lokasyon ang United States sa Terms of Use ng KuCoin, at isinara ng KuCoin ang mga account ng mga user sa US simula Enero 23, 2025.",
    },
    {
      topic: "safety",
      q: "Regulated ba ang KuCoin sa Europa?",
      a: "Lisensyadong crypto-asset service provider sa ilalim ng MiCAR ang KuCoin EU Exchange GmbH sa Vienna, at pinangangasiwaan ito ng Financial Market Authority ng Austria. Nagsisilbi ito sa EEA (European Economic Area) maliban sa Malta.",
    },
    {
      topic: "safety",
      q: "Nagkaroon ba ng hack sa KuCoin?",
      a: "Oo, noong 2020. Humigit-kumulang $285 milyon ang naapektuhan. Ayon sa KuCoin, ito at ang insurance fund nito ang sumagot sa humigit-kumulang $45.55 milyon (16%) na hindi na nabawi, at walang user na nalugi.",
    },
  ],
};
