import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Camp, Pune | Professional Pest Management Services",
  },
  description: "Expert pest control services in Camp, Pune. Termite, cockroach, rodent & bed bug control. Licensed professionals. Call +91 80979 41077",
  keywords: "pest control camp pune, pest control services camp, termite control camp, cockroach control camp",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-camp",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-camp',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-camp',
    }
  },
};

export default function PestControlInCampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
