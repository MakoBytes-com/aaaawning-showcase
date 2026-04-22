import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Installations across Texas — residential, commercial, hospitality, and municipal.",
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Our Work"
      title="Project Gallery"
      description="Installations across Texas — residential, commercial, hospitality, and municipal."
    />
  );
}
