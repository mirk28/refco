import { site } from "@/config/site";
import type { Exchange, Faq } from "@/data/exchanges";
import { exchangePath, outboundUrl } from "@/data/exchanges";
import { getDictionary } from "@/i18n";
import { homePath, localeInfo } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

const reviewDate = new Date(`${site.lastReviewed}T00:00:00Z`);

/** e.g. "October 2026" (Spanish: "octubre de 2026") – used in titles/H1 for freshness signals. */
export const monthYearFor = (locale: Locale) =>
  reviewDate.toLocaleDateString(localeInfo[locale].dateLocale, { month: "long", year: "numeric", timeZone: "UTC" });
export const shortMonthYearFor = (locale: Locale) =>
  reviewDate.toLocaleDateString(localeInfo[locale].dateLocale, { month: "short", year: "numeric", timeZone: "UTC" });
export const monthYear = monthYearFor("en");
export const shortMonthYear = shortMonthYearFor("en");
export const prettyDate = (iso: string, locale: Locale = "en") =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString(localeInfo[locale].dateLocale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export const formatBn = (n: number, locale: Locale = "en") => getDictionary(locale).format.billions(n);

/**
 * The share card (Open Graph / X) of an English page, for the `openGraph.images` and `twitter.images` fields.
 *
 * The English pages live in the route group `src/app/(en)/`. An `opengraph-image.tsx` inside a route group
 * gets a hash in its URL, so the image files stay outside it (`src/app/opengraph-image.tsx`,
 * `src/app/[slug]/opengraph-image.tsx`) and keep their URLs – but Next.js then no longer adds them to the
 * pages by itself. Other languages (`src/app/es/`) are not in a route group and need none of this.
 *
 * @param path  Path of the page whose own card is meant, e.g. `/binance-referral-code`; empty for the general card.
 */
export const shareImages = (path = "", alt = "RefCo – verified crypto exchange referral codes") => [
  { url: `${path}/opengraph-image?v=${site.lastReviewed}`, width: 1200, height: 630, type: "image/png", alt },
];

/* ----------------------------- JSON-LD builders ---------------------------- */

const orgId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");

export function organizationLd() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    alternateName: site.domain,
    url: site.url,
    logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg"), width: 512, height: 512 },
    email: site.contactEmail,
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteLd() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: `${site.name} – ${site.domain}`,
    description: site.description,
    inLanguage: site.language,
    publisher: { "@id": orgId },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqLd(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** WebPage node of the home page in a language other than English (the English home page is the WebSite node). */
export function homePageLd(locale: Locale, title: string, description: string) {
  const url = absoluteUrl(homePath(locale));
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: localeInfo[locale].htmlLang,
    isPartOf: { "@id": websiteId },
    publisher: { "@id": orgId },
    dateModified: site.lastReviewed,
  };
}

/** A translated page names the English page it was translated from. */
export const translationOfLd = (locale: Locale, englishPath: string) =>
  locale === "en" ? {} : { translationOfWork: { "@id": `${absoluteUrl(englishPath)}#webpage` } };
/** A translated page counts as published on the day of the last review. */
export const publishedOn = (locale: Locale, englishDate: string) => (locale === "en" ? englishDate : site.lastReviewed);

export function exchangePageLd(e: Exchange, title: string, description: string, locale: Locale = "en") {
  const t = getDictionary(locale).exchange;
  const url = absoluteUrl(exchangePath(e.slug, locale));
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: localeInfo[locale].htmlLang,
    // A translated page names the English page it was translated from.
    ...(locale === "en" ? {} : { translationOfWork: { "@id": `${absoluteUrl(exchangePath(e.slug))}#webpage` } }),
    isPartOf: { "@id": websiteId },
    publisher: { "@id": orgId },
    datePublished: locale === "en" ? "2026-10-11" : site.lastReviewed,
    dateModified: site.pagesUpdated,
    lastReviewed: site.lastReviewed,
    reviewedBy: { "@id": orgId },
    primaryImageOfPage: { "@type": "ImageObject", url: `${url}/opengraph-image` },
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".answer", "#code-facts"] },
    citation: e.sources.map((s) => ({ "@type": "WebPage", name: s.label, url: s.url })),
    about: {
      "@type": "Organization",
      name: e.name,
      url: e.homepage,
      foundingDate: e.founded,
    },
    mainEntity: {
      "@type": "Offer",
      name: t.offerName(e),
      description: t.offerDescription(e),
      url: outboundUrl(e),
      price: "0",
      priceCurrency: "USD",
      category: t.offerCategory,
      offeredBy: { "@type": "Organization", name: e.name, url: e.homepage },
    },
  };
}

/** The exchange's documented registration steps as a HowTo, for answer engines. */
export function howToLd(e: Exchange, locale: Locale = "en") {
  const t = getDictionary(locale).exchange;
  const url = absoluteUrl(exchangePath(e.slug, locale));
  return {
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: t.howToName(e),
    description: t.howToDescription(e),
    inLanguage: localeInfo[locale].htmlLang,
    step: e.signup.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.text,
      url: `${url}#how-to`,
    })),
  };
}

