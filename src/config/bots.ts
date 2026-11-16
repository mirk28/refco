/**
 * Crawlers of SEO, backlink and site-audit tools that are kept out of the website.
 *
 * They are blocked twice:
 *   1. `robots.txt` tells each of them `Disallow: /` (src/app/robots.ts) – the polite ones stop there.
 *   2. `src/proxy.ts` answers every other request of theirs with 403.
 *
 * Search engines (Google, Bing, …), AI answer engines and link-preview fetchers of messengers and social
 * networks are NOT in this list and must never be: they are how people find the site.
 *
 * Each entry is the token the crawler sends in its User-Agent header, in its usual spelling.
 * When you add one here, also add it to the `matcher` in src/proxy.ts – Next.js needs that value as a
 * literal, so it cannot be built from this list.
 */
export const seoToolBots = [
  // Ahrefs
  "AhrefsBot",
  "AhrefsSiteAudit",
  // Semrush
  "SemrushBot",
  "SiteAuditBot",
  "SplitSignalBot",
  // Majestic
  "MJ12bot",
  "MajesticSEO",
  // Moz
  "DotBot",
  "rogerbot",
  // Other backlink and keyword databases
  "BLEXBot",
  "DataForSeoBot",
  "serpstatbot",
  "SEOkicks",
  "Barkrowler",
  "linkdexbot",
  "MegaIndex",
  "LinkpadBot",
  "spbot",
  "SERankingBacklinksBot",
  "SenutoBot",
  "XoviBot",
  "SISTRIX",
  "CognitiveSEO",
  "BacklinkCrawler",
  // Site crawlers and audit tools
  "Screaming Frog SEO Spider",
  "Sitebulb",
  "Seobility",
  "SiteCheckerBotCrawler",
  "NetpeakSpider",
  "OnCrawl",
  "Botify",
  "DeepCrawl",
  "Lumar",
  "ContentKing",
  "SiteimproveBot",
  "RyteBot",
  "SEOlyzer",
  "SEOdiver",
] as const;

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Matches the User-Agent of any crawler in `seoToolBots`, whatever its capitalisation. */
export const seoToolPattern = new RegExp(seoToolBots.map(escape).join("|"), "i");
