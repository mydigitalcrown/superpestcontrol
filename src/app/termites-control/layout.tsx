import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Termite Control Services Mumbai | Anti-Termite Treatment & Protection",
  },
  description: "Professional termite control in Mumbai. Pre & post-construction anti-termite treatment with 5-year warranty. Free inspection. Call +91 80979 41077",
  keywords: "termite control, anti termite treatment, termite pest control mumbai, termite protection",
  alternates: {
    canonical: "https://superpestcontrol.in/termites-control",
    languages: {
      'x-default': 'https://superpestcontrol.in/termites-control',
      'en-IN': 'https://superpestcontrol.in/termites-control',
    }
  },
};

export default function TermitesControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
