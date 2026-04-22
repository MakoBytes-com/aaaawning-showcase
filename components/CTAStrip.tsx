import Link from "next/link";
import { Container } from "./Container";
import { Phone, ChevronRight } from "lucide-react";
import { OFFICES } from "@/lib/site";

type Props = {
  heading?: string;
  subheading?: string;
};

export function CTAStrip({
  heading = "Ready for a free estimate?",
  subheading = "We'll come out, measure, and quote — no obligation, no pressure.",
}: Props) {
  return (
    <section className="bg-burgundy-600 text-white">
      <Container className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif">{heading}</h2>
          <p className="mt-3 text-white/90 text-lg">{subheading}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-burgundy-700 hover:bg-cream font-semibold px-6 py-3 rounded-sm uppercase tracking-wider text-sm transition-colors"
          >
            Request an Estimate
            <ChevronRight className="h-4 w-4" />
          </Link>
          <a
            href={OFFICES.houston.phoneHref}
            className="inline-flex items-center justify-center gap-2 border border-white/70 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-sm uppercase tracking-wider text-sm transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call {OFFICES.houston.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
