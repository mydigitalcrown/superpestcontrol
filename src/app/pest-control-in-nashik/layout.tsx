import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-nashik",
  },
};

export default function PestControlInNashikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}