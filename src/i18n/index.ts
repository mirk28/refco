import type { Locale } from "./config";
import { en } from "./en";
import type { Dictionary } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import { tr } from "./tr";
import { de } from "./de";
import { hi } from "./hi";
import { ur } from "./ur";
import { ko } from "./ko";
import { ar } from "./ar";
import { vi } from "./vi";
import { bn } from "./bn";
import { id } from "./id";
import { uk } from "./uk";
import { am } from "./am";
import { my } from "./my";
import { sw } from "./sw";
import { fil } from "./fil";
import { th } from "./th";
import { ru } from "./ru";
import { fr } from "./fr";
import { km } from "./km";

export type { Dictionary, PageLinks } from "./en";

const dictionaries: Record<Locale, Dictionary> = { en, es, pt, tr, de, hi, ur, ko, ar, vi, bn, id, uk, am, my, sw, fil, th, ru, fr, km };

/** Interface texts of a language. */
export const getDictionary = (locale: Locale = "en"): Dictionary => dictionaries[locale];
