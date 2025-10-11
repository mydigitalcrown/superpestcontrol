import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Versova | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Versova. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Versova, termite control Versova, cockroach control Versova, rodent control Versova, bed bug control Versova, ant control Versova, pest control services Versova Mumbai, fumigation services Versova, pest control Andheri West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-versova",
  },
};

export default function PestControlInVersovaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
