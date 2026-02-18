export function Logo() {
  return (
    <span className="flex items-baseline gap-2 font-mono tracking-tight">
      <span
        className="text-xl font-extrabold"
        style={{
          background: "linear-gradient(135deg, #BF5AF2 0%, #5E5CE6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        McCue
      </span>
      <span
        className="text-xs font-medium tracking-[0.2em]"
        style={{ color: "var(--ctp-subtext0)" }}
      >
        STUDIO
      </span>
    </span>
  );
}
