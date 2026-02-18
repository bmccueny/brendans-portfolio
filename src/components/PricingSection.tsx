"use client";

import { RevealOnScroll } from "@/components/RevealOnScroll";

const tiers = [
  {
    name: "Starter",
    price: "Starting at $1,500",
    description: "Perfect for getting a professional presence online fast.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO setup",
      "Live in ~2 weeks",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Business",
    price: "Starting at $3,000",
    description: "For businesses that need more pages, more polish, and more power.",
    features: [
      "Up to 10 pages",
      "Everything in Starter",
      "Blog or news section",
      "Custom animations",
      "2 rounds of revisions",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "E-commerce, web apps, complex integrations, ongoing retainers.",
    features: [
      "Scope defined together",
      "E-commerce & web apps",
      "API integrations",
      "Ongoing support plans",
      "Flexible timeline",
    ],
    cta: "Reach Out",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
      {tiers.map((tier, i) => (
        <RevealOnScroll key={tier.name} delay={i * 120}>
          <div
            className={`glass-card relative flex h-full flex-col rounded-xl border p-6 ${
              tier.highlight
                ? "border-ctp-mauve"
                : "border-ctp-surface0"
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-ctp-mauve px-3 py-0.5 font-mono text-xs font-semibold text-white">
                  Most Popular
                </span>
              </div>
            )}

            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-ctp-subtext0">
              {tier.name}
            </p>
            <p
              className="mt-2 font-mono text-2xl font-extrabold sm:text-3xl"
              style={{ color: tier.highlight ? "var(--ctp-mauve)" : "var(--ctp-text)" }}
            >
              {tier.price}
            </p>
            <p className="mt-2 text-sm font-light leading-relaxed text-ctp-subtext0">
              {tier.description}
            </p>

            <ul className="mt-5 flex-1 space-y-2 border-t border-ctp-surface0 pt-5">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ctp-subtext0">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle cx="8" cy="8" r="7" stroke="var(--ctp-green)" strokeWidth="1.5" />
                    <path
                      d="M5 8l2 2 4-4"
                      stroke="var(--ctp-green)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-6 block rounded-lg px-4 py-2.5 text-center font-mono text-sm font-semibold tracking-wide transition-colors ${
                tier.highlight
                  ? "bg-ctp-mauve text-white hover:bg-ctp-lavender hover:shadow-[0_0_16px_rgba(191,90,242,0.35)]"
                  : "border border-ctp-surface1 text-ctp-subtext1 hover:border-ctp-mauve hover:text-ctp-mauve"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
