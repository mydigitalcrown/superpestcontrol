import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Belapur | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Belapur. 100% guaranteed results. Call 8097941077 for same-day service!',
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
