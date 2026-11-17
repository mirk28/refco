import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { findPage } from "@/lib/pages";
import { AlternativesPage, alternativesMetadata } from "./AlternativesPage";
import { CompareHubPage, compareHubMetadata } from "./CompareHubPage";
import { ExchangePage, exchangeMetadata } from "./ExchangePage";
import { TextPage, textPageMetadata } from "./TextPages";
import { VersusPage, versusMetadata } from "./VersusPage";

/*
 * The page behind `/<locale>/<segment>` – used by `src/app/<locale>/[page]/page.tsx` of every language
 * other than English, so that such a route file holds nothing but its locale.
 */

export function localePageMetadata(segment: string, locale: Locale): Metadata {
  const page = findPage(segment, locale);
  if (!page) return {};
  if (page.type === "referral") return exchangeMetadata(page.exchange, locale);
  if (page.type === "alternatives") return alternativesMetadata(page.exchange, locale);
  if (page.type === "versus") return versusMetadata(page.pair, locale);
  return page.page === "compare" ? compareHubMetadata(locale) : textPageMetadata(page.page, locale);
}

export function LocalePage({ segment, locale }: { segment: string; locale: Locale }) {
  const page = findPage(segment, locale);
  if (!page) notFound();
  if (page.type === "referral") return <ExchangePage exchange={page.exchange} locale={locale} />;
  if (page.type === "alternatives") return <AlternativesPage exchange={page.exchange} locale={locale} />;
  if (page.type === "versus") return <VersusPage pair={page.pair} locale={locale} />;
  return page.page === "compare" ? <CompareHubPage locale={locale} /> : <TextPage page={page.page} locale={locale} />;
}
