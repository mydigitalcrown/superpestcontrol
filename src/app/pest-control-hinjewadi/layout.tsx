import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Pest Control in Hinjewadi, Pune | Super Pest Control ✓ Top Rated",
  description: "★ Professional pest control services in Hinjewadi, Pune. Expert solutions for IT parks & residential complexes. Cockroaches, termites, rodents control. 24/7 emergency service with eco-friendly treatments ✓",
  keywords: [
    "pest control in Hinjewadi",
    "pest control Hinjewadi",
    "pest control services Hinjewadi",
    "Hinjewadi pest control",
    "termite control Hinjewadi",
    "cockroach control Hinjewadi",
    "rodent control Hinjewadi",
    "pest control Pune",
    "pest control IT parks Hinjewadi",
    "residential pest control Hinjewadi",
    "commercial pest control Hinjewadi",
    "eco-friendly pest control Hinjewadi",
    "24/7 pest control Hinjewadi",
    "emergency pest control Hinjewadi",
    "Super Pest Control Hinjewadi"
  ],
  authors: [{ name: "Super Pest Control" }],
  creator: "Super Pest Control",
  publisher: "Super Pest Control",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-hinjewadi",
  },
  openGraph: {
    title: "Best Pest Control in Hinjewadi, Pune | Super Pest Control",
    description: "Professional pest control services in Hinjewadi, Pune. Expert solutions for IT parks & residential complexes with eco-friendly treatments.",
    url: "https://superpestcontrol.in/pest-control-hinjewadi",
    siteName: "Super Pest Control",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://superpestcontrol.in/images/pest-control-hinjewadi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control Services in Hinjewadi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pest Control in Hinjewadi, Pune | Super Pest Control",
    description: "Professional pest control services in Hinjewadi, Pune. Expert solutions for IT parks & residential complexes.",
    images: ["https://superpestcontrol.in/images/pest-control-hinjewadi-og.jpg"],
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Hinjewadi, Pune",
    "geo.position": "18.5912;73.7389",
    "ICBM": "18.5912, 73.7389",
  },
};

export default function PestControlHinjewadiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}