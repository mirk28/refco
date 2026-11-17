import Link from "next/link";
import type { AlternativesTexts } from "./en";
import { readingOf, withReading } from "../name-readings";

/**
 * Texts of the "[Exchange] alternatives" pages in Amharic. Same keys as `./en.tsx`.
 * Wording: "Binance አማራጮች" (bare in titles and link labels, "የBinance አማራጮች" in sentences), "መድረክ" (masculine),
 * "ክፍያ", "ሪፈራል ኮድ", the polite እርስዎ forms; the site speaks as "we". Prefixes are glued to a Latin name ("ከBinance"),
 * postpositions stay separate ("ከOKX ጋር"), nothing is suffixed to a name. Country names come unchanged from
 * `../compare/am.ts` and are followed by "ውስጥ" (a name may begin with የ, so no prefix goes in front of it).
 */

/** "Binance (ባይናንስ)" for the texts that receive only the Latin name (H1). */
const read = (name: string) => withReading({ slug: name.toLowerCase(), name }, "am");

/** Count and noun: the singular after 1, the plural from 2 ("1 ገጽ", "12 ገጾች"). */
const count = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

/** Spellings that people type but that appear only in the keywords. */
const keywordVariants: Record<string, string[]> = {
  binance: ["ቢናንስ አማራጭ"],
};

