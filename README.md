# aaaawning.net

Client site rebuild for **AAA Awning Co., Inc.** — a 40+ year Texas awning fabricator (Houston HQ, plus Dallas, Fort Worth, Austin, San Antonio service areas).

Built by Makologics MSP — migration from WordPress to Next.js 16 on Vercel.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** (CSS-based theme config via `@theme`)
- **Fonts:** Playfair Display (display) + Inter (body), via `next/font`
- **Forms:** Resend (transactional email) + Cloudflare Turnstile (captcha)
- **Icons:** lucide-react + inline SVG for social brand marks
- **Hosting:** Vercel (auto-deploy from `main`)

## Local notes

This project is tested exclusively on Vercel preview deployments — no local dev workflow. Every change: edit → commit → push → Vercel preview → validate on the live URL.

To produce a build locally (sanity check only):

```bash
npm run build
```

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — server-side email
- `CONTACT_EMAIL_TO` — defaults to `admin@aaaawning.net`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` — Cloudflare captcha
- `GOOGLE_PLACES_API_KEY` / `GOOGLE_PLACE_ID` — live GBP reviews
- `NEXT_PUBLIC_SITE_URL` — canonical site URL

These are set in Vercel project settings for preview + production.

## Image organization

`public/images/` is organized into category subfolders. **Images are category-specific and must never be mixed across categories** (e.g. a gazebo photo never appears on a metal-awnings page).
