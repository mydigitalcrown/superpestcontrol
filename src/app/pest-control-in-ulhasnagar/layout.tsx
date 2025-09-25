import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ulhasnagar",
  },
};

export default function PestControlInUlhasnagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}