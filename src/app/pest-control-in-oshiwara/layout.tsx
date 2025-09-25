import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-oshiwara",
  },
};

export default function PestControlInOshiwaraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}