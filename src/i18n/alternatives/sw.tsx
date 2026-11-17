import Link from "next/link";
import type { AlternativesTexts } from "./en";

/**
 * Texts of the "[Exchange] alternatives" pages in Swahili. Same keys as `./en.tsx`.
 * Wording: "mbadala wa Binance" (never "mibadala"; with a count "majukwaa 6"), "jukwaa / majukwaa", "ada",
 * "msimbo wa rufaa", second person singular ("u-"); the site is "sisi". A bare exchange name is class 9
 * ("Binance inatoza", "Binance yenyewe"). Link labels use the search form "Msimbo wa Rufaa Binance".
 * Country names come unchanged from `../compare/sw.ts`; "in" is "nchini", only Hong Kong takes "huko".
 */

/** "in <country>": "nchini Marekani", "nchini Falme za Kiarabu", "huko Hong Kong". */
const inCountry = (country: string) => (country.trim() === "Hong Kong" ? `huko ${country}` : `nchini ${country}`);

export const sw: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  title: (x, n, shortMonthYear) => `Mbadala wa ${x.name} (${shortMonthYear}): majukwaa ${n} yamelinganishwa`,
  description: (x, names, n, former, monthYear) =>
    `Mbadala wa ${x.name}${former ? ` (${former})` : ""}: ${names}. Linganisha majukwaa ${n} kwa ada, leverage, KYC, nchi na misimbo ya rufaa – data rasmi, ${monthYear}.`,
  keywords: (x, alts, former) => [
    `mbadala wa ${x.name}`,
    `${x.name} alternatives`,
    `majukwaa kama ${x.name}`,
    `mbadala bora wa ${x.name}`,
    `washindani wa ${x.name}`,
    `mbadala wa ${x.name} wenye ada za chini`,
    `mbadala wa ${x.name} bila KYC`,
    ...(former ? [`mbadala wa ${former}`, `${former} alternatives`] : []),
    ...alts.map((a) => `${a.name} vs ${x.name}`),
  ],
  crumbHome: "Mwanzo",
  crumbReferral: (name) => `Msimbo wa Rufaa ${name}`,
  crumbAlternatives: (name) => `Mbadala wa ${name}`,
  listLdName: (name) => `Mbadala wa ${name}`,
  listLdDescription: (name) => `Majukwaa yaliyolinganishwa na ${name}, kwa mpangilio wa viwango vya derivatives vya CoinMarketCap.`,
  howToLdName: (name) => `Jinsi ya kuhama kutoka ${name} kwenda jukwaa lingine`,
  howToLdDescription: (name) => `Unachopaswa kukagua, na kwa mpangilio gani, unapohama kutoka ${name} kwenda jukwaa lingine la crypto.`,
  ogTitle: (name) => `Mbadala wa ${name}`,
  ogSubtitle: (names) => `${names} – ulinganisho wa ada, leverage, KYC na nchi`,

  /* --------------------------------- words --------------------------------- */
  /** Joins the last two names of a list of links: " na ". */
  and: () => " na ",
  noneOfThem: "Hakuna hata moja",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `Imekaguliwa na kusasishwa ${date}`,
  h1: (name, n) => `Mbadala wa ${name}: majukwaa ${n} yamelinganishwa`,
  quickAnswer: "Jibu fupi",
  chipsLabel: "Tunacholinganisha",
  chips: (n, products, countries) => [`Majukwaa ${n}`, "Ada na leverage", `Bidhaa ${products}`, `Nchi ${countries}`, "KYC na usimamizi", "Misimbo ya rufaa"],
  glanceTitle: (name) => `Mbadala wa ${name} kwa muhtasari`,
  glanceIntro: "Kila jukwaa linafaa zaidi kwa lipi, pamoja na ada zake za kawaida za futures (maker / taker).",
  glanceOrder: (marketDate) => `Mpangilio: viwango vya derivatives vya CoinMarketCap, ${marketDate}. Biashara yenye leverage ina hatari kubwa.`,
  onThisPage: "Katika ukurasa huu",
  toc: (name, n) => [
    ["at-a-glance", "Kwa muhtasari"],
    ["why", `Kwa nini uhame kutoka ${name}?`],
    ["alternatives", `Majukwaa mbadala ${n}`],
    ["by-need", "Bora kwa kila hitaji"],
    ["fees", "Ada"],
    ["products", "Bidhaa"],
    ["countries", "Nchi"],
    ["kyc", "Uthibitishaji (KYC)"],
    ["safety", "Usimamizi na akiba"],
    ["referral-codes", "Misimbo ya rufaa"],
    ["switch", "Jinsi ya kuhama"],
    ["faq", "Maswali yanayoulizwa mara kwa mara"],
    ["sources", "Vyanzo"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `Ulinganisho wa mbadala wa ${name} (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `Majukwaa mbadala ${n} yakiwa sambamba na ${name} yenyewe. Ada ni viwango vya kawaida (bila VIP) ambavyo kila jukwaa linachapisha, katika muundo wa maker / taker; leverage ni kiwango cha juu kabisa ambacho jukwaa limeweka kwenye nyaraka zake; msimbo wa rufaa ni ule unaoweza kutumia kujisajili. Tulisoma kila takwimu kwenye tovuti ya jukwaa husika ${date}.`,
  comparedCaption: (name, n) => `${name} na majukwaa mbadala ${n}: kila moja linafaa zaidi kwa lipi, ada, leverage na msimbo wa rufaa`,
  colExchange: "Jukwaa",
  colBestFor: "Bora kwa",
  colFuturesFees: "Ada za futures",
  colSpotFees: "Ada za spot",
  colMaxLeverage: "Leverage ya juu zaidi",
  colReferralCode: "Msimbo wa rufaa",
  colAction: "Kitendo",
  forComparison: "kwa kulinganisha",
  signUp: "Jisajili",
  comparedOrder: (marketDate) => `Mpangilio wa majukwaa mbadala: viwango vya derivatives vya CoinMarketCap, ${marketDate}.`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `Kwa nini utafute mbadala wa ${name}?`,
  whyIntro: (name, sourcesHref) => (
    <>
      Haya ndiyo maeneo ambayo {name} yenyewe inaweka mipaka – kila moja limechukuliwa kutoka kwenye kurasa za {name} yenyewe (angalia{" "}
      <Link href={sourcesHref}>orodha ya vyanzo kwenye ukurasa wetu wa {name}</Link>). Ikiwa hakuna hata moja linalokuathiri, kubaki ni chaguo zuri
      kabisa.
    </>
  ),
  stayTitle: (name) => `Baki kwenye ${name} ikiwa …`,
  stayOutro: (name, code, href) => (
    <>
      Umeamua kubaki? <Link href={href}>Ukurasa wetu wa msimbo wa rufaa wa {name}</Link> una msimbo {code}, hatua za kujisajili na ofa ya sasa ya
      watumiaji wapya.
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `Mbadala wa ${name}: majukwaa ${n} bora kwa undani`,
  detailIntro: (name) =>
    `Kila jukwaa mbadala linapimwa dhidi ya ${name} katika vipengele vilevile: ada, leverage, ukubwa wa soko, uthibitishaji, masharti ya rufaa, bidhaa na nchi ambazo linazikubali. ‘Mbele’ inaorodhesha tu tofauti zinazoweza kusomwa moja kwa moja kwenye takwimu za majukwaa yenyewe.`,
  rowFuturesFees: "Ada za futures (maker / taker)",
  rowSpotFees: "Ada za spot (maker / taker)",
  rowMaxLeverage: "Leverage ya juu zaidi",
  rowAssets: "Sarafu zilizoorodheshwa",
  rowOpenInterest: "Open interest ya derivatives (jumla ya mikataba iliyo wazi)",
  rowUsers: "Watumiaji",
  rowFounded: "Ilianzishwa",
  rowKyc: "Uthibitishaji wa utambulisho",
  rowAddLater: "Kuunganisha msimbo wa rufaa baadaye?",
  rowOffer: "Ofa ya watumiaji wapya",
  bestFor: (role) => `Bora kwa: ${role}`,
  asAlternative: (name) => `kama mbadala wa ${name}`,
  chooseIf: (a, x) => `Chagua ${a} badala ya ${x} ikiwa …`,
  thinkTwiceIf: "Fikiria mara mbili ikiwa …",
  whereAhead: (a, x) => `Pale ${a} ilipo mbele ya ${x}`,
  whereBehind: (x) => `Pale ${x} ilipo mbele`,
  noAdvantage: "Hakuna faida inayopimika katika vipengele tunavyolinganisha.",
  codeLabel: (name) => `Msimbo wa rufaa wa ${name}`,
  signUpOn: (name) => `Jisajili kwenye ${name}`,
  linkReferral: (name, code) => `Msimbo wa Rufaa ${name} ${code}: ofa, hatua za kujisajili na KYC`,
  linkVersus: (a, x) => `${a} vs ${x}: ulinganisho kamili wa ana kwa ana`,
  linkAlternatives: (name) => `Mbadala wa ${name}`,
  sideBySide: (a, x) => `${a} vs ${x}: takwimu zote bega kwa bega`,
  sideBySideCaption: (a, x) => `${a} vs ${x}: ada, leverage, sarafu, uthibitishaji na masharti ya rufaa`,
  versusHead: (a, x) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `Mbadala bora wa ${name} kwa kila hitaji`,
  needIntro: (n) =>
    `Lipi kati ya majukwaa haya ${n} linaongoza inategemea unachotafuta. Jedwali linajibu swali hilo kwa kila hitaji – kwa kuzingatia takwimu, bila kupanga viwango vyetu wenyewe.`,
  needCaption: (name) => `Mbadala bora wa ${name} kulingana na hitaji`,
  needColWant: "Ikiwa unataka …",
  needColLook: "Angalia",
  needColWhy: "Kwa nini",
  needLowestFutures: "Ada za chini zaidi za futures",
  needLowestSpot: "Ada za chini zaidi za spot",
  needHighestLeverage: "Leverage ya juu zaidi",
  needDeepest: "Soko la derivatives lenye ukwasi mkubwa zaidi",
  needMostMarkets: "Masoko mengi zaidi ya derivatives",
  needMica: "Jukwaa lililoidhinishwa chini ya MiCA kwa Eneo la Kiuchumi la Ulaya (EEA)",
  needAddLater: "Msimbo wa rufaa unaweza kuunganishwa baada ya kujisajili",
  whyStandardTier: (fees) => `${fees} maker / taker katika kiwango cha kawaida`,
  whyOpenInterest: (amount, marketDate) => `Open interest ya ${amount} (CoinMarketCap, ${marketDate})`,
  whyMarkets: (markets, marketDate) => `Masoko ${markets} (CoinMarketCap, ${marketDate})`,
  whyFeature: "Inaonyeshwa kwenye tovuti ya jukwaa lenyewe – kinachotolewa hasa kimeorodheshwa chini ya ‘Bidhaa’",
  needNotFound: (n) => `Haikupatikana kwenye tovuti za majukwaa mbadala ${n} tulipokagua.`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `Ada: ${name} ikilinganishwa na majukwaa mbadala`,
  feesIntro:
    "Majukwaa yote saba yanatumia mfumo wa maker / taker: oda za limit zinazoongeza ukwasi (liquidity) hulipa ada ya maker, na oda zinazochukua ukwasi hulipa ada ya taker. Jedwali linaonyesha kiwango cha kawaida – ada ambazo akaunti mpya hulipa kabla ya ngazi yoyote ya VIP au punguzo la tokeni.",
  feesCaption: (name) => `Ada za kawaida ambazo ${name} na majukwaa mbadala hutoza kwenye spot na futures`,
  colFuturesMaker: "Maker ya futures",
  colFuturesTaker: "Taker ya futures",
  colSpotMaker: "Maker ya spot",
  colSpotTaker: "Taker ya spot",
  colOtherMarkets: "Masoko mengine (maker / taker)",
  feesNote: (date) =>
    `Viwango vya kawaida (bila VIP) kama kila jukwaa linavyovichapisha, vimekaguliwa ${date}. Ada hubadilika – thibitisha kwenye jukwaa kabla ya kufanya biashara.`,
  cheaperTitle: (name) => `Majukwaa yenye ada za chini kuliko ${name} ni yapi?`,
  tokenTitle: "Punguzo la ada kwa tokeni na masharti mengine",
  noTokenDiscount: "Hakuna punguzo lililochapishwa kwa kulipa ada kwa tokeni ya jukwaa.",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "Bidhaa: kila jukwaa linatoa nini",
  productsIntro: (date) =>
    `Alama ya tiki inamaanisha kuwa jukwaa linaonyesha bidhaa hiyo kwenye tovuti yake yenyewe. Kistari kinamaanisha kuwa hatukupata ukurasa wowote wa bidhaa hiyo kwenye tovuti hiyo ${date} – hilo halithibitishi kuwa bidhaa hiyo haipo. Kinachotolewa kinaweza kutofautiana kati ya nchi, hasa kwenye majukwaa ya kikanda.`,
  productsCaption: (name) => `Bidhaa ambazo ${name} na majukwaa mbadala hutoa`,
  colProduct: "Bidhaa",
  productDetailsTitle: "Maelezo ya bidhaa kwa kila jukwaa",
  productDetails: (name) => `${name}: bidhaa kwa undani`,
  offered: "Inatolewa",
  notOffered: "Haitolewi",
  noPageFound: "Hakuna ukurasa uliopatikana kwenye tovuti ya jukwaa lenyewe",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `Upatikanaji: ${name} na majukwaa mbadala kulingana na nchi`,
  countriesIntro: (count) =>
    `Mahali unapoishi ndiyo sababu ya kawaida zaidi ya kuhitaji jukwaa mbadala. Kwa nchi ${count}, jedwali linaonyesha masharti ya kila jukwaa yenyewe yanasema nini. ‘Tovuti ya kikanda’ inamaanisha kuwa jukwaa linahudumia nchi hiyo kupitia jukwaa tofauti lenye bidhaa, ada na vikomo vyake.`,
  countriesCaption: (name) => `Upatikanaji wa ${name} na majukwaa mbadala katika kila nchi`,
  colCountry: "Nchi",
  legendRestricted: "imefungwa kwa wakazi kwa mujibu wa masharti au matangazo ya jukwaa lenyewe",
  legendRegional: "huduma hutolewa kupitia jukwaa tofauti la kikanda",
  legendPartial: "baadhi tu ya bidhaa au maeneo",
  legendOpen: (date) => `haimo kwenye orodha ya nchi zilizozuiwa kufikia ${date}`,
  countriesNote:
    "‘Haijazuiwa’ si hakikisho kwamba kila bidhaa inatolewa katika nchi hiyo. Masharti yanayotumika ni yale ya jukwaa wakati unapojisajili, na majukwaa haya yote yanakataza kukwepa kizuizi kwa kutumia VPN au taarifa za uongo.",
  countryHeading: (name, country) => `Mbadala wa ${name} ${inCountry(country)}`,
  restrictedTitle: "Nchi zilizozuiwa na majukwaa ya kikanda: jukwaa kwa jukwaa",
  whereNotAvailable: (name) => `${name} haipatikani wapi?`,
  regionalPlatforms: "Majukwaa ya kikanda:",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `Uthibitishaji: je, kuna mbadala wa ${name} bila KYC?`,
  kycIntro: (n) =>
    `Hakuna kati ya majukwaa haya ${n}. Kila jukwaa katika ulinganisho huu linawataka watumiaji wapya kuthibitisha utambulisho wao, na kwenye mengi yao, kuweka pesa au kufanya biashara kunabaki kumefungwa hadi uthibitishaji ukamilike. Tofauti ziko kwenye kile ambacho akaunti isiyothibitishwa bado inaweza kufanya.`,
  kycCaption: (name) => `Uthibitishaji wa utambulisho kwenye ${name} na majukwaa mbadala`,
  colKyc: "Uthibitishaji wa utambulisho",
  kycDetailsTitle: "Kila jukwaa linasema nini kuhusu uthibitishaji",
  kycQuestion: (name) => `Je, nahitaji kuthibitisha utambulisho (KYC) kwenye ${name}?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "Usimamizi, uthibitisho wa akiba (proof of reserves) na mifuko ya ulinzi",
  safetyIntro:
    "Hakuna jukwaa la kati (centralised exchange) lisilo na hatari. Kinachoweza kulinganishwa ni kile ambacho kila jukwaa linachapisha kuhusu lenyewe: lina leseni wapi, kama linathibitisha akiba yake na kama linatunza mfuko wa dharura.",
  safetyCaption: (name) => `${name} na majukwaa mbadala: usimamizi, uthibitisho wa akiba na mifuko ya ulinzi`,
  colLicences: "Leseni ambazo jukwaa linataja",
  colReserves: "Uthibitisho wa akiba",
  colFund: "Mfuko wa ulinzi",
  noneNamed: "Hakuna uliotajwa",
  safetyNote:
    "Uwiano wa akiba ni takwimu za majukwaa yenyewe, kwa tarehe za snapshot zilizotajwa. Weka pesa kwenye jukwaa tu ikiwa unalitumia kikamilifu kufanya biashara.",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `Misimbo ya rufaa kwa mbadala wa ${name}`,
  codesIntro:
    "Ukifungua akaunti kwenye mojawapo ya majukwaa mbadala, tumia msimbo wa rufaa: haukugharimu chochote, haupandishi ada zako kamwe na unakufungulia ofa ambayo jukwaa linatoa kwa watumiaji wapya. Safu ya mwisho ndiyo muhimu zaidi – kwenye majukwaa kadhaa, msimbo uliosahau kuuweka hauwezi kuunganishwa baadaye.",
  codesCaption: (name) => `Misimbo ya rufaa ya ${name} na majukwaa mbadala`,
  colOffer: "Ofa ya watumiaji wapya",
  colWhere: "Msimbo unawekwa wapi",
  colLater: "Kuunganisha baadaye?",
  codesRow: (name) => `Msimbo wa Rufaa ${name}`,
  codesNote: (date) =>
    `Ofa zimekaguliwa ${date}. Zawadi za ukaribisho hutolewa kwa kukamilisha kazi, zinahitaji uthibitishaji wa utambulisho na hutofautiana kati ya nchi.`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `Jinsi ya kuhama kutoka ${name} kwenda jukwaa lingine`,
  switchIntro: "Kuhama si kazi kubwa kama inavyoonekana, ilimradi ufuate mpangilio huu: akaunti kwanza, kisha uthibitishaji, na pesa mwishoni.",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `Mbadala wa ${name} – maswali yanayoulizwa mara kwa mara`,
  faqIntro: (name, count) =>
    `Maswali ${count} kuhusu kutafuta mbadala wa ${name}: jukwaa lipi linafaa hitaji lipi, ada, nchi, uthibitishaji na jinsi ya kuhama.`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "Vyanzo: takwimu hizi zinatoka wapi",
  sourcesIntro: (date, marketDate) =>
    `Kila kitu kwenye ukurasa huu kuhusu ada, leverage, bidhaa, uthibitishaji, nchi, leseni, akiba na masharti ya rufaa tulikisoma kwenye tovuti na vituo vya msaada vya majukwaa yenyewe ${date}. Open interest na idadi ya masoko ya derivatives zinatoka kwenye viwango vya derivatives vya CoinMarketCap (${marketDate}). Majukwaa hubadilisha masharti bila taarifa, kwa hiyo kurasa zilizo hapa chini ndizo zenye kauli ya mwisho.`,
  sourcesSummary: (name, count, focus) =>
    count === 1
      ? `${name}: ukurasa rasmi 1${focus ? "" : " uliokaguliwa kwa ulinganisho huu"}`
      : `${name}: kurasa rasmi ${count}${focus ? "" : " zilizokaguliwa kwa ulinganisho huu"}`,
  sourcesMore: (name, count, href) => (
    <>
      Ada, leverage, uthibitishaji, masharti ya rufaa na orodha ya {name} ya nchi zilizozuiwa:{" "}
      <Link href={href}>
        vyanzo vyote {count} kwenye ukurasa wetu wa {name}
      </Link>
      .
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "Ulinganisho zaidi wa majukwaa",
  headToHeadTitle: (name) => `${name} ana kwa ana`,
  headToHeadIntro:
    "Una jukwaa mbadala moja kwenye orodha yako fupi? Kurasa za ulinganisho wa ana kwa ana zinachambua kwa kina zaidi ada, bidhaa, nchi na ofa za rufaa:",
  otherAlternativesTitle: "Mbadala wa majukwaa mengine",
  otherAlternativesIntro: "Ulinganisho uleule kwa mtazamo wa kila moja ya majukwaa mengine:",
  referralLink: (name, code) => `Msimbo wa Rufaa ${name} ${code}`,
  allComparisons: "Ulinganisho wote wa majukwaa",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>Tahadhari ya hatari:</strong> Derivatives za crypto ni bidhaa tata za kifedha. Leverage huzidisha faida na hasara, na unaweza kupoteza
      margin yako yote ndani ya dakika chache. Ukurasa huu ni kwa ajili ya taarifa tu na si ushauri wa kifedha. Tunaweza kupata kamisheni ukijisajili
      kupitia viungo vyetu – angalia ukurasa wetu wa <Link href={disclosureHref}>Ufichuzi wa ushirika</Link>. Hilo halibadilishi takwimu: ni za majukwaa
      yenyewe.
    </>
  ),
  ctaTitle: (name) => `Umepata mbadala wako wa ${name}?`,
  ctaText: "Jisajili kwa msimbo wa rufaa uliothibitishwa – akaunti moja kwa spot na futures, bila gharama ya ziada.",
  ctaButton: "Tazama misimbo yote ya rufaa",
};
