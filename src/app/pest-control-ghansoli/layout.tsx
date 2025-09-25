import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-ghansoli",
  },
};

export default function PestControlGhansoliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}