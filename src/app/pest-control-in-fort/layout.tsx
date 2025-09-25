import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-fort",
  },
};

export default function PestControlInFortLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}