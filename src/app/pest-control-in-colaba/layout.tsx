import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-colaba",
  },
};

export default function PestControlInColabaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}