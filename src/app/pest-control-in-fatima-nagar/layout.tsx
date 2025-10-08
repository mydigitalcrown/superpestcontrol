import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Fatima Nagar, Pune | Professional Services",
  },
  description: "Expert pest control in Fatima Nagar, Pune. Termite, cockroach, rodent & bed bug control. Licensed professionals. Call +91 80979 41077",
  keywords: "pest control fatima nagar pune, termite control fatima nagar, pest control services fatima nagar",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-fatima-nagar",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-fatima-nagar',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-fatima-nagar',
    }
  },
};

export default function PestControlInFatimaNagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
