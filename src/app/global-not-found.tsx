import "./globals.css";
import type { Metadata } from "next";
import { rootMetadata, rootViewport, SiteShell } from "@/components/SiteShell";
import { getDictionary } from "@/i18n";
import { homePath, localeInfo, locales } from "@/i18n/config";
import NotFound from "./(en)/not-found";

/**
 * 404 page for URLs that match no route at all. Every language has its own root layout, so there is no
 * single layout Next.js could wrap a global `not-found.tsx` in; this file renders the English shell itself
 * (needs `experimental.globalNotFound` in next.config.mjs) and adds a way back for the other languages,
 * because a mistyped `/es/…` address ends here too. `notFound()` inside a page still shows the
 * `not-found.tsx` of its language.
 */
export const metadata: Metadata = {
  ...rootMetadata("en"),
  title: "Page not found | RefCo",
  alternates: {},
  robots: { index: false, follow: true },
};
export const viewport = rootViewport;

export default function GlobalNotFound() {
  return (
    <SiteShell locale="en" unknownPage>
      <NotFound />
      <p className="small muted" style={{ textAlign: "center", margin: "-28px 0 56px" }}>
        {locales
          .filter((l) => l !== "en")
          .map((l, i) => (
            <span key={l}>
              {i > 0 ? " · " : null}
              <a href={homePath(l)} hrefLang={localeInfo[l].htmlLang} lang={localeInfo[l].htmlLang}>
                {localeInfo[l].name}: {getDictionary(l).notFound.back}
              </a>
            </span>
          ))}
      </p>
    </SiteShell>
  );
}
