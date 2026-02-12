import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Brendan McCue – Full-Stack Developer",
  description:
    "Full-stack developer specializing in React, Next.js, and TypeScript. Building fast, accessible, production-grade web apps.",
  openGraph: {
    title: "Brendan McCue – Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and TypeScript. Building fast, accessible, production-grade web apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}else if(window.matchMedia("(prefers-color-scheme: light)").matches){document.documentElement.dataset.theme="light"}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
