import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { exchanges, exchangePath } from "@/data/exchanges";
import { alternativesPath } from "@/data/alternatives";
import { versusPairs, versusPath } from "@/data/versus";
import { homePath, languageAlternates, locales, pagePath } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";
import { bannerFiles } from "@/data/banners";

type Row = { path: (locale: Locale) => string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number; updated?: string; image?: (locale: Locale) => string | undefined; video?: (locale: Locale) => VideoEntry | undefined };
type VideoEntry = NonNullable<MetadataRoute.Sitemap[number]["videos"]>[number];

/** "PT1M52S" → 112 (seconds). */
const seconds = (iso: string) => {
  const m = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(iso);
  return m ? Number(m[1] ?? 0) * 3600 + Number(m[2] ?? 0) * 60 + Number(m[3] ?? 0) : undefined;
};

/** Every page of the site once; each exists in every language. */
const rows: Row[] = [
  { path: homePath, changeFrequency: "weekly", priority: 1 },
  ...exchanges.map((e): Row => ({ path: (l) => exchangePath(e.slug, l), changeFrequency: "weekly", priority: 0.9, updated: site.pagesUpdated, image: (l) => (bannerFiles[e.slug] ? `/banners/${l}/${bannerFiles[e.slug]![l]}.webp` : undefined),
    // The tutorial video is on the English page only (ExchangePage: locale === "en").
    video: (l) =>
      l === "en" && e.video
        ? {
            title: e.video.title,
            description: e.video.description,
            thumbnail_loc: absoluteUrl(e.video.poster),
            content_loc: absoluteUrl(e.video.src),
            duration: seconds(e.video.duration),
            publication_date: e.video.uploadDate,
            family_friendly: "yes",
          }
        : undefined,
  })),
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
      lastModified: row.updated ? new Date(`${row.updated}T00:00:00Z`) : lastModified,
      changeFrequency: row.changeFrequency,
      // A translation ranks one step below the English page it was made from.
      priority: locale === "en" ? row.priority : Math.max(0.1, Math.round((row.priority - 0.1) * 10) / 10),
      // The page banner (desktop version) as an image sitemap entry.
      ...(row.image?.(locale) ? { images: [absoluteUrl(row.image(locale)!)] } : {}),
      ...(row.video?.(locale) ? { videos: [row.video(locale)!] } : {}),
      alternates: {
        languages: Object.fromEntries(Object.entries(languageAlternates(row.path)).map(([lang, path]) => [lang, absoluteUrl(path)])),
      },
    })),
  );
}
