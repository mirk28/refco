import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("th");

export default function Page() {
  return <HomePage locale="th" />;
}
