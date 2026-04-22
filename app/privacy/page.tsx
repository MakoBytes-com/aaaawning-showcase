import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AAA Awning Co., Inc. collects, uses, and protects information you share with us.",
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="April 2026">
      <p className="text-lg">
        AAA Awning Co., Inc. (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains
        what we collect, why we collect it, and how we use it.
      </p>

      <h2 className="text-2xl font-serif mt-10">Information We Collect</h2>
      <p>
        When you submit our estimate or contact form, we collect the information you provide:
        name, email, phone number, city, project type, and any details you share about
        your project. If you email us directly, we retain the email and its contents.
      </p>
      <p>
        Our website uses standard analytics (aggregate page views, device type, referring
        pages). We do not sell or rent personal information.
      </p>

      <h2 className="text-2xl font-serif mt-10">How We Use It</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>To respond to your estimate or contact request.</li>
        <li>To schedule site visits, send quotes, and communicate about your project.</li>
        <li>To improve our website and customer service.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-serif mt-10">Cookies &amp; Captcha</h2>
      <p>
        Our contact form uses Cloudflare Turnstile to verify that submissions come from
        real visitors, not bots. Turnstile may set a short-lived cookie or local-storage
        token for this purpose. We do not use advertising or tracking cookies.
      </p>

      <h2 className="text-2xl font-serif mt-10">Sharing</h2>
      <p>
        We do not sell or rent your personal information. We may share it with
        service providers who help us operate (e.g., email delivery via Resend) and
        only as needed to fulfill your request.
      </p>

      <h2 className="text-2xl font-serif mt-10">Your Choices</h2>
      <p>
        You can email us at{" "}
        <a href={`mailto:${SITE.email}`} className="text-burgundy-600 hover:text-burgundy-700">
          {SITE.email}
        </a>{" "}
        any time to request a copy of information we have about you, or to ask us to
        delete it.
      </p>

      <h2 className="text-2xl font-serif mt-10">Contact</h2>
      <p>
        Questions about this policy? Write to{" "}
        <a href={`mailto:${SITE.email}`} className="text-burgundy-600 hover:text-burgundy-700">
          {SITE.email}
        </a>{" "}
        or call our Houston office.
      </p>
    </LegalPage>
  );
}
