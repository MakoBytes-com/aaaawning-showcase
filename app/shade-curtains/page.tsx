import type { Metadata } from "next";
import { ProductHubPage } from "@/components/ProductHubPage";

export const metadata: Metadata = {
  title: "Shade & Curtains",
  description:
    "Shade structures, shade sails, patio curtains, and motorized screens for outdoor comfort across Texas.",
  alternates: { canonical: "/shade-curtains" },
};

export default function Page() {
  return <ProductHubPage category="shade-curtains" />;
}
