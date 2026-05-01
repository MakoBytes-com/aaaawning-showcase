import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { LOCATIONS, METRO_LABEL, type Metro } from "@/lib/locations";
import { ChevronRight } from "lucide-react";

const OG_TITLE = "Cities We Serve — Texas Awning Installations | AAA Awning";
const OG_DESCRIPTION =
  "Custom awnings, canopies, and shade structures across Houston, Dallas, Fort Worth, Austin, San Antonio, and the Texas Gulf Coast.";

export const metadata: Metadata = {
  title: "Cities We Serve",
  description: OG_DESCRIPTION,
  alternates: { canonical: "/locations" },
  openGraph: { title: OG_TITLE, description: OG_DESCRIPTION, url: "/locations" },
  twitter: { title: OG_TITLE, description: OG_DESCRIPTION },
};

const METRO_ORDER: Metro[] = ["houston", "dallas", "fort-worth", "austin", "san-antonio"];

export default function LocationsIndex() {
  return (
    <>
      <section className="bg-burgundy-600 text-white">
        <Container className="py-16 sm:py-20">
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/80">
            Service Area
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-serif">Cities We Serve</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Headquartered in Houston, serving residential and commercial clients across Texas — from the Gulf Coast to North Texas, Central Texas, and South Texas.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container className="space-y-12">
          {METRO_ORDER.map((metro) => {
            const cities = LOCATIONS.filter((l) => l.metro === metro);
            return (
              <div key={metro}>
                <h2 className="section-label text-sm">{METRO_LABEL[metro]}</h2>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${city.slug}`}
                      className="group flex items-center justify-between gap-2 rounded-md border border-zinc-200 px-4 py-3 text-sm hover:border-burgundy-600 hover:text-burgundy-700 transition-colors"
                    >
                      <span className="font-medium">{city.name}</span>
                      <ChevronRight className="h-4 w-4 text-muted group-hover:text-burgundy-600" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
