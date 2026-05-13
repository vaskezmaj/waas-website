import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://formio.biz"),
  title: {
    default: "Free Website for Local Contractors | Formio",
    template: "%s | Formio",
  },
  description:
    "We build professional websites for local contractors - roofing, HVAC, plumbing, electrical, painting & more. $0 setup. Starting at $149/month.",
  keywords: [
    "contractor website",
    "free website for contractors",
    "roofing website",
    "HVAC website",
    "plumbing website",
    "web design for contractors",
    "contractor marketing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Formio",
    title: "Free Website for Local Contractors | Formio",
    description:
      "Professional websites for contractors. $0 setup, live in 7 days. Starting at $149/month.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website for Local Contractors | Formio",
    description: "Professional websites for contractors. $0 setup, live in 7 days.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Formio",
    description:
      "Web design and digital marketing for local contractors. We build websites for roofing, HVAC, plumbing, electrical, and painting companies.",
    url: "https://formio.biz",
    serviceType: "Web Design",
    areaServed: "United States",
    priceRange: "$149-$697/month",
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
