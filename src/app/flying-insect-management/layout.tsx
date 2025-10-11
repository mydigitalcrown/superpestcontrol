import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Flying Insect Management Services | Professional Fly & Moth Control",
  },
  description: "Expert flying insect management services. Control flies, moths, wasps & gnats with UV traps & integrated solutions. Call +91 80979 41077",
  keywords: "flying insect control, fly management services, moth control, wasp removal",
  alternates: {
    canonical: "https://superpestcontrol.in/flying-insect-management",
    languages: {
      'x-default': 'https://superpestcontrol.in/flying-insect-management',
      'en-IN': 'https://superpestcontrol.in/flying-insect-management',
    }
  },
};

export default function FlyingInsectManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
