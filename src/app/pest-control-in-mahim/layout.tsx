import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-mahim",
  },
};

export default function PestControlInMahimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}