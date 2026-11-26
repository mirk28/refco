import Link from "next/link";
import type { AlternativesTexts } from "./en";
import { DESC_MAX, TITLE_MAX, fit, variant } from "@/lib/fit";
import { arabicCount, arabicName, withArabic } from "../ar-names";

/**
 * Texts of the "[Exchange] alternatives" pages in Arabic (right to left). Same keys as `./en.tsx`.
 * Wording: "بدائل Binance" / "أفضل بدائل بينانس", "منصة" (feminine: "Binance نفسها"), "الرسوم", "كود الإحالة", "يمكنك".
 * Exchange names stay in Latin letters; the Arabic spelling is added in the title, the H1 and the keywords only.
 * No prefix is glued to a name or a variable ("لمنصة Binance", "على OKX"); "و" is ("وMEXC").
 * Counted nouns after a variable number come from `arabicCount()`. Country names come unchanged from `../compare/ar.ts`.
 * Status labels quoted here are the fixed ones of `../compare/ar.ts`: «موقع إقليمي»، «غير محظورة»; the "Ahead" mark is «الأفضلية».
 * The `chooseIf`, `thinkTwiceIf` and `stayIf` items of the data continue the headings that end in "إذا:".
 */

/** "Binance (بينانس)" for the texts that receive only the Latin name. */
const withArabicName = (name: string) => withArabic({ slug: name.toLowerCase(), name });

/**
 * A counted masculine noun: 11–99 (also 111, 250 …) take the accusative singular ("15 سؤالًا"),
 * 100, 101, 200 … the genitive singular ("100 سؤال").
 */
const counted = (n: number, one: string, two: string, few: string, accusative: string, genitive: string) =>
  arabicCount(n, { one, two, few, many: n % 100 >= 11 ? accusative : genitive });

/** Pass the dual in the case of the sentence: "منصتان" (subject) or "منصتين" (after a verb or a preposition). */
const platforms = (n: number, two = "منصتان") => arabicCount(n, { one: "منصة واحدة", two, few: "منصات", many: "منصة" });
const alternatives = (n: number, two = "بديلان") => counted(n, "بديل واحد", two, "بدائل", "بديلًا", "بديل");
const countries = (n: number, two = "دولتان") => arabicCount(n, { one: "دولة واحدة", two, few: "دول", many: "دولة" });
const products = (n: number) => counted(n, "منتج واحد", "منتجان", "منتجات", "منتجًا", "منتج");
const markets = (n: number) => counted(n, "سوق واحدة", "سوقان", "أسواق", "سوقًا", "سوق");
const questions = (n: number) => counted(n, "سؤال واحد", "سؤالان", "أسئلة", "سؤالًا", "سؤال");
const sources = (n: number) => counted(n, "مصدر واحد", "مصدران", "مصادر", "مصدرًا", "مصدر");
const officialPages = (n: number) =>
  arabicCount(n, { one: "صفحة رسمية واحدة", two: "صفحتان رسميتان", few: "صفحات رسمية", many: "صفحة رسمية" });

