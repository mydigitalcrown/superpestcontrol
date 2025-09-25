import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-byculla",
  },
};

export default function PestControlInBycullaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}