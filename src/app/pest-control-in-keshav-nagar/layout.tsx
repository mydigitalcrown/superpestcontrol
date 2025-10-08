import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Keshav Nagar, Pune | Professional Services",
  },
  description: "Expert pest control in Keshav Nagar, Pune. Termite, cockroach, rodent & bed bug control. Licensed professionals. Call +91 80979 41077",
  keywords: "pest control keshav nagar pune, termite control keshav nagar, pest control services keshav nagar",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-keshav-nagar",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-keshav-nagar',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-keshav-nagar',
    }
  },
};

export default function PestControlInKeshavNagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
