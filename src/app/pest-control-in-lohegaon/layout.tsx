import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Lohegaon, Pune | Professional Services",
  },
  description: "Expert pest control in Lohegaon, Pune. Termite, cockroach, rodent & bed bug control. Free inspection. Call +91 80979 41077",
  keywords: "pest control lohegaon pune, termite control lohegaon, pest control services lohegaon",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-lohegaon",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-lohegaon',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-lohegaon',
    }
  },
};

export default function PestControlInLohegaonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
