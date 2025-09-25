import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kamothe",
  },
};

export default function PestControlInKamotheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}