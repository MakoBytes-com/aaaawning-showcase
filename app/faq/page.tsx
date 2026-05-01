import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTAStrip } from "@/components/CTAStrip";
import { JsonLd } from "@/components/JsonLd";
import { FAQ_GROUPS, flattenedFaqs } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";

const OG_TITLE = "Awning FAQs — Estimates, Materials, Hurricane Ratings";
const OG_DESCRIPTION =
  "Answers to the most common questions about AAA Awning Co. — estimates, materials, timelines, warranty, hurricane ratings, service areas, and more.";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: OG_DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: { title: OG_TITLE, description: OG_DESCRIPTION, url: "/faq" },
  twitter: { title: OG_TITLE, description: OG_DESCRIPTION },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(flattenedFaqs())} />

      <section className="bg-burgundy-600 text-white">
        <Container className="py-16 sm:py-20">
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/80">
            FAQ
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-serif">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            The questions we hear most — organized by topic. Don&rsquo;t see your
            question? Call us or send an estimate request and we&rsquo;ll answer
            directly.
          </p>
        </Container>
      </section>

      <section className="py-10 bg-white border-b border-zinc-200 sticky top-[88px] z-20">
        <Container className="overflow-x-auto">
          <div className="flex gap-2 whitespace-nowrap">
            {FAQ_GROUPS.map((g) => (
              <a
                key={g.label}
                href={`#${slugify(g.label)}`}
                className="px-3 py-1.5 text-xs font-semibold rounded-full border border-zinc-200 text-muted hover:border-burgundy-600 hover:text-burgundy-700 transition-colors"
              >
                {g.label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {FAQ_GROUPS.map((group, gi) => (
        <section
          key={group.label}
          id={slugify(group.label)}
          className={
            gi % 2 === 0 ? "py-14 sm:py-16 bg-white" : "py-14 sm:py-16 bg-cream"
          }
        >
          <Container className="max-w-3xl">
            <div className="section-label text-sm">{group.label}</div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-serif text-ink">
              {group.label}
            </h2>
            <dl className="mt-8 space-y-8">
              {group.faqs.map((f) => (
                <div key={f.q} className="border-b border-zinc-200 pb-6 last:border-b-0">
                  <dt>
                    <h3 className="font-serif text-lg text-ink">{f.q}</h3>
                  </dt>
                  <dd className="mt-2 text-muted leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      ))}

      <CTAStrip
        heading="Didn't find your answer?"
        subheading="Call any of our offices or submit an estimate request — we'll respond within one business day."
      />
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
