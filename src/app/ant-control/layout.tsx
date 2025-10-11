import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Ant Control Services Mumbai | Professional Ant Removal & Treatment",
  },
  description: "Expert ant control services in Mumbai. Eliminate all types of ants with safe, effective treatments. Free inspection, guaranteed results. Call +91 80979 41077",
  keywords: "ant control mumbai, ant removal, ant pest control, ant treatment mumbai, ant exterminator",
  alternates: {
    canonical: "https://superpestcontrol.in/ant-control",
    languages: {
      'x-default': 'https://superpestcontrol.in/ant-control',
      'en-IN': 'https://superpestcontrol.in/ant-control',
    }
  },
};

export default function AntControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
