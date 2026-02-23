export type CtaClickPayload = {
  label: string;
  location?: string;
  href?: string;
};

type CtaDebugEventDetail = CtaClickPayload & {
  timestamp: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackCtaClick({ label, location, href }: CtaClickPayload): void {
  if (typeof window === "undefined") {
    return;
  }

  const detail: CtaDebugEventDetail = {
    label,
    location,
    href,
    timestamp: Date.now(),
  };

  window.dispatchEvent(new CustomEvent<CtaDebugEventDetail>("cta:click", { detail }));

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "cta_click", {
    event_category: "engagement",
    event_label: label,
    cta_location: location ?? "unknown",
    link_url: href ?? "",
  });
}
