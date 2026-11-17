import type { Exchange, Faq, FaqTopic } from "@/data/exchanges";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

/** Order of the FAQ groups on an exchange page. */
const topicOrder: FaqTopic[] = ["referral", "signup", "bonus", "fees", "safety"];

/** Order and (English) headings of the FAQ groups on an exchange page. */
export const faqTopics: { id: FaqTopic; title: (name: string) => string }[] = topicOrder.map((id) => ({
  id,
  title: getDictionary("en").faq.topics[id],
}));

/** "A, B and C" */
export const joinList = (items: string[]) => getDictionary("en").list(items);

/**
 * Questions every exchange page answers. The answers are assembled from the verified
 * structured fields, so they can never drift from the facts shown elsewhere on the page.
 * Exchange-specific questions live in `exchange.faqs`. The wording of the common questions
 * comes from the dictionary of the language (`src/i18n/`); `e` must be the entry in that language.
 */
export function buildFaqs(e: Exchange, locale: Locale = "en"): Faq[] {
  return [...getDictionary(locale).faq.common(e), ...e.faqs];
}

/** Splits a FAQ list into the ordered topic groups used on the page (empty groups are dropped). */
export function groupFaqs(e: Exchange, faqs: Faq[], locale: Locale = "en") {
  const titles = getDictionary(locale).faq.topics;
  return topicOrder
    .map((id) => ({ id, title: titles[id](e.name), faqs: faqs.filter((f) => (f.topic ?? "referral") === id) }))
    .filter((g) => g.faqs.length > 0);
}
