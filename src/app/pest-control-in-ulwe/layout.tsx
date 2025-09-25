import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ulwe",
  },
};

export default function PestControlInUlweLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}