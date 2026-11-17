// Checks the translations in src/data/i18n/<locale>/ against the English entries:
//   <locale>/<slug>.ts               against src/data/exchanges/<slug>.ts     (referral-code pages)
//   <locale>/alternatives/<slug>.ts  against src/data/alternatives/<slug>.ts  (comparison pages)
//
//   node scripts/check-i18n.mjs            all languages
//   node scripts/check-i18n.mjs es         one language
//
// Needs Node 22.18+ (it imports the TypeScript data files directly).
//
// Errors (exit code 1): a list has a different length, a text is empty in one language only, a quoted
// interface label (“…”) or the referral code is missing.
// Review items (exit code 0): a number of the English text does not appear in the translation, or the
// translation is identical to the English text. Differences that were checked by hand are listed in `accepted`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const i18nDir = path.join(root, "src/data/i18n");
const only = process.argv[2];

/**
 * Differences that are correct: "<locale>/<slug>/<field>" → why.
 * A number is listed here when the translation writes it differently on purpose (e.g. "1 billion" → "1,000 millones").
 */
const accepted = {
  "es/binance/about[2]": "US$1 billion is written as 1,000 millones de dólares",
  "es/binance/pros[2]": "US$1 billion is written as 1,000 millones de dólares",
  "es/binance/faqs[17].a": "US$1 billion is written as 1,000 millones de dólares",
  "es/bybit/sourceLabels[4]": "name of a Bybit page, kept in English",
  "es/alternatives/binance/fund": "US$1 billion is written as 1,000 millones de dólares",
  "es/alternatives/binance/stayIf[2]": "US$1 billion is written as 1,000 millones de dólares",
  "ko/bitget/welcomeTasks[0].task": "three days is written 3일, as Korean writes counts",
  "ko/bitget/signupTip": "three days is written 3일, as Korean writes counts",
  "ko/bitget/benefits[0]": "three days is written 3일, as Korean writes counts",
  "ko/bitget/faqs[8].a": "three days is written 3일, as Korean writes counts",
  "ko/bitget/faqs[10].a": "three days is written 3일, as Korean writes counts",
  "ko/kucoin/about[0]": "the third quarter is written 3분기, as Korean writes it",
  "ko/gate/referral.guide[0]": "one year is written 1년, as Korean writes counts",
  "ko/gate/quickAnswer": "one year is written 1년, as Korean writes counts",
  "ko/gate/benefits[1]": "one year is written 1년, as Korean writes counts",
  "ko/gate/about[1]": "three is written with a digit, as Korean writes counts",
  "ko/gate/faqs[12].a": "three is written with a digit, as Korean writes counts",
  "ko/alternatives/gate/pitch": "one year is written 1년, as Korean writes counts",
  "ko/alternatives/gate/chooseIf[1]": "one year is written 1년, as Korean writes counts",
  "ko/alternatives/gate/stayIf[1]": "one year is written 1년, as Korean writes counts",
  "ko/alternatives/gate/reasons[5].text": "three is written with a digit, as Korean writes counts",
  "ar/gate/referral.inviteeReward": "1 year is written سنة واحدة – Arabic does not put the digit 1 before a noun",
  "ar/gate/feeDiscount": "1 year is written سنة واحدة – Arabic does not put the digit 1 before a noun",
  "ar/gate/faqs[1].a": "1 year is written سنة واحدة – Arabic does not put the digit 1 before a noun",
};

const load = async (file, name) => (await import(pathToFileURL(file).href))[name];

