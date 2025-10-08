import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Commercial Pest Control Mumbai | Office, Restaurant & Warehouse Solutions",
  },
  description: "Professional commercial pest control in Mumbai for offices, restaurants, hotels, warehouses & retail. Compliance-ready IPM programs, AMC contracts. Call +91 80979 41077",
  keywords: "commercial pest control mumbai, office pest control, restaurant pest control, hotel pest management, warehouse fumigation, commercial pest AMC",
  alternates: {
    canonical: "https://superpestcontrol.in/commercial-pest-control-mumbai",
  },
};

export default function CommercialPestControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}