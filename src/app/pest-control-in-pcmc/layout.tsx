import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in PCMC | Pimpri Chinchwad Pest Management",
  },
  description: "Expert pest control in PCMC, Pimpri Chinchwad. Termite, cockroach, rodent & bed bug control. Free inspection. Call +91 80979 41077",
  keywords: "pest control pcmc, pest control pimpri chinchwad, termite control pcmc, pest control services pcmc",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-pcmc",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-pcmc',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-pcmc',
    }
  },
};

export default function PestControlInPCMCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
