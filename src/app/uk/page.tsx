import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("uk");

export default function Page() {
  return <HomePage locale="uk" />;
}
