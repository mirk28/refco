import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("vi");

export default function Page() {
  return <HomePage locale="vi" />;
}
