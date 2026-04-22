import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { getImages } from "@/lib/images-manifest";

const FEATURED_SLUGS = [
  "fabric-awnings",
  "metal-awnings",
  "retractable",
  "canopies",
  "carports",
  "gazebos-cabanas",
];

export function ProductGrid() {
  const cards = FEATURED_SLUGS.map((slug) =>
    PRODUCTS.find((p) => p.slug === slug),
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

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
          {cards.map((p) => {
            const thumb = getImages(p.imageFolder)[0];
            return (
              <Link
                key={p.slug}
                href={`/${p.category}/${p.slug}`}
                className="group rounded-lg overflow-hidden bg-white border border-zinc-200 hover:border-burgundy-600 hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
                  {thumb && (
                    <Image
                      src={thumb}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-serif text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed flex-1">
                    {p.shortBlurb}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-burgundy-600">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
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
