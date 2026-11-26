// Lists the <title> and meta description of every page in every language and flags lengths outside the
// search-snippet limits. Run: npx tsx --tsconfig tsconfig.json scripts/meta-check.tsx [--all] [--json file]
import fs from "node:fs";
import type { Metadata } from "next";
import { exchanges } from "@/data/exchanges";
import { versusPairsFor } from "@/data/versus";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { exchangeMetadata } from "@/components/ExchangePage";
import { alternativesMetadata } from "@/components/AlternativesPage";
import { versusMetadata } from "@/components/VersusPage";
import { compareHubMetadata } from "@/components/CompareHubPage";
import { homeMetadata } from "@/components/HomePage";
import { textPageMetadata } from "@/components/TextPages";
import { localePageMetadata } from "@/components/LocalePage";
import { findPage, pageSegments } from "@/lib/pages";

// Snippet limits. Google cuts titles at about 600 px and descriptions at about 920 px; wide scripts get fewer characters.
const WIDE: Partial<Record<Locale, number>> = { ko: 0.55 };
export const limits = (l: Locale) => {
  const f = WIDE[l] ?? 1;
  return { title: Math.round(60 * f), descMin: Math.round(120 * f), descMax: Math.round(155 * f) };
};

const titleOf = (m: Metadata) => (typeof m.title === "string" ? m.title : (m.title as { absolute?: string; default?: string })?.absolute ?? (m.title as { default?: string })?.default ?? "");
type Row = { locale: Locale; kind: string; page: string; title: string; description: string };
const rows: Row[] = [];
const add = (locale: Locale, kind: string, page: string, m: Metadata) =>
  rows.push({ locale, kind, page, title: titleOf(m), description: String(m.description ?? "") });

// English pages: the English data. Other languages: exactly the pages and data the site builds (pageSegments + localePageMetadata).
for (const e of exchanges) add("en", "exchange", e.slug, exchangeMetadata(e, "en"));
for (const e of exchanges) add("en", "alternatives", e.slug, alternativesMetadata(e, "en"));
for (const p of versusPairsFor("en")) add("en", "versus", `${p.a.slug}-vs-${p.b.slug}`, versusMetadata(p, "en"));
add("en", "home", "home", homeMetadata("en"));
add("en", "compare", "compare", compareHubMetadata("en"));
for (const k of ["about", "affiliateDisclosure", "imprint", "privacy"] as const) add("en", "text", k, textPageMetadata(k, "en"));
for (const l of locales.filter((x) => x !== "en")) {
  add(l, "home", "home", homeMetadata(l));
  for (const seg of pageSegments(l)) {
    const page = findPage(seg, l);
    const kind = !page ? "?" : page.type === "referral" ? "exchange" : page.type === "alternatives" ? "alternatives" : page.type === "versus" ? "versus" : page.page === "compare" ? "compare" : "text";
    add(l, kind, seg, localePageMetadata(seg, l));
  }
}

const args = process.argv.slice(2);
const bad = rows.filter((r) => {
  const L = limits(r.locale);
  return [...r.title].length > L.title || [...r.description].length > L.descMax || [...r.description].length < L.descMin;
});
const jsonAt = args.indexOf("--json");
if (jsonAt >= 0) fs.writeFileSync(args[jsonAt + 1], JSON.stringify(rows, null, 1));
for (const r of args.includes("--all") ? rows : bad) {
  const L = limits(r.locale);
  const tl = [...r.title].length, dl = [...r.description].length;
  console.log(`${r.locale.padEnd(3)} ${r.kind.padEnd(12)} ${r.page.padEnd(20)} T${String(tl).padStart(3)}${tl > L.title ? "!" : " "} D${String(dl).padStart(3)}${dl > L.descMax || dl < L.descMin ? "!" : " "} ${r.title}`);
}
console.log(`\n${rows.length} pages, ${bad.length} outside limits (titles > ${limits("en").title}: ${rows.filter((r) => [...r.title].length > limits(r.locale).title).length}, descriptions outside ${limits("en").descMin}-${limits("en").descMax}: ${rows.filter((r) => { const d = [...r.description].length; return d > limits(r.locale).descMax || d < limits(r.locale).descMin; }).length})`);
