import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Commercial Pest Control Mumbai | Office & Business Pest Management",
  },
  description: "Professional commercial pest control for offices, restaurants, hotels & warehouses in Mumbai. Compliance-ready IPM programs. Call +91 80979 41077",
  keywords: "commercial pest control mumbai, office pest control, restaurant pest control, commercial fumigation",
  alternates: {
    canonical: "https://superpestcontrol.in/commercial-pest-control",
    languages: {
      'x-default': 'https://superpestcontrol.in/commercial-pest-control',
      'en-IN': 'https://superpestcontrol.in/commercial-pest-control',
    }
  },
};

export default function CommercialPestControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
