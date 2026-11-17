/**
 * Helpers of the Arabic texts.
 *
 * The exchange names stay in Latin letters, as on Arabic crypto sites. Many readers search with the Arabic spelling
 * ("كود إحالة بينانس"), so titles, H1, the first mention in an opening text and the keywords add it in brackets:
 * `withArabic(e)` gives "Binance (بينانس)". Everywhere else the Latin name alone.
 */
export const arabicName: Record<string, string> = {
  binance: "بينانس",
  okx: "أو كي إكس",
  bybit: "بايبت",
  bitget: "بيتجت",
  gate: "جيت",
  kucoin: "كوكوين",
  mexc: "ميكسي",
};
export const withArabic = (e: { slug: string; name: string }) => (arabicName[e.slug] ? `${e.name} (${arabicName[e.slug]})` : e.name);

/**
 * Forms of a counted noun: one "منصة واحدة", two "منصتان", few (3–10) "منصات", many (11–99) "منصة" / "سوقًا" (with
 * tanween where the noun takes it), hundred (100, 200, 1000 … and 0) "سوق" – only needed where it differs from many.
 */
export type ArabicCount = { one: string; two: string; few: string; many: string; hundred?: string };

/**
 * A number with its noun, as Arabic counts: 1 → "سوق واحدة", 2 → "سوقان", 3–10 → "3 أسواق", 11–99 → "11 سوقًا",
 * 100 → "100 سوق" (the categories of `Intl.PluralRules("ar")`, so 103 → "103 أسواق", 111 → "111 سوقًا"). The digits
 * stay Latin. Pass the dual in the case the sentence needs ("منصتان" / "منصتين").
 */
export function arabicCount(n: number, forms: ArabicCount): string {
  const rule = new Intl.PluralRules("ar").select(n);
  if (rule === "one") return forms.one;
  if (rule === "two") return forms.two;
  if (rule === "few") return `${n} ${forms.few}`;
  if (rule === "many") return `${n} ${forms.many}`;
  return `${n} ${forms.hundred ?? forms.many}`;
}
