import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-malad",
  },
};

export default function PestControlInMaladLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}