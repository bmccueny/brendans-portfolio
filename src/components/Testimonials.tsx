"use client";

import { RevealOnScroll } from "@/components/RevealOnScroll";

const testimonials = [
  {
    quote:
      "Brendan handled everything. I gave him a rough idea of what I wanted and he came back with something better than I imagined. Our online menu has saved us so many phone calls.",
    name: "Sarah M.",
    role: "Owner, Ember & Brew",
    initials: "SM",
    color: "var(--ctp-peach)",
  },
  {
    quote:
      "Our old site looked like it was built in 2012. Brendan gave us something we're actually proud to send clients to. He kept us in the loop the entire time — no surprises, no jargon.",
    name: "Jamie L.",
    role: "Owner, Velvet Edge",
    initials: "JL",
    color: "var(--ctp-mauve)",
  },
  {
    quote:
      "I was getting zero leads from my old website. Within a month of launching the new one, inquiry forms were coming in every week. Straightforward guy, great results.",
    name: "Tom G.",
    role: "Owner, Green Ridge Landscaping",
    initials: "TG",
    color: "var(--ctp-green)",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <RevealOnScroll key={t.name} delay={i * 120}>
          <div className="glass-card flex h-full flex-col rounded-xl border border-ctp-surface0 p-6">
            {/* Quote mark */}
            <span
              className="mb-3 font-mono text-4xl font-extrabold leading-none"
              style={{ color: t.color, opacity: 0.5 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <p className="flex-1 text-sm font-light leading-relaxed text-ctp-subtext0 sm:text-base">
              {t.quote}
            </p>

            <div className="mt-5 flex items-center gap-3 border-t border-ctp-surface0 pt-4">
              {/* Initials avatar */}
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
