import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-seawoods",
  },
};

export default function PestControlInSeawoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}