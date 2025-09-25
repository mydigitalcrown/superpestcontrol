import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-cbd-belapur",
  },
};

export default function PestControlInCbdBelapurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}