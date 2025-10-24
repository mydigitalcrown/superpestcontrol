import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Aurangabad | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Aurangabad. 100% guaranteed results. Call 8097941077 for same-day service!',
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
