import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { exchanges } from "@/data/exchanges";
import { exchangeFor } from "@/data/i18n";
import { ExchangePage, exchangeMetadata } from "@/components/ExchangePage";
import { exchangeSlugFromPage, referralPageSlug } from "@/i18n/config";

const locale = "es";

type Props = { params: Promise<{ page: string }> };

export const dynamicParams = false;

/** `/es/codigo-de-referido-<slug>` – the referral-code page of each exchange in Spanish. */
export function generateStaticParams() {
  return exchanges.map((e) => ({ page: referralPageSlug(e.slug, locale) }));
}

const exchangeOf = (page: string) => {
  const slug = exchangeSlugFromPage(page, locale);
  return slug ? exchangeFor(slug, locale) : undefined;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const e = exchangeOf((await params).page);
  return e ? exchangeMetadata(e, locale) : {};
}

export default async function Page({ params }: Props) {
  const e = exchangeOf((await params).page);
  if (!e) notFound();
  return <ExchangePage exchange={e} locale={locale} />;
}
