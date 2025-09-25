import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kalyan",
  },
};

export default function PestControlInKalyanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}