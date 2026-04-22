import Link from "next/link";
import { Container } from "./Container";
import { CTAStrip } from "./CTAStrip";
import { ArrowRight } from "lucide-react";
import {
  type ProductCategory,
  CATEGORIES,
  getProductsByCategory,
} from "@/lib/products";

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
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/${category}/${p.slug}`}
                className="group rounded-lg border border-zinc-200 p-6 bg-white hover:border-burgundy-600 hover:shadow-md transition-all"
              >
                <div className="h-0.5 w-10 bg-burgundy-600" />
                <h3 className="mt-5 text-xl font-serif text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{p.shortBlurb}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-burgundy-600">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTAStrip />
    </>
  );
}
