import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dahisar",
  },
};

export default function PestControlInDahisarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}