import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Rodent Control Mumbai | Professional Rat & Mouse Extermination",
  },
  description: "Expert rodent control in Mumbai. Complete rat and mouse extermination with advanced trapping & baiting. Safe for homes & offices. Call +91 80979 41077",
  keywords: "rodent control, rat control mumbai, mouse extermination, rodent pest control",
  alternates: {
    canonical: "https://superpestcontrol.in/rodents-control",
    languages: {
      'x-default': 'https://superpestcontrol.in/rodents-control',
      'en-IN': 'https://superpestcontrol.in/rodents-control',
    }
  },
};

export default function RodentsControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
