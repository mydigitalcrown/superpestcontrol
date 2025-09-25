import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-juinagar",
  },
};

export default function PestControlInJuinagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}