import type { Locale } from "./config";

/**
 * Spellings of the exchange names in the script of a language.
 *
 * The names stay in Latin letters everywhere. Where readers also search with a spelling in their own script
 * ("реферальный код Бинанс", "รหัสแนะนำ ไบแนนซ์"), titles, H1, the first mention in an opening text and the keywords
 * add it in brackets: `withReading(e, "ru")` gives "Binance (Бинанс)". A language without an entry gets the Latin name
 * alone. (Korean and Arabic have their own files: `ko-josa.ts`, `ar-names.ts`.)
 */
export const nameReadings: Partial<Record<Locale, Record<string, string>>> = {
  bn: { binance: "বাইন্যান্স", okx: "ওকেএক্স", bybit: "বাইবিট", bitget: "বিটগেট", gate: "গেট", kucoin: "কুকয়েন", mexc: "এমইএক্সসি" },
  uk: { binance: "Бінанс", okx: "ОКХ", bybit: "Байбіт", bitget: "Бітгет", gate: "Гейт", kucoin: "Кукоїн", mexc: "Мекс" },
  am: { binance: "ባይናንስ", okx: "ኦኬኤክስ", bybit: "ባይቢት", bitget: "ቢትጌት", gate: "ጌት", kucoin: "ኩኮይን", mexc: "ሜክሲ" },
  th: { binance: "ไบแนนซ์", okx: "โอเคเอ็กซ์", bybit: "บายบิต", bitget: "บิตเก็ต", gate: "เกต", kucoin: "คูคอยน์", mexc: "เม็กซี" },
  ru: { binance: "Бинанс", okx: "ОКХ", bybit: "Байбит", bitget: "Битгет", gate: "Гейт", kucoin: "Кукоин", mexc: "Мекс" },
  km: { binance: "បាយណាន់", okx: "អូខេអ៊ិច", bybit: "បាយប៊ីត", bitget: "ប៊ីតហ្គេត", gate: "ហ្គេត", kucoin: "គូខញ", mexc: "ម៉ិចស៊ី" },
};

/** Readings that look like the Latin name (Cyrillic "ОКХ" for OKX): keywords only, never in brackets. */
const keywordsOnly: Partial<Record<Locale, string[]>> = { uk: ["okx"], ru: ["okx"] };

export const readingOf = (slug: string, locale: Locale): string | undefined => nameReadings[locale]?.[slug];

export function withReading(e: { slug: string; name: string }, locale: Locale): string {
  const reading = readingOf(e.slug, locale);
  return reading && !keywordsOnly[locale]?.includes(e.slug) ? `${e.name} (${reading})` : e.name;
}
