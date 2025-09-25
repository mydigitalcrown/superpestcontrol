import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-solapur",
  },
};

export default function PestControlInSolapurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}