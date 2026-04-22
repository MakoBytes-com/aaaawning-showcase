"use server";

import { Resend } from "resend";
import { headers } from "next/headers";
import { SITE } from "@/lib/site";
import { rateLimit } from "@/lib/rate-limit";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

type ContactInput = {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  message: string;
  website: string; // honeypot — must be empty
  turnstileToken: string;
};

async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn("[contact] TURNSTILE_SECRET_KEY not set — skipping captcha verification");
    return true;
  }
  if (!token) return false;

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (ip) body.set("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body },
  );
  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

async function getClientIp(): Promise<string> {
  const h = await headers();
  // Vercel's proxy chain — first IP in x-forwarded-for is the real client
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || "unknown";
  return h.get("x-real-ip") || "unknown";
}

function isLikelyEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const input: ContactInput = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    city: String(formData.get("city") ?? "").trim(),
    projectType: String(formData.get("projectType") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    website: String(formData.get("website") ?? "").trim(), // honeypot
    turnstileToken: String(formData.get("cf-turnstile-response") ?? ""),
  };

  // Honeypot — bots fill every field. Silently drop, return "success" so
  // the bot moves on and doesn't retry with a different strategy.
  if (input.website) {
    console.warn("[contact] honeypot triggered — dropping submission");
    return {
      status: "success",
      message: "Thanks — we got it. We'll reach out within one business day.",
    };
  }

  // Length guards — keep payloads sane, make floods harder
  if (input.name.length > 200 || input.email.length > 200) {
    return { status: "error", message: "That looks too long. Please shorten and try again." };
  }
  if (input.message.length > 5000) {
    return {
      status: "error",
      message: "Your message is over the 5000-character limit. Please shorten it and try again.",
    };
  }

  // Basic required + email sanity
  if (!input.name || !input.email || !input.message) {
    return { status: "error", message: "Please fill in your name, email, and a short message." };
  }
  if (!isLikelyEmail(input.email)) {
    return { status: "error", message: "That email address doesn't look right — please double-check." };
  }

  // Per-IP rate limit: 3 submissions per 15 minutes per client
  const ip = await getClientIp();
  const rl = rateLimit(`contact:${ip}`, { limit: 3, windowMs: 15 * 60 * 1000 });
  if (!rl.allowed) {
    const minutes = Math.ceil(rl.resetMs / 60000);
    return {
      status: "error",
      message: `Too many recent submissions. Please wait about ${minutes} minute${minutes === 1 ? "" : "s"} before trying again, or call our office directly.`,
    };
  }

  const captchaOk = await verifyTurnstile(input.turnstileToken, ip === "unknown" ? undefined : ip);
  if (!captchaOk) {
    return {
      status: "error",
      message: "Captcha verification failed. Please reload the page and try again.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO ?? SITE.email;
  const from = process.env.CONTACT_EMAIL_FROM ?? `AAA Awning Website <onboarding@resend.dev>`;

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set — form submission skipped");
    return {
      status: "error",
      message:
        "The estimate form isn't fully connected yet. Please call one of our offices directly while we finish setup.",
    };
  }

  const resend = new Resend(apiKey);
  const subject = `New estimate request — ${input.name}${input.city ? ` (${input.city})` : ""}`;
  const text = [
    `New estimate request from aaaawning.net`,
    ``,
    `Name:         ${input.name}`,
    `Email:        ${input.email}`,
    `Phone:        ${input.phone || "(not provided)"}`,
    `City:         ${input.city || "(not provided)"}`,
    `Project:      ${input.projectType || "(not provided)"}`,
    `Client IP:    ${ip}`,
    ``,
    `Message:`,
    input.message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: input.email,
      subject,
      text,
    });
    if (error) {
      console.error("[contact] resend error", error);
      return {
        status: "error",
        message:
          "We couldn't send your message right now. Please try again — or call us directly.",
      };
    }
  } catch (err) {
    console.error("[contact] resend threw", err);
    return {
      status: "error",
      message:
        "Something went wrong. Please try again in a moment — or call us directly.",
    };
  }

  return {
    status: "success",
    message: "Thanks — we got it. We'll reach out within one business day.",
  };
}
