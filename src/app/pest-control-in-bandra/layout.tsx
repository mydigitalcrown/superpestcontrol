import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Bandra | Super Pest Control Mumbai',
  description: 'Expert pest control services in Bandra East & West. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Bandra, termite control Bandra, cockroach control Bandra, rodent control Bandra, bed bug control Bandra, ant control Bandra, pest control services Bandra, fumigation services Bandra, pest control Bandra East, pest control Bandra West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bandra",
  },
};

export default function PestControlInBandraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}