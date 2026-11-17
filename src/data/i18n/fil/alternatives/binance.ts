import type { AlternativesText } from "../../../types";

export const binance: AlternativesText = {
  role: "Pinakamalalim na liquidity",
  pick: "Ang Binance ay may pinakamalalim na derivatives market at hinahayaan kang i-link ang nakalimutang referral code sa loob ng 30 araw",
  pitch:
    "Binance ang pinakamalaking exchange sa derivatives ranking ng CoinMarketCap at ang batayan pagdating sa liquidity: makitid na spread sa BTC, ETH at mga large-cap perpetual contract, 0.02% maker / 0.05% taker sa futures at hanggang 150x sa BTCUSDT at ETHUSDT. Tumatakbo sa iisang login ang spot, margin, futures, options, mga bot at copy trading.",
  chooseIf: [
    "Malaki ang mga trade mo at kailangan mo ang pinakamakitid na spread sa BTC, ETH at mga large-cap perpetual contract",
    "Gusto mo ng spot, margin, futures, options, mga bot at copy trading sa iisang login",
    "Wala kang inilagay na referral code sa pag-sign up – hinahayaan ka ng Binance na i-link ang isa sa loob ng 30 araw kung wala ka pang deposit o trade",
  ],
  thinkTwiceIf: [
    "Nakatira ka sa United States, Canada o Netherlands – nasa listahan ng mga ipinagbabawal na bansa ng Binance ang tatlong ito",
    "Residente ka ng EEA at gusto mo ng referral benefit – mula Hulyo 1, 2026, hindi na kasama ang mga user sa EEA sa referral program ng Binance",
    "Gusto mo ng mataas na leverage mula sa unang araw – limitado sa 20x ang mga bagong futures account sa unang 30 araw nila",
  ],
  intro:
    "Binance ang pinakamalaking crypto exchange batay sa derivatives open interest, pero hindi ito bukas sa lahat at hindi rin ito ang pinakamura o pinaka-flexible sa bawat aspeto. Karaniwang naghahanap ang mga tao ng alternatibo sa Binance dahil sarado ang Binance sa bansa nila – nasa listahan nito ng mga ipinagbabawal na bansa ang United States, Canada at Netherlands –, dahil gusto nila ng mas mababang fees o mas mataas na leverage, o dahil ayaw nilang ilagay ang lahat ng pondo nila sa iisang exchange. Inihahambing ng page na ito sa Binance ang anim na pinakamalapit na alternatibo, gamit ang mga numero mula sa sariling website ng mga exchange.",
  reasons: [
    {
      title: "Hindi available ang Binance sa bansa mo",
      text: "Sa listahan ng mga ipinagbabawal na bansa ng Binance (na-update noong Enero 5, 2026), nakasaad ang United States, Canada at Netherlands, bukod pa sa mga bansa at rehiyong may sanctions. Sa United Kingdom, may ilang serbisyong hindi bukas sa mga retail client.",
    },
    {
      title: "Gusto mo ng mas mababang fees",
      text: "Sa standard tier, naniningil ang Binance ng 0.10% maker at taker sa spot at 0.02% / 0.05% sa USDⓈ-M futures. Kapag sa BNB mo binayaran ang fees, bumababa ito sa 0.075% sa spot at 0.018% / 0.045% sa futures.",
    },
    {
      title: "Gusto mo ng mas mataas na leverage o mas maraming coin",
      text: "Hanggang 150x lang ang leverage sa BTCUSDT at ETHUSDT perpetual contract, at hindi puwedeng gumamit ng higit sa 20x ang mga bagong futures account sa unang 30 araw nila. Mahigit 600 cryptocurrency ang nakalista sa Binance.",
    },
    {
      title: "Walang referral benefit sa EEA",
      text: "Mula Hulyo 1, 2026, hindi na puwedeng sumali sa Binance referral program ang mga user na rehistrado sa mga bansa ng EEA (European Economic Area). Naglilista rin ang mga tuntunin ng referral ng Binance ng mga restriction para sa United Kingdom, Singapore, Japan, Turkey, Hong Kong at Israel.",
    },
    {
      title: "Verification muna bago ang lahat",
      text: "Kailangang tapusin ng bawat bagong user ang identity verification bago mag-deposit o mag-trade. Ayon sa Binance, karaniwang natatapos ang review sa loob ng 48 oras.",
    },
    {
      title: "Ayaw mong ilagay ang lahat sa iisang exchange",
      text: "Walang centralized exchange na walang panganib. Kapag may puhunan ka rin sa trading sa pangalawang exchange, nababawasan ang pagdepende mo sa iisang platform.",
    },
  ],
  stayIf: [
    "Pinakamahalaga sa iyo ang liquidity – nasa Binance ang pinakamalaking open interest at futures volume sa lahat ng exchange",
    "Nagbabayad ka ng fees sa BNB: 25% diskwento sa spot fees at 10% diskwento sa USDⓈ-M futures fees",
    "Mahalaga sa iyo ang regulasyon ng ADGM FSRA, isang proof of reserves na puwede mong i-verify mismo at ang SAFU fund na humigit-kumulang US$1 bilyon",
  ],
  faqs: [
    {
      q: "Available ba ang Binance sa US, Canada o Netherlands?",
      a: "Hindi. Sa listahan ng mga ipinagbabawal na bansa ng Binance (na-update noong Enero 5, 2026), nakasaad ang United States, Canada at Netherlands. Para sa United States, sakop din ng listahan ang mga mamamayan ng US at sinumang may operasyon sa US.",
    },
    {
      q: "Gumagana ba ang Binance referral program sa Europa?",
      a: "Hindi na para sa mga residente ng EEA (European Economic Area). Ayon sa mga tuntunin ng referral ng Binance, mula Hulyo 1, 2026, hindi na kwalipikadong sumali sa Binance Referral Program ang mga user na rehistrado sa mga bansa ng EEA, at naglilista rin ang mga tuntunin ng mga restriction para sa United Kingdom. Puwede ka pa ring gumawa ng Binance account mula sa mga bansang sineserbisyuhan ng Binance, pero wala nang epekto roon ang referral.",
    },
    {
      q: "Nililimitahan ba ng Binance ang leverage ng mga bagong account?",
      a: "Oo. Hindi puwedeng gumamit ng higit sa 20x ang mga futures account na wala pang 30 araw. Pagkatapos nito, umaabot ang Binance nang hanggang 150x sa BTCUSDT at ETHUSDT perpetual contract para sa mga posisyon na hanggang 300,000 USDT.",
    },
  ],
  reserves: "BTC 100.05% (audit noong Nobyembre 12, 2026), puwedeng i-verify mismo gamit ang Merkle tree at zk-SNARKs",
  fund: "SAFU fund na humigit-kumulang US$1 bilyon (noong Pebrero 2026)",
  featureNotes: {
    copyTrading: "Copy trading para sa futures at spot",
    tradingBots: "Grid, DCA, arbitrage, rebalancing at TWAP bot para sa spot at futures",
    options: "Options sa BTC, ETH, BNB, SOL, XRP at DOGE",
    demoTrading: "Demo trading na may virtual na pondo para sa spot at futures",
    margin: "Isolated at cross margin",
    p2p: "Binance P2P na may mga lokal na paraan ng pagbabayad",
    fiat: "Bank transfer at credit o debit card, depende sa rehiyon",
    earn: "Simple Earn, dual investment at ETH staking",
    launchpad: "Launchpool at HODLer Airdrops",
    web3Wallet: "Binance Wallet, isang self-custody wallet sa loob ng Binance app",
    card: "Binance Card, para lang sa mga residente ng Brazil",
  },
  countryNotes: {
    uk: "may ilang serbisyong hindi bukas sa mga retail client sa UK",
    au: "Binance Australia",
    jp: "Binance Japan",
    sg: "wala sa listahan ng mga ipinagbabawal na bansa, pero restricted doon ang referral program",
    hk: "wala sa listahan ng mga ipinagbabawal na bansa, pero restricted doon ang referral program",
    ae: "Binance UAE sa Dubai",
  },
  regional:
    "Pinapatakbo ang Binance.com ng tatlong entity na lisensyado ng ADGM Financial Services Regulatory Authority sa Abu Dhabi. May hiwalay na lokal na platform para sa Japan (Binance Japan Inc.), Australia (Binance Australia, rehistrado sa AUSTRAC) at UAE (Binance FZE, lisensyado ng VARA sa Dubai), at naglilista pa ang Binance ng iba pang lisensyadong entity sa Bahrain, Kazakhstan, New Zealand, Thailand, Indonesia, Mexico, El Salvador, Argentina, Brazil at South Africa. Walang entity sa EU o EEA na nakasaad sa page ng mga lisensya nito.",
  mica: "",
  sourceLabels: [
    "Binance: Copy trading",
    "Binance: Mga trading bot",
    "Binance: Options",
    "Binance: Demo trading",
    "Binance: Isolated margin",
    "Binance P2P",
    "Binance: Pagbili ng crypto gamit ang card o bank transfer",
    "Binance: Earn",
    "Binance: Launchpool",
    "Binance: Binance Wallet",
    "Binance: Binance Card",
    "Binance UK",
    "Binance Australia",
    "Binance Japan",
    "Binance UAE",
  ],
};
