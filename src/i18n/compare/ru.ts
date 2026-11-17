/**
 * The sentences of the comparison pages in Russian. Same functions and the same logic as `./en.ts`, written in
 * Russian grammar.
 *
 * Wording: «биржа», «альтернативы Binance», «реферальный код», «комиссии», «мейкер / тейкер», «верификация
 * личности (KYC)», address «вы». Exchange names stay Latin and are never declined; a bare name agrees with «биржа»
 * (feminine: «Binance закрыта», «сама Binance»), several names take the plural, and `verb()` picks the singular or
 * plural form. Case shows only through a preposition («на», «у», «с», «к», «для», «по») or the position after a
 * noun («комиссии Binance»); where it would stay unclear, «биржа» goes in front («опережает биржу Binance»).
 * Countries keep their case forms in `countryWords`: `name` and `short` are nominative, `residents` is
 * «жителей Канады» (genitive = accusative). The United Arab Emirates are «ОАЭ» after the first mention and in
 * the tables; the question and the advantages list use the full form.
 * Counted nouns go through `slavicCount` with the forms of the case the sentence needs.
 * Fee rates arrive in the site's notation (0,02%); leverage stays 150x; counts through `toLocaleString("ru-RU")`.
 * Generated dates («16 ноября 2026 г.») always stand inside brackets, never before a full stop.
 *
 * Capitals: inserted data texts keep their first letter when it is Latin, a digit or an abbreviation
 * («BTC», «OKX Europe», «ОАЭ»); a capital Cyrillic first letter of a word is lower-cased inside a sentence
 * («Да — …» → «да — …», «До 150x …» → «до 150x …», «Вы хотите …» → «вы хотите …»).
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

const locale = "ru";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const count = (n: number) => n.toLocaleString("ru-RU");

/* --------------------------------- counting --------------------------------- */

/** «6 альтернатив требуют» – nominative. */
const altsNom: SlavicForms = ["альтернатива", "альтернативы", "альтернатив"];
/** «мы сравнили 6 альтернатив», «все 6 альтернатив» as an object – accusative. */
const altsAcc: SlavicForms = ["альтернативу", "альтернативы", "альтернатив"];
/** «из 6 альтернатив», «среди 6 альтернатив» – genitive after a preposition. */
const altsGen: SlavicForms = ["альтернативы", "альтернатив", "альтернатив"];
/** «все 6 бирж» – nominative. */
const exchangesNom: SlavicForms = ["биржа", "биржи", "бирж"];
/** «среди этих 6 бирж» – genitive. */
const exchangesGen: SlavicForms = ["биржи", "бирж", "бирж"];

/* -------------------------------- capitals -------------------------------- */

/**
 * Lower-cases the first letter when it is a capital Cyrillic letter that starts an ordinary word
 * («Да — …» → «да — …», «Обязательна …» → «обязательна …»). A Latin name, a digit or an abbreviation
 * («BTC», «OKX», «ОАЭ», «ЕЭЗ») keeps its capital.
 */
