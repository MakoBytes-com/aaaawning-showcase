import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import {
  COPYRIGHT_LINE,
  COPYRIGHT_OWNER,
  LICENSE_CONTACT_URL,
  THIRD_PARTY_NOTE,
} from "@/components/Copyright";
import { SITE } from "@/lib/site";

const DESCRIPTION = `What ${COPYRIGHT_OWNER} owns in this showcase build, what belongs to ${SITE.name}, and how to license the work.`;

export const metadata: Metadata = {
  // Absolute so the site-wide "| AAA Awning" suffix doesn't make this read as the client's claim.
  title: { absolute: `License & Copyright | ${COPYRIGHT_OWNER}` },
  description: DESCRIPTION,
  alternates: { canonical: "/license" },
  openGraph: {
    title: `License & Copyright | ${COPYRIGHT_OWNER}`,
    description: DESCRIPTION,
    url: "/license",
  },
  twitter: {
    title: `License & Copyright | ${COPYRIGHT_OWNER}`,
    description: DESCRIPTION,
  },
};

const protectedWork = [
  {
    title: "The film",
    body: "The moving hero footage at the top of the home page, every frame of it. That covers the video file itself, single frames taken from it, and screenshots or screen recordings of it.",
  },
  {
    title: "The images",
    body: "The social sharing card and any screenshot or screen recording of this showcase.",
  },
  {
    title: "The copy",
    body: "The wording written for this build: headings, page text, FAQs, location pages and the way the text is structured across the site.",
  },
  {
    title: "The design and code",
    body: "The overall look and arrangement of the site taken together: the layout of each page, the order of the sections, the navigation, and the way colour, type and imagery are combined. The source code is protected too.",
  },
];

const notAllowed = [
  "Downloading the film or images, or hosting them anywhere else.",
  "Using a frame, still or screenshot from this showcase as the starting image, reference image or prompt for an AI image or video tool.",
  "Rebuilding this site's layout, page structure or section order for another website, even with your own wording or newly generated footage.",
  "Removing or covering the watermark or the copyright details stored inside the files.",
];

export default function LicensePage() {
  return (
    <LegalPage eyebrow="License & copyright" title="This demo is protected by copyright" updated="October 2026">
      <p className="text-lg">
        {COPYRIGHT_LINE} This site is a portfolio showcase of a website built by {COPYRIGHT_OWNER}.
        You are welcome to look around and to share the link. Using any part of the work below on
        your own website, in your marketing, or as material for something new requires a written
        license from {COPYRIGHT_OWNER}.
      </p>

      <h2 className="text-2xl font-serif mt-10">What {COPYRIGHT_OWNER} owns</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {protectedWork.map((p) => (
          <div key={p.title} className="rounded-md border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-serif mt-10">What belongs to someone else</h2>
      <p>
        {THIRD_PARTY_NOTE} That includes the company&rsquo;s photographs of its own projects, its
        office details, its reviews and the names of its partners and suppliers. {COPYRIGHT_OWNER}{" "}
        claims none of it. This showcase is a copy of the website {COPYRIGHT_OWNER} built for{" "}
        {SITE.name}, whose own site is{" "}
        <a href="https://www.aaaawning.net" target="_blank" rel="noopener noreferrer" className="font-semibold text-burgundy-600 underline underline-offset-2">
          aaaawning.net
        </a>
        . Nothing on this page limits {SITE.shortName}&rsquo;s use of its own website. If you want to hire {SITE.shortName}, contact
        them through their site, not through the links on this page.
      </p>

      <h2 className="text-2xl font-serif mt-10">Not allowed without a license</h2>
      <ul className="list-disc pl-6 space-y-2">
        {notAllowed.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-serif mt-10">How ownership is recorded</h2>
      <p>
        The film carries a visible watermark, and the file has the copyright owner written into its
        metadata. {COPYRIGHT_OWNER} keeps the original masters, the generation records and dated
        version history for every part of the build. Copies found elsewhere can be matched against
        them, and unlicensed use will be reported to the host and pursued.
      </p>

      <div className="mt-10 rounded-md border border-burgundy-200 bg-burgundy-50 p-6">
        <h2 className="text-2xl font-serif">How to license this work</h2>
        <p className="mt-3">
          Want a site like this for your business, or permission to use part of this one? Send{" "}
          {COPYRIGHT_OWNER} a message and you will get a reply with terms and pricing.
        </p>
        <a
          href={LICENSE_CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center bg-burgundy-600 hover:bg-burgundy-700 text-white font-semibold px-6 py-3 rounded-sm uppercase tracking-wider text-sm transition-colors"
        >
          Ask about a license
        </a>
      </div>
    </LegalPage>
  );
}
