/**
 * The head-to-head pages ("/ru/<a>-vs-<b>") and the comparison hub ("/ru/compare") in Russian.
 * Same keys as `./en.tsx`, written natively for readers who search in Russian.
 *
 * Wording: "биржа" / "криптобиржа", "комиссии", "реферальный код", "кредитное плечо" (then "плечо"), polite "вы".
 * The pages call themselves "прямое сравнение", the hub "Сравнение бирж"; the better value of a row is "Впереди",
 * a tie "Наравне". "vs" stays "vs". Exchange names stay Latin, are never declined and take feminine agreement
 * ("Binance закрыта"); their case shows only through a preposition ("на", "у", "с", "для", "от") or after a noun
 * ("комиссии Binance"); where the case would stay unclear, "биржа" goes in front ("биржами Binance и OKX").
 * The Cyrillic spelling of a name ("Binance (Бинанс)") appears only in the title, the H1, the first mention of the
 * opening texts and the keywords. Counted nouns go through `slavicCount` / `slavicForm` with the forms of the case
 * the sentence needs. Generated dates ("16 ноября 2026 г.") never stand before a full stop.
 */
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf, verb } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import { readingOf, withReading } from "../name-readings";
import { slavicCount, slavicForm } from "../slavic-count";
import type { SlavicForms } from "../slavic-count";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "ru";
const ct = compareText(locale);
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const { advantages, feeSentence, names } = ct;
const featureList = ct.features;
const countryList = ct.countries;
type Country = (typeof countryList)[number];

/* ---------------------------------- grammar --------------------------------- */

/**
 * Case forms of the countries: genitive ("жителей Канады"), accusative ("не включает Канаду") and "in"
 * ("в Канаде"). The Emirates are spelled out at a first mention (questions) and abbreviated in the answers.
 */
const countryForms: Record<CountryKey, { gen: string; acc: string; in: string; inFull?: string }> = {
  us: { gen: "США", acc: "США", in: "в США" },
  uk: { gen: "Великобритании", acc: "Великобританию", in: "в Великобритании" },
  ca: { gen: "Канады", acc: "Канаду", in: "в Канаде" },
  de: { gen: "Германии", acc: "Германию", in: "в Германии" },
  fr: { gen: "Франции", acc: "Францию", in: "во Франции" },
  nl: { gen: "Нидерландов", acc: "Нидерланды", in: "в Нидерландах" },
  es: { gen: "Испании", acc: "Испанию", in: "в Испании" },
  it: { gen: "Италии", acc: "Италию", in: "в Италии" },
  au: { gen: "Австралии", acc: "Австралию", in: "в Австралии" },
  jp: { gen: "Японии", acc: "Японию", in: "в Японии" },
  sg: { gen: "Сингапура", acc: "Сингапур", in: "в Сингапуре" },
  hk: { gen: "Гонконга", acc: "Гонконг", in: "в Гонконге" },
  in: { gen: "Индии", acc: "Индию", in: "в Индии" },
  ae: { gen: "ОАЭ", acc: "ОАЭ", in: "в ОАЭ", inFull: "в Объединенных Арабских Эмиратах (ОАЭ)" },
};
const inCountry = (key: CountryKey) => countryForms[key].inFull ?? countryForms[key].in;

/** Counted nouns in the case a sentence needs ([one, few, many] as in `slavicCount`). */
const points = {
  /** "из 11 измеримых пунктов" */
  ofMeasurable: ["измеримого пункта", "измеримых пунктов", "измеримых пунктов"],
  /** "из 11 пунктов" */
  of: ["пункта", "пунктов", "пунктов"],
  /** "впереди по 5 пунктам" */
  by: ["пункту", "пунктам", "пунктам"],
} satisfies Record<string, SlavicForms>;
const pairForms: SlavicForms = ["прямое сравнение", "прямых сравнения", "прямых сравнений"];
const exchangeForms: SlavicForms = ["биржа", "биржи", "бирж"];
/** "сравниваем 7 бирж" */
const exchangeFormsAcc: SlavicForms = ["биржу", "биржи", "бирж"];
/** "для всех 7 бирж" */
const exchangeFormsGen: SlavicForms = ["биржи", "бирж", "бирж"];
/** "с 6 другими" */
const othersInstr: SlavicForms = ["другой", "другими", "другими"];
/** A count in Russian notation ("1 384") with its noun. */
const countNoun = (n: number, forms: SlavicForms) => `${n.toLocaleString("ru-RU")} ${slavicForm(n, forms)}`;

/* ---------------------------------- helpers --------------------------------- */

/**
 * A text from the data inside a sentence: lower-cases a capital Cyrillic first letter that starts an ordinary word
 * ("Да — …" → "да — …", "До 150x" → "до 150x", "Обязательна" → "обязательна", "Вы хотите" → "вы хотите").
 * Latin names, digits and abbreviations ("Binance", "BTC", "ЕЭЗ", "США") keep their capitals.
 */
