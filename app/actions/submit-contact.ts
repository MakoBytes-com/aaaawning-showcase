"use server";

import { Resend } from "resend";
import { SITE } from "@/lib/site";

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
    turnstileToken: String(formData.get("cf-turnstile-response") ?? ""),
  };

  if (!input.name || !input.email || !input.message) {
    return { status: "error", message: "Please fill in your name, email, and a short message." };
  }

  const captchaOk = await verifyTurnstile(input.turnstileToken);
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
