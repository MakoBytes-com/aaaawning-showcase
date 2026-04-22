import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { CTAStrip } from "@/components/CTAStrip";
import { IMAGES } from "@/lib/images-manifest";
import { PRODUCTS } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "A cross-section of AAA Awning installations across Texas — fabric awnings, metal awnings, carports, gazebos, shade structures, patio curtains, and more.",
};

// Category folder -> display name + linked product category/slug
const GALLERY_GROUPS: Array<{
  folder: keyof typeof IMAGES;
  title: string;
  href: string;
}> = [
  { folder: "fabric-awnings", title: "Fabric Awnings", href: "/awnings-canopies/fabric-awnings" },
  { folder: "metal-awnings", title: "Metal Awnings", href: "/awnings-canopies/metal-awnings" },
  { folder: "extruded-aluminum", title: "Extruded Aluminum, Walkway Covers & Canopies", href: "/awnings-canopies/extruded-aluminum" },
  { folder: "carports", title: "Carports", href: "/awnings-canopies/carports" },
  { folder: "gazebos-cabanas", title: "Gazebos & Cabanas", href: "/awnings-canopies/gazebos-cabanas" },
  { folder: "canopies", title: "Canopies", href: "/awnings-canopies/canopies" },
  { folder: "shade-structures", title: "Shade Structures", href: "/shade-curtains/shade-structures" },
  { folder: "patio-curtains", title: "Patio Curtains", href: "/shade-curtains/patio-curtains" },
  { folder: "retractable-awnings", title: "Retractable Awnings", href: "/awnings-canopies/retractable" },
  { folder: "shade-sails", title: "Shade Sails", href: "/shade-curtains/shade-sails" },
];

export default function GalleryPage() {
  const groups = GALLERY_GROUPS.filter((g) => (IMAGES[g.folder]?.length ?? 0) > 0);

  return (
    <>
      <section className="bg-burgundy-600 text-white">
        <Container className="py-16 sm:py-20">
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/80">
            Our Work
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-serif">Project Gallery</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Real installations from 40+ years of AAA Awning work across Texas.
            Every image is from a project we designed, fabricated, and installed
            with our own crews.
          </p>
        </Container>
      </section>

      {/* Category jump nav */}
      <section className="bg-white border-b border-zinc-200 sticky top-[88px] z-20 -mt-px">
        <Container className="py-3 overflow-x-auto">
          <div className="flex gap-2 whitespace-nowrap">
            {groups.map((g) => (
              <a
                key={g.folder}
                href={`#${g.folder}`}
                className="px-3 py-1.5 text-xs font-semibold rounded-full border border-zinc-200 text-muted hover:border-burgundy-600 hover:text-burgundy-700 transition-colors"
              >
                {g.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <div className="bg-white">
        {groups.map((group, gi) => (
          <section
            key={group.folder}
            id={group.folder}
            className={
              gi % 2 === 0
                ? "py-16 sm:py-20 bg-white"
                : "py-16 sm:py-20 bg-cream"
            }
          >
            <Container>
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <div className="section-label text-sm">Category</div>
                  <h2 className="mt-3 text-2xl sm:text-3xl font-serif text-ink">
                    {group.title}
                  </h2>
                </div>
                <Link
                  href={group.href}
                  className="text-sm font-semibold text-burgundy-600 hover:text-burgundy-700 inline-flex items-center gap-1"
                >
                  Product details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {IMAGES[group.folder]?.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-square overflow-hidden rounded-md bg-zinc-100 group"
                  >
                    <Image
                      src={src}
                      alt={`Custom ${group.title.toLowerCase()} project ${i + 1} by AAA Awning Co. — Houston, Dallas, Fort Worth, Austin, San Antonio, Texas Gulf Coast`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </Container>
          </section>
        ))}
      </div>

      <CTAStrip
        heading="See something you like?"
        subheading="Request a free on-site estimate and we'll show you what we can build for your property."
      />
    </>
  );
}
