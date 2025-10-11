import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Karve Nagar, Pune | Professional Services",
  },
  description: "Expert pest control in Karve Nagar, Pune. Termite, cockroach, rodent & bed bug control. Free inspection. Call +91 80979 41077",
  keywords: "pest control karve nagar pune, termite control karve nagar, pest control services karve nagar",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-karve-nagar",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-karve-nagar',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-karve-nagar',
    }
  },
};

export default function PestControlInKarveNagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
