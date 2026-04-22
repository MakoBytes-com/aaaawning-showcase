import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy — AAA Awning Co., Inc.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      description="Privacy Policy — AAA Awning Co., Inc."
    />
  );
}
