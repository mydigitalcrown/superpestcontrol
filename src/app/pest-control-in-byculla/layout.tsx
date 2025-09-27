import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Byculla | Super Pest Control Mumbai',
  description: 'Expert pest control services in Byculla, South Mumbai. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Byculla, termite control Byculla, cockroach control Byculla, rodent control Byculla, bed bug control Byculla, ant control Byculla, pest control services Byculla, fumigation services Byculla, pest control South Mumbai, commercial pest control Byculla',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-byculla",
  },
};

export default function PestControlInBycullaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}