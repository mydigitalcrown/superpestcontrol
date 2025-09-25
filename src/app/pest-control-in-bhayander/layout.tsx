import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bhayander",
  },
};

export default function PestControlInBhayanderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}