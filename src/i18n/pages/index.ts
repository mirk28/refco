import type { Locale } from "../config";
import { en } from "./en";
import type { PageTexts } from "./en";
import { es } from "./es";

export type { PageTexts, TextContext, TextSection } from "./en";

const texts: Record<Locale, PageTexts> = { en, es };

/** The text pages (about, affiliate disclosure, imprint, privacy policy) and their sidebar labels in one language. */
export const pageTexts = (locale: Locale): PageTexts => texts[locale];
