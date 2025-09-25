import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-mira-bhayandar",
  },
};

export default function PestControlInMiraBhayandarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}