import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-panvel",
  },
};

export default function PestControlInPanvelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}