import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";

/**
 * Interface texts in Burmese (Unicode, never Zawgyi). Same keys as `en.tsx`.
 *
 * Wording: "Referral Code" in Latin letters is the main keyword and follows the name, as Burmese puts the owner first
 * ("Binance Referral Code"); "ဖိတ်ခေါ်ကုဒ်" (invite code) and "Referral ID" are named once each, in running text the code
 * is "ကုဒ်". "Exchange" stays Latin ("Exchange များ"), fees are "အခကြေးငွေ", Spot / Futures / Margin / Maker / Taker /
 * Leverage stay Latin with a capital. Polite written style ("…ပါသည်။"); only FAQ questions use the spoken form people
 * type. Address "သင်", the site is "ကျွန်ုပ်တို့". Exchange names take no reading; particles follow them after one space
 * ("Binance တွင်"). Burmese words are not separated – a space marks a phrase boundary and stands on both sides of a
 * Latin word, number or code. Sentence end "။", list comma "၊ ", Latin digits with a decimal point (0.02%, 10,000 USDT,
 * ဒေါ်လာ 34.1 ဘီလီယံ). Field and button names of the exchanges stay in English, because only the English interface
 * was checked.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A၊ B နှင့် C" – the Burmese comma sits on the item before it. */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join("၊ ")} နှင့် ${items[items.length - 1]}`);
/** "A၊ B သို့မဟုတ် C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join("၊ ")} သို့မဟုတ် ${items[items.length - 1]}`);
/** "all" after a list: "နှစ်ခုလုံး" for two items, "အားလုံး" otherwise. */
const all = (items: string[]) => (items.length === 2 ? "နှစ်ခုလုံး" : "အားလုံး");
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** A particle joins a Burmese word directly and follows a Latin word, a number or a bracket after one space. */
const glue = (s: string, particle: string) => (/[\u1000-\u109F]$/.test(s) ? `${s}${particle}` : `${s} ${particle}`);
/** A step title as a sentence in a running answer. */
const asSentence = (s: string) => (/[။?:]$/.test(s.trim()) ? s.trim() : `${s.trim()}။`);
/** Billions of US dollars: 34.1 → "ဒေါ်လာ 34.1 ဘီလီယံ". */
const billion = (n: string) => `ဒေါ်လာ ${n} ဘီလီယံ`;
/** `shortMonthYearFor("my")` gives "2026 နို"; a title writes the whole month: "2026 နိုဝင်ဘာ". */
const monthNames: Record<string, string> = {
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
const fullMonth = (s: string) => s.replace(/[\u1000-\u109F]+/, (m) => monthNames[m] ?? m);

export const my: Dictionary = {
  list,

  format: {
    billions: (n) => billion(n.toFixed(n >= 10 ? 1 : 2)),
    billionsExact: (n) => billion(n.toFixed(2)),
    billionsFloor: (n) => `${billion(String(Math.floor(n)))}ကျော်`,
  },

  meta: {
    siteTitle: `${site.name} – စစ်ဆေးပြီး ခရစ်တို Exchange Referral Code များ`,
    siteDescription:
      "Binance၊ OKX၊ Bybit၊ Bitget၊ Gate၊ KuCoin နှင့် MEXC ၏ စစ်ဆေးပြီး Referral Code များ။ အကောင့်ဖွင့် လင့်ခ် တစ်ခုတည်းဖြင့် Spot နှင့် Futures အတွက် ကြိုဆိုဘောနပ်စ်နှင့် အခကြေးငွေ ပြန်အမ်းငွေ ရယူပါ။ အခကြေးငွေ၊ အချက်အလက်နှင့် ရိုးသားသော အားသာချက်၊ အားနည်းချက်များကို ဖော်ပြထားပါသည်။",
  },

  layout: {
    skip: "ပင်မ အကြောင်းအရာသို့ သွားရန်",
    mainNav: "ပင်မ မီနူး",
    nav: { exchanges: "Exchange များ", benefits: "အကျိုးကျေးဇူးများ", compare: "နှိုင်းယှဉ်ချက်", howItWorks: "အသုံးပြုပုံ", about: "ကျွန်ုပ်တို့အကြောင်း" },
    getCodes: "ကုဒ်များ ရယူမည်",
    homeLabel: `${site.name} – ${site.domain} ပင်မစာမျက်နှာ`,
    language: "ဘာသာစကား",
    footerAbout:
      "အကြီးဆုံး ခရစ်တို Exchange များ၏ စစ်ဆေးပြီး Referral Code များဖြင့် Spot နှင့် Futures အတွက် ကြိုဆိုဘောနပ်စ်နှင့် အခကြေးငွေ ပြန်အမ်းငွေ ရယူနိုင်ပါသည်။ အချက်အလက်များကို တရားဝင် ရင်းမြစ်များမှ ရှင်းလင်းစွာ ဖော်ပြထားပါသည်။",
    referralCodes: "Referral Code များ",
    referralCodeOf: (name) => `${name} Referral Code`,
    alternatives: "အစားထိုး Exchange များ",
    alternativesOf: (name) => `${name} အစားထိုး Exchange များ`,
    guides: "လမ်းညွှန်များ",
    comparisons: "Exchange နှိုင်းယှဉ်ချက်",
    howCodesWork: "Referral Code အလုပ်လုပ်ပုံ",
    faq: "မေးလေ့ရှိသော မေးခွန်းများ",
    about: "ကျွန်ုပ်တို့အကြောင်းနှင့် စစ်ဆေးပုံ",
    legal: "ဥပဒေရေးရာ",
    imprint: "ဥပဒေဆိုင်ရာ အချက်အလက်",
    privacy: "ကိုယ်ရေးအချက်အလက် မူဝါဒ",
    disclosure: "Affiliate ထုတ်ဖော်ချက်",
    cookieSettings: "Cookie ဆက်တင်များ",
    risk: (
      <>
        <strong>ဆုံးရှုံးနိုင်ခြေ သတိပေးချက်:</strong> Leverage ဖြင့် ခရစ်တို Derivatives အရောင်းအဝယ်လုပ်ခြင်းသည် အလွန် အန္တရာယ်များပြီး
        အပ်နှံထားသော ငွေအားလုံး ဆုံးရှုံးနိုင်ပါသည်။ ဆုံးရှုံးခံနိုင်သော ငွေဖြင့်သာ အရောင်းအဝယ်လုပ်ပါ။ ဤဝက်ဘ်ဆိုက်ပေါ်ရှိ မည်သည့် အကြောင်းအရာမျှ
        ငွေကြေး၊ ရင်းနှီးမြှုပ်နှံမှု သို့မဟုတ် အခွန်ဆိုင်ရာ အကြံပြုချက် မဟုတ်ပါ။
      </>
    ),
    affiliate: (
      <>
        <strong>Affiliate ထုတ်ဖော်ချက်:</strong> လင့်ခ်အချို့သည် Referral Link များ ဖြစ်ပါသည်။ ထိုလင့်ခ်များမှ အကောင့်ဖွင့်ပါက ကျွန်ုပ်တို့
        ကော်မရှင် ရနိုင်ပြီး သင် ပိုမပေးရပါ။ ကျွန်ုပ်တို့ ဖော်ပြသော အချက်အလက်များအပေါ် ကော်မရှင်က မည်သည့်အခါမျှ သက်ရောက်မှု မရှိပါ။ Exchange
        အမည်များနှင့် လိုဂိုများသည် သက်ဆိုင်ရာ ပိုင်ရှင်များ၏ ကုန်အမှတ်တံဆိပ်များ ဖြစ်ပါသည်။ {site.name} သည် ထို Exchange များနှင့် ဆက်နွှယ်မှု
        မရှိသလို ထို Exchange များ၏ ထောက်ခံချက်လည်း မရှိပါ။
      </>
    ),
  },

  consent: {
    label: "Analytics သဘောတူခွင့်ပြုချက်",
    text: (privacyHref) => (
      <>
        <strong>Analytics ကို သင် ဆုံးဖြတ်ပါ။</strong> မည်သည့် စာမျက်နှာများကို ဖတ်ကြသည်ကို သိရန် ကျွန်ုပ်တို့ Google Analytics ကို
        အသုံးပြုလိုပါသည်။ Google Analytics က Cookie များ သိမ်းဆည်းပြီး အသုံးပြုမှု ဒေတာကို Google သို့ ပို့ပါသည်။ သင် ခွင့်ပြုမှသာ စတင်
        အလုပ်လုပ်ပါမည်။ မည်သည့်ဘက်ကို ရွေးသည်ဖြစ်စေ ကြော်ငြာ Cookie မသုံးပါ။ အသေးစိတ်: <Link href={privacyHref}>ကိုယ်ရေးအချက်အလက် မူဝါဒ</Link>။
      </>
    ),
    decline: "ငြင်းပယ်မည်",
    allow: "Analytics ခွင့်ပြုမည်",
  },

  notFound: {
    title: "ဤစာမျက်နှာ မရှိပါ",
    text: "သင် ရှာနေသော Referral Code သည် အခြားနေရာသို့ ပြောင်းရွှေ့သွားနိုင်ပါသည်။ အောက်ပါတို့ထဲမှ တစ်ခုကို စမ်းကြည့်ပါ:",
    back: "ပင်မစာမျက်နှာသို့ ပြန်သွားမည်",
  },

  og: {
    footer: ["စစ်ဆေးပြီး လင့်ခ်", "အခကြေးငွေ၊ အချက်အလက်", "တရားဝင် ရင်းမြစ်"],
    homeAlt: "RefCo – စစ်ဆေးပြီး ခရစ်တို Exchange Referral Code များ",
    homeKicker: (monthYear) => `${monthYear}လ အပ်ဒိတ်`,
    homeTitle: "စစ်ဆေးပြီး Exchange Referral Code များ",
    exchangeAlt: "Exchange Referral Code၊ အစားထိုး Exchange များနှင့် နှိုင်းယှဉ်ချက်များ – RefCo",
    exchangeKicker: (monthYear) => `${monthYear}လ စစ်ဆေးပြီး`,
    exchangeTitle: (e) => `${e.name} Referral Code`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot နှင့် Futures အတွက် လင့်ခ် တစ်ခုတည်း`,
    versusBadge: "ထိပ်တိုက် နှိုင်းယှဉ်ချက်",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `Futures အခကြေးငွေ ${feesA} vs ${feesB} · Leverage ${leverageA}x vs ${leverageB}x · KYC၊ နိုင်ငံများ၊ ဘောနပ်စ်`,
  },

  blocks: {
    signUpOn: (name) => `${name} တွင် အကောင့်ဖွင့်မည်`,
    signUp: "အကောင့်ဖွင့်မည်",
    details: "အသေးစိတ်",
    breadcrumb: "စာမျက်နှာ လမ်းကြောင်း",
    copy: "ကူးယူမည်",
    copied: "ကူးယူပြီး ✓",
    spotMakerTaker: "Spot Maker / Taker",
    futuresMakerTaker: "Futures Maker / Taker",
    maxLeverage: "အမြင့်ဆုံး Leverage",
    since: "တည်ထောင်သည့်နှစ်",
    tableCaption: "အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်၊ Spot နှင့် Futures အခကြေးငွေ၊ Leverage နှင့် ဈေးကွက် ဒေတာအလိုက် ခရစ်တို Exchange နှိုင်းယှဉ်ချက်",
    exchange: "Exchange",
    newUserOffer: "အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်",
    futuresFees: "Futures အခကြေးငွေ (Maker / Taker)",
    spotFees: "Spot အခကြေးငွေ",
    openInterest: "Open Interest",
    markets: "ဈေးကွက်များ",
    action: "လုပ်ဆောင်ချက်",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => `ခရစ်တို Exchange Referral Code (${monthYear}): Spot နှင့် Futures ဘောနပ်စ်`,
    description: (monthYear) =>
      `Binance၊ OKX၊ Bybit၊ Bitget၊ Gate၊ KuCoin နှင့် MEXC ၏ စစ်ဆေးပြီး Referral Code (${monthYear})။ လင့်ခ် တစ်ခုတည်းဖြင့် Spot နှင့် Futures ကြိုဆိုဘောနပ်စ်၊ အခကြေးငွေ ပြန်အမ်းငွေ ရယူပါ။`,
    listName: "Spot နှင့် Futures အတွက် ခရစ်တို Exchange Referral Code များ",
    updated: (monthYear) => `${monthYear}လတွင် အပ်ဒိတ်လုပ်ထားသည်`,
    h1: (
      <>
        ခရစ်တို Exchange Referral Code များ – <span className="hl">စစ်ဆေးပြီး</span> ရှင်းပြထားသည်
      </>
    ),
    lead: (
      <>
        ကမ္ဘာ့ အကြီးဆုံး ခရစ်တို Exchange များတွင် ကြိုဆိုဘောနပ်စ်နှင့် အခကြေးငွေ ပြန်အမ်းငွေ ရယူပါ။ Referral တစ်ခုတည်းက Spot <em>နှင့်</em> Futures
        နှစ်ခုလုံးအတွက် အကျုံးဝင်ပါသည်။ ထို့အပြင် ရွေးချယ်ရန် လိုအပ်သော အခကြေးငွေ၊ Leverage၊ လိုင်စင်နှင့် ရိုးသားသော အားသာချက်၊ အားနည်းချက်များကိုလည်း
        ဖော်ပြထားပါသည်။
      </>
    ),
    browse: "Referral Code များ ကြည့်မည်",
    seeBenefits: "သင့်အကျိုးကျေးဇူးများ ကြည့်မည်",
    trust: (date) => [`${date} ရက်တွင် စစ်ဆေးထားသည်`, "တရားဝင် လင့်ခ်များသာ", "Analytics ကို သင် ခွင့်ပြုမှသာ"],
    featured: "အဓိက Exchange များ",
    ticketName: (name) => `${name} Referral Code`,
    ticketTag: "SPOT + FUTURES",
    stats: ["ထိပ်တန်း Spot နှင့် Futures Exchange များ", "Open Interest စုစုပေါင်း", "ဖော်ပြထားသော Derivatives ဈေးကွက်များ", "အနိမ့်ဆုံး Maker အခကြေးငွေ (MEXC)"],
    marketData: (date) => `ဈေးကွက် ဒေတာ: CoinMarketCap ၏ Derivatives အဆင့်စာရင်း (${date} ရက်နေ့ ဒေတာ)။`,

    benefitsEyebrow: "သင့်အကျိုးကျေးဇူးများ",
    benefitsTitle: `${site.name} Referral Code ဖြင့် အကောင့်ဖွင့်သင့်သည့် အကြောင်းရင်းများ`,
    benefitsLead: "Exchange တူ၊ အခကြေးငွေ တူပါသည်။ သို့သော် တိုက်ရိုက် အကောင့်ဖွင့်လျှင် လက်လွတ်ရမည့် အသုံးပြုသူအသစ် အခွင့်အရေးများကို ရရှိပါသည်။",
    benefits: [
      {
        title: "ကြိုဆိုဘောနပ်စ်",
        text: "Exchange ၏ အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်ကို ရယူနိုင်ပါသည်။ အခကြေးငွေ ပြန်အမ်း ဘောက်ချာ၊ Futures ဘောနပ်စ်နှင့် Task ဆုလက်ဆောင်များ ပါဝင်ပြီး တန်ဖိုး USDT ထောင်ချီအထိ ရှိပါသည်။",
      },
      {
        title: "အရောင်းအဝယ်အခကြေးငွေ ပိုနည်း",
        text: "Exchange က ခွင့်ပြုပါက Referral ကော်မရှင်၏ တစ်စိတ်တစ်ပိုင်းသည် အရောင်းအဝယ်တိုင်းတွင် အခကြေးငွေ ပြန်အမ်းငွေအဖြစ် သင့်ထံ ပြန်ရောက်လာပါသည်။",
      },
      {
        title: "Spot နှင့် Futures၊ လင့်ခ် တစ်ခုတည်း",
        text: "Referral ကို သင့်အကောင့်နှင့် ချိတ်ဆက်ထားသဖြင့် Spot၊ Futures၊ Margin နှင့် Options အားလုံးအတွက် အကျုံးဝင်ပါသည်။ ဒုတိယ ကုဒ် မလိုအပ်ပါ။",
      },
      {
        title: "အပို ကုန်ကျစရိတ် လုံးဝမရှိ",
        text: "Referral ကြောင့် သင့်အခကြေးငွေ မည်သည့်အခါမျှ မတိုးပါ။ သင့်အတွက် အကျိုးသာ ရှိပါသည်။ Referral အစီအစဉ်ကို Exchange က ကျခံပါသည်။",
      },
      {
        title: "တရားဝင် အကောင့်ဖွင့်စာမျက်နှာများ",
        text: "လင့်ခ်တိုင်းက Exchange ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်ကို ဖွင့်ပါသည်။ ကြားလူ မရှိသလို ကျွန်ုပ်တို့ထံ မည်သည့် ဒေတာမျှ မရောက်ပါ။",
      },
      {
        title: "အကောင့်ဖွင့်စဉ်တွင် သုံးခြင်းက အကောင်းဆုံး",
        text: "Exchange အချို့က ရက် 30 အတွင်း ကုဒ် ထည့်ခွင့်ပေးပြီး အချို့က လုံးဝ ခွင့်မပေးပါ။ အကောင့် မဖွင့်မီ လင့်ခ်ကို အသုံးပြုပါက Exchange တိုင်းတွင် စိတ်ချရပါသည်။",
      },
    ],
    offersCaption: "Exchange အလိုက် အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်များ",
    offersHead: ["Exchange", "Referral ဖြင့် ရသော အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်", "လင့်ခ် တစ်ခုတည်းဖြင့် အကျုံးဝင်သည်"],
    claim: "ရယူမည်",
    offersNote: (date) =>
      `ကမ်းလှမ်းချက်များကို ${date} ရက်တွင် စစ်ဆေးထားပါသည်။ ကြိုဆိုဆုလက်ဆောင်များကို Task များ ပြီးမြောက်မှ ရရှိပြီး အထောက်အထား အတည်ပြုရန် လိုအပ်ကာ ဒေသအလိုက် ကွာခြားပါသည်။ လက်ရှိ စည်းမျဉ်းများကို Exchange တစ်ခုချင်းစီ၏ အကောင့်ဖွင့်စာမျက်နှာတွင် ဖော်ပြထားပါသည်။`,

    exchangesEyebrow: "Referral Code များ",
    exchangesTitle: "သင့် Exchange ကို ရွေးချယ်ပါ",
    exchangesLead:
      "စာမျက်နှာတိုင်းတွင် Referral၊ အခကြေးငွေနှင့် ထို Exchange က မည်သူ့အတွက် အသင့်တော်ဆုံးဖြစ်သည်ကို ရှင်းပြထားသဖြင့် မှန်ကန်သော ပလက်ဖောင်းတွင် တစ်ကြိမ်တည်း အကောင့်ဖွင့်နိုင်ပါသည်။",
    sideBySide: "ဘေးချင်းယှဉ်",
    notSure: "မည်သည့် Exchange ကို ရွေးရမည် မသေချာသေးပါသလား?",
    notSureText: (count) =>
      `Exchange ${count} ခုလုံး၏ အခကြေးငွေ၊ Leverage နှင့် Open Interest (ဖွင့်ထားသော Position စုစုပေါင်း) ကို ဇယား တစ်ခုတည်းတွင် နှိုင်းယှဉ်ပါ။`,
    compareExchanges: "Exchange များ နှိုင်းယှဉ်မည်",

    compareTitle: "ခရစ်တို Exchange နှိုင်းယှဉ်ချက်: Spot နှင့် Futures",
    compareLead:
      "အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်၊ ပုံမှန်အဆင့် (VIP မဟုတ်) Spot နှင့် Futures အခကြေးငွေ၊ Leverage နှင့် ဈေးကွက် အတိမ်အနက်ကို တစ်ချက်တည်းဖြင့် ကြည့်ရှုနိုင်ပါသည်။",
    compareNote: (reviewed, market) =>
      `အခကြေးငွေ: Exchange တစ်ခုချင်းစီ ထုတ်ပြန်ထားသော ပုံမှန်အဆင့်၊ ${reviewed} ရက်တွင် စစ်ဆေးထားသည်။ Open Interest နှင့် ဈေးကွက်များ: CoinMarketCap၊ ${market} ရက်။ အခကြေးငွေ ပြောင်းလဲနိုင်သဖြင့် အရောင်းအဝယ် မလုပ်မီ Exchange တွင် ပြန်စစ်ပါ။`,
    versusStrip: {
      title: "Exchange နှစ်ခုကို ထိပ်တိုက် နှိုင်းယှဉ်ပါ",
      text: (pairs, hubHref) => (
        <>
          Exchange အတွဲ {pairs} တွဲကို အခကြေးငွေ၊ Leverage၊ ထုတ်ကုန်များ၊ နိုင်ငံများ၊ KYC နှင့် Referral ကမ်းလှမ်းချက်များအလိုက် ဘေးချင်းယှဉ်
          နှိုင်းယှဉ်ထားပါသည်။ <Link href={hubHref}>Exchange နှိုင်းယှဉ်ချက် အားလုံး</Link>ကို ကြည့်ပါ။
        </>
      ),
    },
    alternativesStrip: {
      title: "သင့် Exchange အတွက် အစားထိုး Exchange ရှာနေပါသလား?",
      text: (others) =>
        `နှိုင်းယှဉ်ချက်တိုင်းက Exchange တစ်ခုကို ကျန် Exchange ${others} ခုနှင့် အခကြေးငွေ၊ Leverage၊ ထုတ်ကုန်များ၊ အထောက်အထား အတည်ပြုခြင်းနှင့် လက်ခံသော နိုင်ငံများအလိုက် နှိုင်းယှဉ်ထားပါသည်။`,
    },

    picksEyebrow: "အတိုချုပ် အဖြေ",
    picksTitle: "မည်သည့် Exchange က သင့်အတွက် အသင့်တော်ဆုံးနည်း?",
    picks: [
      { label: "Liquidity အကောင်းဆုံး", slug: "binance", why: "Open Interest နှင့် Futures အရောင်းအဝယ်ပမာဏ ကမ္ဘာတွင် အများဆုံး ဖြစ်ပါသည်။" },
      {
        label: "အခကြေးငွေ နည်းပြီး Options ရှိ",
        slug: "okx",
        why: "Spot အခကြေးငွေ 0.08% / 0.10%၊ Options 0.03% ဖြစ်ပြီး Proof of Reserves (အရန်ငွေ သက်သေပြချက်) ကို လစဉ် ထုတ်ပြန်ပါသည်။",
      },
      { label: "ဖုန်းဖြင့် Futures အရောင်းအဝယ်", slug: "bybit", why: "Matching Engine မြန်ဆန်ပြီး အကောင်းဆုံး အရောင်းအဝယ် အက်ပ်များထဲမှ တစ်ခု ဖြစ်ပါသည်။" },
      { label: "Copy Trading", slug: "bitget", why: "အတွေ့အကြုံရှိသော Futures Trader များ၏ အရောင်းအဝယ်ကို အလိုအလျောက် လိုက်လုပ်နိုင်ပါသည်။" },
      { label: "Altcoin အများဆုံး", slug: "gate", why: "ဒစ်ဂျစ်တယ် ပိုင်ဆိုင်မှု 5,400 ကျော် ရှိပြီး လူသိနည်းသော Token များတွင်ပါ Futures ရှိပါသည်။" },
      { label: "အရောင်းအဝယ် ဘော့တ်", slug: "kucoin", why: "Spot နှင့် Futures အတွက် အခမဲ့ အရောင်းအဝယ် ဘော့တ်များ ရှိပါသည်။" },
      { label: "အခကြေးငွေ အနည်းဆုံး", slug: "mexc", why: "Spot နှင့် Futures Contract အများစုတွင် Maker အခကြေးငွေ 0% ဖြစ်ပါသည်။" },
    ],

    howEyebrow: "အသုံးပြုပုံ",
    howTitle: "Referral Code ကို အဆင့် သုံးဆင့်ဖြင့် အသုံးပြုနည်း",
    steps: [
      {
        title: "Exchange ရွေးချယ်ပါ",
        text: "အထက်ပါ အခကြေးငွေ၊ Leverage နှင့် လုပ်ဆောင်ချက်များကို နှိုင်းယှဉ်ပြီး သင့် အရောင်းအဝယ်ပုံစံနှင့် ကိုက်ညီသော Exchange ၏ စာမျက်နှာကို ဖွင့်ပါ။",
      },
      {
        title: "ကျွန်ုပ်တို့ လင့်ခ်မှ အကောင့်ဖွင့်ပါ",
        text: "Referral ကို အလိုအလျောက် ချိတ်ဆက်ပေးပါသည်။ အခြားနေရာတွင် အကောင့် မဖွင့်မီ သင့် အီးမေးလ် သို့မဟုတ် ဖုန်းနံပါတ်ဖြင့် စာရင်းသွင်းပါ။",
      },
      {
        title: "အတည်ပြုပြီး ဆုလက်ဆောင် ရယူပါ",
        text: "အထောက်အထား အတည်ပြုခြင်း (KYC) ကို ပြီးဆုံးအောင် လုပ်ပါ။ 2FA ဖြင့် အကောင့်ကို ကာကွယ်ပြီး Dashboard တွင် ပြသထားသော ကြိုဆိုဆုလက်ဆောင်များကို စစ်ဆေးပါ။",
      },
    ],

    trustEyebrow: `${site.name} ကို ရွေးရသည့် အကြောင်း`,
    trustTitle: "Click များအတွက် မဟုတ်ဘဲ ယုံကြည်မှုအတွက် တည်ဆောက်ထားသည်",
    trustCards: [
      {
        title: "စစ်ဆေးပြီး ကမ်းလှမ်းချက်များ",
        text: "Exchange တစ်ခုချင်းစီ၏ အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်ကို စစ်ဆေးပြီး တကယ် ရယူနိုင်သည်များကိုသာ ဖော်ပြပါသည်။",
      },
      {
        title: "နောက်ဆုံးရ၊ ရက်စွဲပါ အချက်အလက်",
        text: "အခကြေးငွေ၊ Leverage နှင့် လိုင်စင်များကို ပုံမှန် ပြန်စစ်ပြီး စာမျက်နှာတိုင်းတွင် စစ်ဆေးသည့် ရက်စွဲကို ဖော်ပြထားပါသည်။",
      },
      { title: "ကိုယ်ရေးအချက်အလက်ကို ဦးစားပေး", text: "ကြော်ငြာ Pixel မရှိ၊ ကြော်ငြာ Cookie မရှိပါ။ Analytics ကို သင် ခွင့်ပြုမှသာ အသုံးပြုပါသည်။" },
      {
        title: "မြန်ဆန်ပြီး ရှင်းလင်း",
        text: "မည်သည့်ဖုန်းတွင်မဆို ချက်ချင်း ဖွင့်နိုင်သော ပေါ့ပါးသည့် စာမျက်နှာများ ဖြစ်ပြီး အဖြေကို အရင်၊ အသေးစိတ်ကို နောက်မှ ဖော်ပြပါသည်။",
      },
      {
        title: "ရိုးသားသော အားသာချက်၊ အားနည်းချက်",
        text: "အားနည်းချက်များ၊ ဖြစ်ခဲ့သော ဖြစ်ရပ်များနှင့် ဒေသဆိုင်ရာ ကန့်သတ်ချက်များကိုပါ ဖော်ပြပါသည်။ ကြော်ငြာစကား သက်သက် မဟုတ်ပါ။",
      },
      {
        title: "ဆုံးရှုံးနိုင်ခြေကို ဦးစွာ",
        text: "Leverage သည် အပ်နှံထားသော ငွေကို လျင်မြန်စွာ ဆုံးရှုံးစေနိုင်ပါသည်။ ထိုအချက်ကို စာမျက်နှာတိုင်းတွင် ရှင်းလင်းစွာ ဖော်ပြထားပါသည်။",
      },
    ],

    faqEyebrow: "မေးလေ့ရှိသော မေးခွန်းများ",
    faqTitle: "Referral Code – မေးလေ့ရှိသော မေးခွန်းများ",
    faqs: (reviewed) => [
      {
        q: "ခရစ်တို Exchange Referral Code ဆိုတာ ဘာလဲ?",
        a: "Referral Code (ဖိတ်ခေါ်ကုဒ် သို့မဟုတ် Referral ID ဟုလည်း ခေါ်သည်) သည် Exchange အကောင့်အသစ်ကို ထို Exchange ကို အကြံပြုခဲ့သော လူ သို့မဟုတ် ဝက်ဘ်ဆိုက်နှင့် ချိတ်ဆက်ပေးသော တိုတောင်းသည့် သတ်မှတ်ကုဒ် ဖြစ်ပါသည်။ Exchange များက ဤကုဒ်ဖြင့် နှစ်ဖက်စလုံးကို ဆုချပါသည်။ အသုံးပြုသူအသစ်များက ပုံမှန်အားဖြင့် ကြိုဆိုဆုလက်ဆောင် သို့မဟုတ် အရောင်းအဝယ်အခကြေးငွေ လျှော့ဈေး ရရှိပြီး ဖိတ်ခေါ်သူက အခကြေးငွေ၏ တစ်စိတ်တစ်ပိုင်းကို ရရှိပါသည်။",
      },
      {
        q: "Referral Code သုံးရင် ဘာ အကျိုးကျေးဇူးတွေ ရလဲ?",
        a: "Referral ဖြင့် အကောင့်ဖွင့်သော အသုံးပြုသူအသစ်များသည် Exchange ၏ အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်ကို ရယူနိုင်ပါသည်။ ဥပမာ Bybit တွင် Referral ဆုလက်ဆောင် 250 USDT အထိ သို့မဟုတ် MEXC တွင် အသုံးပြုသူအသစ် ဆုလက်ဆောင် 10,000 USDT အထိ ဖြစ်ပါသည်။ ဖိတ်ခေါ်သူက ကော်မရှင် မျှဝေပါက Gate တွင် တစ်နှစ်ကြာ 10% ကဲ့သို့ အရောင်းအဝယ်အခကြေးငွေ၏ တစ်စိတ်တစ်ပိုင်းကိုလည်း ပြန်ရပါသည်။ အပို ကုန်ကျစရိတ် မရှိပါ။",
      },
      {
        q: "Referral Code တစ်ခုတည်းကို Spot ရော Futures ပါ သုံးလို့ ရလား?",
        a: "ရပါသည်။ Binance၊ OKX၊ Bybit၊ Bitget၊ Gate၊ KuCoin နှင့် MEXC တွင် Referral ကို ထုတ်ကုန် တစ်ခုတည်းနှင့် မဟုတ်ဘဲ သင့်အကောင့်နှင့် ချိတ်ဆက်ထားပါသည်။ အကောင့်ဖွင့်ခြင်း တစ်ကြိမ်တည်းဖြင့် Spot နှင့် Futures အရောင်းအဝယ် အကျုံးဝင်ပြီး Exchange တွင် ရှိပါက Margin၊ Options သို့မဟုတ် Copy Trading ပါ အကျုံးဝင်ပါသည်။",
      },
      {
        q: "Referral Code နဲ့ အကောင့်ဖွင့်ရင် ပိုပေးရလား?",
        a: "ပိုမပေးရပါ။ Referral Link မှ အကောင့်ဖွင့်ခြင်းက သင့်အခကြေးငွေကို မည်သည့်အခါမျှ မတိုးစေပါ။ Exchange နှင့် သင့်ဒေသပေါ် မူတည်၍ Referral မပါဘဲ မရနိုင်သော အခကြေးငွေ လျှော့ဈေး သို့မဟုတ် ကြိုဆိုဘောနပ်စ်ကိုပင် ရနိုင်ပါသည်။",
      },
      {
        q: "အကောင့်ဖွင့်ပြီးမှ Referral Code ထည့်လို့ ရလား?",
        a: "Exchange ပေါ် မူတည်ပါသည်။ Binance တွင် ငွေမသွင်း၊ အရောင်းအဝယ် မလုပ်ရသေးပါက အကောင့်ဖွင့်ပြီး ရက် 30 အတွင်း ကုဒ် ချိတ်ဆက်နိုင်ပြီး MEXC တွင် အကောင့်ဖွင့်ပြီး ရက် 30 အတွင်း ဖိတ်ခေါ်သူကို ကိုယ်တိုင် ချိတ်ဆက်နိုင်ပါသည်။ KuCoin ၏ အကူအညီ စင်တာတွင် “Link Referrer” (ဖိတ်ခေါ်သူ ချိတ်ဆက်ရန်) တောင်းဆိုချက် ရှိပါသည်။ Bybit၊ OKX နှင့် Bitget သည် အကောင့်ဖွင့်စဉ်တွင်သာ ကုဒ်ကို လက်ခံပြီး Gate က နောက်မှ ထည့်နိုင်သည့် နည်းလမ်း မဖော်ပြထားပါ။ အကောင့် မဖွင့်မီ လင့်ခ်ကို အသုံးပြုခြင်းက စိတ်အချရဆုံး နည်းလမ်း ဖြစ်ပါသည်။",
      },
      {
        q: "ဘယ် ခရစ်တို Exchange က Futures အခကြေးငွေ အနည်းဆုံးလဲ?",
        a: `နောက်ဆုံး စစ်ဆေးခဲ့သည့် ${reviewed} ရက်တွင် MEXC ၏ ပုံမှန် Futures အခကြေးငွေသည် အနည်းဆုံး ဖြစ်ပြီး BTCUSDT တွင် Maker 0% နှင့် Taker 0.02% ဖြစ်ပါသည်။ ပုံမှန်အဆင့်တွင် Binance၊ OKX နှင့် Gate က Maker 0.02% / Taker 0.05%၊ Bybit က 0.02% / 0.055%၊ Bitget နှင့် KuCoin က 0.02% / 0.06% ကောက်ခံပါသည်။`,
      },
      {
        q: "ခရစ်တို Derivatives အတွက် ဘယ် Exchange က အကောင်းဆုံးလဲ?",
        a: "သင် အရောင်းအဝယ်လုပ်မည့် ထုတ်ကုန်ပေါ် မူတည်ပါသည်။ Binance တွင် Liquidity အကောင်းဆုံး ရှိပြီး OKX က အခကြေးငွေ နည်းခြင်းနှင့် Options ကို ပေါင်းစပ်ထားပါသည်။ Bybit သည် မြန်ဆန်သော Perpetual အရောင်းအဝယ်အတွက် တည်ဆောက်ထားပြီး Bitget သည် Copy Trading၊ Gate သည် Altcoin Futures၊ KuCoin သည် ဘော့တ်များ၊ MEXC သည် အခကြေးငွေ အနည်းဆုံးအတွက် သင့်တော်ပါသည်။",
      },
      {
        q: "ဒီ Exchange တွေကို အမေရိကန်မှာ သုံးလို့ ရလား?",
        a: "အများစု မရပါ။ Binance၊ Bybit၊ Bitget၊ Gate၊ KuCoin နှင့် MEXC သည် အမေရိကန်ပြည်ထောင်စုကို ကန့်သတ်ထားသော သို့မဟုတ် တားမြစ်ထားသော နိုင်ငံအဖြစ် သတ်မှတ်ထားပြီး OKX သည် အမေရိကန်ရှိ တရားစီရင်ပိုင်ခွင့် နယ်မြေအချို့ကို ကန့်သတ်ထားပါသည်။ ယူကေ၊ ကနေဒါနှင့် ဥရောပသမဂ္ဂ (EU) တွင်လည်း အသုံးပြုနိုင်မှု ကွာခြားပါသည်။ Exchange စာမျက်နှာတိုင်းတွင် Exchange ၏ ကိုယ်ပိုင် စည်းမျဉ်းများမှ ကန့်သတ်ထားသော နိုင်ငံများကို ဖော်ပြထားပါသည်။",
      },
      {
        q: "ဒီ အချက်အလက်တွေကို ဘယ်လောက် ခဏခဏ အပ်ဒိတ်လုပ်လဲ?",
        a: `အခကြေးငွေ၊ Leverage၊ လိုင်စင်နှင့် ဈေးကွက် ဒေတာကို ပုံမှန် ပြန်စစ်ပါသည်။ စာမျက်နှာတိုင်းတွင် နောက်ဆုံး စစ်ဆေးသည့် ရက်စွဲကို ဖော်ပြထားပြီး လက်ရှိ ဒေတာကို ${reviewed} ရက်တွင် စစ်ဆေးထားပါသည်။`,
      },
    ],
    countryFaq: null,

    ctaTitle: "ကြိုဆိုဘောနပ်စ် ရယူပါ",
    ctaText: "Exchange တစ်ခုကို ရွေးချယ်ပါ။ စစ်ဆေးပြီး Referral ဖြင့် အကောင့်ဖွင့်ကာ အကောင့် တစ်ခုတည်းဖြင့် Spot နှင့် Futures အရောင်းအဝယ်လုပ်ပါ။",
    ctaButton: "Referral Code အားလုံး ကြည့်မည်",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    title: (e, shortMonthYear) => `${e.name} Referral Code ${e.referralCode} (${fullMonth(shortMonthYear)}): ${benefit(e)}`,
    description: (e, monthYear) =>
      `${e.name} Referral Code: ${e.referralCode}။ ${benefit(e)}။ ကုဒ်ထည့်ရမည့်နေရာ၊ အကောင့်ဖွင့်နည်း၊ KYC နှင့် အခကြေးငွေ (${monthYear}လ စစ်ဆေးပြီး)။`,
    keywords: (e) => {
      // Comparison only (Burmese has no case): drops "binance invite code" next to "Binance Invite Code".
      const same = (k: string) => k.toLowerCase().replace(/\s/g, "");
      const latin = e.name.toLowerCase();
      return [
        `${e.name} Referral Code`,
        `${e.name} Referral Code ${e.referralCode}`,
        `${e.name} ${e.referral.codeName}`,
        `${e.name} ဖိတ်ခေါ်ကုဒ်`,
        `${e.name} Referral ID`,
        `${e.name} Invite Code`,
        `${e.name} ရည်ညွှန်းကုဒ်`,
        `${e.name} Referral Link`,
        `${e.name} ကြိုဆိုဘောနပ်စ်`,
        `${e.name} အကောင့်ဖွင့်နည်း`,
        `${e.name} Referral Code ထည့်နည်း`,
        `${e.name} KYC`,
        `${e.name} ငွေထည့်နည်း`,
        `${e.name} ငွေထုတ်နည်း`,
        `${e.name} အခကြေးငွေ`,
        `${e.name} Futures အခကြေးငွေ`,
        `${latin} fees`,
        `${latin} bonus`,
      ].filter((k, i, keys) => keys.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "ကုဒ် အကျဉ်းချုပ်",
      benefits: "သင့်အကျိုးကျေးဇူးများ",
      "use-code": "ကုဒ် ထည့်နည်း",
      "how-to": "အကောင့်ဖွင့်နည်း",
      verification: "အထောက်အထား အတည်ပြုခြင်း (KYC)",
      "key-facts": "အဓိက အချက်အလက်များ",
      fees: "အခကြေးငွေ",
      about: "Exchange အကြောင်း",
      "pros-cons": "အားသာချက်နှင့် အားနည်းချက်",
      "best-for": "သင့်တော်သူများ",
      safety: "လုံခြုံရေးနှင့် အသုံးပြုနိုင်မှု",
      faq: "မေးလေ့ရှိသော မေးခွန်းများ",
      sources: "ရင်းမြစ်များ",
      alternatives: "အစားထိုး Exchange များနှင့် နှိုင်းယှဉ်ချက်များ",
    },
    onThisPage: "ဤစာမျက်နှာတွင်",
    crumbHome: "ပင်မစာမျက်နှာ",
    crumbCodes: "Referral Code များ",
    crumbPage: (e) => `${e.name} Referral Code`,

    /* JSON-LD */
    offerName: (e) => `${e.name} Referral Code ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}။ Referral တစ်ခုတည်းသည် ${glue(list(e.referralCovers), "အတွက်")} အကျုံးဝင်ပါသည်။`,
    offerCategory: "ခရစ်တို Exchange အကောင့်ဖွင့်ခြင်း",
    howToName: (e) => `${e.name} တွင် Referral Code ${e.referralCode} ဖြင့် အကောင့်ဖွင့်နည်း`,
    howToDescription: (e) =>
      `${e.name} ဖော်ပြထားသည့်အတိုင်း အကောင့်ဖွင့် အဆင့်များ ဖြစ်ပြီး Referral Code ${e.referralCode} ထည့်ရမည့်နေရာလည်း ပါဝင်ပါသည်။`,

    /* Hero */
    updated: (date) => `${date} ရက်တွင် စစ်ဆေးပြီး အပ်ဒိတ်လုပ်ထားသည်`,
    h1: (e) => `${e.name} Referral Code: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong>။ ထို့အပြင် Referral တစ်ခုတည်းက {list(e.referralCovers)} {all(e.referralCovers)}အတွက် အကျုံးဝင်ပါသည်။ သင် ရရှိမည့်အရာ၊
        အရောင်းအဝယ်လုပ်ရန် ကုန်ကျစရိတ်နှင့် {e.name} သည် သင့်အတွက် မှန်ကန်သော Exchange ဟုတ်မဟုတ်ကို ဤနေရာတွင် ဖော်ပြထားပါသည်။
      </>
    ),
    quickAnswer: "အတိုချုပ် အဖြေ",
    highlights: "ထူးခြားချက်များ",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `Leverage ${shortLeverage(e)}`,
      `Derivatives ဈေးကွက် ${e.market.markets} ခု`,
      `${e.founded} ခုနှစ်မှ စ၍`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `သင့် ${e.name} အကောင့်ဖွင့်ခြင်း`,
    appliedByLink: "ဤလင့်ခ်မှတစ်ဆင့် Referral ကို အလိုအလျောက် ချိတ်ဆက်ပေးပါသည်။",
    goesToOfficial: (domain) => `တရားဝင် ${domain} ဝက်ဘ်ဆိုက်သို့ တိုက်ရိုက် ရောက်ပါသည်။`,
    codeLabel: "Referral Code",
    noCodeToType: "ကုဒ် ရိုက်ထည့်ရန် မလိုပါ၊ လင့်ခ်မှ အလိုအလျောက် ချိတ်ဆက်ပါသည်",
    officialSite: (domain) => `တရားဝင် ဝက်ဘ်ဆိုက်: ${domain}`,
    yourBenefits: "သင့်အကျိုးကျေးဇူးများ",
    freeNeverRaises: "အခမဲ့ ဖြစ်ပြီး Referral ကြောင့် အခကြေးငွေ မည်သည့်အခါမျှ မတိုးပါ",
    qrLabel: (e) => `QR Code: Referral ${e.referralCode} ဖြင့် ${e.name} အက်ပ်တွင် အကောင့်ဖွင့်ရန်`,
    preferApp: "အက်ပ်ကို ပိုနှစ်သက်ပါသလား?",
    scan: (e) => (
      <>
        ဖုန်းကင်မရာဖြင့် စကင်ဖတ်ပြီး {e.name} ကို ဖွင့်ပါ။
        {e.referralCode ? (
          <>
            {" "}
            Referral <strong>{e.referralCode}</strong> ကို ထည့်သွင်းပြီး ဖြစ်ပါသည်။
          </>
        ) : null}{" "}
        iOS နှင့် Android တွင် အသုံးပြုနိုင်ပါသည်။
      </>
    ),
    riskLine: (e, links) => (
      <>
        Leverage ဖြင့် အရောင်းအဝယ်လုပ်ခြင်းသည် အန္တရာယ်များပါသည်။ {e.name} ကို နိုင်ငံတိုင်းတွင် အသုံးပြု၍ မရပါ။ <a href="#safety">အသုံးပြုနိုင်မှု</a>{" "}
        သို့မဟုတ် <Link href={links.alternatives}>{e.name} အစားထိုး Exchange များ</Link>ကို ကြည့်ပါ။
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `${e.name} Referral Code ${e.referralCode} အကျဉ်းချုပ်`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        {monthYear}လအတွက် {e.name} Referral Code (ဖိတ်ခေါ်ကုဒ်) သည် <strong>{e.referralCode}</strong> ဖြစ်ပါသည်။ ဤကုဒ်၏ လုပ်ဆောင်ချက်၊ ထည့်ရမည့်နေရာနှင့်{" "}
        {e.name} က အကောင့်အသစ်အတွက် လိုအပ်ချက်များကို အောက်ပါ ဇယားတွင် အကျဉ်းချုပ် ဖော်ပြထားပါသည်။ စာကြောင်းတိုင်းကို {date} ရက်တွင် {e.name} ၏
        ကိုယ်ပိုင် စာမျက်နှာများနှင့် တိုက်စစ်ထားပါသည်။
      </>
    ),
    codeFactsCaption: (e) => `${e.name} Referral Code ${e.referralCode}: အဓိက အချက်အလက်များ`,
    codeFacts: (e, date) => [
      [`${e.name} Referral Code`, <strong key="code">{e.referralCode}</strong>],
      [`${e.name} က ခေါ်သည့် အမည်`, e.referral.codeName],
      ["အသုံးပြုသူအသစ် အကျိုးကျေးဇူး", benefit(e)],
      ["ထည့်ရမည့်နေရာ", e.referral.whereShort],
      ["အကောင့်ဖွင့်ပြီးမှ ထည့်နိုင်ပါသလား?", e.referral.afterSignupShort],
      ["အကျုံးဝင်သည့် ထုတ်ကုန်", e.referralCovers.join("၊ ")],
      ["အထောက်အထား အတည်ပြုခြင်း (KYC)", e.signup.kycShort],
      ["ကုန်ကျစရိတ်", "အခမဲ့၊ အခကြေးငွေ မတိုးပါ"],
      ["နောက်ဆုံး စစ်ဆေးသည့်နေ့", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `${e.name} Referral ဖြင့် ရရှိမည့် အကျိုးကျေးဇူးများ`,
    benefitsIntro: (e) => (
      <>
        {e.name} Referral Code <strong>{e.referralCode}</strong> ဖြင့် အကောင့်ဖွင့်ခြင်းအတွက် အပို ကုန်ကျစရိတ် မရှိပါ။ {e.name} က လက်ရှိ
        အကောင့်အသစ်များအတွက် ကမ်းလှမ်းထားသည်များကို အောက်တွင် ဖော်ပြထားပါသည်။ ကုဒ် တစ်ခုတည်းကို <strong>{list(e.referralCovers)}</strong>{" "}
        {all(e.referralCovers)}အတွက် အသုံးပြုနိုင်သဖြင့် Spot နှင့် Futures အတွက် သီးခြား ကုဒ် မလိုအပ်ပါ။
      </>
    ),
    offerChecked: (date) => `အသုံးပြုသူအသစ် ကမ်းလှမ်းချက် · ${date} ရက်တွင် စစ်ဆေးထားသည်`,
    appliedWhenRegistering: "ဤ Referral ဖြင့် အကောင့်ဖွင့်လျှင် ရရှိမည်",
    noExtraCost: "အပို ကုန်ကျစရိတ် မရှိ၊ Referral ကြောင့် အရောင်းအဝယ်အခကြေးငွေ မည်သည့်အခါမျှ မတိုးပါ",
    oneReferralCovers: "Referral တစ်ခုတည်းဖြင့် အကျုံးဝင်သည်:",
    claimOffer: (e) => `${e.name} အသုံးပြုသူအသစ် ကမ်းလှမ်းချက် ရယူမည်`,
    tasksTitle: (e) => `${e.name} အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်: Task များနှင့် ဆုလက်ဆောင်များ`,
    tasksCaption: (e) => `${e.name} အသုံးပြုသူအသစ် Task များနှင့် Task တစ်ခုချင်းစီ၏ ဆုလက်ဆောင်`,
    task: "Task",
    reward: "ဆုလက်ဆောင်",
    tasksNote: (e, date) =>
      `${date} ရက်တွင် ${e.name} ဖော်ပြထားသည့်အတိုင်း ဖြစ်ပါသည်။ ကမ်းလှမ်းချက်များသည် နိုင်ငံအလိုက် ကွာခြားပြီး မကြာခဏ ပြောင်းလဲပါသည်။ အကောင့်ဖွင့်ပြီးနောက် သင့်အကောင့်တွင် ပြသသော စည်းမျဉ်းများသာ သက်ရောက်ပါသည်။`,

    /* How to use the code */
    useCodeTitle: (e) => `${e.name} Referral Code ${e.referralCode} ထည့်နည်း`,
    whereToEnter: (e) => `${e.name} Referral Code ထည့်ရမည့်နေရာ`,
    forgotCode: "ကုဒ် ထည့်ရန် မေ့ခဲ့ပါသလား? အကောင့်ဖွင့်ပြီးနောက် ထည့်နည်း",
    asInvited: "ဖိတ်ခေါ်ခံရသူအဖြစ် ရရှိမည့်အရာများ",
    interfaceNote: (e) => (
      <>
        “…” ဖြင့် ပြထားသော အကွက်နှင့် ခလုတ် အမည်များကို ကျွန်ုပ်တို့ စစ်ဆေးခဲ့သော {e.name} ၏ အင်္ဂလိပ်ဘာသာ ဗားရှင်းမှ ယူထားပါသည်။ ဘာသာစကား
        ပြောင်းထားပါက အမည်များ ကွဲပြားနိုင်ပါသည်။
      </>
    ),

    /* Registration */
    howToTitle: (e) => `${e.name} တွင် အဆင့်ဆင့် အကောင့်ဖွင့်နည်း`,
    howToIntro: (e) => (
      <>
        {e.name} တွင် {glue(orList(e.signup.methods), "ဖြင့်")} အကောင့်ဖွင့်နိုင်ပါသည်။ အောက်ပါ အဆင့်များသည် {e.name} ဖော်ပြထားသည့်အတိုင်း ဖြစ်ပြီး
        Referral Code <strong>{e.referralCode}</strong> ထည့်ရမည့် အဆင့်ကိုလည်း ပြထားပါသည်။
      </>
    ),
    startRegistration: (e) => `${e.name} တွင် အကောင့်ဖွင့်ခြင်း စတင်မည်`,

    /* Verification */
    kycTitle: (e) => `${e.name} အထောက်အထား အတည်ပြုခြင်း (KYC)`,
    verification: "အတည်ပြုခြင်း",
    minAge: "အနည်းဆုံး အသက်",
    documents: "လက်ခံသော စာရွက်စာတမ်းများ",

    /* Key facts */
    factsTitle: (e) => `${e.name} အကျဉ်းချုပ်`,
    founded: "တည်ထောင်သည့်နှစ်",
    headquarters: "ဌာနချုပ်",
    futuresFees: "Futures အခကြေးငွေ (Maker / Taker)",
    spotFees: "Spot အခကြေးငွေ (Maker / Taker)",
    maxLeverage: "အမြင့်ဆုံး Leverage",
    assets: "ပိုင်ဆိုင်မှုများ",
    openInterest: "Open Interest (ဖွင့်ထားသော Position စုစုပေါင်း)",
    volume24h: "24 နာရီ Derivatives အရောင်းအဝယ်ပမာဏ",
    users: "အသုံးပြုသူများ",
    regulation: "ကြီးကြပ်မှု",
    factsNote: (date) =>
      `Open Interest၊ အရောင်းအဝယ်ပမာဏနှင့် ဈေးကွက် အရေအတွက်: CoinMarketCap ၏ Derivatives အဆင့်စာရင်း၊ ${date} ရက်။ အခကြေးငွေ: စစ်ဆေးသည့်နေ့ရှိ ပုံမှန်အဆင့်။`,

    /* Fees */
    feesTitle: (e) => `${e.name} အခကြေးငွေ ရှင်းလင်းချက်`,
    feesIntro: (e) =>
      `${e.name} သည် Maker / Taker စနစ်ကို အသုံးပြုပါသည်။ Order Book သို့ Liquidity ထည့်ပေးသော Order များ (Limit Order) က Maker အခကြေးငွေ ပေးရပြီး Liquidity ကို ယူသွားသော Order များ (Market Order) က Taker အခကြေးငွေ ပေးရပါသည်။ ရက် 30 အရောင်းအဝယ်ပမာဏ သို့မဟုတ် ကိုင်ဆောင်ထားသော ပိုင်ဆိုင်မှု များလာလေ အခကြေးငွေနှုန်း နည်းလာလေ ဖြစ်ပါသည်။`,
    market: "ဈေးကွက်",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Futures / Perpetual",
    spotRow: "Spot",
    feesNote: (e, date) => `${e.name} ထုတ်ပြန်ထားသော ပုံမှန် (VIP မဟုတ်) နှုန်းများ၊ ${date} ရက်တွင် စစ်ဆေးထားသည်။`,
    funding: "Perpetual Contract များ၏ Funding Rate ကို Trader များ အချင်းချင်း ပေးချေကြပြီး Exchange သို့ မပေးရပါ။",
    liveSchedule: (e) => `${e.name} ၏ လက်ရှိ အခကြေးငွေ ဇယားကို ကြည့်ပါ`,
    feesCompare: (e, others, links) => (
      <>
        ဤနှုန်းများကို အခြား Exchange များနှင့် နှိုင်းယှဉ်လျှင် မည်သို့ ရှိသနည်း? ကျွန်ုပ်တို့၏{" "}
        <Link href={`${links.alternatives}#fees`}>{e.name} အစားထိုး Exchange နှိုင်းယှဉ်ချက်</Link>တွင် {e.name} ၏ အခကြေးငွေကို {list(others)} ၏
        အခကြေးငွေများနှင့် ဘေးချင်းယှဉ် ဖော်ပြထားပါသည်။
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `${e.name} အကြောင်း`,
    products: "ထုတ်ကုန်များ",
    prosConsTitle: (e) => `${e.name} ၏ အားသာချက်နှင့် အားနည်းချက်များ`,
    pros: "အားသာချက်",
    cons: "အားနည်းချက်",
    bestForTitle: (e) => `${e.name} က မည်သူ့အတွက် အသင့်တော်ဆုံးနည်း?`,
    openAccount: (e) => `${e.name} တွင် အကောင့်ဖွင့်မည်`,
    notAMatch: (e, count, links, pairs) => (
      <>
        မကိုက်ညီပါသလား? <Link href={links.alternatives}>အကောင်းဆုံး {e.name} အစားထိုး Exchange {count} ခု</Link>နှင့် တစ်ခုချင်းစီ၏ အားသာချက်ကို
        ကြည့်ပါ၊ သို့မဟုတ် {e.name} ကို ထိပ်တိုက် နှိုင်းယှဉ်ပါ: <Link href={pairs[0].href}>{pairs[0].label}</Link> နှင့်{" "}
        <Link href={pairs[1].href}>{pairs[1].label}</Link>။
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `${e.name} လုံခြုံလား?`,
    availability: "အသုံးပြုနိုင်မှု:",
    closedWhereYouLive: (e, links) => (
      <>
        သင် နေထိုင်ရာ နိုင်ငံတွင် {e.name} ကို အသုံးပြု၍ မရပါသလား?{" "}
        <Link href={`${links.alternatives}#countries`}>{e.name} အစားထိုး Exchange စာမျက်နှာရှိ နိုင်ငံ ဇယား</Link>တွင် အခြား Exchange များထဲမှ မည်သည့်
        Exchange များက သင့်နိုင်ငံကို လက်ခံသည်ကို ပြထားပါသည်။
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `${e.name} Referral Code နှင့် အကောင့်ဖွင့်ခြင်း – မေးလေ့ရှိသော မေးခွန်းများ`,
    faqIntro: (e, count) =>
      `${e.name} Referral Code ${e.referralCode}၊ အကောင့်ဖွင့်ခြင်းနှင့် အတည်ပြုခြင်း၊ အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်နှင့် အခကြေးငွေဆိုင်ရာ မေးခွန်း ${count} ခု။`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} ({language})
      </>
    ),

    /* Sources */
    sourcesTitle: "ရင်းမြစ်များ: ဤအချက်အလက်များ ရယူခဲ့သည့်နေရာ",
    sourcesIntro: (e, date) =>
      `ဤစာမျက်နှာရှိ Referral Code၊ အကောင့်ဖွင့်ခြင်း၊ အတည်ပြုခြင်း၊ အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်နှင့် အခကြေးငွေဆိုင်ရာ အချက်အလက်အားလုံးကို ${date} ရက်တွင် ${e.name} ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်နှင့် အကူအညီ စင်တာမှ ဖတ်ရှုထားပါသည်။ Exchange များသည် ကမ်းလှမ်းချက်နှင့် အခကြေးငွေကို ကြိုတင် အသိမပေးဘဲ ပြောင်းလဲပြီး နိုင်ငံအလိုက် မတူညီသော စည်းမျဉ်းများကို ပြသသဖြင့် အောက်ပါ စာမျက်နှာများကသာ နောက်ဆုံး အတည်ဖြစ်ပါသည်။`,

    /* Alternatives */
    alternativesTitle: (e) => `${e.name} အစားထိုး Exchange များ`,
    alternativesIntro: (e, count, links) => (
      <>
        {e.name} သင့်အတွက် သင့်တော်မည် မသေချာပါသလား? အောက်ပါတို့သည် အနီးစပ်ဆုံး အစားထိုး Exchange များ ဖြစ်ပြီး တစ်ခုစီတွင် ကိုယ်ပိုင် Referral
        အကောင့်ဖွင့် လင့်ခ် ရှိပါသည်။ <Link href={links.alternatives}>{e.name} အစားထိုး Exchange နှိုင်းယှဉ်ချက် အပြည့်အစုံ</Link>တွင် Exchange{" "}
        {count} ခုလုံးကို အခကြေးငွေ၊ Leverage၊ ထုတ်ကုန်များ၊ အတည်ပြုခြင်းနှင့် နိုင်ငံအလိုက် အသုံးပြုနိုင်မှုတို့ဖြင့် {e.name} နှင့် နှိုင်းယှဉ်ထားပါသည်။
      </>
    ),
    headToHeadTitle: (e) => `${e.name} ထိပ်တိုက် နှိုင်းယှဉ်ချက်`,
    headToHeadIntro: (e) =>
      `${e.name} နှင့် အခြား Exchange တစ်ခုကြား ဆုံးဖြတ်ရ ခက်နေပါသလား? အတွဲတိုင်းတွင် အခကြေးငွေ၊ Leverage၊ ထုတ်ကုန်များ၊ နိုင်ငံများနှင့် Referral ကမ်းလှမ်းချက်များကို နှိုင်းယှဉ်ထားသော သီးခြား စာမျက်နှာ ရှိပါသည်:`,
    compareAll: (e, count) => `${e.name} အစားထိုး Exchange ${count} ခုလုံးကို နှိုင်းယှဉ်မည်`,
    allComparisons: "Exchange နှိုင်းယှဉ်ချက် အားလုံး →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>ဆုံးရှုံးနိုင်ခြေ သတိပေးချက်:</strong> ခရစ်တို Derivatives များသည် ရှုပ်ထွေးသော ငွေကြေးကိရိယာများ ဖြစ်ပါသည်။ Leverage သည် အမြတ်နှင့်
        အရှုံး နှစ်ခုလုံးကို အဆများစွာ ကြီးထွားစေပြီး မိနစ်ပိုင်းအတွင်း Margin (အာမခံငွေ) အားလုံး ဆုံးရှုံးနိုင်ပါသည်။ ဤစာမျက်နှာသည် သတင်းအချက်အလက်အတွက်သာ
        ဖြစ်ပြီး ငွေကြေးဆိုင်ရာ အကြံပြုချက် မဟုတ်ပါ။ ကျွန်ုပ်တို့ လင့်ခ်များမှ အကောင့်ဖွင့်ပါက ကျွန်ုပ်တို့ ကော်မရှင် ရနိုင်ပါသည်။ အသေးစိတ်ကို{" "}
        <Link href={disclosureHref}>Affiliate ထုတ်ဖော်ချက်</Link>တွင် ကြည့်ပါ။
      </>
    ),
    joinTitle: (e) => `${e.name} တွင် 3 မိနစ်အတွင်း အကောင့်ဖွင့်ပါ`,
    joinText: (e) => `${benefit(e)}။ Referral တစ်ခုတည်းဖြင့် Spot နှင့် Futures နှစ်ခုလုံး အကျုံးဝင်ပါသည်။`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `${name} Referral Code`,
      signup: (name) => `${name} တွင် အကောင့်ဖွင့်ခြင်းနှင့် အတည်ပြုခြင်း`,
      bonus: (name) => `${name} ကြိုဆိုဘောနပ်စ်နှင့် ဆုလက်ဆောင်များ`,
      fees: (name) => `${name} အခကြေးငွေနှင့် အရောင်းအဝယ်`,
      safety: () => "လုံခြုံရေးနှင့် အသုံးပြုနိုင်မှု",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `${e.name} Referral Code ဆိုတာ ဘာလဲ?`,
          a: `${e.name} Referral Code သည် ${e.referralCode} ဖြစ်ပါသည်။ ${r.apply} ${e.name} ကိုယ်တိုင်က ဤကုဒ်ကို ${glue(r.codeName, "ဟု")} ခေါ်ပါသည်။`,
        },
        { topic: "referral", q: `${e.name} Referral Code ဘယ်မှာ ထည့်ရမလဲ?`, a: r.whereToEnter },
        { topic: "referral", q: `အကောင့်ဖွင့်ပြီးမှ ${e.name} Referral Code ထည့်လို့ ရလား?`, a: r.afterSignup },
        { topic: "referral", q: `${e.name} Referral Code ${e.referralCode} နဲ့ ဘာတွေ ရမလဲ?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `${e.name} Referral Code ကို Spot ရော Futures ပါ သုံးလို့ ရလား?`,
          a: `ရပါသည်။ Referral ကို ထုတ်ကုန် တစ်ခုတည်းနှင့် မဟုတ်ဘဲ သင့် ${e.name} အကောင့်နှင့် ချိတ်ဆက်ထားသဖြင့် ${e.referralCode} ဖြင့် အကောင့်ဖွင့်ခြင်း တစ်ကြိမ်တည်းက ${list(e.referralCovers)} ${all(e.referralCovers)}အတွက် အကျုံးဝင်ပါသည်။`,
        },
        {
          topic: "referral",
          q: `${e.name} Referral Code သုံးရင် ပိုက်ဆံ ပေးရလား?`,
          a: `မပေးရပါ။ ${e.referralCode} ကို ထည့်ခြင်းသည် အခမဲ့ ဖြစ်ပြီး အရောင်းအဝယ်အခကြေးငွေ မတိုးပါ။ ${e.name} က Referral အစီအစဉ်ကို ကိုယ်ပိုင် အခကြေးငွေ ဝင်ငွေမှ ပေးချေပါသည်။`,
        },
        {
          topic: "signup",
          q: `${e.name} အကောင့် ဘယ်လို ဖွင့်ရမလဲ?`,
          a: `${s.steps.map((st, i) => `အဆင့် ${i + 1}: ${asSentence(st.title)}`).join(" ")} ${glue(orList(s.methods), "ဖြင့်")} အကောင့်ဖွင့်နိုင်ပါသည်။`,
        },
        { topic: "signup", q: `${e.name} မှာ အထောက်အထား အတည်ပြုခြင်း (KYC) လုပ်ရမလား?`, a: s.kyc },
        { topic: "signup", q: `${e.name} က အတည်ပြုဖို့ ဘယ် စာရွက်စာတမ်းတွေကို လက်ခံလဲ?`, a: s.documents },
        { topic: "signup", q: `${e.name} အကောင့်ဖွင့်ဖို့ အသက် ဘယ်လောက် ရှိရမလဲ?`, a: s.minAge },
        {
          topic: "fees",
          q: `${e.name} အရောင်းအဝယ်အခကြေးငွေ ဘယ်လောက်လဲ?`,
          a: `ပုံမှန်အဆင့်တွင် ${e.name} သည် Spot တွင် Maker ${e.spotFees.maker} / Taker ${e.spotFees.taker} နှင့် Perpetual Futures တွင် Maker ${e.futuresFees.maker} / Taker ${e.futuresFees.taker} ကောက်ခံပါသည်။${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `${e.name} ကို ဘယ်နိုင်ငံတွေမှာ သုံးလို့ မရလဲ?`, a: e.restricted },
      ];
    },
  },
};
