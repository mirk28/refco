import type { Metadata, Viewport } from "next";
import { site } from "@/config/site";
import { getDictionary } from "@/i18n";
import { homePath, localeInfo, pagePath } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { absoluteUrl, shareImages } from "@/lib/seo";
import { Footer, Header } from "./Layout";
import { Analytics } from "./Analytics";

/*
 * Every language has its own root layout (`src/app/(en)/layout.tsx`, `src/app/es/layout.tsx`), because the
 * `lang` attribute of <html> has to be right in the static HTML. They all render this shell.
 */

/** Default metadata of a language; pages override title, description and canonical. */
export function rootMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).meta;
  // English pages name their share card here (see `shareImages`); other languages have an `opengraph-image.tsx` in their folder.
  const english = locale === "en" ? { images: shareImages() } : {};
  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${t.siteTitle} | ${site.domain}`,
      template: `%s | ${site.name}`,
    },
    description: t.siteDescription,
    applicationName: site.name,
    authors: [{ name: site.name, url: absoluteUrl("/") }],
    creator: site.name,
    publisher: site.name,
    category: "finance",
    alternates: { canonical: homePath(locale) },
    formatDetection: { telephone: false, email: false, address: false },
    openGraph: {
      type: "website",
      locale: localeInfo[locale].ogLocale,
      url: absoluteUrl(homePath(locale)),
      siteName: `${site.name} – ${site.domain}`,
      title: t.siteTitle,
      description: t.siteDescription,
      ...english,
    },
    twitter: {
      card: "summary_large_image",
      title: t.siteTitle,
      description: t.siteDescription,
      ...english,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
  };
}

export const rootViewport: Viewport = {
  themeColor: site.themeColor,
  width: "device-width",
  initialScale: 1,
};

export function SiteShell({ locale, children, unknownPage = false }: { locale: Locale; children: React.ReactNode; unknownPage?: boolean }) {
  const dict = getDictionary(locale);
  const consent = dict.consent;
  return (
    <html lang={localeInfo[locale].htmlLang} dir={localeInfo[locale].dir}>
      <body>
        <a href="#main" className="skip-link">
          {dict.layout.skip}
        </a>
        <Header locale={locale} unknownPage={unknownPage} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <Analytics texts={{ label: consent.label, text: consent.text(`${pagePath("privacy", locale)}#analytics`), decline: consent.decline, allow: consent.allow }} />
      </body>
    </html>
  );
}
