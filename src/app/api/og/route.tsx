import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at 82% 14%, rgba(94,92,230,0.45) 0%, transparent 35%), radial-gradient(circle at 18% 88%, rgba(255,159,10,0.35) 0%, transparent 32%), #0b0d14",
          color: "#f2f2f7",
          fontFamily: "Inter, ui-sans-serif, system-ui",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "999px",
            padding: "10px 18px",
            fontSize: "24px",
            letterSpacing: "0.06em",
          }}
        >
          MCCUE STUDIO
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              fontSize: "66px",
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              fontWeight: 700,
              maxWidth: "980px",
            }}
          >
            Websites that turn small business traffic into booked calls.
          </div>
          <div style={{ fontSize: "30px", color: "rgba(235,235,245,0.82)" }}>
            Strategy, design, and frontend development by Brendan McCue
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
