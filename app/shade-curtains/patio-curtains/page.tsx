import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Patio Curtains",
  description: "Canvas, vinyl, and shade-cloth curtains for patios and porches.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Shade & Curtains"
      title="Patio Curtains"
      description="Canvas, vinyl, and shade-cloth curtains for patios and porches."
    />
  );
}
