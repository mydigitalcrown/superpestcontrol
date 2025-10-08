import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Pest Control Mumbai | Home Pest Management Services",
  description: "Complete residential pest control in Mumbai for homes, apartments & villas. All-inclusive pest management for termites, cockroaches, bed bugs & more. Call +91 80979 41077",
  keywords: "residential pest control mumbai, home pest control, apartment pest control, house pest management, home fumigation mumbai",
  alternates: {
    canonical: "https://superpestcontrol.in/residential-pest-control-mumbai",
  },
};

export default function ResidentialPestControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}