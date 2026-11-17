import { TextPage, textPageMetadata } from "@/components/TextPages";

export const metadata = textPageMetadata("about", "en");

export default function Page() {
  return <TextPage page="about" locale="en" />;
}
