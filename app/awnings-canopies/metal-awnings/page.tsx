import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Metal Awnings",
  description: "Durable metal awnings in a wide range of profiles, colors, and thicknesses.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Awnings & Canopies"
      title="Metal Awnings"
      description="Durable metal awnings in a wide range of profiles, colors, and thicknesses."
    />
  );
}
