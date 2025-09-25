import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-thane",
  },
};

export default function PestControlInThaneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}