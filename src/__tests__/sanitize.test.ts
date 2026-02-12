import { describe, it, expect } from "vitest";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";

function sanitizeHTML(dirty: string): string {
  const window = new JSDOM("").window;
  const purify = DOMPurify(window as unknown as Window);
  return purify.sanitize(dirty, { USE_PROFILES: { html: true } });
}

describe("sanitizeHTML", () => {
  it("strips script tags from HTML", () => {
    const dirty = '<p>Hello</p><script>alert("xss")</script>';
    const clean = sanitizeHTML(dirty);
    expect(clean).toBe("<p>Hello</p>");
  });

  it("preserves safe HTML", () => {
    const safe = "<p>Safe <strong>content</strong></p>";
    expect(sanitizeHTML(safe)).toBe(safe);
  });

  it("strips event handlers", () => {
    const dirty = '<img src="x" onerror="alert(1)" />';
    const clean = sanitizeHTML(dirty);
    expect(clean).not.toContain("onerror");
  });
});
