import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTAStrip } from "@/components/CTAStrip";

const OG_TITLE = "Awning Shapes & Styles | AAA Awning";
const OG_DESCRIPTION =
  "Awning shape vocabulary — shed, dome, waterfall, quarter-barrel, concave, convex, gable, mansard. Side-profile illustrations of every standard awning shape we build.";

export const metadata: Metadata = {
  title: "Awning Shapes & Styles",
  description: OG_DESCRIPTION,
  alternates: { canonical: "/awnings-canopies/shapes-styles" },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "/awnings-canopies/shapes-styles",
  },
  twitter: { title: OG_TITLE, description: OG_DESCRIPTION },
};

type Shape = {
  name: string;
  body: string;
  svg: React.ReactNode;
};

// Each SVG shows a side-profile of the awning shape. Canvas is 200x140.
// Building wall is the right side (x=180→200). Ground line is bottom.
const STROKE = "#1a1a1a";
const FILL = "#B22951";

const SHED = (
  <svg viewBox="0 0 200 140" className="w-full h-full">
    <line x1="180" y1="0" x2="180" y2="140" stroke={STROKE} strokeWidth="2" />
    <path
      d="M 40 60 L 180 30 L 180 45 L 50 72 Z"
      fill={FILL}
      stroke={STROKE}
      strokeWidth="1.5"
    />
  </svg>
);
const DOME = (
  <svg viewBox="0 0 200 140" className="w-full h-full">
    <line x1="180" y1="0" x2="180" y2="140" stroke={STROKE} strokeWidth="2" />
    <path
      d="M 180 30 Q 30 40 50 95 L 65 95 Q 60 55 180 50 Z"
      fill={FILL}
      stroke={STROKE}
      strokeWidth="1.5"
    />
  </svg>
);
const WATERFALL = (
  <svg viewBox="0 0 200 140" className="w-full h-full">
    <line x1="180" y1="0" x2="180" y2="140" stroke={STROKE} strokeWidth="2" />
    <path
      d="M 180 30 L 55 30 Q 40 55 55 90 L 70 90 Q 60 55 75 45 L 180 45 Z"
      fill={FILL}
      stroke={STROKE}
      strokeWidth="1.5"
    />
  </svg>
);
const QUARTER_BARREL = (
  <svg viewBox="0 0 200 140" className="w-full h-full">
    <line x1="180" y1="0" x2="180" y2="140" stroke={STROKE} strokeWidth="2" />
    <path
      d="M 180 30 Q 30 30 40 105 L 55 105 Q 50 50 180 50 Z"
      fill={FILL}
      stroke={STROKE}
      strokeWidth="1.5"
    />
  </svg>
);
const CONCAVE = (
  <svg viewBox="0 0 200 140" className="w-full h-full">
    <line x1="180" y1="0" x2="180" y2="140" stroke={STROKE} strokeWidth="2" />
    <path
      d="M 180 30 L 40 70 Q 70 85 50 95 L 65 95 Q 80 80 50 75 L 180 45 Z"
      fill={FILL}
      stroke={STROKE}
      strokeWidth="1.5"
    />
  </svg>
);
const CONVEX = (
  <svg viewBox="0 0 200 140" className="w-full h-full">
    <line x1="180" y1="0" x2="180" y2="140" stroke={STROKE} strokeWidth="2" />
    <path
      d="M 180 30 Q 20 50 55 90 L 70 90 Q 35 60 180 45 Z"
      fill={FILL}
      stroke={STROKE}
      strokeWidth="1.5"
    />
  </svg>
);
const GABLE = (
  <svg viewBox="0 0 200 140" className="w-full h-full">
    <line x1="180" y1="0" x2="180" y2="140" stroke={STROKE} strokeWidth="2" />
    <path
      d="M 180 25 L 40 60 L 180 95 L 180 105 L 30 63 L 180 15 Z"
      fill={FILL}
      stroke={STROKE}
      strokeWidth="1.5"
    />
  </svg>
);
const MANSARD = (
  <svg viewBox="0 0 200 140" className="w-full h-full">
    <line x1="180" y1="0" x2="180" y2="140" stroke={STROKE} strokeWidth="2" />
    <path
      d="M 180 25 L 75 25 L 55 55 L 55 85 L 75 100 L 180 100 L 180 90 L 80 90 L 68 78 L 68 60 L 85 40 L 180 40 Z"
      fill={FILL}
      stroke={STROKE}
      strokeWidth="1.5"
    />
  </svg>
);

