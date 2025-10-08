import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Bed Bug Control Mumbai | Complete Bed Bug Elimination Services",
  },
  description: "Expert bed bug control in Mumbai. Heat treatment & chemical solutions for complete bed bug elimination. Same-day service. Call +91 80979 41077",
  keywords: "bed bug control, bed bug treatment mumbai, bed bug removal, bed bug exterminator",
  alternates: {
    canonical: "https://superpestcontrol.in/bed-bug-control",
    languages: {
      'x-default': 'https://superpestcontrol.in/bed-bug-control',
      'en-IN': 'https://superpestcontrol.in/bed-bug-control',
    }
  },
};

export default function BedBugControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
