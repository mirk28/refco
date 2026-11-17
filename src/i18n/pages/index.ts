import type { Locale } from "../config";
import { en } from "./en";
import type { PageTexts } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import { tr } from "./tr";
import { de } from "./de";
import { hi } from "./hi";

export type { PageTexts, TextContext, TextSection } from "./en";

const texts: Record<Locale, PageTexts> = { en, es, pt, tr, de, hi };

/** The text pages (about, affiliate disclosure, imprint, privacy policy) and their sidebar labels in one language. */
export const pageTexts = (locale: Locale): PageTexts => texts[locale];
