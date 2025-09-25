import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-lokhandwala",
  },
};

export default function PestControlInLokhandwalaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}