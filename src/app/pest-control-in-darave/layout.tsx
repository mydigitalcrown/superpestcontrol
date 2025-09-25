import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-darave",
  },
};

export default function PestControlInDaraveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}