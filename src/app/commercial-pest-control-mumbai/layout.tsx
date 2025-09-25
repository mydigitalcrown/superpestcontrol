import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/commercial-pest-control-mumbai",
  },
};

export default function CommercialPestControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}