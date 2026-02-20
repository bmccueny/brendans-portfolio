"use client";

import { RevealOnScroll } from "@/components/RevealOnScroll";

const tiers = [
  {
    name: "Starter",
    price: "Starting at $1,500",
    description: "Great for getting a beautiful, professional presence up fast.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Photo gallery or portfolio page",
      "Contact & inquiry form",
      "Live in ~2 weeks",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Signature",
    price: "Starting at $3,000",
    description: "For creatives and businesses ready to make a real impression.",
    features: [
      "Up to 10 pages",
      "Everything in Starter",
      "Blog, journal, or news section",
      "Online booking or store integration",
      "2 rounds of revisions",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "Bigger projects, e-commerce, print shops, or ongoing partnerships.",
    features: [
      "Scope defined together",
      "E-commerce & print shops",
      "Booking & calendar systems",
      "Ongoing support plans",
      "Flexible timeline",
    ],
    cta: "Reach Out",
    highlight: false,
  },
];

type CellValue = boolean | string;

const comparisonRows: { label: string; values: [CellValue, CellValue, CellValue] }[] = [
  { label: "Pages included",         values: ["Up to 5", "Up to 10", "Custom"] },
  { label: "Mobile-responsive",      values: [true, true, true] },
  { label: "Contact / inquiry form", values: [true, true, true] },
  { label: "Photo gallery",          values: [true, true, true] },
  { label: "Blog or journal",        values: [false, true, true] },
  { label: "Online booking",         values: [false, true, true] },
  { label: "Revisions",              values: ["1 round", "2 rounds", "Unlimited"] },
  { label: "E-commerce / print shop",values: [false, false, true] },
  { label: "Ongoing support plan",   values: [false, false, true] },
  { label: "Turnaround",             values: ["~2 weeks", "~3 weeks", "Discussed together"] },
];

function Cell({ value, highlight }: { value: CellValue; highlight: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <svg
        className="mx-auto h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        aria-label="Included"
      >
        <circle cx="8" cy="8" r="7" stroke="var(--ctp-green)" strokeWidth="1.5" />
        <path d="M5 8l2 2 4-4" stroke="var(--ctp-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : (
      <span className="mx-auto block h-px w-4 bg-ctp-surface1" aria-label="Not included" />
    );
  }
  return (
    <span
      className="font-mono text-xs font-medium"
      style={{ color: highlight ? "var(--ctp-mauve)" : "var(--ctp-subtext0)" }}
    >
      {value}
    </span>
  );
}

export function PricingSection() {
  return (
    <div className="space-y-6">
      {/* Tier cards */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        {tiers.map((tier, i) => (
          <RevealOnScroll key={tier.name} delay={i * 120}>
            <div
              className={`glass-card relative flex h-full flex-col rounded-xl border p-6 ${
                tier.highlight ? "border-ctp-mauve" : "border-ctp-surface0"
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
                className="mt-2 font-display text-2xl font-extrabold tabular-nums sm:text-3xl"
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
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="var(--ctp-green)" strokeWidth="1.5" />
                      <path d="M5 8l2 2 4-4" stroke="var(--ctp-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Comparison table */}
      <RevealOnScroll delay={200}>
        <div className="overflow-x-auto rounded-xl border border-ctp-surface0">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="border-b border-ctp-surface0 bg-ctp-mantle">
                <th className="py-3 pl-5 pr-4 text-left font-mono text-xs font-semibold uppercase tracking-widest text-ctp-subtext0">
                  Feature
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="px-4 py-3 text-center font-mono text-xs font-semibold uppercase tracking-widest"
                    style={{ color: tier.highlight ? "var(--ctp-mauve)" : "var(--ctp-subtext0)" }}
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-ctp-surface0 last:border-0 ${
                    i % 2 === 0 ? "bg-transparent" : "bg-ctp-mantle/40"
                  }`}
                >
                  <td className="py-3 pl-5 pr-4 text-ctp-subtext0">{row.label}</td>
                  {row.values.map((val, j) => (
                    <td key={j} className="px-4 py-3 text-center">
                      <Cell value={val} highlight={j === 1} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </RevealOnScroll>
    </div>
  );
}
