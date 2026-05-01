import type { Metadata } from "next";
import { ProductHubPage } from "@/components/ProductHubPage";

export const metadata: Metadata = {
  title: "Awnings & Canopies",
  description:
    "Custom fabric and metal awnings, canopies, carports, gazebos, retractables, walkway covers — designed, fabricated, and installed across Texas.",
  alternates: { canonical: "/awnings-canopies" },
};

export default function Page() {
  return <ProductHubPage category="awnings-canopies" />;
}
