import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTAStrip } from "@/components/CTAStrip";
import { Hammer, Users, HeartHandshake, Wrench } from "lucide-react";
import { SITE, OFFICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers & Employment Opportunities",
  description:
    "Now hiring fabricators, installers, welders, sewers, and sales professionals at AAA Awning Co. in Houston, TX.",
  alternates: { canonical: "/careers" },
};

const ROLES = [
  {
    title: "Installer / Crew Lead",
    type: "Full-time · Houston",
    body: "Lead on-site awning installations across the greater Houston area. Experience in construction, welding, or field-install trades preferred. Crew leads drive company trucks and coordinate 1–2 additional crew members.",
  },
  {
    title: "Fabricator / Welder",
    type: "Full-time · Houston shop",
    body: "Weld aluminum tube frames, fit steel structural components, and finish awning frames in our Houston fabrication shop. MIG/TIG experience on aluminum required.",
  },
  {
    title: "Canvas & Sewing Technician",
    type: "Full-time · Houston shop",
    body: "Cut, sew, and assemble Sunbrella and canvas awning covers on industrial sewing machines. Experience with industrial machines, marine canvas, or upholstery a plus.",
  },
  {
    title: "Sales / Estimator",
    type: "Full-time · Houston (with travel)",
    body: "Meet with residential and commercial clients at their properties, measure, design, and quote awning projects. Construction-industry sales or design background preferred.",
  },
];

const WHY = [
  { icon: Hammer, title: "Real craft", body: "You'll build things that last 20+ years and live on buildings we all recognize." },
  { icon: Users, title: "In-house team", body: "No subcontractor chaos. Our crews work together every day and know each other's rhythms." },
  { icon: HeartHandshake, title: "Steady work", body: "40+ year company with a full pipeline of commercial and residential jobs year-round." },
  { icon: Wrench, title: "Quality tools", body: "Commercial sewing machines, Miller welders, company vehicles, proper PPE." },
];

export default function Careers() {
  return (
    <>
      <section className="bg-burgundy-600 text-white">
        <Container className="py-16 sm:py-20">
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/80">
            Join Us
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-serif max-w-3xl">
            We&rsquo;re hiring people who build things that outlast them.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            AAA Awning has been Houston-based and family-run since 1984. If you
            like physical craft, clear pay, and work you can point to, we&rsquo;d
            like to meet you.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="max-w-2xl">
            <div className="section-label text-sm">Open Roles</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">
              Currently hiring.
            </h2>
            <p className="mt-3 text-muted">
              All positions are based at our Houston headquarters with some
              travel around Texas. Send a resume or work history to the email
              below and reference the role you&rsquo;re applying for.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {ROLES.map((role) => (
              <div key={role.title} className="bg-white rounded-lg p-6 border border-zinc-200">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-serif text-xl text-ink">{role.title}</h3>
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-burgundy-600 font-semibold">
                  {role.type}
                </div>
                <p className="mt-3 text-sm text-muted leading-relaxed">{role.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-cream border border-zinc-200 p-6 sm:p-8">
            <h3 className="font-serif text-xl text-ink">How to Apply</h3>
            <p className="mt-2 text-muted text-sm leading-relaxed">
              Email your resume or work history to{" "}
              <a href={`mailto:${SITE.email}`} className="text-burgundy-600 hover:text-burgundy-700 font-semibold">
                {SITE.email}
              </a>{" "}
              — put the role title in the subject line. Or call our Houston
              office at{" "}
              <a href={OFFICES.houston.phoneHref} className="text-burgundy-600 hover:text-burgundy-700 font-semibold">
                {OFFICES.houston.phone}
              </a>{" "}
              and ask for the hiring manager. Walk-ins welcome Monday–Friday.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <Container>
          <div className="max-w-2xl">
            <div className="section-label text-sm">Why AAA</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-ink">
              What makes working here different.
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-lg p-6 border border-zinc-200">
                <div className="w-11 h-11 rounded-md bg-burgundy-50 text-burgundy-600 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-lg text-ink">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTAStrip heading="Interested?" subheading="Email your resume and we'll reach out." />
    </>
  );
}
