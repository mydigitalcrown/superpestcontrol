import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Aundh | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Aundh, Pune. Expert termite control, cockroach treatment, bed bug removal with 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in aundh, best pest control aundh pune, professional pest control aundh, termite control aundh, cockroach control aundh, bed bug control aundh, pest control services aundh pune, affordable pest control aundh, emergency pest control aundh, residential pest control aundh, commercial pest control aundh, pest control near me aundh, same day pest control aundh, eco friendly pest control aundh, licensed pest control aundh, guaranteed pest control aundh, 24/7 pest control aundh, pest exterminators aundh, pest management aundh, fumigation services aundh, anti termite treatment aundh, rodent control aundh, mosquito control aundh, lizard control aundh, spider control aundh, ant control aundh, fly control aundh',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-aundh",
  },
};

export default function PestControlInAundhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
