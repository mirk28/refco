import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { exchanges, exchangePath } from "@/data/exchanges";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${site.lastReviewed}T00:00:00Z`);
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    ...exchanges.map((e) => ({
      url: absoluteUrl(exchangePath(e.slug)),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/affiliate-disclosure"), lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/imprint"), lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/privacy"), lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
