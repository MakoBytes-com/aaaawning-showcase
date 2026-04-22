import { Container } from "./Container";

const PARTNERS = [
  {
    name: "Sunbrella",
    href: "https://www.sunbrella.com/",
    tagline: "Preferred Fabricator",
  },
  {
    name: "Accent Awning Company",
    href: "https://www.accentawnings.com/",
    tagline: "Fabrication Partner",
  },
];

export function PartnersStrip() {
  return (
    <section className="bg-zinc-50 border-y border-zinc-200">
      <Container className="py-10">
        <div className="text-center">
          <div className="section-label text-xs">Our Partners</div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-12 sm:gap-16">
          {PARTNERS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:text-burgundy-600 transition-colors"
            >
              <div className="font-serif text-2xl sm:text-3xl text-ink">{p.name}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted">
                {p.tagline}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
