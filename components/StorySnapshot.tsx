import Link from "next/link";
import { Container } from "./Container";
import { ArrowRight } from "lucide-react";

const PILLARS = [
  {
    title: "Custom, not catalog.",
    body: "Every project starts with a site visit. We design and fabricate to the exact geometry, use, and aesthetic of your property.",
  },
  {
    title: "Built in our own shop.",
    body: "Our Houston fabrication floor welds, sews, and finishes in-house. No subcontracting. No guessing.",
  },
  {
    title: "Installed by our own crews.",
    body: "Our installers train in-house and follow the same safety and quality standards that built our 40-year reputation.",
  },
];

export function StorySnapshot() {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="section-label text-sm">About Us</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">
              Texas-built awnings since 1984.
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              AAA Awning Co., Inc. has been designing, fabricating, and installing custom awnings, canopies, cabanas, walkway covers, and shade structures out of Houston for over forty years. Our products are crafted from fabric and metal for commercial and residential applications across Texas.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-burgundy-600 hover:text-burgundy-700"
            >
              Read our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="bg-white rounded-lg p-6 border border-zinc-200">
                <div className="h-0.5 w-8 bg-burgundy-600" />
                <h3 className="mt-4 font-serif text-lg text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
