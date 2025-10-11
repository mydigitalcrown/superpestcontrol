import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Commercial Fumigation Mumbai | Warehouse & Container Fumigation",
  },
  description: "Expert commercial fumigation for warehouses, containers & export cargo in Mumbai. Compliance-ready documentation. Call +91 80979 41077",
  keywords: "commercial fumigation mumbai, warehouse fumigation, container fumigation, cargo fumigation",
  alternates: {
    canonical: "https://superpestcontrol.in/commercial-fumigation",
    languages: {
      'x-default': 'https://superpestcontrol.in/commercial-fumigation',
      'en-IN': 'https://superpestcontrol.in/commercial-fumigation',
    }
  },
};

export default function CommercialFumigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
