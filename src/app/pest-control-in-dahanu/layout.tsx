import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Dahanu | Professional Pest Management Services",
  },
  description: "Expert pest control services in Dahanu, Palghar. Termite, cockroach, rodent & bed bug control. Free inspection. Call +91 80979 41077",
  keywords: "pest control dahanu, pest control services dahanu, termite control dahanu, pest control palghar",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dahanu",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-dahanu',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-dahanu',
    }
  },
};

export default function PestControlInDahanuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
