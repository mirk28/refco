import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("ru");

export default function Page() {
  return <HomePage locale="ru" />;
}
