import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("sw");

export default function Page() {
  return <HomePage locale="sw" />;
}
