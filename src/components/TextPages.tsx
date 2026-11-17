import { Fragment } from "react";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { legal, site } from "@/config/site";
import { homePath, languageAlternates, localeInfo, pagePath } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { pageTexts } from "@/i18n/pages";
import type { TextContext, TextSection } from "@/i18n/pages";
import { absoluteUrl, breadcrumbLd, graph, organizationLd, prettyDate, translationOfLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";
import { LegalLayout } from "./LegalLayout";

/**
 * The text pages: about, affiliate disclosure, imprint and privacy policy.
 *
 * The texts live in `src/i18n/pages/<locale>.tsx`. This component is the structure they share in every
 * language: metadata with `hreflang`, the sidebar layout, one `<h2 id="…">` per section in the order of
 * the English file, and the table of contents built from the sections that are shown.
 */
export type TextPageKey = "about" | "affiliateDisclosure" | "imprint" | "privacy";
export const textPageKeys: TextPageKey[] = ["about", "affiliateDisclosure", "imprint", "privacy"];

/** What every page in `src/i18n/pages/` provides. */
type Content = {
  title: string;
  description: string;
  intro: (c: TextContext) => ReactNode;
  sections: Record<string, TextSection>;
  outro?: (c: TextContext) => ReactNode;
};

export function textPageMetadata(page: TextPageKey, locale: Locale): Metadata {
  const t: Content = pageTexts(locale)[page];
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: pagePath(page, locale), languages: languageAlternates((l) => pagePath(page, l)) },
    ...(page === "imprint" ? { robots: { index: true, follow: true } } : {}),
  };
}

/** Sections of the imprint that depend on who runs the website (`legal` in `src/config/site.ts`). */
function shown(page: TextPageKey, id: string) {
  if (page !== "imprint") return true;
  if (id === "represented-by") return Boolean(legal.representative);
  if (id === "legal-form") return legal.operatorType === "private";
  if (id === "register") return legal.operatorType !== "private";
  return true;
}

function aboutLd(locale: Locale) {
  const t = pageTexts(locale);
  const path = pagePath("about", locale);
  return graph(
    {
      "@type": "AboutPage",
      url: absoluteUrl(path),
      name: t.about.ldName,
      // A translated page names its language and the English page it was translated from.
      ...(locale === "en" ? {} : { inLanguage: localeInfo[locale].htmlLang, ...translationOfLd(locale, pagePath("about")) }),
      about: { "@id": absoluteUrl("/#organization") },
    },
    organizationLd(),
    breadcrumbLd([
      { name: t.home, path: homePath(locale) },
      { name: t.about.crumb, path },
    ]),
  );
}

export function TextPage({ page, locale }: { page: TextPageKey; locale: Locale }) {
  const content: Content = pageTexts(locale)[page];
  const c: TextContext = {
    links: {
      compare: pagePath("compare", locale),
      affiliateDisclosure: pagePath("affiliateDisclosure", locale),
      imprint: pagePath("imprint", locale),
      privacy: pagePath("privacy", locale),
      english: pagePath(page),
    },
    reviewed: prettyDate(site.lastReviewed, locale),
  };
  // The English file defines which sections exist and their order.
  const ids = Object.keys(pageTexts("en")[page].sections).filter((id) => shown(page, id));
  const toc = ids.flatMap((id): [string, string][] => {
    const nav = content.sections[id].nav;
    return nav ? [[id, nav]] : [];
  });

  return (
    <>
      {page === "about" ? <JsonLd data={aboutLd(locale)} /> : null}
      <LegalLayout toc={toc} locale={locale}>
        {content.intro(c)}
        {ids.map((id) => (
          <Fragment key={id}>
            <h2 id={id}>{content.sections[id].heading}</h2>
            {content.sections[id].body(c)}
          </Fragment>
        ))}
        {content.outro?.(c)}
      </LegalLayout>
    </>
  );
}
