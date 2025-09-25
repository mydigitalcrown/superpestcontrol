import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-turbhe",
  },
};

export default function PestControlInTurbheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}