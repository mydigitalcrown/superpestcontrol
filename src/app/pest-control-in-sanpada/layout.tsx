import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-sanpada",
  },
};

export default function PestControlInSanpadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}