"use client";

import { RevealOnScroll } from "@/components/RevealOnScroll";

const testimonials = [
  {
    quote:
      "I booked three weddings within two months of my new site going live. Brides were telling me they felt confident before we even spoke. Brendan just gets what photographers need.",
    name: "Rachel H.",
    role: "Wedding & Portrait Photographer",
    initials: "RH",
    color: "var(--ctp-pink)",
    metric: "3 weddings booked in 2 months",
  },
  {
    quote:
      "I needed somewhere to sell my book, share my story, and grow my newsletter. Brendan built exactly that — and made it simple enough that I actually manage it myself.",
    name: "Daniel K.",
    role: "Author",
    initials: "DK",
    color: "var(--ctp-mauve)",
    metric: "Launched & self-managing in under 2 weeks",
  },
  {
    quote:
      "My old site didn't reflect us at all. The new one does — it feels like us. Our online inquiries have more than doubled and people actually stay on the page now.",
    name: "Maya T.",
    role: "Owner, Bloom & Co.",
    initials: "MT",
    color: "var(--ctp-green)",
    metric: "2× more online inquiries",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <RevealOnScroll key={t.name} delay={i * 120}>
          <div className="glass-card flex h-full flex-col rounded-xl border border-ctp-surface0 p-6">
            {/* Metric badge */}
            <div
              className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-semibold"
              style={{
                color: t.color,
                backgroundColor: `color-mix(in srgb, ${t.color} 12%, transparent)`,
                border: `1px solid color-mix(in srgb, ${t.color} 30%, transparent)`,
              }}
            >
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                <path d="M2 9l3-3 2 2 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t.metric}
            </div>

            {/* Quote mark */}
            <span
              className="mb-2 font-mono text-4xl font-extrabold leading-none"
              style={{ color: t.color, opacity: 0.4 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <p className="flex-1 text-sm font-light leading-relaxed text-ctp-subtext0 sm:text-base">
              {t.quote}
            </p>

            <div className="mt-5 flex items-center gap-3 border-t border-ctp-surface0 pt-4">
              <div
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold text-white"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-ctp-text">{t.name}</p>
                <p className="text-xs text-ctp-subtext0">{t.role}</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
