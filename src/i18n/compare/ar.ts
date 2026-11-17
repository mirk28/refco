/**
 * The sentences of the comparison pages in Arabic. Same functions and the same logic as `./en.ts`, written in
 * Modern Standard Arabic as Arabic crypto media write it (second person singular: "راجع"، "يمكنك").
 *
 * Wording: "منصة" (feminine), "بديل" / "بدائل", "كود الإحالة", "الرسوم الأساسية", "صانع (Maker) / آخذ (Taker)",
 * "التحقق من الهوية (KYC)". Exchange names stay in Latin letters and are treated as feminine ("تتقاضى Binance"،
 * "Binance أرخص"); the Arabic spelling is added only in the opening text (`quickAnswer`, `withArabic`). No prefix
 * (بـ، لـ، كـ، الـ) is glued to a name or another variable – the sentences say "على Binance"، "لمنصة Binance"; only
 * "و" stands directly before the next word ("وOKX"، "و0.10%"). Most sentences put the verb first, so it stays
 * feminine singular before any list of names; where a list of names comes first, `agree()` gives the dual.
 * Countries are feminine; `name` reads after "في" and as a subject ("الهند"), `residents` is "المقيمين في الهند"
 * (object and after a preposition). Counted nouns with a variable number come from `arabicCount`.
 * Lists read "A، B وC". Arabic script has no capital letters, so inserted data texts are never changed – except
 * that the leading "نعم – " of `afterSignupShort` is dropped where English drops "Yes – ". Data texts without a full
 * stop (pick, kycShort, assets, reserves, fund, mica …) get "." where they end a sentence.
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee, Step } from "@/data/exchanges";
import { countryList, featureList } from "@/data/alternatives";
import type { CountryKey, CountryStatus, FeatureKey } from "@/data/alternatives";
import {
  addLater,
  altInfo as altInfoIn,
  alternativesTo as alternativesIn,
  cheaper,
  countryGroups,
  feePair,
  highestLeverage,
  largestOpenInterest,
  leverageOf,
  lowestFutures,
  lowestSpot,
  pct,
  verb,
  withFeature,
  withMica,
} from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import { arabicCount, withArabic } from "../ar-names";
import type { AltFaqGroup, CompareText } from "./en";

const locale = "ar";
/** "A، B وC" – "و" stands directly before the last item. */
const joinList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join("، ")} و${items[items.length - 1]}`);
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);

/* ---------------------------------- counts ---------------------------------- */

/** "6 بدائل" after "من بين" ("من بين 6 بدائل"). */
const altsCount = (n: number) => arabicCount(n, { one: "بديل واحد", two: "بديلين", few: "بدائل", many: "بديلًا" });
/** "6 منصات" as the predicate of a sentence. */
const platformsCount = (n: number) => arabicCount(n, { one: "منصة واحدة", two: "منصتان", few: "منصات", many: "منصة" });
/** A verb after a list of exchange names: dual for two names, feminine singular otherwise (non-human plural). */
const agree = (list: unknown[], singular: string, dual: string) => (list.length === 2 ? dual : singular);

/* --------------------------------- endings --------------------------------- */

/** Ends a data text with "." unless it already ends a sentence. */
const stop = (s: string) => (/[.!?؟]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** The `pick` lines of several exchanges as consecutive sentences. */
const picks = (list: Exchange[]) => list.map((a) => stop(altInfo(a).pick)).join(" ");
/** `afterSignupShort` without its leading "نعم – ". */
const withoutYes = (s: string) => s.replace(/^نعم\s*[–-]\s*/, "");

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` as the object of "توفّر" in sentences, `term` with the Latin word for questions. */
const featureWords: Record<FeatureKey, { label: string; noun: string; term: string }> = {
  copyTrading: { label: "التداول بالنسخ", noun: "التداول بالنسخ", term: "التداول بالنسخ (Copy Trading)" },
  tradingBots: { label: "روبوتات التداول", noun: "روبوتات التداول", term: "روبوتات التداول (Trading Bots)" },
  options: { label: "الخيارات", noun: "تداول الخيارات", term: "تداول الخيارات (Options)" },
  demoTrading: { label: "التداول التجريبي", noun: "التداول التجريبي", term: "التداول التجريبي (Demo Trading)" },
  margin: { label: "التداول بالهامش (Spot Margin)", noun: "التداول الفوري بالهامش", term: "التداول الفوري بالهامش (Spot Margin)" },
  p2p: { label: "تداول P2P", noun: "تداول P2P", term: "تداول P2P" },
  fiat: {
    label: "الشراء بالبطاقة / التحويل البنكي",
    noun: "شراء العملات الرقمية بالبطاقة أو التحويل البنكي",
    term: "شراء العملات الرقمية بالبطاقة أو التحويل البنكي",
  },
  earn: { label: "Earn / التخزين (Staking)", noun: "منتجات Earn", term: "منتجات Earn" },
  launchpad: { label: "Launchpad / Launchpool", noun: "منصة Launchpad", term: "منصة Launchpad" },
  web3Wallet: { label: "محفظة Web3", noun: "محفظة Web3 ذاتية الحفظ", term: "محفظة Web3 ذاتية الحفظ" },
  card: { label: "بطاقة العملات الرقمية", noun: "بطاقة عملات رقمية", term: "بطاقة عملات رقمية (Crypto Card)" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` for sentences, `short` for the tables. */
const countryWords: Record<CountryKey, { name: string; short: string }> = {
  us: { name: "الولايات المتحدة", short: "الولايات المتحدة" },
  uk: { name: "المملكة المتحدة", short: "المملكة المتحدة" },
  ca: { name: "كندا", short: "كندا" },
  de: { name: "ألمانيا", short: "ألمانيا" },
  fr: { name: "فرنسا", short: "فرنسا" },
  nl: { name: "هولندا", short: "هولندا" },
  es: { name: "إسبانيا", short: "إسبانيا" },
  it: { name: "إيطاليا", short: "إيطاليا" },
  au: { name: "أستراليا", short: "أستراليا" },
  jp: { name: "اليابان", short: "اليابان" },
  sg: { name: "سنغافورة", short: "سنغافورة" },
  hk: { name: "هونغ كونغ", short: "هونغ كونغ" },
  in: { name: "الهند", short: "الهند" },
  ae: { name: "الإمارات العربية المتحدة", short: "الإمارات" },
};
/** `residents` ("المقيمين في الهند") is the object of a verb or follows a preposition ("أمام المقيمين في الهند"). */
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key], residents: `المقيمين في ${countryWords[c.key].name}` }));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "محظورة",
  regional: "موقع إقليمي",
  partial: "قيود جزئية",
  open: "غير محظورة",
};

/** The market of a fee comparison, after "في". */
const marketName = (market: "spot" | "futures") => (market === "spot" ? "التداول الفوري (Spot)" : "العقود الدائمة (Perpetual)");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketName(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0)
    return `تتقاضى ${a.name} و${x.name} الرسوم الأساسية نفسها في ${label}: ${fa.maker} من الصانع (Maker) و${fa.taker} من الآخذ (Taker).`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} أرخص للصانع والآخذ معًا`
      : mm !== 0
        ? `${who} أرخص للصانع، والآخذ يدفع الرسوم نفسها`
        : `${who} أرخص للآخذ، والصانع يدفع الرسوم نفسها`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} أرخص للصانع، و${x.name} أرخص للآخذ`
          : `${x.name} أرخص للصانع، و${a.name} أرخص للآخذ`;
  return `في ${label} تتقاضى ${a.name} ${fa.maker} من الصانع (Maker) و${fa.taker} من الآخذ (Taker)، بينما تتقاضى ${x.name} ${fx.maker} و${fx.taker} – ${verdict}.`;
}

/** Which alternatives are cheaper than, level with or more expensive than `x` on one market (standard tier). */
function feeSummary(x: Exchange, alts: Exchange[], market: "spot" | "futures"): string {
  const fee = (e: Exchange) => (market === "spot" ? e.spotFees : e.futuresFees);
  const fx = fee(x);
  const diff = (a: Exchange) => [Math.sign(pct(fee(a).maker) - pct(fx.maker)), Math.sign(pct(fee(a).taker) - pct(fx.taker))];
  const same = alts.filter((a) => diff(a).every((d) => d === 0));
  const lower = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d <= 0));
  const higher = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d >= 0));
  const mixed = alts.filter((a) => !same.includes(a) && !lower.includes(a) && !higher.includes(a));
  const rates = (list: Exchange[]) => joinList(list.map((a) => `${a.name} (${feePair(fee(a))})`));
  return [
    `في ${marketName(market)} تتقاضى ${x.name} ${feePair(fx)} (صانع / آخذ).`,
    lower.length ? `أرخص من ${x.name}: ${rates(lower)}.` : `لا يوجد من بين ${altsCount(alts.length)} ما هو أرخص من ${x.name}.`,
    same.length ? `بالرسوم نفسها: ${names(same)}.` : "",
    higher.length ? `أغلى من ${x.name}: ${rates(higher)}.` : "",
    mixed.length ? `أرخص في رسوم الصانع أو الآخذ فقط: ${rates(mixed)}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (market: "spot" | "futures", fa: Fee, fx: Fee) => {
    const where = market === "spot" ? "التداول الفوري" : "العقود الآجلة";
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`رسوم أقل في ${where}: ${feePair(fa)} بدلًا من ${feePair(fx)} (صانع / آخذ)`);
    else if (m < 0 && t === 0) out.push(`رسوم أقل للصانع (Maker) في ${where}: ${fa.maker} بدلًا من ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`رسوم أقل للآخذ (Taker) في ${where}: ${fa.taker} بدلًا من ${fx.taker}`);
    else if (m < 0) out.push(`رسوم أقل للصانع (Maker) في ${where}: ${fa.maker} بدلًا من ${fx.maker} (لكن رسوم الآخذ أعلى)`);
    else if (t < 0) out.push(`رسوم أقل للآخذ (Taker) في ${where}: ${fa.taker} بدلًا من ${fx.taker} (لكن رسوم الصانع أعلى)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`رافعة مالية قصوى أعلى: ${leverageOf(a)}x بدلًا من ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`عقود مفتوحة (Open Interest) أكبر في المشتقات: ${formatBn(a.market.openInterestBn)} مقابل ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`عدد أكبر من أسواق المشتقات: ${a.market.markets} مقابل ${x.market.markets}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`يمكن إضافة كود الإحالة لاحقًا إذا نسيته عند التسجيل (${withoutYes(a.referral.afterSignupShort)})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`توفّر ${joinList(notOffered.map((f) => f.noun))}، وهو ما لا توفّره ${x.name}`);
  if (notFound.length) out.push(`توفّر ${joinList(notFound.map((f) => f.noun))} – ولم نعثر على منتج كهذا في موقع ${x.name} الرسمي`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`منصة للمنطقة الاقتصادية الأوروبية (EEA) مرخّصة بموجب MiCA (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`لا تحظر ${joinList(openWhere.map((c) => c.name))}، حيث تغلق ${x.name} أبوابها`);
  if (regionalWhere.length) out.push(`تقدّم خدماتها في ${joinList(regionalWhere.map((c) => c.name))} عبر منصة إقليمية، حيث تغلق ${x.name} أبوابها`);
  return out;
}

/* ---------------------------------- country --------------------------------- */

/** Plain-text answer to "Which alternatives to x can be used in this country?". */
function countryAnswer(x: Exchange, alts: Exchange[], country: (typeof countryList)[number]): string {
  const c = countries.find((it) => it.key === country.key)!;
  const own = altInfo(x).countries[c.key];
  const g = countryGroups(alts, c.key);
  const note = (a: Exchange) => altInfo(a).countries[c.key].note;
  const withNote = (list: Exchange[]) => list.map((a) => (note(a) ? `${a.name} (${note(a)})` : a.name));
  const ownNote = own.note ? ` (${own.note})` : "";
  const parts: string[] = [];
  if (own.status === "restricted") parts.push(`${c.name} مدرجة في قائمة الدول المحظورة التي تنشرها ${x.name} نفسها.`);
  else if (own.status === "partial") parts.push(`تفرض ${x.name} قيودًا جزئية في ${c.name}${ownNote}.`);
  else if (own.status === "regional") parts.push(`تخدم ${x.name} ${c.residents} عبر منصة إقليمية${ownNote}.`);
  else parts.push(`لا ترد ${c.name} في قائمة الدول المحظورة لدى ${x.name}.`);
  if (g.open.length) parts.push(`لا ترد ${c.name} في ${verb(g.open, "قائمة", "قوائم")} الدول المحظورة لدى ${names(g.open)}.`);
  if (g.regional.length)
    parts.push(`تخدم ${joinList(withNote(g.regional))} ${c.residents} عبر ${verb(g.regional, "منصة إقليمية مستقلة", "منصات إقليمية مستقلة")}.`);
  if (g.partial.length) parts.push(`قيود جزئية: ${withNote(g.partial).join("؛ ")}.`);
  if (g.restricted.length) parts.push(`${c.name} محظورة${own.status === "restricted" ? " أيضًا" : ""} لدى ${names(g.restricted)}.`);
  if (!g.open.length && !g.regional.length) parts.push(`لا يوجد من بين ${altsCount(alts.length)} ما هو مفتوح بالكامل أمام ${c.residents}.`);
  parts.push("قوائم الدول تتغير، وعدم إدراج دولة ما في القائمة لا يضمن توفر كل المنتجات فيها – فالعبرة بشروط المنصة نفسها.");
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `بدائل ${withArabic(x)} التي نقارنها هنا ${platformsCount(alts.length)}: ${names(alts)}. ${picks(alts)} وتطلب جميعها من المستخدمين الجدد التحقق من الهوية (KYC)، ولكل منها قائمتها الخاصة بالدول المحظورة، لذا راجع جدول الدول قبل التسجيل.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `حدّد ما يجب أن يتفوق فيه البديل على ${x.name}`,
      text: `رسوم أقل، أو رافعة مالية أعلى، أو عملات أكثر، أو ببساطة منصة تقبل بلدك: تُظهر الجداول في هذه الصفحة أين يتفوق كل بديل على ${x.name} وأين لا يتفوق.`,
    },
    {
      title: "تأكّد من أن المنصة تقبل بلدك",
      text: "لكل منصة قائمتها الخاصة بالدول المحظورة، وبعضها يوجّهك إلى منصة إقليمية لها منتجاتها وحدودها المختلفة. راجع جدول الدول قبل التسجيل.",
    },
    {
      title: "سجّل عبر رابط الإحالة",
      text: `لا تقبل ${names(signupOnly)} كود الإحالة إلا أثناء التسجيل، أو لا ${agree(signupOnly, "توضّح", "توضّحان")} أي طريقة لإضافته لاحقًا، لذا استخدم الرابط قبل إنشاء الحساب.${later.length ? ` أما ${names(later)} ${agree(later, "فتسمح", "فتسمحان")} بإضافته لاحقًا بشروط.` : ""}`,
    },
    {
      title: "أكمل التحقق من هويتك قبل نقل أموالك",
      text: `تطلب البدائل كلها، وعددها ${alts.length}، من المستخدمين الجدد التحقق من الهوية، ولا يمكنك على معظمها الإيداع أو التداول قبل إتمامه. جهّز جواز السفر أو بطاقة الهوية أو رخصة القيادة.`,
    },
    {
      title: `أغلق مراكزك المفتوحة على ${x.name}`,
      text: `لا يمكن نقل مراكز العقود الآجلة (Futures) والتداول بالهامش (Margin) من منصة إلى أخرى. أغلقها على ${x.name} أولًا، أو أبقِ الحساب مفتوحًا حتى تنتهي.`,
    },
    {
      title: "اسحب أموالك إلى عنوان الإيداع الجديد",
      text: "انسخ عنوان الإيداع من المنصة الجديدة، واختر العملة نفسها والشبكة نفسها على الطرفين، وأرسل مبلغًا تجريبيًا صغيرًا أولًا. فالأموال المحوّلة عبر شبكة خاطئة قد تضيع.",
    },
    {
      title: `قرّر ما سيحدث لحسابك على ${x.name}`,
      text: `يمكنك الاحتفاظ به – فالحسابات على المنصات المختلفة مستقلة بعضها عن بعض. أما مستوى رسومك وإحالتك ومكافآتك غير المستخدمة فتبقى على ${x.name} ولا تنتقل إلى المنصة الجديدة.`,
    },
  ];
}

