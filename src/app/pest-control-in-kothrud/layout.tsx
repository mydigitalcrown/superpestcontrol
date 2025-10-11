import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Kothrud, Pune | Professional Services",
  },
  description: "Expert pest control in Kothrud, Pune. Termite, cockroach, rodent & bed bug control. Licensed professionals. Call +91 80979 41077",
  keywords: "pest control kothrud pune, termite control kothrud, pest control services kothrud",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kothrud",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-kothrud',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-kothrud',
    }
  },
};

export default function PestControlInKothrudLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
