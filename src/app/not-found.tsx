import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ctp-mauve)" }}>
          404
        </p>
        <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-ctp-text sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base font-light text-ctp-subtext0">
          That page doesn&apos;t exist. Let&apos;s get you back home.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-ctp-mauve px-6 py-3 font-sans text-base font-semibold tracking-wide text-white transition-colors hover:bg-ctp-lavender"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
