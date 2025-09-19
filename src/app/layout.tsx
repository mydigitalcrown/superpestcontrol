import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Super Pest Control Mumbai | Professional Pest Control Services",
  description: "Leading pest control services in Mumbai. Expert termite control, rodent control, cockroach treatment, and mosquito control. Safe, effective, and affordable pest management solutions.",
  keywords: "pest control Mumbai, termite control, rodent control, cockroach treatment, mosquito control, pest management Mumbai",
  authors: [{ name: "Super Pest Control Mumbai" }],
  creator: "Super Pest Control Mumbai",
  publisher: "Super Pest Control Mumbai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Super Pest Control Mumbai | Professional Pest Control Services",
    description: "Leading pest control services in Mumbai. Expert termite control, rodent control, and more.",
    url: "https://superpestcontrolmumbai.com",
    siteName: "Super Pest Control Mumbai",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Pest Control Mumbai | Professional Pest Control Services",
    description: "Leading pest control services in Mumbai. Expert termite control, rodent control, and more.",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Super Pest Control Mumbai",
              "description": "Leading pest control services in Mumbai. Expert termite control, rodent control, cockroach treatment, and mosquito control.",
              "url": "https://superpestcontrolmumbai.com",
              "telephone": "+91-98765-43210",
              "email": "info@superpestcontrolmumbai.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "serviceArea": {
                "@type": "City",
                "name": "Mumbai"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
