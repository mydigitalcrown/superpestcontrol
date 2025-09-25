import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-belapur",
  },
};

export default function PestControlInBelapurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}