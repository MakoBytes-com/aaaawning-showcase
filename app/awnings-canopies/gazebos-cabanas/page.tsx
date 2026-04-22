import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Gazebos & Cabanas",
  description: "Custom outdoor living structures for backyards, pools, and hospitality.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Awnings & Canopies"
      title="Gazebos & Cabanas"
      description="Custom outdoor living structures for backyards, pools, and hospitality."
    />
  );
}
