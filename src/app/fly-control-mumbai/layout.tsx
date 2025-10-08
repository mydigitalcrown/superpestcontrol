import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Fly Control Services in Mumbai | House Fly & Fruit Fly Management",
  },
  description: "Professional fly control in Mumbai. Eliminate house flies, fruit flies & drain flies with UV traps, sprays & preventive measures. Free inspection. Call +91 80979 41077",
  keywords: "fly control mumbai, house fly control, fruit fly treatment, fly pest control, fly exterminator mumbai, UV fly trap",
  alternates: {
    canonical: "https://superpestcontrol.in/fly-control-mumbai",
  },
};

export default function FlyControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}