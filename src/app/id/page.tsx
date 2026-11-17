import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("id");

export default function Page() {
  return <HomePage locale="id" />;
}
