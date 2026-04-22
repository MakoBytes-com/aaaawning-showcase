import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility Statement — AAA Awning Co., Inc.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Accessibility Statement"
      description="Accessibility Statement — AAA Awning Co., Inc."
    />
  );
}
