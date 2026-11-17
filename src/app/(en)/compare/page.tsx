import { CompareHubPage, compareHubMetadata } from "@/components/CompareHubPage";

export const metadata = compareHubMetadata("en");

export default function Page() {
  return <CompareHubPage locale="en" />;
}
