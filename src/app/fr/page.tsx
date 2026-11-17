import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("fr");

export default function Page() {
  return <HomePage locale="fr" />;
}
