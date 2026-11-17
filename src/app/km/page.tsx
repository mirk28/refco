import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("km");

export default function Page() {
  return <HomePage locale="km" />;
}
