import { site } from "@/config/site";
import type { Exchange, Faq } from "@/data/exchanges";
import { exchangePath, outboundUrl } from "@/data/exchanges";

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

const reviewDate = new Date(`${site.lastReviewed}T00:00:00Z`);

/** e.g. "October 2026" – used in titles/H1 for freshness signals. */
export const monthYear = reviewDate.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
export const shortMonthYear = reviewDate.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
export const prettyDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export const formatBn = (n: number) => `$${n.toFixed(n >= 10 ? 1 : 2)}B`;

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

export function exchangePageLd(e: Exchange, title: string, description: string) {
  const url = absoluteUrl(exchangePath(e.slug));
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: site.language,
    isPartOf: { "@id": websiteId },
    publisher: { "@id": orgId },
    datePublished: "2026-10-11",
    dateModified: site.lastReviewed,
    primaryImageOfPage: { "@type": "ImageObject", url: `${url}/opengraph-image` },
    about: {
      "@type": "Organization",
      name: e.name,
      url: e.homepage,
      foundingDate: e.founded,
    },
    mainEntity: {
      "@type": "Offer",
      name: `${e.name} referral sign-up`,
      description: `${e.feeDiscount || e.bonusHeadline}. One referral covers ${e.referralCovers.join(", ")}.`,
      url: outboundUrl(e),
      price: "0",
      priceCurrency: "USD",
      category: "Cryptocurrency exchange registration",
      offeredBy: { "@type": "Organization", name: e.name, url: e.homepage },
    },
  };
}

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
