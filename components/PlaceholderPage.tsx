import Link from "next/link";
import { Container } from "./Container";
import { OFFICES } from "@/lib/site";
import { ChevronRight, Phone, Mail } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PlaceholderPage({ eyebrow, title, description }: Props) {
  return (
    <>
      <section className="bg-burgundy-600 text-white">
        <Container className="py-16 sm:py-20">
          {eyebrow && (
            <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/80">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-3 text-4xl sm:text-5xl font-serif">{title}</h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg text-white/90">{description}</p>
          )}
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-label text-xs">In Progress</div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-serif text-ink">
              This page is coming together.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We&rsquo;re actively rebuilding this section of the site. In the meantime,
              reach out directly — we&rsquo;re answering calls and scheduling free
              on-site estimates now.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.values(OFFICES).map((office) => (
                <a
                  key={office.label}
                  href={office.phoneHref}
                  className="rounded-md border border-zinc-200 p-5 text-left hover:border-burgundy-600 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-burgundy-600">
                    <Phone className="h-3.5 w-3.5" />
                    {office.label}
                  </div>
                  <div className="mt-1 font-semibold text-ink">{office.phone}</div>
                </a>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 text-white font-semibold px-6 py-3 rounded-sm uppercase tracking-wider text-sm transition-colors"
              >
                Request a Free Estimate
                <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:admin@aaaawning.net"
                className="inline-flex items-center justify-center gap-2 border border-ink/20 hover:border-burgundy-600 text-ink hover:text-burgundy-600 font-semibold px-6 py-3 rounded-sm uppercase tracking-wider text-sm transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
