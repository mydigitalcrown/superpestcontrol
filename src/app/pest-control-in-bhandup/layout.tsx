import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Bhandup | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Bhandup. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Bhandup, termite control Bhandup, cockroach control Bhandup, rodent control Bhandup, bed bug control Bhandup, ant control Bhandup, pest control services Bhandup, fumigation services Bhandup, pest control Bhandup East, pest control Bhandup West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bhandup",
  },
};

export default function PestControlInBhandupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
