import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Ambegaon | Super Pest Control Maharashtra',
  description: 'Expert pest control services in Ambegaon. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Ambegaon, termite control Ambegaon, cockroach control Ambegaon, rodent control Ambegaon, bed bug control Ambegaon, ant control Ambegaon, pest control services Ambegaon, fumigation services Ambegaon',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ambegaon",
  },
};

export default function PestControlInAmbegaonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
