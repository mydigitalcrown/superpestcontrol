import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-baner",
  },
};

export default function PestControlInBanerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}