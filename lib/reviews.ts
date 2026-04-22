// Server-side Google Business Profile data fetcher.
// Uses Places API (Find Place / Place Details) and caches 1 hour via
// Next.js fetch cache so we don't hammer the API on every render.

export type PlaceSummary = {
  rating: number | null;
  totalReviews: number | null;
  name: string | null;
};

export type PlaceReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export type PlaceDetails = PlaceSummary & {
  reviews: PlaceReview[];
};

const EMPTY: PlaceDetails = {
  rating: null,
  totalReviews: null,
  name: null,
  reviews: [],
};

export async function getPlaceDetails(): Promise<PlaceDetails> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return EMPTY;

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "name,rating,user_ratings_total,reviews");
  url.searchParams.set("key", apiKey);

  try {
    const res = await fetch(url.toString(), {
      // Cache the response for 1 hour
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.warn("[reviews] Places API returned", res.status);
      return EMPTY;
    }
    const data = (await res.json()) as {
      status?: string;
      result?: {
        name?: string;
        rating?: number;
        user_ratings_total?: number;
        reviews?: Array<{
          author_name?: string;
          rating?: number;
          text?: string;
          relative_time_description?: string;
        }>;
      };
    };
    if (data.status !== "OK" || !data.result) {
      console.warn("[reviews] Places API non-OK:", data.status);
      return EMPTY;
    }
    const r = data.result;
    return {
      name: r.name ?? null,
      rating: r.rating ?? null,
      totalReviews: r.user_ratings_total ?? null,
      reviews: (r.reviews ?? []).map((rev) => ({
        author: rev.author_name ?? "Google Reviewer",
        rating: rev.rating ?? 0,
        text: rev.text ?? "",
        relativeTime: rev.relative_time_description ?? "",
      })),
    };
  } catch (err) {
    console.warn("[reviews] fetch failed", err);
    return EMPTY;
  }
}
