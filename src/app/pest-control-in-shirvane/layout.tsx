import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-shirvane",
  },
};

export default function PestControlInShirvaneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}