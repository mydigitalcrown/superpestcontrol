import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Dombivli | Super Pest Control Mumbai',
  description: 'Expert pest control services in Dombivli East & West. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Dombivli, termite control Dombivli, cockroach control Dombivli, rodent control Dombivli, bed bug control Dombivli, ant control Dombivli, pest control services Dombivli, fumigation services Dombivli, pest control Dombivli East, pest control Dombivli West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dombivli",
  },
};

export default function PestControlInDombivliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
