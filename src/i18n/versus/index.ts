import type { Locale } from "../config";
import { en } from "./en";
import type { VersusText } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import { tr } from "./tr";
import { de } from "./de";
import { hi } from "./hi";
import { ur } from "./ur";
import { ko } from "./ko";
import { ar } from "./ar";
import { vi } from "./vi";

export type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const texts: Record<Locale, VersusText> = { en, es, pt, tr, de, hi, ur, ko, ar, vi };

/**
 * The head-to-head pages and the comparison hub in one language (see `./en.tsx`).
 * Pass the exchange entries of the same language (`versusPairsFor(locale)`, `exchangesFor(locale)`), so that
 * the facts quoted inside a sentence are in that language too.
 */
export const versusText = (locale: Locale): VersusText => texts[locale];
