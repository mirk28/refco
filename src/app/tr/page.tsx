import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("tr");

export default function Page() {
  return <HomePage locale="tr" />;
}
