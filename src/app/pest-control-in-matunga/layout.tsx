import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-matunga",
  },
};

export default function PestControlInMatungaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}