/** The page's tutorial video as a VideoObject. */
export function videoLd(e: Exchange, locale: Locale = "en") {
  const v = e.video;
  if (!v) return null;
  const url = absoluteUrl(exchangePath(e.slug, locale));
  return {
    "@type": "VideoObject",
    "@id": `${url}#video`,
    name: v.title,
    description: v.description,
    thumbnailUrl: absoluteUrl(v.poster),
    contentUrl: absoluteUrl(v.src),
    uploadDate: v.uploadDate,
    duration: v.duration,
    inLanguage: "en",
    transcript: v.transcript,
    publisher: { "@id": orgId },
  };
}

/* ------------------------- "[Exchange] alternatives" pages ------------------------- */

/** WebPage node of an alternatives page: the exchange it is about, the exchanges it compares and its sources. */
export function alternativesPageLd(
  x: Exchange,
  alts: Exchange[],
  path: string,
  title: string,
  description: string,
  citations: { label: string; url: string }[],
  /** Language of the page and the path of its English version (the same path on the English page). */
  locale: Locale = "en",
  englishPath: string = path,
) {
  const url = absoluteUrl(path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: localeInfo[locale].htmlLang,
    ...translationOfLd(locale, englishPath),
    isPartOf: { "@id": websiteId },
    publisher: { "@id": orgId },
    datePublished: publishedOn(locale, "2026-11-16"),
    dateModified: site.lastReviewed,
    lastReviewed: site.lastReviewed,
    reviewedBy: { "@id": orgId },
    primaryImageOfPage: { "@type": "ImageObject", url: `${url}/opengraph-image` },
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".answer", "#at-a-glance"] },
    citation: citations.map((s) => ({ "@type": "WebPage", name: s.label, url: s.url })),
    about: { "@type": "Organization", name: x.name, url: x.homepage, foundingDate: x.founded },
    mentions: alts.map((a) => ({ "@type": "Organization", name: a.name, url: a.homepage, foundingDate: a.founded })),
    mainEntity: { "@id": `${url}#alternatives` },
  };
}

/** The compared exchanges as an ordered list. */
export function alternativesListLd(
  x: Exchange,
  alts: Exchange[],
  path: string,
  roles: Record<string, string>,
  texts: { name: string; description: string } = {
    name: `${x.name} alternatives`,
    description: `Exchanges compared with ${x.name}, in the order of CoinMarketCap's derivatives ranking.`,
  },
) {
  const url = absoluteUrl(path);
  return {
    "@type": "ItemList",
    "@id": `${url}#alternatives`,
    name: texts.name,
    description: texts.description,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: alts.length,
    itemListElement: alts.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.name,
      description: roles[a.slug],
      url: `${url}#${a.slug}`,
    })),
  };
}

/** Steps for moving from one exchange to another, for answer engines. */
export function switchHowToLd(
  x: Exchange,
  path: string,
  steps: { title: string; text: string }[],
  texts: { name: string; description: string } = {
    name: `How to switch from ${x.name} to another exchange`,
    description: `What to check and in which order when you move from ${x.name} to another crypto exchange.`,
  },
  locale: Locale = "en",
) {
  const url = absoluteUrl(path);
  return {
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: texts.name,
    description: texts.description,
    inLanguage: localeInfo[locale].htmlLang,
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text, url: `${url}#switch` })),
  };
}

/* ------------------------- "[Exchange] vs [Exchange]" pages ------------------------- */

/** WebPage node of a head-to-head page: the two exchanges it is about and its sources. */
export function versusPageLd(
  a: Exchange,
  b: Exchange,
  path: string,
  title: string,
  description: string,
  citations: { label: string; url: string }[],
  /** Language of the page and the path of its English version (the same path on the English page). */
  locale: Locale = "en",
  englishPath: string = path,
) {
  const url = absoluteUrl(path);
  const org = (e: Exchange) => ({ "@type": "Organization", name: e.name, url: e.homepage, foundingDate: e.founded });
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: localeInfo[locale].htmlLang,
    ...translationOfLd(locale, englishPath),
    isPartOf: { "@id": websiteId },
    publisher: { "@id": orgId },
    datePublished: publishedOn(locale, "2026-11-16"),
    dateModified: site.lastReviewed,
    lastReviewed: site.lastReviewed,
    reviewedBy: { "@id": orgId },
    primaryImageOfPage: { "@type": "ImageObject", url: `${url}/opengraph-image` },
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".answer", "#at-a-glance"] },
    citation: citations.map((s) => ({ "@type": "WebPage", name: s.label, url: s.url })),
    about: [org(a), org(b)],
  };
}

/** A list of pages, e.g. every comparison on the hub page. */
export function pageListLd(id: string, name: string, items: { name: string; path: string }[]) {
  return {
    "@type": "ItemList",
    "@id": absoluteUrl(id),
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: absoluteUrl(it.path) })),
  };
}

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
