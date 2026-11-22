import type { ExchangeText } from "../../types";

export const binance: ExchangeText = {
  referral: {
    codeName: "Referral ID",
    whereShort: "Field na “Referral ID (Optional)” sa huling hakbang ng registration",
    apply:
      "Ilagay ito sa field na “Referral ID (Optional)” sa huling hakbang ng registration, o buksan ang sign-up link sa page na ito para awtomatiko itong mailagay para sa iyo.",
    whereToEnter:
      "Sa huling hakbang ng registration, hinihingi ng Binance ang referral code – pagkatapos mong kumpirmahin ang email address o phone number mo at gumawa ng password – sa website man o sa app. Kung dumaan ka sa isang referral link, kusang inilalagay ng Binance ang code at may lumalabas na berdeng tsek at “Linked” sa tabi nito. Kung hindi, ilagay ang REFCO888 sa field na “Referral ID (Optional)”. Opsyonal ang hakbang na ito at puwedeng laktawan.",
    afterSignupShort: "Oo – sa loob ng 30 araw, bago ang anumang deposit o trade",
    afterSignup:
      "Oo, may mga kondisyon. Sa referral binding page ng Binance (binance.com/en/activity/referral/bind-ref), puwede mong i-link ang nawawalang referral code kung wala pang 30 araw ang account mo, wala pa itong deposit o trading activity, wala pa itong referral at main account ito, kung hindi nagamit sa ibang account ang identity verification mo sa nakaraang 180 araw, at kung hindi minarkahan ang account dahil sa wash trading. Kapag na-link na ang referral, ayon sa Binance, hindi na ito mababago o matatanggal.",
    inviteeReward:
      "Binance Referral Pro code ang REFCO888. Sa Pro mode, ibinabalik sa inimbitahang user ang bahagi ng sarili niyang trading fees, bayad sa USDC, kung pinili ng referrer na ibahagi ang komisyon – ipinapakita ng Binance sa pag-sign up ang rate na naaangkop. Hiwalay sa code, binibigyan ng Binance ang bawat verified na bagong user ng mga beginner task na nagkakahalaga ng hanggang 100 USD na trading fee rebate voucher.",
    guide: [
      "May dalawang referral mode ang Binance, at sa isa lang puwedeng mapabilang ang bagong user. Kabilang sa Referral Pro ang mga link na may anyong binance.com/register?ref=… – gaya ng nasa page na ito: kumikita ang referrer ng komisyon mula sa trading fees mo at puwede niyang ibalik sa iyo ang bahagi nito bilang rebate sa USDC. Gumagamit naman ang isa pang mode, ang Referral Lite, ng mga trading fee rebate voucher para sa maliliit na unang pagbili at trade; hindi naglalabas ang Binance ng mga voucher na ito sa ilalim ng isang Pro code.",
      "Sakop ng iisang Pro referral ang Spot, Margin at Futures. Kapag nagbukas ka kalaunan ng Futures account, may ipapakitang pangalawa at opsyonal na field ang Binance, ang “Futures Referral ID”. Code lang mula sa parehong referrer na nag-imbita sa main account mo ang tinatanggap nito, kaya hindi mo puwedeng pagsamahin ang dalawang magkaibang referrer.",
      "Mahalaga kung saan ka nakatira. Mula Hulyo 1, 2026, hindi na puwedeng sumali sa anumang paraan sa Binance referral program ang mga user na rehistrado sa mga bansa ng EEA (European Economic Area), at naglilista rin ang mga tuntunin ng referral ng Binance ng mga restriction para sa United Kingdom, Singapore, Japan, Turkey, Hong Kong at Israel. Puwede ka pa ring gumawa ng account mula sa mga bansang sineserbisyuhan ng Binance, pero wala nang epekto ang referral sa ganoong kaso.",
    ],
  },
  signup: {
    methods: ["email address", "phone number", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Buksan ang registration page ng Binance",
        text: "Gamitin ang sign-up button sa page na ito. Binubuksan nito ang accounts.binance.com na may kasamang referral – ipinapakita ng Binance ang code na REFCO888 sa tabi ng form.",
      },
      {
        title: "Ilagay ang email address o phone number mo",
        text: "O magpatuloy gamit ang Google, Apple o Telegram. Tanggapin ang Terms of Use at Privacy Notice para makapagpatuloy.",
      },
      {
        title: "Kumpirmahin ang 6-digit na code",
        text: "Magpapadala ang Binance ng 6-digit na verification code sa email o phone mo. May bisa ito nang 30 minuto.",
      },
      {
        title: "Gumawa ng password",
        text: "Hindi bababa sa 8 character, kasama ang isang malaking titik at isang numero.",
      },
      {
        title: "Suriin ang referral code",
        text: "Sa huling hakbang, dapat nakalagay na ang Referral ID, may berdeng tsek at “Linked”. Kung walang laman ang field, ilagay ang REFCO888 – o laktawan ito kung ayaw mo ng referral.",
      },
      {
        title: "I-verify ang identity mo",
        text: "Pagkatapos nito, dadalhin ka ng Binance sa identity verification. Kailangan itong tapusin ng bawat bagong user bago mag-deposit o mag-trade.",
      },
    ],
    kycShort: "Kailangan para sa lahat ng produkto",
    kyc: "Oo. Hinihingi ng Binance sa bawat bagong user na tapusin ang identity verification (status na “Verified”) bago gumamit ng anumang produkto – kasama ang crypto deposit at trade. Pipili ka ng dokumento, isusumite ito, saka papasa sa isang liveness check; ayon sa Binance, karaniwang natatapos ang review sa loob ng 48 oras. Withdrawal lang ang puwede sa mga lumang account na hindi kailanman na-verify.",
    documents:
      "Sa karamihan ng user, puwedeng gamitin sa verification ang passport, national ID card o driver's license, at susundan ito ng liveness check (pagsusuri ng mukha).",
    minAge: "18 taong gulang (Terms of Use ng Binance)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Kapag sa BNB mo binayaran ang fees, may 25% diskwento sa spot fees (0.075% sa halip na 0.10%) at 10% diskwento sa USDⓈ-M futures fees (0.018% maker / 0.045% taker sa halip na 0.02% / 0.05%).",
  extraFeeMarkets: ["COIN-M futures"],
  sourceLabels: [
    "Binance: Paano mag-sign up sa website (hakbang ng referral)",
    "Binance: Paano mag-sign up sa app",
    "Binance: Pag-link ng referral code pagkatapos ng registration",
    "Binance: Ang Referral Pro at Referral Lite mode",
    "Binance: Mga tuntunin ng referral program at mga restriction sa rehiyon",
    "Binance: Welcome reward para sa bagong user (fee rebate voucher)",
    "Binance: Mga rate ng spot trading fees",
    "Binance: Mga rate ng USDⓈ-M futures fees",
    "Binance: Mga rate ng COIN-M futures fees",
    "Binance: Leverage at margin ng USDⓈ-M futures",
    "Binance: Limitasyon sa leverage ng mga bagong futures account",
    "Binance: Paano i-verify ang identity",
    "Binance: Terms of Use",
    "Binance: Listahan ng mga ipinagbabawal na bansa",
    "Binance: Mga lisensya at rehistro",
    "Binance: Proof of reserves",
    "Binance: SAFU fund",
    "Binance: Tungkol sa Binance",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures"],
  bonusHeadline: "Hanggang 100 USD na fee rebate voucher",
  benefits: [
    "Mga beginner task na nagkakahalaga ng hanggang 100 USD na trading fee rebate voucher kapag na-verify na ang account mo",
    "Sakop ng iisang referral ang Spot, Margin at Futures – hindi na kailangan ng pangalawang code",
    "25% diskwento sa spot fees at 10% diskwento sa USDⓈ-M futures fees kapag sa BNB mo binayaran ang fees",
    "Puwede pang i-link ang code hanggang 30 araw pagkatapos ng registration kung wala ka pang deposit o trade",
  ],
  benefitNote:
    "Pangkalahatang offer ng Binance para sa bagong user ang mga welcome voucher, hindi reward ng referral code. Ibinibigay ang mga ito pagkatapos ng identity verification, ibinabalik nila ang spot trading fees, hindi magagamit sa mga trade sa API at sa Binance app lang puwedeng gamitin. Mahaba ang listahan ng mga bansang hindi isinasama ng Binance sa mga ito, kabilang ang United Kingdom, United States, Canada, Netherlands, Norway, Serbia, Japan, Singapore at Hong Kong.",
  headquarters: "Pinapatakbo ng mga entity sa Abu Dhabi na may lisensya mula sa ADGM",
  regulation:
    "Nasa ilalim ng regulasyon ng ADGM FSRA (Abu Dhabi); may iba pang lisensya at rehistro, kabilang ang Dubai (VARA), Bahrain, Kazakhstan, Australia at Japan",
  users: "Mahigit 320 milyong rehistradong user (ayon sa Binance)",
  assets: "600+ cryptocurrency",
  maxLeverage: "Hanggang 150x (BTCUSDT at ETHUSDT perpetual contract)",
  feeNote: "Mas mababa pa ang mga rate sa mas matataas na VIP level.",
  products: ["Spot", "Margin", "USDⓈ-M at COIN-M futures", "Options", "Copy trading", "Trading bot", "Earn at Launchpool"],
  tagline: "Pinakamalalim na liquidity sa crypto derivatives",
  quickAnswer:
    "Ang Binance referral code ay REFCO888. Hinihingi ito ng Binance sa huling hakbang ng registration; kapag ginamit mo ang button sa page na ito, awtomatiko na itong nakalagay. Sakop ng iisang code ang Spot, Margin at Futures. Kung nakalimutan mo ito, puwede mo pang i-link ang code sa Binance sa loob ng 30 araw mula sa registration, basta wala ka pang deposit o trade. Puwede ring makakuha ang mga verified na bagong user ng hanggang 100 USD na trading fee rebate voucher.",
  about: [
    "Inilunsad ang Binance noong Hulyo 2017, at ayon sa sarili nitong salaysay, naging pinakamalaking crypto exchange ito sa mundo sa loob ng 180 araw. Ngayon, mahigit 320 milyong rehistradong user sa mahigit 180 bansa ang iniuulat nito, at mahigit 600 cryptocurrency ang nakalista rito. Sa derivatives, malinaw na ito ang numero uno: sa petsa ng aming market data, mas malaki ang open interest nito kaysa sa pinagsamang open interest ng tatlong sumunod na exchange sa derivatives ranking ng CoinMarketCap. Mahalaga ito sa mga trader, dahil mas makitid na spread at mas kaunting slippage sa malalaking order ang dulot ng malalalim na order book.",
    "Sa iisang login, may access ka sa spot at margin trading, USDⓈ-margined at coin-margined futures, options, mga trading bot at copy trading, pati na sa Earn at Launchpool. Sa USDⓈ-M futures, umaabot ang leverage nang hanggang 150x sa BTCUSDT at ETHUSDT perpetual contract para sa mga posisyon na hanggang 300,000 USDT; hanggang 125x naman ang mga coin-margined na kontrata. Hindi puwedeng gumamit ng higit sa 20x ang mga bagong futures account sa unang 30 araw nila.",
    "Tatlong lisensyadong entity ang nagpapatakbo ng Binance.com, at nasa ilalim ang mga ito ng regulasyon ng Financial Services Regulatory Authority ng Abu Dhabi Global Market (ADGM). Naglilista rin ang Binance ng mga lisensya at rehistro sa Dubai (VARA), Bahrain, Kazakhstan, Australia (AUSTRAC), India, Indonesia, Japan, New Zealand, Thailand, Mexico, El Salvador, Argentina, Brazil at South Africa. Pinagsasama ng proof of reserves nito ang Merkle tree at zk-SNARKs para masuri ng mga user na kasama ang sarili nilang balance, at ang SAFU emergency fund nito, na itinatag noong 2018, ay may humigit-kumulang US$1 bilyon noong Pebrero 2026.",
  ],
  highlights: [
    { title: "#1 sa liquidity", text: "Pinakamalaking open interest at futures volume sa lahat ng exchange." },
    { title: "Mababang futures fees", text: "0.02% maker / 0.05% taker sa standard tier, 10% mas mababa gamit ang BNB." },
    { title: "Lahat sa iisang app", text: "Futures, options, mga bot, copy trading at Earn sa iisang account." },
  ],
  pros: [
    "Walang kapantay na liquidity sa mga perpetual contract ng BTC, ETH at mga pangunahing altcoin",
    "Mapagkumpitensyang standard fees na may dagdag na diskwento sa BNB",
    "Proof of reserves na puwede mong i-verify mismo at SAFU fund na humigit-kumulang US$1 bilyon",
    "Puwede pang i-link ang nawawalang referral code sa loob ng 30 araw",
  ],
  cons: [
    "Hindi available sa United States, Canada at Netherlands",
    "Kailangan munang tapusin ang identity verification bago ka mag-deposit o mag-trade",
    "Limitado sa 20x leverage ang mga bagong futures account sa unang 30 araw",
    "Hindi na kasama sa referral program ang mga residente ng EEA mula Hulyo 2026",
  ],
  bestFor: [
    "Mga aktibong futures trader na kailangan ng malalim na liquidity",
    "Mga trader na gusto ng iisang platform para sa lahat",
    "Mga user na malaki ang volume at nakikinabang sa mga VIP level",
  ],
  signupTip:
    "Tapusin agad ang identity verification: hindi pinapayagan ng Binance na mag-deposit o mag-trade ang mga bagong account kung wala ito, at ibinibigay lang ang mga welcome task kapag verified ka na.",
  safety:
    "Naglalathala ang Binance ng proof of reserves na, ayon sa Binance, nagpapakitang may 1:1 na reserba ang lahat ng balance ng account – sa audit noong Nobyembre 12, 2026, nasa 100.05% ang BTC reserve ratio – at puwede mong i-verify ang sarili mong account sa Wallet → Verification. Kasama sa proteksyon ng account ang two-factor authentication, passkey at withdrawal whitelist. Layunin ng SAFU fund na protektahan ang mga user sa matitinding sitwasyon. Walang centralized exchange na walang panganib, kaya pondo lang na aktibo mong ginagamit sa trading ang itago roon.",
  restricted:
    "Sa listahan ng mga ipinagbabawal na bansa ng Binance (na-update noong Enero 5, 2026), nakasaad ang United States, Canada, Netherlands, Cuba, North Korea, Iran, Crimea at ang tinatawag na Donetsk at Luhansk People's Republic.",
  faqs: [
    {
      topic: "referral",
      q: "Gumagana ba ang Binance referral code na REFCO888?",
      a: "Oo. Noong Nobyembre 16, 2026, binuksan ng link na binance.com/register?ref=REFCO888 ang sariling registration page ng Binance, at ipinakita roon ang code na REFCO888 sa tabi ng sign-up form.",
    },
    {
      topic: "referral",
      q: "Ano ang pagkakaiba ng Binance Referral Pro at Referral Lite?",
      a: "Magkahiwalay na mode ang dalawa, at sa isa lang puwedeng mapabilang ang bagong user. Sa Referral Pro, kumikita ang referrer ng komisyon mula sa trading fees mo at puwede niyang ibahagi sa iyo ang bahagi nito bilang rebate na bayad sa USDC. Sa Referral Lite, parehong panig ang tumatanggap ng trading fee rebate voucher kapag natapos ang maliliit na task para sa unang pagbili at unang trade. Referral Pro code ang REFCO888, kaya hindi naaangkop dito ang mga Lite voucher.",
    },
    {
      topic: "referral",
      q: "May hiwalay bang Binance Futures referral code?",
      a: "Kapag nagbukas ka ng Futures account, magpapakita ang Binance ng opsyonal na field na “Futures Referral ID”. Code lang mula sa parehong referrer na ang Referral Pro code o link ang ginamit mo sa pag-sign up ang tinatanggap nito, kaya sa praktika, sakop ng iisang referral ang Spot, Margin at Futures.",
    },
    {
      topic: "referral",
      q: "Puwede ko pa bang palitan ang Binance referral code ko?",
      a: "Hindi. Ayon sa Binance, kapag nabuo na ang referral relationship, hindi na ito mababago o matatanggal. Sa account lang na walang anumang referral puwedeng i-link ang code, sa loob ng 30 araw mula sa registration at bago ang unang deposit o trade nito.",
    },
    {
      topic: "referral",
      q: "Gumagana ba ang Binance referral code sa EU?",
      a: "Hindi na. Ayon sa mga tuntunin ng referral ng Binance, mula Hulyo 1, 2026, hindi na kwalipikadong sumali sa Binance Referral Program ang mga user na rehistrado sa mga bansa ng EEA (European Economic Area). Naglilista rin ang mga tuntunin ng mga restriction para sa United Kingdom, Singapore, Japan, Turkey, Hong Kong at Israel.",
    },
    {
      topic: "signup",
      q: "Puwede ba akong mag-sign up sa Binance gamit ang Google, Apple o Telegram?",
      a: "Oo. Bukod sa email address o phone number, may “Continue with Google”, “Continue with Apple” at “Continue with Telegram” sa registration page ng Binance.",
    },
    {
      topic: "signup",
      q: "Ano ang mga kailangan para sa Binance password?",
      a: "Kailangan ng Binance password ng hindi bababa sa 8 character, kasama ang isang malaking titik at isang numero.",
    },
    {
      topic: "signup",
      q: "Gaano katagal may bisa ang Binance verification code?",
      a: "May bisa nang 30 minuto ang 6-digit na code na ipinapadala ng Binance sa email o phone mo sa registration.",
    },
    {
      topic: "signup",
      q: "Gaano katagal ang identity verification sa Binance?",
      a: "Ayon sa Binance, karaniwang natatapos ang review sa loob ng 48 oras pagkatapos mong isumite ang dokumento mo at pumasa sa liveness check.",
    },
    {
      topic: "signup",
      q: "Puwede ko bang gamitin ang Binance nang walang KYC?",
      a: "Hindi. Kailangang verified ang lahat ng bagong user bago nila magamit ang mga produkto ng Binance, kasama ang crypto deposit at trade. Withdrawal lang ang puwede sa mga lumang account na hindi verified.",
    },
    {
      topic: "bonus",
      q: "Ano ang Binance welcome bonus para sa bagong user?",
      a: "Binibigyan ng Binance ang mga bagong user ng tatlong beginner task na nagbubukas ng hanggang 100 USD na halaga ng trading fee rebate voucher. Ibinibigay lang ang mga task pagkatapos mong tapusin ang account verification, at nagbabalik ang bawat voucher ng takdang porsyento ng spot trading fees mo.",
    },
    {
      topic: "bonus",
      q: "Puwede ko bang i-withdraw ang Binance welcome bonus?",
      a: "Hindi. Trading fee rebate voucher ang reward, hindi cash: ibinabalik nito ang spot trading fees, hindi ito magagamit sa mga trade na ginawa sa API at sa Binance app lang ito magagamit.",
    },
    {
      topic: "bonus",
      q: "Aling mga bansa ang hindi kasama sa Binance welcome voucher?",
      a: "Kabilang sa mga hindi isinasama ng mga tuntunin ng Binance ang United Kingdom, United States, Canada, Netherlands, Croatia, Norway, Iceland, Liechtenstein, Serbia, Albania, Russia, Japan, Singapore at Hong Kong. Nasa help article ng Binance tungkol sa welcome reward ang buong listahan.",
    },
    {
      topic: "fees",
      q: "Magkano ang diskwento sa Binance fees kapag BNB ang pambayad?",
      a: "Kapag sa BNB mo binayaran ang fees, may 25% diskwento sa spot fees – 0.075% sa halip na 0.10% para sa mga regular na user – at 10% diskwento sa USDⓈ-M futures fees, kaya nagiging 0.018% maker at 0.045% taker.",
    },
    {
      topic: "fees",
      q: "Ano ang pinakamataas na leverage sa Binance?",
      a: "Hanggang 150x sa BTCUSDT at ETHUSDT USDⓈ-M perpetual contract para sa mga posisyon na hanggang 300,000 USDT, at hanggang 125x sa BTCUSD coin-margined perpetual contract. Hindi puwedeng gumamit ng higit sa 20x ang mga futures account na wala pang 30 araw. Malaki ang itinataas ng panganib ng liquidation kapag mataas ang leverage.",
    },
    {
      topic: "fees",
      q: "Magkano ang COIN-M futures fees sa Binance?",
      a: "Nagbabayad ang mga regular na user ng 0.02% maker at 0.05% taker sa COIN-M futures, kapareho ng mga rate sa mga USDⓈ-M na kontratang USDT-margined.",
    },
    {
      topic: "safety",
      q: "Available ba ang Binance sa US?",
      a: "Hindi. Nasa listahan ng mga ipinagbabawal na bansa ng Binance ang United States, kasama ang Canada at Netherlands.",
    },
    {
      topic: "safety",
      q: "Ano ang Binance SAFU fund?",
      a: "Emergency fund ang SAFU (Secure Asset Fund for Users) na itinatag ng Binance noong 2018 para protektahan ang mga user sa matitinding sitwasyon. Ayon sa Binance, may laman itong mga crypto asset na nagkakahalaga ng humigit-kumulang US$1 bilyon noong Pebrero 2026, at dinadagdagan ito kapag bumaba sa US$800 milyon.",
    },
    {
      topic: "safety",
      q: "Paano suriin ang proof of reserves ng Binance?",
      a: "Inilalathala ng Binance ang mga reserve ratio nito sa proof-of-reserves page nito at gumagamit ito ng Merkle tree na may zk-SNARKs. Puwedeng kumpirmahin ng mga naka-log in na user sa Wallet → Verification na kasama ang sarili nilang balance.",
    },
  ],
};
