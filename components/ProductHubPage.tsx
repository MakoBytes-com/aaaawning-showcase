import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { CTAStrip } from "./CTAStrip";
import { ArrowRight } from "lucide-react";
import {
  type ProductCategory,
  CATEGORIES,
  getProductsByCategory,
} from "@/lib/products";
import { getImages } from "@/lib/images-manifest";

export function ProductHubPage({ category }: { category: ProductCategory }) {
  const cat = CATEGORIES[category];
  const products = getProductsByCategory(category);

  return (
    <>
      <section className="bg-burgundy-600 text-white">
        <Container className="py-16 sm:py-20">
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/80">
            Products
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-serif">{cat.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90">{cat.intro}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => {
              const thumb = getImages(p.imageFolder)[0];
              return (
                <Link
                  key={p.slug}
                  href={`/${category}/${p.slug}`}
                  className="group rounded-lg overflow-hidden bg-white border border-zinc-200 hover:border-burgundy-600 hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-burgundy-600/30 font-serif text-3xl">
                        {p.title.split(" ")[0]}
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-serif text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                      {p.shortBlurb}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-burgundy-600">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CTAStrip />
    </>
  );
}
