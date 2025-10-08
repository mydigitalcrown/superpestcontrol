import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Boisar | Super Pest Control Maharashtra',
  description: 'Expert pest control services in Boisar, Palghar. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Boisar, termite control Boisar, cockroach control Boisar, rodent control Boisar, bed bug control Boisar, ant control Boisar, pest control services Boisar, fumigation services Boisar, pest control Palghar',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-boisar",
  },
};

export default function PestControlInBhandupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}