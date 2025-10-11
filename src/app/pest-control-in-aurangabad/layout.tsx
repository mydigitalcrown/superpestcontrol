import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Aurangabad | Super Pest Control Maharashtra',
  description: 'Expert pest control services in Aurangabad. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Aurangabad, termite control Aurangabad, cockroach control Aurangabad, rodent control Aurangabad, bed bug control Aurangabad, ant control Aurangabad, pest control services Aurangabad, fumigation services Aurangabad',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-aurangabad",
  },
};

export default function PestControlInAurangabadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
