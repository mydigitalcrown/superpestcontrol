import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Manor | Professional Pest Management Services",
  },
  description: "Expert pest control services in Manor, Palghar. Termite, cockroach, rodent & bed bug control. Free inspection. Call +91 80979 41077",
  keywords: "pest control manor, pest control services manor, termite control manor, pest control palghar",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-manor",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-manor',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-manor',
    }
  },
};

export default function PestControlInManorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
