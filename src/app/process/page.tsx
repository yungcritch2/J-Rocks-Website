import type { Metadata } from "next";
import ProcessContent from "./ProcessContent";

export const metadata: Metadata = {
  title: "Custom Process",
  description:
    "Learn how our custom jewelry process works — from initial consultation to final delivery. We design and craft luxury pieces tailored to your vision.",
  keywords: [
    "custom jewelry process",
    "how to order custom jewelry",
    "custom jewelry consultation",
    "bespoke jewelry design",
    "custom jewelry services",
  ],
};

export default function ProcessPage() {
  return <ProcessContent />;
}
