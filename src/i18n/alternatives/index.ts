import type { Locale } from "../config";
import { en } from "./en";
import type { AlternativesTexts } from "./en";
import { es } from "./es";

export type { AlternativesTexts } from "./en";

const texts: Record<Locale, AlternativesTexts> = { en, es };

/** Texts of the "[Exchange] alternatives" pages in one language. */
export const alternativesTexts = (locale: Locale): AlternativesTexts => texts[locale];
