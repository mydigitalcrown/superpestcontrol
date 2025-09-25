import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kalamboli",
  },
};

export default function PestControlInKalamboliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}