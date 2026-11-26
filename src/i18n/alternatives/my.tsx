import Link from "next/link";
import type { AlternativesTexts } from "./en";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";

/**
 * Texts of the "[Exchange] alternatives" pages in Burmese. Same keys as `./en.tsx`.
 * Wording: "Binance အစားထိုး Exchange များ" (the name first, as Burmese puts the owner first), "အခကြေးငွေ",
 * "Referral Code"; the reader is "သင်" (mostly dropped), the site is "ကျွန်ုပ်တို့". Exchange names stay in Latin
 * letters, with one space before a particle ("Binance ၏", "OKX ထက်"). Country names come unchanged from
 * `../compare/my.ts` and take "တွင်" directly ("ကနေဒါတွင်").
 * Generated dates: `prettyDate` gives "2026 နိုဝင်ဘာ 16" (written " ရက်တွင်" in a sentence), the month
 * "2026 နိုဝင်ဘာ", the short month "2026 နို" (expanded in the title).
 */

/** Short month of `shortMonthYearFor("my")` → full month name, as Burmese titles write it. */
const fullMonth: Record<string, string> = {
  "ဇန်": "ဇန်နဝါရီ",
  "ဖေ": "ဖေဖော်ဝါရီ",
  "ဧ": "ဧပြီ",
  "ဇူ": "ဇူလိုင်",
  "ဩ": "ဩဂုတ်",
  "စက်": "စက်တင်ဘာ",
  "အောက်": "အောက်တိုဘာ",
  "နို": "နိုဝင်ဘာ",
  "ဒီ": "ဒီဇင်ဘာ",
};
/** "2026 နို" → "2026 နိုဝင်ဘာ"; မတ်, မေ, ဇွန် stay. */
const expandMonth = (shortMonthYear: string) =>
  shortMonthYear.replace(/^(\d{4}) (\S+)$/, (_all, year: string, month: string) => `${year} ${fullMonth[month] ?? month}`);

