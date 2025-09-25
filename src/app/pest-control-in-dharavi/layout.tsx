import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dharavi",
  },
};

export default function PestControlInDharaviLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}