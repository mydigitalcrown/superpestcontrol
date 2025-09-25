import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/bed-bug-control-mumbai",
  },
};

export default function BedBugControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}