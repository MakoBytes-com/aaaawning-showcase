import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service — AAA Awning Co., Inc.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Terms of Service"
      description="Terms of Service — AAA Awning Co., Inc."
    />
  );
}
