import type { Metadata } from "next";
import { ProductHubPage } from "@/components/ProductHubPage";

const OG_TITLE = "Shade Structures & Curtains | AAA Awning";
const OG_DESCRIPTION =
  "Shade structures, shade sails, patio curtains, and motorized screens for outdoor comfort across Texas.";

export const metadata: Metadata = {
  title: "Shade & Curtains",
  description: OG_DESCRIPTION,
  alternates: { canonical: "/shade-curtains" },
  openGraph: { title: OG_TITLE, description: OG_DESCRIPTION, url: "/shade-curtains" },
  twitter: { title: OG_TITLE, description: OG_DESCRIPTION },
};

export default function Page() {
  return <ProductHubPage category="shade-curtains" />;
}
