import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { LOCATIONS, getLocationBySlug, METRO_LABEL } from "@/lib/locations";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return { title: "Location Not Found" };
  return {
    title: `${loc.name} — Awnings, Canopies & Shade Structures`,
    description: loc.blurb,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();

  return (
    <PlaceholderPage
      eyebrow={METRO_LABEL[loc.metro]}
      title={loc.headline}
      description={loc.blurb}
    />
  );
}
