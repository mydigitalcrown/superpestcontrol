import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bandra-kurla-complex",
  },
};

export default function PestControlInBandraKurlaComplexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}