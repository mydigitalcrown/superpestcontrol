import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Shivaji Park, Mumbai | Professional Services",
  },
  description: "Expert pest control in Shivaji Park, Mumbai. Termite, cockroach, rodent & bed bug control. Free inspection. Call +91 80979 41077",
  keywords: "pest control shivaji park mumbai, termite control shivaji park, pest control services shivaji park",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-shivaji-park",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-shivaji-park',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-shivaji-park',
    }
  },
};

export default function PestControlInShivajiParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
