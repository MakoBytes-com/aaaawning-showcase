import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTAStrip } from "@/components/CTAStrip";
import { PartnersStrip } from "@/components/PartnersStrip";
import { Award, Users, Wrench, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AAA Awning Co., Inc. has been designing, fabricating, and installing custom awnings out of Houston for over 40 years. Family-run. Texas-built.",
};

const VALUES = [
  {
    icon: Award,
    title: "Assured Quality",
    body: "Every awning is built from fabric and metal chosen for longevity in Texas sun and storm — Sunbrella, heavy-gauge steel, extruded aluminum.",
  },
  {
    icon: Wrench,
    title: "Handmade Craft",
    body: "We weld, sew, and finish in our own Houston shop. Our sewing machines have been stitching Sunbrella since the Reagan administration.",
  },
  {
    icon: Users,
    title: "In-House Crews",
    body: "Our installers are AAA employees, trained in-house. We don't sub out the work that has our name on it.",
  },
  {
    icon: HeartHandshake,
    title: "Creative Graphics",
    body: "Our in-house graphics department reproduces your logo or helps design the right look for your storefront, restaurant, or residence.",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-burgundy-600 text-white">
        <Container className="py-16 sm:py-20">
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/80">
            Our Story
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-serif max-w-3xl">
            Designing, fabricating, and installing custom awnings in Texas since 1984.
          </h1>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-5 text-ink leading-relaxed">
              <p className="text-lg">
                AAA Awning Co., Inc. is a Houston-based manufacturer and installer of custom awnings, canopies, cabanas, gazebos, walkway covers, retractable awnings, shade structures, and patio curtains. For over forty years we&rsquo;ve crafted fabric and metal products for commercial and residential projects across Texas.
              </p>
              <p>
                Our work covers a lot of ground — restaurants and retail storefronts along San Felipe and Westheimer, poolside cabanas in The Woodlands and Sugar Land, metal walkway covers for schools and apartment complexes across the Metroplex, and hurricane-rated systems along the Gulf Coast from Galveston to Corpus Christi.
              </p>
              <p>
                What hasn&rsquo;t changed in forty years: we design to your property, fabricate in our own shop, and install with our own people. What has changed: the materials have gotten better, the finishes last longer, and the motors are quieter. We still welcome any shape or style you can sketch on a napkin.
              </p>
            </div>

            <aside className="lg:col-span-2 bg-cream rounded-lg p-6 sm:p-8 border border-zinc-200">
              <div className="section-label text-xs">At a Glance</div>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-ink">Founded</dt>
                  <dd className="text-muted">1984, Houston, Texas</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Headquarters</dt>
                  <dd className="text-muted">8810 Madie Drive, Houston, TX 77022</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Service Area</dt>
                  <dd className="text-muted">Houston, Dallas, Fort Worth, Austin, San Antonio, and the Texas Gulf Coast.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Applications</dt>
                  <dd className="text-muted">Residential, restaurants, retail, hospitality, healthcare, schools, multi-family, municipal.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Materials</dt>
                  <dd className="text-muted">Sunbrella, marine canvas, vinyl, shade cloth, extruded aluminum, steel, standing-seam panels.</dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <Container>
          <div className="max-w-2xl">
            <div className="section-label text-sm">What Sets Us Apart</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">
              Forty years of saying yes to the hard stuff.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-lg p-6 border border-zinc-200">
                <div className="w-11 h-11 rounded-md bg-burgundy-50 text-burgundy-600 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-lg text-ink">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PartnersStrip />
      <CTAStrip />
    </>
  );
}
