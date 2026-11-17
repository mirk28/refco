/**
 * The head-to-head pages ("/ar/<a>-vs-<b>") and the comparison hub in Arabic.
 * Same keys as `./en.tsx`, written natively in Modern Standard Arabic for readers in the whole Arab world.
 *
 * Wording: "منصة" (feminine: "تقدّم OKX …"، "Binance مغلقة …"), "الرسوم"، "كود الإحالة"، "الرافعة المالية"،
 * "التحقق من الهوية (KYC)"، "التداول الفوري" / "العقود الآجلة". The pages call themselves “مقارنة مباشرة”, the hub
 * “مقارنة المنصات”; the mark for the better value is “الأفضلية”. Search phrasing: "Binance أم OKX: أيهما أفضل؟"،
 * "مقارنة Binance وOKX". Exchange names stay in Latin letters; the Arabic spelling (`withArabic`, `arabicName`) is
 * added in the title, the H1, the keywords and the first mention in the intro. No prefix (بـ، لـ، كـ، الـ) is glued
 * to a name or an inserted text; "و" is written directly before it ("وOKX"). Arabic has no capital letters, so
 * texts from the data are inserted as they are; `bare` only drops a stray full stop. Counted nouns with a variable
 * number come from `arabicCount` (1 → "نقطة واحدة"، 2 → "نقطتين"، 3–10 → "3 نقاط"، 11+ → "15 نقطة").
 */
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import { arabicCount, arabicName, withArabic } from "../ar-names";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "ar";
const ct = compareText(locale);
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const { advantages, feeSentence, names } = ct;
const featureList = ct.features;
const countryList = ct.countries;
type Country = (typeof countryList)[number];

/* ---------------------------------- helpers --------------------------------- */

