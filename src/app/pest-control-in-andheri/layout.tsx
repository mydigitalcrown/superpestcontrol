import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Pest Control Services in Andheri | Super Pest Control Mumbai',
  description: 'Expert pest control services in Andheri East & West. Termite, cockroach, rodent, bed bug control with 10+ years experience. Licensed professionals, 24/7 service. Call +91-8097941077 for free inspection.',
  keywords: 'pest control Andheri, termite control Andheri, cockroach control Andheri, rodent control Andheri, bed bug control Andheri, ant control Andheri, pest control services Andheri, fumigation services Andheri, pest control Andheri East, pest control Andheri West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-andheri",
  },
};

export default function PestControlInAndheriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
