import { TextPage, textPageMetadata } from "@/components/TextPages";

export const metadata = textPageMetadata("imprint", "en");

export default function Page() {
  return <TextPage page="imprint" locale="en" />;
}
