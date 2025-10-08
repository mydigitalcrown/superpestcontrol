import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spider Control Services in Mumbai | Spider Removal & Web Treatment",
  description: "Professional spider control in Mumbai. Eliminate house spiders, jumping spiders & huntsman spiders. Safe treatments for homes & offices. Free inspection. Call +91 80979 41077",
  keywords: "spider control mumbai, spider removal, spider pest control, spider exterminator mumbai, spider web treatment, arachnid control",
  alternates: {
    canonical: "https://superpestcontrol.in/spider-control-mumbai",
  },
};

export default function SpiderControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}