/** All questions an alternatives page answers, grouped for display. Answers are built from the data files. */
function buildAlternativesFaqs(x: Exchange, alts: Exchange[]): AltFaqGroup[] {
  const n = alts.length;
  const date = prettyDate(site.lastReviewed);
  const lowF = lowestFutures(alts);
  const lowS = lowestSpot(alts);
  const highest = highestLeverage(alts);
  const oi = largestOpenInterest(alts);
  const cheaperF = alts.filter((a) => cheaper(a.futuresFees, x.futuresFees));
  const cheaperS = alts.filter((a) => cheaper(a.spotFees, x.spotFees));
  const mica = withMica(alts);
  const noMica = alts.filter((a) => !altInfo(a).mica);
  const xInfo = altInfo(x);

  const choosing: Faq[] = [
    {
      q: `ما أفضل بديل لمنصة ${x.name}؟`,
      a: `لا يوجد بديل واحد لمنصة ${x.name} هو الأفضل للجميع – فالأمر يتوقف على سبب رغبتك في الانتقال. ${picks(alts)} وتقارن هذه الصفحة البدائل كلها، وعددها ${n}، بمنصة ${x.name} من حيث الرسوم والرافعة المالية والمنتجات والتوفر في الدول والتحقق من الهوية، بأرقام من مواقع المنصات نفسها راجعناها في ${date}.`,
    },
    {
      q: `ما المنصات المشابهة لمنصة ${x.name}؟`,
      a: `أقرب المنصات إلى ${x.name} هي ${names(alts)}. فهي مثل ${x.name} منصات تداول مركزية تتيح التداول الفوري (Spot) وتداول العقود الآجلة (Futures) بالرافعة المالية من حساب واحد، ولكل منها برنامج إحالة للمستخدمين الجدد. وتختلف في الرسوم والحد الأقصى للرافعة المالية وعدد الأصول المدرجة والدول التي تقبلها.`,
    },
    {
      q: `ما أكبر بديل لمنصة ${x.name}؟`,
      a: `بحسب حجم العقود المفتوحة (Open Interest) في سوق المشتقات على CoinMarketCap (${prettyDate(site.marketDataDate)})، تُعدّ ${names(oi)} الأكبر من بين ${altsCount(n)} بقيمة ${formatBn(oi[0].market.openInterestBn)}. أما ${x.name} نفسها فبلغت عقودها المفتوحة ${formatBn(x.market.openInterestBn)}.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `ما بديل ${x.name} الأقل رسومًا؟`,
      a: `تقدّم ${names(lowF)} أدنى الرسوم الأساسية على العقود الآجلة (Futures) من بين ${altsCount(n)}: ${feePair(lowF[0].futuresFees)} (صانع / آخذ). وفي التداول الفوري (Spot) تكون ${names(lowS)} الأرخص برسوم ${feePair(lowS[0].spotFees)}. أما ${x.name} فتتقاضى ${feePair(x.futuresFees)} على العقود الآجلة و${feePair(x.spotFees)} على التداول الفوري.${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} هذه رسوم المستوى الأساسي، وتخفّضها مستويات VIP وتوكنات المنصات أكثر.`,
    },
    {
      q: `ما المنصات الأرخص من ${x.name}؟`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `في العقود الدائمة (Perpetual): ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}، مقابل ${feePair(x.futuresFees)} على ${x.name}.` : `في العقود الدائمة (Perpetual) لا ينزل أي بديل من بين ${altsCount(n)} عن رسوم ${x.name} البالغة ${feePair(x.futuresFees)}.`} ${cheaperS.length ? `وفي التداول الفوري (Spot): ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}، مقابل ${feePair(x.spotFees)} على ${x.name}.` : `وفي التداول الفوري (Spot) لا ينزل أيٌّ منها عن رسوم ${x.name} البالغة ${feePair(x.spotFees)}.`} جميع الأرقام لرسوم الصانع / الآخذ على المستوى الأساسي.`
          : `من بين ${altsCount(n)}، لا ينزل أيٌّ منها عن رسوم ${x.name} على المستوى الأساسي: تتقاضى ${x.name} ${feePair(x.futuresFees)} على العقود الآجلة و${feePair(x.spotFees)} على التداول الفوري (صانع / آخذ)، وهي أدنى الرسوم في هذه المقارنة. ومع ذلك تستحق البدائل نظرة لأسباب أخرى – الترخيص والتنظيم أو المنتجات أو الدول التي تقبلها.`,
    },
    {
      q: `ما بديل ${x.name} الذي يتيح أعلى رافعة مالية؟`,
      a: `تتيح ${names(highest)} أعلى رافعة مالية من بين ${altsCount(n)}: ${highest[0].maxLeverage}. أما البقية فهي: ${alts
        .filter((a) => !highest.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join("، ")}. وتتيح ${x.name} نفسها رافعة ${x.maxLeverage}. والرافعة المالية العالية ترفع خطر التصفية بشدة.`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `ما بدائل ${x.name} المتاحة في ${c.name}؟`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `هل يوجد بديل لمنصة ${x.name} بدون التحقق من الهوية (KYC)؟`,
      a: `لا يوجد من بين ${altsCount(n)} ما يستغني عن التحقق من الهوية، فكل منها يطلبه من المستخدمين الجدد: ${alts.map((a) => `${a.name} – ${a.signup.kycShort}`).join("؛ ")}. وفي ${x.name} نفسها: ${stop(x.signup.kycShort)}`,
    },
    {
      q: `ما بدائل ${x.name} المرخّصة في الاتحاد الأوروبي بموجب MiCA؟`,
      a: `${mica.length ? `تذكر ${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} ${verb(mica, "كيانًا مرخّصًا", "كيانات مرخّصة")} بموجب MiCA للمقيمين في المنطقة الاقتصادية الأوروبية (EEA).` : `لا تذكر أي منصة من بين ${altsCount(n)} كيانًا مرخّصًا بموجب MiCA.`}${noMica.length ? ` ولا تذكر ${names(noMica)} أي ترخيص بموجب MiCA في صفحاتها.` : ""} ${xInfo.mica ? `وبالنسبة إلى ${x.name} نفسها: ${stop(xInfo.mica)}` : `ولا تذكر ${x.name} نفسها أي كيان كهذا.`} وعادةً ما يكون للمنصة الإقليمية نطاق منتجات ورسوم وحدود خاص بها.`,
    },
    {
      q: `ما أكثر بدائل ${x.name} أمانًا؟`,
      a: `لا توجد منصة مركزية خالية من المخاطر، لذا فالمقارنة المنصفة هي في ما تنشره كل منصة عن نفسها. ${alts.map((a) => `${a.name}: إثبات الاحتياطيات – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "لا تذكر صندوق حماية."}`).join(" ")} ولا تُبقِ على أي منصة إلا الأموال التي تتداول بها فعليًا.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `ما بدائل ${x.name} التي توفّر ${f.term}؟`,
      a: `${yes.length ? `تتوفر خدمة ${f.noun} على ${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))}.` : `لا تعرض أي منصة من بين ${altsCount(n)} خدمة ${f.noun} على موقعها.`}${no.length ? ` ولا توفّر ${names(no)} هذه الخدمة.` : ""}${unknown.length ? ` ولم نعثر خلال مراجعتنا على منتج كهذا في ${verb(unknown, "موقع", "مواقع")} ${names(unknown)}.` : ""} ${own === true ? `وتوفّرها ${x.name} نفسها أيضًا.` : own === false ? `أما ${x.name} نفسها فلا توفّرها.` : `أما ${x.name} نفسها فلا تعرض منتجًا كهذا على موقعها.`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `ما بديل ${x.name} الذي يُدرج أكبر عدد من العملات؟`,
      a: `بحسب الأرقام التي تعلنها المنصات نفسها: ${alts.map((a) => `${a.name} – ${a.assets}`).join("؛ ")}. ${x.name}: ${stop(x.assets)} وتختلف طريقة العدّ من منصة إلى أخرى – فبعضها يعدّ العملات وبعضها يعدّ أزواج التداول – لذا لا تصلح هذه الأرقام للمقارنة المباشرة.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `كيف أنتقل من ${x.name} إلى منصة أخرى؟`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `هل يمكنني الاحتفاظ بحسابي على ${x.name} عند فتح حساب على منصة أخرى؟`,
      a: `نعم. المنصات شركات منفصلة، لذا لا يؤثر حسابك على إحداها في حسابك على الأخرى، ويمكنك استخدام الحسابين جنبًا إلى جنب. لكن ما يرتبط بالحساب لا ينتقل معك: إحالتك على ${x.name} ومستوى رسومك ومكافآت الترحيب وسجل تداولاتك تبقى كلها على ${x.name}.`,
    },
    {
      q: `هل يمكنني نقل مراكز العقود الآجلة المفتوحة من ${x.name} إلى منصة أخرى؟`,
      a: `لا. مركز العقود الآجلة موجود فقط على المنصة التي فُتح عليها. للانتقال، أغلق المركز على ${x.name}، واسحب أموالك، ثم افتح مركزًا جديدًا على المنصة الأخرى – بالسعر والرسوم المعمول بها هناك.`,
    },
    {
      q: `هل لبدائل ${x.name} أكواد إحالة؟`,
      a: `نعم، لدى البدائل كلها، وعددها ${n}، أكواد إحالة: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("؛ ")}. استخدام كود الإحالة مجاني ولا يرفع رسوم التداول عليك.`,
    },
    {
      q: `هل يمكنني إضافة كود الإحالة لاحقًا على أحد بدائل ${x.name}؟`,
      a: `${alts.map((a) => `${a.name}: ${stop(a.referral.afterSignupShort)}`).join(" ")} والطريقة الآمنة على أي منصة هي التسجيل عبر رابط الإحالة.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `هل ${a.name} أفضل من ${x.name}؟`,
      a: `${ahead.length ? `تتفوق ${a.name} على ${x.name} في النقاط التالية: ${ahead.join("؛ ")}.` : `في النقاط التي نقارنها، لا تملك ${a.name} أي أفضلية قابلة للقياس على ${x.name}.`} ${behind.length ? `أما ${x.name} فتتفوق في: ${behind.join("؛ ")}.` : `ولا تتفوق ${x.name} في أيٍّ منها.`} ${a.name} خيار مناسب لك إذا ${altInfo(a).chooseIf[0]}.`,
    };
  });

  return [
    { id: "choosing", title: `اختيار بديل لمنصة ${x.name}`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "الرسوم والرافعة المالية", faqs: fees },
    { id: "countries", title: "الدول والتحقق من الهوية (KYC) والتنظيم", faqs: countryFaqs },
    { id: "features", title: "المنتجات والعملات", faqs: featureFaqs },
    { id: "switching", title: `الانتقال من ${x.name} وأكواد الإحالة`, faqs: switching },
    { id: "versus", title: `${x.name} مقابل البدائل`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `ما أفضل بدائل ${x.name}؟`,
    a: `${picks(alts)} وتقارن صفحة بدائل ${x.name} لدينا البدائل كلها، وعددها ${alts.length}، بمنصة ${x.name} من حيث الرسوم والرافعة المالية والمنتجات والتوفر في الدول والتحقق من الهوية.`,
  };
}

export const ar: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "نعم", no: "لا", notFound: "غير موجود على موقع المنصة" },
  names,
  feeSentence,
  feeSummary,
  advantages,
  countryAnswer,
  quickAnswer,
  switchSteps,
  buildAlternativesFaqs,
  alternativesTeaserFaq,
};
