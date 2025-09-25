import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-new-panvel",
  },
};

export default function PestControlInNewPanvelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}