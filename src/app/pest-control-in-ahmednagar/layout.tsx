import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Ahmednagar | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Ahmednagar. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Ahmednagar, termite control Ahmednagar, cockroach control Ahmednagar, rodent control Ahmednagar, bed bug control Ahmednagar, ant control Ahmednagar, pest control services Ahmednagar, fumigation services Ahmednagar',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ahmednagar",
  },
};

export default function PestControlInAhmednagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
