import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Pimpri Chinchwad | Professional Services",
  },
  description: "Expert pest control in Pimpri Chinchwad. Termite, cockroach, rodent & bed bug control. Free inspection. Call +91 80979 41077",
  keywords: "pest control pimpri chinchwad, termite control pimpri chinchwad, pest control pcmc",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-pimpri-chinchwad",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-pimpri-chinchwad',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-pimpri-chinchwad',
    }
  },
};

export default function PestControlInPimpriChinchwadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
