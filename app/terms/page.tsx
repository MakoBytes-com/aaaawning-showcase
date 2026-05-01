import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the AAA Awning Co., Inc. website.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | AAA Awning Co., Inc.",
    description: "Terms governing use of the AAA Awning Co., Inc. website.",
    url: "/terms",
  },
  twitter: {
    title: "Terms of Service | AAA Awning Co., Inc.",
    description: "Terms governing use of the AAA Awning Co., Inc. website.",
  },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="April 2026">
      <p className="text-lg">
        These terms govern your use of the AAA Awning Co., Inc. website at
        aaaawning.net. By using the site, you agree to these terms.
      </p>

      <h2 className="text-2xl font-serif mt-10">Use of This Site</h2>
      <p>
        The content on this website — text, photography, designs, and project
        examples — is the property of AAA Awning Co., Inc. or its partners, and
        is provided for informational purposes. You may share links to our pages
        freely. Please don&rsquo;t republish our content without permission.
      </p>

      <h2 className="text-2xl font-serif mt-10">Quotes &amp; Estimates</h2>
      <p>
        Estimate requests submitted through this site do not constitute a
        binding contract. A formal written quote from AAA Awning is required
        before any project work begins. Our written quotes specify scope,
        materials, timeline, and price.
      </p>

      <h2 className="text-2xl font-serif mt-10">Warranty</h2>
      <p>
        Our product warranties are covered in our written contracts. Fabric
        warranties (e.g., Sunbrella) are provided by the manufacturer per
        their published terms. Workmanship warranty information is included
        with every AAA Awning contract.
      </p>

      <h2 className="text-2xl font-serif mt-10">Limitation of Liability</h2>
      <p>
        AAA Awning is not liable for damages arising from use of this website.
        Project-specific obligations are governed by the signed contract for
        that project.
      </p>

      <h2 className="text-2xl font-serif mt-10">Changes</h2>
      <p>
        We may update these terms occasionally. The &ldquo;last updated&rdquo;
        date reflects the most recent change.
      </p>

      <h2 className="text-2xl font-serif mt-10">Contact</h2>
      <p>
        Questions? Email{" "}
        <a href={`mailto:${SITE.email}`} className="text-burgundy-600 hover:text-burgundy-700">
          {SITE.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
