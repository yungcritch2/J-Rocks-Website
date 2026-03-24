"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const steps = [
  {
    number: "01",
    title: "Consultation",
    subtitle: "Share Your Vision",
    description:
      "It all starts with a conversation. Tell us about the piece you envision — share sketches, photos, inspiration, or just describe the feeling you want. We listen carefully to understand your style, preferences, and the meaning behind your piece.",
    details: [
      "Free initial consultation",
      "Share inspiration images or sketches",
      "Discuss materials, style, and budget",
      "No commitment required",
    ],
  },
  {
    number: "02",
    title: "Concept & Design",
    subtitle: "Refine the Details",
    description:
      "Our designers take your ideas and craft a detailed concept. We'll present design options, material recommendations, and a transparent quote. This is a collaborative process — we refine until it's exactly right.",
    details: [
      "Custom design renderings",
      "Material and stone selection",
      "Detailed pricing breakdown",
      "Revisions until you're satisfied",
    ],
  },
  {
    number: "03",
    title: "Approval",
    subtitle: "Confirm Your Piece",
    description:
      "Once the design is perfected, you'll review and approve the final concept. We ensure every dimension, material, and detail meets your expectations before production begins. Your approval is our green light.",
    details: [
      "Final design review",
      "Dimension and specification confirmation",
      "Production timeline communicated",
      "Secure deposit to begin crafting",
    ],
  },
  {
    number: "04",
    title: "Production",
    subtitle: "Crafting Your Masterpiece",
    description:
      "This is where the magic happens. Our skilled artisans bring your approved design to life using premium materials and meticulous techniques. Every detail is executed with precision and care.",
    details: [
      "Expert handcrafted construction",
      "Premium materials and gemstones",
      "Quality checkpoints throughout",
      "Progress updates along the way",
    ],
  },
  {
    number: "05",
    title: "Delivery",
    subtitle: "The Reveal",
    description:
      "Your finished piece is polished, inspected, and beautifully packaged. Whether you pick it up in person or receive it via secure delivery, the moment you see your custom creation is one you won't forget.",
    details: [
      "Final quality inspection",
      "Premium packaging and presentation",
      "Secure shipping or in-person pickup",
      "Care instructions included",
    ],
  },
];

export default function ProcessContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4 block">
              From Vision to Reality
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight mb-6">
              The Custom Process
            </h1>
            <p className="text-base sm:text-lg font-light text-gray-warm leading-relaxed max-w-2xl mx-auto">
              Creating a custom piece should be as special as wearing one. Here&apos;s how we turn
              your idea into a one-of-a-kind masterpiece.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 ${
                i < steps.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              {/* Number */}
              <div className="lg:col-span-2 flex lg:justify-center">
                <span className="font-heading text-6xl lg:text-7xl font-bold text-gold/20">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="lg:col-span-10">
                <span className="text-xs font-light tracking-[0.2em] uppercase text-gold mb-2 block">
                  {step.subtitle}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal mb-4">
                  {step.title}
                </h2>
                <p className="text-sm font-light text-gray-warm leading-relaxed mb-6 max-w-2xl">
                  {step.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-sm font-light text-charcoal">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline note */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Timelines"
            title="How Long Does It Take?"
            subtitle="Every piece is unique, so timelines vary based on complexity, materials, and design details."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { label: "Simple Pieces", time: "1–2 Weeks", desc: "Straightforward designs with standard materials" },
              { label: "Standard Pieces", time: "2–4 Weeks", desc: "Custom designs with selected stones or engraving" },
              { label: "Complex Pieces", time: "4–8 Weeks", desc: "Intricate designs with rare materials or stones" },
            ].map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6"
              >
                <p className="font-heading text-3xl font-semibold text-gold mb-2">
                  {t.time}
                </p>
                <p className="font-heading text-lg font-semibold text-charcoal mb-1">
                  {t.label}
                </p>
                <p className="text-xs font-light text-gray-warm">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-6">
              Ready to Start the Process?
            </h2>
            <p className="text-base font-light text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Your custom piece is just a conversation away. Reach out and let&apos;s bring your
              vision to life.
            </p>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Begin Your Consultation
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
