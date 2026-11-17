/**
 * The sentences of the comparison pages in Ukrainian. Same functions and the same logic as `./en.ts`, written in
 * Ukrainian grammar.
 *
 * Wording: "біржа", "альтернативи Binance", "реферальний код", "комісії", "мейкер / тейкер", "верифікація особи",
 * address "ви". Exchange names stay Latin and are never declined; a bare name agrees with "біржа" (feminine:
 * "Binance дешевша"), several names take the plural, and `verb()` picks the singular or plural form. Case shows
 * only through a preposition ("на", "від", "для", "за", "з") or the position after a noun ("комісії Binance");
 * nothing is glued to a name, and "та" joins two names. Countries keep their case forms in `countryWords`:
 * `name` and `short` are nominative, `residents` is "мешканців Канади" (accusative = genitive). The United Arab
 * Emirates are "ОАЕ" after the first mention; the question and the advantages list use the full form.
 * Counted nouns go through `slavicCount` (after "з" / "серед" every number from 2 takes the third form).
 * Fee rates arrive in the site's notation (0,02%); leverage stays 150x; counts through `toLocaleString("uk-UA")`.
 *
 * Capitals: inserted data texts keep their first letter when it is Latin, a digit or an abbreviation
 * ("BTC", "OKX Europe", "ОАЕ"); a capital Cyrillic first letter of a word is lower-cased inside a sentence
 * ("Так – …" → "так – …", "До 150x …" → "до 150x …", "Ви хочете …" → "ви хочете …").
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee, Step } from "@/data/exchanges";
import { countryList, featureList } from "@/data/alternatives";
import type { CountryKey, CountryStatus, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { withReading } from "@/i18n/name-readings";
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
import { slavicCount } from "../slavic-count";
import type { SlavicForms } from "../slavic-count";
import type { AltFaqGroup, CompareText } from "./en";

const locale = "uk";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const count = (n: number) => n.toLocaleString("uk-UA");

/* --------------------------------- counting --------------------------------- */

/** "6 альтернатив" – nominative and accusative plural (also after "усі"). */
const altsNom: SlavicForms = ["альтернатива", "альтернативи", "альтернатив"];
/** "з 6 альтернатив", "серед 6 альтернатив" – after "з" / "серед" (from 2 always the third form). */
const altsGen: SlavicForms = ["альтернативи", "альтернатив", "альтернатив"];
/** "6 бірж" – nominative. */
const exchangesNom: SlavicForms = ["біржа", "біржі", "бірж"];
/** "серед цих 6 бірж" – after "серед". */
const exchangesGen: SlavicForms = ["біржі", "бірж", "бірж"];

/* -------------------------------- capitals -------------------------------- */

/**
 * Lower-cases the first letter when it is a capital Cyrillic letter that starts an ordinary word
 * ("Так – …" → "так – …", "Обов'язкова …" → "обов'язкова …"). A Latin name, a digit or an abbreviation
 * ("BTC", "OKX", "ОАЕ", "ЄС") keeps its capital.
 */
