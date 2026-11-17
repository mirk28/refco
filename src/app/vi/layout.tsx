import "../globals.css";
import { rootMetadata, rootViewport, SiteShell } from "@/components/SiteShell";

/** Root layout of the Vietnamese site (`/vi`). To add a language, copy this folder and change the locale. */
export const metadata = rootMetadata("vi");
export const viewport = rootViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="vi">{children}</SiteShell>;
}
