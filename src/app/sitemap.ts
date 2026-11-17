import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { exchanges, exchangePath } from "@/data/exchanges";
import { alternativesPath } from "@/data/alternatives";
import { versusPairs, versusPath } from "@/data/versus";
import { homePath, languageAlternates, locales, pagePath } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";

type Row = { path: (locale: Locale) => string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number };

/** Every page of the site once; each exists in every language. */
const rows: Row[] = [
  { path: homePath, changeFrequency: "weekly", priority: 1 },
  ...exchanges.map((e): Row => ({ path: (l) => exchangePath(e.slug, l), changeFrequency: "weekly", priority: 0.9 })),
  ...exchanges.map((e): Row => ({ path: (l) => alternativesPath(e.slug, l), changeFrequency: "weekly", priority: 0.8 })),
  { path: (l) => pagePath("compare", l), changeFrequency: "weekly", priority: 0.8 },
  ...versusPairs.map((p): Row => ({ path: (l) => versusPath(p.a, p.b, l), changeFrequency: "weekly", priority: 0.7 })),
  { path: (l) => pagePath("about", l), changeFrequency: "monthly", priority: 0.5 },
  { path: (l) => pagePath("affiliateDisclosure", l), changeFrequency: "yearly", priority: 0.3 },
  { path: (l) => pagePath("imprint", l), changeFrequency: "yearly", priority: 0.2 },
  { path: (l) => pagePath("privacy", l), changeFrequency: "yearly", priority: 0.2 },
];

/** The English pages first, then the same pages of every other language. Each entry names all its language versions (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${site.lastReviewed}T00:00:00Z`);
  return locales.flatMap((locale) =>
    rows.map((row) => ({
      url: absoluteUrl(row.path(locale)),
      lastModified,
      changeFrequency: row.changeFrequency,
      // A translation ranks one step below the English page it was made from.
      priority: locale === "en" ? row.priority : Math.max(0.1, Math.round((row.priority - 0.1) * 10) / 10),
      alternates: {
        languages: Object.fromEntries(Object.entries(languageAlternates(row.path)).map(([lang, path]) => [lang, absoluteUrl(path)])),
      },
    })),
  );
}
