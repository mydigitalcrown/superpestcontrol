import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Ambegaon | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Ambegaon. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Ambegaon, termite control Ambegaon, cockroach control Ambegaon, rodent control Ambegaon, bed bug control Ambegaon, ant control Ambegaon, pest control services Ambegaon, fumigation services Ambegaon',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ambegaon",
  },
};

export default function PestControlInAmbegaonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
