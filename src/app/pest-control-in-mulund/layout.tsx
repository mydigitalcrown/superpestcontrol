import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-mulund",
  },
};

export default function PestControlInMulundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}