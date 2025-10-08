import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Wagholi, Pune | Professional Services",
  },
  description: "Expert pest control in Wagholi, Pune. Termite, cockroach, rodent & bed bug control. Licensed professionals. Call +91 80979 41077",
  keywords: "pest control wagholi pune, termite control wagholi, pest control services wagholi",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-wagholi",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-wagholi',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-wagholi',
    }
  },
};

export default function PestControlInWagholiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
