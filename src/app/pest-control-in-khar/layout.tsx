import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-khar",
  },
};

export default function PestControlInKharLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}