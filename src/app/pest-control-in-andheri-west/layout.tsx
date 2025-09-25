import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-andheri-west",
  },
};

export default function PestControlInAndheriWestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}