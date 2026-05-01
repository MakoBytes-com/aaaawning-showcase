import { JsonLd } from "./JsonLd";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import { getPlaceDetails } from "@/lib/reviews";

/**
 * Site-wide JSON-LD: Organization + LocalBusiness with live aggregateRating
 * pulled from Google Places (cached 1h via Next fetch). Renders nothing
 * visible. Always include in the root layout so every page carries the
 * organization + LocalBusiness signals for Google + AI crawlers.
 */
export async function GlobalSchemas() {
  const place = await getPlaceDetails();
  const aggregateRating =
    place.rating !== null && place.totalReviews !== null
      ? { ratingValue: place.rating, reviewCount: place.totalReviews }
      : null;

  return (
    <JsonLd
      data={[organizationSchema(), localBusinessSchema({ aggregateRating })]}
    />
  );
}
