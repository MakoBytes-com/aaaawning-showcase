import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Shade & Curtains",
  description: "Shade structures, sails, patio curtains, and motorized screens for outdoor comfort.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Products"
      title="Shade & Curtains"
      description="Shade structures, sails, patio curtains, and motorized screens for outdoor comfort."
    />
  );
}
