import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Shivajinagar, Pune | Professional Services",
  },
  description: "Expert pest control in Shivajinagar, Pune. Termite, cockroach, rodent & bed bug control. Licensed professionals. Call +91 80979 41077",
  keywords: "pest control shivajinagar pune, termite control shivajinagar, pest control services shivajinagar",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-shivajinagar",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-shivajinagar',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-shivajinagar',
    }
  },
};

export default function PestControlInShivajinagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
