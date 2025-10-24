import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Bhiwandi | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Bhiwandi. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Bhiwandi, termite control Bhiwandi, cockroach control Bhiwandi, rodent control Bhiwandi, bed bug control Bhiwandi, ant control Bhiwandi, pest control services Bhiwandi, fumigation services Bhiwandi, pest control Bhiwandi East, pest control Bhiwandi West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bhiwandi",
  },
};

export default function PestControlInBhiwandiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
