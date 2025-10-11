import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Boisar | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Boisar. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Boisar, termite control Boisar, cockroach control Boisar, rodent control Boisar, bed bug control Boisar, ant control Boisar, pest control services Boisar, fumigation services Boisar, pest control Palghar',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-boisar",
  },
};

export default function PestControlInBhandupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