/** All texts of an entry as [field, text], in the shape of `ExchangeText`. */
function fields(x, english) {
  const out = [];
  const add = (key, value) => out.push([key, value ?? ""]);
  const r = x.referral;
  for (const k of ["codeName", "whereShort", "apply", "whereToEnter", "afterSignupShort", "afterSignup", "inviteeReward"]) add(`referral.${k}`, r[k]);
  r.guide.forEach((p, i) => add(`referral.guide[${i}]`, p));
  const s = x.signup;
  s.methods.forEach((m, i) => add(`signup.methods[${i}]`, m));
  s.steps.forEach((st, i) => {
    add(`signup.steps[${i}].title`, st.title);
    add(`signup.steps[${i}].text`, st.text);
  });
  for (const k of ["kycShort", "kyc", "documents", "minAge"]) add(`signup.${k}`, s[k]);
  x.welcomeTasks.forEach((t, i) => {
    add(`welcomeTasks[${i}].task`, t.task);
    add(`welcomeTasks[${i}].reward`, t.reward);
  });
  add("tokenDiscount", x.tokenDiscount);
  (english ? x.extraFees.map((f) => f.market) : x.extraFeeMarkets).forEach((m, i) => add(`extraFeeMarkets[${i}]`, m));
  (english ? x.sources.map((src) => src.label) : x.sourceLabels).forEach((l, i) => add(`sourceLabels[${i}]`, l));
  if (x.guides) for (const k of ["heading", "intro", "linkLabel"]) add(`guides.${k}`, x.guides[k]);
  for (const k of ["feeDiscount", "bonusHeadline", "benefitNote", "headquarters", "regulation", "users", "assets", "maxLeverage", "feeNote", "tagline", "quickAnswer", "signupTip", "safety", "restricted"])
    add(k, x[k]);
  for (const k of ["referralCovers", "benefits", "products", "about", "pros", "cons", "bestFor"]) x[k].forEach((v, i) => add(`${k}[${i}]`, v));
  x.highlights.forEach((h, i) => {
    add(`highlights[${i}].title`, h.title);
    add(`highlights[${i}].text`, h.text);
  });
  x.faqs.forEach((f, i) => {
    add(`faqs[${i}].topic`, f.topic ?? "referral");
    add(`faqs[${i}].q`, f.q);
    add(`faqs[${i}].a`, f.a);
  });
  return out;
}

/** All texts of an alternatives entry as [field, text], in the shape of `AlternativesText`. */
function alternativesFields(x, english) {
  const out = [];
  const add = (key, value) => out.push([key, value ?? ""]);
  for (const k of ["role", "pick", "pitch", "intro", "reserves", "fund", "regional", "mica"]) add(k, x[k]);
  for (const k of ["chooseIf", "thinkTwiceIf", "stayIf"]) x[k].forEach((v, i) => add(`${k}[${i}]`, v));
  x.reasons.forEach((r, i) => {
    add(`reasons[${i}].title`, r.title);
    add(`reasons[${i}].text`, r.text);
  });
  x.faqs.forEach((f, i) => {
    add(`faqs[${i}].q`, f.q);
    add(`faqs[${i}].a`, f.a);
  });
  for (const k of Object.keys(english ? x.features : x.featureNotes)) add(`featureNotes.${k}`, english ? x.features[k].note : x.featureNotes[k]);
  for (const k of Object.keys(english ? x.countries : x.countryNotes)) {
    const note = english ? x.countries[k].note : x.countryNotes[k];
    if (note) add(`countryNotes.${k}`, note);
  }
  (english ? x.sources.map((src) => src.label) : x.sourceLabels).forEach((l, i) => add(`sourceLabels[${i}]`, l));
  return out;
}

// "10,000" and "10000" count as the same number; a trailing dot or comma is punctuation.
// Languages with a decimal comma (`decimal: ","` in src/i18n/config.ts) write "10.000" and "0,02": they count as 10000 and 0.02.
const { localeInfo } = await import(pathToFileURL(path.join(root, "src/i18n/config.ts")).href);
// With a decimal point every comma between digits groups thousands – also the Indian "1,00,000" (= 100,000).
const plain = (n, decimal) => (decimal === "," ? n.replace(/\.(?=\d{3}\b)/g, "").replace(",", ".") : n.replace(/,(?=\d)/g, ""));

/**
 * Languages that write large numbers with unit words of their own: Korean has 만 (10,000) and 억 (100,000,000), so
 * "34.1 billion" is "341억" and "45M+" is "4,500만". For these languages both texts are compared by value: a number
 * followed by a unit word is multiplied out ("1억 2,000만" counts as one number, 120,000,000).
 */
const englishUnits = { trillion: 1e12, billion: 1e9, million: 1e6, thousand: 1e3, B: 1e9, M: 1e6, K: 1e3 };
const unitWords = {
  ko: { 조: 1e12, 천억: 1e11, 백억: 1e10, 십억: 1e9, 억: 1e8, 천만: 1e7, 백만: 1e6, 십만: 1e5, 만: 1e4, 천: 1e3 },
};

/** Numbers a language writes where English writes a word: Korean dates give the month as a number ("2026년 11월 16일"). */
const wordNumbers = { ko: /(?<![\d.,])\d{1,2}(?=월)/g };

