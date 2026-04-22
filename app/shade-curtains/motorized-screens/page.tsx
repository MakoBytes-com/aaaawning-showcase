import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Exterior Motorized Screens",
  description: "Retractable motorized screens for shade, privacy, and insect protection.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Shade & Curtains"
      title="Exterior Motorized Screens"
      description="Retractable motorized screens for shade, privacy, and insect protection."
    />
  );
}
