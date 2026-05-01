import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTAStrip } from "@/components/CTAStrip";
import { AlertTriangle, Wind, Wrench, ShieldCheck } from "lucide-react";

const OG_TITLE = "Hurricane-Rated Awnings — Texas Gulf Coast | AAA Awning";
const OG_DESCRIPTION =
  "Hurricane-rated, wind-engineered awning systems for Houston, Galveston, Corpus Christi, League City, and the Texas Gulf Coast. Pre-storm prep and post-storm repair.";

export const metadata: Metadata = {
  title: "Hurricane Season & Gulf Coast Awnings",
  description: OG_DESCRIPTION,
  alternates: { canonical: "/hurricane-season" },
  openGraph: { title: OG_TITLE, description: OG_DESCRIPTION, url: "/hurricane-season" },
  twitter: { title: OG_TITLE, description: OG_DESCRIPTION },
};

const PREP_CHECKLIST = [
  "Retract all motorized retractable awnings before winds exceed 30 mph.",
  "For stationary fabric awnings: loosen tension on removable panels if your unit was designed that way; don't force anything that isn't designed to come down.",
  "Secure patio curtains and motorized screens in the fully-up/retracted position.",
  "Walk your property before the storm — photograph each awning, note any pre-existing damage for insurance.",
  "Disconnect power to motorized units if flooding is a concern.",
  "After the storm: don't try to re-deploy damaged units. Call us — we'll assess and quote repair.",
];

const FEATURES = [
  {
    icon: Wind,
    title: "Wind-rated engineering",
    body: "We engineer coastal installations to the local AHJ wind zone — typically 130–150 mph design wind speeds along the Gulf.",
  },
  {
    icon: ShieldCheck,
    title: "Coastal-grade hardware",
    body: "Stainless-steel fasteners, marine-grade anodizing, powder-coat over aluminum — components chosen to resist salt air corrosion.",
  },
  {
    icon: Wrench,
    title: "Designed for removability",
    body: "Where appropriate, we design fabric and panel elements to be pulled down before a storm and re-installed after.",
  },
  {
    icon: AlertTriangle,
    title: "Post-storm response",
    body: "We prioritize existing customer callbacks after named storms. If your awning was damaged in a storm, call us — we'll assess and quote repair.",
  },
];

export default function HurricaneSeason() {
  return (
    <>
      <section className="bg-burgundy-600 text-white">
        <Container className="py-16 sm:py-20">
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/80">
            Gulf Coast
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-serif max-w-3xl">
            Hurricane season, Texas-style.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            We&rsquo;ve installed awnings from Galveston to Corpus Christi for forty
            years — including the decades that brought Alicia, Ike, Harvey, and
            Beryl. Here&rsquo;s what we&rsquo;ve learned about building, prepping, and
            recovering awnings on the Texas Gulf Coast.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="max-w-3xl space-y-5 text-ink leading-relaxed">
            <p className="text-lg">
              Not every awning is built for a hurricane. Not every awning needs to
              be. But if you&rsquo;re on the coast — Galveston, League City, Surfside,
              Corpus Christi, Port Aransas — the wind load and salt exposure
              change the math.
            </p>
            <p>
              For coastal installations, we engineer structures to the local AHJ
              design wind speed, use marine-grade fasteners and coatings, and
              design fabric elements to be removable before named storms. Metal
              and extruded-aluminum canopies are often the right call — they
              handle wind and UV without flexing.
            </p>
            <p>
              If you have an existing awning that took storm damage, we can
              assess and repair — often with the original frame and fresh
              fabric. Call our Houston office and ask for a storm-damage
              evaluation.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <Container>
          <div className="max-w-2xl">
            <div className="section-label text-sm">How We Build for the Coast</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">
              What makes a coastal-grade awning different.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-lg p-6 border border-zinc-200">
                <div className="w-11 h-11 rounded-md bg-burgundy-50 text-burgundy-600 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg text-ink">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <Container className="max-w-3xl">
          <div className="section-label text-sm">Pre-Storm Checklist</div>
          <h2 className="mt-4 text-3xl font-serif text-ink">
            Prepping your awning when a storm is in the Gulf.
          </h2>
          <p className="mt-3 text-muted">
            A few simple steps can be the difference between a storm-tested
            awning and a total loss. If you&rsquo;re unsure what your unit was
            designed to do during a storm, call us — we&rsquo;ll pull our install
            records.
          </p>
          <ol className="mt-8 space-y-4">
            {PREP_CHECKLIST.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-burgundy-600 text-white font-semibold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <span className="text-ink pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CTAStrip
        heading="Post-storm damage? We'll come out."
        subheading="Call the Houston office and ask for a storm-damage evaluation. Existing customers are prioritized after named storms."
      />
    </>
  );
}
