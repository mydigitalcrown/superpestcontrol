import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Pest Control Services Mumbai | Home Pest Management",
  description: "Professional residential pest control in Mumbai. Complete home pest solutions for apartments, villas, and houses. Termites, cockroaches, bed bugs & more. Call +91 80979 41077",
  keywords: "residential pest control, home pest control mumbai, apartment pest control, house pest management, villa fumigation mumbai",
  alternates: {
    canonical: "https://superpestcontrol.in/residential",
  },
};

export default function ResidentialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}