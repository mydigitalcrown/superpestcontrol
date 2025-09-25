import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-alibag",
  },
};

export default function PestControlInAlibagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}