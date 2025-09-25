import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bavdhan",
  },
};

export default function PestControlInBavdhanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}