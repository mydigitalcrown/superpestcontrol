import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-hinjewadi",
  },
};

export default function PestControlInHinjewadiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}