/**
 * The pages of a language version below its home page (`/es/<segment>`).
 *
 * One dynamic segment serves all of them, because Next.js cannot match a prefix or suffix inside a folder
 * name. `pageSegments` lists what is built, `findPage` tells which page a segment is, with the exchange
 * entries of that language.
 */
import type { Exchange } from "@/data/exchanges";
import { exchanges } from "@/data/exchanges";
import { exchangeFor } from "@/data/i18n";
import { getPairByPathSlug, versusPairs, versusSlug } from "@/data/versus";
import type { Pair } from "@/data/versus";
import { alternativesPageSlug, referralPageSlug, resolvePage, staticPages, staticPageSlug } from "@/i18n/config";
import type { Locale, StaticPage } from "@/i18n/config";

export type FoundPage =
  | { type: "referral"; exchange: Exchange }
  | { type: "alternatives"; exchange: Exchange }
  | { type: "versus"; pair: Pair }
  | { type: "static"; page: StaticPage };

/** Every last path segment of a language: referral-code, alternatives and head-to-head pages, hub, about and legal pages. */
export function pageSegments(locale: Locale): string[] {
  return [
    ...exchanges.flatMap((e) => [referralPageSlug(e.slug, locale), alternativesPageSlug(e.slug, locale)]),
    ...versusPairs.map(versusSlug),
    ...staticPages.map((p) => staticPageSlug(p, locale)),
  ];
}

export function findPage(segment: string, locale: Locale): FoundPage | undefined {
  const ref = resolvePage(segment, locale);
  if (!ref) return undefined;
  if (ref.type === "static") return ref;
  if (ref.type === "versus") {
    const pair = getPairByPathSlug(segment, locale);
    return pair ? { type: "versus", pair } : undefined;
  }
  const exchange = exchangeFor(ref.slug, locale);
  return exchange ? { type: ref.type, exchange } : undefined;
}
