import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kanjurmarg",
  },
};

export default function PestControlInKanjurmargLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}