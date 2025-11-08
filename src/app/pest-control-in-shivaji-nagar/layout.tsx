import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pest Control in Shivaji Nagar, Pune | Professional Pest Management Services",
  description: "Professional pest control services in Shivaji Nagar, Pune. Expert solutions for residential and commercial properties. 24/7 emergency services available. Call +91-8097941077",
  keywords: "pest control Shivaji Nagar, pest management Pune, extermination services, residential pest control, commercial pest control, 24/7 pest control",
  authors: [{ name: "Super Pest Control" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-shivaji-nagar"
  },
  openGraph: {
    title: "Pest Control in Shivaji Nagar, Pune | Super Pest Control",
    description: "Professional pest control services in Shivaji Nagar, Pune. Expert solutions for residential and commercial properties. 24/7 emergency services available.",
    url: "https://superpestcontrol.in/pest-control-in-shivaji-nagar",
    siteName: "Super Pest Control",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Pest Control in Shivaji Nagar, Pune | Super Pest Control",
    description: "Professional pest control services in Shivaji Nagar, Pune. Expert solutions for residential and commercial properties. 24/7 emergency services available."
  }
};

export default function ShivajiNagarLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
