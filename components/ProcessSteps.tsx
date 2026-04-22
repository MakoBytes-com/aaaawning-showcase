import { Container } from "./Container";

const STEPS = [
  {
    num: "01",
    title: "Free Site Visit",
    body: "We come to you — residential or commercial. We measure, photograph, discuss use and aesthetic, and check any HOA or permitting requirements.",
  },
  {
    num: "02",
    title: "Design & Quote",
    body: "Our in-house design team prepares drawings, material options, fabric and color specs, and a firm written quote. No surprises.",
  },
  {
    num: "03",
    title: "Fabrication",
    body: "We weld, sew, and finish in our Houston shop. You stay in the loop on timing. Most projects complete in 2–6 weeks.",
  },
  {
    num: "04",
    title: "Installation",
    body: "Our own crews install — properly anchored, sealed, and tested. We walk the finished job with you before we leave.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-2xl">
          <div className="section-label text-sm">How We Work</div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">
            Four steps from first call to finished install.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div key={step.num} className="border-t-2 border-burgundy-600 pt-6">
              <div className="font-serif text-4xl text-burgundy-600">{step.num}</div>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
