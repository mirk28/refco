import type { ExchangeText } from "../../types";

export const mexc: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Field na “Referral Code (Optional)” sa registration form (case-sensitive)",
    apply:
      "Ilagay ito sa field na “Referral Code (Optional)” ng registration form – case-sensitive ang code – o buksan ang link sa pag-sign up sa page na ito; awtomatiko nitong pinupunan ang field, at hindi na ito mababago.",
    whereToEnter:
      "May field na “Referral Code (Optional)” ang registration form ng MEXC, na may paalalang “Enter invitation code (case-sensitive)”, kaya ilagay ang 4E3xM nang eksakto kung paano ito nakasulat – malaking titik ang E at ang M. Sa website, lagyan ng tsek ang “Enter Referral Code” para lumabas ang field; sa app, pindutin ang maliit na arrow para mabuksan ito. Binubuksan ng link sa page na ito ang invite page ng MEXC na nakalagay na ang 4E3xM, at hindi na mababago ang field.",
    afterSignupShort: "Oo – sa loob ng 30 araw pagkatapos mag-sign up",
    afterSignup:
      "Oo. May self-service na function ang MEXC para i-link ang referrer pagkatapos ng registration: puwede lang ang mga account na nag-sign up sa nakalipas na 30 araw, para ito sa mga main account, at puwede mong i-link gamit ang referral code o ang UID ng referrer. Kailangang mas naunang nag-sign up ang referrer kaysa sa iyo. Ayon sa MEXC, kapag na-link na ang invitation code, hindi na ito mapapalitan o matatanggal.",
    inviteeReward:
      "Walang permanenteng diskwento sa fees na ibinibigay ang MEXC sa mga inimbitahang user. Ang nabubuksan ng code ay ang referral event ng MEXC: sa invite page nito, ipinapakita sa mga nag-sign up gamit ang referral ang dagdag na reward na hanggang 140 USDT, bukod pa sa mga reward para sa bagong user na hanggang 10,000 USDT. Ibinibigay ang referral reward bilang futures bonus kapag natapos mo ang isang net deposit task at isang futures trading task sa loob ng 7 araw pagkatapos mag-sign up.",
    guide: [
      "Sa MEXC, dalawa ang trabaho ng referral code. Itinatala nito kung sino ang nag-imbita sa iyo – kumikita ang referrer ng komisyon sa mga spot at futures trade mo – at ginagawa ka nitong kuwalipikado sa referral event na pinapatakbo ng MEXC para sa mga bagong nag-sign up. May mga tier ang event na ito: 50 USDT para sa net deposit na hindi bababa sa $100 at $1,000 na futures volume, 90 USDT sa $10,000 na futures volume at 140 USDT sa $20,000, lahat sa loob ng 7 araw mula sa registration at pagkatapos ng Primary KYC.",
      "Futures bonus, fee voucher at position airdrop ang mga reward, hindi cash. Ayon sa MEXC, limitado sa panahon ang event at “only open to designated users” (bukas lang sa mga piling user), at sinasabi ng FAQ ng event na hindi puwedeng pagsabayin ang referral bonus at ang 10,000 USDT na event o ang mga bonus sa Rewards Hub – kahit magkasamang itinatampok ng invite page ang dalawa. Ang mga halagang makikita sa sarili mong account pagkatapos mag-sign up ang ituring mong naaangkop sa iyo.",
      "Dahil case-sensitive ang code, link ang pinakaligtas na paraan para magamit ito. Kung nag-sign up ka nang wala ito, may 30 araw ka pa para i-link ito nang mag-isa.",
    ],
  },
  signup: {
    methods: ["email address", "phone number", "Google", "Apple", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Buksan ang registration page ng MEXC",
        text: "Gamitin ang button para mag-sign up sa page na ito. Bubuksan ng MEXC ang page na “Your Friend Invites You to Join MEXC”, kung saan nakalagay na ang referral code na 4E3xM at hindi na ito mababago.",
      },
      {
        title: "Ilagay ang email address o phone number mo at isang password",
        text: "O magpatuloy gamit ang Google, Apple, Telegram o MetaMask. Kailangang may hindi bababa sa 10 character ang password, may malalaki at maliliit na titik, isang numero at isang simbolo.",
      },
      {
        title: "Suriin ang referral code",
        text: "Dapat 4E3xM ang nakalagay sa field na “Referral Code (Optional)”. Kung mano-mano mo itong ilalagay, pansinin ang malalaking titik – case-sensitive ang code.",
      },
      {
        title: "Lutasin ang slider puzzle",
        text: "Nagpapakita ang MEXC ng slider puzzle bilang security check.",
      },
      {
        title: "Ilagay ang 6-digit na code",
        text: "Ilagay ang 6-digit na verification code na ipapadala sa iyo ng MEXC, saka piliin ang “Confirm”.",
      },
      {
        title: "Tapusin ang KYC",
        text: "Tapusin ang Primary KYC para mabuksan ang mga reward at maiwasan ang mga limitasyon sa deposit, withdrawal at trading.",
      },
    ],
    kycShort: "Kailangan para sa deposit, withdrawal at trading",
    kyc: "Sa praktika, oo. Ayon sa MEXC, kapag hindi mo natapos ang KYC verification, puwedeng maapektuhan ang access mo sa mga serbisyo gaya ng deposit, withdrawal at trading, at kailangan ng hindi bababa sa Primary KYC para sa mga reward nito. Sa Primary KYC, puwede ang crypto withdrawal na 80 BTC kada araw; itinataas ito ng Advanced KYC sa 200 BTC kada araw at nagdaragdag ito ng fiat limit na 20,000 USD kada araw. Bukas ang spot, futures at mga event sa parehong level.",
    documents: "Tumatanggap ang MEXC ng ID card, passport, driver's license o residence permit.",
    minAge:
      "Legal na edad sa bansa mo – hinihingi ng User Agreement ng MEXC na nasa legal na edad ka para pumasok sa isang may-bisang kontrata, at wala itong binabanggit na tiyak na edad",
  },
  welcomeTasks: [
    { task: "Pag-sign up", reward: "10 USDT na voucher" },
    { task: "Unang pag-log in sa app", reward: "10 USDT na voucher" },
    { task: "Tapusin ang Primary KYC sa loob ng 7 araw", reward: "$200 na BTCUSDT position airdrop" },
    { task: "Kabuuang futures trading (pinakamataas na tier: hindi bababa sa 1,000,000 USDT)", reward: "Futures bonus na hanggang 7,620 USDT" },
    { task: "Referral event: net deposit na hindi bababa sa $100 at $1,000 na futures volume sa loob ng 7 araw", reward: "50 USDT na futures bonus" },
    { task: "Referral event: futures volume na hindi bababa sa $10,000 sa loob ng 7 araw", reward: "90 USDT na futures bonus" },
    { task: "Referral event: futures volume na hindi bababa sa $20,000 sa loob ng 7 araw", reward: "140 USDT na futures bonus" },
  ],
  tokenDiscount:
    "Kapag MX ang ipinambayad mo sa fees, may 20% diskwento ka sa spot at futures fees; para sa futures, kailangang nasa Futures wallet mo ang MX. Sinuspinde mula Pebrero 9, 2026 ang dating 50% diskwento para sa mga may hawak na 500 MX o higit pa.",
  extraFeeMarkets: ["Coin-M futures (BTCUSD at ETHUSD)"],
  sourceLabels: [
    "MEXC: Proseso ng pag-sign up ng account (web)",
    "MEXC: Proseso ng pag-sign up ng account (app)",
    "MEXC: Gabay sa referral",
    "MEXC: Gabay sa self-service na pag-link ng referrer",
    "MEXC: Referral event at mga tuntunin",
    "MEXC: Rewards Hub (mga reward para sa bagong user)",
    "MEXC: Anunsyo ng welcome rewards (tagal ng bisa ng bonus)",
    "MEXC: Listahan ng fees",
    "MEXC: Paano gamitin ang MX para sa diskwento sa trading fees",
    "MEXC: Paglulunsad ng 500x leverage sa futures",
    "MEXC: KYC FAQ",
    "MEXC: Mga karaniwang tanong tungkol sa KYC verification",
    "MEXC: User Agreement (mga ipinagbabawal na hurisdiksyon)",
    "MEXC Learn: Mga restricted na bansa",
    "MEXC: Tungkol sa MEXC",
    "MEXC: Bakit MEXC (mga pair at kontrata)",
    "MEXC: Proof of reserves",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futures"],
  bonusHeadline: "Hanggang 10,000 USDT na reward para sa bagong user",
  benefits: [
    "Mga reward para sa bagong user na hanggang 10,000 USDT sa Rewards Hub – voucher, position airdrop at futures bonus",
    "Makikita ng mga nag-sign up gamit ang referral ang dagdag na reward na hanggang 140 USDT na futures bonus",
    "0% maker fee sa spot at sa karamihan ng futures contract",
    "Puwede pang i-link ang code sa loob ng 30 araw pagkatapos mag-sign up",
  ],
  benefitNote:
    "Nakabatay sa task ang lahat ng reward, at kailangan ng hindi bababa sa Primary KYC. Hindi puwedeng mag-withdraw ng bonus – ang kita lang mula rito ang puwede – at kapag naglabas ka ng pondo mula sa Futures account bago tuluyang magamit ang bonus, mawawala ang buong bonus. Gumagana ang futures bonus sa mga USDT-M contract at inanunsyo itong may bisang 15 araw. Limitado sa panahon ang referral event at bukas lang sa mga piling user, sinasabi ng FAQ ng event ng MEXC na hindi puwedeng pagsabayin ang bonus nito at ang 10,000 USDT na event, at dumadaan ang mga reward sa risk review na aabot nang hanggang 7 araw. Posibleng hindi kuwalipikado ang mga rehiyong ipinagbabawal ang derivatives.",
  headquarters: "MEXC (Comoros) Ltd, nakarehistro sa Union of Comoros",
  regulation:
    "Walang lisensyang binabanggit sa sariling mga page ng MEXC; ayon sa MEXC, wala itong tier-one na lisensya at walang awtorisasyon sa ilalim ng MiCA",
  users: "Mahigit 40 milyong user (ayon sa MEXC)",
  assets: "1,384 spot pair at 1,152 futures contract (ayon sa MEXC)",
  maxLeverage: "Hanggang 500x (BTCUSDT at ETHUSDT futures)",
  feeNote:
    "Rate ng MEXC para sa BTCUSDT at ETHUSDT ang futures rate na nakikita rito; para sa lahat ng kontrata, 0% hanggang 0.04% para sa maker at 0% hanggang 0.1% para sa taker ang range na nasa fee page nito, at may mga pair na walang fees. Paalala ng MEXC, puwedeng magbago ang maker rate depende sa mga event ng platform o sa rehiyon mo.",
  products: ["USDT-M at Coin-M futures", "Spot", "Copy trading", "Launchpad", "Earn"],
  tagline: "Walang maker fee at leverage na hanggang 500x",
  quickAnswer:
    "Ang MEXC referral code ay 4E3xM – case-sensitive ito, kaya mahalaga kung malaki o maliit ang titik. Ilagay ito sa field na “Referral Code (Optional)” sa pag-sign up, o gamitin ang button sa page na ito; awtomatiko nitong inilalagay ang code, at hindi na ito mababago. Kung nakalimutan mo ito, hinahayaan ka ng MEXC na i-link ang referrer nang mag-isa sa loob ng 30 araw pagkatapos mag-sign up. Puwedeng makakuha ang mga bagong user ng hanggang 10,000 USDT na reward, at sa invite page ng MEXC, ipinapakita sa mga nag-sign up gamit ang referral ang dagdag na bonus na hanggang 140 USDT.",
  about: [
    "Tumatakbo ang MEXC mula pa noong 2018, at ayon dito, mahigit 40 milyong user ang pinagsisilbihan nito sa mahigit 170 bansa at rehiyon. Presyo at lawak ng pagpipilian ang panlaban nito: walang maker fee ang mga regular user sa spot at sa karamihan ng futures contract, at 1,384 spot pair at 1,152 futures contract ang nakalista sa MEXC.",
    "May USDT-margined at coin-margined na kontrata ang futures platform, na may leverage na hanggang 500x sa BTCUSDT at ETHUSDT. Hindi available sa lahat ng lugar ang maximum na ito – hindi ito iniaalok ng MEXC sa Australia, Austria, Belgium, Canada, France, Hong Kong, Italy, Russia, United Kingdom at Yemen – at hindi sinusuportahan ng copy trading ang 250x o 500x. Mayroon ding copy trading, launchpad at mga Earn product.",
    "MEXC (Comoros) Ltd ang kumpanyang kakontrata mo, na nakarehistro sa Union of Comoros. Walang lisensyang binabanggit ang MEXC sa sarili nitong mga page, at sinasabi mismo nito na wala itong tier-one na lisensya at walang awtorisasyon sa ilalim ng MiCA; ayon sa sarili nitong gabay, nakalista ito sa interim register ng ESMA ng mga non-compliant na entity. Naglalathala ito ng proof of reserves – sa snapshot noong Nobyembre 9, 2026, 122.42% ang USDT, 109.84% ang USDC, 317.61% ang BTC at 112.41% ang ETH – at may $100 milyong Guardian Fund at futures insurance fund ito.",
  ],
  highlights: [
    { title: "0% maker fee", text: "Walang maker fee sa spot at sa karamihan ng futures contract." },
    { title: "I-link sa loob ng 30 araw", text: "Nakalimutan mo ang code? Hinahayaan ka ng MEXC na i-link ang referrer sa loob ng 30 araw pagkatapos mag-sign up." },
    { title: "Reserves na lampas sa 100%", text: "USDT 122%, BTC 318%, ETH 112% sa snapshot noong Nobyembre 9, 2026." },
  ],
  pros: [
    "Kabilang sa pinakamababang trading fees sa industriya: 0% maker, 0.02% taker sa BTCUSDT futures",
    "Puwedeng i-link ang referral code hanggang 30 araw pagkatapos mag-sign up",
    "1,384 spot pair at 1,152 futures contract",
    "Proof of reserves na lampas sa 100% at $100 milyong Guardian Fund",
  ],
  cons: [
    "Walang tier-one na lisensya at walang awtorisasyon sa ilalim ng MiCA, ayon mismo sa MEXC",
    "Hindi available sa US, UK, Canada, France, Netherlands, Singapore at Hong Kong",
    "Hindi puwedeng mag-withdraw ng bonus, at mawawala ito kapag maaga kang naglabas ng pondo",
    "Napakataas ng panganib ng 500x leverage",
  ],
  bestFor: [
    "Mga high-frequency futures trader na maingat sa gastos",
    "Mga trader na naghahanap ng mga bagong listing",
    "Mga bihasang user na komportable sa mga offshore na exchange",
  ],
  signupTip:
    "Tapusin ang Primary KYC sa loob ng 7 araw pagkatapos mag-sign up – ito ang nagbubukas ng $200 na BTCUSDT position airdrop – at huwag maglabas ng pondo mula sa Futures account mo habang ginagamit pa ang isang futures bonus, dahil mawawala ang bonus.",
  safety:
    "Naglalathala ang MEXC ng proof of reserves – 122.42% para sa USDT, 109.84% para sa USDC, 317.61% para sa BTC at 112.41% para sa ETH sa snapshot noong Nobyembre 9, 2026 – at may $100 milyong Guardian Fund at futures insurance fund ito. Sinasabi mismo ng MEXC na wala itong tier-one na lisensya at walang awtorisasyon sa ilalim ng MiCA, kaya gumamit ng matibay na seguridad sa account mo at huwag doon itago ang pangmatagalang ipon mo. Sa mga bagong-bagong token, suriin muna ang liquidity at ang contract specifications bago mag-trade gamit ang leverage.",
  restricted:
    "Ipinagbabawal ng User Agreement ng MEXC (huling na-update noong Oktubre 13, 2026) ang mga user mula sa North Korea, Cuba, Sudan, Iran, mainland China, Singapore, Malaysia, United States, United Kingdom, Hong Kong, Kazakhstan, Russia, mga rehiyon ng Ukraine na kontrolado ng Russia, Belarus, Canada, France at Netherlands, pati ang mga bansang may sanctions at nasa blacklist ng FATF.",
  faqs: [
    {
      topic: "referral",
      q: "Gumagana ba ang MEXC referral code na 4E3xM?",
      a: "Oo. Noong Nobyembre 16, 2026, binuksan ng link sa page na ito ang invite page ng MEXC na may inviteCode=4E3xM sa address, at nakalagay na ang 4E3xM sa field na “Referral Code (Optional)” at hindi na ito mababago.",
    },
    {
      topic: "referral",
      q: "Case-sensitive ba ang MEXC referral code?",
      a: "Oo. May paalala ang field sa registration form ng MEXC na “Enter invitation code (case-sensitive)”. Ang code ay 4E3xM – numerong 4, malaking E, numerong 3, maliit na x, malaking M.",
    },
    {
      topic: "referral",
      q: "Paano i-link ang referrer sa MEXC pagkatapos mag-sign up?",
      a: "Gamitin ang self-service referrer linking ng MEXC sa loob ng 30 araw pagkatapos mag-sign up. Para ito sa mga main account; ilalagay mo ang referral code o ang UID ng referrer, at kailangang mas naunang nag-sign up ang referrer kaysa sa iyo. Hindi na puwedeng palitan o tanggalin ang link pagkatapos nito.",
    },
    {
      topic: "referral",
      q: "May diskwento ba sa fees ang MEXC referral code?",
      a: "Walang nakalistang permanenteng diskwento sa fees ang MEXC para sa inimbitahang user. Ang benepisyo ay ang referral event na may reward na hanggang 140 USDT na futures bonus, kasama ang mga pangkalahatang reward para sa bagong user.",
    },
    {
      topic: "signup",
      q: "Ano ang mga requirement sa password ng MEXC?",
      a: "Hindi bababa sa 10 character, kasama ang isang malaking titik, isang maliit na titik, isang numero at isang simbolo.",
    },
    {
      topic: "signup",
      q: "Puwede ba akong mag-sign up sa MEXC gamit ang Google, Apple, Telegram o MetaMask?",
      a: "Oo. Direktang iniaalok ng registration page ng MEXC ang Google at Apple, at nasa ilalim ng “More Options” ang Telegram at MetaMask, bukod pa sa email at phone number.",
    },
    {
      topic: "signup",
      q: "Ano ang mga KYC level at limit sa MEXC?",
      a: "Sa Primary KYC, puwede ang crypto withdrawal na 80 BTC kada araw at ang P2P trading. Itinataas ng Advanced KYC ang limit sa 200 BTC kada araw at pinapayagan nito ang fiat transaction na hanggang 20,000 USD kada araw. Bukas ang spot, futures at mga event sa parehong level.",
    },
    {
      topic: "signup",
      q: "Puwede ko bang gamitin ang MEXC nang walang KYC?",
      a: "Puwede lang nang may limitasyon. Ayon sa MEXC, kapag hindi mo natapos ang KYC verification, puwedeng maapektuhan ang access mo sa mga serbisyo gaya ng deposit, withdrawal at trading, at kailangan ng hindi bababa sa Primary KYC para sa mga reward para sa bagong user at sa referral.",
    },
    {
      topic: "bonus",
      q: "Ano ang welcome bonus ng MEXC?",
      a: "Nag-aalok ang MEXC ng hanggang 10,000 USDT na reward para sa bagong user. Mga halimbawa mula sa Rewards Hub nito: 10 USDT na voucher sa pag-sign up, 10 USDT na voucher sa unang pag-log in sa app, $200 na BTCUSDT position airdrop kapag natapos mo ang Primary KYC sa loob ng 7 araw at futures bonus na hanggang 7,620 USDT para sa kabuuang trading, na 1,000,000 USDT na volume ang pinakamataas na tier.",
    },
    {
      topic: "bonus",
      q: "Magkano ang MEXC referral bonus?",
      a: "Sa referral event ng MEXC, makakatanggap ang inimbitahang user ng 50 USDT para sa net deposit na hindi bababa sa $100 kasama ang $1,000 na futures volume, 90 USDT sa $10,000 na futures volume at 140 USDT sa $20,000, lahat sa loob ng 7 araw pagkatapos mag-sign up. Ibinibigay ito bilang futures bonus, fee voucher at position airdrop. Limitado sa panahon ang event at bukas lang sa mga piling user.",
    },
    {
      topic: "bonus",
      q: "Puwede bang mag-withdraw ng bonus sa MEXC?",
      a: "Hindi. Ayon sa MEXC, hindi puwedeng mag-withdraw ng bonus, pero puwede ang kita mula sa mga trade na pinondohan ng bonus. Kapag naglipat ka ng anumang asset palabas ng Futures account bago tuluyang magamit ang bonus, mawawala ang buong bonus.",
    },
    {
      topic: "bonus",
      q: "Gaano katagal valid ang futures bonus sa MEXC?",
      a: "Inanunsyo ng MEXC na 15 araw ang bisa ng futures bonus at ng mga voucher. Sa mga USDT-M contract lang puwedeng gamitin ang futures bonus.",
    },
    {
      topic: "fees",
      q: "Magkano ang futures fees sa MEXC?",
      a: "Sa BTCUSDT at ETHUSDT, 0% maker at 0.02% taker ang binabayaran ng mga regular user. Para sa lahat ng kontrata, 0% hanggang 0.04% para sa maker at 0% hanggang 0.1% para sa taker ang range na nasa fee page ng MEXC, at may mga pair na walang fees.",
    },
    {
      topic: "fees",
      q: "Magkano ang diskwento sa fees gamit ang MX sa MEXC?",
      a: "20% sa spot at futures fees kapag MX ang ipinambayad mo; para sa futures, kailangang nasa Futures wallet mo ang MX. Sinuspinde mula Pebrero 9, 2026 ang dating 50% diskwento para sa mga may hawak na hindi bababa sa 500 MX.",
    },
    {
      topic: "fees",
      q: "Totoo bang may 500x leverage ang MEXC?",
      a: "Oo, sa BTCUSDT at ETHUSDT futures. Hindi ito iniaalok sa Australia, Austria, Belgium, Canada, France, Hong Kong, Italy, Russia, United Kingdom at Yemen, at hindi ito sinusuportahan ng copy trading. Sa 500x, puwedeng maubos ang buong posisyon sa galaw na 0.2% laban sa iyo.",
    },
    {
      topic: "safety",
      q: "Regulated ba ang MEXC?",
      a: "Walang lisensyang binabanggit ang MEXC sa sarili nitong mga page, at sinasabi nitong wala itong tier-one na lisensya at walang awtorisasyon sa ilalim ng MiCA. MEXC (Comoros) Ltd ang kumpanyang kakontrata mo, na nakarehistro sa Union of Comoros.",
    },
    {
      topic: "safety",
      q: "Available ba ang MEXC sa US o sa UK?",
      a: "Hindi. Parehong ipinagbabawal na hurisdiksyon ang United States at United Kingdom sa User Agreement ng MEXC, gayundin ang Canada, France, Netherlands, Singapore at Hong Kong.",
    },
    {
      topic: "safety",
      q: "Naglalabas ba ang MEXC ng proof of reserves?",
      a: "Oo. Sa snapshot noong Nobyembre 9, 2026, 122.42% ang reserve ratio ng USDT, 109.84% ng USDC, 317.61% ng BTC at 112.41% ng ETH. May $100 milyong Guardian Fund din ang MEXC.",
    },
  ],
};