/** Drops the source bracket: "أكثر من 320 مليون مستخدم مسجّل (بحسب Binance)" and "390 عملة و509 أزواج تداول فوري (Bybit API)". */
const withoutSource = (s: string) => s.replace(/\s*\((?:(?:بحسب|حسب|وفق)[^()]*|[^()]*\bAPI)\)/, "");
/** A data text without a closing full stop, for the places where the sentence closes itself. */
const bare = (s: string) => s.trim().replace(/\.+$/, "");
/** Ends a data text with "." unless it already ends a sentence. */
const stop = (s: string) => (/[.؟!]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
/** The Arabic spelling alone ("بينانس"), for the keywords; Binance is also searched as "باينانس". */
const reading = (e: Exchange) => arabicName[e.slug] ?? e.name;
const altReading = (e: Exchange) => (e.slug === "binance" ? "باينانس" : reading(e));

/* Counted nouns. The genitive forms follow "في" / "من بين" / "عبر"; the others start a phrase. */
const points = (n: number) => arabicCount(n, { one: "نقطة واحدة", two: "نقطتين", few: "نقاط", many: "نقطة" });
const measurable = (n: number) =>
  arabicCount(n, { one: "نقطة واحدة قابلة للقياس", two: "نقطتين قابلتين للقياس", few: "نقاط قابلة للقياس", many: "نقطة قابلة للقياس" });
const marketsOf = (n: number) => arabicCount(n, { one: "سوق واحد", two: "سوقين", few: "أسواق", many: "سوقًا", hundred: "سوق" });
const productsOf = (n: number) => arabicCount(n, { one: "منتج واحد", two: "منتجين", few: "منتجات", many: "منتجًا", hundred: "منتج" });
const countriesOf = (n: number) => arabicCount(n, { one: "دولة واحدة", two: "دولتين", few: "دول", many: "دولة" });
const exchangesNom = (n: number) => arabicCount(n, { one: "منصة واحدة", two: "منصتان", few: "منصات", many: "منصة" });
const otherExchanges = (n: number) => arabicCount(n, { one: "منصة واحدة أخرى", two: "منصتين أخريين", few: "منصات أخرى", many: "منصة أخرى" });
const headToHead = (n: number) =>
  arabicCount(n, { one: "مقارنة مباشرة واحدة", two: "مقارنتان مباشرتان", few: "مقارنات مباشرة", many: "مقارنة مباشرة" });

const leverageRisk = "الرافعة المالية العالية ترفع خطر التصفية بشدة.";
const regionalNote = "وللمنصة الإقليمية عادةً مجموعة منتجات ورسوم وحدود خاصة بها.";
const safeWay = "التسجيل عبر رابط الإحالة";
const noMicaEntity = "لا تذكر على صفحاتها أي كيان مرخّص بموجب MiCA";
const vipNote = "وتنخفض هذه الرسوم أكثر مع مستويات VIP وعند الدفع بتوكن المنصة.";

/** "تتقدّم Binance في 6 نقاط" / "لا تتقدّم Binance في أي نقطة". */
const aheadIn = (e: Exchange, n: number) => (n ? `تتقدّم ${e.name} في ${points(n)}` : `لا تتقدّم ${e.name} في أي نقطة`);
/** "، وتتعادل المنصتان في نقطتين" – or nothing when no point is level. */
const tieTail = (s: ScoreSummary) => (s.tie.length ? `، وتتعادل المنصتان في ${points(s.tie.length)}` : "");

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `تتفوّق ${e.name} في ${joinList(rows.map((r) => r.topic))}` : `لا تتفوّق ${e.name} في أيٍّ منها`;
  return `ليست ${a.name} ولا ${b.name} الأفضل في كل النقاط. فمن بين ${measurable(s.measurable)} في هذه المقارنة، ${aheadIn(a, s.a.length)}، و${aheadIn(b, s.b.length)}${tieTail(s)}. ${lead(a, s.a)}. ${lead(b, s.b)}. اختر ${a.name} إذا ${bare(altInfo(a).chooseIf[0])}. واختر ${b.name} إذا ${bare(altInfo(b).chooseIf[0])}.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb) return `تتساوى ${a.name} و${b.name} في الحد الأقصى للرافعة المالية: ${a.name} ${a.maxLeverage}، و${b.name} ${b.maxLeverage}.`;
  const [high, low] = la > lb ? [a, b] : [b, a];
  return `تقدّم ${high.name} رافعة مالية قصوى أعلى – ${high.maxLeverage} – مقابل ${low.maxLeverage} على ${low.name}.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `في تصنيف المشتقات على CoinMarketCap (${prettyDate(site.marketDataDate)}) بلغت العقود المفتوحة على ${a.name} ${formatBn(a.market.openInterestBn)} عبر ${marketsOf(a.market.markets)}، وعلى ${b.name} ${formatBn(b.market.openInterestBn)} عبر ${marketsOf(b.market.markets)}. والسوق على ${deeper.name} أعمق، وهذا يعني عادةً فروق أسعار (Spread) أضيق في الأوامر الكبيرة.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `تقدّم ${a.name} ${joinList(notOffered.map((f) => f.noun))}، وهو ما لا تقدّمه ${b.name}.` : "",
    notFound.length ? `تقدّم ${a.name} ${joinList(notFound.map((f) => f.noun))}؛ أما على الموقع الرسمي لمنصة ${b.name} فلم نجد منتجًا من هذا النوع.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** One exchange's status in one country as a sentence without its full stop. The note follows the country. */
const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} مغلقة أمام المقيمين في ${c.name}${extra}`;
  if (status === "regional") return `تخدم ${e.name} المقيمين في ${c.name} عبر منصة إقليمية${extra}`;
  if (status === "partial") return `تفرض ${e.name} قيودًا جزئية في ${c.name}${extra}`;
  return `لا تُدرج ${e.name} ${c.name} ضمن الدول المحظورة`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("ar").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. قوائم الدول تتغيّر، وعدم إدراج دولة في القائمة لا يضمن توفر كل المنتجات فيها – فالمرجع هو الشروط الخاصة بكل منصة.`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b).map(bare);
  const aheadB = advantages(b, a).map(bare);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key) ? "على المنصتين" : has(a, key) ? `على ${a.name} فقط` : has(b, key) ? `على ${b.name} فقط` : "لم نجده على موقع أيٍّ منهما";
  const noTokenDiscount = "لم تُعلن المنصة عن خصم من هذا النوع.";
  const noFund = "لم تذكر المنصة صندوق حماية.";

  const verdict: Faq[] = [
    { q: `${a.name} أم ${b.name}: أيهما أفضل؟`, a: versusAnswer(a, b, s) },
    {
      q: `ما الفرق الرئيسي بين ${a.name} و${b.name}؟`,
      a: `${bare(ia.pick)}. ${bare(ib.pick)}.${aheadA.length ? ` أوضح مزايا ${a.name} القابلة للقياس: ${aheadA.slice(0, 2).join("؛ ")}.` : ""}${aheadB.length ? ` ومزايا ${b.name}: ${aheadB.slice(0, 2).join("؛ ")}.` : ""}`,
    },
    {
      q: `هل ${a.name} أكبر من ${b.name}؟`,
      a: `في تصنيف المشتقات على CoinMarketCap (${marketDate}) بلغت العقود المفتوحة على ${a.name} ${formatBn(a.market.openInterestBn)} وحجم التداول خلال 24 ساعة ${formatBn(a.market.volume24hBn)}، مقابل ${formatBn(b.market.openInterestBn)} و${formatBn(b.market.volume24hBn)} على ${b.name}. وبحسب الأرقام التي تعلنها المنصتان، لدى ${a.name} ${withoutSource(a.users)}، ولدى ${b.name} ${withoutSource(b.users)}.`,
    },
    {
      q: `أيهما أفضل للمبتدئين: ${a.name} أم ${b.name}؟`,
      a: `عند فتح أول حساب تهمّ ثلاثة أمور: طريقة سهلة لشراء العملات الرقمية، وإمكانية التدرّب، ورسوم منخفضة. شراء العملات الرقمية بالبطاقة أو التحويل البنكي: ${state("fiat")}. التداول التجريبي: ${state("demoTrading")}. التداول بالنسخ: ${state("copyTrading")}. ${feeSentence(a, b, "spot")} التحقق من الهوية – ${a.name}: ${bare(a.signup.kycShort)}؛ ${b.name}: ${bare(b.signup.kycShort)}.`,
    },
    {
      q: `أيهما أفضل لتداول العقود الآجلة: ${a.name} أم ${b.name}؟`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `أيهما أقل رسومًا: ${a.name} أم ${b.name}؟`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} هذه هي الرسوم الأساسية (خارج مستويات VIP)، وتنخفض أكثر مع مستويات VIP وعند الدفع بتوكن المنصة.`,
    },
    {
      q: `هل تمنح ${a.name} و${b.name} خصمًا على الرسوم عند دفعها بتوكن المنصة؟`,
      a: `${a.name}: ${stop(a.tokenDiscount || noTokenDiscount)} ${b.name}: ${stop(b.tokenDiscount || noTokenDiscount)}`,
    },
    { q: `أي المنصتين تقدّم رافعة مالية أعلى: ${a.name} أم ${b.name}؟`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `أي المنصتين تُدرج عملات أكثر: ${a.name} أم ${b.name}؟`,
      a: `بحسب أرقام المنصتين نفسيهما، تُدرج ${a.name} ${withoutSource(a.assets)}، و${b.name} ${withoutSource(b.assets)}. لكن المنصات تحسب بطرق مختلفة – بعضها يعدّ العملات وبعضها يعدّ أزواج التداول – لذلك لا تصحّ المقارنة المباشرة بين الرقمين.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `هل يمكنني استخدام ${a.name} أو ${b.name} في ${c.name}؟`, a: countryPairAnswer(a, b, c) })),
    {
      q: `هل تشترط ${a.name} و${b.name} التحقق من الهوية (KYC)؟`,
      a: `نعم، تطلب المنصتان من المستخدمين الجدد التحقق من الهوية. ${a.name}: ${bare(a.signup.kycShort)}. ${b.name}: ${bare(b.signup.kycShort)}. لذا لا تصلح أيٌّ منهما للتداول دون تحقق.`,
    },
    {
      q: `أيهما أكثر أمانًا: ${a.name} أم ${b.name}؟`,
      a: `لا توجد منصة مركزية خالية من المخاطر، لذا فالمقارنة المنصفة هي بما تنشره كل منصة عن نفسها. ${a.name}: ${bare(a.regulation)}. إثبات الاحتياطيات – ${bare(ia.reserves)}. ${ia.fund ? `${bare(ia.fund)}.` : noFund} ${b.name}: ${bare(b.regulation)}. إثبات الاحتياطيات – ${bare(ib.reserves)}. ${ib.fund ? `${bare(ib.fund)}.` : noFund} ولا تحتفظ على أيٍّ من المنصتين إلا بالأموال التي تتداول بها فعلًا.`,
    },
    {
      q: `هل تخضع ${a.name} و${b.name} لتنظيم MiCA في الاتحاد الأوروبي؟`,
      a: `${a.name}: ${ia.mica ? `نعم – ${bare(ia.mica)}` : noMicaEntity}. ${b.name}: ${ib.mica ? `نعم – ${bare(ib.mica)}` : noMicaEntity}. ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `لا شيء من بين ${productsOf(featureList.length)} في مقارنتنا: كل منتج تعرضه ${x.name} على موقعها تعرضه ${y.name} أيضًا.`;
  const products: Faq[] = [
    { q: `ما الذي تقدّمه ${a.name} ولا تقدّمه ${b.name}؟`, a: onlyA || nothing(a, b) },
    { q: `ما الذي تقدّمه ${b.name} ولا تقدّمه ${a.name}؟`, a: onlyB || nothing(b, a) },
    {
      q: `هل تقدّم ${a.name} و${b.name} التداول بالنسخ وروبوتات التداول والخيارات والتداول التجريبي؟`,
      a: `التداول بالنسخ: ${state("copyTrading")}. روبوتات التداول: ${state("tradingBots")}. الخيارات: ${state("options")}. التداول التجريبي: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` وحيث تُذكر منصة واحدة فقط، فذلك لأننا لم نجد صفحة لهذا المنتج على الموقع الرسمي للمنصة الأخرى في ${prettyDate(site.lastReviewed)}.` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `ما هو كود إحالة ${a.name} وكود إحالة ${b.name}؟`,
      a: `${a.name}: ${a.referralCode} – ${bare(a.referral.whereShort)}. ${b.name}: ${b.referralCode} – ${bare(b.referral.whereShort)}. استخدام الكودين مجاني ولا يرفع رسوم التداول عليك.`,
    },
    {
      q: `أي المنصتين تقدّم مكافأة تسجيل أفضل: ${a.name} أم ${b.name}؟`,
      a: `${a.name}: ${bare(offer(a))}. ${b.name}: ${bare(offer(b))}. مكافآت الترحيب على المنصتين مرتبطة بشروط مثل التحقق من الهوية أو الإيداع أو حجم التداول، وتختلف من دولة إلى أخرى، لذا قارن الشروط لا الرقم المعلن في العنوان.`,
    },
    {
      q: `هل يمكنني إضافة كود الإحالة لاحقًا على ${a.name} أو ${b.name}؟`,
      a: `${a.name}: ${bare(a.referral.afterSignupShort)}. ${b.name}: ${bare(b.referral.afterSignupShort)}. والطريقة الآمنة على المنصتين هي ${safeWay}.`,
    },
    {
      q: `هل يمكنني استخدام ${a.name} و${b.name} في الوقت نفسه؟`,
      a: "نعم. فهما شركتان منفصلتان، والحساب على إحداهما لا يؤثر في الحساب على الأخرى، ويحتفظ كثير من المتداولين بأموالهم على منصتين. أما مستويات الرسوم والإحالات والمكافآت فمرتبطة بكل حساب على حدة ولا تنتقل من منصة إلى أخرى.",
    },
    {
      q: `كيف أنقل العملات الرقمية من ${a.name} إلى ${b.name}؟`,
      a: `1. افتح حسابك على ${b.name} باستخدام كود الإحالة ${b.referralCode} وأكمل التحقق من الهوية. 2. أغلق مراكز العقود الآجلة والتداول بالهامش المفتوحة على ${a.name} – فلا يمكن نقل المراكز بين المنصات. 3. انسخ من ${b.name} عنوان الإيداع الخاص بالعملة والشبكة التي تريد استخدامها. 4. اسحب من ${a.name} إلى هذا العنوان على الشبكة نفسها، وأرسل مبلغًا تجريبيًا صغيرًا أولًا: فالتحويل على شبكة خاطئة قد يضيع. وتنطبق الخطوات نفسها في الاتجاه المعاكس.`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} أم ${b.name}: أيهما أفضل؟`, faqs: verdict },
    { id: "fees", title: "الرسوم والرافعة المالية والعملات", faqs: fees },
    { id: "countries", title: "الدول والتحقق من الهوية (KYC) والأمان", faqs: countries },
    { id: "products", title: "المنتجات", faqs: products },
    { id: "referral", title: "أكواد الإحالة والانتقال بين المنصتين", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

/** The hub's quick answer. Each exchange carries its Arabic spelling at its first mention in the paragraph. */
const hubAnswer = ({ lowF, hi: top, oi, mica }: HubFacts) => {
  const seen = new Set<string>();
  const named = (list: Exchange[]) => joinList(list.map((e) => (seen.has(e.slug) ? e.name : (seen.add(e.slug), withArabic(e)))));
  const fees = named(lowF);
  const leverage = named(top);
  const depth = named(oi);
  const micaNames = named(mica);
  const micaSentence = mica.length
    ? ` ${mica.length === 1 ? "وتُعلن" : "وتُعلن كلٌّ من"} ${micaNames} عن منصة مرخّصة بموجب MiCA للمقيمين في المنطقة الاقتصادية الأوروبية (EEA).`
    : "";
  return `أقل الرسوم الأساسية على العقود الآجلة (صانع / آخذ: ${feePair(lowF[0].futuresFees)}) لدى ${fees}، وأعلى رافعة مالية (${leverageOf(top[0])}x) لدى ${leverage}، وأعمق سوق للمشتقات (عقود مفتوحة بقيمة ${formatBn(oi[0].market.openInterestBn)}) لدى ${depth}.${micaSentence} أما المنصة الأفضل لك فتتوقف على المنصتين اللتين تفاضل بينهما – اختر الزوج من القائمة أدناه.`;
};

function hubFaqs({ all, ranked, lowF, lowS, hi: top, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "ما هي منصة العملات الرقمية الأقل رسومًا؟",
      a: `على المستوى الأساسي، أقل رسوم على العقود الآجلة لدى ${names(lowF)} بواقع ${feePair(lowF[0].futuresFees)} (صانع / آخذ)، وأقل رسوم على التداول الفوري لدى ${names(lowS)} بواقع ${feePair(lowS[0].spotFees)}. وبقية المنصات: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name}: ${feePair(e.futuresFees)} على العقود الآجلة و${feePair(e.spotFees)} على التداول الفوري`)
        .join("؛ ")}. ${vipNote}`,
    },
    {
      q: "ما هي منصة العملات الرقمية التي تقدّم أعلى رافعة مالية؟",
      a: `${names(top)}: ${top[0].maxLeverage}. والبقية: ${ranked
        .filter((e) => !top.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join("، ")}. ${leverageRisk}`,
    },
    {
      q: "ما هي منصة العملات الرقمية صاحبة أعمق سوق للعقود الآجلة؟",
      a: `بحسب قيمة العقود المفتوحة في تصنيف المشتقات على CoinMarketCap (${marketDate}): ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join("، ")}. والسوق الأعمق يعني عادةً فروق أسعار أضيق في الأوامر الكبيرة.`,
    },
    {
      q: "أي المنصات لديها منصة مرخّصة بموجب MiCA للمنطقة الاقتصادية الأوروبية؟",
      a: `${joinList(mica.map((e) => `${e.name} (${bare(altInfo(e).mica)})`))}. أما ${names(noMica)} فلا تذكر على صفحاتها أي كيان مرخّص بموجب MiCA. ${regionalNote}`,
    },
    {
      q: "ما المنصات التي تسمح بإضافة كود الإحالة بعد التسجيل؟",
      a: `${later.map((e) => `${e.name}: ${bare(e.referral.afterSignupShort)}`).join(". ")}. أما على ${names(signupOnly)} فلا يُحتسب الكود إلا عند التسجيل، أو لا توجد طريقة موثّقة لإضافته لاحقًا – والطريقة الآمنة على كل المنصات هي ${safeWay}.`,
    },
    {
      q: "كيف تُعدّ هذه المقارنات؟",
      a: `كل رقم مأخوذ من الموقع الرسمي للمنصة أو من مركز المساعدة التابع لها – جداول الرسوم والشروط وقوائم الدول المحظورة وصفحات المنتجات – وكل صفحة تذكر مصادرها. أما العقود المفتوحة وحجم التداول وعدد أسواق المشتقات فمصدرها تصنيف المشتقات على CoinMarketCap. ونحدّد المنصة المتقدّمة في كل نقطة من هذه الأرقام وحدها؛ فليس لدينا تصنيف خاص بنا. تاريخ المراجعة الحالي: ${date}.`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const ar: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row after "تتفوّق Binance في …" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "رسوم العقود الآجلة (صانع / آخذ)", topic: "رسوم العقود الآجلة" },
    spotFees: { label: "رسوم التداول الفوري (صانع / آخذ)", topic: "رسوم التداول الفوري" },
    leverage: { label: "الرافعة المالية القصوى", topic: "الرافعة المالية القصوى" },
    openInterest: { label: "قيمة العقود المفتوحة (المشتقات)", topic: "قيمة العقود المفتوحة" },
    volume: { label: "حجم تداول المشتقات خلال 24 ساعة", topic: "حجم تداول المشتقات خلال 24 ساعة" },
    markets: { label: "أسواق المشتقات", topic: "عدد أسواق المشتقات" },
    users: { label: "المستخدمون (أرقام المنصة)", topic: "عدد المستخدمين" },
    assets: { label: "الأصول المدرجة (أرقام المنصة)", topic: "" },
    founded: { label: "سنة التأسيس", topic: "" },
    products: { label: (compared) => `المنتجات المتوفرة (من أصل ${productsOf(compared)})`, topic: "تنوّع المنتجات" },
    countries: { label: (compared) => `الدول المحظورة (من أصل ${countriesOf(compared)})`, topic: "التوفر في الدول" },
    mica: { label: "منصة مرخّصة بموجب MiCA في المنطقة الاقتصادية الأوروبية", topic: "ترخيص MiCA" },
    kyc: { label: "التحقق من الهوية (KYC)", topic: "" },
    addLater: { label: "إضافة كود الإحالة لاحقًا؟", topic: "إمكانية إضافة كود الإحالة لاحقًا" },
    offer: { label: "عرض المستخدمين الجدد", topic: "" },
    reserves: { label: "إثبات الاحتياطيات", topic: "" },
    fund: { label: "صندوق الحماية", topic: "" },
  },
  countOf: (count, of) => `${count} من ${of}`,
  noMica: "لم تذكر أي منصة",
  noFund: "لم تذكر أي صندوق",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    title: (a, b, shortMonthYear) => `${withArabic(a)} أم ${withArabic(b)}: أيهما أفضل؟ (${shortMonthYear})`,
    description: (a, b, monthYear) =>
      `مقارنة ${a.name} و${b.name}: رسوم العقود الآجلة ${feePair(a.futuresFees)} مقابل ${feePair(b.futuresFees)}، والرافعة ${leverageOf(a)}x مقابل ${leverageOf(b)}x، والمنتجات والدول وKYC وأكواد الإحالة – بيانات رسمية تحققنا منها في ${monthYear}.`,
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} أم ${b.name}`,
      `${a.name} أم ${b.name} أيهما أفضل`,
      `مقارنة ${a.name} و${b.name}`,
      `${reading(a)} أم ${reading(b)}`,
      `مقارنة ${reading(a)} و${reading(b)}`,
      ...(a.slug === "binance" || b.slug === "binance" ? [`${altReading(a)} أم ${altReading(b)}`] : []),
      `رسوم ${a.name} و${b.name}`,
      `${a.name} أم ${b.name} للعقود الآجلة`,
      `مقارنة منصات العملات الرقمية ${a.name} و${b.name}`,
      `هل ${a.name} أفضل من ${b.name}`,
      `هل ${b.name} أفضل من ${a.name}`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`, `${old} أم ${other}`]),
    ],

    crumbHome: "الرئيسية",
    crumbHub: "مقارنة المنصات",
    crumbPage: (a, b) => `${a.name} مقابل ${b.name}`,

    formerNote: (e, formerName) => `${e.name} هي المنصة التي كانت تُعرف سابقًا باسم ${formerName}.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${withArabic(a)} و${withArabic(b)} منصتان مركزيتان للتداول الفوري (Spot) وتداول العقود الآجلة (Futures) بالرافعة المالية، وتدير كلٌّ منهما برنامج إحالة للمستخدمين الجدد. ${bare(pickA)}. ${bare(pickB)}.${formerNote ? ` ${formerNote}` : ""} تضع هذه المقارنة المباشرة رسوم المنصتين ورافعتهما المالية ومنتجاتهما وتوفرهما حسب الدولة وقواعد التحقق من الهوية وعروض كود الإحالة (رمز الإحالة) جنبًا إلى جنب – وكل رقم فيها مأخوذ من الموقعين الرسميين للمنصتين في ${date}.`,

    toc: {
      "at-a-glance": "نظرة سريعة",
      verdict: "أيهما تختار",
      fees: "الرسوم",
      leverage: "الرافعة وعمق السوق",
      products: "المنتجات",
      countries: "الدول",
      kyc: "التحقق من الهوية (KYC)",
      safety: "الأمان والتنظيم",
      referral: "أكواد الإحالة",
      "pros-cons": "المزايا والعيوب",
      faq: "الأسئلة الشائعة",
      sources: "المصادر",
    },
    onThisPage: "في هذه الصفحة",

    /* Hero */
    updated: (date) => `تم التحقق والتحديث: ${date}`,
    h1: (a, b) => `${withArabic(a)} أم ${withArabic(b)}: مقارنة الرسوم والرافعة المالية والأمان`,
    quickAnswer: "الإجابة المختصرة",
    keyFigures: "أبرز الأرقام",
    chips: (a, b, oiA, oiB) => [
      `العقود الآجلة ${feePair(a.futuresFees)} مقابل ${feePair(b.futuresFees)}`,
      `التداول الفوري ${feePair(a.spotFees)} مقابل ${feePair(b.spotFees)}`,
      `رافعة ${leverageOf(a)}x مقابل ${leverageOf(b)}x`,
      `العقود المفتوحة ${oiA} مقابل ${oiB}`,
    ],
    boxTitle: "سجّل بكود الإحالة",
    boxNote: "الكودان مجانيان ولا يرفعان رسومك أبدًا.",
    codeLabel: (e) => `كود إحالة ${e.name}`,
    boxRisk: () => (
      <>
        التداول بالرافعة المالية عالي المخاطر. ولا تتوفر أيٌّ من المنصتين في كل الدول – راجع قسم <a href="#countries">الدول</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} مقابل ${b.name}: نظرة سريعة`,
    glanceText: (a, b, s) =>
      `سواء بحثت عن «${a.name} أم ${b.name}» أو «${b.name} أم ${a.name}»، فالمقارنة واحدة. ومن بين ${points(s.measurable)} يمكن حسمها بالأرقام، ${aheadIn(a, s.a.length)}، و${aheadIn(b, s.b.length)}${tieTail(s)}. والنقاط ليست متساوية في الأهمية – فالرسوم المنخفضة تهمّ المتداول النشط أكثر من قائمة عملات أطول – لذا ركّز في الجدول على الصفوف التي تناسب أسلوب تداولك.`,
    glanceCaption: (a, b) => `${a.name} مقابل ${b.name}: الرسوم والرافعة المالية وحجم السوق والمنتجات والدول والتحقق من الهوية وقواعد الإحالة`,
    compared: "وجه المقارنة",
    ahead: "الأفضلية",
    level: "تعادل",
    glanceNote: (marketDate, date) =>
      `الرسوم: المستوى الأساسي (خارج مستويات VIP). العقود المفتوحة وحجم التداول والأسواق: تصنيف المشتقات على CoinMarketCap، ${marketDate}. والعلامة «–» تعني أنه لا يمكن تفضيل إحدى القيمتين على الأخرى. وكل ما عدا ذلك مأخوذ من الموقعين الرسميين للمنصتين في ${date}.`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} أم ${b.name}: أيهما تختار؟`,
    verdictText:
      "لا يوجد فائز مطلق – فكل منصة مصمّمة لنوع مختلف من المتداولين. يوضّح المربعان أدناه لمن تناسب كل منصة، وأين تتقدّم على الأخرى بأرقام قابلة للقياس.",
    bestFor: (role) => `نقطة قوتها: ${role}`,
    chooseIf: (e) => `اختر ${e.name} إذا …`,
    aheadOf: (e, other) => `أين تتفوّق ${e.name} على ${other.name}`,
    noAdvantage: "لا توجد أفضلية قابلة للقياس في النقاط التي نقارنها.",
    thinkTwice: "فكّر مرتين إذا …",
    codeButton: (e) => `كود إحالة ${e.name} ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `رسوم ${a.name} مقابل رسوم ${b.name}`,
    feesModel:
      "تعتمد المنصتان نموذج صانع/آخذ (Maker/Taker): أوامر الحد التي تضيف سيولة إلى السوق تدفع رسوم الصانع، والأوامر التي تسحب السيولة تدفع رسوم الآخذ.",
    feesCaption: (a, b) => `الرسوم الأساسية للتداول الفوري والعقود الآجلة على ${a.name} و${b.name}`,
    exchange: "المنصة",
    futuresMaker: "العقود الآجلة (صانع)",
    futuresTaker: "العقود الآجلة (آخذ)",
    spotMaker: "الفوري (صانع)",
    spotTaker: "الفوري (آخذ)",
    otherMarkets: "أسواق أخرى (صانع / آخذ)",
    feesNote: (date) => `الرسوم الأساسية (خارج مستويات VIP) كما تنشرها كل منصة، تم التحقق منها في ${date}. الرسوم تتغيّر – تأكّد منها على المنصة قبل التداول.`,
    tokenTitle: "خصومات التوكن والشروط التفصيلية",
    noTokenDiscount: "لا يوجد خصم معلن عند دفع الرسوم بتوكن المنصة.",

    /* Leverage */
    leverageTitle: "الرافعة المالية وعمق السوق",
    leverageRisk: "الرافعة المالية العالية ترفع خطر التصفية بشدة – والحد الأقصى سقف، وليس توصية.",
    leverageCaption: (a, b) => `الرافعة المالية وبيانات سوق المشتقات على ${a.name} و${b.name}`,
    maxLeverage: "الرافعة المالية القصوى",
    openInterest: "العقود المفتوحة (Open Interest)",
    volume24h: "حجم تداول المشتقات خلال 24 ساعة",
    derivativesMarkets: "أسواق المشتقات",
    listedAssets: "الأصول المدرجة (أرقام المنصة)",
    leverageNote: (marketDate) =>
      `بيانات السوق: تصنيف المشتقات على CoinMarketCap، ${marketDate}. تحسب المنصات الأصول المدرجة بطرق مختلفة – بعضها يعدّ العملات وبعضها يعدّ أزواج التداول.`,

    /* Products */
    productsTitle: (a, b) => `المنتجات: ما الذي تقدّمه ${a.name} و${b.name}`,
    productsSame: (compared) => `تعرض المنصتان على موقعيهما كل المنتجات التي نقارنها، وعددها ${compared}؛ والفروق في التفاصيل.`,
    productsLegend: (date) => `علامة الصح تعني أن المنصة تعرض المنتج على موقعها الرسمي؛ والشرطة تعني أننا لم نجد له صفحة هناك في ${date}.`,
    productsCaption: (a, b) => `المنتجات التي تقدّمها ${a.name} و${b.name}`,
    product: "المنتج",
    offered: "متوفر",
    notOffered: "غير متوفر",
    noPage: "لم نجد له صفحة على موقع المنصة",

    /* Countries */
    countriesTitle: (a, b) => `الدول: أين تتوفر ${a.name} و${b.name}`,
    countriesText: (compared, differing) =>
      `هذا ما تنص عليه الشروط الرسمية لكل منصة بشأن ${countriesOf(compared)}. ${differing ? `وتختلف المنصتان في ${countriesOf(differing)} منها.` : "ولا تختلف المنصتان في أيٍّ منها."} و«${ct.statusLabel.regional}» يعني أن المنصة تخدم الدولة عبر منصة منفصلة لها منتجاتها ورسومها وحدودها الخاصة.`,
    countriesCaption: (a, b) => `توفر ${a.name} و${b.name} حسب الدولة`,
    country: "الدولة",
    countriesNote: (date) =>
      `«${ct.statusLabel.open}» يعني أن الدولة لم تكن على قائمة الدول المحظورة لدى المنصة في ${date} – وهذا لا يضمن توفر كل المنتجات فيها. وتحظر المنصتان الالتفاف على القيود باستخدام VPN أو بيانات غير صحيحة.`,
    differTitle: "أين تختلف المنصتان",
    differQuestion: (a, b, countryName) => `${a.name} أم ${b.name} في ${countryName}؟`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        ألا تتوفر أيٌّ من المنصتين حيث تقيم؟ تعرض جداول الدول في صفحات البدائل المنصات الأخرى التي تقبل دولتك:{" "}
        <Link href={hrefA}>بدائل {a.name} حسب الدولة</Link> · <Link href={hrefB}>بدائل {b.name} حسب الدولة</Link>.
      </>
    ),
    restrictedTitle: "الدول المحظورة والمنصات الإقليمية",
    whereNot: (e) => `ما الدول التي لا تتوفر فيها ${e.name}؟`,
    regionalPlatforms: "المنصات الإقليمية:",

    /* Verification */
    kycTitle: (a, b) => `التحقق من الهوية: ${a.name} مقابل ${b.name}`,
    kycText:
      "تطلب المنصتان من المستخدمين الجدد التحقق من الهوية، لذا لا تصلح أيٌّ منهما للتداول دون KYC. ويكمن الفرق في ما يستطيع الحساب غير الموثّق فعله، وفي طريقة إجراء التحقق.",
    documents: "المستندات:",
    minAge: "الحد الأدنى للعمر:",
    howToRegister: (e) => `طريقة التسجيل والتحقق من الهوية على ${e.name} خطوة بخطوة`,

    /* Safety */
    safetyTitle: (a, b) => `الأمان والتنظيم: ${a.name} مقابل ${b.name}`,
    safetyText:
      "لا توجد منصة مركزية خالية من المخاطر. وما يمكن مقارنته هو ما تنشره كل منصة عن نفسها: أين تحمل تراخيصها، وهل تثبت احتياطياتها، وهل تحتفظ بصندوق للطوارئ.",
    safetyCaption: (a, b) => `التنظيم وإثبات الاحتياطيات وصناديق الحماية لدى ${a.name} و${b.name}`,
    licences: "التراخيص التي تذكرها المنصة",
    entity: "الكيان المشغّل",
    reserves: "إثبات الاحتياطيات",
    fund: "صندوق الحماية",
    founded: "سنة التأسيس",
    isSafe: (e) => `هل منصة ${e.name} آمنة؟`,
    safetyDetail: (e) => `أمان ${e.name} وتوفرها بالتفصيل`,

    /* Referral codes */
    referralTitle: (a, b) => `أكواد الإحالة وعروض المستخدمين الجدد: ${a.name} مقابل ${b.name}`,
    referralText:
      "أيًّا كانت المنصة التي تختارها، سجّل بكود إحالة: لا يكلّفك شيئًا، ولا يرفع رسومك أبدًا، ويفتح لك عرض المستخدمين الجدد على المنصة. وانتبه إلى الصف الأخير – فالكود المنسي لا يمكن إضافته لاحقًا في كل الأحوال.",
    referralCaption: (a, b) => `أكواد الإحالة وعروض المستخدمين الجدد على ${a.name} و${b.name}`,
    referralCodeOf: (e) => `كود إحالة ${e.name}`,
    referralCode: "كود الإحالة",
    newUserOffer: "عرض المستخدمين الجدد",
    inviteeReward: "ما تحصل عليه كمستخدم مدعو",
    covers: "ما تشمله الإحالة الواحدة",
    whereCode: "أين يُدخل الكود",
    addLater: "هل يمكن إضافته لاحقًا؟",
    referralNote: (date) => `تم التحقق من العروض في ${date}. مكافآت الترحيب مرتبطة بمهام، وتتطلب التحقق من الهوية، وتختلف من دولة إلى أخرى.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `مزايا وعيوب ${a.name} و${b.name}`,
    pros: "المزايا",
    cons: "العيوب",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} مقابل ${b.name} – الأسئلة الشائعة`,
    faqText: (count, a, b) =>
      `${arabicCount(count, { one: "سؤال واحد", two: "سؤالان", few: "أسئلة", many: "سؤالًا", hundred: "سؤال" })} حول الاختيار بين ${a.name} و${b.name}: الرسوم والرافعة المالية والدول والتحقق من الهوية والمنتجات وأكواد الإحالة.`,

    /* Sources */
    sourcesTitle: "المصادر: من أين جاءت هذه الأرقام",
    sourcesText: (date, marketDate) =>
      `كل ما في هذه الصفحة عن الرسوم والرافعة المالية والمنتجات والتحقق من الهوية والدول والتراخيص والاحتياطيات وقواعد الإحالة مأخوذ من الموقعين الرسميين للمنصتين ومن مراكز المساعدة التابعة لهما في ${date}. أما العقود المفتوحة وحجم التداول وعدد أسواق المشتقات فمصدرها تصنيف المشتقات على CoinMarketCap (${marketDate}). والمنصات تغيّر شروطها دون إشعار مسبق، لذا تبقى الصفحات أدناه هي المرجع النهائي.`,
    officialPages: (e, count) =>
      `${e.name}: ${arabicCount(count, { one: "صفحة رسمية واحدة", two: "صفحتان رسميتان", few: "صفحات رسمية", many: "صفحة رسمية" })}`,

    /* More comparisons */
    moreTitle: "مزيد من المقارنات",
    against: (e) => `${e.name} في مقارنة مباشرة مع المنصات الأخرى`,
    allAlternatives: (e) => `كل بدائل ${e.name}`,
    allComparisons: "كل مقارنات المنصات",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>تحذير من المخاطر:</strong> مشتقات العملات الرقمية أدوات معقّدة. فالرافعة المالية تضاعف الأرباح والخسائر معًا، وقد تخسر كامل الهامش
        خلال دقائق. هذه الصفحة للمعلومات فقط وليست نصيحة مالية. قد نحصل على عمولة إذا سجّلت عبر روابطنا – راجع{" "}
        <Link href={disclosureHref}>إفصاح التسويق بالعمولة</Link>. ولا يغيّر ذلك الأرقام: فهي أرقام المنصات نفسها.
      </>
    ),
    ctaTitle: (a, b) => `${a.name} أم ${b.name}؟ ابدأ بكود إحالة`,
    ctaText: "حساب واحد للتداول الفوري والعقود الآجلة على أيٍّ من المنصتين، دون أي تكلفة إضافية.",
    ctaButton: "قارن مزيدًا من المنصات",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) => `مقارنة منصات العملات الرقمية (${shortMonthYear}): ${headToHead(pairs)}`,
    description: (exchangeNames, pairs, monthYear) =>
      `${exchangeNames} في مواجهات ثنائية: ${headToHead(pairs)} تشمل الرسوم والرافعة المالية والدول وKYC وأكواد الإحالة – بيانات رسمية، تم التحقق منها في ${monthYear}.`,
    crumbHome: "الرئيسية",
    crumbPage: "مقارنة المنصات",
    listName: "مقارنات مباشرة بين منصات العملات الرقمية",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `تم التحقق والتحديث: ${date}`,
    h1: (pairs) => `مقارنة منصات العملات الرقمية: ${headToHead(pairs)}`,
    lead: (exchangeCount) =>
      `${exchangesNom(exchangeCount)}، وكل زوج منها مقارَن على النقاط نفسها: الرسوم والرافعة المالية وعمق السوق والمنتجات والتوفر حسب الدولة والتحقق من الهوية والتنظيم وعروض الإحالة. وتعتمد كل مقارنة على الأرقام المنشورة في المواقع الرسمية للمنصات.`,
    quickAnswer: "الإجابة المختصرة",

    pickTitle: "اختر منصتين للمقارنة",
    pickText: (others) =>
      `يضع كل مربع منصة واحدة في مواجهة ${otherExchanges(others)}. ولكل زوج صفحة واحدة، لذا يقودك «Binance vs OKX» و«OKX vs Binance» إلى المقارنة نفسها.`,
    alternativesOf: (e) => `بدائل ${e.name}`,
    referralCodeOf: (e) => `كود إحالة ${e.name}`,

    tableTitle: (exchangeCount) => `${exchangesNom(exchangeCount)} جنبًا إلى جنب`,
    tableText: "عروض المستخدمين الجدد والرسوم الأساسية (خارج مستويات VIP) والرافعة المالية وعمق السوق لكل منصة في جدول واحد.",
    tableNote: (date, marketDate) =>
      `الرسوم: المستوى الأساسي كما تنشره كل منصة، تم التحقق منه في ${date}. العقود المفتوحة والأسواق: CoinMarketCap، ${marketDate}.`,

    alternativesTitle: "منصة واحدة في مواجهة كل المنصات الأخرى",
    alternativesText: (others) =>
      `لا تفاضل بين منصتين، بل تبحث عن بديل؟ تقارن صفحات البدائل منصة واحدة مع ${otherExchanges(others)} دفعة واحدة، وتبيّن أيّها يقبل المقيمين في دولتك.`,

    faqTitle: "مقارنة المنصات – الأسئلة الشائعة",

    ctaTitle: "حسمت قرارك؟ سجّل بكود إحالة",
    ctaText: (exchangeCount) => `أكواد إحالة موثّقة لكل المنصات، وعددها ${exchangeCount} – حساب واحد للتداول الفوري والعقود الآجلة، دون أي تكلفة إضافية.`,
    ctaButton: "عرض كل أكواد الإحالة",
  },
};
