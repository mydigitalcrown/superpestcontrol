import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Airoli | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Airoli. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Airoli, termite control Airoli, cockroach control Airoli, rodent control Airoli, bed bug control Airoli, ant control Airoli, pest control services Airoli, fumigation services Airoli',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-airoli",
  },
};

export default function PestControlInAiroliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
