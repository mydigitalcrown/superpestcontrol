import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-mumbra",
  },
};

export default function PestControlInMumbraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}