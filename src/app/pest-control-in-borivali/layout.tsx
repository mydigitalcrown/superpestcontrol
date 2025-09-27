import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Borivali | Super Pest Control Mumbai',
  description: 'Expert pest control services in Borivali East & West. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Borivali, termite control Borivali, cockroach control Borivali, rodent control Borivali, bed bug control Borivali, ant control Borivali, pest control services Borivali, fumigation services Borivali, pest control Borivali East, pest control Borivali West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-borivali",
  },
};

export default function PestControlInBorivaliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}