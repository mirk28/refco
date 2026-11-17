import Link from "next/link";
import type { AlternativesTexts } from "./en";

/**
 * Texts of the "[Exchange] alternatives" pages in Filipino (measured Taglish). Same keys as `./en.tsx`.
 * Wording: "Binance alternatives" as the English search phrase in titles, H1, H2 and link labels; in sentences
 * "mga alternatibo sa Binance". Trading nouns stay English ("fees", "leverage", "exchange"), the reader is "ka / mo",
 * the site is "kami / namin". Names never change ("sa Binance", "ng OKX", "kaysa sa MEXC"); country names come
 * unchanged from `../compare/fil.ts` (the English names). Counts: digit + bare noun ("6 exchange", "7 bansa").
 * Generated dates: `prettyDate` gives "Nobyembre 16, 2026", `monthYearFor` "Nobyembre 2026", the short form "Nob 2026".
 */
export const fil: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  title: (x, n, shortMonthYear) => `${x.name} Alternatives (${shortMonthYear}): Paghahambing ng ${n} Exchange`,
  description: (x, names, n, former, monthYear) =>
    `${names}: ${n} ${x.name}${former ? ` (${former})` : ""} alternatives – pinaghambing ang fees, leverage, KYC, bansa at referral code; opisyal na data, sinuri noong ${monthYear}.`,
  keywords: (x, alts, former) => [
    `${x.name} alternatives`,
    `${x.name} alternative`,
    `exchanges like ${x.name}`,
    `best ${x.name} alternatives`,
    `${x.name} competitors`,
    `${x.name} alternative lower fees`,
    `${x.name} alternative without KYC`,
    `mga alternatibo sa ${x.name}`,
    `mga exchange na katulad ng ${x.name}`,
    `alternatibo sa ${x.name} na mas mababa ang fees`,
    `alternatibo sa ${x.name} na walang KYC`,
    ...(former ? [`${former} alternatives`, `${former} alternative`, `mga alternatibo sa ${former}`] : []),
    ...alts.map((a) => `${a.name} vs ${x.name}`),
  ],
  crumbHome: "Home",
  crumbReferral: (name) => `${name} referral code`,
  crumbAlternatives: (name) => `${name} alternatives`,
  listLdName: (name) => `${name} alternatives`,
  listLdDescription: (name) => `Mga exchange na inihambing sa ${name}, nakaayos ayon sa derivatives ranking ng CoinMarketCap.`,
  howToLdName: (name) => `Paano lumipat mula sa ${name} papunta sa ibang exchange`,
  howToLdDescription: (name) => `Ano ang dapat suriin, at sa anong pagkakasunod-sunod, kapag lilipat ka mula sa ${name} papunta sa ibang crypto exchange.`,
  /** Share card. */
  ogTitle: (name) => `${name} Alternatives`,
  ogSubtitle: (names) => `${names} – paghahambing ng fees, leverage, KYC at mga bansa`,

  /* --------------------------------- words --------------------------------- */
  /** Joins the last two names of a list of links: " at " (no comma before it). */
  and: () => " at ",
  noneOfThem: "Wala sa mga ito",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `Sinuri at na-update noong ${date}`,
  h1: (name, n) => `${name} Alternatives: Paghahambing ng ${n} Exchange`,
  quickAnswer: "Mabilis na sagot",
  chipsLabel: "Mga pinaghahambing",
  chips: (n, products, countries) => [`${n} exchange`, "Fees & leverage", `${products} produkto`, `${countries} bansa`, "KYC & regulasyon", "Mga referral code"],
  glanceTitle: (name) => `${name} alternatives sa isang sulyap`,
  glanceIntro: "Kung saan pinakabagay ang bawat isa, kasama ang standard futures fees nito (maker / taker).",
  glanceOrder: (marketDate) => `Pagkakasunod-sunod: derivatives ranking ng CoinMarketCap, ${marketDate}. Mataas ang panganib ng trading na may leverage.`,
  onThisPage: "Sa pahinang ito",
  toc: (name, n) => [
    ["at-a-glance", "Sa isang sulyap"],
    ["why", `Bakit lilipat mula sa ${name}?`],
    ["alternatives", `Ang ${n} alternatibo`],
    ["by-need", "Pinakamainam sa bawat pangangailangan"],
    ["fees", "Fees"],
    ["products", "Mga produkto"],
    ["countries", "Mga bansa"],
    ["kyc", "Verification (KYC)"],
    ["safety", "Regulasyon & reserves"],
    ["referral-codes", "Mga referral code"],
    ["switch", "Paano lumipat"],
    ["faq", "FAQ"],
    ["sources", "Mga sanggunian"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `Paghahambing ng ${name} alternatives (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `Narito ang ${n} alternatibo, katabi ng ${name} mismo. Ang fees ay ang standard (non-VIP) fees na inilalathala ng bawat exchange, nakasulat bilang maker / taker; ang leverage ang pinakamataas na nakadokumento nito; ang referral code ang puwede mong gamitin sa pag-sign up. Binasa namin ang bawat numero sa sariling website ng exchange noong ${date}.`,
  comparedCaption: (name, n) => `${name} at ${n} alternatibo: kung saan pinakabagay ang bawat isa, fees, leverage at referral code`,
  colExchange: "Exchange",
  colBestFor: "Pinakabagay para sa",
  colFuturesFees: "Futures fees",
  colSpotFees: "Spot fees",
  colMaxLeverage: "Pinakamataas na leverage",
  colReferralCode: "Referral code",
  colAction: "Aksyon",
  forComparison: "para sa paghahambing",
  signUp: "Mag-sign up",
  comparedOrder: (marketDate) => `Pagkakasunod-sunod ng mga alternatibo: derivatives ranking ng CoinMarketCap, ${marketDate}.`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `Bakit maghahanap ng alternatibo sa ${name}?`,
  whyIntro: (name, sourcesHref) => (
    <>
      Sa mga puntong ito, ang {name} mismo ang naglalagay ng limitasyon – bawat isa ay kinuha sa sariling mga pahina ng {name} (tingnan ang{" "}
      <Link href={sourcesHref}>listahan ng mga sanggunian sa pahina namin para sa {name}</Link>). Kung wala ni isa rito ang nakaaapekto sa iyo, lubos na
      makatwiran ang manatili.
    </>
  ),
  stayTitle: (name) => `Kailan ${name} pa rin ang tamang pagpipilian`,
  stayOutro: (name, code, href) => (
    <>
      Nagpasya kang manatili? Nasa <Link href={href}>{name} referral code page</Link> namin ang code na {code}, ang mga hakbang sa pag-sign up at ang
      kasalukuyang offer para sa bagong user.
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `Ang ${n} pinakamahusay na ${name} alternatives nang detalyado`,
  detailIntro: (name) =>
    `Ikinukumpara ang bawat alternatibo sa ${name} sa magkakaparehong punto: fees, leverage, laki ng market, verification, mga tuntunin sa referral, mga produkto at ang mga bansang tinatanggap nito. Sa “Angat”, nakalista lang ang mga pagkakaibang direktang mababasa sa sariling numero ng mga exchange.`,
  rowFuturesFees: "Futures fees (maker / taker)",
  rowSpotFees: "Spot fees (maker / taker)",
  rowMaxLeverage: "Pinakamataas na leverage",
  rowAssets: "Mga nakalistang asset",
  rowOpenInterest: "Open interest sa derivatives",
  rowUsers: "Mga user",
  rowFounded: "Itinatag",
  rowKyc: "Identity verification",
  rowAddLater: "Puwede bang i-link ang referral code pagkatapos?",
  rowOffer: "Offer para sa bagong user",
  bestFor: (role) => `Pinakabagay para sa: ${role}`,
  asAlternative: (name) => `bilang alternatibo sa ${name}`,
  chooseIf: (a, x) => `Piliin ang ${a} sa halip na ${x} kung …`,
  thinkTwiceIf: "Pag-isipang mabuti kung …",
  whereAhead: (a, x) => `Kung saan angat ang ${a} kaysa sa ${x}`,
  whereBehind: (x) => `Kung saan angat ang ${x}`,
  noAdvantage: "Walang nasusukat na kalamangan sa mga puntong ikinukumpara namin.",
  codeLabel: (name) => `${name} referral code`,
  signUpOn: (name) => `Mag-sign up sa ${name}`,
  linkReferral: (name, code) => `${name} referral code ${code}: offer, mga hakbang sa pag-sign up at KYC`,
  linkVersus: (a, x) => `${a} vs ${x}: buong head-to-head na paghahambing`,
  linkAlternatives: (name) => `${name} alternatives`,
  sideBySide: (a, x) => `${a} vs ${x}: lahat ng numero, magkatabi`,
  sideBySideCaption: (a, x) => `${a} vs ${x}: fees, leverage, mga asset, verification at mga tuntunin sa referral`,
  versusHead: (a, x) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `Pinakamahusay na alternatibo sa ${name} para sa bawat pangangailangan`,
  needIntro: (n) =>
    `Nakadepende sa hinahanap mo kung alin sa ${n} ang nangunguna. Sinasagot ito ng table para sa bawat pangangailangan – mula sa mga numero, nang walang sarili naming ranking.`,
  needCaption: (name) => `Pinakamahusay na alternatibo sa ${name} ayon sa pangangailangan`,
  needColWant: "Kung gusto mo ng …",
  needColLook: "Tingnan ang",
  needColWhy: "Bakit",
  needLowestFutures: "Pinakamababang futures fees",
  needLowestSpot: "Pinakamababang spot fees",
  needHighestLeverage: "Pinakamataas na leverage",
  needDeepest: "Pinakamalalim na derivatives market",
  needMostMarkets: "Pinakamaraming derivatives market",
  needMica: "Platform na awtorisado sa ilalim ng MiCA para sa EEA (European Economic Area)",
  needAddLater: "Puwedeng i-link ang referral code pagkatapos mag-sign up",
  whyStandardTier: (fees) => `${fees} maker / taker sa standard tier`,
  whyOpenInterest: (amount, marketDate) => `Open interest na ${amount} (CoinMarketCap, ${marketDate})`,
  whyMarkets: (markets, marketDate) => `${markets} market (CoinMarketCap, ${marketDate})`,
  whyFeature: "Ipinapakita sa sariling website ng exchange – nasa seksyong “Mga produkto” kung ano mismo ang inaalok",
  needNotFound: (n) => `Hindi namin nakita sa mga website ng ${n} alternatibo noong sinuri namin.`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `Fees: ${name} kumpara sa mga alternatibo nito`,
  feesIntro:
    "Maker/taker model ang gamit ng lahat ng pitong exchange: ang mga limit order na nagdadagdag ng liquidity ang nagbabayad ng maker fee, at ang mga order na kumukuha ng liquidity ang nagbabayad ng taker fee. Standard tier ang ipinapakita ng table – ang fees na binabayaran ng bagong account bago ang anumang VIP level o diskwento gamit ang token.",
  feesCaption: (name) => `Standard spot at futures fees ng ${name} at ng mga alternatibo nito`,
  colFuturesMaker: "Futures maker",
  colFuturesTaker: "Futures taker",
  colSpotMaker: "Spot maker",
  colSpotTaker: "Spot taker",
  colOtherMarkets: "Ibang market (maker / taker)",
  feesNote: (date) => `Standard (non-VIP) fees ayon sa inilathala ng bawat exchange, sinuri noong ${date}. Nagbabago ang fees – kumpirmahin sa exchange bago mag-trade.`,
  cheaperTitle: (name) => `Alin ang mas mura kaysa sa ${name}?`,
  tokenTitle: "Diskwento gamit ang token at ang mga kondisyon nito",
  noTokenDiscount: "Walang inilathalang diskwento para sa pagbabayad ng fees gamit ang token ng exchange.",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "Mga produkto: ano ang inaalok ng bawat exchange",
  productsIntro: (date) =>
    `Kapag may tsek, ipinapakita ng exchange ang produkto sa sarili nitong website. Kapag may gitling, wala kaming nakitang pahina para rito sa website nito noong ${date} – hindi nito pinatutunayang wala ang produkto. Puwedeng mag-iba ang inaalok depende sa bansa, lalo na sa mga regional platform.`,
  productsCaption: (name) => `Mga produktong inaalok ng ${name} at ng mga alternatibo nito`,
  colProduct: "Produkto",
  productDetailsTitle: "Detalye ng mga produkto ng bawat exchange",
  productDetails: (name) => `${name}: detalye ng mga produkto`,
  offered: "Inaalok",
  notOffered: "Hindi inaalok",
  noPageFound: "Walang nakitang pahina sa sariling website ng exchange",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `Availability: ${name} at ang mga alternatibo nito ayon sa bansa`,
  countriesIntro: (count) =>
    `Ang bansang tinitirhan mo ang pinakakaraniwang dahilan para maghanap ng alternatibo. Ipinapakita ng table, para sa ${count} bansa, ang sinasabi ng mga tuntunin mismo ng bawat exchange. Ang ibig sabihin ng “Regional site” ay pinagsisilbihan ng exchange ang bansa gamit ang hiwalay na platform na may sariling mga produkto, fees at limitasyon.`,
  countriesCaption: (name) => `Availability ng ${name} at ng mga alternatibo nito ayon sa bansa`,
  colCountry: "Bansa",
  legendRestricted: "sarado sa mga residente ayon sa sariling mga tuntunin o abiso ng exchange",
  legendRegional: "pinagsisilbihan ng hiwalay na regional platform",
  legendPartial: "ilang produkto o rehiyon lang",
  legendOpen: (date) => `wala sa listahan ng mga restricted na bansa noong ${date}`,
  countriesNote:
    "Hindi garantiya ang “Hindi restricted” na inaalok ang bawat produkto sa bansang iyon. Ang mga tuntunin ng exchange sa oras ng pag-sign up mo ang masusunod, at ipinagbabawal ng lahat ng exchange na ito ang paglusot sa restriction gamit ang VPN o maling detalye.",
  countryHeading: (name, country) => `${name} alternatives sa ${country}`,
  restrictedTitle: "Mga restricted na bansa at regional platform ng bawat exchange",
  whereNotAvailable: (name) => `Saan hindi available ang ${name}?`,
  regionalPlatforms: "Mga regional platform:",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `Verification: may alternatibo ba sa ${name} na walang KYC?`,
  kycIntro: (n) =>
    `Wala sa ${n} na ito. Humihingi ng identity verification sa mga bagong user ang bawat exchange sa paghahambing na ito, at sa karamihan sa kanila, naka-lock ang deposit o trading hangga't hindi ito natatapos. Nasa kung ano pa ang puwedeng gawin ng hindi pa verified na account ang pagkakaiba.`,
  kycCaption: (name) => `Identity verification sa ${name} at sa mga alternatibo nito`,
  colKyc: "Identity verification",
  kycDetailsTitle: "Ano ang sinasabi ng bawat exchange tungkol sa verification",
  kycQuestion: (name) => `Kailangan ba ng identity verification (KYC) sa ${name}?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "Regulasyon, proof of reserves at mga protection fund",
  safetyIntro:
    "Walang centralized exchange na ligtas sa panganib. Ang puwedeng ikumpara ay ang inilalathala ng bawat isa tungkol sa sarili nito: kung saan ito lisensyado, kung pinapatunayan nito ang reserves nito at kung may pondo ito para sa emergency.",
  safetyCaption: (name) => `Regulasyon, proof of reserves at protection fund ng ${name} at ng mga alternatibo nito`,
  colLicences: "Mga lisensyang binanggit ng exchange",
  colReserves: "Proof of reserves",
  colFund: "Protection fund",
  noneNamed: "Walang binanggit",
  safetyNote:
    "Sariling numero ng mga exchange ang reserve ratio, mula sa mga petsa ng snapshot na nakasaad. Mag-iwan lang ng pondo sa exchange na aktibo mong ginagamit sa trading.",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `Mga referral code para sa ${name} alternatives`,
  codesIntro:
    "Kung gagawa ka ng account sa isa sa mga alternatibo, gumamit ng referral code: libre ito, hindi nito kailanman pinapataas ang fees mo, at binubuksan nito ang offer ng exchange para sa bagong user. Ang huling column ang pinakamahalaga – sa ilang exchange, hindi na puwedeng i-link pagkatapos ang nakalimutang code.",
  codesCaption: (name) => `Mga referral code ng ${name} at ng mga alternatibo nito`,
  colOffer: "Offer para sa bagong user",
  colWhere: "Saan ilalagay ang code",
  colLater: "Puwede bang i-link pagkatapos?",
  codesRow: (name) => `${name} referral code`,
  codesNote: (date) =>
    `Sinuri ang mga offer noong ${date}. Nakabatay sa mga task ang mga welcome reward, kailangan ng identity verification, at nag-iiba depende sa bansa.`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `Paano lumipat mula sa ${name} papunta sa ibang exchange`,
  switchIntro: "Mas magaan ang paglipat kaysa sa inaakala mo, basta't sundin mo ang pagkakasunod-sunod: account muna, verification pangalawa, pondo sa huli.",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `${name} alternatives – FAQ`,
  faqIntro: (name, count) =>
    `${count} tanong tungkol sa paghahanap ng kapalit ng ${name}: aling exchange ang bagay sa aling pangangailangan, fees, mga bansa, verification at kung paano lumipat.`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "Mga sanggunian: saan galing ang mga numerong ito",
  sourcesIntro: (date, marketDate) =>
    `Binasa namin noong ${date} sa sariling mga website at help center ng mga exchange ang lahat ng nasa pahinang ito tungkol sa fees, leverage, mga produkto, verification, mga bansa, lisensya, reserves at mga tuntunin sa referral. Galing sa derivatives ranking ng CoinMarketCap (${marketDate}) ang open interest at ang bilang ng mga derivatives market. Nagbabago ng mga tuntunin ang mga exchange nang walang abiso, kaya ang mga pahina sa ibaba ang huling batayan.`,
  sourcesSummary: (name, count, focus) => `${name}: ${count} opisyal na pahina${focus ? "" : " na sinuri para sa paghahambing na ito"}`,
  sourcesMore: (name, count, href) => (
    <>
      Fees, leverage, verification, mga tuntunin sa referral at ang listahan ng mga restricted na bansa ng {name}:{" "}
      <Link href={href}>
        lahat ng {count} sanggunian sa pahina namin para sa {name}
      </Link>
      .
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "Iba pang paghahambing ng mga exchange",
  headToHeadTitle: (name) => `${name}: head-to-head na paghahambing`,
  headToHeadIntro:
    "May isang alternatibo na sa shortlist mo? Mas malalim na tinatalakay ng mga head-to-head na paghahambing ang fees, mga produkto, mga bansa at mga referral offer:",
  otherAlternativesTitle: "Mga alternatibo sa iba pang exchange",
  otherAlternativesIntro: "Ganito ring paghahambing, mula sa pananaw ng bawat isa sa iba pang exchange:",
  referralLink: (name, code) => `${name} referral code ${code}`,
  allComparisons: "Lahat ng paghahambing ng mga exchange",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>Babala sa panganib:</strong> Komplikadong instrumento ang crypto derivatives. Pinalalaki ng leverage ang kita at ang lugi, at puwedeng
      mawala ang buong margin mo sa loob lang ng ilang minuto. Para sa impormasyon lang ang pahinang ito at hindi ito payong pinansyal. Puwede kaming
      makatanggap ng komisyon kapag nag-sign up ka gamit ang mga link namin – tingnan ang <Link href={disclosureHref}>Pagsisiwalat ng affiliate</Link>.
      Hindi nito binabago ang mga numero: sariling numero ito ng mga exchange.
    </>
  ),
  ctaTitle: (name) => `Nahanap mo na ba ang alternatibo mo sa ${name}?`,
  ctaText: "Mag-sign up gamit ang verified na referral code – iisang account para sa spot at futures, nang walang dagdag na bayad.",
  ctaButton: "Tingnan ang lahat ng referral code",
};
