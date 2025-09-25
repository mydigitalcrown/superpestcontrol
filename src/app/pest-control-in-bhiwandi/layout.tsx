import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bhiwandi",
  },
};

export default function PestControlInBhiwandiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}