"use client";

import { useEffect } from "react";

const LOCK_DURATION = 1200; // ms to pause after snapping

export function ScrollSnap() {
  useEffect(() => {
    const container = document.getElementById("page-content");
    if (!container) return;

    let locked = false;
    let timeout: ReturnType<typeof setTimeout>;
    let lastScrollTop = container.scrollTop;

    function onScrollEnd() {
      const currentTop = container!.scrollTop;
      // Only lock if we actually moved to a new section
      if (Math.abs(currentTop - lastScrollTop) > 100) {
        locked = true;
        container!.style.overflowY = "hidden";

        timeout = setTimeout(() => {
          locked = false;
          container!.style.overflowY = "auto";
        }, LOCK_DURATION);
      }
      lastScrollTop = currentTop;
    }

    // Use scrollend event (modern browsers) for reliable snap detection
    container.addEventListener("scrollend", onScrollEnd);

    return () => {
      container.removeEventListener("scrollend", onScrollEnd);
      clearTimeout(timeout);
      if (locked) {
        container.style.overflowY = "auto";
      }
    };
  }, []);

  return null;
}
