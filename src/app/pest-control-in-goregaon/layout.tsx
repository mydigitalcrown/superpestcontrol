import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-goregaon",
  },
};

export default function PestControlInGoregaonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}