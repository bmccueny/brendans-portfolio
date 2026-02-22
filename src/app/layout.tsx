import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "McCue Studio",
      description:
        "McCue Studio builds fast, professional websites for small businesses. Plain English, honest pricing, and work that actually helps you win clients.",
      url: "https://mccuestudio.dev",
      email: "bmccueny@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "NY",
        addressCountry: "US",
      },
      areaServed: "US",
      priceRange: "$$",
      sameAs: [
        "https://github.com/bmccueny",
        "https://linkedin.com/in/bmccueny",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a website cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Projects start at $1,500 for a professional small business website. Price depends on scope, pages, and features. All pricing is discussed upfront with no hidden fees.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most sites are delivered within two weeks. The timeline depends on how quickly content is provided and feedback is returned.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to know how to code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not at all. Everything is handled in plain English. You'll get a site you can be proud of without needing any technical knowledge.",
          },
        },
        {
          "@type": "Question",
          name: "Will my site work on mobile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every site is built mobile-first so it looks great on phones, tablets, and desktops.",
          },
        },
      ],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-EWCR9PK915" />
      </body>
    </html>
  );
}
