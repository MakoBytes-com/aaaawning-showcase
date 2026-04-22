"use client";

import { useActionState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { submitContact, type ContactFormState } from "@/app/actions/submit-contact";
import { LOCATIONS } from "@/lib/locations";

const INITIAL: ContactFormState = { status: "idle", message: "" };

const PROJECT_TYPES = [
  "Fabric Awning",
  "Metal Awning",
  "Retractable Awning",
  "Canopy / Walkway Cover",
  "Carport",
  "Gazebo / Cabana",
  "Shade Structure",
  "Shade Sail",
  "Patio Curtain",
  "Motorized Screen",
  "Other / Not Sure",
];

export function ContactForm({ turnstileSiteKey }: { turnstileSiteKey?: string }) {
  const [state, formAction, pending] = useActionState(submitContact, INITIAL);

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-burgundy-200 bg-burgundy-50 p-8 text-center">
        <div className="section-label text-xs text-burgundy-600">Thank you</div>
        <h3 className="mt-3 text-2xl font-serif text-ink">{state.message}</h3>
        <p className="mt-3 text-sm text-muted">
          If your project is urgent, feel free to call us directly — we&rsquo;re
          answering phones Monday–Friday, 8 AM–4 PM.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <SelectField label="City" name="city">
          <option value="">Select a city…</option>
          {LOCATIONS.map((loc) => (
            <option key={loc.slug} value={loc.name}>
              {loc.name}
            </option>
          ))}
          <option value="Other">Somewhere else in Texas</option>
        </SelectField>
      </div>

      <SelectField label="Project Type" name="projectType">
        <option value="">Select a project type…</option>
        {PROJECT_TYPES.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </SelectField>

      <div>
        <label className="block text-sm font-semibold text-ink">
          Tell us about your project <span className="text-burgundy-600">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1.5 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-ink focus:border-burgundy-600 focus:outline-none focus:ring-1 focus:ring-burgundy-600"
          placeholder="Dimensions, location on your property, aesthetic preferences, timing…"
        />
      </div>

      {turnstileSiteKey && (
        <Turnstile
          siteKey={turnstileSiteKey}
          options={{ theme: "light", size: "flexible" }}
        />
      )}

      {state.status === "error" && (
        <p className="text-sm text-burgundy-700 bg-burgundy-50 border border-burgundy-200 rounded-md px-3 py-2">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-sm uppercase tracking-wider text-sm transition-colors"
      >
        {pending ? "Sending…" : "Request a Free Estimate"}
      </button>

      <p className="text-xs text-muted">
        We&rsquo;ll respond within one business day. By submitting, you agree to be
        contacted about your project.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-ink">
        {label} {required && <span className="text-burgundy-600">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-ink focus:border-burgundy-600 focus:outline-none focus:ring-1 focus:ring-burgundy-600"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-ink">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="mt-1.5 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-ink focus:border-burgundy-600 focus:outline-none focus:ring-1 focus:ring-burgundy-600"
      >
        {children}
      </select>
    </div>
  );
}
