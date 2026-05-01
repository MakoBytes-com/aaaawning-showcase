import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE, OFFICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "AAA Awning Co., Inc.'s commitment to making our website accessible to all users.",
  alternates: { canonical: "/accessibility" },
  openGraph: {
    title: "Accessibility Statement | AAA Awning Co., Inc.",
    description:
      "AAA Awning Co., Inc.'s commitment to making our website accessible to all users.",
    url: "/accessibility",
  },
  twitter: {
    title: "Accessibility Statement | AAA Awning Co., Inc.",
    description:
      "AAA Awning Co., Inc.'s commitment to making our website accessible to all users.",
  },
};

export default function AccessibilityPage() {
  return (
    <LegalPage eyebrow="Legal" title="Accessibility Statement" updated="April 2026">
      <p className="text-lg">
        AAA Awning Co., Inc. is committed to making our website accessible to
        everyone, including people with disabilities. We design and build this
        site with accessibility in mind and review it regularly for issues.
      </p>

      <h2 className="text-2xl font-serif mt-10">What We Do</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Follow Web Content Accessibility Guidelines (WCAG) 2.1 Level AA where possible.</li>
        <li>Use semantic HTML, proper headings, and labeled form fields.</li>
        <li>Maintain sufficient color contrast and readable typography.</li>
        <li>Support keyboard navigation across interactive elements.</li>
        <li>Provide alt text on meaningful images.</li>
      </ul>

      <h2 className="text-2xl font-serif mt-10">Known Limitations</h2>
      <p>
        Some project-gallery images may have limited or missing descriptive alt
        text. We&rsquo;re working to improve this. Embedded third-party content
        (maps, social feeds, captcha) may not meet our accessibility standards
        in all cases.
      </p>

      <h2 className="text-2xl font-serif mt-10">Feedback</h2>
      <p>
        If you encounter an accessibility barrier on our site, please let us
        know — we want to fix it. Email{" "}
        <a href={`mailto:${SITE.email}`} className="text-burgundy-600 hover:text-burgundy-700">
          {SITE.email}
        </a>{" "}
        or call our Houston office at{" "}
        <a href={OFFICES.houston.phoneHref} className="text-burgundy-600 hover:text-burgundy-700">
          {OFFICES.houston.phone}
        </a>
        . Please describe the page you were on and the issue you experienced.
      </p>
    </LegalPage>
  );
}
