import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-sangli",
  },
};

export default function PestControlInSangliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}