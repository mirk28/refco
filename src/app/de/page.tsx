import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("de");

export default function Page() {
  return <HomePage locale="de" />;
}
