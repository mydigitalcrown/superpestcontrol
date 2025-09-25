import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-badlapur",
  },
};

export default function PestControlInBadlapurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}