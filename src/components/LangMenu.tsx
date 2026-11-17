"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { counterpartPaths, homePath, localeInfo, locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

/**
 * Language menu in the header. It links to the same page in the other languages (on the 404 page: to their
 * home page). Plain links, because every language has its own root layout and changing it loads a new document.
 */
export function LangMenu({ locale, label, homeOnly = false }: { locale: Locale; label: string; homeOnly?: boolean }) {
  const pathname = usePathname() ?? "/";
  // On the 404 page the address is not a page of the site, so there is no counterpart to link to.
  const paths = homeOnly ? (Object.fromEntries(locales.map((l) => [l, homePath(l)])) as Record<Locale, string>) : counterpartPaths(pathname);
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onClick = (ev: MouseEvent) => {
      if (ref.current && !ref.current.contains(ev.target as Node)) ref.current.open = false;
    };
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape" && ref.current) ref.current.open = false;
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <details className="lang-menu" ref={ref}>
      <summary aria-label={`${label}: ${localeInfo[locale].name}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
        </svg>
        {localeInfo[locale].short}
      </summary>
      <ul>
        {locales.map((l) => (
          <li key={l}>
            {l === locale ? (
              <span aria-current="true">{localeInfo[l].name}</span>
            ) : (
              <a href={paths[l]} hrefLang={localeInfo[l].htmlLang} lang={localeInfo[l].htmlLang}>
                {localeInfo[l].name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </details>
  );
}
