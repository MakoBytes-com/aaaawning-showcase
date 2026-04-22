import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Color Charts",
  description: "Browse fabric and metal color options from Sunbrella and our partners.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Awnings & Canopies"
      title="Color Charts"
      description="Browse fabric and metal color options from Sunbrella and our partners."
    />
  );
}
