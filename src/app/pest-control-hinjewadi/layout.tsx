import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-hinjewadi",
  },
};

export default function PestControlHinjewadiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}