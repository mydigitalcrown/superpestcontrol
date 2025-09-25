import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ghansoli",
  },
};

export default function PestControlInGhansoliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}