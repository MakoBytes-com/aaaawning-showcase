import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Shade Structures",
  description: "Engineered shade systems for schools, parks, pools, and commercial properties.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Shade & Curtains"
      title="Shade Structures"
      description="Engineered shade systems for schools, parks, pools, and commercial properties."
    />
  );
}
