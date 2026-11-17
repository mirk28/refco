import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("ar");

export default function Page() {
  return <HomePage locale="ar" />;
}
