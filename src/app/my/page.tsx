import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("my");

export default function Page() {
  return <HomePage locale="my" />;
}
