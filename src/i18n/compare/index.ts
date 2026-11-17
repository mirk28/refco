import type { Locale } from "../config";
import { en } from "./en";
import type { CompareText } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import { tr } from "./tr";
import { de } from "./de";
import { hi } from "./hi";
import { ur } from "./ur";
import { ko } from "./ko";
import { ar } from "./ar";

export type { AltFaqGroup, CompareText } from "./en";

const texts: Record<Locale, CompareText> = { en, es, pt, tr, de, hi, ur, ko, ar };

/**
 * The sentences of the comparison pages in one language (see `./en.ts`).
 * Pass the exchange entries of the same language (`exchangesFor(locale)`), so that the facts quoted inside a
 * sentence are in that language too.
 */
export const compareText = (locale: Locale): CompareText => texts[locale];
