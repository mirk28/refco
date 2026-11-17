import { ogSize } from "@/lib/og";
import { renderPageOg } from "@/lib/og-page";
import { pageSegments } from "@/lib/pages";
import { getDictionary } from "@/i18n";

const locale = "uk";

export const alt = getDictionary(locale).og.exchangeAlt;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return pageSegments(locale).map((page) => ({ page }));
}

export default async function Image({ params }: { params: Promise<{ page: string }> | { page: string } }) {
  return renderPageOg((await params).page, locale);
}
