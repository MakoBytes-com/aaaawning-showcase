import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Extruded Aluminum Awnings, Walkway Covers & Canopies",
  description: "Commercial-grade extruded aluminum systems engineered for long life.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Awnings & Canopies"
      title="Extruded Aluminum Awnings, Walkway Covers & Canopies"
      description="Commercial-grade extruded aluminum systems engineered for long life."
    />
  );
}
