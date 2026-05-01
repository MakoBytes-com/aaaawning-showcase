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
  const url = `/locations/${loc.slug}`;
  return {
    title: loc.headline,
    description: loc.blurb,
    alternates: { canonical: url },
    openGraph: { title: loc.headline, description: loc.blurb, url },
    twitter: { title: loc.headline, description: loc.blurb },
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
