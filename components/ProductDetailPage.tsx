import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { CTAStrip } from "./CTAStrip";
import { ProductGallery } from "./ProductGallery";
import { FAQSection } from "./FAQSection";
import { Check, ChevronRight, ArrowRight } from "lucide-react";
import {
  type Product,
  getProductsByCategory,
  CATEGORIES,
} from "@/lib/products";
import { getImages } from "@/lib/images-manifest";
import { getProductFaqs } from "@/lib/product-faqs";

export function ProductDetailPage({ product }: { product: Product }) {
  const related = getProductsByCategory(product.category).filter(
    (p) => p.slug !== product.slug,
  );
  const cat = CATEGORIES[product.category];
  const images = getImages(product.imageFolder);
  const heroImage = images[0];

  return (
    <>
      <section className="relative bg-navy-900 text-white overflow-hidden">
        {heroImage && (
          <>
            <Image
              src={heroImage}
              alt={`Custom ${product.title.toLowerCase()} — ${product.shortBlurb} Fabricated and installed by AAA Awning Co., Houston Texas.`}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-burgundy-700/90 via-burgundy-700/75 to-burgundy-700/50"
              aria-hidden="true"
            />
          </>
        )}
        {!heroImage && <div className="absolute inset-0 bg-burgundy-600" aria-hidden="true" />}

        <Container className="relative z-10 py-16 sm:py-20">
          <nav className="text-xs sm:text-sm text-white/85 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2 opacity-60">/</span>
            <Link href={`/${product.category}`} className="hover:text-white">
              {cat.title}
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-white">{product.title}</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-serif">{product.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/95">{product.shortBlurb}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="max-w-3xl space-y-5 text-ink leading-relaxed">
            {product.intro.map((para, i) => (
              <p key={i} className={i === 0 ? "text-lg" : ""}>
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {product.features.length > 0 && (
        <section className="py-16 sm:py-20 bg-cream">
          <Container>
            <div className="max-w-2xl">
              <div className="section-label text-sm">Features</div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">
                What makes these work in Texas.
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {product.features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-lg p-6 border border-zinc-200"
                >
                  <h3 className="font-serif text-lg text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {product.useCases.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="section-label text-sm">Common Applications</div>
              <h2 className="mt-4 text-3xl font-serif text-ink">
                Where we install these most.
              </h2>
              <p className="mt-4 text-muted">
                We design each installation to the specific property — but here&rsquo;s
                what we build most often with this product line.
              </p>
            </div>
            <ul className="space-y-3">
              {product.useCases.map((u) => (
                <li key={u} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-burgundy-600 flex-shrink-0 mt-0.5" />
                  <span className="text-ink">{u}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {product.materials && product.materials.length > 0 && (
        <section className="py-16 sm:py-20 bg-zinc-50 border-y border-zinc-200">
          <Container>
            <div className="max-w-2xl">
              <div className="section-label text-sm">Materials</div>
              <h2 className="mt-4 text-3xl font-serif text-ink">Fabric &amp; finish options</h2>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.materials.map((m) => (
                <div key={m.title} className="bg-white rounded-lg p-5 border border-zinc-200">
                  <h3 className="font-semibold text-ink">{m.title}</h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ProductGallery images={images} alt={product.title} />

      <FAQSection
        eyebrow={`${product.title} FAQs`}
        heading={`Questions we get about ${product.title.toLowerCase()}`}
        faqs={getProductFaqs(product.slug)}
      />


      {related.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="section-label text-sm">Related</div>
                <h2 className="mt-3 text-2xl font-serif text-ink">
                  More {cat.title.toLowerCase()}
                </h2>
              </div>
              <Link
                href={`/${product.category}`}
                className="text-sm font-semibold text-burgundy-600 hover:text-burgundy-700 inline-flex items-center gap-1"
              >
                View all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.category}/${p.slug}`}
                  className="group rounded-lg border border-zinc-200 p-5 bg-white hover:border-burgundy-600 hover:shadow-sm transition-all"
                >
                  <h3 className="font-serif text-lg text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{p.shortBlurb}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-burgundy-600">
                    Learn more
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTAStrip
        heading={`Thinking about ${product.title.toLowerCase()}?`}
        subheading="We'll come out, measure, and quote at no cost. Houston, Dallas, Fort Worth, Austin, San Antonio, and the Texas Gulf Coast."
      />
    </>
  );
}