function numbers(text, decimal = ".", units, skip) {
  if (skip) text = text.replace(skip, " ");
  if (!units) return (text.match(/\d+(?:[.,]\d+)*/g) ?? []).map((n) => plain(n, decimal)).sort();
  const names = Object.keys(units)
    .sort((a, b) => b.length - a.length)
    .join("|");
  // A Latin unit letter must not start a word ("100 BTC", "5 Margin").
  const unit = `(\\d+(?:[.,]\\d+)*)(?:\\s?(${names})(?![A-Za-z]))?`;
  const first = new RegExp(unit, "g");
  const next = new RegExp(`^\\s${unit}`);
  const out = [];
  for (let m; (m = first.exec(text)); ) {
    if (!m[2]) {
      out.push(plain(m[1], decimal));
      continue;
    }
    let value = Number(plain(m[1], decimal)) * units[m[2]];
    // "1억 2,000만": a smaller unit right after belongs to the same number.
    const rest = next.exec(text.slice(first.lastIndex));
    if (rest && rest[2] && units[rest[2]] < units[m[2]]) {
      value += Number(plain(rest[1], decimal)) * units[rest[2]];
      first.lastIndex += rest[0].length;
    }
    out.push(String(Number(value.toPrecision(12))));
  }
  return out.sort();
}
const quoted = (text) => text.match(/“[^”]*”/g) ?? [];
const count = (text, needle) => (needle ? text.split(needle).length - 1 : 0);

let errors = 0;
let reviews = 0;
const locales = fs
  .readdirSync(i18nDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && (!only || d.name === only))
  .map((d) => d.name);

/** Compares the texts of one translated entry (`translated`) with the English ones (`a`). */
function compare(id, locale, a, translated, referralCode) {
  const b = new Map(translated);
  const error = (field, msg) => {
    errors++;
    console.log(`ERROR  ${id}/${field}: ${msg}`);
  };
  if (a.length !== b.size) error("*", `${b.size} texts instead of ${a.length} – a list has a different length`);
  for (const [field, source] of a) {
    if (!b.has(field)) {
      error(field, "missing in the translation");
      continue;
    }
    const target = b.get(field);
    if (field.endsWith(".topic")) {
      if (source !== target) error(field, `topic "${target}" instead of "${source}"`);
      continue;
    }
    if (Boolean(source) !== Boolean(target)) error(field, "empty in one language only");
    if (!source) continue;
    for (const q of quoted(source)) if (!target.includes(q) && field !== "referral.codeName") error(field, `interface label ${q} is missing`);
    if (count(source, referralCode) !== count(target, referralCode)) error(field, `referral code ${referralCode} appears a different number of times`);
    if (accepted[`${id}/${field}`]) continue;
    const units = unitWords[locale];
    const na = numbers(source, ".", units && englishUnits);
    const nb = numbers(target, localeInfo[locale]?.decimal, units && { ...englishUnits, ...units }, wordNumbers[locale]);
    const missing = na.filter((n) => !nb.includes(n));
    const extra = nb.filter((n) => !na.includes(n));
    if (missing.length || extra.length) {
      reviews++;
      console.log(`REVIEW ${id}/${field}: numbers differ${missing.length ? ` – missing ${missing.join(" ")}` : ""}${extra.length ? ` – extra ${extra.join(" ")}` : ""}`);
      console.log(`         en: ${source.slice(0, 260)}`);
      console.log(`         ${locale}: ${target.slice(0, 260)}`);
    }
    if (source === target && source.length > 30 && /\s/.test(source) && !accepted[`${id}/${field}`]) {
      reviews++;
      console.log(`REVIEW ${id}/${field}: identical to the English text – "${source.slice(0, 80)}"`);
    }
  }
  console.log(`checked ${id}: ${a.length} texts`);
}

const tsFiles = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".ts")) : []);

for (const locale of locales) {
  for (const file of tsFiles(path.join(i18nDir, locale))) {
    const slug = file.replace(/\.ts$/, "");
    const en = await load(path.join(root, "src/data/exchanges", file), slug);
    const tr = await load(path.join(i18nDir, locale, file), slug);
    compare(`${locale}/${slug}`, locale, fields(en, true), fields(tr, false), en.referralCode);
  }
  for (const file of tsFiles(path.join(i18nDir, locale, "alternatives"))) {
    const slug = file.replace(/\.ts$/, "");
    const exchange = await load(path.join(root, "src/data/exchanges", file), slug);
    const en = await load(path.join(root, "src/data/alternatives", file), slug);
    const tr = await load(path.join(i18nDir, locale, "alternatives", file), slug);
    compare(`${locale}/alternatives/${slug}`, locale, alternativesFields(en, true), alternativesFields(tr, false), exchange.referralCode);
  }
}
console.log(`\n${errors} errors, ${reviews} items to review`);
process.exit(errors ? 1 : 0);
