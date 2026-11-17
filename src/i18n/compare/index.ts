import type { Locale } from "../config";
import { en } from "./en";
import type { CompareText } from "./en";
import { es } from "./es";

export type { AltFaqGroup, CompareText } from "./en";

const texts: Record<Locale, CompareText> = { en, es };

/**
 * The sentences of the comparison pages in one language (see `./en.ts`).
 * Pass the exchange entries of the same language (`exchangesFor(locale)`), so that the facts quoted inside a
 * sentence are in that language too.
 */
export const compareText = (locale: Locale): CompareText => texts[locale];
