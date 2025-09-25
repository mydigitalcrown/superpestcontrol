import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-juhu",
  },
};

export default function PestControlInJuhuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}