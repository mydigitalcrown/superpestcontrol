import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Salisbury Park, Pune | Professional Services",
  },
  description: "Expert pest control in Salisbury Park, Pune. Termite, cockroach, rodent & bed bug control. Licensed professionals. Call +91 80979 41077",
  keywords: "pest control salisbury park pune, termite control salisbury park, pest control services salisbury park",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-salisbury-park",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-salisbury-park',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-salisbury-park',
    }
  },
};

export default function PestControlInSalisburyParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
