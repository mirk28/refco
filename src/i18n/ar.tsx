import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import { arabicCount, arabicName, withArabic } from "./ar-names";

/**
 * Interface texts in Arabic. Same keys as `en.tsx`, written natively from the English text. The pages run right to
 * left; the layout handles that.
 *
 * Wording: "كود إحالة" for referral code (main keyword), "رمز الإحالة" and "كود الدعوة" as second keywords, "منصة"
 * (feminine) for the exchange – an exchange name is treated as feminine too ("تقدّم OKX"). Clear Modern Standard
 * Arabic, the reader addressed in the second person singular. Exchange names stay in Latin letters; the Arabic
 * spelling ("Binance (بينانس)") is added in the title, the H1, the opening text of a referral-code page and the
 * keywords only. No prefix (بـ، لـ، كـ، الـ) is glued to a Latin name or a variable; "و" is. Arabic punctuation
 * (، ؛ ؟), full stop ".". Numbers in Latin digits with a decimal point (0.02%, 10,000 USDT, 34.1 مليار دولار).
 * Field and button names of the exchanges stay in English, because only the English interface was checked.
 */

const NBSP = " ";
const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A، B وC" – "و" is written directly before the last item, also before a Latin word. */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join("، ")} و${items[items.length - 1]}`);
/** "A أو B أو C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => items.join(" أو ");
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** A step title as a sentence in a running answer: it gets a full stop unless it already ends with a mark. */
const asSentence = (s: string) => (/[.؟!?:]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** Billions of US dollars with Latin digits, as Arabic crypto media write them: 34.1 → "34.1 مليار دولار". */
const usd = (n: string) => `${n}${NBSP}مليار${NBSP}دولار`;

export const ar: Dictionary = {
  list,

  format: {
    billions: (n) => usd(n.toFixed(n >= 10 ? 1 : 2)),
    billionsExact: (n) => usd(n.toFixed(2)),
    billionsFloor: (n) => usd(`${Math.floor(n)}+`),
  },

  meta: {
    siteTitle: `${site.name} – أكواد إحالة موثّقة لمنصات تداول العملات الرقمية`,
    siteDescription:
      "أكواد إحالة موثّقة لمنصات Binance وOKX وBybit وBitget وGate وKuCoin وMEXC – احصل على مكافآت المستخدمين الجدد واسترداد الرسوم في التداول الفوري (Spot) والعقود الآجلة (Futures) عبر رابط تسجيل واحد. الرسوم والحقائق الأساسية، والمزايا والعيوب بصراحة.",
  },

  layout: {
    skip: "انتقل إلى المحتوى",
    mainNav: "القائمة الرئيسية",
    nav: { exchanges: "المنصات", benefits: "المزايا", compare: "المقارنة", howItWorks: "طريقة العمل", about: "من نحن" },
    getCodes: "احصل على الأكواد",
    homeLabel: `${site.name} – الصفحة الرئيسية لموقع ${site.domain}`,
    language: "اللغة",
    footerAbout:
      "أكواد إحالة موثّقة لأكبر منصات تداول العملات الرقمية – مكافآت ترحيب واسترداد للرسوم في التداول الفوري والعقود الآجلة. حقائق واضحة من مصادر رسمية.",
    referralCodes: "أكواد الإحالة",
    referralCodeOf: (name) => `كود إحالة ${name}`,
    alternatives: "البدائل",
    alternativesOf: (name) => `بدائل ${name}`,
    guides: "أدلة",
    comparisons: "مقارنة المنصات",
    howCodesWork: "كيف تعمل أكواد الإحالة",
    faq: "الأسئلة الشائعة",
    about: "من نحن وكيف نتحقق",
    legal: "الصفحات القانونية",
    imprint: "المعلومات القانونية",
    privacy: "سياسة الخصوصية",
    disclosure: "إفصاح التسويق بالعمولة",
    cookieSettings: "إعدادات ملفات تعريف الارتباط",
    risk: (
      <>
        <strong>تحذير من المخاطر:</strong> تداول مشتقات العملات الرقمية بالرافعة المالية عالي المخاطر، وقد يؤدي إلى خسارة إيداعك بالكامل. لا تتداول إلا
        بأموال يمكنك تحمّل خسارتها. لا شيء في هذا الموقع يُعدّ نصيحة مالية أو استثمارية أو ضريبية.
      </>
    ),
    affiliate: (
      <>
        <strong>إفصاح التسويق بالعمولة:</strong> بعض الروابط روابط إحالة. إذا سجّلت من خلالها فقد نحصل على عمولة دون أي تكلفة إضافية عليك. ولا يؤثر ذلك
        أبدًا في الحقائق التي ننشرها. أسماء المنصات وشعاراتها علامات تجارية مملوكة لأصحابها؛ و{site.name} غير تابع لها ولا معتمد منها.
      </>
    ),
  },

  consent: {
    label: "الموافقة على التحليلات",
    text: (privacyHref) => (
      <>
        <strong>التحليلات – القرار لك.</strong> نودّ استخدام Google Analytics لنعرف أي الصفحات تُقرأ. تضع هذه الأداة ملفات تعريف الارتباط وترسل بيانات
        الاستخدام إلى Google، ولا تعمل إلا إذا سمحت بذلك. ولا ملفات تعريف ارتباط إعلانية في الحالتين. التفاصيل: <Link href={privacyHref}>سياسة الخصوصية</Link>.
      </>
    ),
    decline: "رفض",
    allow: "السماح بالتحليلات",
  },

  notFound: {
    title: "هذه الصفحة غير موجودة",
    text: "ربما نُقل كود الإحالة الذي تبحث عنه إلى صفحة أخرى. جرّب إحدى هذه الصفحات:",
    back: "العودة إلى الصفحة الرئيسية",
  },

  og: {
    footer: ["روابط موثّقة", "الرسوم والحقائق", "مصادر رسمية"],
    homeAlt: "RefCo – أكواد إحالة موثّقة لمنصات تداول العملات الرقمية",
    homeKicker: (monthYear) => `تحديث ${monthYear}`,
    homeTitle: "أكواد إحالة منصات العملات الرقمية، موثّقة.",
    exchangeAlt: "كود إحالة المنصة وبدائلها ومقارناتها – RefCo",
    exchangeKicker: (monthYear) => `تم التحقق: ${monthYear}`,
    exchangeTitle: (e) => `كود إحالة ${e.name}`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot وFutures برابط واحد`,
    versusBadge: "مقارنة مباشرة",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `رسوم العقود الآجلة ${feesA} مقابل ${feesB} · رافعة ${leverageA}x مقابل ${leverageB}x · KYC، الدول، المكافأة`,
  },

  blocks: {
    signUpOn: (name) => `سجّل في ${name}`,
    signUp: "سجّل الآن",
    details: "التفاصيل",
    breadcrumb: "مسار التنقل",
    copy: "نسخ",
    copied: "تم النسخ ✓",
    spotMakerTaker: "Spot: صانع / آخذ",
    futuresMakerTaker: "Futures: صانع / آخذ",
    maxLeverage: "أقصى رافعة مالية",
    since: "التأسيس",
    tableCaption: "مقارنة منصات العملات الرقمية حسب عرض المستخدمين الجدد ورسوم التداول الفوري والعقود الآجلة والرافعة المالية وبيانات السوق",
    exchange: "المنصة",
    newUserOffer: "عرض المستخدمين الجدد",
    futuresFees: "رسوم Futures (صانع / آخذ)",
    spotFees: "رسوم Spot",
    openInterest: "العقود المفتوحة",
    markets: "الأسواق",
    action: "إجراء",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) =>
      fit(TITLE_MAX, `أكواد إحالة منصات العملات الرقمية ومكافآتها (${monthYear})`, `أكواد إحالة منصات العملات الرقمية (${monthYear})`),
    description: (monthYear) =>
      fit(
        DESC_MAX,
        `أكواد إحالة موثّقة لمنصات Binance وOKX وBybit وBitget وGate وKuCoin وMEXC: مكافآت المستخدمين الجدد واسترداد الرسوم في Spot وFutures برابط واحد – تحديث ${monthYear}.`,
        `أكواد إحالة موثّقة لمنصات Binance وOKX وBybit وBitget وGate وKuCoin وMEXC: مكافآت المستخدمين الجدد واسترداد الرسوم برابط واحد – تحديث ${monthYear}.`,
        `أكواد إحالة موثّقة لمنصات Binance وOKX وBybit وBitget وGate وKuCoin وMEXC: مكافآت المستخدمين الجدد واسترداد الرسوم برابط واحد.`,
      ),
    listName: "أكواد إحالة منصات العملات الرقمية للتداول الفوري والعقود الآجلة",
    updated: (monthYear) => `تحديث ${monthYear}`,
    h1: (
      <>
        أكواد إحالة منصات العملات الرقمية، <span className="hl">موثّقة</span> ومشروحة.
      </>
    ),
    lead: (
      <>
        احصل على مكافآت الترحيب واسترداد الرسوم على أكبر منصات العملات الرقمية في العالم – كود إحالة واحد (رمز الإحالة) يشمل التداول الفوري والعقود الآجلة{" "}
        <em>معًا</em>. ومعه الحقائق التي تحتاجها لتختار: الرسوم والرافعة المالية والتراخيص، والمزايا والعيوب بصراحة.
      </>
    ),
    browse: "تصفّح أكواد الإحالة",
    seeBenefits: "اكتشف مزاياك",
    trust: (date) => [`تم التحقق في ${date}`, "روابط رسمية فقط", "التحليلات بموافقتك فقط"],
    featured: "منصات مختارة",
    ticketName: (name) => `كود إحالة ${name}`,
    ticketTag: "SPOT + FUTURES",
    stats: ["أبرز منصات Spot وFutures", "إجمالي العقود المفتوحة", "أسواق المشتقات المشمولة", "أقل رسوم صانع (MEXC)"],
    marketData: (date) => `بيانات السوق: تصنيف CoinMarketCap لمنصات المشتقات، بتاريخ ${date}.`,

    benefitsEyebrow: "مزاياك",
    benefitsTitle: `لماذا تسجّل بكود إحالة من ${site.name}؟`,
    benefitsLead: "المنصة نفسها والرسوم نفسها – لكن مع امتيازات المستخدمين الجدد التي تفوتك إذا سجّلت مباشرة.",
    benefits: [
      {
        title: "مكافآت الترحيب",
        text: "احصل على عرض المستخدمين الجدد في المنصة – قسائم استرداد الرسوم ومكافآت العقود الآجلة ومكافآت المهام، بقيمة قد تصل إلى آلاف USDT.",
      },
      {
        title: "رسوم تداول أقل",
        text: "حيث تسمح المنصة بذلك، يعود إليك جزء من عمولة الإحالة على شكل استرداد في كل صفقة.",
      },
      {
        title: "Spot وFutures برابط واحد",
        text: "ترتبط الإحالة بحسابك – فهي تشمل التداول الفوري والعقود الآجلة والتداول بالهامش والخيارات. لا حاجة إلى كود ثانٍ.",
      },
      { title: "دون أي تكلفة إضافية", text: "الإحالة لا ترفع رسومك أبدًا. أنت المستفيد فقط – والمنصة هي التي تموّل البرنامج." },
      { title: "صفحات تسجيل رسمية", text: "كل رابط يفتح موقع المنصة نفسها. لا وسطاء، ولا بيانات تُشارَك معنا." },
      {
        title: "الأفضل أن تستخدمه عند التسجيل",
        text: "بعض المنصات تتيح إضافة الكود خلال 30 يومًا، وبعضها لا يتيح ذلك أبدًا. استخدم الرابط قبل أن تنشئ حسابك، وستكون في أمان على كل المنصات.",
      },
    ],
    offersCaption: "عروض المستخدمين الجدد في كل منصة",
    offersHead: ["المنصة", "عرض المستخدمين الجدد مع الإحالة", "يشمل الرابط الواحد"],
    claim: "احصل على المكافأة",
    offersNote: (date) =>
      `تم التحقق من العروض في ${date}. مكافآت الترحيب مرتبطة بإنجاز مهام، وتتطلب التحقق من الهوية، وتختلف حسب المنطقة – الشروط السارية تظهر في صفحة التسجيل لدى كل منصة.`,

    exchangesEyebrow: "أكواد الإحالة",
    exchangesTitle: "اختر منصتك",
    exchangesLead: "كل صفحة تشرح الإحالة والرسوم ولمن تناسب المنصة أكثر – لتسجّل مرة واحدة، على المنصة المناسبة.",
    sideBySide: "جنبًا إلى جنب",
    notSure: "لم تحسم اختيارك بعد؟",
    notSureText: (count) =>
      `قارن الرسوم والرافعة المالية والعقود المفتوحة للمنصات كلها – ${arabicCount(count, { one: "منصة واحدة", two: "منصتان", few: "منصات", many: "منصة" })} في جدول واحد.`,
    compareExchanges: "قارن المنصات",

    compareTitle: "مقارنة منصات العملات الرقمية: Spot وFutures",
    compareLead: "عروض المستخدمين الجدد، والرسوم الأساسية (دون مستوى VIP) للتداول الفوري والعقود الآجلة، والرافعة المالية وعمق السوق في لمحة واحدة.",
    compareNote: (reviewed, market) =>
      `الرسوم: المستوى الأساسي كما تنشره كل منصة، تم التحقق منه في ${reviewed}. العقود المفتوحة والأسواق: CoinMarketCap، ${market}. الرسوم تتغير – تأكّد منها على المنصة قبل التداول.`,
    versusStrip: {
      title: "قارن بين منصتين مقارنة مباشرة",
      text: (pairs, hubHref) => (
        <>
          {arabicCount(pairs, { one: "مقارنة مباشرة واحدة", two: "مقارنتان مباشرتان", few: "مقارنات مباشرة", many: "مقارنة مباشرة" })} بين أزواج المنصات،
          تضع الرسوم والرافعة المالية والمنتجات والدول وKYC وعروض الإحالة جنبًا إلى جنب – <Link href={hubHref}>جميع مقارنات المنصات</Link>.
        </>
      ),
    },
    alternativesStrip: {
      title: "تبحث عن بديل لمنصتك؟",
      text: (others) =>
        `كل مقارنة تضع منصة واحدة أمام ${arabicCount(others, { one: "منصة أخرى", two: "منصتين أخريين", few: "منصات أخرى", many: "منصة أخرى" })}: الرسوم والرافعة المالية والمنتجات والتحقق من الهوية والدول التي تقبل المقيمين فيها.`,
    },

    picksEyebrow: "الإجابة المختصرة",
    picksTitle: "ما المنصة الأنسب لك؟",
    picks: [
      { label: "أعمق سيولة", slug: "binance", why: "أكبر حجم للعقود المفتوحة وأعلى حجم تداول للعقود الآجلة في العالم." },
      { label: "رسوم منخفضة وخيارات", slug: "okx", why: "رسوم 0.08% / 0.10% على Spot، و0.03% على الخيارات، وإثبات احتياطيات كل شهر." },
      { label: "تداول Futures النشط عبر الجوال", slug: "bybit", why: "محرك تداول سريع، وواحد من أفضل تطبيقات التداول." },
      { label: "التداول بالنسخ", slug: "bitget", why: "انسخ صفقات متداولي العقود الآجلة ذوي الخبرة تلقائيًا." },
      { label: "أكبر عدد من العملات البديلة", slug: "gate", why: "أكثر من 5,400 أصل، وعقود آجلة حتى على العملات الصغيرة والمتخصصة." },
      { label: "روبوتات التداول", slug: "kucoin", why: "روبوتات تداول مجانية للتداول الفوري والعقود الآجلة." },
      { label: "أقل الرسوم", slug: "mexc", why: "رسوم صانع 0% على Spot ومعظم عقود Futures." },
    ],

    howEyebrow: "طريقة العمل",
    howTitle: "استخدم كود الإحالة في ثلاث خطوات",
    steps: [
      { title: "اختر منصة", text: "قارن الرسوم والرافعة المالية والميزات أعلاه، وافتح صفحة المنصة التي تناسب أسلوب تداولك." },
      {
        title: "سجّل عبر رابطنا",
        text: "تُضاف الإحالة تلقائيًا. سجّل ببريدك الإلكتروني أو رقم هاتفك قبل أن تنشئ حسابًا في أي مكان آخر.",
      },
      {
        title: "تحقّق واحصل على المكافآت",
        text: "أكمل التحقق من الهوية (KYC)، وأمّن حسابك بالمصادقة الثنائية (2FA)، ثم راجع مكافآت الترحيب الظاهرة في لوحة التحكم.",
      },
    ],

    trustEyebrow: `لماذا ${site.name}`,
    trustTitle: "صُمّم لكسب الثقة، لا النقرات",
    trustCards: [
      { title: "عروض موثّقة", text: "نتحقق من عرض المستخدمين الجدد لدى كل منصة، ولا ندرج إلا ما يمكنك الحصول عليه فعلًا." },
      { title: "حقائق حديثة ومؤرّخة", text: "نعيد التحقق من الرسوم والرافعة المالية والتراخيص بانتظام، وكل صفحة تعرض تاريخ مراجعتها." },
      { title: "الخصوصية أولًا", text: "لا بكسلات إعلانية ولا ملفات تعريف ارتباط إعلانية. التحليلات لا تعمل إلا إذا سمحت بها." },
      { title: "سريع وواضح", text: "صفحات خفيفة تُفتح فورًا على أي هاتف – الإجابة أولًا، ثم التفاصيل." },
      { title: "مزايا وعيوب بصراحة", text: "نذكر نقاط الضعف والحوادث والقيود الإقليمية – لا الكلام التسويقي وحده." },
      { title: "المخاطر أولًا", text: "الرافعة المالية قد تمحو إيداعك بسرعة. ونقول ذلك بوضوح في كل صفحة." },
    ],

    faqEyebrow: "الأسئلة الشائعة",
    faqTitle: "أكواد الإحالة – الأسئلة الشائعة",
    faqs: (reviewed) => [
      {
        q: "ما هو كود الإحالة في منصات تداول العملات الرقمية؟",
        a: "كود الإحالة (ويُسمّى أيضًا كود الدعوة أو رمز الإحالة) معرّف قصير يربط الحساب الجديد على المنصة بالشخص أو الموقع الذي أوصى بها. تستخدمه المنصات لمكافأة الطرفين – فالمستخدم الجديد يحصل عادةً على مكافآت ترحيب أو خصم على رسوم التداول، ويحصل صاحب الإحالة على حصة من الرسوم.",
      },
      {
        q: "ما فوائد استخدام كود الإحالة؟",
        a: "يحصل المستخدمون الجدد الذين يسجّلون عبر إحالة على عرض المستخدمين الجدد في المنصة – مثل مكافآت إحالة تصل إلى 250 USDT على Bybit أو مكافآت للمستخدمين الجدد تصل إلى 10,000 USDT على MEXC – وحين يتقاسم صاحب الإحالة عمولته، يستعيدون أيضًا جزءًا من رسوم التداول، مثل 10% لمدة سنة على Gate. ولا يكلّفهم ذلك شيئًا إضافيًا.",
      },
      {
        q: "هل يصلح كود إحالة واحد للتداول الفوري والعقود الآجلة معًا؟",
        a: "نعم. على Binance وOKX وBybit وBitget وGate وKuCoin وMEXC ترتبط الإحالة بحسابك، لا بمنتج واحد. تسجيل واحد يشمل التداول الفوري والعقود الآجلة – إضافة إلى التداول بالهامش أو الخيارات أو التداول بالنسخ حيث توفّرها المنصة.",
      },
      {
        q: "هل أدفع أكثر إذا سجّلت بكود إحالة؟",
        a: "لا. التسجيل عبر رابط إحالة لا يرفع رسومك أبدًا. وحسب المنصة ومنطقتك، قد تحصل أيضًا على خصم على الرسوم أو مكافأة ترحيب لن تحصل عليها من دونه.",
      },
      {
        q: "هل يمكنني إضافة كود الإحالة بعد إنشاء الحساب؟",
        a: "يعتمد ذلك على المنصة. تتيح لك Binance ربط كود خلال 30 يومًا من التسجيل إذا لم تكن قد أودعت أو تداولت، وتتيح لك MEXC ربط صاحب الإحالة بنفسك خلال 30 يومًا من التسجيل. ولدى KuCoin طلب “Link Referrer” في مركز المساعدة. أما Bybit وOKX وBitget فلا تقبل الكود إلا أثناء التسجيل، ولا توثّق Gate أي طريقة لإضافته لاحقًا. الطريقة الآمنة هي أن تستخدم الرابط قبل إنشاء حسابك.",
      },
      {
        q: "ما منصة العملات الرقمية الأقل رسومًا على العقود الآجلة؟",
        a: `في آخر مراجعة لنا (${reviewed}) كانت MEXC الأقل في رسوم العقود الآجلة الأساسية: 0% للصانع و0.02% للآخذ على BTCUSDT. وفي المستوى الأساسي تفرض Binance وOKX وGate رسوم 0.02% للصانع / 0.05% للآخذ، وBybit رسوم 0.02% / 0.055%، وBitget وKuCoin رسوم 0.02% / 0.06%.`,
      },
      {
        q: "ما أفضل منصة لتداول مشتقات العملات الرقمية؟",
        a: "يعتمد ذلك على ما تتداوله. تقدّم Binance أعمق سيولة، وتجمع OKX بين الرسوم المنخفضة والخيارات، وصُمّمت Bybit للتداول السريع على العقود الدائمة، وBitget للتداول بالنسخ، وGate للعقود الآجلة على العملات البديلة، وKuCoin للروبوتات، وMEXC لأقل الرسوم.",
      },
      {
        q: "هل هذه المنصات متاحة في الولايات المتحدة؟",
        a: "في الغالب لا. تُدرج Binance وBybit وBitget وGate وKuCoin وMEXC الولايات المتحدة ضمن الدول المقيّدة أو المحظورة، وتفرض OKX قيودًا على مناطق معيّنة داخل الولايات المتحدة. ويختلف التوفر أيضًا في المملكة المتحدة وكندا والاتحاد الأوروبي – وكل صفحة منصة تسرد الدول المحظورة وفق شروط المنصة نفسها.",
      },
      {
        q: "كم مرة تُحدَّث هذه المعلومات؟",
        a: `نعيد التحقق من الرسوم والرافعة المالية والتراخيص وبيانات السوق بانتظام. تعرض كل صفحة تاريخ آخر مراجعة لها؛ وقد جرى التحقق من البيانات الحالية في ${reviewed}.`,
      },
    ],

    countryFaq: {
      country: "ae",
      // The answer below states these statuses in words. The home page compares them with the researched
      // data (src/data/alternatives/) and stops the build if one has changed, so the text gets rewritten.
      expected: { binance: "regional", okx: "regional", bybit: "partial", bitget: "restricted", gate: "regional", kucoin: "open", mexc: "open" },
      faq: (reviewed) => ({
        q: "هل هذه المنصات متاحة في الإمارات العربية المتحدة؟",
        a: `وفق صفحات كل منصة، كما راجعناها في ${reviewed}: تخدم Binance وOKX وGate المقيمين في الإمارات عبر منصات إقليمية مستقلة في دبي مرخّصة من VARA، هي Binance UAE (Binance FZE) وOKX Middle East (OKX Middle East Fintech FZE) وGate Dubai (Gate Technology FZE). ولكل منصة إقليمية لدى OKX مجموعة منتجات خاصة بها، أما المواقع الإقليمية لدى Gate فتعرض منتجات أقل من الموقع العالمي، ولا تنتقل إليها الإحالات من الموقع العالمي. وتخضع Bybit لقيود جزئية، إذ تستثني قائمتها دبي فيما يخص كيانها في الإمارات. أما Bitget فتُدرج الإمارات ضمن الدول المحظورة، في حين لا تُدرج KuCoin ولا MEXC الإمارات ضمن دولهما المحظورة. وبالنسبة إلى الدول الأخرى، تسرد صفحة كل منصة القيود الواردة في شروطها.`,
      }),
    },

    ctaTitle: "احصل على مكافأة الترحيب",
    ctaText: "اختر منصة، وسجّل بإحالة موثّقة، وتداول Spot وFutures من حساب واحد.",
    ctaButton: "عرض كل أكواد الإحالة",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    // Four wordings, chosen per exchange, so the seven titles do not all start with "كود إحالة <Exchange>". The Arabic
    // spelling in brackets goes first when the title gets too long.
    title: (e, shortMonthYear) => {
      const n = e.name, w = withArabic(e), c = e.referralCode, m = shortMonthYear, y = yearOf(shortMonthYear);
      return [
        () => fit(TITLE_MAX, `كود إحالة ${w}: ${c} – مكافأة التسجيل (${m})`, `كود إحالة ${w}: ${c} (${m})`, `كود إحالة ${n}: ${c} (${m})`, `كود إحالة ${n}: ${c}`),
        () => fit(TITLE_MAX, `${c}: كود إحالة ${w} ومكافأة الترحيب (${m})`, `${c}: كود إحالة ${w} ومكافأة الترحيب`, `${c}: كود إحالة ${w} (${m})`, `${c}: كود إحالة ${n} (${m})`, `${c}: كود إحالة ${n}`),
        () => fit(TITLE_MAX, `مكافأة المستخدمين الجدد: كود إحالة ${w} ${c}`, `مكافأة التسجيل: كود إحالة ${w} ${c} (${y})`, `مكافأة التسجيل: كود إحالة ${n} ${c}`, `كود إحالة ${n} ${c} (${y})`),
        () => fit(TITLE_MAX, `كيف تستخدم كود إحالة ${w} ${c}؟ (${m})`, `كيف تستخدم كود إحالة ${w} ${c}؟`, `كيف تستخدم كود إحالة ${n} ${c}؟`, `كود إحالة ${n} ${c}`),
      ][variant(4, e.slug)]();
    },
    description: (e, monthYear) =>
      fit(
        DESC_MAX,
        `كود إحالة ${e.name} (رمز الإحالة): ${e.referralCode}. ${benefit(e)} – مكان إدخاله وخطوات التسجيل وKYC والرسوم، كما تحققنا منها في ${monthYear}.`,
        `كود إحالة ${e.name}: ${e.referralCode}. ${benefit(e)} – مكان إدخاله وخطوات التسجيل وKYC والرسوم، كما تحققنا منها في ${monthYear}.`,
        `كود إحالة ${e.name}: ${e.referralCode}. ${benefit(e)} – مكان إدخاله وخطوات التسجيل وKYC والرسوم.`,
      ),
    keywords: (e) => {
      const spelling = arabicName[e.slug];
      const same = (k: string) => k.toLowerCase().replace(/[\s-]/g, "");
      return [
        `كود إحالة ${e.name}`,
        ...(spelling ? [`كود إحالة ${spelling}`, `كود دعوة ${spelling}`] : []),
        ...(e.slug === "binance" ? ["كود إحالة باينانس"] : []),
        `رمز الإحالة ${e.name}`,
        `كود الدعوة ${e.name}`,
        `${e.name} referral code`,
        `كود إحالة ${e.name} ${e.referralCode}`,
        `${e.name} ${e.referral.codeName}`,
        `رابط إحالة ${e.name}`,
        `مكافأة التسجيل في ${e.name}`,
        `طريقة التسجيل في ${e.name}`,
        `${e.name} KYC`,
        `رسوم العقود الآجلة ${e.name}`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "الكود في لمحة",
      benefits: "مزاياك",
      "use-code": "كيف تستخدم الكود",
      "how-to": "طريقة التسجيل",
      verification: "التحقق من الهوية (KYC)",
      "key-facts": "حقائق أساسية",
      fees: "الرسوم",
      about: "عن المنصة",
      "pros-cons": "المزايا والعيوب",
      "best-for": "لمن تناسب",
      safety: "الأمان والتوفر",
      faq: "الأسئلة الشائعة",
      sources: "المصادر",
      alternatives: "البدائل والمقارنات",
    },
    onThisPage: "في هذه الصفحة",
    crumbHome: "الرئيسية",
    crumbCodes: "أكواد الإحالة",
    crumbPage: (e) => `كود إحالة ${e.name}`,

    /* JSON-LD */
    offerName: (e) => `كود إحالة ${e.name} ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}. إحالة واحدة تشمل ${list(e.referralCovers)}.`,
    offerCategory: "التسجيل في منصة تداول العملات الرقمية",
    howToName: (e) => `كيف تسجّل في ${e.name} بكود الإحالة ${e.referralCode}`,
    howToDescription: (e) => `خطوات التسجيل في ${e.name} كما توثّقها المنصة، بما في ذلك موضع إدخال كود الإحالة ${e.referralCode}.`,

    /* Hero */
    updated: (date) => `تم التحقق والتحديث في ${date}`,
    h1: (e) => `كود إحالة ${withArabic(e)}: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – إضافة إلى إحالة واحدة تشمل {list(e.referralCovers)}. إليك ما تحصل عليه، وكم يكلّفك التداول، وهل {withArabic(e)} هي
        المنصة المناسبة لك.
      </>
    ),
    quickAnswer: "الإجابة المختصرة",
    highlights: "أبرز النقاط",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `رافعة مالية ${shortLeverage(e)}`,
      arabicCount(e.market.markets, { one: "سوق مشتقات واحد", two: "سوقان للمشتقات", few: "أسواق مشتقات", many: "سوقًا للمشتقات", hundred: "سوق للمشتقات" }),
      `منذ ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `تسجيلك في ${e.name}`,
    appliedByLink: "تُطبَّق الإحالة تلقائيًا عبر هذا الرابط.",
    goesToOfficial: (domain) => `ينقلك مباشرةً إلى الموقع الرسمي ${domain}.`,
    codeLabel: "كود الإحالة",
    noCodeToType: "لا حاجة إلى كتابة كود – تُطبَّق الإحالة عبر الرابط",
    officialSite: (domain) => `الموقع الرسمي: ${domain}`,
    yourBenefits: "مزاياك",
    freeNeverRaises: "مجاني – الإحالة لا ترفع رسومك أبدًا",
    qrLabel: (e) => `رمز QR: سجّل في تطبيق ${e.name} بالإحالة ${e.referralCode}`,
    preferApp: "تفضّل التطبيق؟",
    scan: (e) => (
      <>
        امسح الرمز بكاميرا هاتفك لفتح {e.name}
        {e.referralCode ? (
          <>
            {" "}
            – والإحالة <strong>{e.referralCode}</strong> مضمّنة
          </>
        ) : null}
        . يعمل على iOS وAndroid.
      </>
    ),
    riskLine: (e, links) => (
      <>
        التداول بالرافعة المالية عالي المخاطر. والمنصة ليست متاحة في كل الدول – راجع <a href="#safety">التوفر</a> أو{" "}
        <Link href={links.alternatives}>بدائل {e.name}</Link>.
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `كود إحالة ${e.name} ${e.referralCode} في لمحة`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        كود إحالة {e.name} (رمز الإحالة) لشهر {monthYear} هو <strong>{e.referralCode}</strong>. يلخّص الجدول وظيفة الكود، وأين يُدخَل، وما تطلبه {e.name}{" "}
        من الحساب الجديد – وقد طابقنا كل سطر مع صفحات {e.name} نفسها في {date}.
      </>
    ),
    codeFactsCaption: (e) => `كود إحالة ${e.name} ${e.referralCode}: حقائق أساسية`,
    codeFacts: (e, date) => [
      [`كود إحالة ${e.name}`, <strong key="code">{e.referralCode}</strong>],
      [`تسميته لدى ${e.name}`, e.referral.codeName],
      ["ميزة المستخدم الجديد", benefit(e)],
      ["أين يُدخَل", e.referral.whereShort],
      ["هل يمكن إضافته بعد التسجيل؟", e.referral.afterSignupShort],
      ["يسري على", e.referralCovers.join("، ")],
      ["التحقق من الهوية (KYC)", e.signup.kycShort],
      ["التكلفة", "مجاني – لا يرفع رسومك"],
      ["آخر تحقق", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `مزاياك مع كود إحالة ${e.name}`,
    benefitsIntro: (e) => (
      <>
        التسجيل بكود إحالة {e.name} <strong>{e.referralCode}</strong> لا يكلّفك شيئًا إضافيًا. وهذا ما تقدّمه {e.name} للحسابات الجديدة حاليًا. والكود نفسه
        يسري على <strong>{list(e.referralCovers)}</strong> – فلا تحتاج إلى كود منفصل للتداول الفوري وآخر للعقود الآجلة.
      </>
    ),
    offerChecked: (date) => `عرض المستخدمين الجدد · تم التحقق في ${date}`,
    appliedWhenRegistering: "يُطبَّق عند التسجيل عبر هذه الإحالة",
    noExtraCost: "دون تكلفة إضافية – رسوم تداولك لا ترتفع أبدًا بسبب الإحالة",
    oneReferralCovers: "إحالة واحدة تشمل:",
    claimOffer: (e) => `احصل على مكافأة الترحيب من ${e.name}`,
    tasksTitle: (e) => `عرض المستخدمين الجدد على ${e.name}: المهام والمكافآت`,
    tasksCaption: (e) => `مهام المستخدمين الجدد على ${e.name} ومكافأة كل مهمة`,
    task: "المهمة",
    reward: "المكافأة",
    tasksNote: (e, date) =>
      `بحسب ما نشرته ${e.name} في ${date}. تختلف العروض من دولة إلى أخرى وتتغير كثيرًا – والشروط التي تظهر في حسابك بعد التسجيل هي التي تسري.`,

    /* How to use the code */
    useCodeTitle: (e) => `كيف تستخدم كود إحالة ${e.name} ${e.referralCode}`,
    whereToEnter: (e) => `أين تُدخل كود إحالة ${e.name}`,
    forgotCode: "نسيت الكود؟ إضافته بعد التسجيل",
    asInvited: "ما تحصل عليه كمستخدم مدعو",
    interfaceNote: (e) => (
      <>
        أسماء الحقول والأزرار الواردة بين علامات التنصيص مأخوذة من الواجهة الإنجليزية لمنصة {e.name} التي راجعناها؛ وقد تختلف تسمياتها في الواجهة العربية.
      </>
    ),

    /* Registration */
    howToTitle: (e) => `طريقة التسجيل في ${e.name} خطوة بخطوة`,
    howToIntro: (e) => (
      <>
        تتيح لك {e.name} فتح حساب باستخدام {orList(e.signup.methods)}. وفيما يلي الخطوات كما توثّقها {e.name}، مع الخطوة التي يأتي فيها دور كود الإحالة{" "}
        <strong>{e.referralCode}</strong>.
      </>
    ),
    startRegistration: (e) => `ابدأ التسجيل في ${e.name}`,

    /* Verification */
    kycTitle: (e) => `التحقق من الهوية (KYC) على ${e.name}`,
    verification: "التحقق",
    minAge: "الحد الأدنى للعمر",
    documents: "المستندات المقبولة",

    /* Key facts */
    factsTitle: (e) => `منصة ${e.name} في لمحة`,
    founded: "سنة التأسيس",
    headquarters: "المقر الرئيسي",
    futuresFees: "رسوم Futures (صانع / آخذ)",
    spotFees: "رسوم Spot (صانع / آخذ)",
    maxLeverage: "أقصى رافعة مالية",
    assets: "الأصول",
    openInterest: "العقود المفتوحة",
    volume24h: "حجم تداول المشتقات خلال 24 ساعة",
    users: "المستخدمون",
    regulation: "التنظيم",
    factsNote: (date) =>
      `العقود المفتوحة وحجم التداول وعدد الأسواق: تصنيف CoinMarketCap لمنصات المشتقات، ${date}. الرسوم: المستوى الأساسي في تاريخ المراجعة.`,

    /* Fees */
    feesTitle: (e) => `شرح رسوم ${e.name}`,
    feesIntro: (e) =>
      `تعتمد ${e.name} نموذج الصانع والآخذ (Maker/Taker): الأوامر التي تضيف سيولة إلى دفتر الأوامر (الأوامر المحددة) تدفع رسوم الصانع، والأوامر التي تسحب السيولة منه (أوامر السوق) تدفع رسوم الآخذ. وتنخفض النسب كلما ارتفع حجم تداولك خلال 30 يومًا أو زادت حيازاتك.`,
    market: "السوق",
    maker: "صانع",
    taker: "آخذ",
    futuresRow: "Futures / العقود الدائمة",
    spotRow: "Spot",
    feesNote: (e, date) => `النسب الأساسية (دون مستوى VIP) كما تنشرها ${e.name}، تم التحقق منها في ${date}.`,
    funding: "رسوم التمويل (Funding) على العقود الدائمة يدفعها المتداولون بعضهم لبعض، لا للمنصة.",
    liveSchedule: (e) => `اطّلع على جدول رسوم ${e.name} الحالي`,
    feesCompare: (e, others, links) => (
      <>
        كيف تبدو هذه النسب مقارنةً بغيرها؟ <Link href={`${links.alternatives}#fees`}>مقارنتنا لبدائل {e.name}</Link> تضع رسوم {e.name} بجانب رسوم{" "}
        {list(others)}.
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `عن منصة ${e.name}`,
    products: "المنتجات",
    prosConsTitle: (e) => `مزايا ${e.name} وعيوبها`,
    pros: "المزايا",
    cons: "العيوب",
    bestForTitle: (e) => `لمن تناسب منصة ${e.name}؟`,
    openAccount: (e) => `افتح حسابك على ${e.name}`,
    notAMatch: (e, count, links, pairs) => (
      <>
        لا تناسبك؟ اطّلع على{" "}
        <Link href={links.alternatives}>
          أفضل {arabicCount(count, { one: "بديل واحد", two: "بديلين", few: "بدائل", many: "بديلًا", hundred: "بديل" })} لمنصة {e.name}
        </Link>{" "}
        ولمن يصلح كل منها، أو قارن {e.name} مقارنة مباشرة: <Link href={pairs[0].href}>{pairs[0].label}</Link> و
        <Link href={pairs[1].href}>{pairs[1].label}</Link>.
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `هل منصة ${e.name} آمنة؟`,
    availability: "التوفر:",
    closedWhereYouLive: (e, links) => (
      <>
        هل {e.name} غير متاحة في بلدك؟ يوضّح <Link href={`${links.alternatives}#countries`}>جدول الدول في صفحة بدائل {e.name}</Link> أيّ المنصات الأخرى تقبل
        المقيمين في بلدك.
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `كود إحالة ${e.name} والتسجيل – الأسئلة الشائعة`,
    faqIntro: (e, count) =>
      `إجابات عن ${arabicCount(count, { one: "سؤال واحد", two: "سؤالين", few: "أسئلة", many: "سؤالًا", hundred: "سؤال" })} حول كود إحالة ${e.name} ${e.referralCode}، وإنشاء الحساب والتحقق منه، ومكافأة الترحيب والرسوم.`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "المصادر: من أين جاءت هذه الحقائق",
    sourcesIntro: (e, date) =>
      `كل ما في هذه الصفحة عن كود الإحالة والتسجيل والتحقق ومكافأة الترحيب والرسوم قرأناه على موقع ${e.name} الرسمي وفي مركز المساعدة التابع لها في ${date}. تغيّر المنصات عروضها ورسومها دون إشعار، وتعرض شروطًا مختلفة في كل دولة، لذا فالصفحات أدناه هي المرجع النهائي.`,

    /* Alternatives */
    alternativesTitle: (e) => `بدائل ${e.name}`,
    alternativesIntro: (e, count, links) => (
      <>
        لست متأكدًا من أن {e.name} تناسبك؟ هذه أقرب البدائل، ولكل منها رابط تسجيل بالإحالة. وتضع{" "}
        <Link href={links.alternatives}>المقارنة الكاملة لبدائل {e.name}</Link> البدائلَ كلها، وعددها {count}، أمام {e.name} من حيث الرسوم والرافعة المالية
        والمنتجات والتحقق والتوفر في كل دولة.
      </>
    ),
    headToHeadTitle: (e) => `${e.name}: مقارنات مباشرة`,
    headToHeadIntro: (e) =>
      `تحتار بين ${e.name} ومنصة أخرى؟ لكل زوج من المنصات مقارنة خاصة به للرسوم والرافعة المالية والمنتجات والدول وعروض الإحالة:`,
    compareAll: (e, count) => `قارن بدائل ${e.name} كلها (${arabicCount(count, { one: "بديل واحد", two: "بديلان", few: "بدائل", many: "بديلًا", hundred: "بديل" })})`,
    allComparisons: "جميع مقارنات المنصات ←",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>تحذير من المخاطر:</strong> مشتقات العملات الرقمية أدوات معقّدة. الرافعة المالية تضاعف الأرباح والخسائر، وقد تخسر الهامش بالكامل خلال
        دقائق. هذه الصفحة للمعلومات فقط وليست نصيحة مالية. قد نحصل على عمولة إذا سجّلت عبر روابطنا – راجع{" "}
        <Link href={disclosureHref}>إفصاح التسويق بالعمولة</Link>.
      </>
    ),
    joinTitle: (e) => `انضم إلى ${e.name} في 3 دقائق`,
    joinText: (e) => `${benefit(e)}. إحالة واحدة للتداول الفوري والعقود الآجلة.`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `كود إحالة ${name}`,
      signup: (name) => `التسجيل والتحقق على ${name}`,
      bonus: (name) => `مكافأة الترحيب ومكافآت ${name}`,
      fees: (name) => `الرسوم والتداول على ${name}`,
      safety: () => "الأمان والتوفر",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `ما هو كود إحالة ${e.name}؟`,
          a: `كود إحالة ${e.name} هو ${e.referralCode}. ${r.apply} وتسمّيه ${e.name} نفسها ${r.codeName}.`,
        },
        { topic: "referral", q: `أين أُدخل كود إحالة ${e.name}؟`, a: r.whereToEnter },
        { topic: "referral", q: `هل يمكنني إضافة كود إحالة ${e.name} بعد التسجيل؟`, a: r.afterSignup },
        { topic: "referral", q: `ماذا أحصل عليه بكود إحالة ${e.name} ${e.referralCode}؟`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `هل يعمل كود إحالة ${e.name} في التداول الفوري والعقود الآجلة معًا؟`,
          a: `نعم. ترتبط الإحالة بحسابك على ${e.name}، لا بمنتج واحد، لذا فإن تسجيلًا واحدًا بالكود ${e.referralCode} يشمل ${list(e.referralCovers)}.`,
        },
        {
          topic: "referral",
          q: `هل لاستخدام كود إحالة ${e.name} أي تكلفة؟`,
          a: `لا. إدخال ${e.referralCode} مجاني ولا يرفع رسوم تداولك. وتموّل ${e.name} برنامج الإحالة من دخلها من الرسوم.`,
        },
        {
          topic: "signup",
          q: `كيف أسجّل في ${e.name}؟`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${asSentence(st.title)}`).join(" ")} ويمكنك التسجيل باستخدام ${orList(s.methods)}.`,
        },
        { topic: "signup", q: `هل أحتاج إلى التحقق من الهوية (KYC) على ${e.name}؟`, a: s.kyc },
        { topic: "signup", q: `ما المستندات التي تقبلها ${e.name} للتحقق؟`, a: s.documents },
        { topic: "signup", q: `ما الحد الأدنى للعمر لفتح حساب على ${e.name}؟`, a: s.minAge },
        {
          topic: "fees",
          q: `ما رسوم التداول على ${e.name}؟`,
          a: `في المستوى الأساسي تفرض ${e.name} رسوم ${e.spotFees.maker} للصانع / ${e.spotFees.taker} للآخذ على التداول الفوري، و${e.futuresFees.maker} للصانع / ${e.futuresFees.taker} للآخذ على العقود الدائمة.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `في أي الدول لا تتوفر ${e.name}؟`, a: e.restricted },
      ];
    },
  },
};
