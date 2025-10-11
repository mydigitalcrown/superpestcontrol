import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Palghar | Professional Pest Management Services",
  },
  description: "Expert pest control services in Palghar. Termite, cockroach, rodent & bed bug control. Licensed professionals. Call +91 80979 41077",
  keywords: "pest control palghar, pest control services palghar, termite control palghar, cockroach control palghar",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-palghar",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-palghar',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-palghar',
    }
  },
};

export default function PestControlInPalgharLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
