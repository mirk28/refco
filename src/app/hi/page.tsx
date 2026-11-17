import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("hi");

export default function Page() {
  return <HomePage locale="hi" />;
}
