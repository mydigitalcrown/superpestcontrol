import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Andheri | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Andheri. 100% guaranteed results. Call 8097941077 for same-day service!',
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
