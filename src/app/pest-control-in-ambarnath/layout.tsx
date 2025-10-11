import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Ambernath | Super Pest Control Maharashtra',
  description: 'Expert pest control services in Ambernath. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Ambernath, termite control Ambernath, cockroach control Ambernath, rodent control Ambernath, bed bug control Ambernath, ant control Ambernath, pest control services Ambernath, fumigation services Ambernath',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ambernath",
  },
};

export default function PestControlInAmbernathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
