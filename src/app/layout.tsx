import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "McCue Studio – Web Development for Small Businesses",
  description:
    "McCue Studio builds fast, professional websites for small businesses. Plain English, honest pricing, and work that actually helps you win clients.",
  openGraph: {
    title: "McCue Studio – Web Development for Small Businesses",
    description:
      "McCue Studio builds fast, professional websites for small businesses. Plain English, honest pricing, and work that actually helps you win clients.",
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
