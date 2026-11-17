// Checks the exchange translations in src/data/i18n/<locale>/ against the English entries in src/data/exchanges/.
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

// "10,000" and "10000" count as the same number; a trailing dot or comma is punctuation.
const numbers = (text) => (text.match(/\d+(?:[.,]\d+)*/g) ?? []).map((n) => n.replace(/,(?=\d{3}\b)/g, "")).sort();
const quoted = (text) => text.match(/“[^”]*”/g) ?? [];
const count = (text, needle) => (needle ? text.split(needle).length - 1 : 0);

let errors = 0;
let reviews = 0;
const locales = fs
  .readdirSync(i18nDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && (!only || d.name === only))
  .map((d) => d.name);

for (const locale of locales) {
  const files = fs.readdirSync(path.join(i18nDir, locale)).filter((f) => f.endsWith(".ts"));
  for (const file of files) {
    const slug = file.replace(/\.ts$/, "");
    const en = await load(path.join(root, "src/data/exchanges", file), slug);
    const tr = await load(path.join(i18nDir, locale, file), slug);
    const a = fields(en, true);
    const b = new Map(fields(tr, false));
    const id = `${locale}/${slug}`;
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
      if (count(source, en.referralCode) !== count(target, en.referralCode)) error(field, `referral code ${en.referralCode} appears a different number of times`);
      if (accepted[`${id}/${field}`]) continue;
      const na = numbers(source);
      const nb = numbers(target);
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
}
console.log(`\n${errors} errors, ${reviews} items to review`);
process.exit(errors ? 1 : 0);
