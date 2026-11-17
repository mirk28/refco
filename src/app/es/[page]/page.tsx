import type { Metadata } from "next";
import { LocalePage, localePageMetadata } from "@/components/LocalePage";
import { pageSegments } from "@/lib/pages";

const locale = "es";

type Props = { params: Promise<{ page: string }> };

export const dynamicParams = false;

/**
 * Every Spanish page below `/es`: `/es/codigo-de-referido-<slug>`, `/es/alternativas-a-<slug>`, `/es/<a>-vs-<b>`,
 * `/es/comparar`, `/es/acerca-de` and the legal pages (segments: `src/i18n/config.ts`).
 */
export function generateStaticParams() {
  return pageSegments(locale).map((page) => ({ page }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return localePageMetadata((await params).page, locale);
}

export default async function Page({ params }: Props) {
  return <LocalePage segment={(await params).page} locale={locale} />;
}
