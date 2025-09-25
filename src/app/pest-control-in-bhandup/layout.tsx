import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bhandup",
  },
};

export default function PestControlInBhandupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}