import type { Locale } from "./config";
import { en } from "./en";
import type { Dictionary } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import { tr } from "./tr";
import { de } from "./de";

export type { Dictionary, PageLinks } from "./en";

const dictionaries: Record<Locale, Dictionary> = { en, es, pt, tr, de };

/** Interface texts of a language. */
export const getDictionary = (locale: Locale = "en"): Dictionary => dictionaries[locale];
