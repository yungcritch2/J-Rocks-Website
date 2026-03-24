import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with J Rock's Custom Jewelry. Submit your custom jewelry inquiry and start designing your one-of-a-kind piece today.",
  keywords: [
    "contact custom jewelry designer",
    "custom jewelry inquiry",
    "order custom jewelry",
    "custom jewelry consultation",
    "personalized jewelry order",
  ],
};

export default function ContactPage() {
  return <ContactContent />;
}
