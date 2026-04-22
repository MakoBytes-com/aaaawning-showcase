import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "./icons/Social";
import { Container } from "./Container";
import { SOCIAL } from "@/lib/site";

export function TopBar() {
  return (
    <div className="bg-burgundy-600 text-white text-xs sm:text-sm">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-2 py-2.5">
        <span className="font-semibold tracking-[0.2em] uppercase">
          Welcome to AAA Awning
        </span>
        <span className="hidden md:inline">
          Free on-site / in-home estimates.{" "}
          <Link href="/contact" className="underline underline-offset-4 hover:no-underline">
            Call us today
          </Link>
        </span>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline font-semibold tracking-wider uppercase">Join us:</span>
          <Link
            href={SOCIAL.facebook}
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <FacebookIcon className="h-4 w-4" />
          </Link>
          <Link
            href={SOCIAL.instagram}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <InstagramIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
