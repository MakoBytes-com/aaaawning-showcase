import Link from "next/link";
import { Container } from "./Container";
import { CTAStrip } from "./CTAStrip";
import { JsonLd } from "./JsonLd";
import { FAQSection } from "./FAQSection";
import {
  type Location,
  METRO_LABEL,
  METRO_OFFICE,
  getNearbyLocations,
} from "@/lib/locations";
import { OFFICES, SITE } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { cityLocalBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { getLocationFaqs } from "@/lib/location-faqs";
import { getLocationContent } from "@/lib/location-content";
import { Check, Phone, ChevronRight, MapPin } from "lucide-react";

const FEATURED_PRODUCTS = [
  "fabric-awnings",
  "metal-awnings",
  "retractable",
  "canopies",
  "carports",
  "gazebos-cabanas",
  "shade-structures",
  "patio-curtains",
];

export function LocationDetailPage({ location }: { location: Location }) {
  const nearby = getNearbyLocations(location.slug, 6);
  const office = OFFICES[METRO_OFFICE[location.metro]];
  const url = `${SITE.url}/locations/${location.slug}`;
  const content = getLocationContent(location.slug);
  const genericFaqs = getLocationFaqs(location);
  const allFaqs = [...(content.extraFaqs ?? []), ...genericFaqs];

  const featuredProducts = FEATURED_PRODUCTS.map((slug) =>
    PRODUCTS.find((p) => p.slug === slug),
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <JsonLd
        data={[
          cityLocalBusinessSchema({
            cityName: location.name,
            url,
            description: location.blurb,
            geo: location.geo,
            servicingOfficePhone: office.phone,
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Locations", url: `${SITE.url}/locations` },
            { name: location.name, url },
          ]),
        ]}
      />

      <section className="bg-burgundy-600 text-white">
        <Container className="py-16 sm:py-20">
          <nav className="text-xs sm:text-sm text-white/85 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2 opacity-60">/</span>
            <Link href="/locations" className="hover:text-white">Locations</Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-white">{location.name}</span>
          </nav>
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/80">
            {METRO_LABEL[location.metro]}
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-serif">{location.headline}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">{location.blurb}</p>
        </Container>
      </section>

      {/* Overview + Closest Office sidebar */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5 text-ink leading-relaxed">
              {location.longBody.map((para, i) => (
                <p key={i} className={i === 0 ? "text-lg" : ""}>
                  {para}
                </p>
              ))}
            </div>

            <aside className="bg-cream rounded-lg p-6 border border-zinc-200 h-fit">
              <div className="section-label text-xs">Closest Office</div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="font-semibold text-ink text-base">
                  {office.label}
                </div>
                {"street" in office && (
                  <div className="flex gap-2 text-muted">
                    <MapPin className="h-4 w-4 flex-shrink-0 text-burgundy-600 mt-0.5" />
                    <span>
                      {office.street}
                      <br />
                      {office.city}, {office.state} {office.zip}
                    </span>
                  </div>
                )}
                <a
                  href={office.phoneHref}
                  className="flex items-center gap-2 text-ink hover:text-burgundy-600"
                >
                  <Phone className="h-4 w-4 text-burgundy-600" />
                  {office.phone}
                </a>
                {"note" in office && office.note && (
                  <div className="text-xs text-muted">({office.note})</div>
                )}
                <div className="pt-3 border-t border-zinc-200">
                  <Link
                    href="/contact"
                    className="block text-center bg-burgundy-600 hover:bg-burgundy-700 text-white font-semibold text-sm px-4 py-2.5 rounded-sm uppercase tracking-wider"
                  >
                    Request a Free Estimate
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Climate / weather context */}
      {content.climate && content.climate.length > 0 && (
        <section className="py-16 sm:py-20 bg-cream">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <div className="section-label text-sm">Texas Climate, Locally</div>
                <h2 className="mt-4 text-3xl font-serif text-ink">
                  Weather in {location.name}, and what it means for your awning.
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-5 text-ink leading-relaxed">
                {content.climate.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Product focus — what works here */}
      {content.productFocus && content.productFocus.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <div className="section-label text-sm">What Gets Picked Here</div>
                <h2 className="mt-4 text-3xl font-serif text-ink">
                  Popular products in {location.name}.
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-5 text-ink leading-relaxed">
                {content.productFocus.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Highlights grid */}
      {location.highlights.length > 0 && (
        <section className="py-16 sm:py-20 bg-cream">
          <Container>
            <div className="max-w-2xl">
              <div className="section-label text-sm">What we do in {location.name}</div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">
                Local specialties.
              </h2>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {location.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-zinc-200"
                >
                  <Check className="h-5 w-5 text-burgundy-600 flex-shrink-0 mt-0.5" />
                  <span className="text-ink">{h}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Commercial context */}
      {content.commercial && content.commercial.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <div className="section-label text-sm">Commercial in {location.name}</div>
                <h2 className="mt-4 text-3xl font-serif text-ink">
                  Where we work around town.
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-5 text-ink leading-relaxed">
                {content.commercial.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Process / timing / permits */}
      {content.process && content.process.length > 0 && (
        <section className="py-16 sm:py-20 bg-cream">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <div className="section-label text-sm">Timing &amp; Process</div>
                <h2 className="mt-4 text-3xl font-serif text-ink">
                  How projects run in {location.name}.
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-5 text-ink leading-relaxed">
                {content.process.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Products we install here */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="max-w-2xl">
            <div className="section-label text-sm">Products We Install Here</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">
              Every AAA product is available in {location.name}.
            </h2>
            <p className="mt-3 text-muted">
              We fabricate in our Houston shop and dispatch our own crews to your
              property. No local subcontractors.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {featuredProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.category}/${p.slug}`}
                className="group flex items-center justify-between gap-2 rounded-md border border-zinc-200 px-4 py-3 text-sm hover:border-burgundy-600 hover:text-burgundy-700 transition-colors"
              >
                <span className="font-medium">{p.title}</span>
                <ChevronRight className="h-4 w-4 text-muted group-hover:text-burgundy-600" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs — city-specific first, then generic */}
      <FAQSection
        eyebrow={`${location.name} FAQs`}
        heading={`Questions we hear from ${location.name} customers`}
        faqs={allFaqs}
      />

      {/* Nearby cities */}
      {nearby.length > 0 && (
        <section className="py-16 sm:py-20 bg-cream border-t border-zinc-200">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="section-label text-sm">Nearby Cities</div>
                <h2 className="mt-3 text-2xl font-serif text-ink">
                  More {METRO_LABEL[location.metro]}
                </h2>
              </div>
              <Link
                href="/locations"
                className="text-sm font-semibold text-burgundy-600 hover:text-burgundy-700"
              >
                View all →
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {nearby.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm hover:border-burgundy-600 hover:text-burgundy-700 transition-colors"
                >
                  <span className="font-medium">{city.name}</span>
                  <ChevronRight className="h-4 w-4 text-muted group-hover:text-burgundy-600" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTAStrip
        heading={`Free estimate in ${location.name}`}
        subheading="Call the nearest office or request a site visit online — we'll come out, measure, and quote at no cost."
      />
    </>
  );
}
