import { TextPage, textPageMetadata } from "@/components/TextPages";

export const metadata = textPageMetadata("affiliateDisclosure", "en");

export default function Page() {
  return <TextPage page="affiliateDisclosure" locale="en" />;
}
