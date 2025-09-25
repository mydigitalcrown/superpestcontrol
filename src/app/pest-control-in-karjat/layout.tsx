import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-karjat",
  },
};

export default function PestControlInKarjatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}