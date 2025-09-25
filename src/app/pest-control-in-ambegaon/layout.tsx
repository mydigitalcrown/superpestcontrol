import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ambegaon",
  },
};

export default function PestControlInAmbegaonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}