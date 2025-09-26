import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Aundh | Super Pest Control Mumbai',
  description: 'Expert pest control services in Aundh East & West. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Aundh, termite control Aundh, cockroach control Aundh, rodent control Aundh, bed bug control Aundh, ant control Aundh, pest control services Aundh, fumigation services Aundh, pest control Aundh East, pest control Aundh West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-aundh",
  },
};

export default function PestControlInAundhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}