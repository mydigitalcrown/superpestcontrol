import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Bhiwandi | Super Pest Control Mumbai',
  description: 'Expert pest control services in Bhiwandi East & West. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Bhiwandi, termite control Bhiwandi, cockroach control Bhiwandi, rodent control Bhiwandi, bed bug control Bhiwandi, ant control Bhiwandi, pest control services Bhiwandi, fumigation services Bhiwandi, pest control Bhiwandi East, pest control Bhiwandi West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bhiwandi",
  },
};

export default function PestControlInBhiwandiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
