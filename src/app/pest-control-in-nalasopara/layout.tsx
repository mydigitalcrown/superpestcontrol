import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-nalasopara",
  },
};

export default function PestControlInNalasoparaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}