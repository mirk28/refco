/**
 * Language versions of the site.
 *
 * English is the default and lives at the root (`/`, `/binance-referral-code`). Every other language has
 * its own folder (`/es`, `/es/codigo-de-referido-binance`) with its own root layout in `src/app/<locale>/`.
 * Every page exists in every language; the last path segment carries the keyword in that language.
 *
 * To add a language see "Language versions" in the README.
 */
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeInfo: Record<Locale, { name: string; short: string; htmlLang: string; ogLocale: string; dateLocale: string }> = {
  en: { name: "English", short: "EN", htmlLang: "en", ogLocale: "en_US", dateLocale: "en-US" },
  es: { name: "Español", short: "ES", htmlLang: "es", ogLocale: "es_ES", dateLocale: "es" },
};

/* ------------------------------ path segments ------------------------------ */

/** Pages that exist once per language. */
export const staticPages = ["compare", "about", "affiliateDisclosure", "imprint", "privacy"] as const;
export type StaticPage = (typeof staticPages)[number];

type Segments = {
  /** Referral-code page of an exchange, e.g. `binance-referral-code`. */
  referral: (slug: string) => string;
  referralPattern: RegExp;
  /** Alternatives page of an exchange, e.g. `binance-alternatives`. */
  alternatives: (slug: string) => string;
  alternativesPattern: RegExp;
  static: Record<StaticPage, string>;
};

const segments: Record<Locale, Segments> = {
  en: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
  },
  es: {
    referral: (slug) => `codigo-de-referido-${slug}`,
    referralPattern: /^codigo-de-referido-([a-z0-9]+)$/,
    alternatives: (slug) => `alternativas-a-${slug}`,
    alternativesPattern: /^alternativas-a-([a-z0-9]+)$/,
    static: { compare: "comparar", about: "acerca-de", affiliateDisclosure: "divulgacion-de-afiliacion", imprint: "aviso-legal", privacy: "privacidad" },
  },
};
/** Head-to-head pages are spelled the same way in every language: `binance-vs-okx`. */
const versusPattern = /^([a-z0-9]+)-vs-([a-z0-9]+)$/;

const withLocale = (locale: Locale, segment: string) => (locale === defaultLocale ? `/${segment}` : `/${locale}/${segment}`);

/* ----------------------------------- paths ---------------------------------- */

export const homePath = (locale: Locale = defaultLocale) => (locale === defaultLocale ? "/" : `/${locale}`);
/** A section of the home page, e.g. `homeAnchor("es", "exchanges")` → `/es#exchanges`. */
export const homeAnchor = (locale: Locale, id: string) => (locale === defaultLocale ? `/#${id}` : `/${locale}#${id}`);

export const referralPageSlug = (slug: string, locale: Locale = defaultLocale) => segments[locale].referral(slug);
export const referralPath = (slug: string, locale: Locale = defaultLocale) => withLocale(locale, segments[locale].referral(slug));
/** The exchange slug in the last path segment of a referral-code page (`codigo-de-referido-okx` → `okx`). */
export const exchangeSlugFromPage = (pageSlug: string, locale: Locale) => segments[locale].referralPattern.exec(pageSlug)?.[1];

export const alternativesPageSlug = (slug: string, locale: Locale = defaultLocale) => segments[locale].alternatives(slug);
export const alternativesPagePath = (slug: string, locale: Locale = defaultLocale) => withLocale(locale, segments[locale].alternatives(slug));

/** `a` and `b` in the order of the URL (the order of the `exchanges` array, see `src/data/versus.ts`). */
export const versusPageSlug = (a: string, b: string) => `${a}-vs-${b}`;
export const versusPagePath = (a: string, b: string, locale: Locale = defaultLocale) => withLocale(locale, versusPageSlug(a, b));

export const staticPageSlug = (page: StaticPage, locale: Locale = defaultLocale) => segments[locale].static[page];
/** Path of a page that exists once per language: `pagePath("privacy", "es")` → `/es/privacidad`. */
export const pagePath = (page: StaticPage, locale: Locale = defaultLocale) => withLocale(locale, segments[locale].static[page]);

/* ------------------------- which page is this segment? ------------------------ */

export type PageRef =
  | { type: "referral"; slug: string }
  | { type: "alternatives"; slug: string }
  | { type: "versus"; a: string; b: string }
  | { type: "static"; page: StaticPage };

/** The page a last path segment stands for in one language. It does not check that the exchange exists. */
export function resolvePage(segment: string, locale: Locale): PageRef | undefined {
  const s = segments[locale];
  const page = staticPages.find((p) => s.static[p] === segment);
  if (page) return { type: "static", page };
  const referral = s.referralPattern.exec(segment)?.[1];
  if (referral) return { type: "referral", slug: referral };
  const alternatives = s.alternativesPattern.exec(segment)?.[1];
  if (alternatives) return { type: "alternatives", slug: alternatives };
  const versus = versusPattern.exec(segment);
  if (versus) return { type: "versus", a: versus[1], b: versus[2] };
  return undefined;
}

/** Path of a page in one language. */
export function pageRefPath(ref: PageRef, locale: Locale): string {
  if (ref.type === "referral") return referralPath(ref.slug, locale);
  if (ref.type === "alternatives") return alternativesPagePath(ref.slug, locale);
  if (ref.type === "versus") return versusPagePath(ref.a, ref.b, locale);
  return pagePath(ref.page, locale);
}

/* ---------------------------------- hreflang --------------------------------- */

/** hreflang map for the `alternates.languages` field of a page. */
export function languageAlternates(pathFor: (locale: Locale) => string): Record<string, string> {
  return { ...Object.fromEntries(locales.map((l) => [localeInfo[l].htmlLang, pathFor(l)])), "x-default": pathFor(defaultLocale) };
}

/**
 * The same page in every language, for the language menu. A path that is not a page of the site
 * (the 404 page) leads to the home page of the other languages.
 */
export function counterpartPaths(pathname: string): Record<Locale, string> {
  const parts = pathname.split("/").filter(Boolean);
  const current = locales.find((l) => l !== defaultLocale && parts[0] === l) ?? defaultLocale;
  const rest = current === defaultLocale ? parts : parts.slice(1);
  const ref = rest.length === 1 ? resolvePage(rest[0], current) : undefined;
  return Object.fromEntries(
    locales.map((l) => {
      if (rest.length === 0) return [l, homePath(l)];
      if (ref) return [l, pageRefPath(ref, l)];
      if (l === current) return [l, pathname || "/"];
      return [l, homePath(l)];
    }),
  ) as Record<Locale, string>;
}
