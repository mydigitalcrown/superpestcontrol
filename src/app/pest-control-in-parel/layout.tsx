import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-parel",
  },
};

export default function PestControlInParelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}