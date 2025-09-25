import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kharadi",
  },
};

export default function PestControlInKharadiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}