export const my: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  // Four wordings, chosen per exchange.
  title: (x, n, shortMonthYear) => {
    const m = expandMonth(shortMonthYear), y = yearOf(shortMonthYear);
    return fit(
      TITLE_MAX,
      ...[
        [`${x.name} အစားထိုး Exchange ${n} ခု နှိုင်းယှဉ်ချက် (${m})`, `${x.name} အစားထိုး Exchange ${n} ခု နှိုင်းယှဉ်ချက် (${y})`],
        [`${x.name} အစားထိုး Exchange ${n} ခု: အခကြေးငွေနှင့် ဘောနပ်စ် (${y})`, `${x.name} အစားထိုး Exchange ${n} ခု: အခကြေးငွေနှင့် ဘောနပ်စ်`],
        [`${x.name} နှင့် ဆင်တူသော Exchange များ: အစားထိုး ${n} ခု (${y})`, `${x.name} နှင့် ဆင်တူသော Exchange များ: အစားထိုး ${n} ခု`],
        [`${x.name} မှ ပြောင်းမလား? အစားထိုး Exchange ${n} ခု (${m})`, `${x.name} မှ ပြောင်းမလား? အစားထိုး Exchange ${n} ခု (${y})`],
      ][variant(4, x.slug)],
      `${x.name} အစားထိုး Exchange ${n} ခု (${m})`,
      `${x.name} အစားထိုး Exchange များ`,
    );
  },
  description: (x, names, n, former, monthYear) =>
    fit(
      DESC_MAX,
      `${names}: ${x.name}${former ? ` (${former})` : ""} အစားထိုး Exchange ${n} ခု၏ အခကြေးငွေ၊ Leverage၊ KYC နှင့် Referral Code နှိုင်းယှဉ်ချက် (${monthYear}လ စစ်ဆေးပြီး)။`,
      `${names}: ${x.name} အစားထိုး Exchange ${n} ခု၏ အခကြေးငွေ၊ Leverage၊ KYC နှင့် Referral Code နှိုင်းယှဉ်ချက် (${monthYear}လ စစ်ဆေးပြီး)။`,
      `${names}: ${x.name} အစားထိုး Exchange ${n} ခု၏ အခကြေးငွေ၊ Leverage၊ KYC နှင့် Referral Code နှိုင်းယှဉ်ချက်။`,
    ),
  keywords: (x, alts, former) => [
    `${x.name} အစားထိုး Exchange များ`,
    `${x.name} အစားထိုး Exchange`,
    `${x.name} alternative`,
    `${x.name} alternatives`,
    `${x.name} လို Exchange`,
    `အကောင်းဆုံး ${x.name} အစားထိုး Exchange`,
    `${x.name} ပြိုင်ဘက် Exchange များ`,
    `အခကြေးငွေ ပိုနည်းသော ${x.name} အစားထိုး Exchange`,
    `KYC မလိုသော ${x.name} အစားထိုး Exchange`,
    ...(former ? [`${former} အစားထိုး Exchange များ`, `${former} alternative`] : []),
    ...alts.map((a) => `${a.name} vs ${x.name}`),
  ],
  crumbHome: "ပင်မစာမျက်နှာ",
  crumbReferral: (name) => `${name} Referral Code`,
  crumbAlternatives: (name) => `${name} အစားထိုး Exchange များ`,
  listLdName: (name) => `${name} အစားထိုး Exchange များ`,
  listLdDescription: (name) => `${name} နှင့် နှိုင်းယှဉ်ထားသော Exchange များကို CoinMarketCap ၏ Derivatives အဆင့်စာရင်း အစဉ်အတိုင်း စီထားပါသည်။`,
  howToLdName: (name) => `${name} မှ အခြား Exchange သို့ ပြောင်းနည်း`,
  howToLdDescription: (name) => `${name} မှ အခြား ခရစ်တို Exchange သို့ ပြောင်းရာတွင် စစ်ဆေးရမည့် အချက်များနှင့် လုပ်ဆောင်ရမည့် အစဉ်။`,
  /** Share card. */
  ogTitle: (name) => `${name} အစားထိုး Exchange များ`,
  ogSubtitle: (names) => `${names} – အခကြေးငွေ၊ Leverage၊ KYC နှင့် နိုင်ငံ နှိုင်းယှဉ်ချက်`,

  /* --------------------------------- words --------------------------------- */
  /** Joins the last two names of a list of links: " နှင့် " (the others are joined with "၊ "). */
  and: () => " နှင့် ",
  noneOfThem: "တစ်ခုမျှ မရှိ",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `${date} ရက်တွင် စစ်ဆေးပြီး အပ်ဒိတ်လုပ်ထားသည်`,
  h1: (name, n) => `${name} အစားထိုး Exchange များ: Exchange ${n} ခု နှိုင်းယှဉ်ချက်`,
  quickAnswer: "အတိုချုပ် အဖြေ",
  chipsLabel: "နှိုင်းယှဉ်ထားသည့် အချက်များ",
  chips: (n, products, countries) => [`Exchange ${n} ခု`, "အခကြေးငွေနှင့် Leverage", `ထုတ်ကုန် ${products} မျိုး`, `နိုင်ငံ ${countries} နိုင်ငံ`, "KYC နှင့် ကြီးကြပ်မှု", "Referral Code များ"],
  glanceTitle: (name) => `${name} အစားထိုး Exchange များ အကျဉ်းချုပ်`,
  glanceIntro: "Exchange တစ်ခုစီ၏ အားသာချက်နှင့် ပုံမှန် Futures အခကြေးငွေ (Maker / Taker)။",
  glanceOrder: (marketDate) => `အစဉ်: CoinMarketCap ၏ Derivatives အဆင့်စာရင်း (${marketDate} ရက် အခြေအနေ)။ Leverage သုံး၍ အရောင်းအဝယ်လုပ်ခြင်းသည် အန္တရာယ်များပါသည်။`,
  onThisPage: "ဤစာမျက်နှာတွင်",
  toc: (name, n) => [
    ["at-a-glance", "အကျဉ်းချုပ်"],
    ["why", `${name} မှ ဘာကြောင့် ပြောင်းကြသလဲ?`],
    ["alternatives", `အစားထိုး Exchange ${n} ခု`],
    ["by-need", "လိုအပ်ချက်အလိုက် အကောင်းဆုံး"],
    ["fees", "အခကြေးငွေ"],
    ["products", "ထုတ်ကုန်များ"],
    ["countries", "နိုင်ငံများ"],
    ["kyc", "အထောက်အထား အတည်ပြုခြင်း (KYC)"],
    ["safety", "ကြီးကြပ်မှုနှင့် အရန်ငွေ"],
    ["referral-codes", "Referral Code များ"],
    ["switch", "Exchange ပြောင်းနည်း"],
    ["faq", "မေးလေ့ရှိသော မေးခွန်းများ"],
    ["sources", "ရင်းမြစ်များ"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `${name} အစားထိုး Exchange များ နှိုင်းယှဉ်ချက် (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `အစားထိုး Exchange ${n} ခုကို ${name} ကိုယ်တိုင်နှင့် ဘေးချင်းယှဉ် ပြထားပါသည်။ အခကြေးငွေသည် Exchange တစ်ခုစီက ထုတ်ပြန်ထားသော ပုံမှန်နှုန်း (VIP မဟုတ်) ဖြစ်ပြီး Maker / Taker ပုံစံဖြင့် ပြထားပါသည်။ Leverage သည် Exchange က ဖော်ပြထားသော အမြင့်ဆုံး ပမာဏ ဖြစ်ပြီး Referral Code သည် အကောင့်ဖွင့်ရာတွင် သုံးနိုင်သော ကုဒ် ဖြစ်ပါသည်။ ကိန်းဂဏန်းအားလုံးကို ${date} ရက်တွင် Exchange ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်မှ ဖတ်ယူထားပါသည်။`,
  comparedCaption: (name, n) => `${name} နှင့် အစားထိုး Exchange ${n} ခု: တစ်ခုစီ၏ အားသာချက်၊ အခကြေးငွေ၊ Leverage နှင့် Referral Code`,
  colExchange: "Exchange",
  colBestFor: "အားသာချက်",
  colFuturesFees: "Futures အခကြေးငွေ",
  colSpotFees: "Spot အခကြေးငွေ",
  colMaxLeverage: "အမြင့်ဆုံး Leverage",
  colReferralCode: "Referral Code",
  colAction: "လုပ်ဆောင်ချက်",
  forComparison: "နှိုင်းယှဉ်ရန်",
  signUp: "အကောင့်ဖွင့်မည်",
  comparedOrder: (marketDate) => `အစားထိုး Exchange များ၏ အစဉ်: CoinMarketCap ၏ Derivatives အဆင့်စာရင်း (${marketDate} ရက် အခြေအနေ)။`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `${name} အစားထိုး Exchange ကို ဘာကြောင့် ရှာကြသလဲ?`,
  whyIntro: (name, sourcesHref) => (
    <>
      အောက်ပါ အချက်များသည် {name} ကိုယ်တိုင် ကန့်သတ်ထားသော အချက်များ ဖြစ်ပြီး တစ်ချက်စီကို {name} ၏ ကိုယ်ပိုင် စာမျက်နှာများမှ ယူထားပါသည် (<Link href={sourcesHref}>ကျွန်ုပ်တို့၏ {name} စာမျက်နှာရှိ ရင်းမြစ်စာရင်း</Link>ကို ကြည့်ပါ)။ ဤအချက်များထဲမှ တစ်ခုမျှ သင်နှင့် မသက်ဆိုင်ပါက {name} ကို ဆက်သုံးခြင်းသည် အပြည့်အဝ သင့်တော်သော ရွေးချယ်မှု ဖြစ်ပါသည်။
    </>
  ),
  stayTitle: (name) => `${name} ကို ဆက်သုံးသင့်သည့် အခြေအနေများ`,
  stayOutro: (name, code, href) => (
    <>
      {name} ကို ဆက်သုံးရန် ဆုံးဖြတ်ပါက ကျွန်ုပ်တို့၏ <Link href={href}>{name} Referral Code စာမျက်နှာ</Link>တွင် ကုဒ် {code}၊ အကောင့်ဖွင့်အဆင့်များနှင့် လက်ရှိ အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်ကို ဖော်ပြထားပါသည်။
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `${name} အစားထိုး Exchange အကောင်းဆုံး ${n} ခု အသေးစိတ်`,
  detailIntro: (name) =>
    `အစားထိုး Exchange တစ်ခုစီကို အခကြေးငွေ၊ Leverage၊ ဈေးကွက် အရွယ်အစား၊ အထောက်အထား အတည်ပြုခြင်း၊ Referral စည်းမျဉ်း၊ ထုတ်ကုန်နှင့် လက်ခံသော နိုင်ငံများ ဟူသည့် အချက်တူများဖြင့် ${name} နှင့် ယှဉ်၍ တိုင်းတာထားပါသည်။ “ပိုသာ” ခေါင်းစဉ်များအောက်တွင် Exchange များ၏ ကိုယ်ပိုင် ကိန်းဂဏန်းများမှ ဖတ်ယူနိုင်သော ကွာခြားချက်များကိုသာ ဖော်ပြထားပါသည်။`,
  rowFuturesFees: "Futures အခကြေးငွေ (Maker / Taker)",
  rowSpotFees: "Spot အခကြေးငွေ (Maker / Taker)",
  rowMaxLeverage: "အမြင့်ဆုံး Leverage",
  rowAssets: "စာရင်းဝင် ပိုင်ဆိုင်မှု",
  rowOpenInterest: "Derivatives Open Interest (ဖွင့်ထားသော Position စုစုပေါင်း)",
  rowUsers: "အသုံးပြုသူ",
  rowFounded: "တည်ထောင်ခဲ့သည့် ခုနှစ်",
  rowKyc: "အထောက်အထား အတည်ပြုခြင်း",
  rowAddLater: "Referral Code ကို နောက်မှ ထည့်လို့ ရလား?",
  rowOffer: "အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်",
  bestFor: (role) => `အားသာချက်: ${role}`,
  asAlternative: (name) => `– ${name} အစားထိုး Exchange အဖြစ်`,
  chooseIf: (a, x) => `${x} အစား ${a} ကို ရွေးသင့်သည့် အခြေအနေများ`,
  thinkTwiceIf: "ပြန်စဉ်းစားသင့်သည့် အခြေအနေများ",
  whereAhead: (a, x) => `${a} က ${x} ထက် ပိုသာသည့် အချက်များ`,
  whereBehind: (x) => `${x} က ပိုသာသည့် အချက်များ`,
  noAdvantage: "ကျွန်ုပ်တို့ နှိုင်းယှဉ်သော အချက်များတွင် တိုင်းတာနိုင်သော အားသာချက် မရှိပါ။",
  codeLabel: (name) => `${name} Referral Code`,
  signUpOn: (name) => `${name} တွင် အကောင့်ဖွင့်မည်`,
  linkReferral: (name, code) => `${name} Referral Code ${code}: ကမ်းလှမ်းချက်၊ အကောင့်ဖွင့်နည်းနှင့် KYC`,
  linkVersus: (a, x) => `${a} vs ${x}: ထိပ်တိုက် နှိုင်းယှဉ်ချက် အပြည့်အစုံ`,
  linkAlternatives: (name) => `${name} အစားထိုး Exchange များ`,
  sideBySide: (a, x) => `${a} vs ${x}: ကိန်းဂဏန်းအားလုံး ဘေးချင်းယှဉ်`,
  sideBySideCaption: (a, x) => `${a} vs ${x}: အခကြေးငွေ၊ Leverage၊ ပိုင်ဆိုင်မှု၊ အထောက်အထား အတည်ပြုခြင်းနှင့် Referral စည်းမျဉ်း`,
  versusHead: (a, x) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `လိုအပ်ချက်တစ်ခုစီအတွက် အကောင်းဆုံး ${name} အစားထိုး Exchange`,
  needIntro: (n) =>
    `အစားထိုး Exchange ${n} ခုအနက် မည်သည့် Exchange က အကောင်းဆုံး ဖြစ်မည်ဆိုသည်မှာ သင် ရှာဖွေနေသည့်အရာပေါ် မူတည်ပါသည်။ ဇယားက လိုအပ်ချက်တစ်ခုစီအတွက် အဖြေကို ကိန်းဂဏန်းများမှ ထုတ်ပြထားပြီး ကျွန်ုပ်တို့၏ ကိုယ်ပိုင် အဆင့်သတ်မှတ်ချက်ကို မသုံးပါ။`,
  needCaption: (name) => `လိုအပ်ချက်အလိုက် အကောင်းဆုံး ${name} အစားထိုး Exchange`,
  needColWant: "လိုချင်သည့်အရာ",
  needColLook: "ကြည့်သင့်သည့် Exchange",
  needColWhy: "အကြောင်းရင်း",
  needLowestFutures: "အနိမ့်ဆုံး Futures အခကြေးငွေ",
  needLowestSpot: "အနိမ့်ဆုံး Spot အခကြေးငွေ",
  needHighestLeverage: "အမြင့်ဆုံး Leverage",
  needDeepest: "Liquidity အကောင်းဆုံး Derivatives ဈေးကွက်",
  needMostMarkets: "Derivatives ဈေးကွက် အများဆုံး",
  needMica: "ဥရောပ စီးပွားရေးဒေသ (EEA) အတွက် MiCA ခွင့်ပြုချက်ရ ပလက်ဖောင်း",
  needAddLater: "အကောင့်ဖွင့်ပြီးမှ Referral Code ထည့်ခွင့်",
  whyStandardTier: (fees) => `ပုံမှန်အဆင့်တွင် Maker / Taker ${fees}`,
  whyOpenInterest: (amount, marketDate) => `Open Interest ${amount} (CoinMarketCap၊ ${marketDate})`,
  whyMarkets: (markets, marketDate) => `ဈေးကွက် ${markets} ခု (CoinMarketCap၊ ${marketDate})`,
  whyFeature: "Exchange ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်တွင် ပြထားပါသည်။ အတိအကျ ပေးထားသည့်အရာကို “ထုတ်ကုန်များ” အပိုင်းတွင် ဖော်ပြထားပါသည်။",
  needNotFound: (n) => `ကျွန်ုပ်တို့ စစ်ဆေးစဉ် အစားထိုး Exchange ${n} ခုလုံး၏ ဝက်ဘ်ဆိုက်များတွင် မတွေ့ရပါ။`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `အခကြေးငွေ: ${name} နှင့် အစားထိုး Exchange များ`,
  feesIntro:
    "Exchange ခုနစ်ခုလုံးသည် Maker / Taker စနစ်ကို သုံးပါသည်။ Liquidity ထည့်ပေးသော Limit Order များက Maker အခကြေးငွေ ပေးရပြီး Liquidity ယူသော Order များက Taker အခကြေးငွေ ပေးရပါသည်။ ဇယားတွင် ပုံမှန်အဆင့်၊ ဆိုလိုသည်မှာ VIP အဆင့် သို့မဟုတ် Token လျှော့ဈေး မရမီ အကောင့်အသစ်တစ်ခု ပေးရသော နှုန်းများကို ပြထားပါသည်။",
  feesCaption: (name) => `${name} နှင့် အစားထိုး Exchange များ၏ ပုံမှန် Spot နှင့် Futures အခကြေးငွေ`,
  colFuturesMaker: "Futures Maker",
  colFuturesTaker: "Futures Taker",
  colSpotMaker: "Spot Maker",
  colSpotTaker: "Spot Taker",
  colOtherMarkets: "အခြား ဈေးကွက်များ (Maker / Taker)",
  feesNote: (date) => `Exchange တစ်ခုစီက ထုတ်ပြန်ထားသော ပုံမှန်နှုန်း (VIP မဟုတ်) ဖြစ်ပြီး ${date} ရက်တွင် စစ်ဆေးထားပါသည်။ အခကြေးငွေ ပြောင်းလဲနိုင်သဖြင့် အရောင်းအဝယ် မလုပ်မီ Exchange တွင် ပြန်စစ်ပါ။`,
  cheaperTitle: (name) => `${name} ထက် ဘယ် Exchange က အခကြေးငွေ ပိုသက်သာလဲ?`,
  tokenTitle: "Token လျှော့ဈေးနှင့် အသေးစိတ် စည်းကမ်းချက်များ",
  noTokenDiscount: "Exchange ၏ Token ဖြင့် အခကြေးငွေ ပေးလျှင် လျှော့ဈေး ရမည်ဟု ထုတ်ပြန်မထားပါ။",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "ထုတ်ကုန်များ: Exchange တစ်ခုစီတွင် ရနိုင်သည့်အရာ",
  productsIntro: (date) =>
    `အမှန်ခြစ်သည် Exchange က ထိုထုတ်ကုန်ကို ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်တွင် ပြထားကြောင်း ဆိုလိုပါသည်။ မျဉ်းတိုသည် ${date} ရက်တွင် ထိုဝက်ဘ်ဆိုက်တွင် သက်ဆိုင်ရာ စာမျက်နှာကို ကျွန်ုပ်တို့ ရှာမတွေ့ခဲ့ကြောင်း ဆိုလိုပြီး ထုတ်ကုန် မရှိကြောင်း သက်သေ မဟုတ်ပါ။ ရနိုင်သည့် ထုတ်ကုန်များသည် နိုင်ငံအလိုက် ကွာခြားနိုင်ပြီး ဒေသဆိုင်ရာ ပလက်ဖောင်းများတွင် အထူးသဖြင့် ကွာခြားနိုင်ပါသည်။`,
  productsCaption: (name) => `${name} နှင့် အစားထိုး Exchange များ၏ ထုတ်ကုန်များ`,
  colProduct: "ထုတ်ကုန်",
  productDetailsTitle: "Exchange တစ်ခုစီ၏ ထုတ်ကုန် အသေးစိတ်",
  productDetails: (name) => `${name}: ထုတ်ကုန် အသေးစိတ်`,
  offered: "ရှိ",
  notOffered: "မရှိ",
  noPageFound: "Exchange ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်တွင် စာမျက်နှာ ရှာမတွေ့ပါ။",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `နိုင်ငံအလိုက် ရရှိနိုင်မှု: ${name} နှင့် အစားထိုး Exchange များ`,
  countriesIntro: (count) =>
    `အစားထိုး Exchange လိုအပ်ရသည့် အဖြစ်အများဆုံး အကြောင်းရင်းမှာ သင် နေထိုင်သည့် နိုင်ငံ ဖြစ်ပါသည်။ ဇယားတွင် နိုင်ငံ ${count} နိုင်ငံအတွက် Exchange တစ်ခုစီ၏ ကိုယ်ပိုင် စည်းမျဉ်းများက မည်သို့ ဖော်ပြထားသည်ကို ပြထားပါသည်။ “ဒေသဆိုင်ရာ ဝက်ဘ်ဆိုက်” ဆိုသည်မှာ Exchange က ထိုနိုင်ငံကို ကိုယ်ပိုင် ထုတ်ကုန်၊ အခကြေးငွေနှင့် ကန့်သတ်ချက်များရှိသော သီးခြား ပလက်ဖောင်းမှတစ်ဆင့် ဝန်ဆောင်မှုပေးခြင်း ဖြစ်ပါသည်။`,
  countriesCaption: (name) => `${name} နှင့် အစားထိုး Exchange များ၏ နိုင်ငံအလိုက် ရရှိနိုင်မှု`,
  colCountry: "နိုင်ငံ",
  legendRestricted: "Exchange ၏ ကိုယ်ပိုင် စည်းမျဉ်း သို့မဟုတ် ကြေညာချက်အရ ထိုနိုင်ငံတွင် နေထိုင်သူများကို လက်မခံပါ",
  legendRegional: "သီးခြား ဒေသဆိုင်ရာ ပလက်ဖောင်းမှတစ်ဆင့် ဝန်ဆောင်မှုပေးပါသည်",
  legendPartial: "ထုတ်ကုန်အချို့ သို့မဟုတ် ဒေသအချို့တွင်သာ ရနိုင်ပါသည်",
  legendOpen: (date) => `${date} ရက် အခြေအနေအရ ကန့်သတ်ထားသော နိုင်ငံများ စာရင်းတွင် မပါဝင်ပါ`,
  countriesNote:
    "“ကန့်သတ်မထားပါ” ဆိုသည်မှာ ထိုနိုင်ငံတွင် ထုတ်ကုန်အားလုံး ရနိုင်မည်ဟု အာမခံချက် မဟုတ်ပါ။ သင် အကောင့်ဖွင့်သည့် အချိန်ရှိ Exchange ၏ စည်းမျဉ်းများသာ သက်ရောက်ပြီး ဤ Exchange အားလုံးက VPN သို့မဟုတ် မှားယွင်းသော အချက်အလက်ဖြင့် ကန့်သတ်ချက်ကို ကျော်လွှားခြင်းကို တားမြစ်ထားပါသည်။",
  countryHeading: (name, country) => `${country}တွင် ${name} အစားထိုး Exchange များ`,
  restrictedTitle: "Exchange တစ်ခုစီ၏ ကန့်သတ်ထားသော နိုင်ငံများနှင့် ဒေသဆိုင်ရာ ပလက်ဖောင်းများ",
  whereNotAvailable: (name) => `${name} ကို ဘယ်နိုင်ငံတွေမှာ သုံးလို့ မရလဲ?`,
  regionalPlatforms: "ဒေသဆိုင်ရာ ပလက်ဖောင်းများ:",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `အထောက်အထား အတည်ပြုခြင်း: KYC မလိုသော ${name} အစားထိုး Exchange ရှိလား?`,
  kycIntro: (n) =>
    `ဤ Exchange ${n} ခုထဲတွင် မရှိပါ။ ဤနှိုင်းယှဉ်ချက်ရှိ Exchange တိုင်းက အသုံးပြုသူအသစ်များကို အထောက်အထား အတည်ပြုရန် တောင်းဆိုပြီး အများစုတွင် အတည်ပြုမပြီးမချင်း ငွေသွင်းခြင်း သို့မဟုတ် အရောင်းအဝယ်ကို ပိတ်ထားပါသည်။ ကွာခြားသည်မှာ အတည်မပြုရသေးသော အကောင့်ဖြင့် ဆက်လုပ်နိုင်သည့် အရာများသာ ဖြစ်ပါသည်။`,
  kycCaption: (name) => `${name} နှင့် အစားထိုး Exchange များတွင် အထောက်အထား အတည်ပြုခြင်း`,
  colKyc: "အထောက်အထား အတည်ပြုခြင်း",
  kycDetailsTitle: "Exchange တစ်ခုစီက အထောက်အထား အတည်ပြုခြင်းအကြောင်း ဖော်ပြထားချက်",
  kycQuestion: (name) => `${name} မှာ အထောက်အထား အတည်ပြုခြင်း (KYC) လိုအပ်လား?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "ကြီးကြပ်မှု၊ Proof of Reserves (အရန်ငွေ သက်သေပြချက်) နှင့် အသုံးပြုသူ ကာကွယ်ရေး ရန်ပုံငွေ",
  safetyIntro:
    "ဗဟိုချုပ်ကိုင် Exchange (CEX) မည်သည့်တစ်ခုမျှ အန္တရာယ်ကင်းသည် မဟုတ်ပါ။ နှိုင်းယှဉ်နိုင်သည်မှာ Exchange တစ်ခုစီက မိမိအကြောင်း ထုတ်ပြန်ထားသည့် အချက်များသာ ဖြစ်ပါသည်။ ယင်းတို့မှာ မည်သည့်နေရာတွင် လိုင်စင်ရထားသည်၊ အရန်ငွေကို သက်သေပြခြင်း ရှိမရှိနှင့် အရေးပေါ်အခြေအနေအတွက် ရန်ပုံငွေ ထားရှိခြင်း ရှိမရှိ ဖြစ်ပါသည်။",
  safetyCaption: (name) => `${name} နှင့် အစားထိုး Exchange များ၏ ကြီးကြပ်မှု၊ Proof of Reserves နှင့် အသုံးပြုသူ ကာကွယ်ရေး ရန်ပုံငွေ`,
  colLicences: "Exchange က ဖော်ပြသော လိုင်စင်များ",
  colReserves: "Proof of Reserves",
  colFund: "အသုံးပြုသူ ကာကွယ်ရေး ရန်ပုံငွေ",
  noneNamed: "ဖော်ပြထားခြင်း မရှိ",
  safetyNote: "အရန်ငွေ အချိုးများသည် ဖော်ပြထားသော Snapshot ရက်စွဲများအတိုင်း Exchange များ၏ ကိုယ်ပိုင် ကိန်းဂဏန်းများ ဖြစ်ပါသည်။ အမှန်တကယ် အရောင်းအဝယ်လုပ်နေသော Exchange တွင်သာ ငွေကို ထားပါ။",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `${name} အစားထိုး Exchange များအတွက် Referral Code များ`,
  codesIntro:
    "အစားထိုး Exchange တစ်ခုခုတွင် အကောင့်ဖွင့်မည်ဆိုပါက Referral Code ဖြင့် ဖွင့်ပါ။ ကုဒ်သည် အခမဲ့ဖြစ်ပြီး အခကြေးငွေကို မည်သည့်အခါမျှ မတိုးစေဘဲ Exchange ၏ အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်ကိုလည်း ရယူခွင့် ပေးပါသည်။ နောက်ဆုံးကော်လံက အရေးကြီးဆုံး ဖြစ်ပါသည်။ Exchange အချို့တွင် မေ့ကျန်ခဲ့သော ကုဒ်ကို နောက်မှ ထည့်၍ မရပါ။",
  codesCaption: (name) => `${name} နှင့် အစားထိုး Exchange များ၏ Referral Code များ`,
  colOffer: "အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်",
  colWhere: "ကုဒ် ထည့်ရမည့်နေရာ",
  colLater: "နောက်မှ ထည့်လို့ ရလား?",
  codesRow: (name) => `${name} Referral Code`,
  codesNote: (date) =>
    `ကမ်းလှမ်းချက်များကို ${date} ရက်တွင် စစ်ဆေးထားပါသည်။ ကြိုဆိုဆုလက်ဆောင်များသည် Task အပေါ် အခြေခံပြီး အထောက်အထား အတည်ပြုရန် လိုအပ်ကာ နိုင်ငံအလိုက် ကွာခြားပါသည်။`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `${name} မှ အခြား Exchange သို့ ပြောင်းနည်း`,
  switchIntro: "အစဉ်အတိုင်း လုပ်ပါက Exchange ပြောင်းခြင်းသည် ထင်သလောက် အလုပ်မများပါ။ ပထမ အကောင့်ဖွင့်ပါ၊ ဒုတိယ အထောက်အထား အတည်ပြုပါ၊ ငွေကို နောက်ဆုံးမှ ရွှေ့ပါ။",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `${name} အစားထိုး Exchange များ – မေးလေ့ရှိသော မေးခွန်းများ`,
  faqIntro: (name, count) =>
    `${name} ကို အစားထိုးခြင်းနှင့် ပတ်သက်သော မေးခွန်း ${count} ခု: မည်သည့် Exchange က မည်သည့် လိုအပ်ချက်နှင့် ကိုက်ညီသည်၊ အခကြေးငွေ၊ နိုင်ငံ၊ အထောက်အထား အတည်ပြုခြင်းနှင့် ပြောင်းနည်း။`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "ရင်းမြစ်များ: ကိန်းဂဏန်းများကို ရယူခဲ့သည့်နေရာ",
  sourcesIntro: (date, marketDate) =>
    `ဤစာမျက်နှာရှိ အခကြေးငွေ၊ Leverage၊ ထုတ်ကုန်၊ အထောက်အထား အတည်ပြုခြင်း၊ နိုင်ငံ၊ လိုင်စင်၊ အရန်ငွေနှင့် Referral စည်းမျဉ်းဆိုင်ရာ အချက်အလက်အားလုံးကို ${date} ရက်တွင် Exchange များ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်နှင့် အကူအညီ စင်တာများမှ ဖတ်ယူထားပါသည်။ Open Interest နှင့် Derivatives ဈေးကွက် အရေအတွက်ကို CoinMarketCap ၏ Derivatives အဆင့်စာရင်း (${marketDate}) မှ ယူထားပါသည်။ Exchange များသည် စည်းမျဉ်းများကို ကြိုတင်အသိပေးခြင်း မရှိဘဲ ပြောင်းလဲနိုင်သဖြင့် အောက်ပါ စာမျက်နှာများကသာ နောက်ဆုံး အတည်ဖြစ်ပါသည်။`,
  sourcesSummary: (name, count, focus) =>
    focus ? `${name}: တရားဝင် စာမျက်နှာ ${count} ခု` : `${name}: ဤနှိုင်းယှဉ်ချက်အတွက် စစ်ဆေးထားသော တရားဝင် စာမျက်နှာ ${count} ခု`,
  sourcesMore: (name, count, href) => (
    <>
      {name} ၏ အခကြေးငွေ၊ Leverage၊ အထောက်အထား အတည်ပြုခြင်း၊ Referral စည်းမျဉ်းနှင့် ကန့်သတ်ထားသော နိုင်ငံများ စာရင်း: <Link href={href}>ကျွန်ုပ်တို့၏ {name} စာမျက်နှာရှိ ရင်းမြစ် {count} ခုလုံး</Link>။
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "အခြား Exchange နှိုင်းယှဉ်ချက်များ",
  headToHeadTitle: (name) => `${name} ထိပ်တိုက် နှိုင်းယှဉ်ချက်များ`,
  headToHeadIntro:
    "စိတ်ဝင်စားသည့် အစားထိုး Exchange တစ်ခု ရှိပါက ထိပ်တိုက် နှိုင်းယှဉ်ချက် စာမျက်နှာများတွင် အခကြေးငွေ၊ ထုတ်ကုန်၊ နိုင်ငံနှင့် Referral ကမ်းလှမ်းချက်များကို ပိုမို အသေးစိတ် ဖော်ပြထားပါသည်:",
  otherAlternativesTitle: "အခြား Exchange များအတွက် အစားထိုး Exchange များ",
  otherAlternativesIntro: "ကျန် Exchange တစ်ခုစီ၏ ရှုထောင့်မှ ကြည့်ထားသော တူညီသည့် နှိုင်းယှဉ်ချက်:",
  referralLink: (name, code) => `${name} Referral Code ${code}`,
  allComparisons: "Exchange နှိုင်းယှဉ်ချက် အားလုံး",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>ဆုံးရှုံးနိုင်ခြေ သတိပေးချက်:</strong> ခရစ်တို Derivatives များသည် ရှုပ်ထွေးသော ငွေကြေးဆိုင်ရာ ကိရိယာများ ဖြစ်ပါသည်။ Leverage သည် အမြတ်ကိုရော အရှုံးကိုပါ အဆများစွာ ကြီးထွားစေပြီး မိနစ်ပိုင်းအတွင်း သင့် Margin (အာမခံငွေ) အားလုံးကို ဆုံးရှုံးနိုင်ပါသည်။ ဤစာမျက်နှာသည် အချက်အလက်ပေးရန်သာ ဖြစ်ပြီး ငွေကြေးဆိုင်ရာ အကြံပြုချက် မဟုတ်ပါ။ ကျွန်ုပ်တို့၏ လင့်ခ်များမှတစ်ဆင့် အကောင့်ဖွင့်ပါက ကျွန်ုပ်တို့ ကော်မရှင် ရနိုင်ပါသည်။ အသေးစိတ်ကို <Link href={disclosureHref}>Affiliate ထုတ်ဖော်ချက်</Link>တွင် ကြည့်ပါ။ ကော်မရှင်က ကိန်းဂဏန်းများကို မပြောင်းလဲစေပါ။ ကိန်းဂဏန်းအားလုံးသည် Exchange များ၏ ကိုယ်ပိုင် ကိန်းဂဏန်းများ ဖြစ်ပါသည်။
    </>
  ),
  ctaTitle: (name) => `သင့်အတွက် ${name} အစားထိုး Exchange ကို တွေ့ပြီလား?`,
  ctaText: "စစ်ဆေးပြီး Referral Code ဖြင့် အကောင့်ဖွင့်ပါ။ အကောင့်တစ်ခုတည်းဖြင့် Spot နှင့် Futures ကို အပိုကုန်ကျစရိတ် မရှိဘဲ သုံးနိုင်ပါသည်။",
  ctaButton: "Referral Code အားလုံး ကြည့်မည်",
};
