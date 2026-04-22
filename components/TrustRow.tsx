import { Star, Shield, MapPin, Award } from "lucide-react";
import { Container } from "./Container";

const ITEMS = [
  { icon: Award, label: "40+ Years in Texas", sub: "Houston-based since 1984" },
  { icon: Shield, label: "Sunbrella Preferred Partner", sub: "Premium fabric warranties" },
  { icon: MapPin, label: "Texas-Built Fabrication", sub: "Designed + made in Houston" },
  { icon: Star, label: "Highly Rated", sub: "Google-reviewed work" },
];

export function TrustRow() {
  return (
    <section className="bg-white border-y border-zinc-200">
      <Container className="py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {ITEMS.map(({ icon: Icon, label, sub }) => (
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
