import { exchangesFor } from "@/data/i18n";
import { getDictionary } from "@/i18n";
import { alternativesTexts } from "@/i18n/alternatives";
import type { Locale } from "@/i18n/config";
import { alternativesTo, feePair, leverageOf } from "./compare";
import { renderOg } from "./og";
import { findPage } from "./pages";
import { monthYearFor } from "./seo";

/**
 * Share card of the page behind `/<locale>/<segment>` – used by `src/app/<locale>/[page]/opengraph-image.tsx`
 * of every language other than English. (The English cards: `src/app/[slug]/opengraph-image/route.tsx`.)
 */
export function renderPageOg(segment: string, locale: Locale) {
  const t = getDictionary(locale).og;
  const kicker = t.exchangeKicker(monthYearFor(locale));
  const page = findPage(segment, locale);

  if (page?.type === "alternatives") {
    const x = page.exchange;
    const texts = alternativesTexts(locale);
    return renderOg({
      badge: x.name,
      badgeColor: x.brandColor,
      badgeInk: x.brandInk,
      kicker,
      title: texts.ogTitle(x.name),
      subtitle: texts.ogSubtitle(alternativesTo(x, locale).map((a) => a.name).join(" · ")),
      footer: t.footer,
    });
  }
  if (page?.type === "versus") {
    const { a, b } = page.pair;
    return renderOg({
      badge: t.versusBadge,
      kicker,
      title: `${a.name} vs ${b.name}`,
      subtitle: t.versusSubtitle(feePair(a.futuresFees), feePair(b.futuresFees), leverageOf(a), leverageOf(b)),
      footer: t.footer,
    });
  }
  if (page?.type === "referral") {
    const e = page.exchange;
    return renderOg({
      badge: e.name,
      badgeColor: e.brandColor,
      badgeInk: e.brandInk,
      kicker,
      title: t.exchangeTitle(e),
      subtitle: t.exchangeSubtitle(e),
      footer: t.footer,
    });
  }
  // Hub, about and legal pages show the general card of the language.
  return renderOg({
    kicker: t.homeKicker(monthYearFor(locale)),
    title: t.homeTitle,
    subtitle: exchangesFor(locale)
      .map((e) => e.name)
      .join(" · "),
    footer: t.footer,
  });
}
