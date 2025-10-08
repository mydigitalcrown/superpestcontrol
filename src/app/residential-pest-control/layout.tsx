import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Residential Pest Control Services | Home Pest Management Solutions",
  },
  description: "Complete residential pest control for homes, apartments & villas. All-inclusive pest management solutions. Call +91 80979 41077",
  keywords: "residential pest control, home pest control services, apartment pest control, house fumigation",
  alternates: {
    canonical: "https://superpestcontrol.in/residential-pest-control",
    languages: {
      'x-default': 'https://superpestcontrol.in/residential-pest-control',
      'en-IN': 'https://superpestcontrol.in/residential-pest-control',
    }
  },
};

export default function ResidentialPestControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
