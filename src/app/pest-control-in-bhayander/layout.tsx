import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Bhayander | Super Pest Control Mumbai',
  description: 'Expert pest control services in Bhayander East & West. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Bhayander, termite control Bhayander, cockroach control Bhayander, rodent control Bhayander, bed bug control Bhayander, ant control Bhayander, pest control services Bhayander, fumigation services Bhayander, pest control Bhayander East, pest control Bhayander West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bhayander",
  },
};

export default function PestControlInBhayanderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
