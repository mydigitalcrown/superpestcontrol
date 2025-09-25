import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-chembur",
  },
};

export default function PestControlInChemburLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}