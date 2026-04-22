import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Over 40 Years of Texas Awning Craft",
  description: "Family-run fabrication, design, and installation — Houston, Dallas, Fort Worth, Austin, and San Antonio.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="About"
      title="Over 40 Years of Texas Awning Craft"
      description="Family-run fabrication, design, and installation — Houston, Dallas, Fort Worth, Austin, and San Antonio."
    />
  );
}
