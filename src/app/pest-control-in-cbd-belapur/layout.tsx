import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in CBD Belapur | Super Pest Control Mumbai',
  description: 'Expert pest control services in CBD Belapur. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control CBD Belapur, termite control CBD Belapur, cockroach control CBD Belapur, rodent control CBD Belapur, bed bug control CBD Belapur, ant control CBD Belapur, pest control services CBD Belapur, fumigation services CBD Belapur, pest control CBD Belapur East, pest control CBD Belapur West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-cbd-belapur",
  },
};

export default function PestControlInCBDBelapurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}