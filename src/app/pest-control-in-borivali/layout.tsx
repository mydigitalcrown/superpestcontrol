import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-borivali",
  },
};

export default function PestControlInBorivaliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}