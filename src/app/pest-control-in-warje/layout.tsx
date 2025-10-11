import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control in Warje, Pune | Professional Services",
  },
  description: "Expert pest control in Warje, Pune. Termite, cockroach, rodent & bed bug control. Free inspection. Call +91 80979 41077",
  keywords: "pest control warje pune, termite control warje, pest control services warje",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-warje",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-warje',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-warje',
    }
  },
};

export default function PestControlInWarjeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
