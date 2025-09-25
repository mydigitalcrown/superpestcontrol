import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kharghar",
  },
};

export default function PestControlInKhargharLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}