import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/residential",
  },
};

export default function ResidentialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}