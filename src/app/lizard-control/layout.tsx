import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Lizard Control Mumbai | Safe Lizard Repellent & Removal",
  },
  description: "Effective lizard control in Mumbai. Eco-friendly lizard repellent solutions for homes & offices. Safe, humane treatment. Call +91 80979 41077",
  keywords: "lizard control mumbai, lizard repellent, lizard removal, gecko control",
  alternates: {
    canonical: "https://superpestcontrol.in/lizard-control",
    languages: {
      'x-default': 'https://superpestcontrol.in/lizard-control',
      'en-IN': 'https://superpestcontrol.in/lizard-control',
    }
  },
};

export default function LizardControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
