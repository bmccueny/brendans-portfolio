"use client";

import { useEffect, useState } from "react";

const FULL_TEXT = "Hey, I'm Brendan.";

export function Typewriter() {
  const [displayed, setDisplayed] = useState("");
  const [showCaret, setShowCaret] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (done) return;
    const blink = setInterval(() => setShowCaret((v) => !v), 530);
    return () => clearInterval(blink);
  }, [done]);

  return (
    <span>
      {displayed.split("Brendan").map((part, i, arr) =>
        i < arr.length - 1 ? (
          <span key={i}>
            {part}
            <span style={{ color: "var(--ctp-lavender)" }}>Brendan</span>
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
      <span
        style={{
          borderRight: "3px solid var(--ctp-mauve)",
          marginLeft: "2px",
          opacity: done ? 0 : showCaret ? 1 : 0,
          transition: done ? "opacity 0.8s ease-out" : undefined,
        }}
      />
    </span>
  );
}
