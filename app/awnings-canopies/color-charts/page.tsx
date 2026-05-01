import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTAStrip } from "@/components/CTAStrip";
import {
  SUNBRELLA_SOLIDS,
  SUNBRELLA_STRIPES,
  METAL_FINISHES,
} from "@/lib/color-chart";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Fabric & Metal Color Charts",
  description:
    "Sunbrella awning/marine solids, stripes, and Kynar metal finishes. Visual color chart from AAA Awning Co. — a Sunbrella Preferred Partner.",
  alternates: { canonical: "/awnings-canopies/color-charts" },
};

export default function ColorChartsPage() {
  return (
    <>
      <section className="bg-burgundy-600 text-white">
        <Container className="py-16 sm:py-20">
          <nav className="text-xs sm:text-sm text-white/85 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2 opacity-60">/</span>
            <Link href="/awnings-canopies" className="hover:text-white">
              Awnings &amp; Canopies
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-white">Color Charts</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-serif">Fabric &amp; Metal Color Charts</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            A curated view of our most-specified Sunbrella fabric colors, classic
            stripe patterns, and Kynar 500 metal finishes. As a Sunbrella Preferred
            Partner, we work from the full palette — these are the popular starting
            points.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-cream border-b border-zinc-200">
        <Container>
          <div className="max-w-3xl space-y-4 text-ink">
            <p className="text-lg font-semibold">Colors on screen are approximations.</p>
            <p className="text-muted leading-relaxed">
              Fabric color on a monitor is never exact. Weave, sheen, lighting,
              and dye lot all shift the way a color reads on your property. We
              bring physical swatches to every site visit — the right way to
              finalize a color choice is to hold the real thing against your
              facade in daylight.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.sunbrella.com/en-us/color/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy-600 hover:text-burgundy-700"
              >
                Official Sunbrella color viewer
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy-600 hover:text-burgundy-700"
              >
                Request physical swatches →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Sunbrella Solids */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="max-w-2xl">
            <div className="section-label text-sm">Sunbrella Awning &amp; Marine</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">Solid colors</h2>
            <p className="mt-3 text-muted">
              Heavy-duty solution-dyed acrylic. 10-year limited fabric warranty.
              Fade-resistant, mold-resistant, and the industry&rsquo;s most specified
              awning fabric.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {SUNBRELLA_SOLIDS.map((family) => (
              <div key={family.label}>
                <div className="flex items-baseline justify-between border-b border-zinc-200 pb-3">
                  <h3 className="font-serif text-xl text-ink">{family.label}</h3>
                  <span className="text-xs text-muted">{family.swatches.length} colors</span>
                </div>
                <p className="mt-2 text-sm text-muted">{family.description}</p>
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {family.swatches.map((s) => (
                    <div
                      key={s.name}
                      className="rounded-md overflow-hidden border border-zinc-200 bg-white"
                    >
                      <div
                        className="aspect-square w-full"
                        style={{ backgroundColor: s.hex }}
                        aria-hidden="true"
                      />
                      <div className="px-3 py-2.5">
                        <div className="text-sm font-semibold text-ink leading-tight">
                          {s.name}
                        </div>
                        {s.sku && (
                          <div className="text-xs text-muted mt-0.5">{s.sku}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sunbrella Stripes */}
      <section className="py-16 sm:py-20 bg-cream">
        <Container>
          <div className="max-w-2xl">
            <div className="section-label text-sm">Sunbrella</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">Popular stripes</h2>
            <p className="mt-3 text-muted">
              Classic awning stripes — the traditional look for historic
              storefronts, residential bay windows, and everything in between.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUNBRELLA_STRIPES.map((s) => (
              <div
                key={s.name}
                className="rounded-md overflow-hidden border border-zinc-200 bg-white"
              >
                <div
                  className="h-28 w-full"
                  style={{ background: s.stripe }}
                  aria-hidden="true"
                />
                <div className="px-4 py-3">
                  <div className="text-sm font-semibold text-ink">{s.name}</div>
                  {s.sku && (
                    <div className="text-xs text-muted mt-0.5">{s.sku}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Metal Finishes */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="max-w-2xl">
            <div className="section-label text-sm">Metal Awnings &amp; Canopies</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">Kynar 500 finishes</h2>
            <p className="mt-3 text-muted">
              Standard Kynar 500 colors for metal awnings, walkway covers,
              extruded aluminum, carports, and canopies. 20–30 year color
              warranties from the coater. Custom color-match available on most
              products for an upcharge.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {METAL_FINISHES.map((family) => (
              <div key={family.label}>
                <div className="flex items-baseline justify-between border-b border-zinc-200 pb-3">
                  <h3 className="font-serif text-xl text-ink">{family.label}</h3>
                  <span className="text-xs text-muted">{family.swatches.length} finishes</span>
                </div>
                <p className="mt-2 text-sm text-muted">{family.description}</p>
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {family.swatches.map((s) => (
                    <div
                      key={s.name}
                      className="rounded-md overflow-hidden border border-zinc-200 bg-white"
                    >
                      <div
                        className="aspect-square w-full"
                        style={{ backgroundColor: s.hex }}
                        aria-hidden="true"
                      />
                      <div className="px-3 py-2.5">
                        <div className="text-sm font-semibold text-ink leading-tight">
                          {s.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Custom section */}
      <section className="py-16 sm:py-20 bg-cream border-t border-zinc-200">
        <Container className="max-w-3xl text-ink">
          <div className="section-label text-sm">Beyond the standard palette</div>
          <h2 className="mt-4 text-3xl font-serif">Custom colors &amp; printed graphics</h2>
          <div className="mt-5 space-y-4 leading-relaxed">
            <p>
              Looking for a color that isn&rsquo;t on these charts? Sunbrella
              publishes hundreds of additional solids and patterns — and our
              in-house graphics department can dye-sublimate custom prints,
              logos, and artwork directly onto awning fabric.
            </p>
            <p>
              For metal, we can match almost any color — trim paint, fascia
              color, corporate branding. Bring us a paint chip or color code
              and we&rsquo;ll quote the match.
            </p>
          </div>
        </Container>
      </section>

      <CTAStrip
        heading="Ready to pick colors?"
        subheading="We'll bring physical swatches to your site visit — the only right way to finalize a color choice."
      />
    </>
  );
}
