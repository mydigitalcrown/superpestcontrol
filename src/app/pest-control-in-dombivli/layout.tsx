import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Dombivli | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Dombivli. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Dombivli, termite control Dombivli, cockroach control Dombivli, rodent control Dombivli, bed bug control Dombivli, ant control Dombivli, pest control services Dombivli, fumigation services Dombivli, pest control Dombivli East, pest control Dombivli West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dombivli",
  },
};

export default function PestControlInDombivliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