const SHAPES: Shape[] = [
  {
    name: "Shed / Slope",
    body: "The classic rectangular awning, angled down. Workhorse profile — the most common choice for storefronts and windows. Sheds rain, throws clean shade, reads traditional.",
    svg: SHED,
  },
  {
    name: "Dome",
    body: "Rounded front face. The friendliest awning profile — warm and inviting. Most common over residential doors, retail entryways, and small storefronts.",
    svg: DOME,
  },
  {
    name: "Waterfall",
    body: "Curved front face with straight sides. Elegant and more modern than a dome. Popular for hospitality, boutique retail, and contemporary residential.",
    svg: WATERFALL,
  },
  {
    name: "Quarter-Barrel",
    body: "A sculptural cylindrical half-section. Bold and architectural. We build these on high-end restaurants and custom residential projects where the awning is intentionally part of the building's design language.",
    svg: QUARTER_BARREL,
  },
  {
    name: "Concave",
    body: "Curved inward — the inverse of a dome. Reads sharp and modern. Used on contemporary architecture and matching specific building lines.",
    svg: CONCAVE,
  },
  {
    name: "Convex",
    body: "Bulged outward from the building. A stronger visual statement than a dome. Used when you want the awning to read as a distinct architectural feature.",
    svg: CONVEX,
  },
  {
    name: "Gable",
    body: "Triangular front — reads like a small roof. Great for traditional facades and period architecture. Sheds rain exceptionally well.",
    svg: GABLE,
  },
  {
    name: "Mansard",
    body: "French-style four-sided angled profile. Distinctive and historical. Most often used on formal commercial buildings and European-style architecture.",
    svg: MANSARD,
  },
];

export default function ShapesStylesPage() {
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
            <span className="text-white">Shapes &amp; Styles</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-serif">Awning Shapes &amp; Styles</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Awnings have a surprisingly rich vocabulary of shapes. Each profile
            throws shade differently, reads differently from the street, and fits
            different kinds of facades. Here&rsquo;s a quick tour of what we build.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {SHAPES.map((shape) => (
              <div
                key={shape.name}
                className="flex gap-6 bg-white rounded-lg p-6 border border-zinc-200"
              >
                <div className="flex-shrink-0 w-32 h-24 sm:w-40 sm:h-28 bg-cream rounded-md p-2">
                  {shape.svg}
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl text-ink">{shape.name}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{shape.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <Container className="max-w-3xl">
          <div className="section-label text-sm">Custom shapes</div>
          <h2 className="mt-4 text-3xl font-serif text-ink">Don&rsquo;t see what you want?</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-ink">
            <p>
              Awning shapes aren&rsquo;t limited to this list. If you have a sketch,
              a reference photo, or a particular building line you want to
              follow, we&rsquo;ll design to it. Most of our most memorable
              installations started as hand-drawn sketches on napkins.
            </p>
            <p>
              Bring us the aesthetic — dome but taller, waterfall but wider,
              quarter-barrel with a cornice — and we&rsquo;ll draw it up, quote
              it, and build it.
            </p>
          </div>
        </Container>
      </section>

      <CTAStrip
        heading="Have a shape in mind?"
        subheading="Send us a sketch or describe what you're after. We'll come measure and quote the custom profile at no cost."
      />
    </>
  );
}
