import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kopar-khairane",
  },
};

export default function PestControlInKoparKhairaneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}