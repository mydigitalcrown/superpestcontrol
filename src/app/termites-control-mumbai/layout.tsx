import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/termites-control-mumbai",
  },
};

export default function TermitesControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}