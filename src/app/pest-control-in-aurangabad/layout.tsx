import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-aurangabad",
  },
};

export default function PestControlInAurangabadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}