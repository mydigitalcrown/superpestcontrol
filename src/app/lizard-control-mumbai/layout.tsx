import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/lizard-control-mumbai",
  },
};

export default function LizardControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}