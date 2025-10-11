import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Koregaon Park, Pune | Professional Services",
  },
  description: "Expert pest control in Koregaon Park, Pune. Termite, cockroach, rodent & bed bug control. Free inspection. Call +91 80979 41077",
  keywords: "pest control koregaon park pune, termite control koregaon park, pest control services koregaon park",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-koregaon-park",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-koregaon-park',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-koregaon-park',
    }
  },
};

export default function PestControlInKoregaonParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
