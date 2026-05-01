import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationDetailPage } from "@/components/LocationDetailPage";
import { LOCATIONS, getLocationBySlug } from "@/lib/locations";

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
    title: `${loc.name}, TX — Custom Awnings & Canopies`,
    description: loc.blurb,
    alternates: { canonical: `/locations/${loc.slug}` },
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

  return <LocationDetailPage location={loc} />;
}
