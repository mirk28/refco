import type { Metadata } from "next";
import { LocalePage, localePageMetadata } from "@/components/LocalePage";
import { pageSegments } from "@/lib/pages";

const locale = "my";

type Props = { params: Promise<{ page: string }> };

export const dynamicParams = false;

/**
 * Every Burmese page below `/my` (segments: `src/i18n/config.ts`); see `src/app/es/[page]/page.tsx`.
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
