import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Diva | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Diva. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Diva, termite control Diva, cockroach control Diva, rodent control Diva, bed bug control Diva, ant control Diva, pest control services Diva, fumigation services Diva, pest control near Diva station, pest control Diva Mumbai',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-diva",
  },
};

export default function PestControlInDivaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
