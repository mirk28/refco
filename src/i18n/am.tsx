import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";
import { readingOf, withReading } from "./name-readings";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";

/**
 * Interface texts in Amharic (readers in Ethiopia). Same keys as `en.tsx`.
 *
 * Wording: "ሪፈራል ኮድ" for referral code (main keyword; with a name "Binance ሪፈራል ኮድ" in titles, H1 and link labels,
 * "የBinance ሪፈራል ኮድ" inside a sentence), "የግብዣ ኮድ", "ሪፈራል ሊንክ" and "ሪፈራል ID" as second terms, "የክሪፕቶ ግብይት
 * መድረክ" / "መድረክ" for the exchange, "ክፍያ" for fees, ስፖት / ፊውቸርስ / ማርጂን in Ethiopic letters, polite address
 * (እርስዎ forms, the pronoun itself left out). Exchange names stay Latin and take prefixes only (የBinance, በBinance),
 * never a suffix; the Ethiopic spelling of a name is added in brackets only in the title, the H1, the lead and the
 * keywords (`withReading`). Latin digits with a decimal point (0.02%, 10,000 USDT, 34.1 ቢሊዮን ዶላር), sentence end
 * "።", list comma "፣ ". Field and button names of the exchanges stay in English, because only the English interface
 * was checked.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A፣ B እና C" – Ethiopic comma, no comma before እና. */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join("፣ ")} እና ${items[items.length - 1]}`);
/** "A፣ B ወይም C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join("፣ ")} ወይም ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** A step title as a sentence in a running answer: it gets "።" unless it already ends with a mark. */
const asSentence = (s: string) => (/[።.!?]$/.test(s.trim()) ? s.trim() : `${s.trim()}።`);
/** The name with its Ethiopic spelling: "Binance (ባይናንስ)" – title, H1, lead. */
const named = (e: Exchange) => withReading(e, "am");
/** Spellings people also type besides the fixed one (`readingOf`): keywords only, never in text. */
const keywordSpellings: Record<string, string> = { binance: "ቢናንስ" };

export const am: Dictionary = {
  list,

  format: {
    billions: (n) => `${n.toFixed(n >= 10 ? 1 : 2)} ቢሊዮን ዶላር`,
    billionsExact: (n) => `${n.toFixed(2)} ቢሊዮን ዶላር`,
    billionsFloor: (n) => `ከ${Math.floor(n)} ቢሊዮን ዶላር በላይ`,
  },

  meta: {
    siteTitle: `${site.name} – የክሪፕቶ ግብይት መድረኮች የተረጋገጡ ሪፈራል ኮዶች`,
    siteDescription:
      "Binance፣ OKX፣ Bybit፣ Bitget፣ Gate፣ KuCoin እና MEXC ላይ የሚሠሩ የተረጋገጡ ሪፈራል ኮዶች – በአንድ የምዝገባ ሊንክ ለስፖት እና ለፊውቸርስ ግብይት የአዲስ ተጠቃሚ ቦነስ እና የክፍያ ተመላሽ ያግኙ። ክፍያዎችን፣ እውነታዎችን እና ጠንካራና ደካማ ጎኖችን በሐቀኝነት እናቀርባለን።",
  },

  layout: {
    skip: "በቀጥታ ወደ ይዘቱ ይሂዱ",
    mainNav: "ዋና ማውጫ",
    nav: { exchanges: "መድረኮች", benefits: "ጥቅሞች", compare: "ንጽጽር", howItWorks: "እንዴት ይሠራል", about: "ስለ እኛ" },
    getCodes: "ኮዶቹን ያግኙ",
    homeLabel: `${site.name} – የ${site.domain} መነሻ ገጽ`,
    language: "ቋንቋ",
    footerAbout:
      "የትልልቆቹ የክሪፕቶ ግብይት መድረኮች የተረጋገጡ ሪፈራል ኮዶች – ለስፖት እና ለፊውቸርስ የእንኳን ደህና መጡ ቦነስ እና የክፍያ ተመላሽ። ከይፋዊ ምንጮች የተወሰዱ ግልጽ እውነታዎች።",
    referralCodes: "ሪፈራል ኮዶች",
    referralCodeOf: (name) => `${name} ሪፈራል ኮድ`,
    alternatives: "አማራጮች",
    alternativesOf: (name) => `${name} አማራጮች`,
    guides: "መመሪያዎች",
    comparisons: "የመድረኮች ንጽጽር",
    howCodesWork: "ሪፈራል ኮዶች እንዴት ይሠራሉ",
    faq: "ተደጋጋሚ ጥያቄዎች",
    about: "ስለ እኛ እና አሠራራችን",
    legal: "ሕጋዊ ጉዳዮች",
    imprint: "ሕጋዊ መረጃ",
    privacy: "የግላዊነት ፖሊሲ",
    disclosure: "የአፊሊዬት መግለጫ",
    cookieSettings: "የኩኪ ቅንብሮች",
    risk: (
      <>
        <strong>የስጋት ማስጠንቀቂያ፦</strong> የክሪፕቶ ዴሪቬቲቭስን በሌቨሬጅ መገበያየት ከፍተኛ ስጋት ያለው ሲሆን ዲፖዚትዎን በሙሉ እስከማጣት ሊያደርስዎ ይችላል። ቢያጡት
        የማይቸገሩበትን ገንዘብ ብቻ ይዘው ይገበያዩ። በዚህ ድረ-ገጽ ላይ ያለ ምንም ነገር የፋይናንስ፣ የኢንቨስትመንት ወይም የታክስ ምክር አይደለም።
      </>
    ),
    affiliate: (
      <>
        <strong>የአፊሊዬት መግለጫ፦</strong> አንዳንድ ሊንኮች ሪፈራል ሊንኮች ናቸው። በእነሱ በኩል ከተመዘገቡ እኛ ኮሚሽን ልናገኝ እንችላለን፤ ለእርስዎ ግን ምንም ተጨማሪ ክፍያ
        የለውም። ይህ የምናቀርባቸውን እውነታዎች ፈጽሞ አይነካም። የመድረኮቹ ስሞች እና አርማዎች የየባለቤቶቻቸው የንግድ ምልክቶች ናቸው፤ {site.name} ከእነሱ ጋር ምንም ግንኙነት
        የለውም፣ በእነሱም አልተደገፈም።
      </>
    ),
  },

  consent: {
    label: "የትንታኔ ፈቃድ",
    text: (privacyHref) => (
      <>
        <strong>ትንታኔ – ውሳኔው የእርስዎ ነው።</strong> የትኞቹ ገጾች እንደሚነበቡ ለማየት Google Analytics መጠቀም እንፈልጋለን። ይህ መሣሪያ ኩኪዎችን ያስቀምጣል፣ የአጠቃቀም
        መረጃን ወደ Google ይልካል፣ የሚጀምረውም እርስዎ ሲፈቅዱ ብቻ ነው። የትኛውንም ቢመርጡ የማስታወቂያ ኩኪዎች አይኖሩም። ዝርዝሩ፦{" "}
        <Link href={privacyHref}>የግላዊነት ፖሊሲ</Link>።
      </>
    ),
    decline: "አይፍቀዱ",
    allow: "ትንታኔ ይፍቀዱ",
  },

  notFound: {
    title: "ይህ ገጽ የለም",
    text: "የሚፈልጉት ሪፈራል ኮድ ወደ ሌላ ገጽ ተዛውሮ ሊሆን ይችላል። ከእነዚህ አንዱን ይሞክሩ፦",
    back: "ወደ መነሻ ገጽ ይመለሱ",
  },

  og: {
    footer: ["የተረጋገጡ ሊንኮች", "ክፍያዎችና እውነታዎች", "ይፋዊ ምንጮች"],
    homeAlt: "RefCo – የክሪፕቶ ግብይት መድረኮች የተረጋገጡ ሪፈራል ኮዶች",
    homeKicker: (monthYear) => `የተሻሻለው፦ ${monthYear}`,
    homeTitle: "የተረጋገጡ የክሪፕቶ ግብይት መድረኮች ሪፈራል ኮዶች።",
    exchangeAlt: "የክሪፕቶ ግብይት መድረክ ሪፈራል ኮድ፣ አማራጮች እና ንጽጽሮች – RefCo",
    exchangeKicker: (monthYear) => `የተረጋገጠው፦ ${monthYear}`,
    exchangeTitle: (e) => `${e.name} ሪፈራል ኮድ`,
    exchangeSubtitle: (e) => `${benefit(e)} · ስፖት እና ፊውቸርስ በአንድ ሊንክ`,
    versusBadge: "አንድ ለአንድ ንጽጽር",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `የፊውቸርስ ክፍያ ${feesA} vs ${feesB} · ሌቨሬጅ ${leverageA}x vs ${leverageB}x · KYC፣ አገሮች፣ ቦነስ`,
  },

  blocks: {
    signUpOn: (name) => `በ${name} ይመዝገቡ`,
    signUp: "ይመዝገቡ",
    details: "ዝርዝር",
    breadcrumb: "የአሰሳ መንገድ",
    copy: "ይቅዱ",
    copied: "ተቀድቷል ✓",
    spotMakerTaker: "ስፖት ሜከር / ቴከር",
    futuresMakerTaker: "ፊውቸርስ ሜከር / ቴከር",
    maxLeverage: "ከፍተኛ ሌቨሬጅ",
    since: "የተመሠረተበት ዓመት (እ.ኤ.አ.)",
    tableCaption: "የክሪፕቶ ግብይት መድረኮች ንጽጽር፦ የአዲስ ተጠቃሚ ማበረታቻ፣ የስፖት እና የፊውቸርስ ክፍያ፣ ሌቨሬጅ እና የገበያ መረጃ",
    exchange: "መድረክ",
    newUserOffer: "የአዲስ ተጠቃሚ ማበረታቻ",
    futuresFees: "የፊውቸርስ ክፍያ (ሜከር / ቴከር)",
    spotFees: "የስፖት ክፍያ",
    openInterest: "ኦፕን ኢንተረስት",
    markets: "ገበያዎች",
    action: "እርምጃ",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => `የክሪፕቶ ግብይት መድረኮች ሪፈራል ኮዶች (${monthYear})፦ ለስፖት እና ለፊውቸርስ ቦነስ`,
    description: (monthYear) =>
      `የተረጋገጡ ሪፈራል ኮዶች፦ Binance፣ OKX፣ Bybit፣ Bitget፣ Gate፣ KuCoin እና MEXC። በአንድ ሊንክ ለስፖት እና ለፊውቸርስ የአዲስ ተጠቃሚ ቦነስ እና የክፍያ ተመላሽ ያግኙ – የተሻሻለው፦ ${monthYear}።`,
    listName: "ለስፖት እና ለፊውቸርስ የክሪፕቶ ግብይት መድረኮች ሪፈራል ኮዶች",
    updated: (monthYear) => `የተሻሻለው፦ ${monthYear}`,
    h1: (
      <>
        የክሪፕቶ ግብይት መድረኮች ሪፈራል ኮዶች – <span className="hl">የተረጋገጡ</span> እና በግልጽ የተብራሩ።
      </>
    ),
    lead: (
      <>
        በዓለም ትልልቆቹ የክሪፕቶ ግብይት መድረኮች ላይ የእንኳን ደህና መጡ ቦነስ እና የክፍያ ተመላሽ ያግኙ – አንድ ሪፈራል ኮድ (የግብዣ ኮድ ተብሎም ይጠራል) ለስፖት (Spot){" "}
        <em>እና</em> ለፊውቸርስ (Futures)። ከዚህ በተጨማሪ ለመምረጥ የሚያስፈልጉዎት እውነታዎች፦ ክፍያዎች፣ ሌቨሬጅ፣ ፈቃዶች እና ሐቀኛ የጠንካራና ደካማ ጎኖች ግምገማ።
      </>
    ),
    browse: "ሪፈራል ኮዶችን ይመልከቱ",
    seeBenefits: "ጥቅሞችዎን ይመልከቱ",
    trust: (date) => [`የተረጋገጠው፦ ${date}`, "ይፋዊ ሊንኮች ብቻ", "ትንታኔ በእርስዎ ፈቃድ ብቻ"],
    featured: "ተለይተው የቀረቡ መድረኮች",
    ticketName: (name) => `${name} ሪፈራል ኮድ`,
    ticketTag: "ስፖት + ፊውቸርስ",
    stats: ["ቀዳሚ የስፖት እና የፊውቸርስ መድረኮች", "አጠቃላይ ኦፕን ኢንተረስት", "የተካተቱ የዴሪቬቲቭስ ገበያዎች", "ዝቅተኛው የሜከር ክፍያ (MEXC)"],
    marketData: (date) => `የገበያ መረጃ፦ የCoinMarketCap የዴሪቬቲቭስ ደረጃ ሰንጠረዥ፣ በ${date} የተወሰደ።`,

    benefitsEyebrow: "ጥቅሞችዎ",
    benefitsTitle: `በ${site.name} ሪፈራል ኮድ መመዝገብ ለምን ይጠቅማል?`,
    benefitsLead: "ያው መድረክ፣ ያው ክፍያ – ነገር ግን በቀጥታ ቢመዘገቡ የማያገኟቸውን የአዲስ ተጠቃሚ ጥቅሞች ያገኛሉ።",
    benefits: [
      {
        title: "የእንኳን ደህና መጡ ቦነስ",
        text: "የመድረኩን የአዲስ ተጠቃሚ ማበረታቻ ያግኙ – የክፍያ ተመላሽ ቫውቸሮች፣ የፊውቸርስ ቦነሶች እና የተግባር ሽልማቶች፤ ዋጋቸው በሺዎች የሚቆጠር USDT ሊደርስ ይችላል።",
      },
      {
        title: "ዝቅተኛ የግብይት ክፍያ",
        text: "መድረኩ በሚፈቅድበት ቦታ ከሪፈራል ኮሚሽኑ የተወሰነው ክፍል በእያንዳንዱ ግብይት ላይ እንደ ተመላሽ ወደ እርስዎ ይመለሳል።",
      },
      {
        title: "ስፖት እና ፊውቸርስ በአንድ ሊንክ",
        text: "ሪፈራሉ ከአካውንትዎ ጋር የተሳሰረ ነው – ስፖት፣ ፊውቸርስ፣ ማርጂን እና ኦፕሽንስ ላይ ይሠራል። ሁለተኛ ኮድ አያስፈልግዎትም።",
      },
      { title: "ምንም ተጨማሪ ወጪ የለም", text: "ሪፈራል ክፍያዎን በፍጹም አይጨምርም። እርስዎ የሚያገኙት ጥቅም ብቻ ነው – የፕሮግራሙን ወጪ የሚሸፍነው መድረኩ ነው።" },
      { title: "ይፋዊ የምዝገባ ገጾች", text: "እያንዳንዱ ሊንክ የመድረኩን የራሱን ድረ-ገጽ ይከፍታል። ደላላ የለም፤ ለእኛ የሚጋራ ምንም መረጃ የለም።" },
      {
        title: "በምዝገባ ጊዜ መጠቀም ይመረጣል",
        text: "አንዳንድ መድረኮች ኮድ እስከ 30 ቀናት ድረስ እንዲያስገቡ ይፈቅዳሉ፤ ሌሎቹ ግን በፍጹም አይፈቅዱም። አካውንት ከመክፈትዎ በፊት ሊንኩን ከተጠቀሙ በየትኛውም መድረክ ላይ ችግር አይገጥምዎትም።",
      },
    ],
    offersCaption: "የአዲስ ተጠቃሚ ማበረታቻዎች በየመድረኩ",
    offersHead: ["መድረክ", "በሪፈራል የሚገኝ የአዲስ ተጠቃሚ ማበረታቻ", "አንድ ሊንክ የሚያካትተው"],
    claim: "ያግኙ",
    offersNote: (date) =>
      `ማበረታቻዎቹ በ${date} ተረጋግጠዋል። የእንኳን ደህና መጡ ሽልማቶች በተግባራት ላይ የተመሠረቱ ናቸው፣ የማንነት ማረጋገጫ ይጠይቃሉ፣ እንደ አካባቢውም ይለያያሉ – ወቅታዊ ሁኔታዎቹ በእያንዳንዱ መድረክ የምዝገባ ገጽ ላይ ይታያሉ።`,

    exchangesEyebrow: "ሪፈራል ኮዶች",
    exchangesTitle: "መድረክዎን ይምረጡ",
    exchangesLead: "እያንዳንዱ ገጽ ሪፈራሉን፣ ክፍያዎቹን እና መድረኩ ለማን እንደሚስማማ ያብራራል – አንድ ጊዜ፣ በትክክለኛው መድረክ ላይ እንዲመዘገቡ።",
    sideBySide: "ጎን ለጎን",
    notSure: "የትኛውን እንደሚመርጡ እርግጠኛ አይደሉም?",
    notSureText: (count) => `የሁሉም ${count} መድረኮች ክፍያ፣ ሌቨሬጅ እና ኦፕን ኢንተረስት (Open Interest) በአንድ ሰንጠረዥ ያነጻጽሩ።`,
    compareExchanges: "መድረኮችን ያነጻጽሩ",

    compareTitle: "የክሪፕቶ ግብይት መድረኮች ንጽጽር፦ ስፖት እና ፊውቸርስ",
    compareLead: "የአዲስ ተጠቃሚ ማበረታቻዎች፣ መደበኛ (VIP ያልሆነ) የስፖት እና የፊውቸርስ ክፍያ፣ ሌቨሬጅ እና የገበያ ጥልቀት በአንድ እይታ።",
    compareNote: (reviewed, market) =>
      `ክፍያዎች፦ እያንዳንዱ መድረክ ያወጣው መደበኛ ደረጃ፣ በ${reviewed} የተረጋገጠ። ኦፕን ኢንተረስት እና ገበያዎች፦ CoinMarketCap፣ ${market}። ክፍያዎች ይቀየራሉ – ከመገበያየትዎ በፊት በመድረኩ ላይ ያረጋግጡ።`,
    versusStrip: {
      title: "ሁለት መድረኮችን አንድ ለአንድ ያነጻጽሩ",
      text: (pairs, hubHref) => (
        <>
          {pairs} የጥንድ ንጽጽሮች ክፍያ፣ ሌቨሬጅ፣ ምርቶች፣ አገሮች፣ KYC እና የሪፈራል ማበረታቻዎችን ጎን ለጎን ያቀርባሉ –{" "}
          <Link href={hubHref}>ሁሉንም የመድረኮች ንጽጽሮች ይመልከቱ</Link>።
        </>
      ),
    },
    alternativesStrip: {
      title: "ለመድረክዎ አማራጭ እየፈለጉ ነው?",
      text: (others) =>
        `እያንዳንዱ ንጽጽር አንድን መድረክ ከሌሎቹ ${others} መድረኮች ጋር ያነጻጽራል፦ ክፍያ፣ ሌቨሬጅ፣ ምርቶች፣ የማንነት ማረጋገጫ እና መድረኩ የሚቀበላቸው አገሮች።`,
    },

    picksEyebrow: "ፈጣን መልስ",
    picksTitle: "የትኛው መድረክ ይሻልዎታል?",
    picks: [
      { label: "ከፍተኛው ሊኩዊዲቲ", slug: "binance", why: "በዓለም ትልቁ ኦፕን ኢንተረስት እና የፊውቸርስ የግብይት መጠን።" },
      {
        label: "ዝቅተኛ ክፍያ እና ኦፕሽንስ",
        slug: "okx",
        why: "ለስፖት 0.08% / 0.10%፣ ለኦፕሽንስ 0.03% እና ወርሃዊ የመጠባበቂያ ክምችት ማረጋገጫ (Proof of Reserves)።",
      },
      { label: "በሞባይል ንቁ የፊውቸርስ ግብይት", slug: "bybit", why: "ፈጣን የግብይት ሞተር እና ከምርጥ የግብይት መተግበሪያዎች አንዱ።" },
      { label: "ኮፒ ትሬዲንግ", slug: "bitget", why: "ልምድ ያላቸው የፊውቸርስ ትሬደሮች የሚያደርጉትን ግብይት በራስ-ሰር ይቅዱ።" },
      { label: "በጣም ብዙ አልትኮይኖች", slug: "gate", why: "ከ5,400 በላይ ንብረቶች እና ብዙም ባልታወቁ ቶከኖች ላይ ፊውቸርስ።" },
      { label: "የግብይት ቦቶች", slug: "kucoin", why: "ለስፖት እና ለፊውቸርስ ነፃ የግብይት ቦቶች።" },
      { label: "ዝቅተኛው ክፍያ", slug: "mexc", why: "በስፖት እና በአብዛኞቹ የፊውቸርስ ውሎች ላይ 0% የሜከር ክፍያ።" },
    ],

    howEyebrow: "እንዴት ይሠራል",
    howTitle: "ሪፈራል ኮድ በሦስት ደረጃዎች መጠቀም",
    steps: [
      {
        title: "መድረክ ይምረጡ",
        text: "ከላይ ክፍያዎችን፣ ሌቨሬጅን እና አገልግሎቶችን ያነጻጽሩ፤ ከዚያም ከግብይት ስልትዎ ጋር የሚስማማውን መድረክ ገጽ ይክፈቱ።",
      },
      {
        title: "በሊንካችን ይመዝገቡ",
        text: "ሊንኩ ሪፈራሉን ራሱ ያያይዛል። ሌላ ቦታ አካውንት ከመክፈትዎ በፊት በኢሜይልዎ ወይም በስልክ ቁጥርዎ ይመዝገቡ።",
      },
      {
        title: "ያረጋግጡ እና ሽልማቶችን ያግኙ",
        text: "የማንነት ማረጋገጫን (KYC) ያጠናቅቁ፣ አካውንትዎን በ2FA ይጠብቁ እና በዳሽቦርድዎ ላይ የሚታዩትን የእንኳን ደህና መጡ ሽልማቶች ይመልከቱ።",
      },
    ],

    trustEyebrow: `ለምን ${site.name}`,
    trustTitle: "ለክሊክ ሳይሆን ለእምነት የተገነባ",
    trustCards: [
      { title: "የተረጋገጡ ማበረታቻዎች", text: "የእያንዳንዱን መድረክ የአዲስ ተጠቃሚ ማበረታቻ እናረጋግጣለን፤ የምንዘረዝረውም በእርግጥ ሊያገኙት የሚችሉትን ብቻ ነው።" },
      { title: "ወቅታዊ፣ ቀን የተጻፈባቸው እውነታዎች", text: "ክፍያዎችን፣ ሌቨሬጅን እና ፈቃዶችን በየጊዜው እንደገና እናረጋግጣለን፤ እያንዳንዱ ገጽ የተገመገመበትን ቀን ያሳያል።" },
      { title: "ግላዊነት ይቀድማል", text: "የማስታወቂያ ፒክሰሎችም ሆነ የማስታወቂያ ኩኪዎች የሉም። ትንታኔ የሚሠራው እርስዎ ከፈቀዱ ብቻ ነው።" },
      { title: "ፈጣን እና ግልጽ", text: "በማንኛውም ስልክ ላይ ወዲያው የሚከፈቱ ቀላል ገጾች – መጀመሪያ መልሱ፣ ከዚያ ዝርዝሩ።" },
      { title: "ሐቀኛ ጠንካራና ደካማ ጎኖች", text: "ድክመቶችን፣ ያጋጠሙ ክስተቶችን እና አካባቢያዊ ገደቦችን እንዘረዝራለን – የማስታወቂያ ቃላትን ብቻ አይደለም።" },
      { title: "ስጋት ይቀድማል", text: "ሌቨሬጅ ዲፖዚትን በፍጥነት ሊያጠፋ ይችላል። ይህንን በእያንዳንዱ ገጽ ላይ በግልጽ እንናገራለን።" },
    ],

    faqEyebrow: "ተደጋጋሚ ጥያቄዎች",
    faqTitle: "ሪፈራል ኮዶች – ተደጋጋሚ ጥያቄዎች",
    faqs: (reviewed) => [
      {
        q: "የክሪፕቶ ግብይት መድረክ ሪፈራል ኮድ ምንድን ነው?",
        a: "ሪፈራል ኮድ (የግብዣ ኮድ ወይም ሪፈራል ID ተብሎም ይጠራል) አዲስ የመድረክ አካውንትን መድረኩን ከጠቆመው ሰው ወይም ድረ-ገጽ ጋር የሚያገናኝ አጭር መለያ ነው። መድረኮች በዚህ ኮድ ሁለቱንም ወገኖች ይሸልማሉ – አዲስ ተጠቃሚዎች አብዛኛውን ጊዜ የእንኳን ደህና መጡ ሽልማት ወይም የግብይት ክፍያ ቅናሽ ያገኛሉ፣ ጋባዡ ደግሞ ከክፍያዎቹ ድርሻ ያገኛል።",
      },
      {
        q: "ሪፈራል ኮድ መጠቀም ምን ጥቅም አለው?",
        a: "በሪፈራል የሚመዘገቡ አዲስ ተጠቃሚዎች የመድረኩን የአዲስ ተጠቃሚ ማበረታቻ ያገኛሉ – ለምሳሌ Bybit ላይ እስከ 250 USDT የሪፈራል ሽልማት ወይም MEXC ላይ እስከ 10,000 USDT የአዲስ ተጠቃሚ ሽልማት። ጋባዡ ኮሚሽኑን በሚያጋራበት ቦታ ደግሞ ከግብይት ክፍያቸው የተወሰነው ይመለስላቸዋል፤ ለምሳሌ Gate ላይ ለአንድ ዓመት 10%። ለዚህ ምንም ተጨማሪ ክፍያ አይጠየቅም።",
      },
      {
        q: "አንድ ሪፈራል ኮድ ለስፖትም ለፊውቸርስም ግብይት ይሠራል?",
        a: "አዎ። Binance፣ OKX፣ Bybit፣ Bitget፣ Gate፣ KuCoin እና MEXC ላይ ሪፈራሉ የሚያያዘው ከአካውንትዎ ጋር እንጂ ከአንድ ምርት ጋር አይደለም። አንድ ምዝገባ የስፖት እና የፊውቸርስ ግብይትን ይሸፍናል – መድረኩ ካቀረባቸው ደግሞ ማርጂንን፣ ኦፕሽንስን ወይም ኮፒ ትሬዲንግን ጭምር።",
      },
      {
        q: "በሪፈራል ኮድ ከተመዘገብኩ ተጨማሪ እከፍላለሁ?",
        a: "አይ። በሪፈራል ሊንክ መመዝገብ ክፍያዎን በፍጹም አይጨምርም። እንደ መድረኩ እና እንደሚኖሩበት አካባቢ፣ ያለ ሪፈራል የማያገኙትን የክፍያ ቅናሽ ወይም የእንኳን ደህና መጡ ቦነስ እንኳ ሊያገኙ ይችላሉ።",
      },
      {
        q: "አካውንት ከከፈትኩ በኋላ ሪፈራል ኮድ ማስገባት ይቻላል?",
        a: "እንደ መድረኩ ይለያያል። Binance ገንዘብ ካላስገቡ ወይም ካልተገበያዩ ከተመዘገቡ በ30 ቀናት ውስጥ ኮድ እንዲያያይዙ ይፈቅዳል፤ MEXC ደግሞ ከተመዘገቡ በ30 ቀናት ውስጥ ጋባዥዎን ራስዎ እንዲያገናኙ ይፈቅዳል። KuCoin በእገዛ ማዕከሉ ውስጥ “Link Referrer” የሚል ጥያቄ አለው። Bybit፣ OKX እና Bitget ኮዱን የሚቀበሉት በምዝገባ ወቅት ብቻ ነው፤ Gate ደግሞ ኮድ በኋላ የሚጨመርበትን ምንም መንገድ አልገለጸም። አስተማማኙ መንገድ አካውንት ከመክፈትዎ በፊት ሊንኩን መጠቀም ነው።",
      },
      {
        q: "ዝቅተኛው የፊውቸርስ ክፍያ ያለው የትኛው የክሪፕቶ ግብይት መድረክ ነው?",
        a: `በመጨረሻው ግምገማችን (${reviewed}) ዝቅተኛው መደበኛ የፊውቸርስ ክፍያ የነበረው MEXC ነው፦ BTCUSDT ላይ 0% ሜከር (Maker) እና 0.02% ቴከር (Taker)። Binance፣ OKX እና Gate በመደበኛ ደረጃ 0.02% ሜከር / 0.05% ቴከር ያስከፍላሉ፣ Bybit 0.02% / 0.055%፣ Bitget እና KuCoin ደግሞ 0.02% / 0.06%።`,
      },
      {
        q: "ለክሪፕቶ ዴሪቬቲቭስ የሚሻለው የትኛው መድረክ ነው?",
        a: "በሚገበያዩት ነገር ይወሰናል። Binance ከፍተኛውን ሊኩዊዲቲ ያቀርባል፣ OKX ዝቅተኛ ክፍያን ከኦፕሽንስ ጋር ያጣምራል፣ Bybit ለፈጣን የፐርፔችዋል ግብይት የተሠራ ነው፣ Bitget ለኮፒ ትሬዲንግ፣ Gate ለአልትኮይን ፊውቸርስ፣ KuCoin ለቦቶች፣ MEXC ደግሞ ለዝቅተኛው ክፍያ።",
      },
      {
        q: "እነዚህ መድረኮች በአሜሪካ ይገኛሉ?",
        a: "በአብዛኛው አይገኙም። Binance፣ Bybit፣ Bitget፣ Gate፣ KuCoin እና MEXC አሜሪካን ገደብ በተጣለባቸው ወይም በተከለከሉ አገሮች ዝርዝር ውስጥ ያስቀምጣሉ፤ OKX ደግሞ በአንዳንድ የአሜሪካ ግዛቶች ላይ ገደብ ይጥላል። በዩናይትድ ኪንግደም፣ በካናዳ እና በአውሮፓ ኅብረት (EU) ውስጥም ተደራሽነቱ ይለያያል – እያንዳንዱ የመድረክ ገጽ የተከለከሉ አገሮችን ከመድረኩ የራሱ የአጠቃቀም ደንቦች ወስዶ ይዘረዝራል።",
      },
      {
        q: "ይህ መረጃ በምን ያህል ጊዜ ይሻሻላል?",
        a: `ክፍያዎችን፣ ሌቨሬጅን፣ ፈቃዶችን እና የገበያ መረጃን በየጊዜው እንደገና እናረጋግጣለን። እያንዳንዱ ገጽ የመጨረሻ ግምገማውን ቀን ያሳያል፤ አሁን ያለው መረጃ በ${reviewed} ተረጋግጧል።`,
      },
    ],
    countryFaq: null,

    ctaTitle: "የእንኳን ደህና መጡ ቦነስዎን ያግኙ",
    ctaText: "መድረክ ይምረጡ፣ በተረጋገጠ ሪፈራል ይመዝገቡ፤ ከዚያም ስፖት እና ፊውቸርስ በአንድ አካውንት ይገበያዩ።",
    ctaButton: "ሁሉንም ሪፈራል ኮዶች ይመልከቱ",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    // Four wordings, chosen per exchange, so the seven pages do not all start with "<Exchange> ሪፈራል ኮድ".
    title: (e, shortMonthYear) => {
      const n = e.name, r = named(e), c = e.referralCode, b = benefit(e), y = yearOf(shortMonthYear);
      return [
        () => fit(TITLE_MAX, `${r} ሪፈራል ኮድ ${c} (${shortMonthYear})፦ ${b}`, `${r} ሪፈራል ኮድ ${c} (${shortMonthYear})`, `${n} ሪፈራል ኮድ ${c} (${shortMonthYear})`, `${n} ሪፈራል ኮድ ${c}`),
        () => fit(TITLE_MAX, `${c} – ${r} ሪፈራል ኮድ እና ቦነስ (${shortMonthYear})`, `${c} – ${n} ሪፈራል ኮድ እና ቦነስ (${shortMonthYear})`, `${c} – ${n} ሪፈራል ኮድ`),
        () => fit(TITLE_MAX, `${b}፦ ${n} ሪፈራል ኮድ ${c}`, `የ${n} የምዝገባ ቦነስ ${y}፦ ሪፈራል ኮድ ${c}`, `${n} ሪፈራል ኮድ ${c} (${y})`),
        () => fit(TITLE_MAX, `የአጠቃቀም መመሪያ፦ ${r} ሪፈራል ኮድ ${c} (${shortMonthYear})`, `የአጠቃቀም መመሪያ፦ ${n} ሪፈራል ኮድ ${c} (${shortMonthYear})`, `የአጠቃቀም መመሪያ፦ ${n} ሪፈራል ኮድ ${c}`, `${n} ሪፈራል ኮድ ${c}`),
      ][variant(4, e.slug)]();
    },
    description: (e, monthYear) =>
      fit(
        DESC_MAX,
        `${e.name} ሪፈራል ኮድ፦ ${e.referralCode}። ${benefit(e)} – ኮዱ የት እንደሚገባ፣ የምዝገባ ደረጃዎች፣ KYC እና የስፖት እና የፊውቸርስ ክፍያዎች፤ በ${monthYear} የተረጋገጠ።`,
        `${e.name} ሪፈራል ኮድ፦ ${e.referralCode}። ${benefit(e)} – ኮዱ የት እንደሚገባ፣ የምዝገባ ደረጃዎች፣ KYC እና ክፍያዎች፤ በ${monthYear} የተረጋገጠ።`,
        `${e.name} ሪፈራል ኮድ፦ ${e.referralCode}። ${benefit(e)} – ኮዱ የት እንደሚገባ፣ የምዝገባ ደረጃዎች፣ KYC እና ክፍያዎች።`,
      ),
    keywords: (e) => {
      const same = (k: string) => k.toLowerCase().replace(/[\s-]/g, "");
      const reading = readingOf(e.slug, "am");
      const spelling = keywordSpellings[e.slug];
      const cn = e.referral.codeName;
      // The exchange's own English field name ("Referral ID") as people type it in Latin letters; an Amharic one repeats the main keyword and drops out.
      const own = /^[\x20-\x7E]+$/.test(cn) ? `${e.name} ${cn.toLowerCase().replace(/\bid\b/, "ID")}` : `${e.name} ${cn}`;
      return [
        `${e.name} ሪፈራል ኮድ`,
        `${e.name} ሪፈራል ኮድ ${e.referralCode}`,
        ...(reading ? [`${reading} ሪፈራል ኮድ`] : []),
        `${e.name} referral code`,
        `${e.name} የግብዣ ኮድ`,
        ...(reading ? [`${reading} የግብዣ ኮድ`] : []),
        ...(spelling ? [`${spelling} ሪፈራል ኮድ`] : []),
        own,
        `${e.name} ሪፈራል ID`,
        `${e.name} ሪፈራል ሊንክ`,
        `${e.name} የምዝገባ ቦነስ`,
        `${e.name} ላይ እንዴት መመዝገብ ይቻላል`,
        `${e.name} KYC`,
        `${e.name} ክፍያ`,
        `${e.name} ፊውቸርስ ክፍያ`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "ኮዱ በአጭሩ",
      benefits: "ጥቅሞችዎ",
      "use-code": "ኮዱን እንዴት እንደሚጠቀሙ",
      "how-to": "እንዴት እንደሚመዘገቡ",
      verification: "የማንነት ማረጋገጫ (KYC)",
      "key-facts": "ዋና ዋና እውነታዎች",
      fees: "ክፍያዎች",
      about: "ስለ መድረኩ",
      "pros-cons": "ጠንካራና ደካማ ጎኖች",
      "best-for": "ለማን ይስማማል",
      safety: "ደህንነት እና ተደራሽነት",
      faq: "ተደጋጋሚ ጥያቄዎች",
      sources: "ምንጮች",
      alternatives: "አማራጮች እና ንጽጽሮች",
    },
    onThisPage: "በዚህ ገጽ ላይ",
    crumbHome: "መነሻ",
    crumbCodes: "ሪፈራል ኮዶች",
    crumbPage: (e) => `${e.name} ሪፈራል ኮድ`,

    /* JSON-LD */
    offerName: (e) => `${e.name} ሪፈራል ኮድ ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}። አንድ ሪፈራል ${list(e.referralCovers)} ያካትታል።`,
    offerCategory: "በክሪፕቶ ግብይት መድረክ ላይ ምዝገባ",
    howToName: (e) => `${e.name} ላይ ${e.referralCode} በሚለው ሪፈራል ኮድ እንዴት መመዝገብ ይቻላል`,
    howToDescription: (e) => `መድረኩ ራሱ ባብራራው መሠረት የ${e.name} የምዝገባ ደረጃዎች፣ ${e.referralCode} የሚለው ሪፈራል ኮድ የሚገባበትን ቦታ ጨምሮ።`,

    /* Hero */
    updated: (date) => `በ${date} ተረጋግጦ ተሻሽሏል`,
    h1: (e) => `${named(e)} ሪፈራል ኮድ፦ ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – እንዲሁም {list(e.referralCovers)} ላይ የሚሠራ አንድ ሪፈራል። ይህ ገጽ ምን እንደሚያገኙ፣ ግብይት ምን ያህል እንደሚያስወጣ እና{" "}
        {named(e)} የሚስማማዎት መድረክ መሆን አለመሆኑን ያሳያል።
      </>
    ),
    quickAnswer: "ፈጣን መልስ",
    highlights: "ዋና ዋና ነጥቦች",
    chips: (e) => [
      `ስፖት ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `ፊውቸርስ ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `${shortLeverage(e)} ሌቨሬጅ`,
      `${e.market.markets} የዴሪቬቲቭስ ${e.market.markets === 1 ? "ገበያ" : "ገበያዎች"}`,
      `እ.ኤ.አ. ከ${e.founded} ጀምሮ`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `የ${e.name} ምዝገባዎ`,
    appliedByLink: "በዚህ ሊንክ ሪፈራሉ ራሱ ይያያዛል።",
    goesToOfficial: (domain) => `በቀጥታ ወደ ይፋዊው ${domain} ድረ-ገጽ ይወስድዎታል።`,
    codeLabel: "ሪፈራል ኮድ",
    noCodeToType: "ኮድ መጻፍ አያስፈልግም – በሊንኩ ይያያዛል",
    officialSite: (domain) => `ይፋዊ ድረ-ገጽ፦ ${domain}`,
    yourBenefits: "ጥቅሞችዎ",
    freeNeverRaises: "ነፃ ነው – ሪፈራል መጠቀም ክፍያዎን በፍጹም አይጨምርም",
    qrLabel: (e) => `QR ኮድ፦ ${e.referralCode} በሚለው ሪፈራል በ${e.name} መተግበሪያ ላይ ይመዝገቡ`,
    preferApp: "መተግበሪያውን ይመርጣሉ?",
    scan: (e) => (
      <>
        የ{e.name} መድረክን ለመክፈት በስልክዎ ካሜራ ስካን ያድርጉ
        {e.referralCode ? (
          <>
            {" "}
            – <strong>{e.referralCode}</strong> የሚለው ሪፈራል ተካትቷል
          </>
        ) : null}
        ። iOS እና Android ላይ ይሠራል።
      </>
    ),
    riskLine: (e, links) => (
      <>
        በሌቨሬጅ መገበያየት ከፍተኛ ስጋት አለው። {e.name} በሁሉም አገሮች አይገኝም – <a href="#safety">የተደራሽነት ክፍሉን</a> ወይም{" "}
        <Link href={links.alternatives}>የ{e.name} አማራጮችን</Link> ይመልከቱ።
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `${e.name} ሪፈራል ኮድ ${e.referralCode} በአጭሩ`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        በ{monthYear} የ{e.name} ሪፈራል ኮድ (የግብዣ ኮድ ተብሎም ይጠራል) <strong>{e.referralCode}</strong> ነው። ከታች ያለው ሰንጠረዥ ኮዱ ምን እንደሚሠራ፣ የት እንደሚገባ እና{" "}
        {e.name} ከአዲስ አካውንት ምን እንደሚጠይቅ ያጠቃልላል – እያንዳንዱ መስመር በ{date} ከ{e.name} የራሱ ገጾች ጋር ተመሳክሯል።
      </>
    ),
    codeFactsCaption: (e) => `${e.name} ሪፈራል ኮድ ${e.referralCode}፦ ዋና ዋና እውነታዎች`,
    codeFacts: (e, date) => [
      [`${e.name} ሪፈራል ኮድ`, <strong key="code">{e.referralCode}</strong>],
      [`${e.name} ኮዱን የሚጠራበት ስም`, e.referral.codeName],
      ["ለአዲስ ተጠቃሚ የሚሰጥ ጥቅም", benefit(e)],
      ["ኮዱ የሚገባበት ቦታ", e.referral.whereShort],
      ["ከምዝገባ በኋላ ማስገባት ይቻላል?", e.referral.afterSignupShort],
      ["የሚሠራባቸው ምርቶች", e.referralCovers.join("፣ ")],
      ["የማንነት ማረጋገጫ (KYC)", e.signup.kycShort],
      ["ወጪ", "ነፃ – ክፍያዎን አይጨምርም"],
      ["መጨረሻ የተረጋገጠው", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `በ${e.name} ሪፈራል የሚያገኟቸው ጥቅሞች`,
    benefitsIntro: (e) => (
      <>
        <strong>{e.referralCode}</strong> በሚለው የ{e.name} ሪፈራል ኮድ መመዝገብ ምንም ተጨማሪ ወጪ አያስከትልብዎትም። {e.name} በአሁኑ ጊዜ ለአዲስ አካውንቶች
        የሚያቀርበው የሚከተለው ነው። ያው ኮድ <strong>{list(e.referralCovers)}</strong> ላይ ይሠራል – ለስፖት እና ለፊውቸርስ የተለያየ ኮድ አያስፈልግዎትም።
      </>
    ),
    offerChecked: (date) => `የአዲስ ተጠቃሚ ማበረታቻ · የተረጋገጠው፦ ${date}`,
    appliedWhenRegistering: "በዚህ ሪፈራል ሲመዘገቡ ተግባራዊ ይሆናል",
    noExtraCost: "ተጨማሪ ወጪ የለም – በሪፈራል ምክንያት የግብይት ክፍያዎ በፍጹም አይጨምርም",
    oneReferralCovers: "አንድ ሪፈራል የሚያካትተው፦",
    claimOffer: (e) => `የ${e.name} የአዲስ ተጠቃሚ ማበረታቻዎን ያግኙ`,
    tasksTitle: (e) => `የ${e.name} የአዲስ ተጠቃሚ ማበረታቻ፦ ተግባራት እና ሽልማቶች`,
    tasksCaption: (e) => `የ${e.name} የአዲስ ተጠቃሚ ተግባራት እና የእያንዳንዳቸው ሽልማት`,
    task: "ተግባር",
    reward: "ሽልማት",
    tasksNote: (e, date) =>
      `${e.name} በ${date} በዘረዘረው መሠረት። ማበረታቻዎች እንደ አገሩ ይለያያሉ፣ በተደጋጋሚም ይቀየራሉ – ተግባራዊ የሚሆኑት ከተመዘገቡ በኋላ በአካውንትዎ ላይ የሚታዩት ሁኔታዎች ናቸው።`,

    /* How to use the code */
    useCodeTitle: (e) => `${e.name} ሪፈራል ኮድ ${e.referralCode} እንዴት መጠቀም ይቻላል?`,
    whereToEnter: (e) => `${e.name} ሪፈራል ኮድ የት ነው የሚገባው?`,
    forgotCode: "ኮዱን ረስተዋል? ከምዝገባ በኋላ ማስገባት",
    asInvited: "እንደ ተጋባዥ ተጠቃሚ የሚያገኙት",
    interfaceNote: (e) => (
      <>
        በጥቅስ ምልክት (“ ”) ውስጥ ያሉት የሳጥን እና የቁልፍ ስሞች እኛ ካረጋገጥናቸው የ{e.name} የእንግሊዝኛ ገጾች የተወሰዱ ናቸው፤ መድረኩን በሌላ ቋንቋ ከከፈቱት ስሞቹ ሊለያዩ
        ይችላሉ።
      </>
    ),

    /* Registration */
    howToTitle: (e) => `${e.name} ላይ ደረጃ በደረጃ እንዴት መመዝገብ ይቻላል?`,
    howToIntro: (e) => (
      <>
        {e.name} ላይ አካውንት ለመክፈት {orList(e.signup.methods)} መጠቀም ይችላሉ። ከታች ያሉት ደረጃዎች {e.name} ራሱ ያብራራቸው ናቸው፤{" "}
        <strong>{e.referralCode}</strong> የሚለው ሪፈራል ኮድ የሚገባበት ደረጃም ተጠቅሷል።
      </>
    ),
    startRegistration: (e) => `የ${e.name} ምዝገባዎን ይጀምሩ`,

    /* Verification */
    kycTitle: (e) => `${e.name} የማንነት ማረጋገጫ (KYC)`,
    verification: "ማረጋገጫ",
    minAge: "ዝቅተኛ ዕድሜ",
    documents: "ተቀባይነት ያላቸው ሰነዶች",

    /* Key facts */
    factsTitle: (e) => `${e.name} በአጭሩ`,
    founded: "የተመሠረተበት ዓመት (እ.ኤ.አ.)",
    headquarters: "ዋና መሥሪያ ቤት",
    futuresFees: "የፊውቸርስ ክፍያ (ሜከር / ቴከር)",
    spotFees: "የስፖት ክፍያ (ሜከር / ቴከር)",
    maxLeverage: "ከፍተኛ ሌቨሬጅ",
    assets: "ንብረቶች",
    openInterest: "ኦፕን ኢንተረስት",
    volume24h: "የ24 ሰዓት የዴሪቬቲቭስ የግብይት መጠን",
    users: "ተጠቃሚዎች",
    regulation: "ቁጥጥር",
    factsNote: (date) =>
      `ኦፕን ኢንተረስት (Open Interest)፣ የግብይት መጠን እና የገበያዎች ብዛት፦ የCoinMarketCap የዴሪቬቲቭስ ደረጃ ሰንጠረዥ፣ ${date}። ክፍያዎች፦ በግምገማው ቀን የነበረው መደበኛ ደረጃ።`,

    /* Fees */
    feesTitle: (e) => `${e.name} ክፍያ፦ ዝርዝር ማብራሪያ`,
    feesIntro: (e) =>
      `${e.name} የሜከር (Maker) እና የቴከር (Taker) ሞዴልን ይጠቀማል፦ በኦርደር ቡኩ ላይ ሊኩዊዲቲ የሚጨምሩ ኦርደሮች (ሊሚት ኦርደሮች) የሜከር ክፍያ ይከፍላሉ፤ ሊኩዊዲቲ የሚወስዱ ኦርደሮች (ማርኬት ኦርደሮች) ደግሞ የቴከር ክፍያ ይከፍላሉ። የ30 ቀን የግብይት መጠንዎ ወይም ይዞታዎ ሲጨምር ክፍያው እየቀነሰ ይሄዳል።`,
    market: "ገበያ",
    maker: "ሜከር",
    taker: "ቴከር",
    futuresRow: "ፊውቸርስ / ፐርፔችዋል",
    spotRow: "ስፖት",
    feesNote: (e, date) => `${e.name} ያወጣው መደበኛ (VIP ያልሆነ) ክፍያ፤ በ${date} የተረጋገጠ።`,
    funding: "በፐርፔችዋል ውሎች ላይ ያለው የፈንዲንግ ክፍያ (Funding Rate) የሚከፈለው በትሬደሮች መካከል እንጂ ለመድረኩ አይደለም።",
    liveSchedule: (e) => `የ${e.name} ወቅታዊ የክፍያ ሰንጠረዥ ይመልከቱ`,
    feesCompare: (e, others, links) => (
      <>
        እነዚህ ክፍያዎች ከሌሎች ጋር ሲነጻጸሩ እንዴት ናቸው? <Link href={`${links.alternatives}#fees`}>የ{e.name} አማራጮች ንጽጽራችን</Link> የ{e.name} ክፍያዎችን{" "}
        {list(others)} ከሚያስከፍሉት ጋር ጎን ለጎን ያስቀምጣል።
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `ስለ ${e.name}`,
    products: "ምርቶች",
    prosConsTitle: (e) => `የ${e.name} ጠንካራና ደካማ ጎኖች`,
    pros: "ጠንካራ ጎኖች",
    cons: "ደካማ ጎኖች",
    bestForTitle: (e) => `${e.name} ለማን ይስማማል?`,
    openAccount: (e) => `የ${e.name} አካውንትዎን ይክፈቱ`,
    notAMatch: (e, count, links, pairs) => (
      <>
        አይስማማዎትም? <Link href={links.alternatives}>{count} ምርጥ የ{e.name} አማራጮችን</Link> እና እያንዳንዳቸው በምን እንደሚሻሉ ይመልከቱ፤ ወይም {e.name} ከሌሎች
        መድረኮች ጋር አንድ ለአንድ ሲነጻጸር ይመልከቱ፦ <Link href={pairs[0].href}>{pairs[0].label}</Link> እና <Link href={pairs[1].href}>{pairs[1].label}</Link>።
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `${e.name} ደህንነቱ የተጠበቀ ነው?`,
    availability: "ተደራሽነት፦",
    closedWhereYouLive: (e, links) => (
      <>
        {e.name} በሚኖሩበት አገር አይገኝም? <Link href={`${links.alternatives}#countries`}>የ{e.name} አማራጮች ገጻችን ላይ ያለው የአገሮች ሰንጠረዥ</Link> ከሌሎቹ
        መድረኮች መካከል አገርዎን የሚቀበሉት የትኞቹ እንደሆኑ ያሳያል።
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `${e.name} ሪፈራል ኮድ እና ምዝገባ – ተደጋጋሚ ጥያቄዎች`,
    faqIntro: (e, count) =>
      `ስለ ${e.name} ሪፈራል ኮድ ${e.referralCode}፣ ስለ አካውንት መክፈትና ማረጋገጥ፣ ስለ አዲስ ተጠቃሚ ማበረታቻ እና ስለ ክፍያዎች ${count} ${count === 1 ? "ጥያቄ" : "ጥያቄዎች"}።`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "ምንጮች፦ እነዚህ እውነታዎች ከየት መጡ",
    sourcesIntro: (e, date) =>
      `ስለ ሪፈራል ኮዱ፣ ስለ ምዝገባ፣ ስለ ማንነት ማረጋገጫ፣ ስለ አዲስ ተጠቃሚ ማበረታቻ እና ስለ ክፍያዎች በዚህ ገጽ ላይ ያለው ሁሉ በ${date} ከ${e.name} የራሱ ድረ-ገጽ እና የእገዛ ማዕከል የተነበበ ነው። መድረኮች ማበረታቻዎችንና ክፍያዎችን ያለ ቅድመ ማስታወቂያ ይቀይራሉ፣ በተለያዩ አገሮችም የተለያዩ ሁኔታዎችን ያሳያሉ፤ ስለዚህ የመጨረሻው ቃል የሚከተሉት ገጾች ናቸው።`,

    /* Alternatives */
    alternativesTitle: (e) => `${e.name} አማራጮች`,
    alternativesIntro: (e, count, links) => (
      <>
        {e.name} እንደሚስማማዎት እርግጠኛ አይደሉም? የሚከተሉት በጣም ቅርብ የሆኑት አማራጮች ናቸው፤ እያንዳንዳቸው የራሳቸው የሪፈራል ምዝገባ አላቸው።{" "}
        <Link href={links.alternatives}>ሙሉው የ{e.name} አማራጮች ንጽጽር</Link> ሁሉንም {count} አማራጮች ከ{e.name} ጋር በክፍያ፣ በሌቨሬጅ፣ በምርቶች፣ በማንነት
        ማረጋገጫ እና በአገሮች ተደራሽነት ያነጻጽራል።
      </>
    ),
    headToHeadTitle: (e) => `${e.name}፦ አንድ ለአንድ ንጽጽር`,
    headToHeadIntro: (e) =>
      `በ${e.name} እና በሌላ አንድ መድረክ መካከል ለመምረጥ እያሰቡ ነው? እያንዳንዱ ጥንድ ስለ ክፍያ፣ ሌቨሬጅ፣ ምርቶች፣ አገሮች እና የሪፈራል ማበረታቻዎች የራሱ ንጽጽር አለው፦`,
    compareAll: (e, count) => `ሁሉንም ${count} የ${e.name} አማራጮች ያነጻጽሩ`,
    allComparisons: "ሁሉም የመድረኮች ንጽጽሮች →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>የስጋት ማስጠንቀቂያ፦</strong> የክሪፕቶ ዴሪቬቲቭስ ውስብስብ የፋይናንስ መሣሪያዎች ናቸው። ሌቨሬጅ ትርፍንም ኪሳራንም ያበዛል፤ ማርጂንዎንም በሙሉ በደቂቃዎች ውስጥ
        ሊያጡ ይችላሉ። ይህ ገጽ ለመረጃ ብቻ የቀረበ ነው፤ የፋይናንስ ምክር አይደለም። በሊንኮቻችን ከተመዘገቡ ኮሚሽን ልናገኝ እንችላለን –{" "}
        <Link href={disclosureHref}>የአፊሊዬት መግለጫ</Link> ገጻችንን ይመልከቱ።
      </>
    ),
    joinTitle: (e) => `በ3 ደቂቃዎች ውስጥ ${e.name} ላይ አካውንት ይክፈቱ`,
    joinText: (e) => `${benefit(e)}። ለስፖት እና ለፊውቸርስ አንድ ሪፈራል።`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `${name} ሪፈራል ኮድ`,
      signup: (name) => `${name} ላይ ምዝገባ እና ማረጋገጫ`,
      bonus: (name) => `${name} የእንኳን ደህና መጡ ቦነስ እና ሽልማቶች`,
      fees: (name) => `${name} ክፍያ እና ግብይት`,
      safety: () => "ደህንነት እና ተደራሽነት",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `የ${e.name} ሪፈራል ኮድ ምንድን ነው?`,
          a: `የ${e.name} ሪፈራል ኮድ ${e.referralCode} ነው። ${r.apply} ${e.name} ራሱ ኮዱን ${r.codeName} ብሎ ይጠራዋል።`,
        },
        { topic: "referral", q: `የ${e.name} ሪፈራል ኮድ የት ነው የሚገባው?`, a: r.whereToEnter },
        { topic: "referral", q: `ከተመዘገብኩ በኋላ የ${e.name} ሪፈራል ኮድ ማስገባት ይቻላል?`, a: r.afterSignup },
        { topic: "referral", q: `${e.referralCode} በሚለው የ${e.name} ሪፈራል ኮድ ምን አገኛለሁ?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `የ${e.name} ሪፈራል ኮድ ለስፖትም ለፊውቸርስም ይሠራል?`,
          a: `አዎ። ሪፈራሉ የሚያያዘው ከአንድ ምርት ጋር ሳይሆን ከ${e.name} አካውንትዎ ጋር ነው፤ ስለዚህ ${e.referralCode} በሚለው ኮድ አንድ ጊዜ መመዝገብ ${list(e.referralCovers)} ያካትታል።`,
        },
        {
          topic: "referral",
          q: `የ${e.name} ሪፈራል ኮድ መጠቀም ወጪ አለው?`,
          a: `አይ። ${e.referralCode} የሚለውን ኮድ ማስገባት ነፃ ነው፤ የግብይት ክፍያዎንም አይጨምርም። ${e.name} የሪፈራል ፕሮግራሙን ወጪ የሚሸፍነው ከራሱ የክፍያ ገቢ ነው።`,
        },
        {
          topic: "signup",
          q: `${e.name} ላይ እንዴት መመዝገብ ይቻላል?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${asSentence(st.title)}`).join(" ")} ለመመዝገብ ${orList(s.methods)} መጠቀም ይችላሉ።`,
        },
        { topic: "signup", q: `${e.name} ላይ የማንነት ማረጋገጫ (KYC) ያስፈልጋል?`, a: s.kyc },
        { topic: "signup", q: `${e.name} ለማረጋገጫ የትኞቹን ሰነዶች ይቀበላል?`, a: s.documents },
        { topic: "signup", q: `የ${e.name} አካውንት ለመክፈት ዕድሜዬ ስንት መሆን አለበት?`, a: s.minAge },
        {
          topic: "fees",
          q: `የ${e.name} የግብይት ክፍያ ስንት ነው?`,
          a: `በመደበኛ ደረጃ ${e.name} በስፖት ${e.spotFees.maker} ሜከር / ${e.spotFees.taker} ቴከር፣ በፐርፔችዋል ፊውቸርስ ደግሞ ${e.futuresFees.maker} ሜከር / ${e.futuresFees.taker} ቴከር ያስከፍላል።${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `${e.name} በየትኞቹ አገሮች አይገኝም?`, a: e.restricted },
      ];
    },
  },
};
