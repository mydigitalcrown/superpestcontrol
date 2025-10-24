import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Alibag | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Alibag. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Alibag, termite control Alibag, cockroach control Alibag, rodent control Alibag, bed bug control Alibag, ant control Alibag, pest control services Alibag, fumigation services Alibag',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-alibag",
  },
};

export default function PestControlInAlibagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
