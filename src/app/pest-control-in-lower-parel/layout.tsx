import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-lower-parel",
  },
};

export default function PestControlInLowerParelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}