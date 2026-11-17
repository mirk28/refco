import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("es");

export default function Page() {
  return <HomePage locale="es" />;
}
