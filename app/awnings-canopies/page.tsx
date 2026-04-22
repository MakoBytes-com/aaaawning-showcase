import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Awnings & Canopies",
  description: "Custom fabric and metal awnings, canopies, carports, gazebos and more — built in Houston.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Products"
      title="Awnings & Canopies"
      description="Custom fabric and metal awnings, canopies, carports, gazebos and more — built in Houston."
    />
  );
}
