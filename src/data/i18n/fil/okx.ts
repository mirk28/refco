import type { ExchangeText } from "../../types";

export const okx: ExchangeText = {
  referral: {
    codeName: "referral code",
    whereShort: "Field na “Referral code (optional)” sa hakbang ng email sa pag-sign up",
    apply:
      "Ilagay ito sa field na “Referral code (optional)” sa hakbang ng email sa pag-sign up – nakatiklop ang field kaya kailangan mo muna itong buksan – o buksan ang sign-up link sa page na ito, na awtomatikong nagdadala ng code para sa iyo.",
    whereToEnter:
      "Sa website ng OKX, inilalagay ang code sa field na “Referral code (optional)” sa hakbang kung saan mo ilalagay ang email address mo. Nakatiklop ang field, kaya buksan mo muna ito. Kung dumaan ka sa isang referral link, kasama na ang code, at ayon sa OKX, hindi na mababago ang code na awtomatikong nailagay mula sa link. Sa phone, ito ang tagubilin ng OKX: ilagay muna ang email mo sa invite page, saka i-download ang app gamit ang link na iyon at mag-sign up gamit ang parehong email – kung hiwalay mong i-download ang app at doon ka mag-sign up, puwedeng hindi madala ang code.",
    afterSignupShort: "Hindi – sa pag-sign up lang",
    afterSignup:
      "Hindi. Ayon sa OKX, gumagana lang ang mga invite code sa pag-sign up at hindi na puwedeng idagdag sa account na nagawa na; sinasabi rin ng referral FAQ nito na karaniwang hindi na puwedeng idagdag o palitan ang code pagkatapos. Hindi ka magiging eligible ulit kapag binura mo ang account mo at nag-sign up ka ulit, at puwede pa itong ituring na paglabag. Hindi puwedeng ikabit ang link na may anyong okx.com/join/… sa account na mayroon ka na.",
    inviteeReward:
      "Bilang inimbitahang user, makukuha mo ang Welcome Rewards ng OKX, na tinatawag ding New User Bonus. Hiwalay ito sa reward ng nag-imbita sa iyo at nakadepende sa bansa mo, sa campaign at sa link na ginamit mo; nakatakda na ang offer sa sandaling mag-sign up ka. Nang suriin namin, nagpakita ang invite page ng code na ito ng welcome reward na hanggang €400 sa OKX Europe, at nangako ang global invite page ng OKX ng hanggang 100 USDT para sa pag-sign up at pagtapos ng mga task.",
    guide: [
      "Iniuugnay ng OKX referral code ang bago mong account sa taong nag-imbita sa iyo. Para sa iyo, ang praktikal na epekto nito ay access sa Welcome Rewards: mga deposit at trading task na itinatakda ng OKX ang halaga ayon sa bansa, campaign at grupo ng user. Sa pag-sign up napagpapasyahan kung aling offer ang makukuha mo, kaya dapat nakalagay na ang code sa sandaling iyon.",
      "Nakadepende sa kung saan ka nakatira kung aling OKX ang mapupuntahan mo. Ang mga bisita mula sa EEA (European Economic Area) – at mula sa ilan pang bansa sa Europa – ay dinadala sa OKX Europe (okx.com/en-eu), na pinapatakbo ng OKX Europe Limited sa Malta sa ilalim ng MiCA. Doon, ibinibigay ang mga reward bilang crypto, X-Perps voucher o VIP Pass; naka-lock nang hanggang 45 araw ang mga crypto reward (puwede kang mag-trade gamit ang mga ito, pero hindi ka puwedeng mag-withdraw ng mga ito), at hindi binibilang sa mga trading task ang X-Perps volume.",
      "Sa global site, dumarating ang mga reward bilang crypto o rebate card na kailangang buksan sa loob ng 30 araw, kailangang matapos ang isang trading task sa iisang trade, at nawawala ang mga hindi natapos na task 180 araw pagkatapos mag-sign up.",
    ],
  },
  signup: {
    methods: ["email address (idinadagdag at kinukumpirma ang phone number sa pag-sign up)"],
    steps: [
      {
        title: "Buksan ang invite page ng OKX",
        text: "Gamitin ang sign-up button sa page na ito. Bubuksan ng OKX ang invite page para sa code na T7IRGAR3 at ipapakita ang welcome reward na naaangkop sa bansa mo.",
      },
      {
        title: "Piliin ang bansa o rehiyon kung saan ka nakatira",
        text: "Piliin kung saan ka nakatira, sumang-ayon sa Terms of Service at pindutin ang “Next”.",
      },
      {
        title: "Ilagay ang email address mo at tingnan ang referral code",
        text: "Buksan ang “Referral code (optional)” – dapat nakalagay doon ang T7IRGAR3 – saka pindutin ang “Sign up”.",
      },
      {
        title: "Kumpirmahin ang 6-digit na code sa email",
        text: "Magpapadala ang OKX ng 6-digit na code sa email address mo. May bisa ito sa loob ng 10 minuto.",
      },
      {
        title: "Idagdag ang phone number mo",
        text: "Ilagay ang phone number mo at ang 6-digit na code na ipinadala rito. Kailangan ng OKX ang parehong email address at phone number sa bawat account.",
      },
      {
        title: "Magtakda ng password",
        text: "Pumili ng malakas na password na hindi mo ginagamit sa ibang lugar para sa account.",
      },
      {
        title: "I-verify ang identity mo",
        text: "Tapusin ang identity verification gamit ang ID na inisyu ng gobyerno at isang selfie o facial check. Pagkatapos lang nito puwedeng mag-trade, mag-deposit at mag-withdraw.",
      },
    ],
    kycShort: "Kailangan bago ang trading, deposit at withdrawal",
    kyc: "Oo. Kailangan ng OKX ang identity verification para magamit ang isang individual account – pagkatapos lang nito puwedeng mag-trade, mag-deposit at mag-withdraw. Ibibigay mo ang lugar ng tirahan, nasyonalidad, pangalan, petsa ng kapanganakan at mga detalye ng ID mo, magsusumite ka ng dokumentong inisyu ng gobyerno at dadaan ka sa selfie o facial check; puwede ring humingi ang OKX ng proof of address na inisyu sa nakalipas na 6 buwan. Ayon sa OKX, natatapos ang pagsusuri sa loob ng 24 oras, at isang account lang ang puwedeng gamitan ng isang identity document.",
    documents:
      "Valid na ID na inisyu ng gobyerno: passport, national ID card, driver's license o residence permit – ang listahang ipinapakita para sa bansa mo sa verification ang masusunod – dagdag pa ang selfie o facial check at, kung hihingin, proof of address na hindi lalampas sa 6 buwan ang tanda.",
    minAge: "18 taong gulang",
  },
  welcomeTasks: [],
  tokenDiscount: "",
  extraFeeMarkets: ["Options"],
  sourceLabels: [
    "OKX: Paano gumawa ng account",
    "OKX: FAQ sa referral program",
    "OKX: FAQ sa affiliate (mga invite code at rebate)",
    "OKX: Mga tuntunin ng New User Bonus (EEA)",
    "OKX: FAQ sa New User Bonus (EEA)",
    "OKX: Mga tuntunin ng New User Bonus (global)",
    "OKX: Listahan ng fees",
    "OKX: FAQ sa mga patakaran ng trading fees",
    "OKX: Leverage ng X-Perps sa EEA",
    "Public API ng OKX: mga perpetual swap instrument (maximum na leverage)",
    "OKX: Paano i-verify ang individual account",
    "OKX: Identity verification – kwalipikasyon, tagal ng pagsusuri at mga dokumento",
    "OKX: Risk at compliance disclosure (mga restricted na lokasyon)",
    "OKX: Terms of Service",
    "OKX Europe: Tungkol sa kompanya",
    "OKX Middle East: Tungkol sa kompanya (lisensya mula sa VARA)",
    "OKX: Proof of reserves",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futures & perpetual swap"],
  bonusHeadline: "Welcome reward na hanggang €400 o 100 USDT",
  benefits: [
    "Welcome Rewards ng OKX para sa bagong user: hanggang €400 sa OKX Europe at hanggang 100 USDT sa global site, na nabubuksan kapag natapos mo ang mga deposit at trading task",
    "Mababang standard fees: 0.08% maker / 0.10% taker sa spot at 0.02% / 0.05% sa futures at mga perpetual contract",
    "Hindi ka magkakamali sa code na dala ng link – hindi na mababago sa OKX ang code na awtomatikong nakalagay",
    "Buwanang proof of reserves na puwede mong ikumpara sa sarili mong balance",
  ],
  benefitNote:
    "Para sa Welcome Rewards, kailangan mong mag-sign up gamit ang itinakdang link at tapusin ang identity verification, saka gawin ang mga deposit at trading task. Sa OKX Europe, hindi binibilang na deposit ang mga internal transfer, hindi binibilang na trade ang mga trading pair na walang fee at ang X-Perps volume, naka-lock nang hanggang 45 araw ang mga crypto reward, at puwedeng umabot nang hanggang 48 oras bago pumasok ang reward. Sa global site, kailangang buksan ang mga reward sa loob ng 30 araw at mawawalan ng bisa ang mga task 180 araw pagkatapos mag-sign up. Nag-iiba ang halaga at mga task ayon sa bansa at campaign.",
  headquarters: "Aux Cayes FinTech Co. Ltd. (Seychelles) para sa global site; OKX Europe Limited (Malta); OKX Middle East Fintech FZE (Dubai)",
  regulation: "Awtorisasyon sa ilalim ng MiCA para sa OKX Europe Limited (Malta, MFSA); lisensya ng VARA sa Dubai",
  users: "Mahigit 120 milyong user (ayon sa OKX Europe)",
  assets: "270+ coin (ayon sa OKX Europe)",
  maxLeverage: "Hanggang 100x (global site; hanggang 10x sa OKX Europe)",
  feeNote:
    "Ito ang fees para sa Regular user; nagsisimula ang kasunod na tier sa asset balance na 100,000 o sa spot volume na 1,000,000 sa loob ng 30 araw (5,000,000 para sa futures), na binibilang sa EUR sa OKX Europe at sa USD sa global site. May 0.01% na settlement fee ang expiry futures.",
  products: ["Spot", "Perpetual swap", "Expiry futures", "Options", "Trading bot"],
  tagline: "Spot at derivatives na mababa ang fees, na may buwanang proof of reserves",
  quickAnswer:
    "Ang OKX referral code ay T7IRGAR3. Sa website, inilalagay ito sa field na “Referral code (optional)” sa hakbang ng email sa pag-sign up; awtomatiko itong dala ng button sa page na ito. Gumagana lang ito sa pag-sign up – hindi nagdadagdag ang OKX ng invite code sa account na nagawa na. Makukuha ng mga bagong user ang Welcome Rewards ng OKX: hanggang €400 sa OKX Europe o hanggang 100 USDT sa global site, pagkatapos ng identity verification at ng mga deposit at trading task.",
  about: [
    "Itinatag ang OKX noong 2017, at isa ito sa pinakamalalaking crypto exchange para sa spot at derivatives. Binabanggit ng mga page ng OKX Europe ang mahigit 120 milyong user at mahigit 270 nakalistang coin. Nagbabayad ang mga Regular user ng 0.08% maker at 0.10% taker sa spot, 0.02% / 0.05% sa futures at perpetual swap, at 0.03% sa options.",
    "Saklaw ng mga produkto nito ang spot, perpetual swap, expiry futures, options at trading bot, pero nakadepende sa kung saan ka nakatira kung alin ang puwede mong gamitin. Sa global site, 100x ang pinakamataas na leverage, sa mga perpetual tulad ng BTC-USDT, ETH-USDT, SOL-USDT at XRP-USDT. Sa OKX Europe, X-Perps ang tawag sa perpetual na produkto at limitado ito sa 10x, at mas mababa pa para sa mas malalaking posisyon.",
    "Naglalabas ang OKX ng proof of reserves bawat buwan. Saklaw ng ika-49 na report ang $33.87 bilyon sa 21 asset; ipinakita ng verification noong Nobyembre 1, 2026 ang reserve ratio na 108% para sa BTC, 101% para sa ETH, 106% para sa USDT at 100% para sa USDC. Nakabatay ito sa zk-STARK at Merkle tree, kaya masusuri ng mga naka-log in na user na kasama ang sarili nilang balance. Awtorisado ang OKX Europe Limited ng Malta Financial Services Authority bilang crypto-asset service provider sa ilalim ng MiCA, at may lisensya ang OKX Middle East Fintech FZE mula sa VARA ng Dubai.",
  ],
  highlights: [
    { title: "Mababang standard fees", text: "0.08% / 0.10% sa spot at 0.02% / 0.05% sa futures at mga perpetual contract." },
    { title: "Buwanang proof of reserves", text: "May 49 report na sa ngayon, na puwedeng i-verify gamit ang zk-STARK at Merkle tree." },
    { title: "Awtorisado sa ilalim ng MiCA sa EEA", text: "Awtorisado ang OKX Europe Limited ng MFSA, ang regulator ng Malta." },
  ],
  pros: [
    "Mababang standard fees sa spot, futures at options",
    "Buwanang proof of reserves na puwede mong i-verify mismo, na may ratio na higit sa 100%",
    "Kompanyang awtorisado sa ilalim ng MiCA para sa mga user sa EEA, at lisensya ng VARA sa Dubai",
    "Options at expiry futures bukod sa perpetual swap",
  ],
  cons: [
    "Hindi na puwedeng magdagdag ng referral code pagkatapos mag-sign up",
    "Nakadepende nang malaki sa bansa mo ang mga produkto – limitado sa 10x ang mga perpetual sa OKX Europe",
    "Naka-lock nang hanggang 45 araw ang mga welcome reward sa OKX Europe",
    "Hindi available sa Canada, India, Japan, Hong Kong at sa ilang bahagi ng United States",
  ],
  bestFor: ["Mga spot at futures trader na maingat sa fees", "Mga options trader", "Mga user sa EEA na gusto ng platform na awtorisado sa ilalim ng MiCA"],
  signupTip:
    "Sa phone, ilagay muna ang email mo sa invite page at i-download ang app gamit ang link na iyon – kung hiwalay mong i-download ang app at doon ka mag-sign up, puwedeng hindi madala ang referral code.",
  safety:
    "Naglalabas ang OKX ng buwanang proof of reserves – ratio na 108% para sa BTC, 101% para sa ETH, 106% para sa USDT at 100% para sa USDC sa verification noong Nobyembre 1, 2026 – at hinahayaan nito ang mga naka-log in na user na suriin ang sarili nilang balance sa “View my report”, gamit ang mga open-source tool at mga inilathalang wallet address. Kailangang naka-link sa bawat account ang parehong email address at phone number. Gaya ng sa anumang exchange, itago lang sa platform ang pondong ginagamit mo sa trading.",
  restricted:
    "Ito ang mga lokasyong nakalista bilang restricted sa OKX: Afghanistan, Canada, Cuba, Hong Kong, Iran, India, Japan, Malaysia, Nepal, North Korea, Syria, Uzbekistan, ang mga rehiyon ng Crimea, Donetsk at Luhansk, at ilang hurisdiksyon sa US, kasama ang lahat ng teritoryo ng US. May bahagyang restriction sa Australia, Brazil, South Korea at United Kingdom (walang derivatives) at sa mga fiat payment sa Russia. Huling na-update ang listahan noong Nobyembre 14, 2026.",
  faqs: [
    {
      topic: "referral",
      q: "Gumagana ba ang OKX referral code na T7IRGAR3?",
      a: "Oo. Noong Nobyembre 16, 2026, binuksan ng link na okx.com/join/T7IRGAR3 ang sariling invite page ng OKX para sa code na iyon, na may welcome reward at sign-up link na dala ang code.",
    },
    {
      topic: "referral",
      q: "Bakit hindi ko makita ang field ng referral code sa OKX?",
      a: "Nakatiklop ang field na “Referral code (optional)” sa sign-up form, kaya kailangan mo muna itong buksan. Dagdag ng OKX, kung hindi talaga lumalabas ang field, mag-sign up ka na lang gamit ang referral link.",
    },
    {
      topic: "referral",
      q: "Paano gamitin ang OKX referral code sa app?",
      a: "Buksan ang invite link sa phone mo at ilagay doon ang email address mo, saka i-download ang OKX app gamit ang link na iyon at mag-sign up gamit ang parehong email. Babala ng OKX, puwedeng hindi madala ang code kung hiwalay mong i-download ang app at doon ka mag-sign up.",
    },
    {
      topic: "referral",
      q: "Puwede ko bang makuha ang OKX referral kung buburahin ko ang account ko at mag-sign up ulit?",
      a: "Hindi. Ayon sa OKX, hindi naibabalik ang eligibility kapag binura ang account at nag-sign up ulit, at puwede pa itong ituring na paglabag.",
    },
    {
      topic: "signup",
      q: "Kailangan ba ng phone number para mag-sign up sa OKX?",
      a: "Oo. Sa registration ng OKX, email address muna ang hinihingi, saka phone number, at kinukumpirma ang bawat isa gamit ang 6-digit na code. Kailangang naka-link ang dalawa, at isang account lang ang puwedeng gamitan ng bawat email address at phone number.",
    },
    {
      topic: "signup",
      q: "Gaano katagal valid ang email verification code ng OKX?",
      a: "May bisa sa loob ng 10 minuto ang 6-digit na code na ipinapadala ng OKX sa email address mo sa pag-sign up.",
    },
    {
      topic: "signup",
      q: "Gaano katagal ang identity verification sa OKX?",
      a: "Ayon sa OKX, natatapos ang pagsusuri sa loob ng 24 oras pagkatapos mong isumite ang dokumento mo at ang selfie o facial check.",
    },
    {
      topic: "signup",
      q: "Puwede ko bang gamitin ang OKX nang walang KYC?",
      a: "Hindi. Kailangan ang identity verification para magamit ang isang individual account; pagkatapos lang nito magiging available ang trading, deposit at withdrawal.",
    },
    {
      topic: "bonus",
      q: "Ano ang welcome bonus ng OKX?",
      a: "Makukuha ng mga bagong user na nag-sign up gamit ang referral link ang Welcome Rewards ng OKX (New User Bonus). Nang suriin namin, hanggang €400 sa OKX Europe ang ipinakita ng invite page, at hanggang 100 USDT naman ang ipinakita ng global invite page. Nabubuksan ang mga reward kapag natapos mo ang identity verification, ang mga deposit task at ang mga trading task, at nag-iiba ang mga ito ayon sa bansa at campaign.",
    },
    {
      topic: "bonus",
      q: "Puwede ko bang i-withdraw agad ang welcome reward ng OKX?",
      a: "Hindi. Sa OKX Europe, naka-lock nang hanggang 45 araw ang mga crypto reward – puwede kang mag-trade gamit ang mga ito, pero hindi mo puwedeng i-withdraw. Sa global site, naka-lock na ang mga reward pagdating pa lang, at hindi puwedeng gamitin sa trading o i-withdraw habang naka-lock.",
    },
    {
      topic: "bonus",
      q: "Aling mga deposit at trade ang binibilang sa welcome task ng OKX?",
      a: "Sa OKX Europe, binibilang ang mga deposit ng crypto o ng fiat gamit ang SEPA, iDEAL o Bancontact; hindi binibilang ang mga internal transfer. Binibilang ang mga trade gamit ang Buy, Sell, Convert o ang spot order book; hindi binibilang ang mga trading pair na walang fee at ang X-Perps volume. Sa global site, kailangang matapos ang isang trading task sa iisang trade.",
    },
    {
      topic: "fees",
      q: "Magkano ang options fees sa OKX?",
      a: "Nagbabayad ang mga Regular user ng 0.03% maker at 0.03% taker sa options.",
    },
    {
      topic: "fees",
      q: "Ano ang maximum leverage sa OKX?",
      a: "100x sa global site, sa mga perpetual swap tulad ng BTC-USDT, ETH-USDT, SOL-USDT at XRP-USDT, at mas mababa para sa mas malalaking posisyon. Sa OKX Europe, limitado sa 10x ang X-Perps. Malaki ang itinataas ng mataas na leverage sa panganib na ma-liquidate ka.",
    },
    {
      topic: "fees",
      q: "Paano makakuha ng mas mababang fees sa OKX?",
      a: "Nakadepende ang fee tier sa OKX sa asset balance mo o sa trading volume mo sa loob ng 30 araw. Natatapos ang Regular tier sa asset balance na 100,000, o sa volume na 1,000,000 sa loob ng 30 araw sa spot at 5,000,000 sa futures; lampas doon, VIP fees na ang umiiral.",
    },
    {
      topic: "safety",
      q: "Regulated ba ang OKX sa Europa?",
      a: "Oo. Awtorisado ang OKX Europe Limited ng Malta Financial Services Authority bilang crypto-asset service provider sa ilalim ng MiCA, at nagsisilbi ito sa mga customer sa EEA (European Economic Area) sa okx.com/en-eu.",
    },
    {
      topic: "safety",
      q: "Available ba ang OKX sa US?",
      a: "Limitado lang: nakalista sa OKX bilang restricted na lokasyon ang ilang hurisdiksyon sa US at ang lahat ng teritoryo ng US. Ganap na restricted ang Canada, India, Japan at Hong Kong.",
    },
    {
      topic: "safety",
      q: "Naglalabas ba ang OKX ng proof of reserves?",
      a: "Oo, bawat buwan. Saklaw ng ika-49 na report ang $33.87 bilyon sa 21 asset, at ipinakita ng verification noong Nobyembre 1, 2026 ang 108% para sa BTC, 101% para sa ETH, 106% para sa USDT at 100% para sa USDC.",
    },
  ],
};
