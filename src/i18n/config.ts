/**
 * Language versions of the site.
 *
 * English is the default and lives at the root (`/`, `/binance-referral-code`). Every other language has
 * its own folder (`/es`, `/es/codigo-de-referido-binance`) with its own root layout in `src/app/<locale>/`.
 *
 * To add a language: add it here, write `src/i18n/<locale>.tsx` (interface texts) and
 * `src/data/i18n/<locale>/<exchange>.ts` (exchange texts), register both in `src/i18n/index.ts` and
 * `src/data/i18n/index.ts`, and copy the folder `src/app/es/` to `src/app/<locale>/`.
 */
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeInfo: Record<Locale, { name: string; short: string; htmlLang: string; ogLocale: string; dateLocale: string }> = {
  en: { name: "English", short: "EN", htmlLang: "en", ogLocale: "en_US", dateLocale: "en-US" },
  es: { name: "Español", short: "ES", htmlLang: "es", ogLocale: "es_ES", dateLocale: "es" },
};

/** Last path segment of a referral-code page, with the keyword in the language of the page. */
const referralSlug: Record<Locale, (slug: string) => string> = {
  en: (slug) => `${slug}-referral-code`,
  es: (slug) => `codigo-de-referido-${slug}`,
};
const referralPattern: Record<Locale, RegExp> = {
  en: /^([a-z0-9]+)-referral-code$/,
  es: /^codigo-de-referido-([a-z0-9]+)$/,
};

export const homePath = (locale: Locale = defaultLocale) => (locale === defaultLocale ? "/" : `/${locale}`);
/** A section of the home page, e.g. `homeAnchor("es", "exchanges")` → `/es#exchanges`. */
export const homeAnchor = (locale: Locale, id: string) => (locale === defaultLocale ? `/#${id}` : `/${locale}#${id}`);

export const referralPageSlug = (slug: string, locale: Locale = defaultLocale) => referralSlug[locale](slug);
export const referralPath = (slug: string, locale: Locale = defaultLocale) =>
  locale === defaultLocale ? `/${referralSlug[locale](slug)}` : `/${locale}/${referralSlug[locale](slug)}`;
/** The exchange slug in the last path segment of a referral-code page (`codigo-de-referido-okx` → `okx`). */
export const exchangeSlugFromPage = (pageSlug: string, locale: Locale) => referralPattern[locale].exec(pageSlug)?.[1];

/** hreflang map for the `alternates.languages` field of a page that exists in every language. */
export function languageAlternates(pathFor: (locale: Locale) => string): Record<string, string> {
  return { ...Object.fromEntries(locales.map((l) => [localeInfo[l].htmlLang, pathFor(l)])), "x-default": pathFor(defaultLocale) };
}

/**
 * The same page in every language, for the language menu. Pages that exist in English only
 * (comparisons, legal texts) lead to the home page of the other languages.
 */
export function counterpartPaths(pathname: string): Record<Locale, string> {
  const parts = pathname.split("/").filter(Boolean);
  const current = locales.find((l) => l !== defaultLocale && parts[0] === l) ?? defaultLocale;
  const rest = current === defaultLocale ? parts : parts.slice(1);
  const exchange = rest.length === 1 ? exchangeSlugFromPage(rest[0], current) : undefined;
  return Object.fromEntries(
    locales.map((l) => {
      if (exchange) return [l, referralPath(exchange, l)];
      if (l === current) return [l, pathname || "/"];
      return [l, homePath(l)];
    }),
  ) as Record<Locale, string>;
}
