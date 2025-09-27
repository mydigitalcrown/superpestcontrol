import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Dahisar | Super Pest Control Mumbai',
  description: 'Expert pest control services in Dahisar East & West. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Dahisar, termite control Dahisar, cockroach control Dahisar, rodent control Dahisar, bed bug control Dahisar, ant control Dahisar, pest control services Dahisar, fumigation services Dahisar, pest control Dahisar East, pest control Dahisar West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dahisar",
  },
};

export default function PestControlInDahisarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}