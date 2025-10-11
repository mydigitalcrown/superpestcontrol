import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Ahmednagar | Super Pest Control Maharashtra',
  description: 'Expert pest control services in Ahmednagar. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Ahmednagar, termite control Ahmednagar, cockroach control Ahmednagar, rodent control Ahmednagar, bed bug control Ahmednagar, ant control Ahmednagar, pest control services Ahmednagar, fumigation services Ahmednagar',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ahmednagar",
  },
};

export default function PestControlInAhmednagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
