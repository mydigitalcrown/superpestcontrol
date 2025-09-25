import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-bhayander",
  },
};

export default function PestControlBhayanderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}