export const ar: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  // Four wordings, chosen per exchange; the Arabic spelling in brackets goes first when the title gets too long.
  title: (x, n, shortMonthYear) => {
    const m = shortMonthYear;
    const worded = (name: string) =>
      [
        `بدائل ${name}: مقارنة ${platforms(n, "منصتين")} (${m})`,
        `أفضل بدائل ${name}: الرسوم والمكافآت (${m})`,
        `منصات مثل ${name}: مقارنة ${alternatives(n, "بديلين")} (${m})`,
        `تبحث عن بدائل ${name}؟ قارن ${platforms(n, "منصتين")} (${m})`,
      ][variant(4, x.slug)];
    return fit(TITLE_MAX, worded(withArabic(x)), worded(x.name), `بدائل ${withArabic(x)} (${m})`, `بدائل ${x.name} (${m})`);
  },
  description: (x, names, n, former, monthYear) =>
    fit(
      DESC_MAX,
      `${names}: مقارنة ${alternatives(n, "بديلين")} لمنصة ${x.name}${former ? ` (${former})` : ""} في الرسوم والرافعة المالية وKYC والدول وأكواد الإحالة – تحققنا منها في ${monthYear}.`,
      `${names}: مقارنة ${alternatives(n, "بديلين")} لمنصة ${x.name} في الرسوم والرافعة المالية وKYC والدول وأكواد الإحالة – تحققنا منها في ${monthYear}.`,
      `${names}: مقارنة ${alternatives(n, "بديلين")} لمنصة ${x.name} في الرسوم والرافعة المالية وKYC والدول وأكواد الإحالة.`,
    ),
  keywords: (x, alts, former) => {
    const spelling = arabicName[x.slug];
    return [
      `بدائل ${x.name}`,
      `أفضل بدائل ${x.name}`,
      ...(spelling ? [`بدائل ${spelling}`, `أفضل بدائل ${spelling}`, `بديل ${spelling}`] : []),
      ...(x.slug === "binance" ? ["بدائل باينانس", "أفضل بدائل باينانس"] : []),
      `${x.name} alternatives`,
      `بديل ${x.name}`,
      `منصات مثل ${x.name}`,
      `منصات العملات المشفرة مثل ${x.name}`,
      `منافسو ${x.name}`,
      `بديل ${x.name} برسوم أقل`,
      `بديل ${x.name} بدون KYC`,
      `أكواد إحالة بدائل ${x.name}`,
      ...(former ? [`بدائل ${former}`, `بديل ${former}`] : []),
      ...alts.map((a) => `${a.name} vs ${x.name}`),
    ];
  },
  crumbHome: "الرئيسية",
  crumbReferral: (name) => `كود إحالة ${name}`,
  crumbAlternatives: (name) => `بدائل ${name}`,
  listLdName: (name) => `بدائل ${name}`,
  listLdDescription: (name) => `منصات قارنّاها بمنصة ${name}، مرتّبة حسب تصنيف CoinMarketCap لمنصات المشتقات.`,
  howToLdName: (name) => `كيف تنتقل من ${name} إلى منصة أخرى`,
  howToLdDescription: (name) => `ما الذي تتحقق منه، وبأي ترتيب، عند انتقالك من ${name} إلى منصة أخرى لتداول العملات الرقمية.`,
  /** Share card. */
  ogTitle: (name) => `بدائل ${name}`,
  ogSubtitle: (names) => `${names} – مقارنة الرسوم والرافعة المالية وKYC والدول`,

  /* --------------------------------- words --------------------------------- */
  /** Joins the last two names of a list of links: " و" is written directly before the next name ("OKX وMEXC"). */
  and: () => " و",
  noneOfThem: "ولا واحدة منها",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `آخر تحقق وتحديث: ${date}`,
  h1: (name, n) => `بدائل ${withArabicName(name)}: مقارنة ${platforms(n, "منصتين")}`,
  quickAnswer: "الإجابة السريعة",
  chipsLabel: "ما الذي نقارنه",
  chips: (n, productCount, countryCount) => [
    platforms(n),
    "الرسوم والرافعة المالية",
    products(productCount),
    countries(countryCount),
    "KYC والتنظيم",
    "أكواد الإحالة",
  ],
  glanceTitle: (name) => `نظرة سريعة على بدائل ${name}`,
  glanceIntro: "أبرز ما تتميز به كل منصة، مع رسومها الأساسية على العقود الآجلة (Futures) بصيغة صانع / آخذ.",
  glanceOrder: (marketDate) => `الترتيب: تصنيف CoinMarketCap لمنصات المشتقات، ${marketDate}. التداول بالرافعة المالية عالي المخاطر.`,
  onThisPage: "في هذه الصفحة",
  toc: (name, n) => [
    ["at-a-glance", "نظرة سريعة"],
    ["why", `لماذا تنتقل من ${name}؟`],
    ["alternatives", alternatives(n)],
    ["by-need", "الأفضل لكل احتياج"],
    ["fees", "الرسوم"],
    ["products", "المنتجات"],
    ["countries", "الدول"],
    ["kyc", "التحقق من الهوية (KYC)"],
    ["safety", "التنظيم والاحتياطيات"],
    ["referral-codes", "أكواد الإحالة"],
    ["switch", "طريقة الانتقال"],
    ["faq", "الأسئلة الشائعة"],
    ["sources", "المصادر"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `مقارنة بدائل ${name} (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `يعرض الجدول ${alternatives(n, "بديلين")} إلى جانب ${name} نفسها. الرسوم هي الرسوم الأساسية (خارج مستويات VIP) التي تنشرها كل منصة، بصيغة صانع / آخذ؛ والرافعة المالية هي الحد الأقصى الذي توثّقه المنصة؛ وكود الإحالة هو الكود الذي يمكنك التسجيل به. وقد أخذنا كل رقم من الموقع الرسمي للمنصة نفسها بتاريخ ${date}.`,
  comparedCaption: (name, n) => `${name} و${alternatives(n)}: نقاط قوة كل منصة، والرسوم، والرافعة المالية، وكود الإحالة`,
  colExchange: "المنصة",
  colBestFor: "نقاط القوة",
  colFuturesFees: "رسوم العقود الآجلة",
  colSpotFees: "رسوم التداول الفوري",
  colMaxLeverage: "أقصى رافعة مالية",
  colReferralCode: "كود الإحالة",
  colAction: "الإجراء",
  forComparison: "للمقارنة",
  signUp: "سجّل الآن",
  comparedOrder: (marketDate) => `ترتيب البدائل: تصنيف CoinMarketCap لمنصات المشتقات، ${marketDate}.`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `لماذا تبحث عن بديل لمنصة ${name}؟`,
  whyIntro: (name, sourcesHref) => (
    <>
      هذه هي النقاط التي تفرض فيها {name} نفسها قيودًا – وكل منها مأخوذ من صفحات {name} الرسمية (راجع{" "}
      <Link href={sourcesHref}>قائمة المصادر في صفحة {name} لدينا</Link>). وإن لم ينطبق عليك أيٌّ منها، فالبقاء مع {name} خيار جيد تمامًا.
    </>
  ),
  stayTitle: (name) => `لا تزال ${name} الخيار المناسب لك إذا:`,
  stayOutro: (name, code, href) => (
    <>
      قررت البقاء مع {name}؟ ستجد في <Link href={href}>صفحة كود إحالة {name}</Link> الكود {code} وخطوات التسجيل وعرض المستخدمين الجدد الحالي.
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `بدائل ${name} بالتفصيل: أفضل ${platforms(n, "منصتين")}`,
  detailIntro: (name) =>
    `نقارن كل بديل بمنصة ${name} في النقاط نفسها: الرسوم، والرافعة المالية، وحجم السوق، والتحقق من الهوية، وقواعد الإحالة، والمنتجات، والدول التي تقبل المنصة مستخدميها. ولا تضم قوائم «الأفضلية» إلا الفروق التي يمكن قراءتها مباشرة من أرقام المنصات نفسها.`,
  rowFuturesFees: "رسوم العقود الآجلة (صانع / آخذ)",
  rowSpotFees: "رسوم التداول الفوري (صانع / آخذ)",
  rowMaxLeverage: "أقصى رافعة مالية",
  rowAssets: "الأصول المدرجة",
  rowOpenInterest: "العقود المفتوحة على المشتقات",
  rowUsers: "المستخدمون",
  rowFounded: "سنة التأسيس",
  rowKyc: "التحقق من الهوية",
  rowAddLater: "هل يمكن إضافة كود الإحالة لاحقًا؟",
  rowOffer: "عرض المستخدمين الجدد",
  bestFor: (role) => `نقاط القوة: ${role}`,
  asAlternative: (name) => `بديلًا عن ${name}`,
  chooseIf: (a, x) => `اختر ${a} بدلًا من ${x} إذا:`,
  thinkTwiceIf: "فكّر جيدًا قبل اختيارها إذا:",
  whereAhead: (a, x) => `أين تملك ${a} الأفضلية على ${x}`,
  whereBehind: (x) => `أين تملك ${x} الأفضلية`,
  noAdvantage: "لا توجد أفضلية قابلة للقياس في النقاط التي نقارنها.",
  codeLabel: (name) => `كود إحالة ${name}`,
  signUpOn: (name) => `سجّل في ${name}`,
  linkReferral: (name, code) => `كود إحالة ${name} ${code}: العرض وخطوات التسجيل وKYC`,
  linkVersus: (a, x) => `${a} أم ${x}: المقارنة المباشرة كاملة`,
  linkAlternatives: (name) => `بدائل ${name}`,
  sideBySide: (a, x) => `${a} و${x}: جميع الأرقام جنبًا إلى جنب`,
  sideBySideCaption: (a, x) => `${a} و${x}: الرسوم والرافعة المالية والأصول والتحقق من الهوية وقواعد الإحالة`,
  versusHead: (a, x) => `${a} مقابل ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `أفضل بديل ${name} حسب احتياجك`,
  needIntro: (n) =>
    `من بين ${alternatives(n, "بديلين")}، تختلف المنصة المتصدّرة باختلاف ما تبحث عنه. ويجيب الجدول عن ذلك لكل احتياج على حدة – انطلاقًا من الأرقام، ودون أي تصنيف من عندنا.`,
  needCaption: (name) => `أفضل بديل ${name} حسب الاحتياج`,
  needColWant: "إذا كنت تبحث عن …",
  needColLook: "اطّلع على",
  needColWhy: "السبب",
  needLowestFutures: "أدنى رسوم على العقود الآجلة",
  needLowestSpot: "أدنى رسوم على التداول الفوري",
  needHighestLeverage: "أعلى رافعة مالية",
  needDeepest: "أعمق سوق للمشتقات",
  needMostMarkets: "أكبر عدد من أسواق المشتقات",
  needMica: "منصة مرخّصة بموجب MiCA في المنطقة الاقتصادية الأوروبية (EEA)",
  needAddLater: "إمكانية إضافة كود الإحالة بعد التسجيل",
  whyStandardTier: (fees) => `${fees} صانع / آخذ في المستوى الأساسي`,
  whyOpenInterest: (amount, marketDate) => `عقود مفتوحة بقيمة ${amount} (CoinMarketCap، ${marketDate})`,
  whyMarkets: (marketCount, marketDate) => `${markets(marketCount)} (CoinMarketCap، ${marketDate})`,
  whyFeature: "تعرض المنصة ذلك على موقعها الرسمي – وتجد تفاصيل ما تقدّمه في قسم «المنتجات»",
  needNotFound: (n) => `لم نجد ذلك في مواقع أيٍّ من ${alternatives(n, "بديلين")} عند تحققنا.`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `الرسوم: ${name} مقابل بدائلها`,
  feesIntro:
    "تعمل المنصات السبع كلها بنموذج صانع/آخذ (Maker/Taker): أوامر الحد التي تضيف سيولة تدفع رسوم الصانع، والأوامر التي تسحب السيولة تدفع رسوم الآخذ. ويعرض الجدول المستوى الأساسي – أي الرسوم التي يدفعها الحساب الجديد قبل الوصول إلى أي مستوى VIP أو الحصول على خصم التوكن.",
  feesCaption: (name) => `الرسوم الأساسية للتداول الفوري والعقود الآجلة لدى ${name} وبدائلها`,
  colFuturesMaker: "العقود الآجلة – صانع",
  colFuturesTaker: "العقود الآجلة – آخذ",
  colSpotMaker: "الفوري – صانع",
  colSpotTaker: "الفوري – آخذ",
  colOtherMarkets: "أسواق أخرى (صانع / آخذ)",
  feesNote: (date) => `الرسوم الأساسية (خارج مستويات VIP) كما تنشرها كل منصة، تحققنا منها في ${date}. الرسوم تتغير – تأكد منها على المنصة قبل التداول.`,
  cheaperTitle: (name) => `أيّ البدائل أرخص من ${name}؟`,
  tokenTitle: "خصومات التوكن والتفاصيل الدقيقة",
  noTokenDiscount: "لا تنشر المنصة أي خصم على الرسوم عند دفعها بتوكن المنصة.",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "المنتجات: ماذا تقدّم كل منصة",
  productsIntro: (date) =>
    `علامة الصح تعني أن المنصة تعرض المنتج على موقعها الرسمي. أما الشرطة فتعني أننا لم نجد له صفحة هناك بتاريخ ${date} – وهذا لا يثبت أن المنتج غير موجود. وقد يختلف ما تقدّمه المنصة من دولة إلى أخرى، ولا سيما على المنصات الإقليمية.`,
  productsCaption: (name) => `المنتجات التي تقدّمها ${name} وبدائلها`,
  colProduct: "المنتج",
  productDetailsTitle: "تفاصيل المنتجات لكل منصة",
  productDetails: (name) => `${name}: تفاصيل المنتجات`,
  offered: "متاح",
  notOffered: "غير متاح",
  noPageFound: "لم نجد صفحة خاصة بذلك على الموقع الرسمي للمنصة",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `التوفر حسب الدولة: ${name} وبدائلها`,
  countriesIntro: (count) =>
    `مكان إقامتك هو السبب الأكثر شيوعًا للبحث عن بديل. ويعرض الجدول ما تنصّ عليه شروط كل منصة في ${countries(count, "دولتين")}. ويعني «موقع إقليمي» أن المنصة تخدم الدولة عبر منصة مستقلة لها منتجاتها ورسومها وحدودها الخاصة.`,
  countriesCaption: (name) => `توفر ${name} وبدائلها حسب الدولة`,
  colCountry: "الدولة",
  legendRestricted: "مغلقة أمام المقيمين وفق شروط المنصة أو إشعاراتها",
  legendRegional: "الخدمة عبر منصة إقليمية مستقلة",
  legendPartial: "بعض المنتجات أو المناطق فقط",
  legendOpen: (date) => `غير مدرجة في قائمة الدول المحظورة بتاريخ ${date}`,
  countriesNote:
    "عبارة «غير محظورة» لا تضمن أن كل المنتجات متاحة في تلك الدولة. فالشروط المعتمدة هي شروط المنصة لحظة تسجيلك، وجميع هذه المنصات تحظر الالتفاف على أي قيد باستخدام VPN أو بيانات غير صحيحة.",
  countryHeading: (name, country) => `بدائل ${name} في ${country}`,
  restrictedTitle: "الدول المحظورة والمنصات الإقليمية لكل منصة",
  whereNotAvailable: (name) => `في أي الدول لا تتوفر ${name}؟`,
  regionalPlatforms: "المنصات الإقليمية:",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `التحقق من الهوية: هل يوجد بديل ${name} بدون KYC؟`,
  kycIntro: (n) =>
    `لا يوجد بين ${alternatives(n, "بديلين")} في هذه المقارنة. فجميع المنصات المدرجة هنا تطلب من المستخدمين الجدد التحقق من الهوية، ومعظمها يُبقي الإيداع أو التداول مقفلًا حتى إتمامه. وتكمن الفروق في ما يستطيع الحساب غير الموثّق فعله رغم ذلك.`,
  kycCaption: (name) => `التحقق من الهوية لدى ${name} وبدائلها`,
  colKyc: "التحقق من الهوية",
  kycDetailsTitle: "ماذا تقول كل منصة عن التحقق من الهوية",
  kycQuestion: (name) => `هل أحتاج إلى التحقق من الهوية (KYC) على ${name}؟`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "التنظيم وإثبات الاحتياطيات وصناديق الحماية",
  safetyIntro:
    "لا توجد منصة مركزية خالية من المخاطر. وما يمكن مقارنته هو ما تنشره كل منصة عن نفسها: أين حصلت على تراخيصها، وهل تُثبت احتياطياتها، وهل تحتفظ بصندوق للطوارئ.",
  safetyCaption: (name) => `التنظيم وإثبات الاحتياطيات وصناديق الحماية لدى ${name} وبدائلها`,
  colLicences: "التراخيص التي تذكرها المنصة",
  colReserves: "إثبات الاحتياطيات",
  colFund: "صندوق الحماية",
  noneNamed: "لم تذكر أي صندوق",
  safetyNote: "نسب الاحتياطي أرقام تنشرها المنصات نفسها، وفق تواريخ اللقطات المذكورة. لا تحتفظ بأموالك إلا على منصة تتداول عليها فعليًا.",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `أكواد الإحالة لبدائل ${name}`,
  codesIntro:
    "إذا فتحت حسابًا على أحد هذه البدائل، فافتحه بكود إحالة: فهو مجاني، ولا يرفع رسومك أبدًا، ويفتح لك عرض المستخدمين الجدد لدى المنصة. والعمود الأخير هو الأهم – ففي عدة منصات لا يمكن إضافة الكود لاحقًا إذا نسيته.",
  codesCaption: (name) => `أكواد إحالة ${name} وبدائلها`,
  colOffer: "عرض المستخدمين الجدد",
  colWhere: "أين تُدخل الكود",
  colLater: "هل يمكن إضافته لاحقًا؟",
  codesRow: (name) => `كود إحالة ${name}`,
  codesNote: (date) => `تحققنا من العروض في ${date}. مكافآت الترحيب مرتبطة بإنجاز مهام، وتتطلب التحقق من الهوية، وتختلف من دولة إلى أخرى.`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `كيف تنتقل من ${name} إلى منصة أخرى`,
  switchIntro: "الانتقال أسهل مما يبدو، ما دمت تلتزم بالترتيب: الحساب أولًا، ثم التحقق من الهوية، والأموال في النهاية.",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `بدائل ${name} – الأسئلة الشائعة`,
  faqIntro: (name, count) =>
    `${questions(count)} حول استبدال ${name} بمنصة أخرى: أي منصة تناسب أي احتياج، والرسوم، والدول، والتحقق من الهوية، وطريقة الانتقال.`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "المصادر: من أين جاءت هذه الأرقام",
  sourcesIntro: (date, marketDate) =>
    `كل ما في هذه الصفحة عن الرسوم والرافعة المالية والمنتجات والتحقق من الهوية والدول والتراخيص والاحتياطيات وقواعد الإحالة أخذناه من المواقع الرسمية للمنصات ومراكز المساعدة التابعة لها بتاريخ ${date}. أما العقود المفتوحة وعدد أسواق المشتقات فمصدرهما تصنيف CoinMarketCap لمنصات المشتقات (${marketDate}). وتغيّر المنصات شروطها دون إشعار مسبق، لذا تبقى الصفحات أدناه هي المرجع النهائي.`,
  sourcesSummary: (name, count, focus) => `${name}: ${officialPages(count)}${focus ? "" : " تحققنا منها لهذه المقارنة"}`,
  sourcesMore: (name, count, href) => (
    <>
      الرسوم والرافعة المالية والتحقق من الهوية وقواعد الإحالة وقائمة الدول المحظورة لمنصة {name}:{" "}
      <Link href={href}>
        جميع المصادر في صفحة {name} لدينا ({sources(count)})
      </Link>
      .
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "مزيد من مقارنات المنصات",
  headToHeadTitle: (name) => `${name} في مقارنة مباشرة`,
  headToHeadIntro: "هل وضعت أحد البدائل في قائمتك المختصرة؟ صفحات المقارنة المباشرة تتعمق أكثر في الرسوم والمنتجات والدول وعروض الإحالة:",
  otherAlternativesTitle: "بدائل المنصات الأخرى",
  otherAlternativesIntro: "المقارنة نفسها من وجهة نظر كل منصة من المنصات الأخرى:",
  referralLink: (name, code) => `كود إحالة ${name} ${code}`,
  allComparisons: "كل مقارنات المنصات",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>تحذير من المخاطر:</strong> مشتقات العملات الرقمية أدوات معقدة. تضاعف الرافعة المالية الأرباح والخسائر على حد سواء، وقد تخسر هامشك
      بالكامل خلال دقائق. هذه الصفحة لأغراض المعلومات فقط وليست نصيحة مالية. قد نحصل على عمولة إذا سجّلت عبر روابطنا – راجع{" "}
      <Link href={disclosureHref}>إفصاح التسويق بالعمولة</Link>. ولا يغيّر ذلك الأرقام شيئًا: فهي أرقام المنصات نفسها.
    </>
  ),
  ctaTitle: (name) => `هل وجدت بديل ${name} المناسب لك؟`,
  ctaText: "سجّل بكود إحالة موثّق – حساب واحد للتداول الفوري والعقود الآجلة، دون أي تكلفة إضافية.",
  ctaButton: "عرض جميع أكواد الإحالة",
};
