import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Carports",
  description: "Steel and aluminum carports — protect vehicles from Texas sun and weather.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Awnings & Canopies"
      title="Carports"
      description="Steel and aluminum carports — protect vehicles from Texas sun and weather."
    />
  );
}
