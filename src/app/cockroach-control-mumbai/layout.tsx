import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/cockroach-control-mumbai",
  },
};

export default function CockroachControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}