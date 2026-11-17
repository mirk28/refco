import "../globals.css";
import { rootMetadata, rootViewport, SiteShell } from "@/components/SiteShell";

/** Root layout of the English site (everything at the root of the domain). */
export const metadata = rootMetadata("en");
export const viewport = rootViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
