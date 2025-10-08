import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Prabhadevi, Mumbai | Professional Services",
  },
  description: "Expert pest control in Prabhadevi, Mumbai. Termite, cockroach, rodent & bed bug control. Free inspection. Call +91 80979 41077",
  keywords: "pest control prabhadevi mumbai, termite control prabhadevi, pest control services prabhadevi",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-prabhadevi",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-prabhadevi',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-prabhadevi',
    }
  },
};

export default function PestControlInPrabhadeviLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
