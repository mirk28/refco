import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * Search engines AND AI answer engines (GEO/AEO) are explicitly welcome:
 * being cited by ChatGPT, Perplexity, Gemini or Claude is a traffic channel.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Google-Extended", "Applebot-Extended", "Bingbot"], allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
