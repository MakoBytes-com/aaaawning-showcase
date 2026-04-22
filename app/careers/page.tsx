import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Employment Opportunities",
  description: "Now hiring fabricators, installers, and sales professionals in the Houston area.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Join Us"
      title="Employment Opportunities"
      description="Now hiring fabricators, installers, and sales professionals in the Houston area."
    />
  );
}
