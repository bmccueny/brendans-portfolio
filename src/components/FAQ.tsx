"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const faqs = [
  {
    q: "Do you build portfolio and gallery sites?",
    a: "Yes — galleries and portfolio pages are some of my favorite work. Whether you're a photographer, artist, or wedding vendor, I'll make sure your images and work are front and center and load beautifully on every device.",
  },
  {
    q: "Can you add a booking or inquiry form?",
    a: "Absolutely. Most of my clients need a way for people to reach out or request a session, quote, or appointment. I build clean, reliable inquiry forms that land straight in your inbox.",
  },
  {
    q: "I'm not technical at all — is that okay?",
    a: "That's exactly who I build for. I handle everything and explain it all in plain English. By the end, you'll know how to manage your own site without needing to call anyone.",
  },
  {
    q: "What do I need to have ready before we start?",
    a: "Just a general sense of what you want. I'll help with structure and direction. If you have photos, a logo, or writing — great. If not, we'll figure it out together.",
  },
  {
    q: "Do you work with clients outside the Hudson Valley?",
    a: "Yes. I'm fully remote and work with clients anywhere. Most of the process happens over email and video calls, so location has never been an issue.",
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
              <span className="font-sans text-sm font-semibold text-ctp-text sm:text-base">
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
