import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dadar",
  },
};

export default function PestControlInDadarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}