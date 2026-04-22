import Link from "next/link";
import { Container } from "@/components/Container";
import { ChevronRight, Phone } from "lucide-react";
import { OFFICES } from "@/lib/site";
import { TrustRow } from "@/components/TrustRow";
import { ProductGrid } from "@/components/ProductGrid";
import { StorySnapshot } from "@/components/StorySnapshot";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PartnersStrip } from "@/components/PartnersStrip";
import { CTAStrip } from "@/components/CTAStrip";

export default function Home() {
  return (
    <>
      <section className="relative h-[72vh] min-h-[560px] w-full overflow-hidden bg-navy-900 text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/hero/aaa-awning-texas-projects-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10"
          aria-hidden="true"
        />
        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <span className="inline-block bg-burgundy-600 px-6 py-3 text-2xl sm:text-3xl font-serif font-bold tracking-wide">
              AAA Awning Co. Inc.
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold leading-tight max-w-xl">
              Over 40 Years of metal and canvas awning products and services.
            </h1>
            <p className="mt-4 text-lg text-white/85 max-w-xl">
              Custom fabrication and installation for commercial and residential
              projects across Texas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 text-white font-semibold px-6 py-3 rounded-sm uppercase tracking-wider text-sm transition-colors"
              >
                Get a Free Estimate
                <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href={OFFICES.houston.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/70 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-sm uppercase tracking-wider text-sm transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call {OFFICES.houston.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <TrustRow />
      <ProductGrid />
      <StorySnapshot />
      <ProcessSteps />
      <PartnersStrip />
      <CTAStrip />
    </>
  );
}
