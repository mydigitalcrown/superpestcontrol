import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ambarnath",
  },
};

export default function PestControlInAmbarnathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}