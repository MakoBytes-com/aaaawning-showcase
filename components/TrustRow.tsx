import { Star, Shield, MapPin, Award } from "lucide-react";
import { Container } from "./Container";
import { getPlaceDetails } from "@/lib/reviews";

export async function TrustRow() {
  const place = await getPlaceDetails();

  const items = [
    {
      icon: Award,
      label: "40+ Years in Texas",
      sub: "Houston-based since 1984",
    },
    {
      icon: Shield,
      label: "Sunbrella Preferred Partner",
      sub: "Premium fabric warranties",
    },
    {
      icon: MapPin,
      label: "Texas-Built Fabrication",
      sub: "Designed + made in Houston",
    },
    place.rating !== null && place.totalReviews !== null
      ? {
          icon: Star,
          label: `${place.rating.toFixed(1)} ★ on Google`,
          sub: `${place.totalReviews} customer review${place.totalReviews === 1 ? "" : "s"}`,
        }
      : {
          icon: Star,
          label: "Highly Rated",
          sub: "Google-reviewed work",
        },
  ];

  return (
    <section className="bg-white border-y border-zinc-200">
      <Container className="py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-burgundy-50 text-burgundy-600 flex items-center justify-center">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">{label}</div>
              <div className="text-xs text-muted">{sub}</div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
