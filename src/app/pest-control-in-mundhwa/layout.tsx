import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Mundhwa, Pune | Professional Services",
  },
  description: "Expert pest control in Mundhwa, Pune. Termite, cockroach, rodent & bed bug control. Licensed professionals. Call +91 80979 41077",
  keywords: "pest control mundhwa pune, termite control mundhwa, pest control services mundhwa",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-mundhwa",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-mundhwa',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-mundhwa',
    }
  },
};

export default function PestControlInMundhwaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
