import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { OFFICES, HOURS, SITE } from "@/lib/site";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free Estimate",
  description:
    "Request a free on-site measurement and custom awning quote. Houston, Dallas, Fort Worth, Austin, San Antonio, and the Texas Gulf Coast.",
};

export default function ContactPage() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <>
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
    </>
  );
}
