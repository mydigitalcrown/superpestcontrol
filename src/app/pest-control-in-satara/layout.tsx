import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-satara",
  },
};

export default function PestControlInSataraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}