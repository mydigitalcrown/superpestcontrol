import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Hadapsar | Super Pest Control Pune',
  description: 'Expert pest control services in Hadapsar, Pune. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Hadapsar, termite control Hadapsar, cockroach control Hadapsar, rodent control Hadapsar, bed bug control Hadapsar, ant control Hadapsar, pest control services Hadapsar Pune, fumigation services Hadapsar',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-hadapsar",
  },
};

export default function PestControlInHadapsarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
