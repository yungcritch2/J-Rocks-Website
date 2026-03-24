import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of custom jewelry pieces — custom chains, pendants, rings, and bracelets crafted with premium materials and expert craftsmanship.",
  keywords: [
    "custom jewelry gallery",
    "custom chains",
    "custom pendants",
    "custom rings",
    "custom bracelets",
    "luxury jewelry portfolio",
  ],
};

export default function GalleryPage() {
  return <GalleryContent />;
}
