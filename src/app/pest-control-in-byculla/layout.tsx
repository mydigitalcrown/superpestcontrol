import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Byculla | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Byculla. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Byculla, termite control Byculla, cockroach control Byculla, rodent control Byculla, bed bug control Byculla, ant control Byculla, pest control services Byculla, fumigation services Byculla, pest control South Mumbai, commercial pest control Byculla',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-byculla",
  },
};

export default function PestControlInBycullaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
