import type { ExchangeText } from "../../types";

export const bybit: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Field na “Referral Code (Optional)” sa sign-up form",
    apply:
      "Ilagay ito sa field na “Referral Code (Optional)” ng sign-up form, o buksan ang sign-up link sa page na ito, na kusang pumupuno sa field para sa iyo.",
    whereToEnter:
      "May field na “Referral Code (Optional)” ang sign-up form ng Bybit. Sa website, lalabas ito pagkatapos mong ilagay ang email address o phone number mo; sa app, isang hakbang pa pagkatapos nito – sa parehong kaso, bago mo pindutin ang “Sign Up Now”. Binubuksan ng link sa page na ito ang invite page ng Bybit na nakalagay na ang VN3KGLE sa field na iyon. Puwede pa ring baguhin ang field, kaya tingnan muna kung nandoon pa ang code bago mo ipadala ang form.",
    afterSignupShort: "Hindi – sa registration lang",
    afterSignup:
      "Hindi. Ayon sa registration guide ng Bybit, hindi mo na maidaragdag, mababago o mabubura ang referral o affiliate code mo pagkatapos mag-sign up. Iisa lang ang exception na dokumentado ng Bybit, at para ito sa mga affiliate code: puwede itong idagdag sa loob ng 14 araw sa main account na wala pang code. Malinaw na sinasabi ng Bybit na hindi suportado roon ang mga code ng Referral Program gaya ng VN3KGLE.",
    inviteeReward:
      "Sa referral program ng Bybit, puwedeng kumita ang inimbitahang user ng hanggang 250 USDT: 50 USDT para sa unang trade na hindi bababa sa $50 sa loob ng 14 araw mula sa registration, 100 USDT para sa kabuuang trading volume na hindi bababa sa $500 sa loob ng 30 araw pagkatapos ng unang trade na iyon, at isa pang 100 USDT para sa hindi bababa sa $10,000 sa parehong 30 araw. Bukod dito, binabanggit din ng invite page ng Bybit ang mga reward para sa inimbitahang user na nag-sign up at nakatapos ng Identity Verification, at makukuha ng mga bagong user ang 100 USDT na Welcome Gifts sa Rewards Hub.",
    guide: [
      "Parehong halaga ang ibinibigay ng referral program ng Bybit sa magkabilang panig, kaya ipinapakilala ito ng Bybit bilang “up to 500 USDT combined” (pinagsamang reward ng nag-imbita at ng inimbitahan). Bilang inimbitahang user, makukuha mo ang bahagi mo sa tatlong yugto na nakatali sa sarili mong trading: unang trade na hindi bababa sa $50 sa loob ng 14 araw mula sa registration, saka $500 at $10,000 na kabuuang volume sa loob ng sumunod na 30 araw. Binibilang ang volume sa spot, derivatives at options; hindi kasama ang mga trade sa mga trading pair na walang fee.",
      "Dumadaan ang bawat reward sa 3 araw na risk review, at pagkatapos nito, kailangan mo itong i-claim sa loob ng 10 araw, kung hindi, mawawalan ito ng bisa. May hangganan ang program: buwanang pool na 500,000 USDT, na ibinibigay sa kung sino ang mauna. Saklaw ng mga tuntuning ito ang mga account na binuksan sa global site mula Oktubre 10, 2026.",
      "Nakadepende sa bansang tinitirhan mo kung may silbi ang code. Ayon sa mga tuntunin ng referral program ng Bybit, walang referral program sa Germany, United Kingdom, France, Belgium at Hong Kong, at hindi bukas ang program sa mga residente ng EEA (European Economic Area) na inimbitahan mula rin sa loob ng EEA. Ginagamit ng mga residente ng EEA ang Bybit EU (bybit.eu), isang hiwalay na platform na pinapatakbo ng Bybit EU GmbH sa Vienna, na may sarili at mas maliit na referral offer.",
    ],
  },
  signup: {
    methods: ["email address", "phone number", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Buksan ang sign-up page ng Bybit",
        text: "Gamitin ang sign-up button sa page na ito. Binubuksan nito ang invite page ng Bybit na nakalagay na ang referral code na VN3KGLE.",
      },
      {
        title: "Piliin ang bansang tinitirhan mo",
        text: "Ito ang unang itinatanong ng Bybit dahil nakadepende sa tinitirhan mo ang mga produkto at reward.",
      },
      {
        title: "Ilagay ang email address o phone number mo",
        text: "O magpatuloy gamit ang Google, Apple o Telegram.",
      },
      {
        title: "Tingnan ang referral code",
        text: "Dapat VN3KGLE ang nakikita sa field na “Referral Code (Optional)”. Ito na ang tanging pagkakataon mo – hindi ka papayagan ng Bybit na idagdag o palitan ang code pagkatapos.",
      },
      {
        title: "Ilagay ang verification code at gumawa ng password",
        text: "Kumpirmahin ang code na ipinadala sa iyo ng Bybit, pumili ng password at pindutin ang “Sign Up Now”. Sa app (version 4.47.0 o mas bago), puwede ka ring gumawa ng passkey.",
      },
      {
        title: "Kumpletuhin ang Identity Verification",
        text: "Hinihingi ng Bybit ang Standard na verification level bago ka makapag-deposit o makapag-trade.",
      },
    ],
    kycShort: "Kailangan para sa lahat ng produkto (Standard level)",
    kyc: "Oo. Hinihingi ng Bybit ang Identity Verification na hindi bababa sa Standard level para sa lahat ng produkto. Kung wala ito, hindi makakapag-deposit o makakapag-trade ang account at puwede lang itong mag-withdraw – hanggang 20,000 USDT kada araw at 100,000 USDT kada buwan. Sa Standard verification (ID document at identity assessment), tataas ang limit sa withdrawal kada araw sa 1 milyong USDT; sa Advanced verification na may proof of address, sa 2 milyong USDT.",
    documents:
      "Tumatanggap ang Bybit ng passport, identity card, residence permit o driver's license. Pisikal na dokumento lang ang tinatanggap, at kailangan pa ng proof of address para sa Advanced level.",
    minAge: "18 taong gulang",
  },
  welcomeTasks: [
    { task: "Referral: unang trade na hindi bababa sa $50 sa loob ng 14 araw mula sa registration", reward: "50 USDT" },
    { task: "Referral: kabuuang trading volume na hindi bababa sa $500 sa loob ng 30 araw pagkatapos ng unang trade", reward: "100 USDT" },
    { task: "Referral: kabuuang trading volume na hindi bababa sa $10,000 sa parehong 30 araw", reward: "100 USDT" },
    { task: "Welcome Gifts: kumpletuhin ang Identity Verification", reward: "20 USDT na Fee Saver (Derivatives)" },
    { task: "Welcome Gifts: mag-deposit ng hindi bababa sa $10", reward: "30 USDT na Position Airdrop (Derivatives)" },
    { task: "Welcome Gifts: mag-trade ng hindi bababa sa $10", reward: "50 USDT na Fee Saver (Derivatives)" },
  ],
  tokenDiscount:
    "Kapag MNT ang ipinambayad mo sa fees, may 25% diskwento ka sa spot fees (0.075% para sa VIP 0) at 10% diskwento sa futures fees (0.018% maker / 0.0495% taker). Hindi saklaw ng diskwento ang mga inverse contract, trading bot, follower sa copy trading at API trading.",
  extraFeeMarkets: ["Options"],
  sourceLabels: [
    "Bybit: Paano gumawa ng account",
    "Bybit: Referral Program – pangkalahatang FAQ",
    "Bybit: Page at mga tuntunin ng referral program",
    "Bybit: Paano idagdag at tingnan ang nakarehistrong affiliate code",
    "Bybit: Welcome Gifts sa Rewards Hub",
    "Bybit: FAQ tungkol sa Rewards Hub",
    "Bybit: Istruktura ng trading fees",
    "Bybit: Pagbabayad ng trading fees gamit ang MNT",
    "Bybit: Margin parameters (mga leverage tier)",
    "Bybit: FAQ sa KYC para sa indibidwal",
    "Bybit: Mga benepisyo ng bawat KYC level",
    "Bybit: Mga bansang restricted ang serbisyo",
    "Bybit: Tungkol sa Bybit",
    "Bybit: Page ng proof of reserves",
    "Bybit: Timeline ng insidente sa seguridad (Pebrero 2025)",
    "Bybit: Bybit Europe at MiCAR",
    "Bybit EU: Referral program",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Derivatives", "Options"],
  bonusHeadline: "Hanggang 250 USDT na referral reward",
  benefits: [
    "Hanggang 250 USDT para sa inimbitahang user: 50 USDT pagkatapos ng unang trade na $50+ sa loob ng 14 araw, dagdag na 100 USDT bawat isa sa $500 at sa $10,000 na volume",
    "100 USDT na Welcome Gifts sa Rewards Hub para sa pag-verify, pag-deposit ng $10 at pag-trade ng $10",
    "Iisang referral code para sa buong account – binibilang lahat ang volume sa spot, derivatives at options",
    "25% diskwento sa spot fees at 10% diskwento sa futures fees kapag MNT ang ipinambayad mo sa fees",
  ],
  benefitNote:
    "Para lang ang mga referral reward sa mga account na binuksan sa global site ng Bybit mula Oktubre 10, 2026; dumadaan ang mga ito sa 3 araw na risk review, kailangang i-claim sa loob ng 10 araw at galing sa buwanang pool na 500,000 USDT (kung sino ang mauna, siya ang mabibigyan). Walang referral program ang Bybit sa Germany, United Kingdom, France, Belgium at Hong Kong, at hindi ito bukas sa mga residente ng EEA na inimbitahan mula rin sa loob ng EEA. Kailangan ng Identity Verification Lv. 1 para sa Welcome Gifts; nag-iiba ang mga ito depende sa user at rehiyon, nawawalan ng bisa at hindi puwedeng mag-withdraw ng mga ito.",
  headquarters: "Dubai, UAE",
  regulation: "Awtorisasyon sa ilalim ng MiCAR sa pamamagitan ng Bybit EU GmbH, Vienna (pinangangasiwaan ng FMA ng Austria), para sa EEA maliban sa Malta",
  users: "Mahigit 90 milyong user (ayon sa Bybit)",
  assets: "390 coin, 509 spot pair (Bybit API)",
  maxLeverage: "Hanggang 150x (BTCUSDT perpetual contract)",
  feeNote:
    "Bumababa ang mga rate habang tumataas ang VIP level – 0% maker fee sa derivatives ang binabayaran ng Supreme VIP – at puwedeng mag-iba depende sa rehiyon; ang page na “My Fee Rate” sa account mo ang masusunod.",
  products: [
    "USDT at USDC perpetual contract",
    "Inverse contract",
    "Options",
    "Spot",
    "Copy trading",
    "Trading bot",
    "Unified trading account",
  ],
  tagline: "Mabilis na trading engine na derivatives ang inuuna",
  quickAnswer:
    "Ang Bybit referral code ay VN3KGLE. Ilagay ito sa field na “Referral Code (Optional)” kapag nag-sign up ka – kusa itong inilalagay ng button sa page na ito. Kailangang nandoon na ito sa registration: hindi ka hinahayaan ng Bybit na magdagdag o magpalit ng referral code pagkatapos. Puwedeng kumita ang mga inimbitahang user ng hanggang 250 USDT sa tatlong yugto ng trading, simula sa 50 USDT para sa unang trade na $50 sa loob ng 14 araw.",
  about: [
    "Inilunsad ang Bybit noong 2018 bilang derivatives exchange, at inilipat nito ang punong-tanggapan sa Dubai noong 2023. Ngayon, mahigit 90 milyong user sa mahigit 181 bansa ang iniuulat nito, at tinatawag nito ang sarili na ikalawang pinakamalaking exchange sa mundo batay sa trading volume. Halatang para pa rin sa mga aktibong trader ang platform: mabilis na paglalagay ng order, isang unified trading account at pulidong mobile app.",
    "Bukod sa mga USDT at USDC perpetual contract, nag-aalok ang Bybit ng mga inverse contract, options, spot, copy trading at mga trading bot. Nagbabayad ang mga standard user ng 0.02% maker at 0.055% taker sa perpetual at futures, at 0.1% sa spot. Umaabot ang leverage hanggang 150x sa BTCUSDT perpetual contract sa pinakamababang risk tier, at bumababa ito habang lumalaki ang posisyon. Ang Bybit EU GmbH sa Vienna ang humahawak sa mga customer sa Europa; pinangangasiwaan ito ng FMA ng Austria sa ilalim ng MiCAR, at saklaw nito ang EEA maliban sa Malta.",
    "Noong Pebrero 21, 2025, natangay ng mga hacker ang humigit-kumulang $1.46 bilyon mula sa isa sa mga Ethereum cold wallet ng Bybit – ang pinakamalaking hack sa kasaysayan ng crypto. Pinanatiling bukas ng Bybit ang mga withdrawal, pinalitan nito ang nawalang ETH gamit ang mga bridge loan, malalaking deposit at pagbili sa OTC, at ipinakita ng proof-of-reserves audit ng Hacken noong Pebrero 24 na naisara ang kakulangan sa loob ng 72 oras. Ayon sa Bybit, nanatiling may 1:1 na backing ang mga asset ng kliyente sa buong panahong iyon.",
  ],
  highlights: [
    { title: "Derivatives ang DNA", text: "Ginawa para sa mga futures trader mula pa sa simula, na may mabilis na matching engine." },
    { title: "Hanggang 250 USDT", text: "Referral reward sa tatlong yugto, nakatali sa sarili mong trading volume." },
    { title: "Naisara ang kakulangan sa 72 oras", text: "Matapos ang hack noong 2025, pinanatiling bukas ng Bybit ang mga withdrawal at naibalik nito ang mga reserba." },
  ],
  pros: [
    "Mabilis at matatag na engine at nangungunang mobile app",
    "Maraming uri ng perpetual, inverse at options contract",
    "Malinaw na referral reward na hanggang 250 USDT para sa inimbitahang user",
    "Proof of reserves na may self-check gamit ang Merkle tree",
  ],
  cons: [
    "Malaking insidente sa seguridad noong Pebrero 2025 (natangay ang $1.46 bilyon mula sa isang Ethereum cold wallet)",
    "Hindi na puwedeng idagdag o palitan ang referral code pagkatapos ng registration",
    "Walang referral program para sa mga residente ng EEA at sa Germany, UK, France, Belgium at Hong Kong",
    "Hindi available sa US, Canada, Singapore, Hong Kong at mainland China",
  ],
  bestFor: [
    "Mga aktibong trader ng perpetual futures",
    "Mga trader na mobile ang pangunahing gamit",
    "Mga user na gusto ng copy trading sa derivatives",
  ],
  signupTip:
    "Tingnan ang field na “Referral Code (Optional)” bago mo pindutin ang “Sign Up Now” – hindi na ito maitatama pagkatapos. Saka gawin ang unang trade mo na hindi bababa sa $50 sa loob ng 14 araw para makuha ang unang 50 USDT.",
  safety:
    "Nasa mga multi-signature cold wallet ang mga asset ng kliyente ng Bybit, at naglalathala ito ng proof of reserves na, ayon sa Bybit, nagpapakita ng 1:1 na backing; nang suriin namin, Oktubre 27, 2026 ang petsa ng pinakabagong snapshot, at puwede mong i-verify ang sarili mong balance gamit ang Merkle-tree check at isang open-source tool. Para sa account mo, may Google Authenticator at anti-phishing code ang Bybit. Ipinapakita ng hack noong Pebrero 2025 na kahit ang malalaking exchange ay puwedeng mapasok ng mga hacker – trading capital lang ang iwan mo sa platform.",
  restricted:
    "Ito ang mga lugar na restricted ang serbisyo ayon sa listahan ng Bybit: United States, mainland China, Hong Kong, Singapore, Canada, North Korea, Cuba, Iran, Uzbekistan, Sudan, Syria, pati ang Crimea, Sevastopol at ang mga bahagi ng Donetsk, Luhansk, Kherson at Zaporizhzhia na wala sa kontrol ng gobyerno. Sa United Kingdom, hindi na tumatanggap ang Bybit ng bagong registration, at mula Oktubre 21, 2026, withdrawal na lang ang puwede sa mga UK account.",
  faqs: [
    {
      topic: "referral",
      q: "Gumagana ba ang Bybit referral code na VN3KGLE?",
      a: "Oo. Noong Nobyembre 16, 2026, binuksan ng link sa page na ito ang invite page ng Bybit na nakalagay na ang VN3KGLE sa field na “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Pareho ba ang Bybit referral code at affiliate code?",
      a: "Hindi. Magkaiba ang turing ng Bybit sa dalawa: puwedeng idagdag ang affiliate code sa loob ng 14 araw mula sa registration sa main account na wala pang code, pero hindi na talaga maidaragdag pagkatapos mag-sign up ang mga code ng Referral Program gaya ng VN3KGLE.",
    },
    {
      topic: "referral",
      q: "Gumagana ba ang Bybit referral code sa EU?",
      a: "Hindi. Ayon sa mga tuntunin ng referral program ng Bybit, hindi bukas ang program sa mga residente ng EEA (European Economic Area) na inimbitahan mula rin sa loob ng EEA, at walang referral program sa Germany, France at Belgium. Ginagamit ng mga residente ng EEA ang Bybit EU (bybit.eu), na may sariling referral offer.",
    },
    {
      topic: "referral",
      q: "Anong mga trade ang binibilang sa Bybit referral reward?",
      a: "Binibilang ang trading volume sa spot, derivatives at options, at binabanggit din ng Bybit ang Alpha, Convert at ilang mas bagong produkto. Hindi kasama ang mga trade sa mga trading pair na walang fee.",
    },
    {
      topic: "signup",
      q: "Puwede ba akong mag-sign up sa Bybit gamit ang Google, Apple o Telegram?",
      a: "Oo. Bukod sa email address o phone number, may opsyon ding Google, Apple at Telegram sa registration ng Bybit. Sa app (version 4.47.0 o mas bago), puwede ka ring gumawa ng passkey.",
    },
    {
      topic: "signup",
      q: "Puwede ko bang gamitin ang Bybit nang walang KYC?",
      a: "Hindi kung para sa trading. Kung walang Identity Verification, hindi makakapag-deposit o makakapag-trade ang Bybit account; puwede lang itong mag-withdraw, hanggang 20,000 USDT kada araw at 100,000 USDT kada buwan.",
    },
    {
      topic: "signup",
      q: "Ano ang mga KYC level at withdrawal limit ng Bybit?",
      a: "Sa Standard verification (ID document at identity assessment), puwede kang mag-withdraw ng hanggang 1 milyong USDT kada araw. Sa Advanced verification, na nangangailangan din ng proof of address, tataas ang limit sa 2 milyong USDT kada araw. May Pro level din na may enhanced due diligence para sa mas matataas na limit.",
    },
    {
      topic: "bonus",
      q: "Magkano ang Bybit referral bonus para sa bagong user?",
      a: "Hanggang 250 USDT para sa inimbitahang user: 50 USDT para sa unang trade na hindi bababa sa $50 sa loob ng 14 araw mula sa registration, 100 USDT para sa $500 na kabuuang volume sa loob ng 30 araw pagkatapos ng trade na iyon, at 100 USDT para sa $10,000 sa parehong panahon. Parehong halaga rin ang natatanggap ng referrer, kaya sinasabi ng Bybit na umaabot sa 500 USDT ang pinagsamang reward.",
    },
    {
      topic: "bonus",
      q: "Ano ang Bybit Welcome Gifts?",
      a: "Nakalista sa Rewards Hub ng Bybit ang 100 USDT na Welcome Gifts: 20 USDT na Fee Saver kapag nakumpleto mo ang Identity Verification, 30 USDT na Position Airdrop para sa deposit na hindi bababa sa $10 at 50 USDT na Fee Saver para sa trade na hindi bababa sa $10 – lahat para sa derivatives. Nag-iiba ang mga task depende sa user at rehiyon.",
    },
    {
      topic: "bonus",
      q: "Kailangan ko bang i-claim ang Bybit referral reward?",
      a: "Oo. Dumadaan muna ang bawat reward sa 3 araw na risk review; pagkatapos nito, kailangan mo itong i-claim sa loob ng 10 araw, kung hindi, mawawalan ito ng bisa. Galing ang mga reward sa buwanang pool na 500,000 USDT at ibinibigay sa kung sino ang mauna.",
    },
    {
      topic: "bonus",
      q: "Puwede bang mag-withdraw ng Bybit Welcome Gifts?",
      a: "Hindi. Ayon sa Bybit, nawawalan ng bisa ang mga reward sa Rewards Hub at hindi puwedeng mag-withdraw ng mga ito. Pambawas sa trading fees ang mga Fee Saver, at nagsisilbing margin sa derivatives trading ang mga Position Airdrop.",
    },
    {
      topic: "fees",
      q: "Magkano ang futures fees sa Bybit?",
      a: "Sa VIP 0, 0.02% maker at 0.055% taker ang binabayaran mo sa perpetual at futures contract, 0.1% sa spot at 0.02% maker / 0.03% taker sa options. Kapag MNT ang ipinambayad mo, bababa nang 10% ang futures fees, sa 0.018% / 0.0495%.",
    },
    {
      topic: "fees",
      q: "Ano ang maximum leverage sa Bybit?",
      a: "Hanggang 150x sa BTCUSDT perpetual contract sa unang risk tier (posisyon na hanggang 300,000 USDT); bumababa ang maximum sa 100x sa susunod na tier at lalo pang bumababa habang lumalaki ang posisyon. Lubhang pinapataas ng mataas na leverage ang panganib na ma-liquidate ka.",
    },
    {
      topic: "fees",
      q: "Magkano ang diskwento sa Bybit fees kapag MNT ang ipinambayad?",
      a: "Kapag MNT ang ipinambayad mo sa fees, may 25% diskwento ka sa spot fees at 10% sa futures fees. Hindi nito saklaw ang mga inverse contract, trading bot, follower sa copy trading at API trading.",
    },
    {
      topic: "safety",
      q: "Nagkaroon ba ng hack sa Bybit?",
      a: "Oo. Noong Pebrero 21, 2025, natangay ang humigit-kumulang $1.46 bilyon mula sa isang Ethereum cold wallet. Hindi itinigil ng Bybit ang mga withdrawal, kumuha ito ng pamalit na ETH gamit ang mga bridge loan, malalaking deposit at pagbili sa OTC, at ipinakita ng proof-of-reserves audit ng Hacken noong Pebrero 24 na naisara ang kakulangan sa loob ng 72 oras.",
    },
    {
      topic: "safety",
      q: "Available ba ang Bybit sa UK?",
      a: "Hindi. Hindi na tumatanggap ang Bybit ng bagong registration mula sa United Kingdom, at mula Oktubre 21, 2026, withdrawal na lang ang puwede sa mga account na UK ang residency.",
    },
    {
      topic: "safety",
      q: "Available ba ang Bybit sa Europa?",
      a: "Ang Bybit EU GmbH sa Vienna ang humahawak sa mga residente ng EEA; pinangangasiwaan ito ng Financial Market Authority ng Austria sa ilalim ng MiCAR, at saklaw nito ang EEA maliban sa Malta. Hiwalay itong platform na may sariling fees at hanay ng produkto.",
    },
  ],
};
