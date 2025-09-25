import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/rodents-control-mumbai",
  },
};

export default function RodentsControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}