import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brendan's Portfolio",
  description: "Brendan's personal portfolio — projects, skills, and contact.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
