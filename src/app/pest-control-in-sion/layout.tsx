import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-sion",
  },
};

export default function PestControlInSionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}