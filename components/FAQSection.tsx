import { Container } from "./Container";
import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/schema";
import type { FAQ } from "@/lib/faqs";

type Props = {
  heading?: string;
  eyebrow?: string;
  intro?: string;
  faqs: FAQ[];
  /** Render as a compact section (inside product/location pages). Defaults to false (standalone page treatment). */
  compact?: boolean;
};

/**
 * Renders an FAQ section with Schema.org FAQPage JSON-LD.
 *
 * Important for SEO + AI discoverability:
 * - Q&A pattern is one of the highest-signal formats for retrieval
 * - FAQPage schema is indexed by Google, Bing, and consumed by LLM crawlers
 * - Semantic HTML (dt/dd inside a description list) helps screen readers too
 */
export function FAQSection({
  heading = "Frequently Asked Questions",
  eyebrow = "FAQ",
  intro,
  faqs,
  compact = false,
}: Props) {
  if (faqs.length === 0) return null;

  return (
    <section className={compact ? "py-16 sm:py-20 bg-cream" : "py-16 sm:py-24 bg-white"}>
      <JsonLd data={faqSchema(faqs)} />
      <Container className="max-w-3xl">
        <div className="section-label text-sm">{eyebrow}</div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">{heading}</h2>
        {intro && <p className="mt-4 text-muted">{intro}</p>}

        <dl className="mt-10 space-y-8">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-zinc-200 pb-6 last:border-b-0">
              <dt>
                <h3 className="font-serif text-xl text-ink">{f.q}</h3>
              </dt>
              <dd className="mt-2 text-muted leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
