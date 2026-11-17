import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";
import { readingOf, withReading } from "./name-readings";

/**
 * Interface texts in Khmer. Same keys as `en.tsx`.
 *
 * Wording: "កូដណែនាំ" for referral code (main keyword, the name after it: "កូដណែនាំ Binance"), "លេខកូដណែនាំ",
 * "កូដអញ្ជើញ" and Latin "Referral Code" / "Referral ID" as second keywords, "វេទិកាជួញដូរ" (short "វេទិកា") for the
 * exchange, "កម្រៃ" / "កម្រៃជួញដូរ" for fees; Spot, Futures, Margin, Options, Leverage, Maker, Taker stay Latin. Address
 * "អ្នក", the site is "យើង". Exchange names stay Latin; the Khmer spelling ("Binance (បាយណាន់)") is added only in the title,
 * the H1, the lead and the keywords (`withReading`). Khmer writes no spaces between words: one space separates phrases
 * and stands on both sides of every Latin word, code and number. Sentences end with "។", the colon is "៖". Latin digits
 * with a decimal point (0.02%, 10,000 USDT, 34.1 ពាន់លានដុល្លារ). Field and button names of the exchanges stay in English,
 * because only the English interface was checked.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B និង C" */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} និង ${items[items.length - 1]}`);
/** "A, B ឬ C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} ឬ ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** A data text without its final mark, for places that add their own "។". */
const noStop = (s: string) => s.trim().replace(/[។.]$/, "");
/** A data text as a full sentence. */
const sentence = (s: string) => (/[។?!]$/.test(s.trim()) ? s.trim() : `${noStop(s)}។`);
/** Billions of US dollars: 34.1 → "34.1 ពាន់លានដុល្លារ". */
const billion = (n: string) => `${n} ពាន់លានដុល្លារ`;
/** Spellings people also type besides the fixed one (`readingOf`): keywords only, never in text. */
const keywordSpellings: Record<string, string> = { binance: "ប៊ីណាន់", okx: "អូខេអិច" };

export const km: Dictionary = {
  list,

  format: {
    billions: (n) => billion(n.toFixed(n >= 10 ? 1 : 2)),
    billionsExact: (n) => billion(n.toFixed(2)),
    billionsFloor: (n) => `ជាង ${billion(String(Math.floor(n)))}`,
  },

  meta: {
    siteTitle: `${site.name} – កូដណែនាំដែលបានផ្ទៀងផ្ទាត់ សម្រាប់វេទិកាជួញដូរគ្រីបតូ`,
    siteDescription:
      "កូដណែនាំផ្ទៀងផ្ទាត់រួចសម្រាប់ Binance, OKX, Bybit, Bitget, Gate, KuCoin និង MEXC – ប្រាក់រង្វាន់អ្នកប្រើប្រាស់ថ្មី និងការបង្វិលកម្រៃ Spot និង Futures ដោយតំណចុះឈ្មោះតែមួយ។ កម្រៃ, ព័ត៌មានសំខាន់ៗ និងគុណសម្បត្តិ គុណវិបត្តិដោយស្មោះត្រង់។",
  },

  layout: {
    skip: "រំលងទៅមាតិកាសំខាន់",
    mainNav: "ម៉ឺនុយមេ",
    nav: { exchanges: "វេទិកាជួញដូរ", benefits: "អត្ថប្រយោជន៍", compare: "ប្រៀបធៀប", howItWorks: "របៀបដំណើរការ", about: "អំពីយើង" },
    getCodes: "ទទួលកូដ",
    homeLabel: `${site.name} – ទំព័រដើម ${site.domain}`,
    language: "ភាសា",
    footerAbout:
      "កូដណែនាំដែលបានផ្ទៀងផ្ទាត់ សម្រាប់វេទិកាជួញដូរគ្រីបតូធំបំផុត – ប្រាក់រង្វាន់ស្វាគមន៍ និងការបង្វិលកម្រៃសម្រាប់ Spot និង Futures។ ព័ត៌មានច្បាស់លាស់ពីប្រភពផ្លូវការ។",
    referralCodes: "កូដណែនាំ",
    referralCodeOf: (name) => `កូដណែនាំ ${name}`,
    alternatives: "ជម្រើសជំនួស",
    alternativesOf: (name) => `ជម្រើសជំនួស ${name}`,
    guides: "មគ្គុទ្ទេសក៍",
    comparisons: "ប្រៀបធៀបវេទិកាជួញដូរ",
    howCodesWork: "របៀបដែលកូដណែនាំដំណើរការ",
    faq: "សំណួរដែលសួរញឹកញាប់",
    about: "អំពីយើង និងរបៀបផ្ទៀងផ្ទាត់",
    legal: "ផ្លូវច្បាប់",
    imprint: "ព័ត៌មានផ្លូវច្បាប់",
    privacy: "គោលការណ៍ឯកជនភាព",
    disclosure: "ការបញ្ជាក់អំពីកម្រៃជើងសារ",
    cookieSettings: "ការកំណត់ខូគី",
    risk: (
      <>
        <strong>ការព្រមានអំពីហានិភ័យ៖</strong> ការជួញដូរ Derivatives គ្រីបតូដោយប្រើ Leverage មានហានិភ័យខ្ពស់ណាស់ ហើយប្រាក់ដែលអ្នកបានដាក់ អាចបាត់បង់ទាំងអស់។ ជួញដូរតែជាមួយប្រាក់
        ដែលអ្នកអាចទទួលយកការបាត់បង់បាន។ គ្មានខ្លឹមសារណាមួយលើគេហទំព័រនេះ ជាដំបូន្មានផ្នែកហិរញ្ញវត្ថុ, វិនិយោគ ឬពន្ធដារឡើយ។
      </>
    ),
    affiliate: (
      <>
        <strong>ការបញ្ជាក់អំពីកម្រៃជើងសារ៖</strong> តំណភ្ជាប់មួយចំនួនជាតំណភ្ជាប់ណែនាំ។ ប្រសិនបើអ្នកចុះឈ្មោះតាមតំណទាំងនោះ យើងអាចទទួលបានកម្រៃជើងសារ
        ដោយអ្នកមិនចាំបាច់ចំណាយអ្វីបន្ថែមឡើយ។ កម្រៃជើងសារនេះ មិនដែលប៉ះពាល់ដល់ព័ត៌មាន ដែលយើងផ្សព្វផ្សាយទេ។ ឈ្មោះ និងឡូហ្គោរបស់វេទិកាជួញដូរ
        ជាពាណិជ្ជសញ្ញារបស់ម្ចាស់រៀងៗខ្លួន។ {site.name} មិនមានសម្ព័ន្ធភាពជាមួយម្ចាស់ទាំងនោះ ហើយក៏មិនទទួលបានការគាំទ្រពីពួកគេដែរ។
      </>
    ),
  },

  consent: {
    label: "ការយល់ព្រមលើការវិភាគ",
    text: (privacyHref) => (
      <>
        <strong>ការវិភាគ – អ្នកជាអ្នកសម្រេចចិត្ត។</strong> យើងចង់ប្រើ Google Analytics ដើម្បីដឹងថាទំព័រណាខ្លះមានអ្នកអាន។ Google Analytics
        ដាក់ខូគី និងផ្ញើទិន្នន័យការប្រើប្រាស់ទៅ Google ហើយចាប់ផ្តើមដំណើរការ លុះត្រាតែអ្នកអនុញ្ញាត។ មិនថាអ្នកជ្រើសរើសយ៉ាងណា ក៏គ្មានខូគីផ្សាយពាណិជ្ជកម្មដែរ។
        ព័ត៌មានលម្អិត៖ <Link href={privacyHref}>គោលការណ៍ឯកជនភាព</Link>។
      </>
    ),
    decline: "បដិសេធ",
    allow: "អនុញ្ញាតការវិភាគ",
  },

  notFound: {
    title: "ទំព័រនេះមិនមានទេ",
    text: "កូដណែនាំដែលអ្នកកំពុងស្វែងរក ប្រហែលជាបានផ្លាស់ទីតាំងហើយ។ សាកល្បងទំព័រណាមួយខាងក្រោម៖",
    back: "ត្រឡប់ទៅទំព័រដើម",
  },

  og: {
    footer: ["តំណផ្ទៀងផ្ទាត់រួច", "កម្រៃ និងព័ត៌មាន", "ប្រភពផ្លូវការ"],
    homeAlt: "RefCo – កូដណែនាំវេទិកាជួញដូរគ្រីបតូ ដែលបានផ្ទៀងផ្ទាត់",
    homeKicker: (monthYear) => `ធ្វើបច្ចុប្បន្នភាព ខែ${monthYear}`,
    homeTitle: "កូដណែនាំវេទិកាគ្រីបតូ ផ្ទៀងផ្ទាត់រួច។",
    exchangeAlt: "កូដណែនាំ, ជម្រើសជំនួស និងការប្រៀបធៀប វេទិកាជួញដូរគ្រីបតូ – RefCo",
    exchangeKicker: (monthYear) => `បានពិនិត្យ ខែ${monthYear}`,
    exchangeTitle: (e) => `កូដណែនាំ ${e.name}`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot និង Futures ដោយតំណភ្ជាប់តែមួយ`,
    versusBadge: "ប្រៀបធៀបមួយទល់មួយ",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `កម្រៃ Futures ${feesA} vs ${feesB} · Leverage ${leverageA}x vs ${leverageB}x · KYC, ប្រទេស និងប្រាក់រង្វាន់`,
  },

  blocks: {
    signUpOn: (name) => `ចុះឈ្មោះលើ ${name}`,
    signUp: "ចុះឈ្មោះ",
    details: "ព័ត៌មានលម្អិត",
    breadcrumb: "ផ្លូវរុករក",
    copy: "ចម្លង",
    copied: "បានចម្លង ✓",
    spotMakerTaker: "Spot Maker / Taker",
    futuresMakerTaker: "Futures Maker / Taker",
    maxLeverage: "Leverage អតិបរមា",
    since: "ឆ្នាំបង្កើត",
    tableCaption:
      "ការប្រៀបធៀបវេទិកាជួញដូរគ្រីបតូ តាមប្រូម៉ូសិនសម្រាប់អ្នកប្រើប្រាស់ថ្មី, កម្រៃ Spot និង Futures, Leverage និងទិន្នន័យទីផ្សារ",
    exchange: "វេទិកាជួញដូរ",
    newUserOffer: "ប្រូម៉ូសិនសម្រាប់អ្នកប្រើប្រាស់ថ្មី",
    futuresFees: "កម្រៃ Futures (Maker / Taker)",
    spotFees: "កម្រៃ Spot",
    openInterest: "Open Interest",
    markets: "ទីផ្សារ",
    action: "សកម្មភាព",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => `កូដណែនាំវេទិកាគ្រីបតូ (${monthYear})៖ ប្រាក់រង្វាន់ Spot និង Futures`,
    description: (monthYear) =>
      `កូដណែនាំផ្ទៀងផ្ទាត់រួច៖ Binance, OKX, Bybit, Bitget, Gate, KuCoin និង MEXC។ ប្រាក់រង្វាន់ស្វាគមន៍ និងការបង្វិលកម្រៃ Spot និង Futures ដោយតំណតែមួយ – ខែ${monthYear}។`,
    listName: "កូដណែនាំវេទិកាជួញដូរគ្រីបតូ សម្រាប់ Spot និង Futures",
    updated: (monthYear) => `ធ្វើបច្ចុប្បន្នភាពខែ${monthYear}`,
    h1: (
      <>
        កូដណែនាំវេទិកាជួញដូររូបិយប័ណ្ណគ្រីបតូ <span className="hl">ផ្ទៀងផ្ទាត់រួច</span> និងពន្យល់យ៉ាងច្បាស់។
      </>
    ),
    lead: (
      <>
        ទទួលប្រាក់រង្វាន់ស្វាគមន៍ និងការបង្វិលកម្រៃ លើវេទិកាជួញដូរគ្រីបតូធំបំផុតលើពិភពលោក – កូដណែនាំ (Referral Code) តែមួយសម្រាប់ Spot <em>និង</em> Futures។
        ព្រមទាំងព័ត៌មានដែលអ្នកត្រូវការ ដើម្បីជ្រើសរើស៖ កម្រៃ, Leverage, អាជ្ញាប័ណ្ណ និងការវាយតម្លៃគុណសម្បត្តិ គុណវិបត្តិដោយស្មោះត្រង់។
      </>
    ),
    browse: "មើលកូដណែនាំ",
    seeBenefits: "មើលអត្ថប្រយោជន៍ដែលអ្នកទទួលបាន",
    trust: (date) => [`បានពិនិត្យថ្ងៃទី ${date}`, "ប្រើតែតំណភ្ជាប់ផ្លូវការ", "ការវិភាគ លុះត្រាតែអ្នកយល់ព្រម"],
    featured: "វេទិកាជួញដូរលេចធ្លោ",
    ticketName: (name) => `កូដណែនាំ ${name}`,
    ticketTag: "SPOT + FUTURES",
    stats: ["វេទិកា Spot និង Futures ឈានមុខ", "Open Interest សរុប", "ទីផ្សារ Derivatives ដែលគ្របដណ្តប់", "កម្រៃ Maker ទាបបំផុត (MEXC)"],
    marketData: (date) => `ទិន្នន័យទីផ្សារ៖ ចំណាត់ថ្នាក់ Derivatives របស់ CoinMarketCap ទិន្នន័យថ្ងៃទី ${date}។`,

    benefitsEyebrow: "អត្ថប្រយោជន៍សម្រាប់អ្នក",
    benefitsTitle: `ហេតុអ្វីគួរចុះឈ្មោះដោយប្រើកូដណែនាំពី ${site.name}?`,
    benefitsLead: "វេទិកាដដែល កម្រៃដដែល – ប៉ុន្តែមានអត្ថប្រយោជន៍ សម្រាប់អ្នកប្រើប្រាស់ថ្មី ដែលអ្នកនឹងខកខាន ប្រសិនបើចុះឈ្មោះដោយផ្ទាល់។",
    benefits: [
      {
        title: "ប្រាក់រង្វាន់ស្វាគមន៍",
        text: "ទទួលប្រូម៉ូសិនរបស់វេទិកា សម្រាប់អ្នកប្រើប្រាស់ថ្មី – ប័ណ្ណបង្វិលកម្រៃ, ប្រាក់រង្វាន់ Futures និងរង្វាន់ពីភារកិច្ច ដែលមានតម្លៃរហូតដល់រាប់ពាន់ USDT។",
      },
      {
        title: "កម្រៃជួញដូរទាបជាង",
        text: "លើវេទិកាដែលអនុញ្ញាត កម្រៃជើងសារពីការណែនាំមួយផ្នែក ត្រឡប់មកអ្នកវិញជាការបង្វិលកម្រៃ លើរាល់ការជួញដូរ។",
      },
      {
        title: "Spot និង Futures ក្នុងតំណភ្ជាប់តែមួយ",
        text: "ការណែនាំភ្ជាប់ជាមួយគណនី – គ្របដណ្តប់ Spot, Futures, Margin និង Options។ មិនចាំបាច់មានកូដទីពីរទេ។",
      },
      { title: "គ្មានថ្លៃបន្ថែម", text: "ការណែនាំមិនដែលធ្វើឱ្យកម្រៃឡើងខ្ពស់ទេ។ អ្នកមានតែចំណេញ – វេទិកាជួញដូរជាអ្នកចំណាយលើកម្មវិធីណែនាំ។" },
      {
        title: "ទំព័រចុះឈ្មោះផ្លូវការ",
        text: "រាល់តំណភ្ជាប់ បើកគេហទំព័ររបស់វេទិកាជួញដូរផ្ទាល់។ គ្មានអន្តរការី ហើយគ្មានទិន្នន័យណាមួយចែករំលែកមកយើងទេ។",
      },
      {
        title: "ល្អបំផុតគឺប្រើពេលចុះឈ្មោះ",
        text: "វេទិកាខ្លះអនុញ្ញាតឱ្យបន្ថែមកូដ ក្នុងរយៈពេល 30 ថ្ងៃ ខ្លះទៀតមិនអនុញ្ញាតសោះ។ ប្រើតំណភ្ជាប់មុនពេលបង្កើតគណនី នោះអ្នកមានសុវត្ថិភាពលើគ្រប់វេទិកា។",
      },
    ],
    offersCaption: "ប្រូម៉ូសិនសម្រាប់អ្នកប្រើប្រាស់ថ្មី តាមវេទិកាជួញដូរនីមួយៗ",
    offersHead: ["វេទិកាជួញដូរ", "ប្រូម៉ូសិនអ្នកប្រើប្រាស់ថ្មី ពេលចុះឈ្មោះតាមការណែនាំ", "តំណភ្ជាប់តែមួយប្រើបានសម្រាប់"],
    claim: "ទទួលរង្វាន់",
    offersNote: (date) =>
      `ប្រូម៉ូសិនបានពិនិត្យថ្ងៃទី ${date}។ រង្វាន់ស្វាគមន៍ផ្អែកលើភារកិច្ច តម្រូវឱ្យផ្ទៀងផ្ទាត់អត្តសញ្ញាណ ហើយខុសគ្នាតាមតំបន់ – លក្ខខណ្ឌបច្ចុប្បន្ន បង្ហាញលើទំព័រចុះឈ្មោះរបស់វេទិកានីមួយៗ។`,

    exchangesEyebrow: "កូដណែនាំ",
    exchangesTitle: "ជ្រើសរើសវេទិកាជួញដូរ",
    exchangesLead: "ទំព័រនីមួយៗពន្យល់អំពីការណែនាំ, កម្រៃជួញដូរ និងថាវេទិកានោះសមនឹងនរណា – ដើម្បីឱ្យអ្នកចុះឈ្មោះតែម្តង លើវេទិកាដែលត្រូវ។",
    sideBySide: "ប្រៀបធៀបទន្ទឹមគ្នា",
    notSure: "មិនទាន់ដឹងថាជ្រើសមួយណា?",
    notSureText: (count) => `ប្រៀបធៀបវេទិកាជួញដូរទាំង ${count} តាមកម្រៃ, Leverage និង Open Interest ក្នុងតារាងតែមួយ។`,
    compareExchanges: "ប្រៀបធៀបវេទិកាជួញដូរ",

    compareTitle: "ប្រៀបធៀបវេទិកាជួញដូរគ្រីបតូ៖ Spot និង Futures",
    compareLead:
      "ប្រូម៉ូសិនសម្រាប់អ្នកប្រើប្រាស់ថ្មី, កម្រៃស្តង់ដារ (មិនមែន VIP) សម្រាប់ Spot និង Futures, Leverage និងជម្រៅទីផ្សារ – មើលឃើញភ្លាមៗក្នុងតារាងតែមួយ។",
    compareNote: (reviewed, market) =>
      `កម្រៃ៖ កម្រិតស្តង់ដារ តាមការប្រកាសរបស់វេទិកានីមួយៗ បានពិនិត្យថ្ងៃទី ${reviewed}។ Open Interest និងចំនួនទីផ្សារ៖ CoinMarketCap ថ្ងៃទី ${market}។ កម្រៃអាចផ្លាស់ប្តូរ – ពិនិត្យលើវេទិកាជួញដូរម្តងទៀត មុនពេលជួញដូរ។`,
    versusStrip: {
      title: "ប្រៀបធៀបវេទិកាជួញដូរពីរ មួយទល់មួយ",
      text: (pairs, hubHref) => (
        <>
          ការប្រៀបធៀបមួយទល់មួយ {pairs} ដាក់កម្រៃ, Leverage, ផលិតផល, ប្រទេស, KYC និងប្រូម៉ូសិនណែនាំនៅទន្ទឹមគ្នា –{" "}
          <Link href={hubHref}>ការប្រៀបធៀបវេទិកាជួញដូរទាំងអស់</Link>។
        </>
      ),
    },
    alternativesStrip: {
      title: "កំពុងរកជម្រើសជំនួសវេទិកាដែលអ្នកកំពុងប្រើ?",
      text: (others) =>
        `ការប្រៀបធៀបនីមួយៗ វាស់វេទិកាមួយធៀបនឹងវេទិកា ${others} ផ្សេងទៀត៖ កម្រៃ, Leverage, ផលិតផល, ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ និងប្រទេសដែលវេទិកានោះទទួលយក។`,
    },

    picksEyebrow: "ចម្លើយខ្លី",
    picksTitle: "វេទិកាជួញដូរមួយណាល្អបំផុតសម្រាប់អ្នក?",
    picks: [
      { label: "Liquidity ជ្រៅបំផុត", slug: "binance", why: "Open Interest និងបរិមាណជួញដូរ Futures ធំជាងគេលើពិភពលោក។" },
      {
        label: "កម្រៃទាប និង Options",
        slug: "okx",
        why: "0.08% / 0.10% សម្រាប់ Spot, 0.03% សម្រាប់ Options និងភស្តុតាងទុនបម្រុង (Proof of Reserves) ប្រចាំខែ។",
      },
      { label: "ជួញដូរ Futures សកម្មលើទូរសព្ទ", slug: "bybit", why: "ប្រព័ន្ធដំណើរការលឿន ហើយជាកម្មវិធីជួញដូរមួយ ក្នុងចំណោមកម្មវិធីល្អបំផុត។" },
      { label: "Copy Trading", slug: "bitget", why: "ចម្លងការជួញដូររបស់អ្នកជួញដូរ Futures ដែលមានបទពិសោធន៍ ដោយស្វ័យប្រវត្តិ។" },
      { label: "Altcoin ច្រើនបំផុត", slug: "gate", why: "ទ្រព្យសកម្ម 5,400+ និង Futures លើថូខឹនតូចៗ។" },
      { label: "Bot ជួញដូរ", slug: "kucoin", why: "Bot ជួញដូរឥតគិតថ្លៃ សម្រាប់ Spot និង Futures។" },
      { label: "កម្រៃទាបបំផុត", slug: "mexc", why: "កម្រៃ Maker 0% លើ Spot និងកិច្ចសន្យា Futures ភាគច្រើន។" },
    ],

    howEyebrow: "របៀបដំណើរការ",
    howTitle: "ប្រើកូដណែនាំក្នុងបីជំហាន",
    steps: [
      {
        title: "ជ្រើសរើសវេទិកាជួញដូរ",
        text: "ប្រៀបធៀបកម្រៃ, Leverage និងមុខងារខាងលើ រួចបើកទំព័ររបស់វេទិកា ដែលត្រូវនឹងរបៀបជួញដូររបស់អ្នក។",
      },
      {
        title: "ចុះឈ្មោះតាមតំណភ្ជាប់របស់យើង",
        text: "កូដណែនាំភ្ជាប់ឱ្យដោយស្វ័យប្រវត្តិ។ ចុះឈ្មោះដោយប្រើអ៊ីមែល ឬលេខទូរសព្ទ មុនពេលបង្កើតគណនីនៅកន្លែងផ្សេង។",
      },
      {
        title: "ផ្ទៀងផ្ទាត់ និងទទួលរង្វាន់",
        text: "បំពេញការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ (KYC) ការពារគណនីដោយ 2FA រួចពិនិត្យរង្វាន់ស្វាគមន៍ ដែលបង្ហាញក្នុងផ្ទាំងគ្រប់គ្រង។",
      },
    ],

    trustEyebrow: `ហេតុអ្វីជ្រើស ${site.name}`,
    trustTitle: "បង្កើតឡើងដើម្បីភាពជឿជាក់ មិនមែនដើម្បីការចុច",
    trustCards: [
      { title: "ប្រូម៉ូសិនដែលបានផ្ទៀងផ្ទាត់", text: "យើងពិនិត្យប្រូម៉ូសិនរបស់វេទិកានីមួយៗ សម្រាប់អ្នកប្រើប្រាស់ថ្មី ហើយដាក់បង្ហាញតែអ្វី ដែលអ្នកអាចទទួលបានពិតប្រាកដ។" },
      { title: "ព័ត៌មានថ្មី មានកាលបរិច្ឆេទ", text: "យើងពិនិត្យកម្រៃ, Leverage និងអាជ្ញាប័ណ្ណឡើងវិញជាប្រចាំ ហើយទំព័រនីមួយៗបង្ហាញកាលបរិច្ឆេទពិនិត្យ។" },
      { title: "ឯកជនភាពមុនគេ", text: "គ្មាន Pixel ផ្សាយពាណិជ្ជកម្ម និងគ្មានខូគីផ្សាយពាណិជ្ជកម្ម។ ការវិភាគដំណើរការ លុះត្រាតែអ្នកអនុញ្ញាត។" },
      { title: "លឿន និងច្បាស់", text: "ទំព័រស្រាលៗ ដែលបើកភ្លាមលើទូរសព្ទគ្រប់ប្រភេទ – ចម្លើយមកមុន ព័ត៌មានលម្អិតមកក្រោយ។" },
      { title: "គុណសម្បត្តិ និងគុណវិបត្តិពិតៗ", text: "យើងរៀបរាប់ចំណុចខ្សោយ, ឧប្បត្តិហេតុ និងការរឹតត្បិតតាមតំបន់ – មិនមែនតែពាក្យផ្សព្វផ្សាយទេ។" },
      { title: "ហានិភ័យមុនគេ", text: "Leverage អាចលុបបំបាត់ប្រាក់ដែលបានដាក់ យ៉ាងឆាប់រហ័ស។ យើងនិយាយរឿងនេះយ៉ាងច្បាស់លើគ្រប់ទំព័រ។" },
    ],

    faqEyebrow: "សំណួរដែលសួរញឹកញាប់",
    faqTitle: "កូដណែនាំ – សំណួរដែលសួរញឹកញាប់",
    faqs: (reviewed) => [
      {
        q: "កូដណែនាំវេទិកាជួញដូរគ្រីបតូ (Referral Code) ជាអ្វី?",
        a: "កូដណែនាំ (ហៅផងដែរថា លេខកូដណែនាំ, កូដអញ្ជើញ ឬ Referral ID) ជាលេខសម្គាល់ខ្លីមួយ ដែលភ្ជាប់គណនីថ្មីលើវេទិកាជួញដូរ ទៅនឹងបុគ្គល ឬគេហទំព័រដែលបានណែនាំ។ វេទិកាជួញដូរប្រើកូដនេះ ដើម្បីផ្តល់រង្វាន់ដល់ភាគីទាំងពីរ – ជាធម្មតា អ្នកប្រើប្រាស់ថ្មីទទួលបានរង្វាន់ស្វាគមន៍ ឬការបញ្ចុះកម្រៃជួញដូរ ហើយអ្នកណែនាំទទួលបានចំណែកពីកម្រៃ។",
      },
      {
        q: "កូដណែនាំផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះ?",
        a: "អ្នកដែលចុះឈ្មោះតាមការណែនាំ មានសិទ្ធិទទួលប្រូម៉ូសិនរបស់វេទិកា សម្រាប់អ្នកប្រើប្រាស់ថ្មី – ឧទាហរណ៍ រង្វាន់ណែនាំរហូតដល់ 250 USDT លើ Bybit ឬរង្វាន់អ្នកប្រើប្រាស់ថ្មីរហូតដល់ 10,000 USDT លើ MEXC – ហើយប្រសិនបើអ្នកណែនាំចែករំលែកកម្រៃជើងសារ អ្នកក៏បានកម្រៃជួញដូរមួយផ្នែក ត្រឡប់មកវិញដែរ ដូចជា 10% រយៈពេលមួយឆ្នាំលើ Gate។ អ្នកមិនចំណាយអ្វីបន្ថែមឡើយ។",
      },
      {
        q: "កូដណែនាំតែមួយប្រើបានទាំងការជួញដូរ Spot និង Futures ដែរឬទេ?",
        a: "បាន។ លើ Binance, OKX, Bybit, Bitget, Gate, KuCoin និង MEXC ការណែនាំភ្ជាប់ជាមួយគណនី មិនមែនជាមួយផលិតផលតែមួយទេ។ ការចុះឈ្មោះតែម្តងគ្របដណ្តប់ការជួញដូរ Spot និង Futures – ព្រមទាំង Margin, Options ឬ Copy Trading លើវេទិកាដែលមានផលិតផលទាំងនោះ។",
      },
      {
        q: "ចុះឈ្មោះដោយប្រើកូដណែនាំ ត្រូវបង់ថ្លៃច្រើនជាងដែរឬទេ?",
        a: "មិនត្រូវទេ។ ការចុះឈ្មោះតាមតំណភ្ជាប់ណែនាំ មិនដែលធ្វើឱ្យកម្រៃរបស់អ្នកកើនឡើងឡើយ។ អាស្រ័យលើវេទិកា និងតំបន់របស់អ្នក អ្នកថែមទាំងអាចទទួលបានការបញ្ចុះកម្រៃ ឬប្រាក់រង្វាន់ស្វាគមន៍ ដែលអ្នកមិនអាចទទួលបាន បើគ្មានការណែនាំ។",
      },
      {
        q: "កូដណែនាំ អាចបន្ថែមក្រោយបង្កើតគណនីបានដែរឬទេ?",
        a: "អាស្រ័យលើវេទិកា។ Binance អនុញ្ញាតឱ្យភ្ជាប់កូដក្នុងរយៈពេល 30 ថ្ងៃ ក្រោយចុះឈ្មោះ ប្រសិនបើអ្នកមិនទាន់ដាក់ប្រាក់ ឬជួញដូរ ហើយ MEXC អនុញ្ញាតឱ្យអ្នកភ្ជាប់អ្នកណែនាំដោយខ្លួនឯង ក្នុងរយៈពេល 30 ថ្ងៃ ក្រោយចុះឈ្មោះ។ KuCoin មានសំណើ “Link Referrer” (ភ្ជាប់អ្នកណែនាំ) នៅក្នុងមជ្ឈមណ្ឌលជំនួយ។ Bybit, OKX និង Bitget ទទួលកូដតែក្នុងពេលចុះឈ្មោះប៉ុណ្ណោះ ហើយ Gate មិនបានបញ្ជាក់វិធីណាមួយ សម្រាប់បន្ថែមកូដនៅពេលក្រោយទេ។ វិធីមានសុវត្ថិភាពគឺប្រើតំណភ្ជាប់ មុនពេលបង្កើតគណនី។",
      },
      {
        q: "វេទិកាជួញដូរគ្រីបតូមួយណាមានកម្រៃ Futures ទាបបំផុត?",
        a: `នៅការពិនិត្យចុងក្រោយរបស់យើង (ថ្ងៃទី ${reviewed}) MEXC មានកម្រៃ Futures ស្តង់ដារទាបបំផុត៖ Maker 0% និង Taker 0.02% លើ BTCUSDT។ Binance, OKX និង Gate គិត Maker 0.02% / Taker 0.05% នៅកម្រិតស្តង់ដារ។ Bybit គិត 0.02% / 0.055% ហើយ Bitget និង KuCoin គិត 0.02% / 0.06%។`,
      },
      {
        q: "វេទិកាជួញដូរមួយណាល្អបំផុតសម្រាប់ Derivatives គ្រីបតូ?",
        a: "អាស្រ័យលើអ្វីដែលអ្នកជួញដូរ។ Binance មាន Liquidity ជ្រៅបំផុត។ OKX ផ្សំកម្រៃទាបជាមួយ Options។ Bybit រចនាឡើងសម្រាប់ការជួញដូរកិច្ចសន្យា Perpetual យ៉ាងលឿន។ Bitget សម្រាប់ Copy Trading, Gate សម្រាប់ Futures លើ Altcoin, KuCoin សម្រាប់ Bot ជួញដូរ និង MEXC សម្រាប់កម្រៃទាបបំផុត។",
      },
      {
        q: "វេទិកាជួញដូរទាំងនេះ ប្រើបាននៅអាមេរិកដែរឬទេ?",
        a: "ភាគច្រើនមិនបានទេ។ Binance, Bybit, Bitget, Gate, KuCoin និង MEXC ដាក់សហរដ្ឋអាមេរិក ក្នុងបញ្ជីប្រទេសរឹតត្បិត ឬប្រទេសហាមឃាត់ ហើយ OKX រឹតត្បិតដែនយុត្តាធិការមួយចំនួននៅអាមេរិក។ លទ្ធភាពប្រើប្រាស់ក៏ខុសគ្នាដែរ នៅអង់គ្លេស, កាណាដា និងសហភាពអឺរ៉ុប – ទំព័រវេទិកានីមួយៗរាយបញ្ជីប្រទេសរឹតត្បិត តាមលក្ខខណ្ឌផ្ទាល់របស់វេទិកានោះ។",
      },
      {
        q: "ព័ត៌មាននេះ ធ្វើបច្ចុប្បន្នភាពញឹកញាប់ប៉ុណ្ណា?",
        a: `យើងពិនិត្យកម្រៃ, Leverage, អាជ្ញាប័ណ្ណ និងទិន្នន័យទីផ្សារឡើងវិញជាប្រចាំ។ ទំព័រនីមួយៗ បង្ហាញកាលបរិច្ឆេទពិនិត្យចុងក្រោយ ហើយទិន្នន័យបច្ចុប្បន្នបានពិនិត្យនៅថ្ងៃទី ${reviewed}។`,
      },
    ],
    countryFaq: null,

    ctaTitle: "ទទួលប្រាក់រង្វាន់ស្វាគមន៍",
    ctaText: "ជ្រើសរើសវេទិកាជួញដូរ ចុះឈ្មោះតាមការណែនាំដែលបានផ្ទៀងផ្ទាត់ ហើយជួញដូរ Spot និង Futures ដោយគណនីតែមួយ។",
    ctaButton: "មើលកូដណែនាំទាំងអស់",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    title: (e, shortMonthYear) => `កូដណែនាំ ${withReading(e, "km")} ${e.referralCode} (${shortMonthYear})៖ ${benefit(e)}`,
    description: (e, monthYear) =>
      `កូដណែនាំ ${e.name}៖ ${e.referralCode}។ ${noStop(benefit(e))} – កន្លែងដាក់កូដ, ជំហានចុះឈ្មោះ, KYC និងកម្រៃជួញដូរ បានពិនិត្យខែ${monthYear}។`,
    keywords: (e) => {
      const same = (k: string) => k.toLowerCase().replace(/\s/g, "");
      const reading = readingOf(e.slug, "km");
      const spelling = keywordSpellings[e.slug];
      const cn = e.referral.codeName;
      // The exchange's own English field name ("Referral ID") follows the name as people type it in English; a Khmer one leads.
      const own = /^[\x20-\x7E]+$/.test(cn) ? `${e.name} ${cn.toLowerCase()}` : `${cn} ${e.name}`;
      return [
        `កូដណែនាំ ${e.name}`,
        `កូដណែនាំ ${e.name} ${e.referralCode}`,
        ...(reading ? [`កូដណែនាំ ${reading}`] : []),
        ...(spelling ? [`កូដណែនាំ ${spelling}`] : []),
        `លេខកូដណែនាំ ${e.name}`,
        `កូដអញ្ជើញ ${e.name}`,
        `${e.name} referral code`,
        `${e.name} referral id`,
        own,
        `${e.name} ខ្មែរ`,
        `តំណភ្ជាប់ណែនាំ ${e.name}`,
        `របៀបដាក់កូដណែនាំ ${e.name}`,
        `របៀបបង្កើតគណនី ${e.name}`,
        `របៀបចុះឈ្មោះ ${e.name}`,
        `ប្រាក់រង្វាន់ចុះឈ្មោះ ${e.name}`,
        `KYC ${e.name}`,
        `កម្រៃជួញដូរ ${e.name}`,
        `កម្រៃ Futures ${e.name}`,
        `របៀបត្រេត ${e.name}`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "ព័ត៌មានសង្ខេបអំពីកូដ",
      benefits: "អត្ថប្រយោជន៍សម្រាប់អ្នក",
      "use-code": "របៀបប្រើកូដ",
      "how-to": "របៀបចុះឈ្មោះ",
      verification: "ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ (KYC)",
      "key-facts": "ព័ត៌មានសំខាន់ៗ",
      fees: "កម្រៃជួញដូរ",
      about: "អំពីវេទិកា",
      "pros-cons": "គុណសម្បត្តិ និងគុណវិបត្តិ",
      "best-for": "សមនឹងនរណា",
      safety: "សុវត្ថិភាព និងប្រទេសដែលប្រើបាន",
      faq: "សំណួរដែលសួរញឹកញាប់",
      sources: "ប្រភព",
      alternatives: "ជម្រើសជំនួស និងការប្រៀបធៀប",
    },
    onThisPage: "នៅលើទំព័រនេះ",
    crumbHome: "ទំព័រដើម",
    crumbCodes: "កូដណែនាំ",
    crumbPage: (e) => `កូដណែនាំ ${e.name}`,

    /* JSON-LD */
    offerName: (e) => `កូដណែនាំ ${e.name} ${e.referralCode}`,
    offerDescription: (e) => `${noStop(benefit(e))}។ ការណែនាំតែមួយគ្របដណ្តប់ ${list(e.referralCovers)}។`,
    offerCategory: "ការចុះឈ្មោះលើវេទិកាជួញដូរគ្រីបតូ",
    howToName: (e) => `របៀបចុះឈ្មោះលើ ${e.name} ដោយប្រើកូដណែនាំ ${e.referralCode}`,
    howToDescription: (e) => `ជំហានចុះឈ្មោះលើ ${e.name} តាមការពន្យល់របស់វេទិកាផ្ទាល់ រួមទាំងកន្លែងដែលត្រូវបញ្ចូលកូដណែនាំ ${e.referralCode}។`,

    /* Hero */
    updated: (date) => `បានពិនិត្យ និងធ្វើបច្ចុប្បន្នភាពថ្ងៃទី ${date}`,
    h1: (e) => `កូដណែនាំ ${withReading(e, "km")}៖ ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – បូកនឹងកូដណែនាំ (Referral Code) តែមួយសម្រាប់ {list(e.referralCovers)}។ ទំព័រនេះបង្ហាញថាអ្នកទទួលបានអ្វីខ្លះ
        ការជួញដូរត្រូវចំណាយកម្រៃប៉ុន្មាន និងថា {withReading(e, "km")} ជាវេទិកាជួញដូររូបិយប័ណ្ណគ្រីបតូ ដែលសមនឹងអ្នកឬអត់។
      </>
    ),
    quickAnswer: "ចម្លើយខ្លី",
    highlights: "ចំណុចលេចធ្លោ",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `Leverage ${shortLeverage(e)}`,
      `ទីផ្សារ Derivatives ${e.market.markets}`,
      `បង្កើតឆ្នាំ ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `ចុះឈ្មោះគណនី ${e.name}`,
    appliedByLink: "តំណភ្ជាប់នេះ ភ្ជាប់កូដណែនាំឱ្យដោយស្វ័យប្រវត្តិ។",
    goesToOfficial: (domain) => `នាំទៅគេហទំព័រផ្លូវការ ${domain} ដោយផ្ទាល់។`,
    codeLabel: "កូដណែនាំ",
    noCodeToType: "មិនចាំបាច់វាយកូដ – ភ្ជាប់តាមតំណភ្ជាប់",
    officialSite: (domain) => `គេហទំព័រផ្លូវការ៖ ${domain}`,
    yourBenefits: "អត្ថប្រយោជន៍សម្រាប់អ្នក",
    freeNeverRaises: "ឥតគិតថ្លៃ – ការណែនាំមិនដែលធ្វើឱ្យកម្រៃកើនឡើងទេ",
    qrLabel: (e) => `កូដ QR៖ ចុះឈ្មោះក្នុងកម្មវិធី ${e.name} ដោយប្រើកូដណែនាំ ${e.referralCode}`,
    preferApp: "ចូលចិត្តប្រើកម្មវិធី?",
    scan: (e) => (
      <>
        ស្កេនដោយកាមេរ៉ាទូរសព្ទ ដើម្បីបើក {e.name}
        {e.referralCode ? (
          <>
            {" "}
            – រួមទាំងកូដណែនាំ <strong>{e.referralCode}</strong>
          </>
        ) : null}
        ។ ប្រើបានទាំងលើ iOS និង Android។
      </>
    ),
    riskLine: (e, links) => (
      <>
        ការជួញដូរដោយប្រើ Leverage មានហានិភ័យខ្ពស់។ {e.name} មិនបើកឱ្យប្រើនៅគ្រប់ប្រទេសទេ – មើល<a href="#safety">ប្រទេសដែលប្រើបាន</a> ឬ
        <Link href={links.alternatives}>ជម្រើសជំនួស {e.name}</Link>។
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `កូដណែនាំ ${e.name} ${e.referralCode} ជាសង្ខេប`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        កូដណែនាំ {e.name} (លេខកូដណែនាំ ឬកូដអញ្ជើញ) សម្រាប់ខែ{monthYear} គឺ <strong>{e.referralCode}</strong>។ តារាងខាងក្រោមសង្ខេបថាកូដនេះធ្វើអ្វី
        ត្រូវដាក់នៅកន្លែងណា និង {e.name} តម្រូវអ្វីខ្លះពីគណនីថ្មី – យើងផ្ទៀងផ្ទាត់បន្ទាត់នីមួយៗ ជាមួយទំព័រផ្ទាល់របស់ {e.name} នៅថ្ងៃទី {date}។
      </>
    ),
    codeFactsCaption: (e) => `កូដណែនាំ ${e.name} ${e.referralCode}៖ ព័ត៌មានសំខាន់ៗ`,
    codeFacts: (e, date) => [
      [`កូដណែនាំ ${e.name}`, <strong key="code">{e.referralCode}</strong>],
      [`ឈ្មោះដែល ${e.name} ប្រើ`, e.referral.codeName],
      ["អត្ថប្រយោជន៍សម្រាប់អ្នកប្រើប្រាស់ថ្មី", benefit(e)],
      ["ដាក់កូដនៅកន្លែងណា", e.referral.whereShort],
      ["អាចបន្ថែមក្រោយចុះឈ្មោះបានទេ?", e.referral.afterSignupShort],
      ["ប្រើបានសម្រាប់", list(e.referralCovers)],
      ["ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ (KYC)", e.signup.kycShort],
      ["ការចំណាយ", "ឥតគិតថ្លៃ – មិនធ្វើឱ្យកម្រៃកើនឡើងទេ"],
      ["ពិនិត្យចុងក្រោយ", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `អត្ថប្រយោជន៍ពេលប្រើកូដណែនាំ ${e.name}`,
    benefitsIntro: (e) => (
      <>
        ការចុះឈ្មោះដោយប្រើកូដណែនាំ {e.name} <strong>{e.referralCode}</strong> មិនតម្រូវឱ្យអ្នកចំណាយអ្វីបន្ថែមទេ។
        ខាងក្រោមនេះជាអ្វីដែល {e.name} ផ្តល់ជូនគណនីថ្មីនាពេលបច្ចុប្បន្ន។ កូដដដែលនេះប្រើបានសម្រាប់ <strong>{list(e.referralCovers)}</strong> – អ្នកមិនចាំបាច់មានកូដដាច់ដោយឡែកសម្រាប់ Spot
        និង Futures ទេ។
      </>
    ),
    offerChecked: (date) => `ប្រូម៉ូសិនសម្រាប់អ្នកប្រើប្រាស់ថ្មី · បានពិនិត្យថ្ងៃទី ${date}`,
    appliedWhenRegistering: "ទទួលបាន ពេលអ្នកចុះឈ្មោះតាមការណែនាំនេះ",
    noExtraCost: "គ្មានថ្លៃបន្ថែម – ការណែនាំ មិនដែលធ្វើឱ្យកម្រៃជួញដូរខ្ពស់ជាងមុនទេ",
    oneReferralCovers: "ការណែនាំតែមួយគ្របដណ្តប់៖",
    claimOffer: (e) => `ទទួលប្រូម៉ូសិន ${e.name} សម្រាប់អ្នកប្រើប្រាស់ថ្មី`,
    tasksTitle: (e) => `ប្រូម៉ូសិន ${e.name} សម្រាប់អ្នកប្រើប្រាស់ថ្មី៖ ភារកិច្ច និងរង្វាន់`,
    tasksCaption: (e) => `ភារកិច្ចសម្រាប់អ្នកប្រើប្រាស់ថ្មីលើ ${e.name} និងរង្វាន់សម្រាប់ភារកិច្ចនីមួយៗ`,
    task: "ភារកិច្ច",
    reward: "រង្វាន់",
    tasksNote: (e, date) =>
      `តាមការបង្ហាញរបស់ ${e.name} នៅថ្ងៃទី ${date}។ ប្រូម៉ូសិនខុសគ្នាតាមប្រទេស ហើយផ្លាស់ប្តូរញឹកញាប់ – លក្ខខណ្ឌដែលបង្ហាញក្នុងគណនីរបស់អ្នក ក្រោយចុះឈ្មោះ ទើបជាលក្ខខណ្ឌដែលត្រូវអនុវត្ត។`,

    /* How to use the code */
    useCodeTitle: (e) => `របៀបប្រើកូដណែនាំ ${e.name} ${e.referralCode}`,
    whereToEnter: (e) => `កន្លែងដាក់កូដណែនាំ ${e.name}`,
    forgotCode: "ភ្លេចដាក់កូដ? បន្ថែមកូដក្រោយចុះឈ្មោះ",
    asInvited: "អ្វីដែលអ្នកទទួលបាន ក្នុងនាមជាអ្នកចុះឈ្មោះតាមការណែនាំ",
    interfaceNote: (e) => (
      <>
        ឈ្មោះប្រអប់ និងប៊ូតុងក្នុងសញ្ញាសម្រង់ “…” យកតាមកំណែភាសាអង់គ្លេសរបស់ {e.name} ដែលយើងបានពិនិត្យ។ ក្នុងកំណែភាសាផ្សេងទៀត ឈ្មោះទាំងនោះអាចខុសគ្នា។
      </>
    ),

    /* Registration */
    howToTitle: (e) => `របៀបបង្កើតគណនី ${e.name} តាមជំហាននីមួយៗ`,
    howToIntro: (e) => (
      <>
        {e.name} អនុញ្ញាតឱ្យបង្កើតគណនីដោយប្រើ {orList(e.signup.methods)}។ ខាងក្រោមនេះជាជំហានតាមការពន្យល់របស់ {e.name} ព្រមទាំងចំណុចដែលត្រូវប្រើកូដណែនាំ{" "}
        <strong>{e.referralCode}</strong>។
      </>
    ),
    startRegistration: (e) => `ចាប់ផ្តើមចុះឈ្មោះលើ ${e.name}`,

    /* Verification */
    kycTitle: (e) => `ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ ${e.name} (KYC)`,
    verification: "ការផ្ទៀងផ្ទាត់",
    minAge: "អាយុអប្បបរមា",
    documents: "ឯកសារដែលទទួលយក",

    /* Key facts */
    factsTitle: (e) => `ព័ត៌មានសង្ខេបអំពី ${e.name}`,
    founded: "ឆ្នាំបង្កើត",
    headquarters: "ទីស្នាក់ការកណ្តាល",
    futuresFees: "កម្រៃ Futures (Maker / Taker)",
    spotFees: "កម្រៃ Spot (Maker / Taker)",
    maxLeverage: "Leverage អតិបរមា",
    assets: "ទ្រព្យសកម្ម",
    openInterest: "Open Interest",
    volume24h: "បរិមាណជួញដូរ Derivatives 24 ម៉ោង",
    users: "អ្នកប្រើប្រាស់",
    regulation: "បទប្បញ្ញត្តិ",
    factsNote: (date) =>
      `Open Interest, បរិមាណជួញដូរ និងចំនួនទីផ្សារ៖ ចំណាត់ថ្នាក់ Derivatives របស់ CoinMarketCap ថ្ងៃទី ${date}។ កម្រៃ៖ កម្រិតស្តង់ដារនៅថ្ងៃពិនិត្យ។`,

    /* Fees */
    feesTitle: (e) => `កម្រៃជួញដូរ ${e.name} គិតយ៉ាងដូចម្តេច?`,
    feesIntro: (e) =>
      `${e.name} ប្រើគំរូ Maker / Taker៖ Order ដែលបន្ថែម Liquidity ទៅក្នុង Order Book (Limit Order) បង់កម្រៃ Maker ហើយ Order ដែលដក Liquidity ចេញ (Market Order) បង់កម្រៃ Taker។ អត្រាកម្រៃធ្លាក់ចុះ នៅពេលបរិមាណជួញដូរ 30 ថ្ងៃ ឬទ្រព្យសកម្មដែលអ្នកកាន់កាប់កើនឡើង។`,
    market: "ទីផ្សារ",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Futures / កិច្ចសន្យា Perpetual",
    spotRow: "Spot",
    feesNote: (e, date) => `អត្រាស្តង់ដារ (មិនមែន VIP) តាមការប្រកាសរបស់ ${e.name} បានពិនិត្យថ្ងៃទី ${date}។`,
    funding: "Funding Rate លើកិច្ចសន្យា Perpetual ជាប្រាក់ដែលអ្នកជួញដូរបង់ឱ្យគ្នាទៅវិញទៅមក មិនមែនបង់ឱ្យវេទិកាជួញដូរទេ។",
    liveSchedule: (e) => `មើលតារាងកម្រៃបច្ចុប្បន្នរបស់ ${e.name}`,
    feesCompare: (e, others, links) => (
      <>
        អត្រាទាំងនេះ ធៀបនឹងវេទិកាផ្សេងយ៉ាងដូចម្តេច? ទំព័រ<Link href={`${links.alternatives}#fees`}>ប្រៀបធៀបជម្រើសជំនួស {e.name}</Link> របស់យើង
        ដាក់កម្រៃ {e.name} ទន្ទឹមនឹងកម្រៃរបស់ {list(others)}។
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `អំពី ${e.name}`,
    products: "ផលិតផល",
    prosConsTitle: (e) => `គុណសម្បត្តិ និងគុណវិបត្តិរបស់ ${e.name}`,
    pros: "គុណសម្បត្តិ",
    cons: "គុណវិបត្តិ",
    bestForTitle: (e) => `${e.name} សមនឹងនរណាបំផុត?`,
    openAccount: (e) => `បើកគណនី ${e.name}`,
    notAMatch: (e, count, links, pairs) => (
      <>
        មិនសមនឹងអ្នក? មើល<Link href={links.alternatives}>ជម្រើសជំនួស {e.name} ល្អបំផុតទាំង {count}</Link> និងចំណុចខ្លាំងរបស់វេទិកានីមួយៗ ឬប្រៀបធៀប{" "}
        {e.name} មួយទល់មួយ៖ <Link href={pairs[0].href}>{pairs[0].label}</Link> និង <Link href={pairs[1].href}>{pairs[1].label}</Link>។
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `${e.name} មានសុវត្ថិភាពដែរឬទេ?`,
    availability: "លទ្ធភាពប្រើប្រាស់៖",
    closedWhereYouLive: (e, links) => (
      <>
        {e.name} មិនបើកឱ្យប្រើនៅកន្លែងដែលអ្នករស់នៅ? <Link href={`${links.alternatives}#countries`}>តារាងប្រទេសលើទំព័រជម្រើសជំនួស {e.name}</Link>{" "}
        បង្ហាញថាវេទិកាជួញដូរណាខ្លះផ្សេងទៀត ទទួលអ្នកប្រើប្រាស់ពីប្រទេសរបស់អ្នក។
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `កូដណែនាំ ${e.name} និងការចុះឈ្មោះ – សំណួរដែលសួរញឹកញាប់`,
    faqIntro: (e, count) =>
      `សំណួរ ${count} អំពីកូដណែនាំ ${e.name} ${e.referralCode}, ការបង្កើត និងផ្ទៀងផ្ទាត់គណនី, ប្រូម៉ូសិនសម្រាប់អ្នកប្រើប្រាស់ថ្មី និងកម្រៃជួញដូរ។`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "ប្រភព៖ ព័ត៌មានទាំងនេះមកពីណា",
    sourcesIntro: (e, date) =>
      `រាល់ព័ត៌មានលើទំព័រនេះអំពីកូដណែនាំ, ការចុះឈ្មោះ, ការផ្ទៀងផ្ទាត់, ប្រូម៉ូសិនសម្រាប់អ្នកប្រើប្រាស់ថ្មី និងកម្រៃជួញដូរ យើងបានអានពីគេហទំព័រ និងមជ្ឈមណ្ឌលជំនួយផ្ទាល់របស់ ${e.name} នៅថ្ងៃទី ${date}។ វេទិកាជួញដូរផ្លាស់ប្តូរប្រូម៉ូសិន និងកម្រៃដោយមិនជូនដំណឹងជាមុន ហើយបង្ហាញលក្ខខណ្ឌខុសៗគ្នានៅប្រទេសផ្សេងៗ ដូច្នេះទំព័រខាងក្រោម ជាប្រភពចុងក្រោយដែលត្រូវយោង។`,

    /* Alternatives */
    alternativesTitle: (e) => `ជម្រើសជំនួស ${e.name}`,
    alternativesIntro: (e, count, links) => (
      <>
        មិនប្រាកដថា {e.name} សមនឹងអ្នក? ខាងក្រោមនេះជាជម្រើសជំនួសដែលជិតបំផុត ហើយនីមួយៗមានតំណចុះឈ្មោះ តាមការណែនាំផ្ទាល់ខ្លួន។{" "}
        <Link href={links.alternatives}>ការប្រៀបធៀបជម្រើសជំនួស {e.name} ពេញលេញ</Link> វាស់វេទិកាទាំង {count} ធៀបនឹង {e.name} តាមកម្រៃ, Leverage, ផលិតផល,
        ការផ្ទៀងផ្ទាត់ និងប្រទេសដែលប្រើបាន។
      </>
    ),
    headToHeadTitle: (e) => `ប្រៀបធៀប ${e.name} មួយទល់មួយ`,
    headToHeadIntro: (e) =>
      `កំពុងសម្រេចចិត្តរវាង ${e.name} និងវេទិកាជួញដូរមួយទៀត? គូនីមួយៗមានការប្រៀបធៀបផ្ទាល់ខ្លួន អំពីកម្រៃ, Leverage, ផលិតផល, ប្រទេស និងប្រូម៉ូសិនណែនាំ៖`,
    compareAll: (e, count) => `ប្រៀបធៀបជម្រើសជំនួស ${e.name} ទាំង ${count}`,
    allComparisons: "ការប្រៀបធៀបវេទិកាជួញដូរទាំងអស់ →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>ការព្រមានអំពីហានិភ័យ៖</strong> Derivatives គ្រីបតូជាឧបករណ៍ស្មុគស្មាញ។ Leverage ពង្រីកទាំងប្រាក់ចំណេញ និងការខាតបង់ ហើយអ្នកអាចបាត់បង់ Margin
        ទាំងអស់ក្នុងរយៈពេលតែប៉ុន្មាននាទី។ ទំព័រនេះសម្រាប់ផ្តល់ព័ត៌មានតែប៉ុណ្ណោះ មិនមែនជាដំបូន្មានហិរញ្ញវត្ថុទេ។ យើងអាចទទួលបានកម្រៃជើងសារ
        ប្រសិនបើអ្នកចុះឈ្មោះតាមតំណភ្ជាប់របស់យើង – មើលទំព័រ «<Link href={disclosureHref}>ការបញ្ជាក់អំពីកម្រៃជើងសារ</Link>»។
      </>
    ),
    joinTitle: (e) => `បើកគណនី ${e.name} ក្នុងរយៈពេល 3 នាទី`,
    joinText: (e) => `${noStop(benefit(e))}។ ការណែនាំតែមួយសម្រាប់ Spot និង Futures។`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `កូដណែនាំ ${name}`,
      signup: (name) => `ការចុះឈ្មោះ និងការផ្ទៀងផ្ទាត់លើ ${name}`,
      bonus: (name) => `ប្រាក់រង្វាន់ស្វាគមន៍ និងរង្វាន់ ${name}`,
      fees: (name) => `កម្រៃ និងការជួញដូរលើ ${name}`,
      safety: () => "សុវត្ថិភាព និងប្រទេសដែលប្រើបាន",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `កូដណែនាំ ${e.name} ជាអ្វី?`,
          a: `កូដណែនាំ ${e.name} គឺ ${e.referralCode}។ ${sentence(r.apply)} ${e.name} ផ្ទាល់ហៅកូដនេះថា ${noStop(r.codeName)}។`,
        },
        { topic: "referral", q: `កូដណែនាំ ${e.name} ដាក់នៅកន្លែងណា?`, a: r.whereToEnter },
        { topic: "referral", q: `លេខកូដណែនាំ ${e.name} អាចបន្ថែមក្រោយចុះឈ្មោះរួចបានដែរឬទេ?`, a: r.afterSignup },
        { topic: "referral", q: `កូដណែនាំ ${e.name} ${e.referralCode} ផ្តល់អ្វីខ្លះដល់អ្នក?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `កូដណែនាំ ${e.name} ប្រើបានទាំង Spot និង Futures ដែរឬទេ?`,
          a: `បាន។ ការណែនាំភ្ជាប់ជាមួយគណនី ${e.name} មិនមែនជាមួយផលិតផលតែមួយទេ ដូច្នេះការចុះឈ្មោះតែម្តងដោយប្រើ ${e.referralCode} គ្របដណ្តប់ ${list(e.referralCovers)}។`,
        },
        {
          topic: "referral",
          q: `កូដណែនាំ ${e.name} ត្រូវបង់ថ្លៃដែរឬទេ?`,
          a: `មិនត្រូវទេ។ ការដាក់ ${e.referralCode} ឥតគិតថ្លៃ ហើយមិនធ្វើឱ្យកម្រៃជួញដូរកើនឡើងទេ។ ${e.name} ចំណាយលើកម្មវិធីណែនាំ ពីចំណូលកម្រៃផ្ទាល់ខ្លួន។`,
        },
        {
          topic: "signup",
          q: `របៀបចុះឈ្មោះ ${e.name} ធ្វើយ៉ាងដូចម្តេច?`,
          a: `${s.steps.map((st, i) => `ជំហានទី ${i + 1}៖ ${noStop(st.title)}។`).join(" ")} អ្នកអាចចុះឈ្មោះដោយប្រើ ${orList(s.methods)}។`,
        },
        { topic: "signup", q: `${e.name} តម្រូវឱ្យផ្ទៀងផ្ទាត់អត្តសញ្ញាណ (KYC) ដែរឬទេ?`, a: s.kyc },
        { topic: "signup", q: `${e.name} ទទួលយកឯកសារអ្វីខ្លះសម្រាប់ការផ្ទៀងផ្ទាត់?`, a: s.documents },
        { topic: "signup", q: `បើកគណនី ${e.name} ត្រូវមានអាយុប៉ុន្មាន?`, a: s.minAge },
        {
          topic: "fees",
          q: `កម្រៃជួញដូរ ${e.name} មានប៉ុន្មាន?`,
          a: `នៅកម្រិតស្តង់ដារ ${e.name} គិតកម្រៃ Maker ${e.spotFees.maker} / Taker ${e.spotFees.taker} លើ Spot និង Maker ${e.futuresFees.maker} / Taker ${e.futuresFees.taker} លើកិច្ចសន្យា Perpetual។${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `${e.name} មិនអាចប្រើបាននៅប្រទេសណាខ្លះ?`, a: e.restricted },
      ];
    },
  },
};
