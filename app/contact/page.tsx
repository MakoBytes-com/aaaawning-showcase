import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { OFFICES, HOURS, SITE } from "@/lib/site";
import { dallasOfficeLocalBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const OG_TITLE = "Get a Free Awning Estimate | AAA Awning Co.";
const OG_DESCRIPTION =
  "Request a free on-site measurement and custom awning quote. Houston, Dallas, Fort Worth, Austin, San Antonio, and the Texas Gulf Coast.";

export const metadata: Metadata = {
  title: "Get a Free Estimate",
  description: OG_DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { title: OG_TITLE, description: OG_DESCRIPTION, url: "/contact" },
  twitter: { title: OG_TITLE, description: OG_DESCRIPTION },
};

// Google Maps embed URLs — using the keyless /maps/embed endpoint so we
// don't need to pay for the Maps JS API. These are plain iframe embeds.
const MAP_EMBEDS: Record<string, string> = {
  houston:
    "https://www.google.com/maps?q=8810+Madie+Drive+Houston+TX+77022&z=15&output=embed",
  dallas:
    "https://www.google.com/maps?q=2511+Prairie+Creek+Dr+West+Richardson+TX+75080&z=15&output=embed",
};

export default function ContactPage() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <>
      <JsonLd
        data={[
          dallasOfficeLocalBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Contact", url: `${SITE.url}/contact` },
          ]),
        ]}
      />
      <section className="bg-burgundy-600 text-white">
        <Container className="py-16 sm:py-20">
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/80">
            Contact
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-serif">
            Let&rsquo;s talk about your project.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Tell us what you&rsquo;re thinking — a patio awning, a commercial canopy,
            a hurricane-rated coastal install. We&rsquo;ll come measure, design, and
            quote at no cost.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-serif text-ink">Request a free estimate</h2>
            <p className="mt-2 text-sm text-muted">
              We&rsquo;ll follow up within one business day.
            </p>
            <div className="mt-8">
              <ContactForm turnstileSiteKey={turnstileSiteKey} />
            </div>
          </div>

          <aside className="lg:col-span-2 space-y-8">
            <div>
              <div className="section-label text-xs">Offices</div>
              <div className="mt-4 space-y-6 text-sm">
                {Object.values(OFFICES).map((office) => (
                  <div key={office.label} className="border-l-2 border-burgundy-600 pl-4">
                    <div className="font-semibold text-ink">{office.label}</div>
                    {"street" in office && (
                      <div className="text-muted flex gap-2 mt-1">
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
                      className="mt-1 inline-flex items-center gap-2 text-ink hover:text-burgundy-600"
                    >
                      <Phone className="h-4 w-4 text-burgundy-600" />
                      {office.phone}
                    </a>
                    {"note" in office && office.note && (
                      <div className="text-xs text-muted mt-1">({office.note})</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="section-label text-xs">Email</div>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 inline-flex items-center gap-2 text-ink hover:text-burgundy-600"
              >
                <Mail className="h-4 w-4 text-burgundy-600" />
                {SITE.email}
              </a>
            </div>

            <div>
              <div className="section-label text-xs">Hours</div>
              <div className="mt-3 inline-flex items-center gap-2 text-ink">
                <Clock className="h-4 w-4 text-burgundy-600" />
                {HOURS}
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {/* Google Maps — Houston + Dallas */}
      <section className="py-16 sm:py-20 bg-cream border-t border-zinc-200">
        <Container>
          <div className="max-w-2xl mb-10">
            <div className="section-label text-sm">Find Us</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif text-ink">
              Visit our offices
            </h2>
            <p className="mt-3 text-muted">
              Our Houston headquarters is open Mon–Fri, 8–4. Dallas office is
              by appointment only — please call first.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl text-ink mb-3">
                Houston Headquarters
              </h3>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100">
                <iframe
                  src={MAP_EMBEDS.houston}
                  title="AAA Awning — Houston headquarters on Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <div className="mt-3 text-sm text-muted">
                {OFFICES.houston.street}
                <br />
                {OFFICES.houston.city}, {OFFICES.houston.state} {OFFICES.houston.zip}
                <br />
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${OFFICES.houston.street}, ${OFFICES.houston.city}, ${OFFICES.houston.state} ${OFFICES.houston.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-burgundy-600 hover:text-burgundy-700 font-semibold"
                >
                  Get directions →
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-ink mb-3">
                Dallas / Richardson Office
              </h3>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100">
                <iframe
                  src={MAP_EMBEDS.dallas}
                  title="AAA Awning — Dallas office on Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <div className="mt-3 text-sm text-muted">
                {OFFICES.dallas.street}
                <br />
                {OFFICES.dallas.city}, {OFFICES.dallas.state} {OFFICES.dallas.zip}
                <br />
                <span className="italic">By appointment only.</span>
                <br />
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${OFFICES.dallas.street}, ${OFFICES.dallas.city}, ${OFFICES.dallas.state} ${OFFICES.dallas.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-burgundy-600 hover:text-burgundy-700 font-semibold"
                >
                  Get directions →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
