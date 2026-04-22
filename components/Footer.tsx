import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, InstagramIcon } from "./icons/Social";
import { Container } from "./Container";
import { OFFICES, HOURS, SITE, SOCIAL } from "@/lib/site";

const FOOTER_LINKS_A = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const FOOTER_LINKS_B = [
  { label: "Awnings & Canopies", href: "/awnings-canopies" },
  { label: "Shade & Curtains", href: "/shade-curtains" },
  { label: "Hurricane Season", href: "/hurricane-season" },
  { label: "Careers", href: "/careers" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-zinc-100 text-ink">
      <Container className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Image
            src="/images/logo/aaa-awning-co-inc.png"
            alt="AAA Awning Co. Inc."
            width={280}
            height={42}
            className="h-auto w-56"
          />
          <p className="mt-4 text-sm text-muted">
            Over 40 years of custom metal and canvas awning fabrication, serving Houston, Dallas, Fort Worth, Austin, San Antonio and the Texas Gulf Coast.
          </p>
        </div>

        <div>
          <h3 className="section-label text-sm mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {FOOTER_LINKS_A.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-burgundy-600">
                  {l.label}
                </Link>
              </li>
            ))}
            {FOOTER_LINKS_B.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-burgundy-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="section-label text-sm mb-4">Contact</h3>
          <address className="not-italic space-y-4 text-sm">
            <div>
              <div className="font-semibold">{OFFICES.houston.label}</div>
              <div>{OFFICES.houston.street}</div>
              <div>
                {OFFICES.houston.city}, {OFFICES.houston.state} {OFFICES.houston.zip}
              </div>
              <a href={OFFICES.houston.phoneHref} className="hover:text-burgundy-600">
                {OFFICES.houston.phone}
              </a>
            </div>
            <div>
              <div className="font-semibold">{OFFICES.dallas.label}</div>
              <div>{OFFICES.dallas.street}</div>
              <div>
                {OFFICES.dallas.city}, {OFFICES.dallas.state} {OFFICES.dallas.zip}
              </div>
              <a href={OFFICES.dallas.phoneHref} className="hover:text-burgundy-600">
                {OFFICES.dallas.phone}
              </a>
              <div className="text-xs text-muted">({OFFICES.dallas.note})</div>
            </div>
            <div>
              <div className="font-semibold">{OFFICES.austin.label}</div>
              <a href={OFFICES.austin.phoneHref} className="hover:text-burgundy-600">
                {OFFICES.austin.phone}
              </a>
            </div>
            <div className="pt-2 text-xs text-muted">
              <div>Email: <a href={`mailto:${SITE.email}`} className="hover:text-burgundy-600">{SITE.email}</a></div>
              <div>Hours: {HOURS}</div>
            </div>
          </address>
        </div>

        <div>
          <h3 className="section-label text-sm mb-4">Our Partners</h3>
          <div className="flex flex-col gap-3 text-sm text-muted">
            <a href="https://www.sunbrella.com/" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy-600">
              Sunbrella
            </a>
            <a href="https://www.accentawnings.com/" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy-600">
              Accent Awning Company
            </a>
          </div>
          <h3 className="section-label text-sm mb-4 mt-8">Follow</h3>
          <div className="flex gap-3">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-ink hover:text-burgundy-600">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ink hover:text-burgundy-600">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-zinc-200">
        <Container className="py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>© {currentYear} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-burgundy-600">Privacy</Link>
            <Link href="/terms" className="hover:text-burgundy-600">Terms</Link>
            <Link href="/accessibility" className="hover:text-burgundy-600">Accessibility</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
