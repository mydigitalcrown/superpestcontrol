import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Wood Borer Control in Mumbai | Furniture & Wood Protection Treatment",
  },
  description: "Professional wood borer control services in Mumbai. Protect furniture, doors & wooden structures from wood borer infestation. Expert treatment. Call +91 80979 41077",
  keywords: "wood borer control mumbai, wood borer treatment, furniture pest control, wood borer exterminator, wood protection mumbai",
  alternates: {
    canonical: "https://superpestcontrol.in/wood-borer-control-mumbai",
  },
};

export default function WoodBorerControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
