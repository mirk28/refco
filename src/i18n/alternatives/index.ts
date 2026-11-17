import type { Locale } from "../config";
import { en } from "./en";
import type { AlternativesTexts } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import { tr } from "./tr";
import { de } from "./de";
import { hi } from "./hi";
import { ur } from "./ur";
import { ko } from "./ko";
import { ar } from "./ar";

export type { AlternativesTexts } from "./en";

const texts: Record<Locale, AlternativesTexts> = { en, es, pt, tr, de, hi, ur, ko, ar };

/** Texts of the "[Exchange] alternatives" pages in one language. */
export const alternativesTexts = (locale: Locale): AlternativesTexts => texts[locale];
