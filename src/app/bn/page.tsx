import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("bn");

export default function Page() {
  return <HomePage locale="bn" />;
}
