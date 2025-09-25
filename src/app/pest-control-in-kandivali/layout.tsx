import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kandivali",
  },
};

export default function PestControlInKandivaliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}