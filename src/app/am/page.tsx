import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("am");

export default function Page() {
  return <HomePage locale="am" />;
}
