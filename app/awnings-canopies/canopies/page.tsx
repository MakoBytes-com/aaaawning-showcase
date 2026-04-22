import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Canopies",
  description: "Commercial and event canopies custom-designed for your property.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Awnings & Canopies"
      title="Canopies"
      description="Commercial and event canopies custom-designed for your property."
    />
  );
}
