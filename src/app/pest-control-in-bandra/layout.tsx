import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bandra",
  },
};

export default function PestControlBandraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}