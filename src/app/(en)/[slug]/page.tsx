import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { exchanges, getExchangeByPathSlug } from "@/data/exchanges";
import { getExchangeByAlternativesSlug } from "@/data/alternatives";
import { AlternativesPage, alternativesMetadata } from "@/components/AlternativesPage";
import { ExchangePage, exchangeMetadata } from "@/components/ExchangePage";
import { getPairByPathSlug, versusPairs, versusSlug } from "@/data/versus";
import { VersusPage, versusMetadata } from "@/components/VersusPage";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

/**
 * Three page types share this segment, because Next.js cannot match a suffix inside a folder name:
 * `/<slug>-referral-code` (`ExchangePage`), `/<slug>-alternatives` (`AlternativesPage`) and `/<a>-vs-<b>` (`VersusPage`).
 */
export function generateStaticParams() {
  return [
    ...exchanges.flatMap((e) => [{ slug: `${e.slug}-referral-code` }, { slug: `${e.slug}-alternatives` }]),
    ...versusPairs.map((p) => ({ slug: versusSlug(p) })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const focus = getExchangeByAlternativesSlug(slug);
  if (focus) return alternativesMetadata(focus, "en");
  const pair = getPairByPathSlug(slug);
  if (pair) return versusMetadata(pair, "en");
  const e = getExchangeByPathSlug(slug);
  if (!e) return {};
  return exchangeMetadata(e, "en");
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const focus = getExchangeByAlternativesSlug(slug);
  if (focus) return <AlternativesPage exchange={focus} locale="en" />;
  const pair = getPairByPathSlug(slug);
  if (pair) return <VersusPage pair={pair} locale="en" />;
  const e = getExchangeByPathSlug(slug);
  if (!e) notFound();
  return <ExchangePage exchange={e} locale="en" />;
}
