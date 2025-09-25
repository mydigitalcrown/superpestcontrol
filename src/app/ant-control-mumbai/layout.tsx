import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://superpestcontrol.in/ant-control-mumbai",
  },
};

export default function AntControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}