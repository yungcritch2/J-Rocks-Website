import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about J Rock's Custom Jewelry — our passion for craftsmanship, our commitment to quality, and the story behind every custom piece we create.",
  keywords: [
    "about J Rock's Custom Jewelry",
    "custom jewelry designer",
    "luxury jewelry craftsmanship",
    "personalized jewelry service",
  ],
};

export default function AboutPage() {
  return <AboutContent />;
}
