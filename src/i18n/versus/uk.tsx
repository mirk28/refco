/**
 * The head-to-head pages ("/uk/<a>-vs-<b>") and the comparison hub ("/uk/compare") in Ukrainian.
 * Same keys as `./en.tsx`, written natively for readers in Ukraine.
 *
 * Wording: "біржа" / "криптобіржа", "комісії", "реферальний код", "кредитне плече" (then "плече"), polite "ви".
 * The pages call themselves "пряме порівняння", the hub "Порівняння бірж"; the better value of a row is "Попереду",
 * a tie "Нарівні". "vs" stays "vs". Exchange names stay Latin, are never declined and take feminine agreement
 * ("Binance запустила"); their case shows only through a preposition ("на", "від", "для", "за", "з") or after a noun
 * ("комісії Binance"). Nothing that alternates with the next sound (у / в, і / й, з / із) stands next to a variable.
 * The Cyrillic spelling of a name ("Binance (Бінанс)") appears only in the title, the H1, the first mention of the
 * opening texts and the keywords. Counted nouns come from `slavicCount` (nominative / accusative) or `caseCount`
 * below (genitive, instrumental, locative). Generated dates ("16 листопада 2026 р.") never stand before a full stop.
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
import { slavicCount } from "../slavic-count";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "uk";
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
 * Country names that a sentence needs in another case than the nominative of `compareText("uk").countries`:
 * accusative ("не включає Канаду") and "in" ("у Канаді"). The Emirates are spelled out in a question
 * (first mention) and abbreviated in the answers.
 */
const countryForms: Record<CountryKey, { acc: string; in: string; inFull?: string }> = {
  us: { acc: "США", in: "у США" },
  uk: { acc: "Велику Британію", in: "у Великій Британії" },
  ca: { acc: "Канаду", in: "у Канаді" },
  de: { acc: "Німеччину", in: "у Німеччині" },
  fr: { acc: "Францію", in: "у Франції" },
  nl: { acc: "Нідерланди", in: "у Нідерландах" },
  es: { acc: "Іспанію", in: "в Іспанії" },
  it: { acc: "Італію", in: "в Італії" },
  au: { acc: "Австралію", in: "в Австралії" },
  jp: { acc: "Японію", in: "в Японії" },
  sg: { acc: "Сінгапур", in: "у Сінгапурі" },
  hk: { acc: "Гонконг", in: "у Гонконгу" },
  in: { acc: "Індію", in: "в Індії" },
  ae: { acc: "ОАЕ", in: "в ОАЕ", inFull: "в Об'єднаних Арабських Еміратах (ОАЕ)" },
};
const inCountry = (key: CountryKey) => countryForms[key].inFull ?? countryForms[key].in;

/**
 * A number with its noun in an oblique case (genitive, instrumental, locative): 1, 21, 31 … take the singular,
 * every other number the plural – "з 11 вимірюваних пунктів", "за 1 пунктом", "на 671 ринку", "на 819 ринках".
 */
const caseCount = (n: number, one: string, many: string) => `${n} ${n % 10 === 1 && n % 100 !== 11 ? one : many}`;

/* ---------------------------------- helpers --------------------------------- */

/**
 * A text from the data inside a sentence: lower-cases a Cyrillic first letter ("Так –" → "так –", "До 150x" →
 * "до 150x", "Обов'язкова" → "обов'язкова", "Ви хочете" → "ви хочете"). Latin names and abbreviations
 * ("Binance", "P2P", "Earn") and Cyrillic abbreviations ("ЄЕЗ", "США") keep their capitals.
 */
