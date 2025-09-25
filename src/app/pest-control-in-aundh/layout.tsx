import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-aundh",
  },
};

export default function PestControlInAundhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}