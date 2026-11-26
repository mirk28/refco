import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";

/**
 * Interface texts in Urdu. Same keys as `en.tsx`. The pages run right to left; the layout handles that.
 *
 * Wording: "ریفرل کوڈ" for referral code (main keyword; the Latin "referral code" is added to the keywords,
 * because many Pakistani readers search in Latin letters), "ایکسچینج" (masculine) for the exchange, "فیس"
 * (feminine) for fees, Spot / Futures / Margin in Latin letters, polite address ("آپ"). Exchange names take no
 * ending: the postposition after them (کا / کی / کے، پر، میں) follows the noun of the template. Urdu punctuation
 * (۔ ؟ ،). Numbers in Latin digits with a decimal point (0.02%, 10,000 USDT, 34.1 ارب ڈالر). Field and button
 * names of the exchanges stay in English, because only the English interface was checked.
 */

const NBSP = " ";
const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A، B اور C" */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join("، ")} اور ${items[items.length - 1]}`);
/** "A، B یا C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join("، ")} یا ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** A step title as a sentence in a running answer: it gets the Urdu full stop unless it already ends with a mark. */
const asSentence = (s: string) => (/[۔؟.!?:]$/.test(s.trim()) ? s.trim() : `${s.trim()}۔`);
/** Billions of US dollars with Latin digits, the way Pakistani media write them: 34.1 → "34.1 ارب ڈالر". */
const arab = (n: string) => `${n}${NBSP}ارب${NBSP}ڈالر`;

