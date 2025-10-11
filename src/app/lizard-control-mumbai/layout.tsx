import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Lizard Control in Mumbai | Safe Lizard Repellent & Removal Services",
  },
  description: "Effective lizard control services in Mumbai. Eco-friendly lizard repellent solutions for homes & offices. Safe, humane & long-lasting results. Call +91 80979 41077",
  keywords: "lizard control mumbai, lizard repellent, lizard removal, gecko control, lizard pest control mumbai, lizard exterminator",
  alternates: {
    canonical: "https://superpestcontrol.in/lizard-control-mumbai",
  },
};

export default function LizardControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
