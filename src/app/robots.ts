import type { MetadataRoute } from "next";
import { seoToolBots } from "@/config/bots";
import { absoluteUrl } from "@/lib/seo";

/**
 * Search engines AND AI answer engines (GEO/AEO) are explicitly welcome:
 * being cited by ChatGPT, Perplexity, Gemini or Claude is a traffic channel.
 *
 * Crawlers of SEO, backlink and site-audit tools are not: they are disallowed here and answered
 * with 403 by src/proxy.ts (list: src/config/bots.ts).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Google-Extended", "Applebot-Extended", "Bingbot"], allow: "/" },
      { userAgent: [...seoToolBots], disallow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
