import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Shade Sails",
  description: "Tensioned fabric shade sails — modern, sculptural, effective.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Shade & Curtains"
      title="Shade Sails"
      description="Tensioned fabric shade sails — modern, sculptural, effective."
    />
  );
}
