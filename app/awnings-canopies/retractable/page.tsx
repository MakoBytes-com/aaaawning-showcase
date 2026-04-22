import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Retractable Awnings",
  description: "Motorized and manual retractable awnings for residential and hospitality use.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Awnings & Canopies"
      title="Retractable Awnings"
      description="Motorized and manual retractable awnings for residential and hospitality use."
    />
  );
}
