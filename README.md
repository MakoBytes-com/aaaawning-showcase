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

## Copyright protection (public showcase)

This showcase is public, so Mako Logics LLC's work on it is marked as ours:

- The hero film has a watermark burned in and copyright metadata in the mp4. Re-encode it from the master in `gen/masters/` with `bash scripts/encode-web-media.sh` (set `FFMPEG=` to the ffmpeg.exe path on Windows). `WATERMARK=0` produces a clean copy for a licensed buyer. Never edit the master.
- `components/Copyright.tsx` holds the notice text, the hero notice and the footer block. `/license` explains what is protected and how to license it.
- Only Mako's work is claimed. AAA Awning Co., Inc.'s name, logo and project photos belong to them, are never watermarked, and are credited as theirs.
