import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-diva",
  },
};

export default function PestControlInDivaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}