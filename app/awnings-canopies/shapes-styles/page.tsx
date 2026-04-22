import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Shapes & Styles",
  description: "Standard and custom awning shapes — dome, shed, waterfall, quarter-barrel and more.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Awnings & Canopies"
      title="Shapes & Styles"
      description="Standard and custom awning shapes — dome, shed, waterfall, quarter-barrel and more."
    />
  );
}
