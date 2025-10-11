import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Yerawada, Pune | Professional Services",
  },
  description: "Expert pest control in Yerawada, Pune. Termite, cockroach, rodent & bed bug control. Licensed professionals. Call +91 80979 41077",
  keywords: "pest control yerawada pune, termite control yerawada, pest control services yerawada",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-yerawada",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-yerawada',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-yerawada',
    }
  },
};

export default function PestControlInYerawadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
