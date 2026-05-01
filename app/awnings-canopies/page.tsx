import type { Metadata } from "next";
import { ProductHubPage } from "@/components/ProductHubPage";

const OG_TITLE = "Awnings & Canopies — Custom Fabric & Metal | AAA Awning";
const OG_DESCRIPTION =
  "Custom fabric and metal awnings, canopies, carports, gazebos, retractables, walkway covers — designed, fabricated, and installed across Texas.";

export const metadata: Metadata = {
  title: "Awnings & Canopies",
  description: OG_DESCRIPTION,
  alternates: { canonical: "/awnings-canopies" },
  openGraph: { title: OG_TITLE, description: OG_DESCRIPTION, url: "/awnings-canopies" },
  twitter: { title: OG_TITLE, description: OG_DESCRIPTION },
};

export default function Page() {
  return <ProductHubPage category="awnings-canopies" />;
}
