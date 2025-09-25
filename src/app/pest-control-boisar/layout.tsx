import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-boisar",
  },
};

export default function PestControlBoisarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}