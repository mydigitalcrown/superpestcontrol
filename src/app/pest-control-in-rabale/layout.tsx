import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-rabale",
  },
};

export default function PestControlInRabaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}