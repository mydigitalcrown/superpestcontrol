import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Spider Control Mumbai | Professional Spider Removal Services",
  },
  description: "Professional spider control in Mumbai. Eliminate all types of spiders safely. Free inspection, guaranteed results. Call +91 80979 41077",
  keywords: "spider control mumbai, spider removal, spider pest control, spider exterminator",
  alternates: {
    canonical: "https://superpestcontrol.in/spider-control",
    languages: {
      'x-default': 'https://superpestcontrol.in/spider-control',
      'en-IN': 'https://superpestcontrol.in/spider-control',
    }
  },
};

export default function SpiderControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
