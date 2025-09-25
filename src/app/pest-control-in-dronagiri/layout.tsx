import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dronagiri",
  },
};

export default function PestControlInDronagiriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}