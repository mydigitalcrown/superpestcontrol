import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in CBD Belapur | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in CBD Belapur. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control CBD Belapur, termite control CBD Belapur, cockroach control CBD Belapur, rodent control CBD Belapur, bed bug control CBD Belapur, ant control CBD Belapur, pest control services CBD Belapur, fumigation services CBD Belapur, pest control CBD Belapur East, pest control CBD Belapur West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-cbd-belapur",
  },
};

export default function PestControlInCBDBelapurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
