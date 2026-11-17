/**
 * Language versions of the site.
 *
 * English is the default and lives at the root (`/`, `/binance-referral-code`). Every other language has
 * its own folder (`/es`, `/es/codigo-de-referido-binance`) with its own root layout in `src/app/<locale>/`.
 * Every page exists in every language; the last path segment carries the keyword in that language.
 *
 * To add a language see "Language versions" in the README.
 */
export const locales = ["en", "es", "pt", "tr", "de", "hi", "ur", "ko", "ar", "vi", "bn", "id", "uk", "am", "my", "sw", "fil", "th", "ru", "fr", "km"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type LocaleInfo = {
  /** Name of the language in that language, for the language menu. */
  name: string;
  short: string;
  /** `<html lang>`, JSON-LD `inLanguage` and the main hreflang code. */
  htmlLang: string;
  /** Further hreflang codes that lead to the same pages, e.g. "pt" next to "pt-BR" for readers in Portugal. */
  alsoHreflang?: string[];
  ogLocale: string;
  /** Locale for dates; add `-u-ca-gregory-nu-latn` where the language would otherwise use another calendar or other digits. */
  dateLocale: string;
  /**
   * How fee rates from the English data are shown: "." keeps `0.02%`, "," shows `0,02%`.
   * `percentBefore` puts the sign in front (`%0,02`). The texts of the language use the same notation.
   */
  decimal: "." | ",";
  percentBefore?: boolean;
  /** A no-break space between number and sign (`0,02 %`), as German writes it. */
  percentSpace?: boolean;
  /** Writing direction; only set for right-to-left languages. */
  dir?: "rtl";
  /**
   * Font of the share cards for scripts whose letters must be joined (conjuncts, vowel signs, Arabic script).
   * `next/og` draws letters one by one, so the texts of these cards are shaped by sharp (Pango with HarfBuzz) with the
   * font files in `src/fonts/<family without spaces>/` – see `src/lib/og-shape.ts`. Without it the card uses Geist.
   */
  cardFont?: CardFont;
  /** Mark at the end of a sentence that a template closes itself; default ".". Hindi uses the danda "।". */
  fullStop?: string;
  /** Comma between list items that the layout joins itself; default ", ". Urdu and Arabic use "،". */
  comma?: string;
  /** Dash with its spaces between a label and its explanation that the layout sets itself; default " – ". Russian uses " — ". */
  dash?: string;
};

export type CardFont = {
  /** Font families in order; each letter comes from the first family that has it (e.g. Latin before Urdu). */
  families: string[];
  /** Factor on the text sizes of the card, for scripts that run taller than Latin (Nastaliq). */
  scale?: number;
  /** Line height as a factor of the font size; without it the font's own (tall for Nastaliq). */
  lineHeight?: number;
};

export const localeInfo: Record<Locale, LocaleInfo> = {
  en: { name: "English", short: "EN", htmlLang: "en", ogLocale: "en_US", dateLocale: "en-US", decimal: "." },
  es: { name: "Español", short: "ES", htmlLang: "es", ogLocale: "es_ES", dateLocale: "es", decimal: "." },
  pt: { name: "Português (Brasil)", short: "PT", htmlLang: "pt-BR", alsoHreflang: ["pt"], ogLocale: "pt_BR", dateLocale: "pt-BR", decimal: "," },
  tr: { name: "Türkçe", short: "TR", htmlLang: "tr", ogLocale: "tr_TR", dateLocale: "tr", decimal: ",", percentBefore: true },
  de: { name: "Deutsch", short: "DE", htmlLang: "de", ogLocale: "de_DE", dateLocale: "de-DE", decimal: ",", percentSpace: true },
  hi: { name: "हिन्दी", short: "HI", htmlLang: "hi", ogLocale: "hi_IN", dateLocale: "hi-IN", decimal: ".", cardFont: { families: ["Noto Sans Devanagari"] }, fullStop: "।" },
  // Urdu runs right to left; the cards take Latin from Noto Sans and Urdu from Nastaliq, which runs tall.
  ur: {
    name: "اردو",
    short: "UR",
    htmlLang: "ur",
    ogLocale: "ur_PK",
    dateLocale: "ur-PK-u-nu-latn",
    decimal: ".",
    dir: "rtl",
    cardFont: { families: ["Noto Sans", "Noto Nastaliq Urdu"], scale: 0.82, lineHeight: 0.85 },
    fullStop: "۔",
    comma: "، ",
  },
  ko: { name: "한국어", short: "KO", htmlLang: "ko", ogLocale: "ko_KR", dateLocale: "ko-KR", decimal: "." },
  // Arabic runs right to left; Latin digits as on Arabic crypto sites (and in the number check). The cards take Latin
  // from Noto Sans and Arabic from Noto Sans Arabic.
  ar: {
    name: "العربية",
    short: "AR",
    htmlLang: "ar",
    ogLocale: "ar_AR",
    dateLocale: "ar-u-ca-gregory-nu-latn",
    decimal: ".",
    dir: "rtl",
    cardFont: { families: ["Noto Sans", "Noto Sans Arabic"], lineHeight: 1.35 },
    comma: "، ",
  },
  vi: { name: "Tiếng Việt", short: "VI", htmlLang: "vi", ogLocale: "vi_VN", dateLocale: "vi-VN", decimal: ",", cardFont: { families: ["Noto Sans"] } },
  bn: { name: "বাংলা", short: "BN", htmlLang: "bn", ogLocale: "bn_BD", dateLocale: "bn-BD-u-nu-latn", decimal: ".", cardFont: { families: ["Noto Sans", "Noto Sans Bengali"] }, fullStop: "।" },
  id: { name: "Bahasa Indonesia", short: "ID", htmlLang: "id", ogLocale: "id_ID", dateLocale: "id-ID", decimal: "," },
  uk: { name: "Українська", short: "UK", htmlLang: "uk", ogLocale: "uk_UA", dateLocale: "uk-UA", decimal: ",", cardFont: { families: ["Noto Sans"] } },
  am: { name: "አማርኛ", short: "AM", htmlLang: "am", ogLocale: "am_ET", dateLocale: "am-ET-u-ca-gregory", decimal: ".", cardFont: { families: ["Noto Sans", "Noto Sans Ethiopic"] }, fullStop: "።", comma: "፣ " },
  my: { name: "မြန်မာ", short: "MY", htmlLang: "my", ogLocale: "my_MM", dateLocale: "my-MM-u-nu-latn", decimal: ".", cardFont: { families: ["Noto Sans", "Noto Sans Myanmar"], lineHeight: 1.6 }, fullStop: "။", comma: "၊ " },
  sw: { name: "Kiswahili", short: "SW", htmlLang: "sw", ogLocale: "sw_KE", dateLocale: "sw-KE", decimal: "." },
  fil: { name: "Filipino", short: "FIL", htmlLang: "fil", alsoHreflang: ["tl"], ogLocale: "tl_PH", dateLocale: "fil-PH", decimal: "." },
  th: { name: "ไทย", short: "TH", htmlLang: "th", ogLocale: "th_TH", dateLocale: "th-TH-u-ca-gregory", decimal: ".", cardFont: { families: ["Noto Sans", "Noto Sans Thai"] }, fullStop: "" },
  ru: { name: "Русский", short: "RU", htmlLang: "ru", ogLocale: "ru_RU", dateLocale: "ru-RU", decimal: ",", cardFont: { families: ["Noto Sans"] }, dash: " — " },
  fr: { name: "Français", short: "FR", htmlLang: "fr", ogLocale: "fr_FR", dateLocale: "fr-FR", decimal: ",", percentSpace: true },
  km: { name: "ខ្មែរ", short: "KM", htmlLang: "km", ogLocale: "km_KH", dateLocale: "km-KH-u-nu-latn", decimal: ".", cardFont: { families: ["Noto Sans", "Noto Sans Khmer"] }, fullStop: "។" },
};

/**
 * A fee rate from the English data (`0.02%`, `-0.015%`) in the notation of a language: `0,02%` in Portuguese,
 * `%0,02` in Turkish. Only pure rates go through here; texts are written in the notation of their language.
 */
export function localRate(rate: string, locale: Locale): string {
  const info = localeInfo[locale];
  const m = /^(-?)(\d+(?:\.\d+)?)%$/.exec(rate.trim());
  if (!m) return rate;
  const digits = info.decimal === "," ? m[2].replace(".", ",") : m[2];
  if (info.percentBefore) return `${m[1]}%${digits}`;
  return info.percentSpace ? `${m[1]}${digits} %` : `${m[1]}${digits}%`;
}

/** The comma a language puts between list items (`", "`, Urdu and Arabic `"، "`). */
export const listComma = (locale: Locale) => localeInfo[locale].comma ?? ", ";
export const dashFor = (locale: Locale) => localeInfo[locale].dash ?? " – ";

/** The number in a fee rate of any language (`0,02%`, `%0,02`, `0.02%`) – for comparisons. */
export const rateValue = (rate: string) => Number.parseFloat(rate.replace("%", "").replace(/\s/g, "").replace(",", "."));

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
  pt: {
    referral: (slug) => `codigo-de-indicacao-${slug}`,
    referralPattern: /^codigo-de-indicacao-([a-z0-9]+)$/,
    alternatives: (slug) => `alternativas-a-${slug}`,
    alternativesPattern: /^alternativas-a-([a-z0-9]+)$/,
    static: { compare: "comparar", about: "sobre", affiliateDisclosure: "divulgacao-de-afiliados", imprint: "aviso-legal", privacy: "privacidade" },
  },
  tr: {
    referral: (slug) => `${slug}-referans-kodu`,
    referralPattern: /^([a-z0-9]+)-referans-kodu$/,
    alternatives: (slug) => `${slug}-alternatifleri`,
    alternativesPattern: /^([a-z0-9]+)-alternatifleri$/,
    static: { compare: "borsa-karsilastirma", about: "hakkimizda", affiliateDisclosure: "satis-ortakligi-aciklamasi", imprint: "kunye", privacy: "gizlilik-politikasi" },
  },
  de: {
    referral: (slug) => `${slug}-empfehlungscode`,
    referralPattern: /^([a-z0-9]+)-empfehlungscode$/,
    alternatives: (slug) => `${slug}-alternativen`,
    alternativesPattern: /^([a-z0-9]+)-alternativen$/,
    static: { compare: "boersenvergleich", about: "ueber-uns", affiliateDisclosure: "affiliate-hinweis", imprint: "impressum", privacy: "datenschutz" },
  },
  // Indian readers search in Latin letters ("binance referral code"), so the Hindi addresses keep the English words.
  hi: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
  },
  // Pakistani readers also search in Latin letters, and Urdu letters in an address would be percent-encoded.
  ur: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
  },
  // Hangul in an address would be percent-encoded, so the Korean addresses keep the English words too.
  ko: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
  },
  // Arabic letters in an address would be percent-encoded as well.
  ar: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
  },
  vi: {
    referral: (slug) => `ma-gioi-thieu-${slug}`,
    referralPattern: /^ma-gioi-thieu-([a-z0-9]+)$/,
    alternatives: (slug) => `san-thay-the-${slug}`,
    alternativesPattern: /^san-thay-the-([a-z0-9]+)$/,
    static: { compare: "so-sanh-san-giao-dich", about: "gioi-thieu", affiliateDisclosure: "cong-bo-lien-ket-tiep-thi", imprint: "thong-tin-phap-ly", privacy: "chinh-sach-bao-mat" },
  },
  // Bengali, Amharic, Burmese, Thai and Khmer letters and Cyrillic would be percent-encoded in an address; Filipino readers search in English.
  bn: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
  },
  id: {
    referral: (slug) => `kode-referral-${slug}`,
    referralPattern: /^kode-referral-([a-z0-9]+)$/,
    alternatives: (slug) => `alternatif-${slug}`,
    alternativesPattern: /^alternatif-([a-z0-9]+)$/,
    static: { compare: "perbandingan-exchange", about: "tentang-kami", affiliateDisclosure: "pengungkapan-afiliasi", imprint: "informasi-hukum", privacy: "kebijakan-privasi" },
  },
  uk: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
  },
  am: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
  },
  my: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
  },
  sw: {
    referral: (slug) => `msimbo-wa-rufaa-${slug}`,
    referralPattern: /^msimbo-wa-rufaa-([a-z0-9]+)$/,
    alternatives: (slug) => `mbadala-wa-${slug}`,
    alternativesPattern: /^mbadala-wa-([a-z0-9]+)$/,
    static: { compare: "linganisha", about: "kuhusu", affiliateDisclosure: "ufichuzi-wa-ushirika", imprint: "taarifa-za-kisheria", privacy: "sera-ya-faragha" },
  },
  fil: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
  },
  th: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
  },
  ru: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
  },
  fr: {
    referral: (slug) => `code-parrainage-${slug}`,
    referralPattern: /^code-parrainage-([a-z0-9]+)$/,
    alternatives: (slug) => `alternatives-a-${slug}`,
    alternativesPattern: /^alternatives-a-([a-z0-9]+)$/,
    static: { compare: "comparatif", about: "a-propos", affiliateDisclosure: "divulgation-affiliation", imprint: "mentions-legales", privacy: "politique-de-confidentialite" },
  },
  km: {
    referral: (slug) => `${slug}-referral-code`,
    referralPattern: /^([a-z0-9]+)-referral-code$/,
    alternatives: (slug) => `${slug}-alternatives`,
    alternativesPattern: /^([a-z0-9]+)-alternatives$/,
    static: { compare: "compare", about: "about", affiliateDisclosure: "affiliate-disclosure", imprint: "imprint", privacy: "privacy" },
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
  const codes = (l: Locale) => [localeInfo[l].htmlLang, ...(localeInfo[l].alsoHreflang ?? [])];
  return { ...Object.fromEntries(locales.flatMap((l) => codes(l).map((code) => [code, pathFor(l)]))), "x-default": pathFor(defaultLocale) };
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
