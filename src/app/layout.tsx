import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "J Rock's Custom Jewelry | Luxury Custom Pieces Designed Just for You",
    template: "%s | J Rock's Custom Jewelry",
  },
  description:
    "Premium custom jewelry designed to your vision. Custom chains, pendants, rings, and bracelets crafted with exceptional quality and attention to detail.",
  keywords: [
    "custom jewelry",
    "custom chains",
    "custom pendants",
    "custom rings",
    "custom bracelets",
    "luxury custom jewelry",
    "personalized jewelry",
    "custom jewelry designer",
  ],
  openGraph: {
    title: "J Rock's Custom Jewelry | Luxury Custom Pieces",
    description:
      "Premium custom jewelry designed to your vision. Turn your idea into a one-of-one masterpiece.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col marble-bg">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
