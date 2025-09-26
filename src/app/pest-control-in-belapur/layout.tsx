import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Belapur | Super Pest Control Navi Mumbai',
  description: 'Expert pest control services in Belapur, Navi Mumbai. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Belapur, termite control Belapur, cockroach control Belapur, rodent control Belapur, bed bug control Belapur, ant control Belapur, pest control services Belapur, fumigation services Belapur, pest control CBD Belapur, pest control Belapur sector',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-belapur",
  },
};

export default function PestControlInBelapurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}