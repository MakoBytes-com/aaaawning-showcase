import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Get a Free Estimate",
  description: "Tell us about your project — we'll come out for a free on-site measurement and quote.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Contact"
      title="Get a Free Estimate"
      description="Tell us about your project — we'll come out for a free on-site measurement and quote."
    />
  );
}
