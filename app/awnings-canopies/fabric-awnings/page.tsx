import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Fabric Awnings",
  description: "Custom-built fabric awnings for shade, weather protection, and curb appeal. Sunbrella partner.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Awnings & Canopies"
      title="Fabric Awnings"
      description="Custom-built fabric awnings for shade, weather protection, and curb appeal. Sunbrella partner."
    />
  );
}
