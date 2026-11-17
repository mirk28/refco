import "../globals.css";
import { rootMetadata, rootViewport, SiteShell } from "@/components/SiteShell";

/** Root layout of the French site (`/fr`). To add a language, copy this folder and change the locale. */
export const metadata = rootMetadata("fr");
export const viewport = rootViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="fr">{children}</SiteShell>;
}
