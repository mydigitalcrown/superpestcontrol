import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-nahur",
  },
};

export default function PestControlInNahurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}