export const am: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  title: (x, n, shortMonthYear) => `${withReading(x, "am")} አማራጮች (${shortMonthYear})፦ የ${count(n, "መድረክ", "መድረኮች")} ንጽጽር`,
  description: (x, names, n, former, monthYear) =>
    `${names}፦ እነዚህን ${n} የ${x.name}${former ? ` (${former})` : ""} አማራጮች በክፍያ፣ በሌቨሬጅ፣ በKYC፣ በአገሮች እና በሪፈራል ኮዶች አነጻጽረናል – ይፋዊ መረጃ፣ በ${monthYear} የተረጋገጠ።`,
  keywords: (x, alts, former) => {
    const reading = readingOf(x.slug, "am");
    return [
      `${x.name} አማራጮች`,
      `${x.name} alternatives`,
      ...(reading ? [`${reading} አማራጮች`, `${reading} አማራጭ`] : []),
      ...(keywordVariants[x.slug] ?? []),
      `ምርጥ የ${x.name} አማራጮች`,
      `${x.name} አማራጭ`,
      `እንደ ${x.name} ያሉ መድረኮች`,
      `exchanges like ${x.name}`,
      `${x.name} ተፎካካሪዎች`,
      `ዝቅተኛ ክፍያ ያለው የ${x.name} አማራጭ`,
      `ያለ KYC የ${x.name} አማራጭ`,
      `${x.name} alternative`,
      ...(former ? [`${former} አማራጮች`, `${former} alternatives`] : []),
      ...alts.map((a) => `${a.name} vs ${x.name}`),
    ];
  },
  crumbHome: "መነሻ ገጽ",
  crumbReferral: (name) => `${name} ሪፈራል ኮድ`,
  crumbAlternatives: (name) => `${name} አማራጮች`,
  listLdName: (name) => `${name} አማራጮች`,
  listLdDescription: (name) => `ከ${name} ጋር የተነጻጸሩ መድረኮች – CoinMarketCap ለዴሪቬቲቭስ መድረኮች ባወጣው የደረጃ ዝርዝር ቅደም ተከተል።`,
  howToLdName: (name) => `ከ${name} ወደ ሌላ መድረክ እንዴት መዛወር ይቻላል?`,
  howToLdDescription: (name) => `ከ${name} ወደ ሌላ የክሪፕቶ ግብይት መድረክ ሲዛወሩ ምን ማረጋገጥ እንዳለብዎ እና በምን ቅደም ተከተል።`,
  /** Share card. */
  ogTitle: (name) => `${name} አማራጮች`,
  ogSubtitle: (names) => `${names} – የክፍያ፣ የሌቨሬጅ፣ የKYC እና የአገሮች ንጽጽር`,

  /* --------------------------------- words --------------------------------- */
  /** Joins the last two names of a list of links: " እና ". */
  and: () => " እና ",
  noneOfThem: "አንዳቸውም የሉም",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `የተረጋገጠው እና የተሻሻለው፦ ${date}`,
  h1: (name, n) => `${read(name)} አማራጮች፦ የ${count(n, "መድረክ", "መድረኮች")} ንጽጽር`,
  quickAnswer: "አጭር መልስ",
  chipsLabel: "የሚነጻጸሩት ነጥቦች",
  chips: (n, products, countries) => [
    count(n, "መድረክ", "መድረኮች"),
    "ክፍያ እና ሌቨሬጅ",
    count(products, "ምርት", "ምርቶች"),
    count(countries, "አገር", "አገሮች"),
    "KYC እና ቁጥጥር",
    "ሪፈራል ኮዶች",
  ],
  glanceTitle: (name) => `የ${name} አማራጮች በጨረፍታ`,
  glanceIntro: "የእያንዳንዱ መድረክ ጠንካራ ጎን እና መደበኛ የፊውቸርስ ክፍያው (ሜከር / ቴከር)።",
  glanceOrder: (marketDate) => `ቅደም ተከተል፦ CoinMarketCap ለዴሪቬቲቭስ መድረኮች ያወጣው የደረጃ ዝርዝር፣ ${marketDate}። የሌቨሬጅ ግብይት ከፍተኛ ስጋት አለው።`,
  onThisPage: "በዚህ ገጽ ላይ",
  toc: (name, n) => [
    ["at-a-glance", "በጨረፍታ"],
    ["why", `ከ${name} ለምን ይዛወራሉ?`],
    ["alternatives", count(n, "አማራጭ", "አማራጮች")],
    ["by-need", "ለእያንዳንዱ ፍላጎት ምርጡ"],
    ["fees", "ክፍያዎች"],
    ["products", "ምርቶች"],
    ["countries", "አገሮች"],
    ["kyc", "የማንነት ማረጋገጫ (KYC)"],
    ["safety", "ቁጥጥር እና የመጠባበቂያ ክምችት"],
    ["referral-codes", "ሪፈራል ኮዶች"],
    ["switch", "እንዴት እንደሚዛወሩ"],
    ["faq", "ተደጋጋሚ ጥያቄዎች"],
    ["sources", "ምንጮች"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `የ${name} አማራጮች ንጽጽር (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `ሰንጠረዡ ${count(n, "አማራጭን", "አማራጮችን")} ከ${name} ራሱ ጋር ጎን ለጎን ያሳያል። ክፍያዎቹ እያንዳንዱ መድረክ ይፋ የሚያደርጋቸው መደበኛ (VIP ያልሆኑ) ተመኖች ሲሆኑ በሜከር / ቴከር መልክ ቀርበዋል፤ ሌቨሬጅ መድረኩ በሰነዶቹ ያሰፈረው ከፍተኛ መጠን ነው፤ ሪፈራል ኮዱ ደግሞ ሲመዘገቡ ሊጠቀሙበት የሚችሉት ኮድ ነው። እያንዳንዱን አሃዝ በ${date} ከመድረኩ የራሱ ድረ-ገጽ አንብበናል።`,
  comparedCaption: (name, n) => `${name} እና ${count(n, "አማራጭ", "አማራጮች")}፦ የእያንዳንዱ ጠንካራ ጎን፣ ክፍያ፣ ሌቨሬጅ እና ሪፈራል ኮድ`,
  colExchange: "መድረክ",
  colBestFor: "ጠንካራ ጎን",
  colFuturesFees: "የፊውቸርስ ክፍያ",
  colSpotFees: "የስፖት ክፍያ",
  colMaxLeverage: "ከፍተኛ ሌቨሬጅ",
  colReferralCode: "ሪፈራል ኮድ",
  colAction: "እርምጃ",
  forComparison: "ለማነጻጸሪያ",
  signUp: "ይመዝገቡ",
  comparedOrder: (marketDate) => `የአማራጮቹ ቅደም ተከተል፦ CoinMarketCap ለዴሪቬቲቭስ መድረኮች ያወጣው የደረጃ ዝርዝር፣ ${marketDate}።`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `የ${name} አማራጭ ለምን ይፈልጋሉ?`,
  whyIntro: (name, sourcesHref) => (
    <>
      {name} ራሱ ገደብ የሚያስቀምጥባቸው ነጥቦች እነዚህ ናቸው – እያንዳንዱ ከ{name} የራሱ ገጾች የተወሰደ ነው (
      <Link href={sourcesHref}>በ{name} ገጻችን ላይ ያለውን የምንጮች ዝርዝር</Link> ይመልከቱ)። ከእነዚህ አንዳቸውም እርስዎን የማይመለከቱ ከሆነ በ{name} መቆየት ፍጹም ጥሩ
      ምርጫ ነው።
    </>
  ),
  stayTitle: (name) => `በ${name} መቆየት የሚሻልዎት፦`,
  stayOutro: (name, code, href) => (
    <>
      ለመቆየት ወስነዋል? <Link href={href}>የ{name} ሪፈራል ኮድ ገጻችን</Link> ላይ {code} የሚለውን ኮድ፣ የምዝገባ ደረጃዎቹን እና አሁን ያለውን የአዲስ ተጠቃሚ ማበረታቻ
      ያገኛሉ።
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `${n} ምርጥ የ${name} አማራጮች በዝርዝር`,
  detailIntro: (name) =>
    `እያንዳንዱን አማራጭ ከ${name} ጋር በተመሳሳይ ነጥቦች አነጻጽረናል፦ ክፍያ፣ ሌቨሬጅ፣ የገበያ መጠን፣ የማንነት ማረጋገጫ፣ የሪፈራል ደንቦች፣ ምርቶች እና መድረኩ የሚቀበላቸው አገሮች። «ብልጫ ያለው» በሚሉት ዝርዝሮች ውስጥ የሚገቡት ከመድረኮቹ የራሳቸው አሃዞች በቀጥታ የሚታዩ ልዩነቶች ብቻ ናቸው።`,
  rowFuturesFees: "የፊውቸርስ ክፍያ (ሜከር / ቴከር)",
  rowSpotFees: "የስፖት ክፍያ (ሜከር / ቴከር)",
  rowMaxLeverage: "ከፍተኛ ሌቨሬጅ",
  rowAssets: "የተዘረዘሩ ንብረቶች",
  rowOpenInterest: "የዴሪቬቲቭስ ኦፕን ኢንተረስት",
  rowUsers: "ተጠቃሚዎች",
  rowFounded: "የተመሠረተበት ዓመት (እ.ኤ.አ.)",
  rowKyc: "የማንነት ማረጋገጫ",
  rowAddLater: "ሪፈራል ኮድ በኋላ ማስገባት ይቻላል?",
  rowOffer: "የአዲስ ተጠቃሚ ማበረታቻ",
  bestFor: (role) => `ጠንካራ ጎን፦ ${role}`,
  asAlternative: (name) => `– የ${name} አማራጭ`,
  chooseIf: (a, x) => `ከ${x} ይልቅ ${a} የሚሻልዎት፦`,
  thinkTwiceIf: "ደግመው ያስቡበት፦",
  whereAhead: (a, x) => `${a} ከ${x} ብልጫ ያለው በምንድን ነው?`,
  whereBehind: (x) => `${x} ብልጫ ያለው በምንድን ነው?`,
  noAdvantage: "በምናነጻጽራቸው ነጥቦች ላይ ሊለካ የሚችል ብልጫ የለም።",
  codeLabel: (name) => `${name} ሪፈራል ኮድ`,
  signUpOn: (name) => `በ${name} ይመዝገቡ`,
  linkReferral: (name, code) => `${name} ሪፈራል ኮድ ${code}፦ ማበረታቻ፣ የምዝገባ ደረጃዎች እና KYC`,
  linkVersus: (a, x) => `${a} vs ${x}፦ ሙሉ አንድ ለአንድ ንጽጽር`,
  linkAlternatives: (name) => `${name} አማራጮች`,
  sideBySide: (a, x) => `${a} vs ${x}፦ ሁሉም አሃዞች ጎን ለጎን`,
  sideBySideCaption: (a, x) => `${a} vs ${x}፦ ክፍያ፣ ሌቨሬጅ፣ ንብረቶች፣ የማንነት ማረጋገጫ እና የሪፈራል ደንቦች`,
  versusHead: (a, x) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `ለእያንዳንዱ ፍላጎት ምርጡ የ${name} አማራጭ`,
  needIntro: (n) =>
    `ከእነዚህ ${count(n, "መድረክ", "መድረኮች")} መካከል ቀዳሚ የሚሆነው የትኛው እንደሆነ በሚፈልጉት ነገር ይወሰናል። ሰንጠረዡ ለእያንዳንዱ ፍላጎት ለየብቻ ይመልሳል – በአሃዞቹ ላይ ተመሥርቶ፣ የራሳችን የደረጃ ዝርዝር ሳይኖር።`,
  needCaption: (name) => `ምርጡ የ${name} አማራጭ በየፍላጎቱ`,
  needColWant: "የሚፈልጉት …",
  needColLook: "ይመልከቱ",
  needColWhy: "ምክንያት",
  needLowestFutures: "ዝቅተኛው የፊውቸርስ ክፍያ",
  needLowestSpot: "ዝቅተኛው የስፖት ክፍያ",
  needHighestLeverage: "ከፍተኛው ሌቨሬጅ",
  needDeepest: "ከፍተኛው ሊኩዊዲቲ ያለው የዴሪቬቲቭስ ገበያ",
  needMostMarkets: "በጣም ብዙ የዴሪቬቲቭስ ገበያዎች",
  needMica: "ለአውሮፓ ኢኮኖሚያዊ ቀጣና (EEA) በMiCA ሥር ፈቃድ ያገኘ መድረክ",
  needAddLater: "ከምዝገባ በኋላ ሪፈራል ኮድ ማስገባት ይቻላል",
  whyStandardTier: (fees) => `${fees} ሜከር / ቴከር በመደበኛ ደረጃ`,
  whyOpenInterest: (amount, marketDate) => `${amount} ኦፕን ኢንተረስት (CoinMarketCap፣ ${marketDate})`,
  whyMarkets: (markets, marketDate) => `${count(markets, "ገበያ", "ገበያዎች")} (CoinMarketCap፣ ${marketDate})`,
  whyFeature: "በመድረኩ የራሱ ድረ-ገጽ ላይ ይታያል – በትክክል ምን እንደሚቀርብ «ምርቶች» በሚለው ክፍል ተዘርዝሯል",
  needNotFound: (n) => `በፍተሻችን ወቅት በእነዚህ ${count(n, "አማራጭ", "አማራጮች")} ድረ-ገጾች ላይ አልተገኘም።`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `ክፍያዎች፦ ${name} ከአማራጮቹ ጋር ሲነጻጸር`,
  feesIntro:
    "ሰባቱም መድረኮች የሜከር (Maker) / ቴከር (Taker) ሞዴል ይጠቀማሉ፦ ሊኩዊዲቲ የሚጨምሩ የሊሚት ኦርደሮች የሜከር ክፍያ ይከፍላሉ፤ ሊኩዊዲቲ የሚወስዱ ኦርደሮች ደግሞ የቴከር ክፍያ ይከፍላሉ። ሰንጠረዡ መደበኛውን ደረጃ ያሳያል – አዲስ አካውንት ምንም VIP ደረጃ ወይም የቶከን ቅናሽ ከማግኘቱ በፊት የሚከፍላቸውን ተመኖች።",
  feesCaption: (name) => `የ${name} እና የአማራጮቹ መደበኛ የስፖት እና የፊውቸርስ ክፍያዎች`,
  colFuturesMaker: "ፊውቸርስ ሜከር",
  colFuturesTaker: "ፊውቸርስ ቴከር",
  colSpotMaker: "ስፖት ሜከር",
  colSpotTaker: "ስፖት ቴከር",
  colOtherMarkets: "ሌሎች ገበያዎች (ሜከር / ቴከር)",
  feesNote: (date) => `እያንዳንዱ መድረክ ይፋ ያደረጋቸው መደበኛ (VIP ያልሆኑ) ተመኖች፣ በ${date} የተረጋገጡ። ክፍያዎች ይቀየራሉ – ከመገበያየትዎ በፊት በመድረኩ ላይ ያረጋግጡ።`,
  cheaperTitle: (name) => `ከ${name} ያነሰ ክፍያ ያላቸው መድረኮች የትኞቹ ናቸው?`,
  tokenTitle: "የቶከን ቅናሾች እና ዝርዝር ሁኔታዎች",
  noTokenDiscount: "ክፍያን በመድረኩ ቶከን ለመክፈል የሚሰጥ ቅናሽ ይፋ አልተደረገም።",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "ምርቶች፦ እያንዳንዱ መድረክ የሚያቀርበው",
  productsIntro: (date) =>
    `የትክክል ምልክት መድረኩ ምርቱን በራሱ ድረ-ገጽ ላይ ያሳያል ማለት ነው። ሰረዝ ደግሞ በ${date} በዚያ ድረ-ገጽ ላይ ስለ ምርቱ ምንም ገጽ አላገኘንም ማለት ነው – ይህ ምርቱ እንደሌለ አያረጋግጥም። የሚቀርቡት ምርቶች እንደ አገሩ ሊለያዩ ይችላሉ፤ በተለይ በአካባቢያዊ መድረኮች ላይ።`,
  productsCaption: (name) => `${name} እና አማራጮቹ የሚያቀርቧቸው ምርቶች`,
  colProduct: "ምርት",
  productDetailsTitle: "የእያንዳንዱ መድረክ ምርቶች በዝርዝር",
  productDetails: (name) => `${name}፦ ምርቶች በዝርዝር`,
  offered: "ይቀርባል",
  notOffered: "አይቀርብም",
  noPageFound: "በመድረኩ የራሱ ድረ-ገጽ ላይ ምንም ገጽ አልተገኘም",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `ተደራሽነት፦ ${name} እና አማራጮቹ በየአገሩ`,
  countriesIntro: (n) =>
    `የሚኖሩበት አገር አማራጭ መድረክ ለመፈለግ በጣም የተለመደው ምክንያት ነው። ሰንጠረዡ ለ${count(n, "አገር", "አገሮች")} የእያንዳንዱ መድረክ የራሱ ደንቦች ምን እንደሚሉ ያሳያል። «አካባቢያዊ ድረ-ገጽ» ማለት መድረኩ ለዚያ አገር የራሱ ምርቶች፣ ክፍያዎች እና ገደቦች ባሉት የተለየ መድረክ በኩል አገልግሎት ይሰጣል ማለት ነው።`,
  countriesCaption: (name) => `የ${name} እና የአማራጮቹ ተደራሽነት በየአገሩ`,
  colCountry: "አገር",
  legendRestricted: "በመድረኩ የራሱ ደንቦች ወይም ማስታወቂያዎች መሠረት ለአገሩ ነዋሪዎች ዝግ",
  legendRegional: "በተለየ አካባቢያዊ መድረክ በኩል የሚሰጥ አገልግሎት",
  legendPartial: "አንዳንድ ምርቶች ወይም አካባቢዎች ብቻ",
  legendOpen: (date) => `በ${date} በተከለከሉ አገሮች ዝርዝር ውስጥ የለም`,
  countriesNote:
    "«ያልተከለከለ» መባሉ በዚያ አገር ሁሉም ምርቶች እንደሚቀርቡ ዋስትና አይሆንም። ተፈጻሚ የሚሆኑት በሚመዘገቡበት ጊዜ ያሉት የመድረኩ ደንቦች ናቸው፤ እነዚህ መድረኮች በሙሉ ገደብን በVPN ወይም በሐሰተኛ መረጃ ማለፍን ይከለክላሉ።",
  countryHeading: (name, country) => `${country} ውስጥ የ${name} አማራጮች`,
  restrictedTitle: "የእያንዳንዱ መድረክ የተከለከሉ አገሮች እና አካባቢያዊ መድረኮች",
  whereNotAvailable: (name) => `${name} የማይገኘው የት ነው?`,
  regionalPlatforms: "አካባቢያዊ መድረኮች፦",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `የማንነት ማረጋገጫ፦ ያለ KYC የ${name} አማራጭ አለ?`,
  kycIntro: (n) =>
    `ከእነዚህ ${count(n, "መድረክ", "መድረኮች")} መካከል እንደዚህ ያለ የለም። በዚህ ንጽጽር ውስጥ ያሉት ሁሉም መድረኮች አዲስ ተጠቃሚዎችን የማንነት ማረጋገጫ ይጠይቃሉ፤ በአብዛኞቹ ላይ ማረጋገጫው እስኪጠናቀቅ ድረስ ገንዘብ ማስገባት ወይም መገበያየት ተዘግቶ ይቆያል። ልዩነቱ ያልተረጋገጠ አካውንት አሁንም ምን ማድረግ እንደሚችል ላይ ነው።`,
  kycCaption: (name) => `የማንነት ማረጋገጫ በ${name} እና በአማራጮቹ ላይ`,
  colKyc: "የማንነት ማረጋገጫ",
  kycDetailsTitle: "እያንዳንዱ መድረክ ስለ ማንነት ማረጋገጫ የሚለው",
  kycQuestion: (name) => `${name} ላይ የማንነት ማረጋገጫ (KYC) ያስፈልጋል?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "ቁጥጥር፣ የመጠባበቂያ ክምችት ማረጋገጫ (Proof of Reserves) እና የጥበቃ ፈንዶች",
  safetyIntro:
    "ከስጋት ነጻ የሆነ ማዕከላዊ መድረክ የለም። ማነጻጸር የሚቻለው እያንዳንዱ መድረክ ስለራሱ ይፋ የሚያደርገውን ነው፦ ፈቃድ ያገኘበትን ቦታ፣ ክምችቱን ማረጋገጥ አለማረጋገጡን እና ለአደጋ ጊዜ የሚሆን ፈንድ መያዝ አለመያዙን።",
  safetyCaption: (name) => `የ${name} እና የአማራጮቹ ቁጥጥር፣ የመጠባበቂያ ክምችት ማረጋገጫ እና የጥበቃ ፈንዶች`,
  colLicences: "መድረኩ የጠቀሳቸው ፈቃዶች",
  colReserves: "የመጠባበቂያ ክምችት ማረጋገጫ",
  colFund: "የጥበቃ ፈንድ",
  noneNamed: "አልተጠቀሰም",
  safetyNote: "የክምችት ምጣኔዎቹ የመድረኮቹ የራሳቸው አሃዞች ሲሆኑ በተጠቀሱት ቀናት የተወሰዱ ናቸው። ገንዘብዎን በንቃት በሚገበያዩበት መድረክ ላይ ብቻ ያስቀምጡ።",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `የ${name} አማራጮች ሪፈራል ኮዶች`,
  codesIntro:
    "ከአማራጮቹ በአንዱ ላይ አካውንት ከከፈቱ በሪፈራል ኮድ ይክፈቱ፦ ምንም አያስከፍልም፣ ክፍያዎን ፈጽሞ አይጨምርም እና የመድረኩን የአዲስ ተጠቃሚ ማበረታቻ ይከፍትልዎታል። በጣም አስፈላጊው የመጨረሻው አምድ ነው – በበርካታ መድረኮች የተረሳ ኮድ በኋላ ማስገባት አይቻልም።",
  codesCaption: (name) => `የ${name} እና የአማራጮቹ ሪፈራል ኮዶች`,
  colOffer: "የአዲስ ተጠቃሚ ማበረታቻ",
  colWhere: "ኮዱ የት ይገባል",
  colLater: "በኋላ ማስገባት ይቻላል?",
  codesRow: (name) => `${name} ሪፈራል ኮድ`,
  codesNote: (date) =>
    `ማበረታቻዎቹ በ${date} ተረጋግጠዋል። የእንኳን ደህና መጡ ሽልማቶች በተግባራት ላይ የተመሠረቱ ናቸው፣ የማንነት ማረጋገጫ ይጠይቃሉ እና እንደ አገሩ ይለያያሉ።`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `ከ${name} ወደ ሌላ መድረክ እንዴት መዛወር ይቻላል?`,
  switchIntro: "ቅደም ተከተሉን እስከጠበቁ ድረስ መዛወር እንደሚመስለው ከባድ አይደለም፦ መጀመሪያ አካውንት፣ ሁለተኛ የማንነት ማረጋገጫ እና በመጨረሻ ገንዘብ።",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `${name} አማራጮች – ተደጋጋሚ ጥያቄዎች`,
  faqIntro: (name, n) =>
    `የ${name} ምትክ ስለመፈለግ ${count(n, "ጥያቄ", "ጥያቄዎች")}፦ የትኛው መድረክ ለየትኛው ፍላጎት እንደሚስማማ፣ ክፍያዎች፣ አገሮች፣ የማንነት ማረጋገጫ እና እንዴት እንደሚዛወሩ።`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "ምንጮች፦ እነዚህ አሃዞች ከየት መጡ",
  sourcesIntro: (date, marketDate) =>
    `በዚህ ገጽ ላይ ስለ ክፍያ፣ ሌቨሬጅ፣ ምርቶች፣ የማንነት ማረጋገጫ፣ አገሮች፣ ፈቃዶች፣ ክምችት እና የሪፈራል ደንቦች የሰፈረው ሁሉ በ${date} ከመድረኮቹ የራሳቸው ድረ-ገጾች እና የእገዛ ማዕከላት የተወሰደ ነው። ኦፕን ኢንተረስት እና የዴሪቬቲቭስ ገበያዎች ብዛት CoinMarketCap ለዴሪቬቲቭስ መድረኮች ካወጣው የደረጃ ዝርዝር (${marketDate}) የተወሰዱ ናቸው። መድረኮች ደንቦቻቸውን ያለ ማስታወቂያ ይቀይራሉ፤ ስለዚህ የመጨረሻው ቃል ከታች ያሉት ገጾች ናቸው።`,
  sourcesSummary: (name, n, focus) => `${name}፦ ${focus ? "" : "ለዚህ ንጽጽር የተመረመሩ "}${count(n, "ይፋዊ ገጽ", "ይፋዊ ገጾች")}`,
  sourcesMore: (name, n, href) => (
    <>
      የ{name} ክፍያ፣ ሌቨሬጅ፣ የማንነት ማረጋገጫ፣ የሪፈራል ደንቦች እና የተከለከሉ አገሮች ዝርዝር፦{" "}
      <Link href={href}>
        በ{name} ገጻችን ላይ ያሉት ሁሉም {count(n, "ምንጭ", "ምንጮች")}
      </Link>
      ።
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "ተጨማሪ የመድረኮች ንጽጽሮች",
  headToHeadTitle: (name) => `${name}፦ አንድ ለአንድ ንጽጽር`,
  headToHeadIntro: "በምርጫ ዝርዝርዎ ውስጥ አንድ አማራጭ አለ? የአንድ ለአንድ ንጽጽር ገጾች ስለ ክፍያ፣ ምርቶች፣ አገሮች እና የሪፈራል ማበረታቻዎች በጥልቀት ያብራራሉ፦",
  otherAlternativesTitle: "የሌሎቹ መድረኮች አማራጮች",
  otherAlternativesIntro: "ተመሳሳይ ንጽጽር፣ ከእያንዳንዱ ሌላ መድረክ አንጻር፦",
  referralLink: (name, code) => `${name} ሪፈራል ኮድ ${code}`,
  allComparisons: "ሁሉም የመድረኮች ንጽጽሮች",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>የስጋት ማስጠንቀቂያ፦</strong> የክሪፕቶ ዴሪቬቲቭስ ውስብስብ የፋይናንስ መሣሪያዎች ናቸው። ሌቨሬጅ ትርፍንም ኪሳራንም ያባዛል፤ መላውን ማርጂንዎን በጥቂት
      ደቂቃዎች ውስጥ ሊያጡ ይችላሉ። ይህ ገጽ ለመረጃ ብቻ የቀረበ ነው፤ የፋይናንስ ምክር አይደለም። በሊንኮቻችን በኩል ከተመዘገቡ ኮሚሽን ልናገኝ እንችላለን –{" "}
      <Link href={disclosureHref}>የአፊሊዬት መግለጫ</Link> ገጻችንን ይመልከቱ። ይህ አሃዞቹን አይቀይርም፦ አሃዞቹ የመድረኮቹ የራሳቸው ናቸው።
    </>
  ),
  ctaTitle: (name) => `የ${name} አማራጭዎን አግኝተዋል?`,
  ctaText: "በተረጋገጠ ሪፈራል ኮድ ይመዝገቡ – ለስፖት እና ለፊውቸርስ አንድ አካውንት፣ ያለ ተጨማሪ ክፍያ።",
  ctaButton: "ሁሉንም ሪፈራል ኮዶች ይመልከቱ",
};
