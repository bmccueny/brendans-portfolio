"use client";

import { useEffect, useState } from "react";
import type { CtaClickPayload } from "@/lib/analytics";

type CtaDebugEventDetail = CtaClickPayload & {
  timestamp: number;
};

export function AnalyticsDebugPanel() {
  const [events, setEvents] = useState<CtaDebugEventDetail[]>([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<CtaDebugEventDetail>;
      if (!customEvent.detail) {
        return;
      }

      setEvents((previous) => [customEvent.detail, ...previous].slice(0, 12));
    };

    window.addEventListener("cta:click", handler as EventListener);
    return () => window.removeEventListener("cta:click", handler as EventListener);
  }, []);

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <aside className="fixed right-3 bottom-3 z-[90] w-[min(360px,calc(100vw-1.5rem))] rounded-xl border border-ctp-surface1 bg-ctp-crust/90 p-3 font-mono text-xs text-ctp-subtext1 backdrop-blur-xl">
      <div className="mb-2 flex items-center justify-between">
        <p className="tracking-wide text-ctp-text">CTA Debug</p>
        <button
          type="button"
          className="rounded border border-ctp-surface1 px-2 py-1 text-[10px] text-ctp-subtext0 hover:text-ctp-text"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>

      {open && (
        <>
          {events.length === 0 ? (
            <p className="text-ctp-overlay1">No CTA events yet. Click a tracked CTA.</p>
          ) : (
            <ul className="max-h-60 space-y-2 overflow-auto pr-1">
              {events.map((event, index) => (
                <li key={`${event.timestamp}-${index}`} className="rounded border border-ctp-surface0 bg-ctp-mantle/60 p-2">
                  <p className="text-ctp-text">{event.label}</p>
                  <p className="mt-1 text-[10px] text-ctp-subtext0">{event.location ?? "unknown"} · {event.href ?? ""}</p>
                  <p className="mt-1 text-[10px] text-ctp-overlay1">{new Date(event.timestamp).toLocaleTimeString()}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </aside>
  );
}
