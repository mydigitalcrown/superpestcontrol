import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Fumigation Mumbai | Warehouse & Container Fumigation Services",
  description: "Expert commercial fumigation in Mumbai for warehouses, containers, food processing units & export cargo. Compliance-ready documentation & certification. Call +91 80979 41077",
  keywords: "commercial fumigation mumbai, warehouse fumigation, container fumigation, cargo fumigation, food processing fumigation, export fumigation",
  alternates: {
    canonical: "https://superpestcontrol.in/commercial-fumigation-mumbai",
  },
};

export default function CommercialFumigationMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}