import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Hurricane-Rated Awnings for the Texas Gulf Coast",
  description: "Storm-ready awning systems for Galveston, Corpus Christi, League City, and the Houston coast.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Coastal"
      title="Hurricane-Rated Awnings for the Texas Gulf Coast"
      description="Storm-ready awning systems for Galveston, Corpus Christi, League City, and the Houston coast."
    />
  );
}
