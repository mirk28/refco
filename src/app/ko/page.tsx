import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("ko");

export default function Page() {
  return <HomePage locale="ko" />;
}
