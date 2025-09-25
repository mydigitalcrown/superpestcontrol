import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ghatkopar",
  },
};

export default function PestControlInGhatkoparLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}