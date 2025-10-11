import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Diva | Super Pest Control Mumbai',
  description: 'Expert pest control services in Diva. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Diva, termite control Diva, cockroach control Diva, rodent control Diva, bed bug control Diva, ant control Diva, pest control services Diva, fumigation services Diva, pest control near Diva station, pest control Diva Mumbai',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-diva",
  },
};

export default function PestControlInDivaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
