import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Pimpri | Professional Pest Management Services",
  },
  description: "Expert pest control in Pimpri, Pune. Termite, cockroach, rodent & bed bug control. Licensed professionals. Call +91 80979 41077",
  keywords: "pest control pimpri, termite control pimpri, pest control services pimpri pune",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-pimpri",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-pimpri',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-pimpri',
    }
  },
};

export default function PestControlInPimpriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
