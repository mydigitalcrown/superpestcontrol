import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Alibag | Super Pest Control Maharashtra',
  description: 'Expert pest control services in Alibag. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Alibag, termite control Alibag, cockroach control Alibag, rodent control Alibag, bed bug control Alibag, ant control Alibag, pest control services Alibag, fumigation services Alibag',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-alibag",
  },
};

export default function PestControlInAlibagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
