import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { exchanges, exchangePath } from "@/data/exchanges";
import { alternativesPath } from "@/data/alternatives";
import { comparePath, versusPairs, versusPath } from "@/data/versus";
import { homePath, languageAlternates, locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";

/** hreflang entries of a page that exists in every language, with absolute URLs. */
const languages = (pathFor: (locale: Locale) => string) => ({
  languages: Object.fromEntries(Object.entries(languageAlternates(pathFor)).map(([lang, path]) => [lang, absoluteUrl(path)])),
});

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${site.lastReviewed}T00:00:00Z`);
  const translated = locales.filter((l) => l !== "en");
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1, alternates: languages(homePath) },
    ...exchanges.map((e) => ({
      url: absoluteUrl(exchangePath(e.slug)),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: languages((l) => exchangePath(e.slug, l)),
    })),
    ...exchanges.map((e) => ({
      url: absoluteUrl(alternativesPath(e.slug)),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl(comparePath), lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...versusPairs.map((p) => ({
      url: absoluteUrl(versusPath(p.a, p.b)),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/affiliate-disclosure"), lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/imprint"), lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/privacy"), lastModified, changeFrequency: "yearly", priority: 0.2 },
    // Language versions: home page and referral-code pages.
    ...translated.flatMap((locale) => [
      { url: absoluteUrl(homePath(locale)), lastModified, changeFrequency: "weekly" as const, priority: 0.9, alternates: languages(homePath) },
      ...exchanges.map((e) => ({
        url: absoluteUrl(exchangePath(e.slug, locale)),
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.8,
        alternates: languages((l) => exchangePath(e.slug, l)),
      })),
    ]),
  ];
}
