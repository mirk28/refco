import { TextPage, textPageMetadata } from "@/components/TextPages";

export const metadata = textPageMetadata("privacy", "en");

export default function Page() {
  return <TextPage page="privacy" locale="en" />;
}
