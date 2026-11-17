import type { Locale } from "../config";
import { en } from "./en";
import type { CompareText } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import { tr } from "./tr";
import { de } from "./de";

export type { AltFaqGroup, CompareText } from "./en";

const texts: Record<Locale, CompareText> = { en, es, pt, tr, de };

/**
 * The sentences of the comparison pages in one language (see `./en.ts`).
 * Pass the exchange entries of the same language (`exchangesFor(locale)`), so that the facts quoted inside a
 * sentence are in that language too.
 */
export const compareText = (locale: Locale): CompareText => texts[locale];
