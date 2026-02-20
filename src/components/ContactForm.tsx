"use client";

import { useState } from "react";

// To enable form submissions:
// 1. Sign up free at https://formspree.io
// 2. Create a new form — it will give you an endpoint like https://formspree.io/f/abcdefgh
// 3. Replace the FORMSPREE_ENDPOINT value below with your endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          type: form.type,
          message: form.message,
          _replyto: form.email,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", type: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card rounded-xl border border-ctp-surface0 px-6 py-10 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ctp-green/20">
            <svg className="h-6 w-6 text-ctp-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
        </div>
        <p className="font-mono text-lg font-semibold text-ctp-text">Message sent!</p>
        <p className="mt-2 text-sm text-ctp-subtext0">
          I&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-sm text-ctp-mauve hover:text-ctp-lavender transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-ctp-surface0 bg-ctp-mantle px-4 py-3 text-sm text-ctp-text placeholder:text-ctp-overlay0 backdrop-blur-sm transition-colors focus:border-ctp-mauve focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-mono text-xs font-medium text-ctp-subtext0">
            Your Name
          </label>
          <input
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={set("name")}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-xs font-medium text-ctp-subtext0">
            Your Email
          </label>
          <input
            type="email"
            required
            placeholder="jane@example.com"
            value={form.email}
            onChange={set("email")}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block font-mono text-xs font-medium text-ctp-subtext0">
          What are you looking for?
        </label>
        <select
          required
          value={form.type}
          onChange={set("type")}
          className="form-select w-full rounded-lg border border-ctp-surface0 px-4 py-3 text-sm transition-colors focus:border-ctp-mauve focus:outline-none"
        >
          <option value="" disabled>Select an option</option>
          <option value="Portfolio or gallery site">Portfolio or gallery site</option>
          <option value="Wedding or engagement site">Wedding or engagement site</option>
          <option value="Small business website">Small business website</option>
          <option value="Author or artist site">Author or artist site</option>
          <option value="Redesign an existing site">Redesign an existing site</option>
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block font-mono text-xs font-medium text-ctp-subtext0">
          Tell me about your project
        </label>
        <textarea
          required
          rows={5}
          placeholder="What kind of business do you have? What do you need the site to do?"
          value={form.message}
          onChange={set("message")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-ctp-red/30 bg-ctp-red/10 px-4 py-3 text-sm text-ctp-red">
          Something went wrong. Please try again or email me directly at{" "}
          <a href="mailto:bmccueny@gmail.com" className="underline">
            bmccueny@gmail.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-ctp-mauve px-6 py-3 font-mono text-base font-semibold tracking-wide text-white transition-colors hover:bg-ctp-lavender hover:shadow-[0_0_20px_rgba(191,90,242,0.35)] active:bg-ctp-blue disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
