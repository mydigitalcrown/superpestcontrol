import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Termite Control in Mumbai | Anti-Termite Treatment & Soil Treatment",
  },
  description: "Professional termite control services in Mumbai. Pre & post-construction anti-termite treatment, wood treatment, soil treatment. 5-year warranty. Call +91 80979 41077",
  keywords: "termite control mumbai, anti termite treatment, termite pest control, white ant treatment, termite soil treatment, termite exterminator mumbai",
  alternates: {
    canonical: "https://superpestcontrol.in/termites-control-mumbai",
  },
};

export default function TermitesControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