const lc = (s: string) => (/^[А-ЩЬЮЯЄІЇҐ](?![А-ЩЬЮЯЄІЇҐ])/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s);
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Ends a data text with a full stop unless it already ends a sentence. */
const stop = (s: string) => (/[.!?…]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** A data text without a final full stop – for texts that code joins itself ("р." at the end is kept). */
const bare = (s: string) => s.trim().replace(/(?<!\sр)\.$/, "");
/** The `pick` lines of several exchanges, joined with ". " and closed. */
const picks = (list: Exchange[]) => `${list.map((a) => bare(altInfo(a).pick)).join(". ")}.`;
/** `afterSignupShort` without its leading "Так – ". */
const withoutYes = (s: string) => s.replace(/^Так\s*–\s*/, "");

/* -------------------------------- vocabulary -------------------------------- */

/**
 * `label` for the tables, `noun` as the object of "пропонує" in sentences (accusative: "пропонує торгових ботів"),
 * `gen` after a negation ("не показує торгових ботів").
 */
const featureWords: Record<FeatureKey, { label: string; noun: string; gen: string }> = {
  copyTrading: { label: "Копітрейдинг", noun: "копітрейдинг", gen: "копітрейдингу" },
  tradingBots: { label: "Торгові боти", noun: "торгових ботів", gen: "торгових ботів" },
  options: { label: "Опціони", noun: "торгівлю опціонами", gen: "торгівлі опціонами" },
  demoTrading: { label: "Демоторгівля", noun: "демоторгівлю", gen: "демоторгівлі" },
  margin: { label: "Маржинальна торгівля на споті", noun: "маржинальну торгівлю на споті", gen: "маржинальної торгівлі на споті" },
  p2p: { label: "P2P-торгівля", noun: "P2P-торгівлю", gen: "P2P-торгівлі" },
  fiat: {
    label: "Купівля через картку / банк",
    noun: "купівлю криптовалюти карткою або банківським переказом",
    gen: "купівлі криптовалюти карткою або банківським переказом",
  },
  earn: { label: "Earn / стейкінг", noun: "продукти Earn", gen: "продуктів Earn" },
  launchpad: { label: "Launchpad / Launchpool", noun: "платформу Launchpad", gen: "платформи Launchpad" },
  web3Wallet: { label: "Web3-гаманець", noun: "некастодіальний Web3-гаманець", gen: "некастодіального Web3-гаманця" },
  card: { label: "Криптокартка", noun: "криптокартку", gen: "криптокартки" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/**
 * Case forms of the countries: `name` nominative, `short` for the tables, `gen` genitive, `acc` accusative,
 * `inName` "in …". `fullGen` / `fullIn` are the forms of a first mention (they differ only for the UAE).
 */
type CountryWords = { name: string; short: string; gen: string; acc: string; inName: string; fullGen?: string; fullIn?: string };
const countryWords: Record<CountryKey, CountryWords> = {
  us: { name: "США", short: "США", gen: "США", acc: "США", inName: "у США" },
  uk: { name: "Велика Британія", short: "Велика Британія", gen: "Великої Британії", acc: "Велику Британію", inName: "у Великій Британії" },
  ca: { name: "Канада", short: "Канада", gen: "Канади", acc: "Канаду", inName: "у Канаді" },
  de: { name: "Німеччина", short: "Німеччина", gen: "Німеччини", acc: "Німеччину", inName: "у Німеччині" },
  fr: { name: "Франція", short: "Франція", gen: "Франції", acc: "Францію", inName: "у Франції" },
  nl: { name: "Нідерланди", short: "Нідерланди", gen: "Нідерландів", acc: "Нідерланди", inName: "у Нідерландах" },
  es: { name: "Іспанія", short: "Іспанія", gen: "Іспанії", acc: "Іспанію", inName: "в Іспанії" },
  it: { name: "Італія", short: "Італія", gen: "Італії", acc: "Італію", inName: "в Італії" },
  au: { name: "Австралія", short: "Австралія", gen: "Австралії", acc: "Австралію", inName: "в Австралії" },
  jp: { name: "Японія", short: "Японія", gen: "Японії", acc: "Японію", inName: "в Японії" },
  sg: { name: "Сінгапур", short: "Сінгапур", gen: "Сінгапуру", acc: "Сінгапур", inName: "у Сінгапурі" },
  hk: { name: "Гонконг", short: "Гонконг", gen: "Гонконгу", acc: "Гонконг", inName: "у Гонконгу" },
  in: { name: "Індія", short: "Індія", gen: "Індії", acc: "Індію", inName: "в Індії" },
  ae: {
    name: "Об'єднані Арабські Емірати",
    short: "ОАЕ",
    gen: "ОАЕ",
    acc: "ОАЕ",
    inName: "в ОАЕ",
    fullGen: "Об'єднаних Арабських Еміратів",
    fullIn: "в Об'єднаних Арабських Еміратах (ОАЕ)",
  },
};
/** `residents`: "мешканців Канади" – the object of "обслуговує" and the form after "для". */
const countries = countryList.map((c) => {
  const w = countryWords[c.key];
  return {
    key: c.key,
    name: w.name,
    short: w.short,
    gen: w.gen,
    acc: w.acc,
    inName: w.inName,
    fullGen: w.fullGen ?? w.gen,
    fullIn: w.fullIn ?? w.inName,
    residents: `мешканців ${w.gen}`,
  };
});

const statusLabel: Record<CountryStatus, string> = {
  restricted: "Обмежено",
  regional: "Регіональний сайт",
  partial: "Частково",
  open: "Не обмежено",
};

/** The market of a fee comparison: "на споті" / "на безстрокових ф'ючерсах". */
const onMarket = (market: "spot" | "futures") => (market === "spot" ? "на споті" : "на безстрокових ф'ючерсах");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const where = onMarket(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} та ${x.name} стягують однакові стандартні комісії ${where}: ${fa.maker} мейкер / ${fa.taker} тейкер.`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} дешевша і для мейкерів, і для тейкерів`
      : mm !== 0
        ? `${who} дешевша для мейкерів, а тейкери платять однаково`
        : `${who} дешевша для тейкерів, а мейкери платять однаково`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} дешевша для мейкерів, а ${x.name} – для тейкерів`
          : `${x.name} дешевша для мейкерів, а ${a.name} – для тейкерів`;
  return `${cap(where)} ${a.name} стягує ${fa.maker} мейкер / ${fa.taker} тейкер, а ${x.name} – ${fx.maker} / ${fx.taker}, тож ${verdict}.`;
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
    `${cap(onMarket(market))} ${x.name} стягує ${feePair(fx)} (мейкер / тейкер).`,
    lower.length ? `Дешевші: ${rates(lower)}.` : `Жодна з ${slavicCount(alts.length, altsGen)} не дешевша.`,
    same.length ? `Ті самі ставки: ${names(same)}.` : "",
    higher.length ? `Дорожчі: ${rates(higher)}.` : "",
    mixed.length ? `Дешевші лише для мейкерів або лише для тейкерів: ${rates(mixed)}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (where: string, fa: Fee, fx: Fee) => {
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`Нижчі комісії ${where}: ${feePair(fa)} замість ${feePair(fx)} (мейкер / тейкер)`);
    else if (m < 0 && t === 0) out.push(`Нижча комісія мейкера ${where}: ${fa.maker} замість ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`Нижча комісія тейкера ${where}: ${fa.taker} замість ${fx.taker}`);
    else if (m < 0) out.push(`Нижча комісія мейкера ${where}: ${fa.maker} замість ${fx.maker} (але вища комісія тейкера)`);
    else if (t < 0) out.push(`Нижча комісія тейкера ${where}: ${fa.taker} замість ${fx.taker} (але вища комісія мейкера)`);
  };
  fee("на споті", a.spotFees, x.spotFees);
  fee("на ф'ючерсах", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Вище максимальне кредитне плече: ${leverageOf(a)}x замість ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Більший відкритий інтерес за деривативами: ${formatBn(a.market.openInterestBn)} порівняно з ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`Більше ринків деривативів: ${count(a.market.markets)} порівняно з ${count(x.market.markets)}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`Забутий реферальний код ще можна прив'язати (${lc(withoutYes(bare(a.referral.afterSignupShort)))})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`Пропонує ${joinList(notOffered.map((f) => f.noun))}, а ${x.name} – ні`);
  if (notFound.length)
    out.push(
      `Пропонує ${joinList(notFound.map((f) => f.noun))} – на власному сайті ${x.name} ми ${verb(notFound, "такого продукту", "таких продуктів")} не знайшли`,
    );

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`Платформа для ЄЕЗ з дозволом за MiCA (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length)
    out.push(`Не обмежує доступ для мешканців ${joinList(openWhere.map((c) => c.fullGen))}, тоді як ${x.name} там недоступна`);
  if (regionalWhere.length)
    out.push(
      `Обслуговує мешканців ${joinList(regionalWhere.map((c) => c.fullGen))} через регіональну платформу, тоді як ${x.name} там недоступна`,
    );
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
  if (own.status === "restricted") parts.push(`${x.name} вносить ${c.acc} до власного списку країн з обмеженнями.`);
  else if (own.status === "partial") parts.push(`${x.name} частково обмежує доступ ${c.inName}${ownNote}.`);
  else if (own.status === "regional") parts.push(`${x.name} обслуговує ${c.residents} через регіональну платформу${ownNote}.`);
  else parts.push(`${x.name} не вносить ${c.acc} до списку країн з обмеженнями.`);
  if (g.open.length)
    parts.push(
      `${names(g.open)} ${verb(g.open, "не вносить", "не вносять")} ${c.acc} до ${verb(g.open, "свого списку", "своїх списків")} країн з обмеженнями.`,
    );
  if (g.regional.length)
    parts.push(
      `${joinList(withNote(g.regional))} ${verb(g.regional, "обслуговує", "обслуговують")} ${c.residents} через ${verb(g.regional, "окрему регіональну платформу", "окремі регіональні платформи")}.`,
    );
  if (g.partial.length) parts.push(`Частково обмежено: ${withNote(g.partial).join("; ")}.`);
  if (g.restricted.length)
    parts.push(
      `${names(g.restricted)}${own.status === "restricted" ? " також" : ""} ${verb(g.restricted, "вносить", "вносять")} ${c.acc} до ${verb(g.restricted, "свого списку", "своїх списків")} країн з обмеженнями.`,
    );
  if (!g.open.length && !g.regional.length) parts.push(`Жодна з ${slavicCount(alts.length, altsGen)} не відкрита повністю для ${c.residents}.`);
  parts.push(
    "Списки країн змінюються, і якщо країни немає в списку, це ще не гарантує, що там доступні всі продукти: остаточно вирішують умови самої біржі.",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `На цій сторінці порівняно ${slavicCount(alts.length, altsNom)} ${withReading(x, locale)}: ${names(alts)}. ${picks(alts)} Усі ${slavicCount(alts.length, exchangesNom)} вимагають від нових користувачів пройти верифікацію особи (KYC), і кожна має власний список країн з обмеженнями, тож перед реєстрацією перегляньте таблицю країн.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `Визначте, що має бути краще, ніж на ${x.name}`,
      text: `Нижчі комісії, вище кредитне плече, більше монет або просто біржа, яка приймає користувачів з вашої країни: таблиці на цій сторінці показують, у чому кожна альтернатива випереджає біржу ${x.name}, а в чому ні.`,
    },
    {
      title: "Перевірте, чи приймає біржа користувачів з вашої країни",
      text: "Кожна біржа має власний список країн з обмеженнями, а деякі перенаправляють на регіональну платформу з іншими продуктами та лімітами. Перегляньте таблицю країн перед реєстрацією.",
    },
    {
      title: "Зареєструйтеся за реферальним посиланням",
      text: `${names(signupOnly)} ${verb(signupOnly, "приймає", "приймають")} реферальний код лише під час реєстрації або не ${verb(signupOnly, "описує", "описують")} способу додати його пізніше, тому скористайтеся посиланням ще до створення акаунта.${later.length ? ` ${names(later)} ${verb(later, "дозволяє", "дозволяють")} прив'язати код і після реєстрації – за певних умов.` : ""}`,
    },
    {
      title: "Пройдіть верифікацію, перш ніж переказувати кошти",
      text: `Усі ${slavicCount(alts.length, altsNom)} вимагають від нових користувачів пройти верифікацію особи, і на більшості з них депозити або торгівля залишаються заблокованими, доки верифікацію не завершено. Підготуйте паспорт, ID-картку або посвідчення водія.`,
    },
    {
      title: `Закрийте відкриті позиції на ${x.name}`,
      text: `Ф'ючерсні та маржинальні позиції не можна перенести з однієї біржі на іншу. Спочатку закрийте їх на ${x.name} або залиште акаунт, доки вони не завершаться.`,
    },
    {
      title: "Виведіть кошти на нову адресу для депозиту",
      text: "Скопіюйте адресу для депозиту на новій біржі, оберіть ту саму монету й ту саму мережу на обох біржах і спершу надішліть невелику тестову суму. Переказ через неправильну мережу може бути втрачено.",
    },
    {
      title: `Вирішіть, що робити з акаунтом на ${x.name}`,
      text: `Його можна залишити – акаунти на різних біржах не залежать один від одного. Рівень комісій, реферальна прив'язка та невикористані винагороди залишаються на ${x.name} і не переносяться.`,
    },
  ];
}

/** All questions an alternatives page answers, grouped for display. Answers are built from the data files. */
function buildAlternativesFaqs(x: Exchange, alts: Exchange[]): AltFaqGroup[] {
  const n = alts.length;
  const date = prettyDate(site.lastReviewed);
  const lowF = lowestFutures(alts);
  const lowS = lowestSpot(alts);
  const hi = highestLeverage(alts);
  const oi = largestOpenInterest(alts);
  const cheaperF = alts.filter((a) => cheaper(a.futuresFees, x.futuresFees));
  const cheaperS = alts.filter((a) => cheaper(a.spotFees, x.spotFees));
  const mica = withMica(alts);
  const noMica = alts.filter((a) => !altInfo(a).mica);
  const xInfo = altInfo(x);
  /** "з 6 альтернатив", "серед 6 альтернатив" */
  const ofN = slavicCount(n, altsGen);

  const choosing: Faq[] = [
    {
      q: `Яка найкраща альтернатива ${x.name}?`,
      a: `Єдиної найкращої альтернативи ${x.name} немає – усе залежить від того, чому ви хочете перейти на іншу біржу. ${picks(alts)} На цій сторінці всі ${slavicCount(n, altsNom)} порівняно з ${x.name} за комісіями, кредитним плечем, продуктами, доступністю в різних країнах і верифікацією; цифри взято з сайтів самих бірж (перевірено ${date}).`,
    },
    {
      q: `Які біржі схожі на ${x.name}?`,
      a: `Найближчі аналоги ${x.name} – ${names(alts)}. Так само, як ${x.name}, це централізовані біржі, де спот і ф'ючерси з кредитним плечем доступні в одному акаунті, а для нових користувачів діє реферальна програма. Вони відрізняються комісіями, максимальним кредитним плечем, кількістю активів у лістингу та переліком країн, з яких приймають користувачів.`,
    },
    {
      q: `Яка найбільша альтернатива ${x.name}?`,
      a: `За відкритим інтересом на ринку деривативів, за даними CoinMarketCap (${prettyDate(site.marketDataDate)}), ${verb(oi, "найбільша", "найбільші")} серед ${ofN} – ${names(oi)} з показником ${formatBn(oi[0].market.openInterestBn)}. Відкритий інтерес самої ${x.name} становив ${formatBn(x.market.openInterestBn)}.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Яка альтернатива ${x.name} має найнижчі комісії?`,
      a: `${names(lowF)} ${verb(lowF, "має", "мають")} найнижчі стандартні комісії на ф'ючерсах серед ${ofN}: ${feePair(lowF[0].futuresFees)} (мейкер / тейкер). На споті ${verb(lowS, "найдешевша", "найдешевші")} ${names(lowS)} – ${feePair(lowS[0].spotFees)}. ${x.name} стягує ${feePair(x.futuresFees)} на ф'ючерсах і ${feePair(x.spotFees)} на споті.${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} Це ставки стандартного рівня; VIP-рівні та власні токени бірж знижують їх ще більше.`,
    },
    {
      q: `Які біржі дешевші за ${x.name}?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `На безстрокових ф'ючерсах: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, порівняно з ${feePair(x.futuresFees)} на ${x.name}.` : `На безстрокових ф'ючерсах жодна з ${ofN} не пропонує ставок, нижчих за ${feePair(x.futuresFees)} на ${x.name}.`} ${cheaperS.length ? `На споті: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, порівняно з ${feePair(x.spotFees)} на ${x.name}.` : `На споті жодна з них не пропонує ставок, нижчих за ${feePair(x.spotFees)} на ${x.name}.`} Усі ставки вказано для мейкера / тейкера на стандартному рівні.`
          : `На стандартному рівні жодна з ${ofN} не дешевша за ${x.name}: ${x.name} стягує ${feePair(x.futuresFees)} на ф'ючерсах і ${feePair(x.spotFees)} на споті (мейкер / тейкер) – це найнижчі ставки в цьому порівнянні. Альтернативи варто розглянути з інших причин: регулювання, продукти або країни, з яких вони приймають користувачів.`,
    },
    {
      q: `Яка альтернатива ${x.name} пропонує найвище кредитне плече?`,
      a: `${names(hi)} ${verb(hi, "пропонує", "пропонують")} найвище кредитне плече серед ${ofN}: ${lc(bare(hi[0].maxLeverage))}. Решта: ${alts
        .filter((a) => !hi.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}. На самій ${x.name} – ${lc(bare(x.maxLeverage))}. Високе плече різко підвищує ризик ліквідації.`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `Які альтернативи ${x.name} доступні ${c.fullIn}?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `Чи є альтернатива ${x.name} без верифікації (KYC)?`,
      a: `Серед цих ${slavicCount(n, exchangesGen)} – ні. Кожна з них вимагає від нових користувачів пройти верифікацію особи: ${alts.map((a) => `${a.name} – ${lc(bare(a.signup.kycShort))}`).join("; ")}. На самій ${x.name} – ${stop(lc(x.signup.kycShort))}`,
    },
    {
      q: `Які альтернативи ${x.name} мають дозвіл за MiCA в ЄС?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} ${verb(mica, "вказує", "вказують")} юридичну особу з дозволом за MiCA для мешканців Європейської економічної зони (ЄЕЗ).` : `Жодна з ${ofN} не вказує юридичної особи з дозволом за MiCA.`}${noMica.length ? ` ${names(noMica)} ${verb(noMica, "не вказує", "не вказують")} на власних сторінках жодного дозволу за MiCA.` : ""} ${xInfo.mica ? `У самої ${x.name}: ${stop(xInfo.mica)}` : `Сама ${x.name} такої юридичної особи не вказує.`} Регіональна платформа зазвичай має власний набір продуктів, комісії та ліміти.`,
    },
    {
      q: `Яка альтернатива ${x.name} найбезпечніша?`,
      a: `Жодна централізована біржа не позбавлена ризиків, тому чесно порівняти можна лише те, що кожна з них публікує. ${alts.map((a, i) => `${a.name}: підтвердження резервів${i === 0 ? " (Proof of Reserves)" : ""} – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "Фонд захисту не вказано."}`).join(" ")} На будь-якій біржі тримайте лише ті кошти, якими активно торгуєте.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    const withNote = (a: Exchange) => {
      const note = altInfo(a).features[key].note;
      return note ? `${a.name} (${lc(bare(note))})` : a.name;
    };
    return {
      q: `Які альтернативи ${x.name} пропонують ${f.noun}?`,
      a: `${yes.length ? `${joinList(yes.map(withNote))} ${verb(yes, "пропонує", "пропонують")} ${f.noun}.` : `Жодна з ${ofN} не показує ${f.gen} на власному сайті.`}${no.length ? ` ${names(no)} ${verb(no, "не пропонує", "не пропонують")} такого продукту.` : ""}${unknown.length ? ` На ${verb(unknown, "сайті", "сайтах")} ${names(unknown)} під час перевірки ми такого продукту не знайшли.` : ""} ${own === true ? `На самій ${x.name} такий продукт теж є.` : own === false ? `На самій ${x.name} такого продукту немає.` : `На сайті самої ${x.name} такого продукту не видно.`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `Яка альтернатива ${x.name} має найбільше монет?`,
      a: `За даними самих бірж: ${alts.map((a) => `${a.name} – ${bare(a.assets)}`).join("; ")}. ${x.name}: ${stop(x.assets)} Біржі рахують по-різному: одні – монети, інші – торгові пари, тому ці цифри не можна порівнювати напряму.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `Як перейти з ${x.name} на іншу біржу?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `Чи можна зберегти акаунт на ${x.name}, якщо відкрити акаунт на іншій біржі?`,
      a: `Так. Біржі – окремі компанії, тому акаунт на одній ніяк не впливає на акаунт на іншій, і обома можна користуватися паралельно. Не переноситься все, що прив'язано до акаунта: реферальна прив'язка на ${x.name}, рівень комісій, вітальні винагороди та історія торгівлі залишаються на ${x.name}.`,
    },
    {
      q: `Чи можна перенести відкриті ф'ючерсні позиції з ${x.name} на іншу біржу?`,
      a: `Ні. Ф'ючерсна позиція існує лише на тій біржі, де її відкрито. Щоб перейти, закрийте позицію на ${x.name}, виведіть кошти й відкрийте нову позицію на іншій біржі – за ціною та комісіями, які діють там.`,
    },
    {
      q: `Чи мають альтернативи ${x.name} реферальні коди?`,
      a: `Так, коди є в усіх ${n}: ${alts.map((a) => `${a.name} ${a.referralCode} (${lc(bare(a.feeDiscount || a.bonusHeadline))})`).join("; ")}. Користуватися реферальним кодом безкоштовно, і він не підвищує ваші торгові комісії.`,
    },
    {
      q: `Чи можна додати реферальний код пізніше, якщо обрати альтернативу ${x.name}?`,
      a: `${alts.map((a) => `${a.name}: ${lc(bare(a.referral.afterSignupShort))}`).join(". ")}. Найнадійніше на будь-якій біржі – реєструватися за реферальним посиланням.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `Чи краща ${a.name} за ${x.name}?`,
      a: `${ahead.length ? `${a.name} випереджає біржу ${x.name} за такими пунктами: ${ahead.map(lc).join("; ")}.` : `За пунктами, які ми порівнюємо, ${a.name} не має вимірної переваги над ${x.name}.`} ${behind.length ? `${x.name} попереду за такими пунктами: ${behind.map(lc).join("; ")}.` : `У жодному з цих пунктів ${x.name} не попереду.`} ${a.name} вам підійде, якщо ${lc(bare(altInfo(a).chooseIf[0]))}.`,
    };
  });

  return [
    { id: "choosing", title: `Як обрати альтернативу ${x.name}`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "Комісії та кредитне плече", faqs: fees },
    { id: "countries", title: "Країни, KYC і регулювання", faqs: countryFaqs },
    { id: "features", title: "Продукти та монети", faqs: featureFaqs },
    { id: "switching", title: `Перехід з ${x.name} та реферальні коди`, faqs: switching },
    { id: "versus", title: `${x.name} порівняно з альтернативами`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `Які найкращі альтернативи ${x.name}?`,
    a: `${picks(alts)} На нашій сторінці про альтернативи ${x.name} усі ${slavicCount(alts.length, altsNom)} порівняно з ${x.name} за комісіями, кредитним плечем, продуктами, доступністю в різних країнах і верифікацією.`,
  };
}

export const uk: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "Так", no: "Ні", notFound: "Не знайдено на сайті біржі" },
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
