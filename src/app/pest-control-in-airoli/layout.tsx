import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Airoli | Super Pest Control Mumbai',
  description: 'Expert pest control services in Airoli. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
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
