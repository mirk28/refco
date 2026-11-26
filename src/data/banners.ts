// Page banners (public/banners/<locale>/<file>.webp and <file>-mobile.webp), rendered by binancesqare/video/banner.
// File names are the page keyword in Latin letters.
import type { Locale } from "@/i18n/config";

export const bannerFiles: Partial<Record<string, Record<Locale, string>>> = {
  binance: {
    "en": "binance-referral-code",
    "de": "binance-empfehlungscode",
    "es": "codigo-de-referido-binance",
    "fr": "code-parrainage-binance",
    "pt": "codigo-de-indicacao-binance",
    "ru": "referalnyy-kod-binance",
    "uk": "referalnyi-kod-binance",
    "ar": "kod-ihala-binance",
    "id": "kode-referral-binance",
    "vi": "ma-gioi-thieu-binance",
    "tr": "binance-referans-kodu",
    "hi": "binance-referral-kod",
    "bn": "binance-referral-kod",
    "ur": "binance-referral-kod",
    "ko": "binance-repeoreol-kodeu",
    "th": "rahat-naenam-binance",
    "sw": "msimbo-wa-rufaa-binance",
    "fil": "binance-referral-code",
    "am": "binance-referal-kod",
    "km": "kod-nenoam-binance",
    "my": "binance-referral-code"
  },
};