const lcFirst = (s: string) => {
  const first = s.split(/[\s,.:;()–]/)[0];
  if (!first || !/^[А-ЯЄІЇҐ]/.test(first) || first.slice(1) !== first.slice(1).toLowerCase()) return s;
  return s.charAt(0).toLowerCase() + s.slice(1);
};
/** "320+ млн зареєстрованих користувачів (за даними Binance)" / "390 монет, 509 спотових пар (Bybit API)" → without the bracket. */
const withoutSource = (s: string) => s.replace(/\s*\((?:за даними [^()]*|[^()]*\bAPI)\)/, "");
/** A data text that code closes itself, without a final full stop (`pick`, `chooseIf`); a final "р." stays. */
const bare = (s: string) => s.trim().replace(/(?<!\sр)\.$/, "");
/** "До 150x (безстрокові контракти BTCUSDT та ETHUSDT)" → "до 150x (…)" inside a sentence. */
const leverageText = (e: Exchange) => lcFirst(e.maxLeverage);
/** The names of the exchanges in a sentence, with the Cyrillic spelling at the first mention of each. */
const firstMentions = () => {
  const seen = new Set<string>();
  return (list: Exchange[]) => joinList(list.map((e) => (seen.has(e.slug) ? e.name : (seen.add(e.slug), withReading(e, locale)))));
};
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
const leverageRisk = "Високе кредитне плече різко підвищує ризик ліквідації.";
const regionalNote = "Регіональна платформа зазвичай має власний набір продуктів, власні комісії та ліміти.";
const cmcRanking = "рейтингу деривативних бірж CoinMarketCap";

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `${e.name} попереду за такими пунктами: ${joinList(rows.map((r) => r.topic))}` : `${e.name} не має переваги в жодному з них`;
  return `Жодна з двох бірж – ні ${a.name}, ні ${b.name} – не краща за всіма пунктами. З ${caseCount(s.measurable, "вимірюваного пункту", "вимірюваних пунктів")} цього порівняння ${a.name} попереду за ${caseCount(s.a.length, "пунктом", "пунктами")}, ${b.name} – за ${s.b.length}${s.tie.length ? `, ще ${s.tie.length} – нарівні` : ""}. ${lead(a, s.a)}. ${lead(b, s.b)}. Обирайте ${a.name}, якщо ${lcFirst(bare(altInfo(a).chooseIf[0]))}. Обирайте ${b.name}, якщо ${lcFirst(bare(altInfo(b).chooseIf[0]))}.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb) return `${a.name} та ${b.name} мають однакове максимальне кредитне плече: ${a.name} – ${leverageText(a)}, ${b.name} – ${leverageText(b)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} пропонує вище максимальне кредитне плече – ${leverageText(hi)}, тоді як ${lo.name} – ${leverageText(lo)}.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `У ${cmcRanking} (${prettyDate(site.marketDataDate)}) відкритий інтерес ${a.name} становив ${formatBn(a.market.openInterestBn)} на ${caseCount(a.market.markets, "ринку", "ринках")}, а ${b.name} – ${formatBn(b.market.openInterestBn)} на ${caseCount(b.market.markets, "ринку", "ринках")}. Глибший ринок має ${deeper.name}, а це зазвичай означає вужчі спреди на великих ордерах.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} пропонує ${joinList(notOffered.map((f) => f.noun))}, а ${b.name} – ні.` : "",
    notFound.length
      ? `${a.name} пропонує ${joinList(notFound.map((f) => f.noun))}; на власному сайті ${b.name} ми ${verb(notFound, "такого продукту", "таких продуктів")} не знайшли.`
      : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const place = countryForms[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} закрита для ${c.residents}${extra}`;
  if (status === "regional") return `${e.name} обслуговує ${c.residents} через регіональну платформу${extra}`;
  if (status === "partial") return `${e.name} має часткові обмеження ${place.in}${extra}`;
  return `${e.name} не включає ${place.acc} до списку країн з обмеженнями`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("uk").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. Списки країн змінюються, а відсутність країни в списку ще не гарантує доступу до всіх продуктів – остаточно це визначають умови самої біржі.`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key) ? "на обох біржах" : has(a, key) ? `лише на ${a.name}` : has(b, key) ? `лише на ${b.name}` : "на сайтах обох бірж не знайдено";
  const noTokenDiscount = "Такої знижки біржа не публікує.";
  const noFund = "Фонд захисту не названо.";
  const noMica = "на власних сторінках не називає жодної юридичної особи з дозволом за MiCA";

  const verdict: Faq[] = [
    { q: `${a.name} чи ${b.name}: що краще?`, a: versusAnswer(a, b, s) },
    {
      q: `Яка головна різниця між ${a.name} та ${b.name}?`,
      a: `${bare(ia.pick)}. ${bare(ib.pick)}.${aheadA.length ? ` Найпомітніші вимірювані переваги ${a.name}: ${aheadA.slice(0, 2).map(lcFirst).join("; ")}.` : ""}${aheadB.length ? ` Переваги ${b.name}: ${aheadB.slice(0, 2).map(lcFirst).join("; ")}.` : ""}`,
    },
    {
      q: `Чи більша ${a.name} за ${b.name}?`,
      a: `У ${cmcRanking} (${marketDate}) відкритий інтерес ${a.name} становив ${formatBn(a.market.openInterestBn)}, а обсяг торгів за 24 години – ${formatBn(a.market.volume24hBn)}; для ${b.name} – ${formatBn(b.market.openInterestBn)} та ${formatBn(b.market.volume24hBn)}. За власними даними бірж, ${a.name} має ${withoutSource(a.users)}, а ${b.name} – ${withoutSource(b.users)}.`,
    },
    {
      q: `${a.name} чи ${b.name}: що краще для початківців?`,
      a: `Для першого акаунта важливі три речі: простий спосіб купити криптовалюту, можливість потренуватися та низькі комісії. Купівля карткою або банківським переказом: ${state("fiat")}. Демоторгівля: ${state("demoTrading")}. Копітрейдинг: ${state("copyTrading")}. ${feeSentence(a, b, "spot")} Верифікація особи – ${a.name}: ${lcFirst(a.signup.kycShort)}; ${b.name}: ${lcFirst(b.signup.kycShort)}.`,
    },
    {
      q: `${a.name} чи ${b.name}: що краще для торгівлі ф'ючерсами?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Де нижчі комісії: на ${a.name} чи на ${b.name}?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} Це стандартні ставки (без VIP); VIP-рівні та власні токени бірж знижують їх ще більше.`,
    },
    {
      q: `Чи дають ${a.name} та ${b.name} знижку на комісії за оплату власним токеном?`,
      a: `${a.name}: ${lcFirst(a.tokenDiscount || noTokenDiscount)} ${b.name}: ${lcFirst(b.tokenDiscount || noTokenDiscount)}`,
    },
    { q: `Де вище кредитне плече: на ${a.name} чи на ${b.name}?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `Де більше монет: на ${a.name} чи на ${b.name}?`,
      a: `За власними даними бірж, ${a.name} має ${withoutSource(a.assets)}, а ${b.name} – ${withoutSource(b.assets)}. Біржі рахують по-різному: одні – монети, інші – торгові пари, тому ці дві цифри не можна порівнювати напряму.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `Чи доступні ${a.name} та ${b.name} ${inCountry(c.key)}?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `Чи обов'язкова верифікація (KYC) на ${a.name} та ${b.name}?`,
      a: `Так, обидві біржі вимагають від нових користувачів верифікації особи. ${a.name}: ${lcFirst(a.signup.kycShort)}. ${b.name}: ${lcFirst(b.signup.kycShort)}. Для торгівлі без верифікації не підходить жодна з них.`,
    },
    {
      q: `Яка біржа надійніша: ${a.name} чи ${b.name}?`,
      a: `Жодна централізована біржа не позбавлена ризиків, тож чесно порівняти можна лише те, що публікує кожна з них. ${a.name}: ${lcFirst(bare(a.regulation))}. Підтвердження резервів (Proof of Reserves) – ${lcFirst(bare(ia.reserves))}. ${ia.fund ? `${bare(ia.fund)}.` : noFund} ${b.name}: ${lcFirst(bare(b.regulation))}. Підтвердження резервів – ${lcFirst(bare(ib.reserves))}. ${ib.fund ? `${bare(ib.fund)}.` : noFund} На будь-якій з двох бірж тримайте лише ті кошти, якими активно торгуєте.`,
    },
    {
      q: `Чи мають ${a.name} та ${b.name} дозвіл за MiCA в ЄС?`,
      a: `${a.name}: ${ia.mica ? `так – ${ia.mica}` : noMica}. ${b.name}: ${ib.mica ? `так – ${ib.mica}` : noMica}. ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `Нічого. Серед ${caseCount(featureList.length, "продукту", "продуктів")}, які ми порівнюємо, немає жодного, який ${x.name} показує на своєму сайті, а ${y.name} – ні.`;
  const products: Faq[] = [
    { q: `Що пропонує ${a.name}, чого немає на ${b.name}?`, a: onlyA || nothing(a, b) },
    { q: `Що пропонує ${b.name}, чого немає на ${a.name}?`, a: onlyB || nothing(b, a) },
    {
      q: `Чи є на ${a.name} та ${b.name} копітрейдинг, торгові боти, опціони та демоторгівля?`,
      a: `Копітрейдинг: ${state("copyTrading")}. Торгові боти: ${state("tradingBots")}. Опціони: ${state("options")}. Демоторгівля: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Там, де названо лише одну біржу, ми не знайшли сторінки цього продукту на власному сайті іншої біржі (перевірено ${prettyDate(site.lastReviewed)}).` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `Які реферальні коди для ${a.name} та ${b.name}?`,
      a: `${a.name}: ${a.referralCode} – ${lcFirst(a.referral.whereShort)}. ${b.name}: ${b.referralCode} – ${lcFirst(b.referral.whereShort)}. Обидва коди безкоштовні та не підвищують ваших торгових комісій.`,
    },
    {
      q: `Де кращий бонус за реєстрацію: на ${a.name} чи на ${b.name}?`,
      a: `${a.name}: ${lcFirst(offer(a))}. ${b.name}: ${lcFirst(offer(b))}. Вітальні винагороди на обох біржах залежать від умов – верифікації особи, депозиту чи обсягу торгів – і відрізняються залежно від країни, тож порівнюйте умови, а не цифру в заголовку.`,
    },
    {
      q: `Чи можна прив'язати реферальний код після реєстрації на ${a.name} чи ${b.name}?`,
      a: `${a.name}: ${lcFirst(a.referral.afterSignupShort)}. ${b.name}: ${lcFirst(b.referral.afterSignupShort)}. Надійний спосіб на обох біржах – реєструватися за реферальним посиланням.`,
    },
    {
      q: `Чи можна користуватися біржами ${a.name} та ${b.name} одночасно?`,
      a: "Так. Це окремі компанії, тому акаунт на одній біржі ніяк не впливає на акаунт на іншій, і багато трейдерів тримають кошти на двох біржах. Рівень комісій, реферальна прив'язка та винагороди належать конкретному акаунту й не переносяться.",
    },
    {
      q: `Як перевести криптовалюту з ${a.name} на ${b.name}?`,
      a: `1. Відкрийте акаунт на ${b.name} з реферальним кодом ${b.referralCode} та пройдіть верифікацію особи. 2. Закрийте відкриті ф'ючерсні та маржинальні позиції на ${a.name} – позиції не можна перенести на іншу біржу. 3. На ${b.name} скопіюйте адресу депозиту для потрібної монети та мережі. 4. Виведіть кошти з ${a.name} на цю адресу в тій самій мережі, а спершу надішліть невелику тестову суму: переказ у неправильній мережі можна втратити. У зворотному напрямку кроки ті самі.`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} чи ${b.name}: що краще?`, faqs: verdict },
    { id: "fees", title: "Комісії, кредитне плече та монети", faqs: fees },
    { id: "countries", title: "Країни, KYC та безпека", faqs: countries },
    { id: "products", title: "Продукти", faqs: products },
    { id: "referral", title: "Реферальні коди та перехід між біржами", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) => {
  const first = firstMentions();
  const lowest = first(lowF);
  const highest = first(hi);
  const deepest = first(oi);
  const micaNames = first(mica);
  return `${lowest} ${verb(lowF, "має", "мають")} найнижчі стандартні комісії на ф'ючерсах (${feePair(lowF[0].futuresFees)}, мейкер / тейкер), ${highest} – найвище кредитне плече (${leverageOf(hi[0])}x), а ${deepest} – найглибший ринок деривативів (відкритий інтерес ${formatBn(oi[0].market.openInterestBn)}). ${micaNames} ${verb(mica, "має", "мають")} платформу з дозволом за MiCA для мешканців Європейської економічної зони (ЄЕЗ). Яка біржа краща саме для вас, залежить від того, між якими двома ви обираєте. Оберіть цю пару нижче.`;
};

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "Яка криптобіржа має найнижчі комісії?",
      a: `На стандартному рівні ${names(lowF)} ${verb(lowF, "має", "мають")} найнижчі комісії на ф'ючерсах – ${feePair(lowF[0].futuresFees)} (мейкер / тейкер), а ${names(lowS)} – найнижчі комісії на споті: ${feePair(lowS[0].spotFees)}. Інші біржі: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} – ${feePair(e.futuresFees)} на ф'ючерсах та ${feePair(e.spotFees)} на споті`)
        .join("; ")}. VIP-рівні та власні токени бірж знижують ці ставки ще більше.`,
    },
    {
      q: "Яка криптобіржа пропонує найвище кредитне плече?",
      a: `${names(hi)}: ${leverageText(hi[0])}. Інші: ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} – ${leverageOf(e)}x`)
        .join(", ")}. ${leverageRisk}`,
    },
    {
      q: "Яка криптобіржа має найглибший ринок ф'ючерсів?",
      a: `Відкритий інтерес у ${cmcRanking} (${marketDate}): ${ranked.map((e) => `${e.name} – ${formatBn(e.market.openInterestBn)}`).join(", ")}. Глибший ринок зазвичай означає вужчі спреди на великих ордерах.`,
    },
    {
      q: "Які біржі мають платформу з дозволом за MiCA для ЄЕЗ?",
      a: `Таку платформу ${verb(mica, "має", "мають")} ${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}. ${names(noMica)} ${verb(noMica, "не називає", "не називають")} на власних сторінках жодної юридичної особи з дозволом за MiCA. ${regionalNote}`,
    },
    {
      q: "Які біржі дозволяють прив'язати реферальний код після реєстрації?",
      a: `${later.map((e) => `${e.name}: ${lcFirst(e.referral.afterSignupShort)}`).join(". ")}. На ${names(signupOnly)} код зараховується лише під час реєстрації або спосіб додати його пізніше не описано, тож на будь-якій біржі надійніше реєструватися за реферальним посиланням.`,
    },
    {
      q: "Як ми робимо ці порівняння?",
      a: `Кожну цифру ми беремо з власного сайту чи довідкового центру біржі (таблиці комісій, умови, списки країн з обмеженнями, сторінки продуктів), і кожна сторінка наводить свої джерела. Відкритий інтерес, обсяг торгів і кількість ринків деривативів – з ${cmcRanking}. Яка біржа попереду за певним пунктом, видно безпосередньо з цих цифр; власного рейтингу ми не складаємо. Цифри актуальні на дату поточної перевірки (${date}).`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

const pairForms = ["пряме порівняння", "прямі порівняння", "прямих порівнянь"] as const;
const exchangeForms = ["біржа", "біржі", "бірж"] as const;

export const uk: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row in the list after "попереду за такими пунктами:" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "Комісії на ф'ючерсах (мейкер / тейкер)", topic: "комісії на ф'ючерсах" },
    spotFees: { label: "Комісії на споті (мейкер / тейкер)", topic: "комісії на споті" },
    leverage: { label: "Максимальне кредитне плече", topic: "максимальне кредитне плече" },
    openInterest: { label: "Відкритий інтерес за деривативами", topic: "відкритий інтерес" },
    volume: { label: "Обсяг деривативів за 24 год", topic: "обсяг торгів деривативами за 24 години" },
    markets: { label: "Ринки деривативів", topic: "кількість ринків деривативів" },
    users: { label: "Користувачі (дані біржі)", topic: "кількість користувачів" },
    assets: { label: "Активи в лістингу (дані біржі)", topic: "" },
    founded: { label: "Рік заснування", topic: "" },
    products: { label: (compared) => `Знайдені продукти (з ${compared} порівнюваних)`, topic: "набір продуктів" },
    countries: { label: (compared) => `Закриті країни (з ${compared} порівнюваних)`, topic: "доступність у країнах" },
    mica: { label: "Платформа в ЄЕЗ з дозволом за MiCA", topic: "дозвіл за MiCA" },
    kyc: { label: "Верифікація особи (KYC)", topic: "" },
    addLater: { label: "Чи можна додати реферальний код пізніше?", topic: "прив'язка реферального коду після реєстрації" },
    offer: { label: "Пропозиція для нових користувачів", topic: "" },
    reserves: { label: "Підтвердження резервів", topic: "" },
    fund: { label: "Фонд захисту", topic: "" },
  },
  countOf: (count, of) => `${count} з ${of}`,
  noMica: "Не названо",
  noFund: "Не названо",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    /* Three wordings, chosen per pair; the Cyrillic spellings (Binance (Бінанс)) stay where they fit. */
    title: (a, b, shortMonthYear) => {
      const y = yearOf(shortMonthYear);
      const forms = (an: string, bn: string) =>
        [
          [`${an} vs ${bn} (${shortMonthYear}): комісії, плече та бонуси`, `${an} vs ${bn} (${shortMonthYear}): комісії та плече`],
          [`${an} чи ${bn}? Порівняння комісій, плеча та KYC`, `${an} чи ${bn}? Комісії, плече та KYC`],
          [`${an} vs ${bn}: яка біржа краща у ${y} році?`, `${an} vs ${bn}: яка біржа краща?`],
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
        `${a.name} vs ${b.name}: комісії на ф'ючерсах ${fees}, кредитне плече ${lev}, а також продукти, країни, KYC і реферальні коди – офіційні дані бірж (${monthYear})`,
        `${a.name} vs ${b.name}: ф'ючерси ${fees}, кредитне плече ${lev}, а також продукти, країни, KYC і реферальні коди – офіційні дані бірж (${monthYear})`,
        `${a.name} vs ${b.name}: ф'ючерси ${fees}, плече ${lev}, а також продукти, країни, KYC і реферальні коди – офіційні дані бірж (${monthYear})`,
        `${a.name} vs ${b.name}: ф'ючерси ${fees}, плече ${lev}, продукти, країни, KYC і реферальні коди – офіційні дані бірж (${monthYear})`,
        `${a.name} vs ${b.name}: ф'ючерси ${fees}, плече ${lev}, продукти, країни, KYC і реферальні коди – офіційні дані (${monthYear})`,
      );
    },
    keywords: (a, b, former) => {
      const ra = readingOf(a.slug, locale)?.toLowerCase();
      const rb = readingOf(b.slug, locale)?.toLowerCase();
      return [
        `${a.name} vs ${b.name}`,
        `${b.name} vs ${a.name}`,
        `${a.name} чи ${b.name}`,
        `що краще ${a.name} чи ${b.name}`,
        `порівняння ${a.name} та ${b.name}`,
        `комісії ${a.name} та ${b.name}`,
        `ф'ючерси ${a.name} vs ${b.name}`,
        `чи краща ${a.name} за ${b.name}`,
        `чи краща ${b.name} за ${a.name}`,
        ...(ra && rb ? [`${ra} чи ${rb}`, `${ra} vs ${rb}`] : []),
        ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
      ];
    },

    crumbHome: "Головна",
    crumbHub: "Порівняння бірж",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} – це біржа, яка раніше називалася ${formerName}.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${withReading(a, locale)} та ${withReading(b, locale)} – централізовані біржі для спотової торгівлі та ф'ючерсів з кредитним плечем, і в обох є реферальна програма для нових користувачів. ${bare(pickA)}. ${bare(pickB)}.${formerNote ? ` ${formerNote}` : ""} Це пряме порівняння ставить поруч їхні комісії, кредитне плече, продукти, доступність у країнах, правила верифікації та реферальні пропозиції; кожну цифру ми перевірили ${date} на власних сайтах бірж.`,

    toc: {
      "at-a-glance": "Коротко",
      verdict: "Що обрати",
      fees: "Комісії",
      leverage: "Плече та глибина ринку",
      products: "Продукти",
      countries: "Країни",
      kyc: "Верифікація (KYC)",
      safety: "Безпека та регулювання",
      referral: "Реферальні коди",
      "pros-cons": "Переваги та недоліки",
      faq: "Поширені запитання",
      sources: "Джерела",
    },
    onThisPage: "На цій сторінці",

    /* Hero */
    updated: (date) => `Перевірено та оновлено ${date}`,
    h1: (a, b) => `${withReading(a, locale)} vs ${withReading(b, locale)}: порівняння комісій, кредитного плеча та безпеки`,
    quickAnswer: "Коротка відповідь",
    keyFigures: "Ключові цифри",
    chips: (a, b, oiA, oiB) => [
      `Ф'ючерси ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Спот ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Плече ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Відкритий інтерес ${oiA} vs ${oiB}`,
    ],
    boxTitle: "Реєстрація з реферальним кодом",
    boxNote: "Обидва коди безкоштовні й ніколи не підвищують ваших комісій.",
    codeLabel: (e) => `Реферальний код ${e.name}`,
    boxRisk: () => (
      <>
        {"Торгівля з кредитним плечем пов'язана з високим ризиком. Жодна з двох бірж не працює в усіх країнах – подробиці в розділі "}
        <a href="#countries">про країни</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name}: коротко про головне`,
    glanceText: (a, b, s) =>
      `Шукаєте ви «${a.name} vs ${b.name}» чи «${b.name} vs ${a.name}» – порівняння те саме. З ${caseCount(s.measurable, "пункту", "пунктів")}, де все вирішують цифри, ${a.name} попереду за ${caseCount(s.a.length, "пунктом", "пунктами")}, ${b.name} – за ${s.b.length}${s.tie.length ? `; нарівні – ${s.tie.length}` : ""}. Пункти не однаково важливі: для активного трейдера нижчі комісії важать більше, ніж довший список монет, тож орієнтуйтеся на ті рядки, які відповідають вашому стилю торгівлі.`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: комісії, кредитне плече, розмір ринку, продукти, країни, верифікація та правила реферальних програм`,
    compared: "Показник",
    ahead: "Попереду",
    level: "Нарівні",
    glanceNote: (marketDate, date) =>
      `Комісії: стандартний рівень (без VIP). Відкритий інтерес, обсяг і кількість ринків: ${cmcRanking.replace(/^рейтингу/, "рейтинг")} (${marketDate}). «–» означає, що ці два значення не можна зіставити між собою. Усе інше ми перевірили ${date} на власних сайтах бірж.`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} чи ${b.name}: що обрати?`,
    verdictText:
      "Абсолютного переможця немає: кожна біржа розрахована на свій тип трейдера. Два блоки нижче показують, кому підходить кожна з них і де вона має вимірювану перевагу над іншою.",
    bestFor: (role) => `Сильна сторона: ${lcFirst(role)}`,
    chooseIf: (e) => `Обирайте ${e.name}, якщо…`,
    aheadOf: (e, other) => `У чому ${e.name} випереджає біржу ${other.name}`,
    noAdvantage: "Немає вимірюваної переваги за пунктами, які ми порівнюємо.",
    thinkTwice: "Подумайте двічі, якщо…",
    codeButton: (e) => `Реферальний код ${e.name} ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `Комісії: ${a.name} vs ${b.name}`,
    feesModel:
      "Обидві біржі працюють за моделлю мейкер / тейкер: лімітні ордери, що додають ліквідність, сплачують комісію мейкера, а ордери, що забирають ліквідність, – комісію тейкера.",
    feesCaption: (a, b) => `Стандартні комісії ${a.name} та ${b.name} на споті й ф'ючерсах`,
    exchange: "Біржа",
    futuresMaker: "Ф'ючерси, мейкер",
    futuresTaker: "Ф'ючерси, тейкер",
    spotMaker: "Спот, мейкер",
    spotTaker: "Спот, тейкер",
    otherMarkets: "Інші ринки (мейкер / тейкер)",
    feesNote: (date) =>
      `Стандартні ставки (без VIP), як їх публікує кожна біржа (перевірено ${date}). Комісії змінюються – перед торгівлею звіряйтеся з даними біржі.`,
    tokenTitle: "Знижки за оплату токеном і важливі умови",
    noTokenDiscount: "Знижки на комісії за оплату токеном біржі не опубліковано.",

    /* Leverage */
    leverageTitle: "Кредитне плече та глибина ринку",
    leverageRisk: "Високе кредитне плече різко підвищує ризик ліквідації: максимум – це межа, а не рекомендація.",
    leverageCaption: (a, b) => `Кредитне плече та дані ринку деривативів ${a.name} та ${b.name}`,
    maxLeverage: "Максимальне кредитне плече",
    openInterest: "Відкритий інтерес",
    volume24h: "Обсяг деривативів за 24 год",
    derivativesMarkets: "Ринки деривативів",
    listedAssets: "Активи в лістингу (дані біржі)",
    leverageNote: (marketDate) =>
      `Ринкові дані: ${cmcRanking.replace(/^рейтингу/, "рейтинг")} (${marketDate}). Біржі рахують активи в лістингу по-різному: одні – монети, інші – торгові пари.`,

    /* Products */
    productsTitle: (a, b) => `Продукти: що пропонують ${a.name} та ${b.name}`,
    productsSame: (compared) =>
      `Обидві біржі показують на своїх сайтах усі ${slavicCount(compared, ["продукт", "продукти", "продуктів"])}, які ми порівнюємо; різниця – в деталях.`,
    productsLegend: (date) => `Галочка означає, що біржа показує продукт на власному сайті; риска – що ${date} ми не знайшли там сторінки про нього.`,
    productsCaption: (a, b) => `Продукти ${a.name} та ${b.name}`,
    product: "Продукт",
    offered: "Пропонується",
    notOffered: "Не пропонується",
    noPage: "Сторінку на сайті біржі не знайдено",

    /* Countries */
    countriesTitle: (a, b) => `Країни: де доступні ${a.name} та ${b.name}`,
    countriesText: (compared, differing) =>
      `Ось що кажуть власні умови кожної біржі щодо ${caseCount(compared, "країни", "країн")}. Країн, у яких біржі розходяться: ${differing}. «${ct.statusLabel.regional}» означає, що біржа обслуговує країну через окрему платформу з власними продуктами, комісіями та лімітами.`,
    countriesCaption: (a, b) => `Доступність ${a.name} та ${b.name} за країнами`,
    country: "Країна",
    countriesNote: (date) =>
      `«${ct.statusLabel.open}» означає, що станом на ${date} країни немає в списку обмежень біржі; це не гарантує доступності всіх продуктів. Обидві біржі забороняють обходити обмеження за допомогою VPN або неправдивих даних.`,
    differTitle: "Де біржі розходяться",
    differQuestion: (a, b, countryName) => {
      const key = countryList.find((c) => c.name === countryName || c.short === countryName)?.key;
      return key ? `${a.name} чи ${b.name} ${inCountry(key)}?` : `${a.name} чи ${b.name}: ${countryName}?`;
    },
    neither: (a, b, hrefA, hrefB) => (
      <>
        Жодна з двох не працює там, де ви живете? Таблиці країн на сторінках альтернатив показують, які інші біржі приймають користувачів з вашої
        країни: <Link href={hrefA}>Альтернативи {a.name} за країнами</Link> · <Link href={hrefB}>Альтернативи {b.name} за країнами</Link>.
      </>
    ),
    restrictedTitle: "Країни з обмеженнями та регіональні платформи",
    whereNot: (e) => `Де недоступна ${e.name}?`,
    regionalPlatforms: "Регіональні платформи:",

    /* Verification */
    kycTitle: (a, b) => `Верифікація: ${a.name} vs ${b.name}`,
    kycText:
      "Обидві біржі вимагають від нових користувачів верифікації особи, тож для торгівлі без KYC не підходить жодна. Різниця в тому, що ще може робити неверифікований акаунт і як проходить перевірка.",
    documents: "Документи:",
    minAge: "Мінімальний вік:",
    howToRegister: (e) => `Як зареєструватися та пройти верифікацію на ${e.name}: покроково`,

    /* Safety */
    safetyTitle: (a, b) => `Безпека та регулювання: ${a.name} vs ${b.name}`,
    safetyText:
      "Жодна централізована біржа не позбавлена ризиків. Порівняти можна те, що кожна з них публікує про себе: де вона має ліцензії, чи підтверджує свої резерви (Proof of Reserves) і чи тримає фонд на випадок надзвичайних ситуацій.",
    safetyCaption: (a, b) => `Регулювання, підтвердження резервів і фонди захисту ${a.name} та ${b.name}`,
    licences: "Ліцензії, які називає біржа",
    entity: "Компанія-оператор",
    reserves: "Підтвердження резервів",
    fund: "Фонд захисту",
    founded: "Рік заснування",
    isSafe: (e) => `Чи безпечна ${e.name}?`,
    safetyDetail: (e) => `Безпека та доступність ${e.name} докладно`,

    /* Referral codes */
    referralTitle: (a, b) => `Реферальні коди та пропозиції для нових користувачів: ${a.name} vs ${b.name}`,
    referralText:
      "Хоч би яку біржу ви обрали, реєструйтеся з реферальним кодом: це нічого не коштує, ніколи не підвищує комісії та відкриває доступ до пропозиції для нових користувачів. Зверніть увагу на останній рядок: забутий код не завжди можна додати пізніше.",
    referralCaption: (a, b) => `Реферальні коди та пропозиції для нових користувачів ${a.name} та ${b.name}`,
    referralCodeOf: (e) => `Реферальний код ${e.name}`,
    referralCode: "Реферальний код",
    newUserOffer: "Пропозиція для нових користувачів",
    inviteeReward: "Що ви отримуєте як запрошений користувач",
    covers: "Що охоплює одна реферальна прив'язка",
    whereCode: "Куди вводити код",
    addLater: "Чи можна додати пізніше?",
    referralNote: (date) =>
      `Пропозиції ми перевірили ${date}; вітальні винагороди залежать від виконання завдань, вимагають верифікації особи та відрізняються залежно від країни.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `Переваги й недоліки ${a.name} та ${b.name}`,
    pros: "Переваги",
    cons: "Недоліки",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – поширені запитання`,
    faqText: (count, a, b) =>
      `${slavicCount(count, ["запитання", "запитання", "запитань"])} про вибір між ${a.name} та ${b.name}: комісії, кредитне плече, країни, верифікація, продукти та реферальні коди.`,

    /* Sources */
    sourcesTitle: "Джерела: звідки ці цифри",
    sourcesText: (date, marketDate) =>
      `Усе, що на цій сторінці сказано про комісії, кредитне плече, продукти, верифікацію, країни, ліцензії, резерви та реферальні правила, ми перевірили ${date} на власних сайтах і в довідкових центрах обох бірж. Відкритий інтерес, обсяг торгів і кількість ринків деривативів узято з ${cmcRanking} (${marketDate}). Біржі змінюють умови без попередження, тому остаточне слово – за сторінками нижче.`,
    officialPages: (e, count) => `${e.name}: ${slavicCount(count, ["офіційна сторінка", "офіційні сторінки", "офіційних сторінок"])}`,

    /* More comparisons */
    moreTitle: "Інші порівняння",
    against: (e) => `Порівняння ${e.name} з іншими біржами`,
    allAlternatives: (e) => `Усі альтернативи ${e.name}`,
    allComparisons: "Усі порівняння бірж",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>Попередження про ризики:</strong>{" "}
        {
          "криптовалютні деривативи – складні інструменти. Кредитне плече примножує і прибутки, і збитки, тож усю маржу можна втратити за лічені хвилини. Ця сторінка має лише інформаційний характер і не є фінансовою порадою. Якщо ви зареєструєтеся за нашими посиланнями, ми можемо отримати комісійну винагороду (докладніше – на сторінці "
        }
        <Link href={disclosureHref}>«Про партнерські посилання»</Link>
        {"). На цифри це не впливає: усі вони взяті з даних самих бірж."}
      </>
    ),
    ctaTitle: (a, b) => `${a.name} чи ${b.name}? Почніть з реферального коду`,
    ctaText: "Один акаунт для спотової торгівлі та ф'ючерсів на будь-якій з двох бірж – без додаткових витрат.",
    ctaButton: "Порівняти інші біржі",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) =>
      fit(TITLE_MAX, `Порівняння криптобірж (${shortMonthYear}): ${slavicCount(pairs, pairForms)}`, `Порівняння криптобірж (${shortMonthYear})`),
    description: (exchangeNames, pairs, monthYear) =>
      fit(
        DESC_MAX,
        `${exchangeNames}: ${slavicCount(pairs, pairForms)} комісій, плеча, країн, KYC і реферальних кодів – офіційні дані (${monthYear}).`,
        `${exchangeNames}: ${slavicCount(pairs, pairForms)} комісій, плеча, країн, KYC і реферальних кодів (${monthYear}).`,
        `${exchangeNames}: ${slavicCount(pairs, pairForms)} комісій, плеча, країн, KYC і реферальних кодів.`,
      ),
    crumbHome: "Головна",
    crumbPage: "Порівняння бірж",
    listName: "Прямі порівняння криптобірж",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `Перевірено та оновлено ${date}`,
    h1: (pairs) => `Порівняння криптобірж: ${slavicCount(pairs, pairForms)}`,
    lead: (exchangeCount) =>
      `${slavicCount(exchangeCount, exchangeForms)}, і кожну пару порівняно за тими самими пунктами: комісії, кредитне плече, глибина ринку, продукти, доступність у країнах, верифікація особи, регулювання та реферальні пропозиції. Кожне порівняння спирається на цифри з власних сайтів бірж.`,
    quickAnswer: "Коротка відповідь",

    pickTitle: "Оберіть дві біржі для порівняння",
    pickText: (others) =>
      `Кожен блок зіставляє одну біржу з ${caseCount(others, "іншою", "іншими")}. Для кожної пари є одна сторінка, тож «Binance vs OKX» і «OKX vs Binance» ведуть до того самого порівняння.`,
    alternativesOf: (e) => `Альтернативи ${e.name}`,
    referralCodeOf: (e) => `Реферальний код ${e.name}`,

    tableTitle: (exchangeCount) => `Усі ${slavicCount(exchangeCount, exchangeForms)} пліч-о-пліч`,
    tableText: "Пропозиції для нових користувачів, стандартні комісії (без VIP), кредитне плече та глибина ринку кожної біржі в одній таблиці.",
    tableNote: (date, marketDate) =>
      `Комісії: стандартний рівень за даними кожної біржі (перевірено ${date}). Відкритий інтерес і кількість ринків: CoinMarketCap (${marketDate}).`,

    alternativesTitle: "Одна біржа порівняно з усіма іншими",
    alternativesText: (others) =>
      `Обираєте не між двома біржами, а шукаєте заміну? Сторінки альтернатив порівнюють одну біржу одразу з ${caseCount(others, "іншою", "іншими")} та показують, які з них приймають користувачів з вашої країни.`,

    faqTitle: "Порівняння бірж – поширені запитання",

    ctaTitle: "Визначилися? Зареєструйтеся з реферальним кодом",
    ctaText: (exchangeCount) =>
      `Перевірені коди для всіх ${caseCount(exchangeCount, "біржі", "бірж")} – один акаунт для спотової торгівлі та ф'ючерсів без додаткових витрат.`,
    ctaButton: "Переглянути всі реферальні коди",
  },
};
