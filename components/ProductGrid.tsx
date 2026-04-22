import Link from "next/link";
import { Container } from "./Container";
import {
  Umbrella,
  Shield,
  ChevronsUpDown,
  Tent,
  CarFront,
  Home,
  ArrowRight,
} from "lucide-react";

const PRODUCTS = [
  {
    icon: Umbrella,
    title: "Fabric Awnings",
    blurb:
      "Custom canvas and Sunbrella awnings — storefronts, patios, windows, and entryways.",
    href: "/awnings-canopies/fabric-awnings",
  },
  {
    icon: Shield,
    title: "Metal Awnings",
    blurb:
      "Standing-seam, corrugated, and panel-profile metal awnings in a range of finishes.",
    href: "/awnings-canopies/metal-awnings",
  },
  {
    icon: ChevronsUpDown,
    title: "Retractable Awnings",
    blurb:
      "Motorized and manual retractables — shade on demand, out of sight when you want sun.",
    href: "/awnings-canopies/retractable",
  },
  {
    icon: Tent,
    title: "Canopies & Walkway Covers",
    blurb:
      "Commercial-grade extruded aluminum canopies and covered walkways.",
    href: "/awnings-canopies/canopies",
  },
  {
    icon: CarFront,
    title: "Carports",
    blurb:
      "Engineered carports and vehicle covers for residential and multi-family properties.",
    href: "/awnings-canopies/carports",
  },
  {
    icon: Home,
    title: "Gazebos & Cabanas",
    blurb:
      "Outdoor living structures — poolside cabanas, garden gazebos, patio pavilions.",
    href: "/awnings-canopies/gazebos-cabanas",
  },
];

export function ProductGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-label text-sm">Product Categories</div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-serif">
            Crafted for Texas weather. Built for your property.
          </h2>
          <p className="mt-4 text-muted">
            Custom fabric, metal, and extruded aluminum systems for commercial and
            residential applications.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map(({ icon: Icon, title, blurb, href }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-lg border border-zinc-200 p-6 hover:border-burgundy-600 hover:shadow-md transition-all bg-white"
            >
              <div className="w-12 h-12 rounded-md bg-burgundy-50 text-burgundy-600 flex items-center justify-center group-hover:bg-burgundy-600 group-hover:text-white transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-serif text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{blurb}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-burgundy-600">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/awnings-canopies"
            className="inline-flex items-center gap-1 text-sm font-semibold text-burgundy-600 hover:text-burgundy-700"
          >
            View all product categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
