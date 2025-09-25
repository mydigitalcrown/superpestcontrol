import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-digha",
  },
};

export default function PestControlInDighaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}