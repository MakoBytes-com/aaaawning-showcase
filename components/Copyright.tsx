import Link from "next/link";
import { SITE } from "@/lib/site";

// Copyright notice for the public showcase. The hero film also carries a burned-in
// watermark (scripts/encode-web-media.sh), because a page notice alone does nothing
// once someone saves the mp4. Only Mako Logics' own work is claimed here; the AAA
// Awning name, logo and project photos belong to AAA Awning Co., Inc.

export const COPYRIGHT_OWNER = "Mako Logics LLC";
export const COPYRIGHT_YEAR = 2026;
export const COPYRIGHT_LINE = `© ${COPYRIGHT_YEAR} ${COPYRIGHT_OWNER}. All rights reserved.`;
export const COPYRIGHT_NOTICE = `${COPYRIGHT_LINE} This demo is protected by copyright. Using its film, images, copy or design requires a license from ${COPYRIGHT_OWNER}.`;
export const SHOWCASE_URL = "https://aaaawning-showcase.vercel.app";
export const LICENSE_URL = `${SHOWCASE_URL}/license`;
export const LICENSE_CONTACT_URL = "https://makoai.studio/#contact";
export const THIRD_PARTY_NOTE = `The ${SITE.name} name, logo, photographs and trademarks belong to their respective owners and are shown for demonstration only.`;

/** Notice pinned to the hero film. Full text on desktop, a compact link on phones. */
export function HeroCopyrightNotice() {
  return (
    <aside
      aria-label="Copyright notice"
      className="absolute z-20 right-3 top-2 sm:top-auto sm:right-6 sm:bottom-5 lg:right-8 sm:max-w-xs xl:max-w-sm rounded-md border border-white/20 bg-black/55 px-2.5 py-1 sm:px-3.5 sm:py-2.5 text-white/85 backdrop-blur-sm"
    >
      <p className="hidden sm:block text-xs leading-relaxed">
        <strong className="font-semibold text-white">{COPYRIGHT_LINE}</strong> This demo is
        protected by copyright. Using its film, images, copy or design requires a license from{" "}
        {COPYRIGHT_OWNER}.{" "}
        <Link href="/license" className="font-semibold text-white underline underline-offset-2">
          License terms →
        </Link>
      </p>
      <p className="sm:hidden text-xs leading-snug">
        <Link href="/license" className="font-semibold text-white">
          © {COPYRIGHT_OWNER} · License required →
        </Link>
      </p>
    </aside>
  );
}

/** Footer block: the full notice, the third-party note and the license link. */
export function FooterCopyright() {
  return (
    <div className="space-y-1 text-center sm:text-left">
      <p>
        <strong className="font-semibold text-ink">{COPYRIGHT_LINE}</strong> This demo is
        protected by copyright. Using its film, images, copy or design requires a license from{" "}
        {COPYRIGHT_OWNER}.{" "}
        <Link href="/license" className="font-semibold text-ink underline underline-offset-2 hover:text-burgundy-600">
          How to license it
        </Link>
      </p>
      <p>{THIRD_PARTY_NOTE}</p>
    </div>
  );
}
