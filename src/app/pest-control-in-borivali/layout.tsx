import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Borivali | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Borivali. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Borivali, termite control Borivali, cockroach control Borivali, rodent control Borivali, bed bug control Borivali, ant control Borivali, pest control services Borivali, fumigation services Borivali, pest control Borivali East, pest control Borivali West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-borivali",
  },
};

export default function PestControlInBorivaliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
