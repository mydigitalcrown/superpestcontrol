import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Versova | Super Pest Control Mumbai',
  description: 'Expert pest control services in Versova, Andheri West. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Versova, termite control Versova, cockroach control Versova, rodent control Versova, bed bug control Versova, ant control Versova, pest control services Versova Mumbai, fumigation services Versova, pest control Andheri West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-versova",
  },
};

export default function PestControlInVersovaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
