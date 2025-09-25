import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kolhapur",
  },
};

export default function PestControlInKolhapurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}