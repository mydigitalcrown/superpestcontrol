import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Bhandup | Super Pest Control Mumbai',
  description: 'Expert pest control services in Bhandup East & West. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Bhandup, termite control Bhandup, cockroach control Bhandup, rodent control Bhandup, bed bug control Bhandup, ant control Bhandup, pest control services Bhandup, fumigation services Bhandup, pest control Bhandup East, pest control Bhandup West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bhandup",
  },
};

export default function PestControlInBhandupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