const lc = (s: string) => (/^[А-ЯЁ](?![А-ЯЁ])/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s);
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Ends a data text with a full stop unless it already ends a sentence. */
const stop = (s: string) => (/[.!?…]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** A data text without a final full stop – for texts that code joins itself («г.» at the end is kept). */
const bare = (s: string) => s.trim().replace(/(?<!\sг)\.$/, "");
/** The `pick` lines of several exchanges, joined with ". " and closed. */
const picks = (list: Exchange[]) => `${list.map((a) => bare(altInfo(a).pick)).join(". ")}.`;
/** `afterSignupShort` without its leading «Да — ». */
const withoutYes = (s: string) => s.replace(/^Да\s*[—–-]\s*/, "");

/* -------------------------------- vocabulary -------------------------------- */

/**
 * `label` for the tables, `noun` as the object of «предлагает» in sentences (accusative: «предлагает торговых
 * ботов»), `gen` after a negation («нет торговых ботов»).
 */
const featureWords: Record<FeatureKey, { label: string; noun: string; gen: string }> = {
  copyTrading: { label: "Копитрейдинг", noun: "копитрейдинг", gen: "копитрейдинга" },
  tradingBots: { label: "Торговые боты", noun: "торговых ботов", gen: "торговых ботов" },
  options: { label: "Опционы", noun: "торговлю опционами", gen: "торговли опционами" },
  demoTrading: { label: "Демо-торговля", noun: "демо-торговлю", gen: "демо-торговли" },
  margin: { label: "Маржинальная торговля на споте", noun: "маржинальную торговлю на споте", gen: "маржинальной торговли на споте" },
  p2p: { label: "P2P-торговля", noun: "P2P-торговлю", gen: "P2P-торговли" },
  fiat: {
    label: "Покупка картой / через банк",
    noun: "покупку криптовалюты картой или банковским переводом",
    gen: "покупки криптовалюты картой или банковским переводом",
  },
  earn: { label: "Earn / стейкинг", noun: "продукты Earn", gen: "продуктов Earn" },
  launchpad: { label: "Launchpad / Launchpool", noun: "платформу Launchpad", gen: "платформы Launchpad" },
  web3Wallet: { label: "Web3-кошелек", noun: "некастодиальный Web3-кошелек", gen: "некастодиального Web3-кошелька" },
  card: { label: "Криптокарта", noun: "криптокарту", gen: "криптокарты" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/**
 * Case forms of the countries: `name` nominative, `short` for the tables, `gen` genitive, `acc` accusative,
 * `inName` "in …". `fullGen` / `fullIn` are the forms of a first mention (they differ only for the UAE).
 */
type CountryWords = { name: string; short: string; gen: string; acc: string; inName: string; fullGen?: string; fullIn?: string };
const countryWords: Record<CountryKey, CountryWords> = {
  us: { name: "США", short: "США", gen: "США", acc: "США", inName: "в США" },
  uk: { name: "Великобритания", short: "Великобритания", gen: "Великобритании", acc: "Великобританию", inName: "в Великобритании" },
  ca: { name: "Канада", short: "Канада", gen: "Канады", acc: "Канаду", inName: "в Канаде" },
  de: { name: "Германия", short: "Германия", gen: "Германии", acc: "Германию", inName: "в Германии" },
  fr: { name: "Франция", short: "Франция", gen: "Франции", acc: "Францию", inName: "во Франции" },
  nl: { name: "Нидерланды", short: "Нидерланды", gen: "Нидерландов", acc: "Нидерланды", inName: "в Нидерландах" },
  es: { name: "Испания", short: "Испания", gen: "Испании", acc: "Испанию", inName: "в Испании" },
  it: { name: "Италия", short: "Италия", gen: "Италии", acc: "Италию", inName: "в Италии" },
  au: { name: "Австралия", short: "Австралия", gen: "Австралии", acc: "Австралию", inName: "в Австралии" },
  jp: { name: "Япония", short: "Япония", gen: "Японии", acc: "Японию", inName: "в Японии" },
  sg: { name: "Сингапур", short: "Сингапур", gen: "Сингапура", acc: "Сингапур", inName: "в Сингапуре" },
  hk: { name: "Гонконг", short: "Гонконг", gen: "Гонконга", acc: "Гонконг", inName: "в Гонконге" },
  in: { name: "Индия", short: "Индия", gen: "Индии", acc: "Индию", inName: "в Индии" },
  ae: {
    name: "Объединенные Арабские Эмираты",
    short: "ОАЭ",
    gen: "ОАЭ",
    acc: "ОАЭ",
    inName: "в ОАЭ",
    fullGen: "Объединенных Арабских Эмиратов",
    fullIn: "в Объединенных Арабских Эмиратах (ОАЭ)",
  },
};
/** `residents`: «жителей Канады» – the object of «обслуживает» and the form after «для». */
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
    residents: `жителей ${w.gen}`,
  };
});

const statusLabel: Record<CountryStatus, string> = {
  restricted: "Ограничено",
  regional: "Региональный сайт",
  partial: "Частично",
  open: "Не ограничено",
};

