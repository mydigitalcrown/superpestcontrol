import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ahmednagar",
  },
};

export default function PestControlInAhmednagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}