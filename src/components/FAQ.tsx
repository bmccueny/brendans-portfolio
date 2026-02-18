"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const faqs = [
  {
    q: "How long does a website take to build?",
    a: "Most small business sites are live in 2–4 weeks. I'll give you a clear timeline before any work begins, so you know exactly what to expect.",
  },
  {
    q: "What do I need to have ready before we start?",
    a: "Just a general idea of what you want. I'll help with structure, copy direction, and design. If you have a logo and photos, great — but they're not required to get started.",
  },
  {
    q: "Do you handle hosting and domain setup?",
    a: "Yes. I'll set everything up and walk you through it so you're not left figuring things out on your own after launch.",
  },
  {
    q: "What happens if I need changes after the site goes live?",
    a: "Minor tweaks in the first 30 days are included. For ongoing updates or new features down the road, I offer simple support arrangements — nothing locked into a long contract.",
  },
  {
    q: "Do you work with clients outside the Hudson Valley?",
    a: "Absolutely. I work fully remote and have no problem collaborating with clients anywhere. Most of the process happens over email and video calls anyway.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      {faqs.map((faq, i) => (
        <RevealOnScroll key={i} delay={i * 80}>
          <div className="glass-card overflow-hidden rounded-xl border border-ctp-surface0">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-mono text-sm font-semibold text-ctp-text sm:text-base">
                {faq.q}
              </span>
              <svg
                className="h-4 w-4 flex-shrink-0 text-ctp-mauve transition-transform duration-300"
                style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M8 2v12M2 8h12" />
              </svg>
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: open === i ? "200px" : "0px" }}
            >
              <p className="px-5 pb-5 text-sm font-light leading-relaxed text-ctp-subtext0 sm:text-base">
                {faq.a}
              </p>
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
