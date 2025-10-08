import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control Services in Mumbai | All Types of Pest Management Solutions",
  },
  description: "Comprehensive pest control services in Mumbai. Termites, cockroaches, bed bugs, rodents, ants, mosquitoes & more. Licensed professionals, eco-friendly solutions. Call +91 80979 41077",
  keywords: "pest control services mumbai, pest management, pest control company mumbai, residential pest control, commercial pest control, pest exterminator",
  alternates: {
    canonical: "https://superpestcontrol.in/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}