/** The market of a fee comparison: «на споте» / «на бессрочных фьючерсах». */
const onMarket = (market: "spot" | "futures") => (market === "spot" ? "на споте" : "на бессрочных фьючерсах");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const where = onMarket(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} и ${x.name} взимают одинаковые стандартные комиссии ${where}: ${fa.maker} мейкер / ${fa.taker} тейкер.`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} дешевле и для мейкеров, и для тейкеров`
      : mm !== 0
        ? `${who} дешевле для мейкеров, а тейкеры платят одинаково`
        : `${who} дешевле для тейкеров, а мейкеры платят одинаково`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} дешевле для мейкеров, а ${x.name} — для тейкеров`
          : `${x.name} дешевле для мейкеров, а ${a.name} — для тейкеров`;
  return `${cap(where)} ${a.name} взимает ${fa.maker} мейкер / ${fa.taker} тейкер, а ${x.name} — ${fx.maker} / ${fx.taker}, так что ${verdict}.`;
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
    `${cap(onMarket(market))} ${x.name} взимает ${feePair(fx)} (мейкер / тейкер).`,
    lower.length ? `Дешевле: ${rates(lower)}.` : `Ни одна из ${slavicCount(alts.length, altsGen)} не дешевле.`,
    same.length ? `Такие же ставки: ${names(same)}.` : "",
    higher.length ? `Дороже: ${rates(higher)}.` : "",
    mixed.length ? `Дешевле только для мейкеров или только для тейкеров: ${rates(mixed)}.` : "",
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
    if (m < 0 && t < 0) out.push(`Более низкие комиссии ${where}: ${feePair(fa)} вместо ${feePair(fx)} (мейкер / тейкер)`);
    else if (m < 0 && t === 0) out.push(`Более низкая комиссия мейкера ${where}: ${fa.maker} вместо ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`Более низкая комиссия тейкера ${where}: ${fa.taker} вместо ${fx.taker}`);
    else if (m < 0) out.push(`Более низкая комиссия мейкера ${where}: ${fa.maker} вместо ${fx.maker} (но более высокая комиссия тейкера)`);
    else if (t < 0) out.push(`Более низкая комиссия тейкера ${where}: ${fa.taker} вместо ${fx.taker} (но более высокая комиссия мейкера)`);
  };
  fee("на споте", a.spotFees, x.spotFees);
  fee("на фьючерсах", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Более высокое максимальное кредитное плечо: ${leverageOf(a)}x вместо ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Более высокий открытый интерес по деривативам: ${formatBn(a.market.openInterestBn)} против ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`Больше рынков деривативов: ${count(a.market.markets)} против ${count(x.market.markets)}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`Забытый реферальный код можно привязать и позже (${lc(withoutYes(bare(a.referral.afterSignupShort)))})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`Предлагает ${joinList(notOffered.map((f) => f.noun))}, а ${x.name} — нет`);
  if (notFound.length)
    out.push(
      `Предлагает ${joinList(notFound.map((f) => f.noun))} — на собственном сайте ${x.name} мы ${verb(notFound, "такого продукта", "таких продуктов")} не нашли`,
    );

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`Платформа для ЕЭЗ с разрешением по MiCA (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length)
    out.push(`Не ограничивает доступ для жителей ${joinList(openWhere.map((c) => c.fullGen))}, тогда как ${x.name} для них закрыта`);
  if (regionalWhere.length)
    out.push(
      `Обслуживает жителей ${joinList(regionalWhere.map((c) => c.fullGen))} через региональную платформу, тогда как ${x.name} для них закрыта`,
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
  if (own.status === "restricted") parts.push(`${x.name} включает ${c.acc} в собственный список стран с ограничениями.`);
  else if (own.status === "partial") parts.push(`${x.name} частично ограничивает доступ ${c.inName}${ownNote}.`);
  else if (own.status === "regional") parts.push(`${x.name} обслуживает ${c.residents} через региональную платформу${ownNote}.`);
  else parts.push(`${x.name} не включает ${c.acc} в список стран с ограничениями.`);
  if (g.open.length)
    parts.push(
      `${names(g.open)} не ${verb(g.open, "включает", "включают")} ${c.acc} в ${verb(g.open, "свой список", "свои списки")} стран с ограничениями.`,
    );
  if (g.regional.length)
    parts.push(
      `${joinList(withNote(g.regional))} ${verb(g.regional, "обслуживает", "обслуживают")} ${c.residents} через ${verb(g.regional, "отдельную региональную платформу", "отдельные региональные платформы")}.`,
    );
  if (g.partial.length) parts.push(`Частично ограничено: ${withNote(g.partial).join("; ")}.`);
  if (g.restricted.length)
    parts.push(
      `${names(g.restricted)}${own.status === "restricted" ? " тоже" : ""} ${verb(g.restricted, "ограничивает", "ограничивают")} доступ ${c.inName}.`,
    );
  if (!g.open.length && !g.regional.length) parts.push(`Ни одна из ${slavicCount(alts.length, altsGen)} не открыта полностью для ${c.residents}.`);
  parts.push(
    "Списки стран меняются, а отсутствие страны в списке еще не гарантирует, что там доступны все продукты: решают условия самой биржи.",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `Мы сравнили ${slavicCount(alts.length, altsAcc)} ${withReading(x, locale)}: ${names(alts)}. ${picks(alts)} Все ${slavicCount(alts.length, exchangesNom)} требуют от новых пользователей пройти верификацию личности (KYC), и у каждой свой список стран с ограничениями, поэтому перед регистрацией проверьте таблицу стран.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `Определите, что должно быть лучше, чем на ${x.name}`,
      text: `Более низкие комиссии, более высокое кредитное плечо, больше монет или просто биржа, которая принимает пользователей из вашей страны: таблицы на этой странице показывают, в чем каждая альтернатива опережает биржу ${x.name}, а в чем нет.`,
    },
    {
      title: "Убедитесь, что биржа принимает пользователей из вашей страны",
      text: "У каждой биржи свой список стран с ограничениями, а некоторые перенаправляют на региональную платформу с другими продуктами и лимитами. Посмотрите таблицу стран до регистрации.",
    },
    {
      title: "Зарегистрируйтесь по реферальной ссылке",
      text: `${names(signupOnly)} ${verb(signupOnly, "принимает", "принимают")} реферальный код только при регистрации или не ${verb(signupOnly, "описывает", "описывают")} способа добавить его позже, поэтому воспользуйтесь ссылкой до создания аккаунта.${later.length ? ` ${names(later)} ${verb(later, "позволяет", "позволяют")} привязать код и после регистрации — при соблюдении условий.` : ""}`,
    },
    {
      title: "Пройдите верификацию до перевода средств",
      text: `Все ${slavicCount(alts.length, altsNom)} требуют от новых пользователей пройти верификацию личности, и на большинстве из них депозиты или торговля остаются заблокированными, пока верификация не завершена. Подготовьте паспорт, удостоверение личности или водительское удостоверение.`,
    },
    {
      title: `Закройте открытые позиции на ${x.name}`,
      text: `Фьючерсные и маржинальные позиции нельзя перенести с одной биржи на другую. Сначала закройте их на ${x.name} или сохраните аккаунт, пока позиции не закроются.`,
    },
    {
      title: "Выведите средства на новый адрес для депозита",
      text: "Скопируйте адрес для депозита на новой бирже, выберите одну и ту же монету и одну и ту же сеть на обеих биржах и сначала отправьте небольшую тестовую сумму. Средства, отправленные не в той сети, можно потерять.",
    },
    {
      title: `Решите, что делать с аккаунтом на ${x.name}`,
      text: `Его можно сохранить — аккаунты на разных биржах не зависят друг от друга. Уровень комиссий, реферальная привязка и неиспользованные вознаграждения остаются на ${x.name} и не переносятся.`,
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
  /** «из 6 альтернатив», «среди 6 альтернатив» */
  const ofN = slavicCount(n, altsGen);

  const choosing: Faq[] = [
    {
      q: `Какая лучшая альтернатива ${x.name}?`,
      a: `Единственной лучшей альтернативы ${x.name} нет — всё зависит от того, почему вы хотите перейти на другую биржу. ${picks(alts)} На этой странице мы сравниваем все ${slavicCount(n, altsAcc)} с ${x.name} по комиссиям, кредитному плечу, продуктам, доступности в разных странах и верификации; цифры взяты с сайтов самих бирж (проверено ${date}).`,
    },
    {
      q: `Какие биржи похожи на ${x.name}?`,
      a: `Ближайшие аналоги ${x.name} — ${names(alts)}. Как и ${x.name}, это централизованные биржи, где спот и фьючерсы с кредитным плечом доступны в одном аккаунте, а для новых пользователей действует реферальная программа. Различаются они комиссиями, максимальным кредитным плечом, числом активов в листинге и странами, из которых принимают пользователей.`,
    },
    {
      q: `Какая альтернатива ${x.name} самая крупная?`,
      a: `По открытому интересу на рынке деривативов (данные CoinMarketCap на ${prettyDate(site.marketDataDate)}) ${verb(oi, "крупнейшая", "крупнейшие")} из ${ofN} — ${names(oi)} с показателем ${formatBn(oi[0].market.openInterestBn)}. Открытый интерес самой ${x.name} составлял ${formatBn(x.market.openInterestBn)}.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `У какой альтернативы ${x.name} самые низкие комиссии?`,
      a: `Самые низкие стандартные комиссии на фьючерсах среди ${ofN} — у ${names(lowF)}: ${feePair(lowF[0].futuresFees)} (мейкер / тейкер). На споте дешевле всех ${names(lowS)}: ${feePair(lowS[0].spotFees)}. ${x.name} взимает ${feePair(x.futuresFees)} на фьючерсах и ${feePair(x.spotFees)} на споте.${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} Это ставки стандартного уровня; VIP-уровни и собственные токены бирж снижают их еще больше.`,
    },
    {
      q: `Какие биржи дешевле, чем ${x.name}?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `На бессрочных фьючерсах: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, тогда как на ${x.name} — ${feePair(x.futuresFees)}.` : `На бессрочных фьючерсах ни одна из ${ofN} не предлагает ставок ниже, чем ${feePair(x.futuresFees)} на ${x.name}.`} ${cheaperS.length ? `На споте: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, тогда как на ${x.name} — ${feePair(x.spotFees)}.` : `На споте ни одна из них не предлагает ставок ниже, чем ${feePair(x.spotFees)} на ${x.name}.`} Все ставки указаны для мейкера / тейкера на стандартном уровне.`
          : `На стандартном уровне ни одна из ${ofN} не дешевле, чем ${x.name}: ${x.name} взимает ${feePair(x.futuresFees)} на фьючерсах и ${feePair(x.spotFees)} на споте (мейкер / тейкер) — это самые низкие ставки в этом сравнении. Альтернативы стоит рассмотреть по другим причинам: регулирование, продукты или страны, из которых они принимают пользователей.`,
    },
    {
      q: `Какая альтернатива ${x.name} предлагает самое высокое кредитное плечо?`,
      a: `Самое высокое кредитное плечо среди ${ofN} — у ${names(hi)}: ${lc(bare(hi[0].maxLeverage))}. Остальные: ${alts
        .filter((a) => !hi.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}. На самой ${x.name} — ${lc(bare(x.maxLeverage))}. Высокое плечо резко повышает риск ликвидации.`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `Какие альтернативы ${x.name} доступны ${c.fullIn}?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `Есть ли альтернатива ${x.name} без верификации (KYC)?`,
      a: `Среди этих ${slavicCount(n, exchangesGen)} — нет. Каждая из них требует от новых пользователей пройти верификацию личности: ${alts.map((a) => `${a.name} — ${lc(bare(a.signup.kycShort))}`).join("; ")}. На самой ${x.name} верификация ${stop(lc(x.signup.kycShort))}`,
    },
    {
      q: `Какие альтернативы ${x.name} регулируются в ЕС по MiCA?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} ${verb(mica, "указывает", "указывают")} юридическое лицо с разрешением по MiCA для жителей Европейской экономической зоны (ЕЭЗ).` : `Ни одна из ${ofN} не указывает юридического лица с разрешением по MiCA.`}${noMica.length ? ` ${names(noMica)} не ${verb(noMica, "указывает", "указывают")} на собственных страницах никакого разрешения по MiCA.` : ""} ${xInfo.mica ? `У самой ${x.name} — ${stop(xInfo.mica)}` : `Сама ${x.name} такого юридического лица не указывает.`} У региональной платформы обычно свой набор продуктов, свои комиссии и лимиты.`,
    },
    {
      q: `Какая альтернатива ${x.name} самая безопасная?`,
      a: `Ни одна централизованная биржа не свободна от рисков, поэтому честно сравнить можно только то, что публикует каждая из них. ${alts.map((a, i) => `${a.name}: подтверждение резервов${i === 0 ? " (Proof of Reserves)" : ""} — ${stop(lc(altInfo(a).reserves))} ${altInfo(a).fund ? stop(altInfo(a).fund) : "Фонд защиты не указан."}`).join(" ")} На любой бирже держите только те средства, которыми активно торгуете.`,
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
      q: `Какие альтернативы ${x.name} предлагают ${f.noun}?`,
      a: `${yes.length ? `${joinList(yes.map(withNote))} ${verb(yes, "предлагает", "предлагают")} ${f.noun}.` : `Ни у одной из ${ofN} на собственном сайте нет ${f.gen}.`}${no.length ? ` ${names(no)} ${verb(no, "не предлагает", "не предлагают")} такого продукта.` : ""}${unknown.length ? ` На ${verb(unknown, "сайте", "сайтах")} ${names(unknown)} при проверке мы такого продукта не нашли.` : ""} ${own === true ? `У самой ${x.name} такой продукт тоже есть.` : own === false ? `Сама ${x.name} такого продукта не предлагает.` : `На сайте самой ${x.name} такого продукта не видно.`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `У какой альтернативы ${x.name} больше всего монет?`,
      a: `По данным самих бирж: ${alts.map((a) => `${a.name} — ${bare(a.assets)}`).join("; ")}. ${x.name}: ${stop(x.assets)} Биржи считают по-разному: одни — монеты, другие — торговые пары, поэтому эти цифры нельзя сравнивать напрямую.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `Как перейти с ${x.name} на другую биржу?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `Можно ли сохранить аккаунт на ${x.name}, если открыть аккаунт на другой бирже?`,
      a: `Да. Биржи — отдельные компании, поэтому аккаунт на одной никак не влияет на аккаунт на другой, и обоими можно пользоваться параллельно. Не переносится всё, что привязано к аккаунту: реферальная привязка на ${x.name}, уровень комиссий, приветственные вознаграждения и история торговли остаются на ${x.name}.`,
    },
    {
      q: `Можно ли перенести открытые фьючерсные позиции с ${x.name} на другую биржу?`,
      a: `Нет. Фьючерсная позиция существует только на той бирже, где ее открыли. Чтобы перейти, закройте позицию на ${x.name}, выведите средства и откройте новую позицию на другой бирже — по цене и с комиссиями, которые действуют там.`,
    },
    {
      q: `Есть ли у альтернатив ${x.name} реферальные коды?`,
      a: `Да, у всех ${n}: ${alts.map((a) => `${a.name} ${a.referralCode} (${lc(bare(a.feeDiscount || a.bonusHeadline))})`).join("; ")}. Реферальный код ничего не стоит и не повышает торговые комиссии.`,
    },
    {
      q: `Можно ли добавить реферальный код позже, если выбрать альтернативу ${x.name}?`,
      a: `${alts.map((a) => `${a.name}: ${lc(bare(a.referral.afterSignupShort))}`).join(". ")}. Надежнее всего на любой бирже — регистрироваться по реферальной ссылке.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `Лучше ли ${a.name}, чем ${x.name}?`,
      a: `${ahead.length ? `${a.name} опережает биржу ${x.name} по таким пунктам: ${ahead.map(lc).join("; ")}.` : `По пунктам, которые мы сравниваем, у ${a.name} нет измеримого преимущества перед ${x.name}.`} ${behind.length ? `${x.name} впереди по таким пунктам: ${behind.map(lc).join("; ")}.` : `${x.name} не впереди ни по одному из них.`} ${a.name} подойдет вам, если ${lc(bare(altInfo(a).chooseIf[0]))}.`,
    };
  });

  return [
    { id: "choosing", title: `Как выбрать альтернативу ${x.name}`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "Комиссии и кредитное плечо", faqs: fees },
    { id: "countries", title: "Страны, KYC и регулирование", faqs: countryFaqs },
    { id: "features", title: "Продукты и монеты", faqs: featureFaqs },
    { id: "switching", title: `Переход с ${x.name} и реферальные коды`, faqs: switching },
    { id: "versus", title: `${x.name} в сравнении с альтернативами`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `Какие лучшие альтернативы ${x.name}?`,
    a: `${picks(alts)} На нашей странице об альтернативах ${x.name} мы сравниваем все ${slavicCount(alts.length, altsAcc)} с ${x.name} по комиссиям, кредитному плечу, продуктам, доступности в разных странах и верификации.`,
  };
}

export const ru: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "Да", no: "Нет", notFound: "Не найдено на сайте биржи" },
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
