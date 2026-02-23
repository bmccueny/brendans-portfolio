"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackCtaClick } from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  ctaLabel: string;
  ctaLocation?: string;
};

export function TrackedLink({
  children,
  ctaLabel,
  ctaLocation,
  href,
  onClick,
  ...rest
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      data-cta-label={ctaLabel}
      data-cta-location={ctaLocation ?? "unknown"}
      onClick={(event) => {
        trackCtaClick({
          label: ctaLabel,
          location: ctaLocation,
          href: typeof href === "string" ? href : undefined,
        });
        onClick?.(event);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