const lcFirst = (s: string) => (/^[А-ЯЁ](?![А-ЯЁ])/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s);
/** "320+ млн зарегистрированных пользователей (по данным Binance)" / "390 монет, 509 спотовых пар (Bybit API)" → without the bracket. */
const withoutSource = (s: string) => s.replace(/\s*\((?:по данным [^()]*|[^()]*\bAPI)\)/, "");
/** A data text that code closes itself, without a final full stop; a final "г." stays. */
const bare = (s: string) => s.trim().replace(/(?<!\sг)\.$/, "");
/** A data text as a sentence of its own, with exactly one full stop. */
const stop = (s: string) => (/[.!?…]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** "До 150x (бессрочные контракты BTCUSDT и ETHUSDT)" → "до 150x (…)" inside a sentence. */
const leverageText = (e: Exchange) => lcFirst(bare(e.maxLeverage));
/** The names of the exchanges in a sentence, with the Cyrillic spelling at the first mention of each. */
const firstMentions = () => {
  const seen = new Set<string>();
  return (list: Exchange[]) => joinList(list.map((e) => (seen.has(e.slug) ? e.name : (seen.add(e.slug), withReading(e, locale)))));
};
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
const leverageRisk = "Высокое кредитное плечо резко повышает риск ликвидации.";
const regionalNote = "У региональной платформы обычно свой набор продуктов, свои комиссии и лимиты.";
/** CoinMarketCap's derivatives ranking: nominative, genitive, prepositional. */
const cmc = "рейтинг бирж деривативов CoinMarketCap";
const cmcGen = "рейтинга бирж деривативов CoinMarketCap";
const cmcIn = "рейтинге бирж деривативов CoinMarketCap";

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length
      ? `${e.name} впереди по ${rows.length === 1 ? "такому пункту" : "таким пунктам"}: ${joinList(rows.map((r) => r.topic))}`
      : `У ${e.name} нет преимущества ни по одному из них`;
  const tie = s.tie.length ? `, а по ${slavicCount(s.tie.length, points.by)} биржи наравне` : "";
  return `Ни ${withReading(a, locale)}, ни ${withReading(b, locale)} не выигрывает по всем пунктам сразу. Из ${slavicCount(s.measurable, points.ofMeasurable)} этого сравнения ${a.name} впереди по ${slavicCount(s.a.length, points.by)}, ${b.name} — по ${s.b.length}${tie}. ${lead(a, s.a)}. ${lead(b, s.b)}. Выбирайте ${a.name}, если ${lcFirst(bare(altInfo(a).chooseIf[0]))}. Выбирайте ${b.name}, если ${lcFirst(bare(altInfo(b).chooseIf[0]))}.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb)
    return `У ${a.name} и ${b.name} одинаковое максимальное кредитное плечо: на ${a.name} — ${leverageText(a)}, на ${b.name} — ${leverageText(b)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `Максимальное кредитное плечо выше на ${hi.name} — ${leverageText(hi)}, тогда как на ${lo.name} — ${leverageText(lo)}.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  const markets: SlavicForms = ["рынке", "рынках", "рынках"];
  return `В ${cmcIn} (${prettyDate(site.marketDataDate)}) открытый интерес ${a.name} составлял ${formatBn(a.market.openInterestBn)} на ${countNoun(a.market.markets, markets)}, а ${b.name} — ${formatBn(b.market.openInterestBn)} на ${countNoun(b.market.markets, markets)}. Рынок глубже у ${deeper.name}, а это обычно означает более узкие спреды на крупных ордерах.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} предлагает ${joinList(notOffered.map((f) => f.noun))}, а ${b.name} — нет.` : "",
    notFound.length
      ? `${a.name} предлагает ${joinList(notFound.map((f) => f.noun))}; на собственном сайте ${b.name} мы ${verb(notFound, "такого продукта", "таких продуктов")} не нашли.`
      : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const place = countryForms[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} закрыта для жителей ${place.gen}${extra}`;
  if (status === "regional") return `${e.name} обслуживает жителей ${place.gen} через региональную платформу${extra}`;
  if (status === "partial") return `${e.name} частично ограничивает доступ ${place.in}${extra}`;
  return `${e.name} не включает ${place.acc} в список стран с ограничениями`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("ru").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. Списки стран меняются, а отсутствие страны в списке еще не гарантирует, что там доступны все продукты: окончательно это определяют условия самой биржи.`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key) ? "на обеих биржах" : has(a, key) ? `только на ${a.name}` : has(b, key) ? `только на ${b.name}` : "ни на одном из двух сайтов";
  const noTokenDiscount = "Такая скидка не опубликована.";
  const noFund = "Фонд защиты не назван.";
  const noMica = "на собственных страницах биржа не называет юридического лица с разрешением по MiCA";
  const kyc = (e: Exchange) => lcFirst(bare(e.signup.kycShort));

  const verdict: Faq[] = [
    { q: `${a.name} или ${b.name}: что лучше?`, a: versusAnswer(a, b, s) },
    {
      q: `В чем главное отличие ${a.name} от ${b.name}?`,
      a: `${bare(ia.pick)}. ${bare(ib.pick)}.${aheadA.length ? ` Самые заметные измеримые преимущества ${a.name}: ${aheadA.slice(0, 2).map(lcFirst).join("; ")}.` : ""}${aheadB.length ? ` Преимущества ${b.name}: ${aheadB.slice(0, 2).map(lcFirst).join("; ")}.` : ""}`,
    },
    {
      q: `Какая биржа крупнее: ${a.name} или ${b.name}?`,
      a: `В ${cmcIn} (${marketDate}) открытый интерес ${a.name} составлял ${formatBn(a.market.openInterestBn)}, а объем торгов за 24 часа — ${formatBn(a.market.volume24hBn)}; у ${b.name} — ${formatBn(b.market.openInterestBn)} и ${formatBn(b.market.volume24hBn)}. По собственным данным бирж, у ${a.name} ${withoutSource(a.users)}, а у ${b.name} — ${withoutSource(b.users)}.`,
    },
    {
      q: `${a.name} или ${b.name}: что лучше для новичков?`,
      a: `Для первого аккаунта важны три вещи: простой способ купить криптовалюту, возможность потренироваться и низкие комиссии. Покупка картой или банковским переводом: ${state("fiat")}. Демо-торговля: ${state("demoTrading")}. Копитрейдинг: ${state("copyTrading")}. ${feeSentence(a, b, "spot")} Верификация личности — ${a.name}: ${kyc(a)}; ${b.name}: ${kyc(b)}.`,
    },
    {
      q: `${a.name} или ${b.name}: что лучше для торговли фьючерсами?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Где ниже комиссии: на ${a.name} или на ${b.name}?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} Это стандартные ставки (без VIP); VIP-уровни и собственные токены бирж снижают их еще больше.`,
    },
    {
      q: `Дают ли ${a.name} и ${b.name} скидку на комиссии при оплате собственным токеном?`,
      a: `${a.name}: ${stop(lcFirst(a.tokenDiscount || noTokenDiscount))} ${b.name}: ${stop(lcFirst(b.tokenDiscount || noTokenDiscount))}`,
    },
    { q: `Где выше кредитное плечо: на ${a.name} или на ${b.name}?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `Где больше монет: на ${a.name} или на ${b.name}?`,
      a: `По собственным данным бирж, у ${a.name} в листинге ${withoutSource(a.assets)}, а у ${b.name} — ${withoutSource(b.assets)}. Биржи считают по-разному: одни — монеты, другие — торговые пары, поэтому эти две цифры нельзя сравнивать напрямую.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `Доступны ли ${a.name} и ${b.name} ${inCountry(c.key)}?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `Нужна ли верификация (KYC) на ${a.name} и ${b.name}?`,
      a: `Да, обе биржи требуют от новых пользователей пройти верификацию личности. ${a.name}: ${kyc(a)}. ${b.name}: ${kyc(b)}. Для торговли без верификации не подходит ни одна из них.`,
    },
    {
      q: `Какая биржа надежнее: ${a.name} или ${b.name}?`,
      a: `Ни одна централизованная биржа не свободна от рисков, поэтому честно сравнить можно лишь то, что публикует каждая из них. ${a.name}: ${lcFirst(bare(a.regulation))}. Подтверждение резервов (Proof of Reserves): ${lcFirst(bare(ia.reserves))}. ${ia.fund ? stop(ia.fund) : noFund} ${b.name}: ${lcFirst(bare(b.regulation))}. Подтверждение резервов: ${lcFirst(bare(ib.reserves))}. ${ib.fund ? stop(ib.fund) : noFund} На любой из двух бирж держите только те средства, которыми активно торгуете.`,
    },
    {
      q: `Есть ли у ${a.name} и ${b.name} разрешение по MiCA в ЕС?`,
      a: `${a.name}: ${ia.mica ? `да — ${bare(ia.mica)}` : noMica}. ${b.name}: ${ib.mica ? `да — ${bare(ib.mica)}` : noMica}. ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `Ничего из ${countNoun(featureList.length, ["продукта", "продуктов", "продуктов"])}, которые мы сравниваем: каждый продукт, который ${x.name} показывает на своем сайте, есть и на сайте ${y.name}.`;
  const products: Faq[] = [
    { q: `Что есть на ${a.name}, чего нет на ${b.name}?`, a: onlyA || nothing(a, b) },
    { q: `Что есть на ${b.name}, чего нет на ${a.name}?`, a: onlyB || nothing(b, a) },
    {
      q: `Есть ли на ${a.name} и ${b.name} копитрейдинг, торговые боты, опционы и демо-торговля?`,
      a: `Копитрейдинг: ${state("copyTrading")}. Торговые боты: ${state("tradingBots")}. Опционы: ${state("options")}. Демо-торговля: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Там, где названа только одна биржа, мы не нашли страницы этого продукта на собственном сайте другой биржи (проверено ${prettyDate(site.lastReviewed)}).` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `Какие реферальные коды у ${a.name} и ${b.name}?`,
      a: `${a.name} — ${a.referralCode}: ${lcFirst(bare(a.referral.whereShort))}. ${b.name} — ${b.referralCode}: ${lcFirst(bare(b.referral.whereShort))}. Оба кода бесплатны и не повышают ваши торговые комиссии.`,
    },
    {
      q: `Где лучше бонус за регистрацию: на ${a.name} или на ${b.name}?`,
      a: `${a.name}: ${lcFirst(bare(offer(a)))}. ${b.name}: ${lcFirst(bare(offer(b)))}. Приветственные вознаграждения на обеих биржах зависят от условий — верификации личности, депозита или объема торгов — и различаются по странам, поэтому сравнивайте условия, а не цифру в заголовке.`,
    },
    {
      q: `Можно ли добавить реферальный код после регистрации на ${a.name} или ${b.name}?`,
      a: `${a.name}: ${lcFirst(bare(a.referral.afterSignupShort))}. ${b.name}: ${lcFirst(bare(b.referral.afterSignupShort))}. Надежнее всего на обеих биржах регистрироваться по реферальной ссылке.`,
    },
    {
      q: `Можно ли пользоваться биржами ${a.name} и ${b.name} одновременно?`,
      a: "Да. Это разные компании, поэтому аккаунт на одной бирже никак не влияет на аккаунт на другой, и многие трейдеры держат средства на двух биржах. Уровень комиссий, реферальная привязка и вознаграждения относятся к конкретному аккаунту и не переносятся.",
    },
    {
      q: `Как перевести криптовалюту с ${a.name} на ${b.name}?`,
      a: `1. Откройте аккаунт на ${b.name} с реферальным кодом ${b.referralCode} и пройдите верификацию личности. 2. Закройте открытые фьючерсные и маржинальные позиции на ${a.name} — позиции нельзя перенести на другую биржу. 3. На ${b.name} скопируйте адрес депозита для нужной монеты и сети. 4. Выведите средства с ${a.name} на этот адрес в той же сети, а сначала отправьте небольшую тестовую сумму: перевод в неправильной сети можно потерять. В обратную сторону шаги те же.`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} или ${b.name}: что лучше?`, faqs: verdict },
    { id: "fees", title: "Комиссии, кредитное плечо и монеты", faqs: fees },
    { id: "countries", title: "Страны, KYC и безопасность", faqs: countries },
    { id: "products", title: "Продукты", faqs: products },
    { id: "referral", title: "Реферальные коды и переход между биржами", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) => {
  const first = firstMentions();
  const lowest = first(lowF);
  const highest = first(hi);
  const deepest = first(oi);
  const micaNames = first(mica);
  return `У ${lowest} самые низкие стандартные комиссии на фьючерсах (${feePair(lowF[0].futuresFees)}, мейкер / тейкер), у ${highest} — самое высокое кредитное плечо (${leverageOf(hi[0])}x), а у ${deepest} — самый глубокий рынок деривативов (открытый интерес ${formatBn(oi[0].market.openInterestBn)}). Платформа с разрешением по MiCA для жителей Европейской экономической зоны (ЕЭЗ) есть у ${micaNames}. Какая биржа лучше именно для вас, зависит от того, из каких двух вы выбираете: выберите пару ниже.`;
};

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "У какой криптобиржи самые низкие комиссии?",
      a: `На стандартном уровне самые низкие комиссии на фьючерсах у ${names(lowF)} — ${feePair(lowF[0].futuresFees)} (мейкер / тейкер), а самые низкие комиссии на споте у ${names(lowS)} — ${feePair(lowS[0].spotFees)}. Остальные биржи: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} — ${feePair(e.futuresFees)} на фьючерсах и ${feePair(e.spotFees)} на споте`)
        .join("; ")}. VIP-уровни и собственные токены бирж снижают эти ставки еще больше.`,
    },
    {
      q: "На какой криптобирже самое высокое кредитное плечо?",
      a: `${names(hi)}: ${leverageText(hi[0])}. Остальные: ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} — ${leverageOf(e)}x`)
        .join(", ")}. ${leverageRisk}`,
    },
    {
      q: "На какой криптобирже самый глубокий рынок фьючерсов?",
      a: `Открытый интерес в ${cmcIn} (${marketDate}): ${ranked.map((e) => `${e.name} — ${formatBn(e.market.openInterestBn)}`).join(", ")}. Более глубокий рынок обычно означает более узкие спреды на крупных ордерах.`,
    },
    {
      q: "У каких бирж есть платформа с разрешением по MiCA для ЕЭЗ?",
      a: `Такая платформа есть у ${joinList(mica.map((e) => `${e.name} (${bare(altInfo(e).mica)})`))}. ${names(noMica)} ${verb(noMica, "не называет", "не называют")} на собственных страницах юридического лица с разрешением по MiCA. ${regionalNote}`,
    },
    {
      q: "На каких биржах можно добавить реферальный код после регистрации?",
      a: `${later.map((e) => `${e.name}: ${lcFirst(bare(e.referral.afterSignupShort))}`).join(". ")}. На ${names(signupOnly)} код засчитывается только при регистрации или способ добавить его позже не описан, поэтому на любой бирже надежнее регистрироваться по реферальной ссылке.`,
    },
    {
      q: "Как составлены эти сравнения?",
      a: `Каждая цифра взята с собственного сайта или из справочного центра биржи (таблицы комиссий, условия, списки стран с ограничениями, страницы продуктов), и на каждой странице указаны источники. Открытый интерес, объем торгов и количество рынков деривативов взяты из ${cmcGen}. Какая биржа впереди по тому или иному пункту, видно прямо из этих цифр; собственного рейтинга мы не составляем. Цифры актуальны на дату текущей проверки (${date}).`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const ru: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row in the list after "впереди по таким пунктам:" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "Комиссии на фьючерсах (мейкер / тейкер)", topic: "комиссии на фьючерсах" },
    spotFees: { label: "Комиссии на споте (мейкер / тейкер)", topic: "комиссии на споте" },
    leverage: { label: "Максимальное кредитное плечо", topic: "максимальное кредитное плечо" },
    openInterest: { label: "Открытый интерес по деривативам", topic: "открытый интерес" },
    volume: { label: "Объем деривативов за 24 ч", topic: "объем торгов деривативами за 24 часа" },
    markets: { label: "Рынки деривативов", topic: "количество рынков деривативов" },
    users: { label: "Пользователи (данные биржи)", topic: "число пользователей" },
    assets: { label: "Активы в листинге (данные биржи)", topic: "" },
    founded: { label: "Год основания", topic: "" },
    products: {
      label: (compared) => `Найденные продукты (из ${compared} ${slavicForm(compared, ["сравниваемого", "сравниваемых", "сравниваемых"])})`,
      topic: "набор продуктов",
    },
    countries: {
      label: (compared) => `Страны, где биржа закрыта (из ${compared} ${slavicForm(compared, ["сравниваемой", "сравниваемых", "сравниваемых"])})`,
      topic: "доступность по странам",
    },
    mica: { label: "Платформа в ЕЭЗ с разрешением по MiCA", topic: "разрешение по MiCA" },
    kyc: { label: "Верификация личности (KYC)", topic: "" },
    addLater: { label: "Можно ли добавить реферальный код позже?", topic: "привязка реферального кода после регистрации" },
    offer: { label: "Предложение для новых пользователей", topic: "" },
    reserves: { label: "Подтверждение резервов", topic: "" },
    fund: { label: "Фонд защиты", topic: "" },
  },
  countOf: (count, of) => `${count} из ${of}`,
  /** Cells of the rows "Платформа …" (feminine) and "Фонд защиты" (masculine). */
  noMica: "Не названа",
  noFund: "Не назван",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    /* Three wordings, chosen per pair; the Cyrillic spellings (Binance (Бинанс)) stay where they fit. */
    title: (a, b, shortMonthYear) => {
      const y = yearOf(shortMonthYear);
      const forms = (an: string, bn: string) =>
        [
          [`${an} vs ${bn} (${shortMonthYear}): комиссии, плечо и бонусы`, `${an} vs ${bn} (${shortMonthYear}): комиссии и плечо`],
          [`${an} или ${bn}? Сравнение комиссий, плеча и KYC`, `${an} или ${bn}? Комиссии, плечо и KYC`],
          [`${an} vs ${bn}: какая биржа лучше в ${y} году?`, `${an} vs ${bn}: какая биржа лучше?`],
        ][variant(3, a.slug, b.slug)];
      return fit(
        TITLE_MAX,
        ...forms(withReading(a, locale), withReading(b, locale)),
        ...forms(a.name, b.name),
        `${withReading(a, locale)} vs ${withReading(b, locale)} (${shortMonthYear})`,
        `${a.name} vs ${b.name} (${shortMonthYear})`,
      );
    },
    /** 140–155 characters for every pair: the longest variant that fits. */
    description: (a, b, monthYear) => {
      const fees = `${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`;
      const lev = `${leverageOf(a)}x vs ${leverageOf(b)}x`;
      return fit(
        DESC_MAX,
        `${a.name} vs ${b.name}: комиссии на фьючерсах ${fees}, кредитное плечо ${lev}, а также продукты, страны, KYC и реферальные коды — официальные данные (${monthYear})`,
        `${a.name} vs ${b.name}: фьючерсы ${fees}, кредитное плечо ${lev}, а также продукты, страны, KYC и реферальные коды — официальные данные (${monthYear})`,
        `${a.name} vs ${b.name}: фьючерсы ${fees}, плечо ${lev}, а также продукты, страны, KYC и реферальные коды — официальные данные (${monthYear})`,
        `${a.name} vs ${b.name}: фьючерсы ${fees}, плечо ${lev}, продукты, страны, KYC и реферальные коды — официальные данные (${monthYear})`,
        `${a.name} vs ${b.name}: фьючерсы ${fees}, плечо ${lev}, продукты, страны, KYC и реферальные коды — данные бирж (${monthYear})`,
        `${a.name} vs ${b.name}: фьючерсы ${fees}, плечо ${lev}, продукты, страны, KYC, реферальные коды (${monthYear})`,
      );
    },
    keywords: (a, b, former) => {
      const ra = readingOf(a.slug, locale)?.toLowerCase();
      const rb = readingOf(b.slug, locale)?.toLowerCase();
      return [
        `${a.name} vs ${b.name}`,
        `${b.name} vs ${a.name}`,
        `${a.name} или ${b.name}`,
        `${a.name} или ${b.name} что лучше`,
        `что лучше ${a.name} или ${b.name}`,
        `сравнение ${a.name} и ${b.name}`,
        `комиссии ${a.name} и ${b.name}`,
        `${a.name} vs ${b.name} фьючерсы`,
        `лучше ли ${a.name} чем ${b.name}`,
        `лучше ли ${b.name} чем ${a.name}`,
        ...(ra && rb ? [`${ra} или ${rb}`, `${ra} vs ${rb}`] : []),
        ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
      ];
    },

    crumbHome: "Главная",
    crumbHub: "Сравнение бирж",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} — биржа, которая раньше называлась ${formerName}.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${withReading(a, locale)} и ${withReading(b, locale)} — централизованные биржи для спотовой торговли и торговли фьючерсами с кредитным плечом, и у обеих есть реферальная программа для новых пользователей. ${bare(pickA)}. ${bare(pickB)}.${formerNote ? ` ${formerNote}` : ""} В этом прямом сравнении их комиссии, кредитное плечо, продукты, доступность по странам, правила верификации и реферальные предложения стоят рядом; каждую цифру мы проверили ${date} на собственных сайтах бирж.`,

    toc: {
      "at-a-glance": "Коротко о главном",
      verdict: "Что выбрать",
      fees: "Комиссии",
      leverage: "Плечо и глубина рынка",
      products: "Продукты",
      countries: "Страны",
      kyc: "Верификация (KYC)",
      safety: "Безопасность и регулирование",
      referral: "Реферальные коды",
      "pros-cons": "Плюсы и минусы",
      faq: "Частые вопросы",
      sources: "Источники",
    },
    onThisPage: "На этой странице",

    /* Hero */
    updated: (date) => `Проверено и обновлено ${date}`,
    h1: (a, b) => `${withReading(a, locale)} vs ${withReading(b, locale)}: сравнение комиссий, кредитного плеча и безопасности`,
    quickAnswer: "Краткий ответ",
    keyFigures: "Ключевые цифры",
    chips: (a, b, oiA, oiB) => [
      `Фьючерсы ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Спот ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Плечо ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Открытый интерес ${oiA} vs ${oiB}`,
    ],
    boxTitle: "Регистрация с реферальным кодом",
    boxNote: "Оба кода бесплатны и никогда не повышают ваши комиссии.",
    codeLabel: (e) => `Реферальный код ${e.name}`,
    boxRisk: () => (
      <>
        {"Торговля с кредитным плечом связана с высоким риском. Ни одна из двух бирж не работает во всех странах — подробнее в разделе "}
        <a href="#countries">«Страны»</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name}: коротко о главном`,
    glanceText: (a, b, s) =>
      `Ищете ли вы «${a.name} vs ${b.name}» или «${b.name} vs ${a.name}», сравнение одно и то же. Из ${slavicCount(s.measurable, points.of)}, по которым цифры позволяют определить лидера, ${a.name} впереди по ${slavicCount(s.a.length, points.by)}, ${b.name} — по ${s.b.length}${s.tie.length ? `; наравне: ${s.tie.length}` : ""}. Пункты не равнозначны: активному трейдеру низкие комиссии важнее, чем длинный список монет, поэтому ориентируйтесь на те строки, которые соответствуют вашему стилю торговли.`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: комиссии, кредитное плечо, размер рынка, продукты, страны, верификация и реферальные правила`,
    compared: "Показатель",
    ahead: "Впереди",
    level: "Наравне",
    glanceNote: (marketDate, date) =>
      `Комиссии: стандартный уровень (без VIP). Открытый интерес, объем и количество рынков: ${cmc} (${marketDate}). «–» означает, что эти два значения нельзя сравнить между собой. Всё остальное мы проверили ${date} на собственных сайтах бирж.`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} или ${b.name}: что выбрать?`,
    verdictText:
      "Абсолютного победителя нет: каждая биржа рассчитана на свой тип трейдера. Два блока ниже показывают, кому подходит каждая из них и в чем она измеримо опережает другую.",
    bestFor: (role) => `Сильная сторона: ${lcFirst(role)}`,
    chooseIf: (e) => `Выбирайте ${e.name}, если…`,
    aheadOf: (e, other) => `В чем ${e.name} опережает биржу ${other.name}`,
    noAdvantage: "По пунктам, которые мы сравниваем, измеримых преимуществ нет.",
    thinkTwice: "Подумайте дважды, если…",
    codeButton: (e) => `Реферальный код ${e.name} ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `Комиссии: ${a.name} vs ${b.name}`,
    feesModel:
      "Обе биржи работают по модели мейкер / тейкер: лимитные ордера, которые добавляют ликвидность, платят комиссию мейкера, а ордера, которые забирают ликвидность, — комиссию тейкера.",
    feesCaption: (a, b) => `Стандартные комиссии ${a.name} и ${b.name} на споте и фьючерсах`,
    exchange: "Биржа",
    futuresMaker: "Фьючерсы, мейкер",
    futuresTaker: "Фьючерсы, тейкер",
    spotMaker: "Спот, мейкер",
    spotTaker: "Спот, тейкер",
    otherMarkets: "Другие рынки (мейкер / тейкер)",
    feesNote: (date) =>
      `Стандартные ставки (без VIP), опубликованные каждой биржей (проверено ${date}). Комиссии меняются — перед торговлей сверьтесь с данными биржи.`,
    tokenTitle: "Скидки за оплату токеном и важные условия",
    noTokenDiscount: "Скидка на комиссии при оплате токеном биржи не опубликована.",

    /* Leverage */
    leverageTitle: "Кредитное плечо и глубина рынка",
    leverageRisk: "Высокое кредитное плечо резко повышает риск ликвидации: максимум — это предел, а не рекомендация.",
    leverageCaption: (a, b) => `Кредитное плечо и данные рынка деривативов ${a.name} и ${b.name}`,
    maxLeverage: "Максимальное кредитное плечо",
    openInterest: "Открытый интерес",
    volume24h: "Объем деривативов за 24 ч",
    derivativesMarkets: "Рынки деривативов",
    listedAssets: "Активы в листинге (данные биржи)",
    leverageNote: (marketDate) =>
      `Рыночные данные: ${cmc} (${marketDate}). Биржи считают активы в листинге по-разному: одни — монеты, другие — торговые пары.`,

    /* Products */
    productsTitle: (a, b) => `Продукты: что предлагают ${a.name} и ${b.name}`,
    productsSame: (compared) =>
      `Обе биржи показывают на своих сайтах все ${countNoun(compared, ["продукт", "продукта", "продуктов"])}, которые мы сравниваем; различия — в деталях.`,
    productsLegend: (date) => `Галочка означает, что биржа показывает продукт на собственном сайте; прочерк — что ${date} мы не нашли там страницы о нем.`,
    productsCaption: (a, b) => `Продукты ${a.name} и ${b.name}`,
    product: "Продукт",
    offered: "Предлагается",
    notOffered: "Не предлагается",
    noPage: "Страница на сайте биржи не найдена",

    /* Countries */
    countriesTitle: (a, b) => `Страны: где доступны ${a.name} и ${b.name}`,
    countriesText: (compared, differing) =>
      `Вот что говорят собственные условия каждой биржи о ${countNoun(compared, ["стране", "странах", "странах"])}. Биржи расходятся в ${differing} из них. «${ct.statusLabel.regional}» означает, что биржа обслуживает страну через отдельную платформу со своими продуктами, комиссиями и лимитами.`,
    countriesCaption: (a, b) => `Доступность ${a.name} и ${b.name} по странам`,
    country: "Страна",
    countriesNote: (date) =>
      `«${ct.statusLabel.open}» означает, что по состоянию на ${date} страны нет в списке ограничений биржи; это не гарантирует, что там доступны все продукты. Обе биржи запрещают обходить ограничения с помощью VPN или ложных данных.`,
    differTitle: "Где биржи расходятся",
    differQuestion: (a, b, countryName) => {
      const key = countryList.find((c) => c.name === countryName || c.short === countryName)?.key;
      return key ? `${a.name} или ${b.name} ${inCountry(key)}?` : `${a.name} или ${b.name}: ${countryName}?`;
    },
    neither: (a, b, hrefA, hrefB) => (
      <>
        Ни одна из двух не работает там, где вы живете? Таблицы стран на страницах альтернатив показывают, какие другие биржи принимают пользователей из вашей
        страны: <Link href={hrefA}>альтернативы {a.name} по странам</Link> · <Link href={hrefB}>альтернативы {b.name} по странам</Link>.
      </>
    ),
    restrictedTitle: "Страны с ограничениями и региональные платформы",
    whereNot: (e) => `Где недоступна ${e.name}?`,
    regionalPlatforms: "Региональные платформы:",

    /* Verification */
    kycTitle: (a, b) => `Верификация: ${a.name} vs ${b.name}`,
    kycText:
      "Обе биржи требуют от новых пользователей пройти верификацию личности, поэтому для торговли без KYC не подходит ни одна из них. Разница в том, что еще может делать неверифицированный аккаунт и как проходит проверка.",
    documents: "Документы:",
    minAge: "Минимальный возраст:",
    howToRegister: (e) => `Как зарегистрироваться и пройти верификацию на ${e.name}: пошагово`,

    /* Safety */
    safetyTitle: (a, b) => `Безопасность и регулирование: ${a.name} vs ${b.name}`,
    safetyText:
      "Ни одна централизованная биржа не свободна от рисков. Сравнить можно то, что каждая из них публикует о себе: где у нее есть лицензии, подтверждает ли она свои резервы (Proof of Reserves) и держит ли фонд на случай чрезвычайных ситуаций.",
    safetyCaption: (a, b) => `Регулирование, подтверждение резервов и фонды защиты ${a.name} и ${b.name}`,
    licences: "Лицензии, которые называет биржа",
    entity: "Компания-оператор",
    reserves: "Подтверждение резервов",
    fund: "Фонд защиты",
    founded: "Год основания",
    isSafe: (e) => `Безопасна ли ${e.name}?`,
    safetyDetail: (e) => `Безопасность и доступность ${e.name}: подробно`,

    /* Referral codes */
    referralTitle: (a, b) => `Реферальные коды и предложения для новых пользователей: ${a.name} vs ${b.name}`,
    referralText:
      "Какую бы биржу вы ни выбрали, регистрируйтесь с реферальным кодом: это ничего не стоит, никогда не повышает комиссии и открывает доступ к предложению для новых пользователей. Обратите внимание на последнюю строку: забытый код не всегда можно добавить позже.",
    referralCaption: (a, b) => `Реферальные коды и предложения для новых пользователей ${a.name} и ${b.name}`,
    referralCodeOf: (e) => `Реферальный код ${e.name}`,
    referralCode: "Реферальный код",
    newUserOffer: "Предложение для новых пользователей",
    inviteeReward: "Что вы получаете как приглашенный пользователь",
    covers: "На что распространяется одна реферальная привязка",
    whereCode: "Куда вводить код",
    addLater: "Можно ли добавить позже?",
    referralNote: (date) =>
      `Предложения проверены ${date}; приветственные вознаграждения зависят от выполнения заданий, требуют верификации личности и различаются по странам.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `Плюсы и минусы ${a.name} и ${b.name}`,
    pros: "Плюсы",
    cons: "Минусы",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} — частые вопросы`,
    faqText: (count, a, b) =>
      `${slavicCount(count, ["вопрос", "вопроса", "вопросов"])} о выборе между ${a.name} и ${b.name}: комиссии, кредитное плечо, страны, верификация, продукты и реферальные коды.`,

    /* Sources */
    sourcesTitle: "Источники: откуда эти цифры",
    sourcesText: (date, marketDate) =>
      `Всё, что на этой странице сказано о комиссиях, кредитном плече, продуктах, верификации, странах, лицензиях, резервах и реферальных правилах, мы проверили ${date} на собственных сайтах и в справочных центрах обеих бирж. Открытый интерес, объем торгов и количество рынков деривативов взяты из ${cmcGen} (${marketDate}). Биржи меняют условия без предупреждения, поэтому последнее слово — за страницами ниже.`,
    officialPages: (e, count) => `${e.name}: ${slavicCount(count, ["официальная страница", "официальные страницы", "официальных страниц"])}`,

    /* More comparisons */
    moreTitle: "Другие сравнения",
    against: (e) => `Сравнение ${e.name} с другими биржами`,
    allAlternatives: (e) => `Все альтернативы ${e.name}`,
    allComparisons: "Все сравнения бирж",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>Предупреждение о рисках:</strong>{" "}
        {
          "криптовалютные деривативы — сложные инструменты. Кредитное плечо умножает и прибыль, и убытки, и всю маржу можно потерять за считаные минуты. Эта страница носит исключительно информационный характер; это не финансовая рекомендация. Если вы зарегистрируетесь по нашим ссылкам, мы можем получить комиссионное вознаграждение (подробнее — на странице "
        }
        <Link href={disclosureHref}>«О партнерских ссылках»</Link>
        {"). На цифры это не влияет: все они взяты у самих бирж."}
      </>
    ),
    ctaTitle: (a, b) => `${a.name} или ${b.name}? Начните с реферального кода`,
    ctaText: "Один аккаунт для спота и фьючерсов на любой из двух бирж — без дополнительных затрат.",
    ctaButton: "Сравнить другие биржи",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) =>
      fit(TITLE_MAX, `Сравнение криптобирж (${shortMonthYear}): ${slavicCount(pairs, pairForms)}`, `Сравнение криптобирж (${shortMonthYear})`),
    /** 140–155 characters: the longest variant that fits. */
    description: (exchangeNames, pairs, monthYear) =>
      fit(
        DESC_MAX,
        `${exchangeNames} попарно: ${slavicCount(pairs, pairForms)} комиссий, плеча, стран, KYC и реферальных кодов — официальные данные (${monthYear})`,
        `${exchangeNames}: ${slavicCount(pairs, pairForms)} комиссий, плеча, стран, KYC и реферальных кодов — официальные данные (${monthYear})`,
        `${exchangeNames}: ${slavicCount(pairs, pairForms)} комиссий, плеча, стран, KYC и реферальных кодов (${monthYear})`,
      ),
    crumbHome: "Главная",
    crumbPage: "Сравнение бирж",
    listName: "Прямые сравнения криптобирж",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `Проверено и обновлено ${date}`,
    h1: (pairs) => `Сравнение криптобирж: ${slavicCount(pairs, pairForms)}`,
    lead: (exchangeCount) =>
      `Мы сравниваем ${slavicCount(exchangeCount, exchangeFormsAcc)} попарно, и каждую пару — по одним и тем же пунктам: комиссии, кредитное плечо, глубина рынка, продукты, доступность по странам, верификация личности, регулирование и реферальные предложения. Каждое сравнение опирается на цифры с собственных сайтов бирж.`,
    quickAnswer: "Краткий ответ",

    pickTitle: "Выберите две биржи для сравнения",
    pickText: (others) =>
      `В каждом блоке одна биржа сопоставлена с ${slavicCount(others, othersInstr)}. Для каждой пары есть одна страница, поэтому «Binance vs OKX» и «OKX vs Binance» ведут к одному и тому же сравнению.`,
    alternativesOf: (e) => `Альтернативы ${e.name}`,
    referralCodeOf: (e) => `Реферальный код ${e.name}`,

    tableTitle: (exchangeCount) => `Все ${slavicCount(exchangeCount, exchangeForms)} бок о бок`,
    tableText: "Предложения для новых пользователей, стандартные комиссии (без VIP), кредитное плечо и глубина рынка каждой биржи в одной таблице.",
    tableNote: (date, marketDate) =>
      `Комиссии: стандартный уровень по данным каждой биржи (проверено ${date}). Открытый интерес и количество рынков: CoinMarketCap (${marketDate}).`,

    alternativesTitle: "Одна биржа в сравнении со всеми остальными",
    alternativesText: (others) =>
      `Выбираете не между двумя биржами, а ищете замену? Страницы альтернатив сравнивают одну биржу сразу с ${slavicCount(others, othersInstr)} и показывают, какие из них принимают пользователей из вашей страны.`,

    faqTitle: "Сравнение бирж — частые вопросы",

    ctaTitle: "Определились? Зарегистрируйтесь с реферальным кодом",
    ctaText: (exchangeCount) =>
      `Проверенные коды для всех ${slavicCount(exchangeCount, exchangeFormsGen)} — один аккаунт для спота и фьючерсов без дополнительных затрат.`,
    ctaButton: "Посмотреть все реферальные коды",
  },
};
