import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-taloja",
  },
};

export default function PestControlInTalojaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}