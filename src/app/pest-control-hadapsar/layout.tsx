import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-hadapsar",
  },
};

export default function PestControlHadapsarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}