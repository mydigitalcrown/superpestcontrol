import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Ant Control Services in Mumbai | Permanent Ant Removal Solutions",
  },
  description: "Professional ant control services in Mumbai. Eliminate black ants, sugar ants, and fire ants with safe, effective treatments. Free inspection, 6-month warranty. Call +91 80979 41077",
  keywords: "ant control mumbai, ant pest control, ant removal mumbai, sugar ant control, fire ant treatment, carpenter ant removal, ant exterminator mumbai",
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