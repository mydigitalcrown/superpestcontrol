import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-santacruz",
  },
};

export default function PestControlInSantacruzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}