export const ur: Dictionary = {
  list,

  format: {
    billions: (n) => arab(n.toFixed(n >= 10 ? 1 : 2)),
    billionsExact: (n) => arab(n.toFixed(2)),
    billionsFloor: (n) => arab(`${Math.floor(n)}+`),
  },

  meta: {
    siteTitle: `${site.name} – کرپٹو ایکسچینجز کے تصدیق شدہ ریفرل کوڈز`,
    siteDescription:
      "Binance، OKX، Bybit، Bitget، Gate، KuCoin اور MEXC کے تصدیق شدہ ریفرل کوڈز – ایک ہی سائن اپ لنک سے Spot اور Futures ٹریڈنگ پر نئے یوزرز کے بونس اور فیس ریبیٹ حاصل کریں۔ فیس، حقائق اور خوبیوں اور خامیوں کا دیانت دارانہ جائزہ۔",
  },

  layout: {
    skip: "سیدھے مواد پر جائیں",
    mainNav: "مین مینو",
    nav: { exchanges: "ایکسچینجز", benefits: "فوائد", compare: "موازنہ", howItWorks: "کیسے کام کرتا ہے", about: "ہمارے بارے میں" },
    getCodes: "کوڈز حاصل کریں",
    homeLabel: `${site.name} – ${site.domain} ہوم پیج`,
    language: "زبان",
    footerAbout:
      "سب سے بڑے کرپٹو ایکسچینجز کے تصدیق شدہ ریفرل کوڈز – Spot اور Futures کے لیے ویلکم بونس اور فیس ریبیٹ۔ آفیشل ذرائع سے واضح حقائق۔",
    referralCodes: "ریفرل کوڈز",
    referralCodeOf: (name) => `${name} ریفرل کوڈ`,
    alternatives: "متبادل",
    alternativesOf: (name) => `${name} کے متبادل`,
    guides: "گائیڈز",
    comparisons: "ایکسچینج موازنہ",
    howCodesWork: "ریفرل کوڈز کیسے کام کرتے ہیں",
    faq: "سوال و جواب",
    about: "ہمارے بارے میں اور طریقۂ کار",
    legal: "قانونی",
    imprint: "قانونی معلومات",
    privacy: "پرائیویسی پالیسی",
    disclosure: "ایفیلیئٹ ڈسکلوژر",
    cookieSettings: "کوکی سیٹنگز",
    risk: (
      <>
        <strong>رسک وارننگ:</strong> لیوریج کے ساتھ کرپٹو ڈیریویٹیوز کی ٹریڈنگ انتہائی خطرناک ہے اور اس میں آپ کا پورا ڈپازٹ ڈوب سکتا ہے۔ صرف اتنی رقم سے ٹریڈ
        کریں جس کا نقصان آپ برداشت کر سکیں۔ اس ویب سائٹ پر کوئی بھی بات مالی، سرمایہ کاری یا ٹیکس سے متعلق مشورہ نہیں ہے۔
      </>
    ),
    affiliate: (
      <>
        <strong>ایفیلیئٹ ڈسکلوژر:</strong> کچھ لنکس ریفرل لنکس ہیں۔ اگر آپ ان کے ذریعے سائن اپ کرتے ہیں تو ہمیں کمیشن مل سکتا ہے، جبکہ آپ کو اس کے لیے کچھ بھی
        اضافی ادا نہیں کرنا پڑتا۔ ہم جو حقائق شائع کرتے ہیں، ان پر اس کا کبھی کوئی اثر نہیں پڑتا۔ ایکسچینجز کے نام اور لوگو ان کے متعلقہ مالکان کے ٹریڈ مارکس ہیں؛{" "}
        {site.name} کا ان سے کوئی تعلق نہیں ہے اور نہ ہی انہوں نے اس کی توثیق کی ہے۔
      </>
    ),
  },

  consent: {
    label: "اینالیٹکس کی اجازت",
    text: (privacyHref) => (
      <>
        <strong>اینالیٹکس – فیصلہ آپ کا۔</strong> ہم Google Analytics استعمال کرنا چاہیں گے تاکہ معلوم ہو سکے کہ کون سے پیجز پڑھے جاتے ہیں۔ یہ کوکیز سیٹ کرتا ہے،
        استعمال کا ڈیٹا Google کو بھیجتا ہے اور صرف اسی صورت میں شروع ہوتا ہے جب آپ اس کی اجازت دیں۔ اشتہاری کوکیز کسی بھی صورت میں نہیں۔ تفصیلات:{" "}
        <Link href={privacyHref}>پرائیویسی پالیسی</Link>۔
      </>
    ),
    decline: "مسترد کریں",
    allow: "اینالیٹکس کی اجازت دیں",
  },

  notFound: {
    title: "یہ پیج موجود نہیں ہے",
    text: "آپ جس ریفرل کوڈ کی تلاش میں ہیں، وہ شاید کسی اور پیج پر منتقل ہو چکا ہے۔ ان میں سے کوئی ایک آزمائیں:",
    back: "ہوم پیج پر واپس جائیں",
  },

  og: {
    footer: ["تصدیق شدہ لنکس", "فیس اور حقائق", "آفیشل ذرائع"],
    homeAlt: "RefCo – کرپٹو ایکسچینجز کے تصدیق شدہ ریفرل کوڈز",
    homeKicker: (monthYear) => `اپ ڈیٹ: ${monthYear}`,
    homeTitle: "کرپٹو ایکسچینج ریفرل کوڈز، تصدیق شدہ۔",
    exchangeAlt: "ایکسچینج کا ریفرل کوڈ، متبادل اور موازنے – RefCo",
    exchangeKicker: (monthYear) => `جانچ شدہ: ${monthYear}`,
    exchangeTitle: (e) => `${e.name} ریفرل کوڈ`,
    exchangeSubtitle: (e) => `${benefit(e)} · ایک لنک سے Spot اور Futures`,
    versusBadge: "آمنے سامنے موازنہ",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `Futures فیس ${feesA} بمقابلہ ${feesB} · لیوریج ${leverageA}x بمقابلہ ${leverageB}x · KYC، ممالک، بونس`,
  },

  blocks: {
    signUpOn: (name) => `${name} پر سائن اپ کریں`,
    signUp: "سائن اپ کریں",
    details: "تفصیلات",
    breadcrumb: "نیویگیشن",
    copy: "کاپی کریں",
    copied: "کاپی ہو گیا ✓",
    spotMakerTaker: "Spot میکر / ٹیکر",
    futuresMakerTaker: "Futures میکر / ٹیکر",
    maxLeverage: "زیادہ سے زیادہ لیوریج",
    since: "قیام",
    tableCaption: "کرپٹو ایکسچینجز کا موازنہ: نئے یوزرز کی آفر، Spot اور Futures فیس، لیوریج اور مارکیٹ ڈیٹا",
    exchange: "ایکسچینج",
    newUserOffer: "نئے یوزرز کے لیے آفر",
    futuresFees: "Futures فیس (میکر / ٹیکر)",
    spotFees: "Spot فیس",
    openInterest: "اوپن انٹرسٹ",
    markets: "مارکیٹس",
    action: "ایکشن",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) =>
      fit(TITLE_MAX, `کرپٹو ایکسچینج ریفرل کوڈز اور بونس (${monthYear})`, `کرپٹو ایکسچینج ریفرل کوڈز (${monthYear})`),
    description: (monthYear) =>
      fit(
        DESC_MAX,
        `Binance، OKX، Bybit، Bitget، Gate، KuCoin اور MEXC کے تصدیق شدہ ریفرل کوڈز: ایک ہی لنک سے Spot اور Futures پر نئے یوزرز کے بونس اور فیس ریبیٹ – ${monthYear} میں اپ ڈیٹ۔`,
        `Binance، OKX، Bybit، Bitget، Gate، KuCoin اور MEXC کے تصدیق شدہ ریفرل کوڈز: ایک لنک سے نئے یوزرز کے بونس اور فیس ریبیٹ – ${monthYear} میں اپ ڈیٹ۔`,
        `Binance، OKX، Bybit، Bitget، Gate، KuCoin اور MEXC کے تصدیق شدہ ریفرل کوڈز: ایک لنک سے نئے یوزرز کے بونس اور فیس ریبیٹ۔`,
      ),
    listName: "Spot اور Futures کے لیے کرپٹو ایکسچینج ریفرل کوڈز",
    updated: (monthYear) => `اپ ڈیٹ: ${monthYear}`,
    h1: (
      <>
        کرپٹو ایکسچینج ریفرل کوڈز – <span className="hl">تصدیق شدہ</span> اور آسان وضاحت کے ساتھ۔
      </>
    ),
    lead: (
      <>
        دنیا کے سب سے بڑے کرپٹو ایکسچینجز پر ویلکم بونس اور فیس ریبیٹ حاصل کریں – Spot <em>اور</em> Futures دونوں کے لیے ایک ہی ریفرل۔ ساتھ میں وہ حقائق بھی جو
        صحیح انتخاب کے لیے ضروری ہیں: فیس، لیوریج، لائسنس اور خوبیوں اور خامیوں کا دیانت دارانہ جائزہ۔
      </>
    ),
    browse: "ریفرل کوڈز دیکھیں",
    seeBenefits: "اپنے فوائد دیکھیں",
    trust: (date) => [`${date} کو چیک کیا گیا`, "صرف آفیشل لنکس", "اینالیٹکس صرف آپ کی اجازت سے"],
    featured: "نمایاں ایکسچینجز",
    ticketName: (name) => `${name} ریفرل کوڈ`,
    ticketTag: "SPOT + FUTURES",
    stats: ["Spot اور Futures کے ٹاپ ایکسچینجز", "مجموعی اوپن انٹرسٹ", "شامل ڈیریویٹیوز مارکیٹس", "سب سے کم میکر فیس (MEXC)"],
    marketData: (date) => `مارکیٹ ڈیٹا: CoinMarketCap کی ڈیریویٹیوز رینکنگ، ${date} کا اسنیپ شاٹ۔`,

    benefitsEyebrow: "آپ کے فوائد",
    benefitsTitle: `${site.name} کے ریفرل کوڈ سے سائن اپ کیوں کریں؟`,
    benefitsLead: "وہی ایکسچینج، وہی فیس – مگر ساتھ میں نئے یوزرز کی وہ سہولتیں بھی جو براہِ راست سائن اپ کرنے پر آپ سے رہ جاتیں۔",
    benefits: [
      {
        title: "ویلکم بونس",
        text: "ایکسچینج کی نئے یوزرز والی آفر اَن لاک کریں – فیس ریبیٹ واؤچرز، Futures بونس اور ٹاسک ریوارڈز، جن کی مالیت ہزاروں USDT تک ہو سکتی ہے۔",
      },
      {
        title: "کم ٹریڈنگ فیس",
        text: "جہاں ایکسچینج اس کی اجازت دیتا ہے، وہاں ریفرل کمیشن کا ایک حصہ ہر ٹریڈ پر ریبیٹ کی صورت میں آپ کو واپس ملتا ہے۔",
      },
      {
        title: "Spot اور Futures، ایک ہی لنک",
        text: "ریفرل آپ کے اکاؤنٹ سے جڑا ہوتا ہے – یہ Spot، Futures، Margin اور آپشنز سب پر لاگو ہوتا ہے۔ دوسرے کوڈ کی ضرورت نہیں پڑتی۔",
      },
      { title: "کوئی اضافی خرچ نہیں", text: "ریفرل سے آپ کی فیس کبھی نہیں بڑھتی۔ آپ کا صرف فائدہ ہے – پروگرام کا خرچ ایکسچینج اٹھاتا ہے۔" },
      { title: "آفیشل سائن اپ پیجز", text: "ہر لنک ایکسچینج کی اپنی ویب سائٹ کھولتا ہے۔ نہ کوئی درمیانی فریق، نہ آپ کا کوئی ڈیٹا ہمارے ساتھ شیئر ہوتا ہے۔" },
      {
        title: "سائن اپ کے وقت ہی استعمال کریں",
        text: "کچھ ایکسچینجز 30 دن تک کوڈ شامل کرنے دیتے ہیں، کچھ بالکل نہیں۔ اکاؤنٹ بنانے سے پہلے لنک استعمال کر لیں تو آپ ہر جگہ محفوظ رہیں گے۔",
      },
    ],
    offersCaption: "ہر ایکسچینج پر نئے یوزرز کی آفرز",
    offersHead: ["ایکسچینج", "ریفرل کے ساتھ نئے یوزرز کی آفر", "ایک لنک میں شامل"],
    claim: "حاصل کریں",
    offersNote: (date) =>
      `آفرز ${date} کو چیک کی گئیں۔ ویلکم ریوارڈز ٹاسک مکمل کرنے پر ملتے ہیں، ان کے لیے شناختی تصدیق ضروری ہے اور یہ علاقے کے لحاظ سے مختلف ہوتے ہیں – موجودہ شرائط ہر ایکسچینج کے سائن اپ پیج پر دکھائی جاتی ہیں۔`,

    exchangesEyebrow: "ریفرل کوڈز",
    exchangesTitle: "اپنا ایکسچینج منتخب کریں",
    exchangesLead: "ہر پیج ریفرل اور فیس کی وضاحت کرتا ہے اور بتاتا ہے کہ ایکسچینج کس کے لیے بہترین ہے – تاکہ آپ ایک ہی بار، صحیح پلیٹ فارم پر سائن اپ کریں۔",
    sideBySide: "ساتھ ساتھ",
    notSure: "فیصلہ نہیں کر پا رہے؟",
    notSureText: (count) => `تمام ${count} ایکسچینجز کی فیس، لیوریج اور اوپن انٹرسٹ کا موازنہ ایک ہی ٹیبل میں کریں۔`,
    compareExchanges: "ایکسچینجز کا موازنہ کریں",

    compareTitle: "کرپٹو ایکسچینجز کا موازنہ: Spot اور Futures",
    compareLead: "نئے یوزرز کی آفرز، Spot اور Futures کی اسٹینڈرڈ (نان-VIP) فیس، لیوریج اور مارکیٹ کی گہرائی – سب ایک نظر میں۔",
    compareNote: (reviewed, market) =>
      `فیس: ہر ایکسچینج کا شائع کردہ اسٹینڈرڈ لیول، ${reviewed} کو چیک کیا گیا۔ اوپن انٹرسٹ اور مارکیٹس: CoinMarketCap، ${market}۔ فیس بدلتی رہتی ہے – ٹریڈنگ سے پہلے ایکسچینج پر تصدیق کر لیں۔`,
    versusStrip: {
      title: "دو ایکسچینجز کا آمنے سامنے موازنہ کریں",
      text: (pairs, hubHref) => (
        <>
          {pairs} جوڑیوں کا موازنہ، جن میں فیس، لیوریج، پروڈکٹس، ممالک، KYC اور ریفرل آفرز ساتھ ساتھ رکھی گئی ہیں –{" "}
          <Link href={hubHref}>تمام ایکسچینج موازنے</Link>۔
        </>
      ),
    },
    alternativesStrip: {
      title: "اپنے ایکسچینج کا متبادل تلاش کر رہے ہیں؟",
      text: (others) =>
        `ہر موازنہ ایک ایکسچینج کو باقی ${others} ایکسچینجز کے مقابلے میں پرکھتا ہے: فیس، لیوریج، پروڈکٹس، شناختی تصدیق اور وہ ممالک جہاں کے یوزرز کو وہ قبول کرتا ہے۔`,
    },

    picksEyebrow: "مختصر جواب",
    picksTitle: "آپ کے لیے کون سا ایکسچینج بہترین ہے؟",
    picks: [
      { label: "سب سے زیادہ لیکویڈیٹی", slug: "binance", why: "دنیا بھر میں سب سے بڑا اوپن انٹرسٹ اور سب سے زیادہ Futures والیوم۔" },
      { label: "کم فیس اور آپشنز", slug: "okx", why: "Spot پر 0.08% / 0.10%، آپشنز پر 0.03% اور ہر ماہ پروف آف ریزرو۔" },
      { label: "موبائل پر ایکٹو Futures ٹریڈنگ", slug: "bybit", why: "تیز ٹریڈنگ انجن اور بہترین ٹریڈنگ ایپس میں سے ایک۔" },
      { label: "Copy Trading", slug: "bitget", why: "تجربہ کار Futures ٹریڈرز کی ٹریڈز خود بخود کاپی کریں۔" },
      { label: "سب سے زیادہ آلٹ کوائنز", slug: "gate", why: "5,400+ ایسیٹس اور کم معروف ٹوکنز پر بھی Futures۔" },
      { label: "ٹریڈنگ بوٹس", slug: "kucoin", why: "Spot اور Futures کے لیے مفت ٹریڈنگ بوٹس۔" },
      { label: "سب سے کم فیس", slug: "mexc", why: "Spot اور زیادہ تر Futures کنٹریکٹس پر 0% میکر فیس۔" },
    ],

    howEyebrow: "طریقۂ کار",
    howTitle: "تین مراحل میں ریفرل کوڈ استعمال کریں",
    steps: [
      {
        title: "ایکسچینج منتخب کریں",
        text: "اوپر فیس، لیوریج اور فیچرز کا موازنہ کریں اور اس ایکسچینج کا پیج کھولیں جو آپ کے ٹریڈنگ اسٹائل کے مطابق ہو۔",
      },
      {
        title: "ہمارے لنک سے سائن اپ کریں",
        text: "ریفرل خود بخود شامل ہو جاتا ہے۔ کسی اور جگہ اکاؤنٹ بنانے سے پہلے اپنی ای میل یا فون نمبر سے رجسٹر کریں۔",
      },
      {
        title: "ویریفائی کریں اور ریوارڈز حاصل کریں",
        text: "شناختی تصدیق (KYC) مکمل کریں، 2FA سے اپنا اکاؤنٹ محفوظ بنائیں اور اپنے ڈیش بورڈ میں دکھائے گئے ویلکم ریوارڈز دیکھیں۔",
      },
    ],

    trustEyebrow: `${site.name} ہی کیوں`,
    trustTitle: "اعتماد کے لیے بنایا گیا، کلکس کے لیے نہیں",
    trustCards: [
      { title: "تصدیق شدہ آفرز", text: "ہم ہر ایکسچینج کی نئے یوزرز والی آفر چیک کرتے ہیں اور صرف وہی دکھاتے ہیں جو آپ واقعی حاصل کر سکتے ہیں۔" },
      { title: "تازہ حقائق، تاریخ کے ساتھ", text: "فیس، لیوریج اور لائسنس باقاعدگی سے دوبارہ چیک کیے جاتے ہیں، اور ہر پیج پر اس کے جائزے کی تاریخ درج ہوتی ہے۔" },
      { title: "پرائیویسی سب سے پہلے", text: "نہ اشتہاری پکسلز، نہ اشتہاری کوکیز۔ اینالیٹکس صرف اسی وقت چلتا ہے جب آپ اس کی اجازت دیں۔" },
      { title: "تیز اور واضح", text: "ہلکے پھلکے پیجز جو کسی بھی فون پر فوراً کھل جاتے ہیں – پہلے جواب، پھر تفصیل۔" },
      { title: "خوبیاں اور خامیاں، ایمانداری سے", text: "ہم کمزوریاں، ماضی کے واقعات اور علاقائی پابندیاں بھی بتاتے ہیں – صرف مارکیٹنگ کی باتیں نہیں۔" },
      { title: "رسک سب سے پہلے", text: "لیوریج کسی بھی ڈپازٹ کو بہت جلد ختم کر سکتا ہے۔ یہ بات ہم ہر پیج پر صاف صاف لکھتے ہیں۔" },
    ],

    faqEyebrow: "سوال و جواب",
    faqTitle: "ریفرل کوڈز – اکثر پوچھے جانے والے سوالات",
    faqs: (reviewed) => [
      {
        q: "کرپٹو ایکسچینج ریفرل کوڈ کیا ہوتا ہے؟",
        a: "ریفرل کوڈ (جسے انوائٹ کوڈ یا ریفرل ID بھی کہا جاتا ہے) ایک مختصر شناختی کوڈ ہے جو نئے ایکسچینج اکاؤنٹ کو اس شخص یا ویب سائٹ سے جوڑتا ہے جس نے اس ایکسچینج کی سفارش کی تھی۔ ایکسچینجز اس کے ذریعے دونوں فریقوں کو انعام دیتے ہیں – نئے یوزرز کو عموماً ویلکم ریوارڈز یا ٹریڈنگ فیس میں رعایت ملتی ہے، اور ریفر کرنے والے کو فیس کا ایک حصہ۔",
      },
      {
        q: "ریفرل کوڈ استعمال کرنے کے کیا فوائد ہیں؟",
        a: "ریفرل کے ذریعے سائن اپ کرنے والے نئے یوزرز کو ایکسچینج کی ویلکم آفر ملتی ہے – مثلاً Bybit پر 250 USDT تک کے ریفرل ریوارڈز یا MEXC پر 10,000 USDT تک کے نئے یوزر ریوارڈز – اور جہاں ریفر کرنے والا اپنا کمیشن شیئر کرتا ہے، وہاں ٹریڈنگ فیس کا ایک حصہ واپس بھی ملتا ہے، جیسے Gate پر ایک سال تک 10%۔ اس پر کوئی اضافی خرچ نہیں آتا۔",
      },
      {
        q: "کیا ایک ہی ریفرل کوڈ Spot اور Futures دونوں ٹریڈنگ کے لیے کام کرتا ہے؟",
        a: "جی ہاں۔ Binance، OKX، Bybit، Bitget، Gate، KuCoin اور MEXC پر ریفرل آپ کے اکاؤنٹ سے جڑا ہوتا ہے، کسی ایک پروڈکٹ سے نہیں۔ ایک ہی سائن اپ Spot اور Futures دونوں ٹریڈنگ پر لاگو ہوتا ہے – اور جہاں ایکسچینج یہ سہولتیں دیتا ہے، وہاں Margin، آپشنز یا Copy Trading پر بھی۔",
      },
      {
        q: "کیا ریفرل کوڈ سے سائن اپ کرنے پر زیادہ پیسے دینے پڑتے ہیں؟",
        a: "نہیں۔ ریفرل لنک کے ذریعے سائن اپ کرنے سے آپ کی فیس کبھی نہیں بڑھتی۔ ایکسچینج اور آپ کے علاقے کے لحاظ سے آپ کو فیس میں رعایت یا ویلکم بونس بھی مل سکتا ہے جو ریفرل کے بغیر نہیں ملتا۔",
      },
      {
        q: "کیا اکاؤنٹ بنانے کے بعد ریفرل کوڈ شامل کیا جا سکتا ہے؟",
        a: "یہ ایکسچینج پر منحصر ہے۔ Binance پر، اگر آپ نے ابھی تک کوئی ڈپازٹ یا ٹریڈ نہیں کی، تو رجسٹریشن کے 30 دن کے اندر کوڈ لنک کیا جا سکتا ہے، اور MEXC پر آپ سائن اپ کے 30 دن کے اندر خود ریفرر لنک کر سکتے ہیں۔ KuCoin کے ہیلپ سینٹر میں اس کے لیے “Link Referrer” ریکویسٹ موجود ہے۔ Bybit، OKX اور Bitget کوڈ صرف رجسٹریشن کے دوران قبول کرتے ہیں، اور Gate نے بعد میں کوڈ شامل کرنے کا کوئی طریقہ نہیں بتایا۔ سب سے محفوظ طریقہ یہی ہے کہ اکاؤنٹ بنانے سے پہلے لنک استعمال کریں۔",
      },
      {
        q: "کس کرپٹو ایکسچینج کی Futures فیس سب سے کم ہے؟",
        a: `ہمارے تازہ ترین جائزے (${reviewed}) کے مطابق MEXC کی اسٹینڈرڈ Futures فیس سب سے کم تھی: BTCUSDT پر 0% میکر اور 0.02% ٹیکر۔ Binance، OKX اور Gate اسٹینڈرڈ لیول پر 0.02% میکر / 0.05% ٹیکر فیس لیتے ہیں، Bybit 0.02% / 0.055%، جبکہ Bitget اور KuCoin 0.02% / 0.06%۔`,
      },
      {
        q: "کرپٹو ڈیریویٹیوز کے لیے کون سا ایکسچینج بہترین ہے؟",
        a: "یہ اس بات پر منحصر ہے کہ آپ کیا ٹریڈ کرتے ہیں۔ Binance پر لیکویڈیٹی سب سے زیادہ ہے، OKX کم فیس کے ساتھ آپشنز بھی دیتا ہے، Bybit تیز رفتار پرپیچوئل ٹریڈنگ کے لیے بنا ہے، Bitget Copy Trading کے لیے، Gate آلٹ کوائن Futures کے لیے، KuCoin بوٹس کے لیے اور MEXC سب سے کم فیس کے لیے۔",
      },
      {
        q: "کیا یہ ایکسچینجز امریکہ میں دستیاب ہیں؟",
        a: "زیادہ تر نہیں۔ Binance، Bybit، Bitget، Gate، KuCoin اور MEXC امریکہ کو پابندی والے یا ممنوعہ ممالک میں شمار کرتے ہیں، اور OKX امریکہ کے بعض علاقوں پر پابندیاں لگاتا ہے۔ برطانیہ، کینیڈا اور EU میں بھی دستیابی ایک جیسی نہیں – ہر ایکسچینج پیج پر ایکسچینج کی اپنی شرائط کی بنیاد پر ممنوعہ ممالک کی فہرست دی گئی ہے۔",
      },
      {
        q: "یہ معلومات کتنی بار اپ ڈیٹ ہوتی ہیں؟",
        a: `ہم فیس، لیوریج، لائسنس اور مارکیٹ ڈیٹا باقاعدگی سے دوبارہ چیک کرتے ہیں۔ ہر پیج پر اس کے آخری جائزے کی تاریخ درج ہوتی ہے؛ موجودہ ڈیٹا ${reviewed} کو چیک کیا گیا تھا۔`,
      },
    ],
    // Pakistan is not one of the researched countries in src/data/alternatives/, so there is no country question.
    countryFaq: null,

    ctaTitle: "اپنا ویلکم بونس حاصل کریں",
    ctaText: "ایکسچینج منتخب کریں، تصدیق شدہ ریفرل سے سائن اپ کریں اور ایک ہی اکاؤنٹ سے Spot اور Futures ٹریڈ کریں۔",
    ctaButton: "تمام ریفرل کوڈز دیکھیں",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    // Four wordings, chosen per exchange, so the seven titles do not all start with "<Exchange> ریفرل کوڈ".
    title: (e, shortMonthYear) => {
      const n = e.name, c = e.referralCode, m = shortMonthYear, y = yearOf(shortMonthYear);
      return [
        () => fit(TITLE_MAX, `${n} ریفرل کوڈ ${c} (${m}): سائن اپ بونس`, `${n} ریفرل کوڈ ${c} (${m})`, `${n} ریفرل کوڈ ${c}`),
        () => fit(TITLE_MAX, `${c} – ${n} ریفرل کوڈ اور بونس (${m})`, `${c} – ${n} ریفرل کوڈ (${m})`, `${c} – ${n} ریفرل کوڈ`),
        () => fit(TITLE_MAX, `نئے یوزرز کا بونس: ${n} ریفرل کوڈ ${c} (${y})`, `سائن اپ بونس: ${n} ریفرل کوڈ ${c}`, `${n} ریفرل کوڈ ${c} (${y})`),
        () => fit(TITLE_MAX, `${n} ریفرل کوڈ ${c} کیسے استعمال کریں (${m})`, `${n} ریفرل کوڈ ${c} کیسے استعمال کریں`, `${n} ریفرل کوڈ ${c}`),
      ][variant(4, e.slug)]();
    },
    description: (e, monthYear) =>
      fit(
        DESC_MAX,
        `${e.name} ریفرل کوڈ ${e.referralCode}: ${benefit(e)}۔ کوڈ کہاں درج کریں، سائن اپ کے مراحل، KYC اور فیس – ${monthYear} میں چیک کیا گیا۔`,
        `${e.name} ریفرل کوڈ ${e.referralCode}: ${benefit(e)}۔ کوڈ کہاں درج کریں، سائن اپ کے مراحل، KYC اور فیس۔`,
        `${e.name} ریفرل کوڈ ${e.referralCode}: کوڈ کہاں درج کریں، سائن اپ کے مراحل، KYC اور فیس – ${monthYear} میں چیک کیا گیا۔`,
      ),
    keywords: (e) => {
      const same = (k: string) => k.toLowerCase().replace(/[\s-]/g, "");
      return [
        `${e.name} ریفرل کوڈ`,
        `${e.name} ریفرل کوڈ ${e.referralCode}`,
        `${e.name} referral code`,
        `${e.name} ${e.referral.codeName}`,
        `${e.name} ریفرل لنک`,
        `${e.name} انوائٹ کوڈ`,
        `${e.name} سائن اپ بونس`,
        `${e.name} پر رجسٹریشن کیسے کریں`,
        `${e.name} KYC`,
        `${e.name} Futures فیس`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "کوڈ ایک نظر میں",
      benefits: "آپ کے فوائد",
      "use-code": "کوڈ کیسے استعمال کریں",
      "how-to": "سائن اپ کیسے کریں",
      verification: "ویریفکیشن (KYC)",
      "key-facts": "اہم حقائق",
      fees: "فیس",
      about: "ایکسچینج کا تعارف",
      "pros-cons": "خوبیاں اور خامیاں",
      "best-for": "کس کے لیے موزوں",
      safety: "سیکیورٹی اور دستیابی",
      faq: "سوال و جواب",
      sources: "ذرائع",
      alternatives: "متبادل اور موازنے",
    },
    onThisPage: "اس پیج پر",
    crumbHome: "ہوم",
    crumbCodes: "ریفرل کوڈز",
    crumbPage: (e) => `${e.name} ریفرل کوڈ`,

    /* JSON-LD */
    offerName: (e) => `${e.name} ریفرل کوڈ ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}۔ ایک ہی ریفرل ${list(e.referralCovers)} پر لاگو ہوتا ہے۔`,
    offerCategory: "کرپٹو ایکسچینج پر رجسٹریشن",
    howToName: (e) => `ریفرل کوڈ ${e.referralCode} کے ساتھ ${e.name} پر سائن اپ کیسے کریں`,
    howToDescription: (e) =>
      `${e.name} پر رجسٹریشن کے مراحل، جیسے ایکسچینج نے خود بیان کیے ہیں – ساتھ یہ بھی کہ ریفرل کوڈ ${e.referralCode} کہاں درج کیا جاتا ہے۔`,

    /* Hero */
    updated: (date) => `${date} کو چیک اور اپ ڈیٹ کیا گیا`,
    h1: (e) => `${e.name} ریفرل کوڈ: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – ساتھ ہی {list(e.referralCovers)} کے لیے ایک ہی ریفرل۔ یہاں جانیں کہ آپ کو کیا ملتا ہے، ٹریڈنگ پر کتنا خرچ آتا ہے اور کیا{" "}
        {e.name} آپ کے لیے صحیح ایکسچینج ہے۔
      </>
    ),
    quickAnswer: "مختصر جواب",
    highlights: "اہم نکات",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `${shortLeverage(e)} لیوریج`,
      `${e.market.markets} ڈیریویٹیوز مارکیٹس`,
      `${e.founded} سے سرگرم`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `${e.name} پر آپ کا سائن اپ`,
    appliedByLink: "اس لنک کے ذریعے ریفرل خود بخود لاگو ہو جاتا ہے۔",
    goesToOfficial: (domain) => `براہِ راست آفیشل ویب سائٹ ${domain} پر لے جاتا ہے۔`,
    codeLabel: "ریفرل کوڈ",
    noCodeToType: "کوڈ ٹائپ کرنے کی ضرورت نہیں – لنک کے ذریعے خود لاگو",
    officialSite: (domain) => `آفیشل سائٹ: ${domain}`,
    yourBenefits: "آپ کے فوائد",
    freeNeverRaises: "مفت – ریفرل سے آپ کی فیس کبھی نہیں بڑھتی",
    qrLabel: (e) => `QR کوڈ: ریفرل ${e.referralCode} کے ساتھ ${e.name} ایپ پر سائن اپ کریں`,
    preferApp: "ایپ سے سائن اپ کرنا چاہتے ہیں؟",
    scan: (e) => (
      <>
        {e.name} کھولنے کے لیے اپنے فون کے کیمرے سے اسکین کریں
        {e.referralCode ? (
          <>
            {" "}
            – ریفرل <strong>{e.referralCode}</strong> پہلے سے شامل
          </>
        ) : null}
        ۔ iOS اور Android دونوں پر کام کرتا ہے۔
      </>
    ),
    riskLine: (e, links) => (
      <>
        لیوریج والی ٹریڈنگ میں رسک بہت زیادہ ہے۔ یہ ہر ملک میں دستیاب نہیں – <a href="#safety">دستیابی</a> یا{" "}
        <Link href={links.alternatives}>{e.name} کے متبادل</Link> دیکھیں۔
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `${e.name} ریفرل کوڈ ${e.referralCode} ایک نظر میں`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        {monthYear} کے لیے {e.name} ریفرل کوڈ <strong>{e.referralCode}</strong> ہے۔ نیچے دیا گیا جدول بتاتا ہے کہ یہ کوڈ کیا کرتا ہے، کہاں درج ہوتا ہے اور{" "}
        {e.name} نئے اکاؤنٹ سے کیا تقاضا کرتا ہے – ہر سطر {date} کو {e.name} کے اپنے پیجز سے ملا کر چیک کی گئی ہے۔
      </>
    ),
    codeFactsCaption: (e) => `${e.name} ریفرل کوڈ ${e.referralCode}: اہم حقائق`,
    codeFacts: (e, date) => [
      [`${e.name} ریفرل کوڈ`, <strong key="code">{e.referralCode}</strong>],
      [`${e.name} اسے کیا کہتا ہے`, e.referral.codeName],
      ["نئے یوزرز کا فائدہ", benefit(e)],
      ["کوڈ کہاں درج کریں", e.referral.whereShort],
      ["کیا سائن اپ کے بعد شامل ہو سکتا ہے؟", e.referral.afterSignupShort],
      ["کن پر لاگو", e.referralCovers.join("، ")],
      ["شناختی تصدیق (KYC)", e.signup.kycShort],
      ["خرچ", "مفت – اس سے آپ کی فیس نہیں بڑھتی"],
      ["آخری بار چیک کیا گیا", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `${e.name} ریفرل کے ساتھ آپ کے فوائد`,
    benefitsIntro: (e) => (
      <>
        {e.name} ریفرل کوڈ <strong>{e.referralCode}</strong> سے سائن اپ کرنے پر آپ کو کوئی اضافی خرچ نہیں دینا پڑتا۔ اس وقت {e.name} نئے اکاؤنٹس کو یہ آفر دے رہا
        ہے۔ یہی کوڈ <strong>{list(e.referralCovers)}</strong> پر کام کرتا ہے – Spot اور Futures کے لیے الگ الگ کوڈ کی ضرورت نہیں۔
      </>
    ),
    offerChecked: (date) => `نئے یوزرز کی آفر · ${date} کو چیک کی گئی`,
    appliedWhenRegistering: "اس ریفرل کے ذریعے رجسٹر کرنے پر لاگو",
    noExtraCost: "کوئی اضافی خرچ نہیں – ریفرل کی وجہ سے آپ کی ٹریڈنگ فیس کبھی زیادہ نہیں ہوتی",
    oneReferralCovers: "ایک ہی ریفرل میں شامل:",
    claimOffer: (e) => `اپنی ${e.name} ویلکم آفر حاصل کریں`,
    tasksTitle: (e) => `${e.name} ویلکم آفر: ٹاسکس اور ریوارڈز`,
    tasksCaption: (e) => `${e.name} پر نئے یوزرز کے ٹاسکس اور ہر ٹاسک کا ریوارڈ`,
    task: "ٹاسک",
    reward: "ریوارڈ",
    tasksNote: (e, date) =>
      `${e.name} کی جانب سے ${date} کو دی گئی معلومات کے مطابق۔ آفرز ہر ملک میں مختلف ہوتی ہیں اور اکثر بدلتی رہتی ہیں – سائن اپ کے بعد آپ کے اکاؤنٹ میں جو شرائط دکھائی دیں، وہی لاگو ہوتی ہیں۔`,

    /* How to use the code */
    useCodeTitle: (e) => `${e.name} ریفرل کوڈ ${e.referralCode} کیسے استعمال کریں`,
    whereToEnter: (e) => `${e.name} ریفرل کوڈ کہاں درج کریں`,
    forgotCode: "کوڈ ڈالنا بھول گئے؟ رجسٹریشن کے بعد شامل کرنا",
    asInvited: "انوائٹ کیے گئے یوزر کے طور پر آپ کو کیا ملتا ہے",
    interfaceNote: (e) => (
      <>
        واوین میں دیے گئے فیلڈز اور بٹنوں کے نام {e.name} کے انگریزی انٹرفیس سے لیے گئے ہیں، جسے ہم نے چیک کیا ہے؛ اردو انٹرفیس میں ان کے نام مختلف ہو سکتے ہیں۔
      </>
    ),

    /* Registration */
    howToTitle: (e) => `${e.name} پر رجسٹریشن کیسے کریں – مرحلہ وار`,
    howToIntro: (e) => (
      <>
        {e.name} پر آپ {orList(e.signup.methods)} کے ذریعے اکاؤنٹ بنا سکتے ہیں۔ نیچے وہ مراحل ہیں جو {e.name} نے خود بیان کیے ہیں، اور ساتھ یہ بھی کہ ریفرل کوڈ{" "}
        <strong>{e.referralCode}</strong> کس مرحلے پر کام آتا ہے۔
      </>
    ),
    startRegistration: (e) => `${e.name} پر رجسٹریشن شروع کریں`,

    /* Verification */
    kycTitle: (e) => `${e.name} پر شناختی تصدیق (KYC)`,
    verification: "ویریفکیشن",
    minAge: "کم از کم عمر",
    documents: "قابلِ قبول دستاویزات",

    /* Key facts */
    factsTitle: (e) => `${e.name} ایک نظر میں`,
    founded: "قیام",
    headquarters: "ہیڈکوارٹر",
    futuresFees: "Futures فیس (میکر / ٹیکر)",
    spotFees: "Spot فیس (میکر / ٹیکر)",
    maxLeverage: "زیادہ سے زیادہ لیوریج",
    assets: "ایسیٹس",
    openInterest: "اوپن انٹرسٹ",
    volume24h: "24 گھنٹے کا ڈیریویٹیوز والیوم",
    users: "یوزرز",
    regulation: "ریگولیشن",
    factsNote: (date) =>
      `اوپن انٹرسٹ، والیوم اور مارکیٹس کی تعداد: CoinMarketCap کی ڈیریویٹیوز رینکنگ، ${date}۔ فیس: جائزے کی تاریخ پر اسٹینڈرڈ لیول۔`,

    /* Fees */
    feesTitle: (e) => `${e.name} فیس کی آسان وضاحت`,
    feesIntro: (e) =>
      `${e.name} میکر/ٹیکر ماڈل پر چلتا ہے: جو آرڈرز آرڈر بک میں لیکویڈیٹی شامل کرتے ہیں (لِمٹ آرڈرز) ان پر میکر فیس لگتی ہے، اور جو لیکویڈیٹی نکالتے ہیں (مارکیٹ آرڈرز) ان پر ٹیکر فیس۔ آپ کا 30 دن کا والیوم یا ہولڈنگز بڑھنے کے ساتھ ریٹس کم ہوتے جاتے ہیں۔`,
    market: "مارکیٹ",
    maker: "میکر",
    taker: "ٹیکر",
    futuresRow: "Futures / پرپیچوئل",
    spotRow: "Spot",
    feesNote: (e, date) => `${e.name} کے شائع کردہ اسٹینڈرڈ (نان-VIP) ریٹس، ${date} کو چیک کیے گئے۔`,
    funding: "پرپیچوئل کنٹریکٹس پر فنڈنگ ریٹ ٹریڈرز آپس میں ادا کرتے ہیں، ایکسچینج کو نہیں۔",
    liveSchedule: (e) => `${e.name} کا موجودہ فیس شیڈول دیکھیں`,
    feesCompare: (e, others, links) => (
      <>
        یہ ریٹس دوسروں کے مقابلے میں کیسے ہیں؟ <Link href={`${links.alternatives}#fees`}>{e.name} کے متبادل کا ہمارا موازنہ</Link> {e.name} کی فیس کو{" "}
        {list(others)} کی فیس کے ساتھ رکھ کر دکھاتا ہے۔
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `${e.name} کے بارے میں`,
    products: "پروڈکٹس",
    prosConsTitle: (e) => `${e.name} کی خوبیاں اور خامیاں`,
    pros: "خوبیاں",
    cons: "خامیاں",
    bestForTitle: (e) => `${e.name} کس کے لیے بہترین ہے؟`,
    openAccount: (e) => `اپنا ${e.name} اکاؤنٹ کھولیں`,
    notAMatch: (e, count, links, pairs) => (
      <>
        آپ کے لیے موزوں نہیں؟ <Link href={links.alternatives}>{e.name} کے {count} بہترین متبادل</Link> دیکھیں اور جانیں کہ ان میں سے ہر ایک کس کے لیے بہترین ہے،
        یا {e.name} کا آمنے سامنے موازنہ کریں: <Link href={pairs[0].href}>{pairs[0].label}</Link> اور <Link href={pairs[1].href}>{pairs[1].label}</Link>۔
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `کیا ${e.name} محفوظ ہے؟`,
    availability: "دستیابی:",
    closedWhereYouLive: (e, links) => (
      <>
        کیا آپ کے ملک میں {e.name} دستیاب نہیں؟ <Link href={`${links.alternatives}#countries`}>ہمارے {e.name} کے متبادل والے پیج پر ممالک کا جدول</Link> بتاتا
        ہے کہ باقی ایکسچینجز میں سے کون سے آپ کے ملک کے یوزرز کو قبول کرتے ہیں۔
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `${e.name} ریفرل کوڈ اور رجسٹریشن – سوال و جواب`,
    faqIntro: (e, count) =>
      `${e.name} ریفرل کوڈ ${e.referralCode}، اکاؤنٹ بنانے اور ویریفائی کرنے، ویلکم آفر اور فیس کے بارے میں ${count} سوالات۔`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "ذرائع: یہ حقائق کہاں سے لیے گئے ہیں",
    sourcesIntro: (e, date) =>
      `اس پیج پر ریفرل کوڈ، رجسٹریشن، ویریفکیشن، ویلکم آفر اور فیس کے بارے میں جو کچھ لکھا ہے، وہ ${date} کو ${e.name} کی اپنی ویب سائٹ اور ہیلپ سینٹر پر پڑھا گیا تھا۔ ایکسچینجز بغیر اطلاع کے آفرز اور فیس بدل دیتے ہیں اور مختلف ممالک میں مختلف شرائط دکھاتے ہیں، اس لیے حتمی بات نیچے دیے گئے پیجز کی ہی ہے۔`,

    /* Alternatives */
    alternativesTitle: (e) => `${e.name} کے متبادل`,
    alternativesIntro: (e, count, links) => (
      <>
        یقین نہیں کہ {e.name} آپ کے لیے صحیح ہے؟ یہ اس کے قریب ترین متبادل ہیں، اور ہر ایک پر ریفرل کے ساتھ الگ سے سائن اپ کیا جا سکتا ہے۔{" "}
        <Link href={links.alternatives}>{e.name} کے متبادل کا مکمل موازنہ</Link> تمام {count} ایکسچینجز کو فیس، لیوریج، پروڈکٹس، ویریفکیشن اور ممالک میں
        دستیابی کی بنیاد پر {e.name} کے مقابلے میں پرکھتا ہے۔
      </>
    ),
    headToHeadTitle: (e) => `${e.name}: آمنے سامنے موازنہ`,
    headToHeadIntro: (e) =>
      `${e.name} اور کسی ایک دوسرے ایکسچینج کے درمیان فیصلہ نہیں کر پا رہے؟ ہر جوڑی کا فیس، لیوریج، پروڈکٹس، ممالک اور ریفرل آفرز پر اپنا الگ موازنہ ہے:`,
    compareAll: (e, count) => `${e.name} کے تمام ${count} متبادل کا موازنہ کریں`,
    allComparisons: "تمام ایکسچینج موازنے ←",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>رسک وارننگ:</strong> کرپٹو ڈیریویٹیوز پیچیدہ انسٹرومنٹس ہیں۔ لیوریج منافع اور نقصان دونوں کو کئی گنا بڑھا دیتا ہے، اور آپ چند ہی منٹوں میں اپنا پورا
        مارجن کھو سکتے ہیں۔ یہ پیج صرف معلومات کے لیے ہے اور مالی مشورہ نہیں ہے۔ اگر آپ ہمارے لنکس کے ذریعے سائن اپ کرتے ہیں تو ہمیں کمیشن مل سکتا ہے – ہمارا{" "}
        <Link href={disclosureHref}>ایفیلیئٹ ڈسکلوژر</Link> دیکھیں۔
      </>
    ),
    joinTitle: (e) => `3 منٹ میں ${e.name} جوائن کریں`,
    joinText: (e) => `${benefit(e)}۔ Spot اور Futures کے لیے ایک ہی ریفرل۔`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `${name} ریفرل کوڈ`,
      signup: (name) => `${name} پر رجسٹریشن اور ویریفکیشن`,
      bonus: (name) => `${name} ویلکم بونس اور ریوارڈز`,
      fees: (name) => `${name} کی فیس اور ٹریڈنگ`,
      safety: () => "سیکیورٹی اور دستیابی",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `${e.name} ریفرل کوڈ کیا ہے؟`,
          a: `${e.name} ریفرل کوڈ ${e.referralCode} ہے۔ ${r.apply} ${e.name} خود اسے ${r.codeName} کہتا ہے۔`,
        },
        { topic: "referral", q: `${e.name} ریفرل کوڈ کہاں درج کریں؟`, a: r.whereToEnter },
        { topic: "referral", q: `کیا رجسٹریشن کے بعد ${e.name} ریفرل کوڈ شامل کیا جا سکتا ہے؟`, a: r.afterSignup },
        { topic: "referral", q: `${e.name} ریفرل کوڈ ${e.referralCode} سے کیا ملتا ہے؟`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `کیا ${e.name} ریفرل کوڈ Spot اور Futures دونوں پر کام کرتا ہے؟`,
          a: `جی ہاں۔ ریفرل آپ کے ${e.name} اکاؤنٹ سے جڑا ہوتا ہے، کسی ایک پروڈکٹ سے نہیں، اس لیے ${e.referralCode} کے ساتھ ایک ہی سائن اپ ${list(e.referralCovers)} پر لاگو ہوتا ہے۔`,
        },
        {
          topic: "referral",
          q: `کیا ${e.name} ریفرل کوڈ استعمال کرنے پر کوئی خرچ آتا ہے؟`,
          a: `نہیں۔ ${e.referralCode} درج کرنا مفت ہے اور اس سے آپ کی ٹریڈنگ فیس نہیں بڑھتی۔ ${e.name} اپنا ریفرل پروگرام فیس سے ہونے والی اپنی آمدنی سے چلاتا ہے۔`,
        },
        {
          topic: "signup",
          q: `${e.name} پر سائن اپ کیسے کریں؟`,
          a: `${s.steps.map((st, i) => `${i + 1}۔ ${asSentence(st.title)}`).join(" ")} آپ ${orList(s.methods)} کے ذریعے رجسٹر کر سکتے ہیں۔`,
        },
        { topic: "signup", q: `کیا ${e.name} پر شناختی تصدیق (KYC) ضروری ہے؟`, a: s.kyc },
        { topic: "signup", q: `${e.name} ویریفکیشن کے لیے کون سی دستاویزات قبول کرتا ہے؟`, a: s.documents },
        { topic: "signup", q: `${e.name} اکاؤنٹ کھولنے کے لیے کم از کم عمر کتنی ہونی چاہیے؟`, a: s.minAge },
        {
          topic: "fees",
          q: `${e.name} پر ٹریڈنگ فیس کتنی ہے؟`,
          a: `اسٹینڈرڈ لیول پر ${e.name} Spot پر ${e.spotFees.maker} میکر / ${e.spotFees.taker} ٹیکر اور پرپیچوئل Futures پر ${e.futuresFees.maker} میکر / ${e.futuresFees.taker} ٹیکر فیس لیتا ہے۔${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `${e.name} کن ممالک میں دستیاب نہیں ہے؟`, a: e.restricted },
      ];
    },
  },
};
