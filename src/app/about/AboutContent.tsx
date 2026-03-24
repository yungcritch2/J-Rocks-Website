"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const values = [
  {
    title: "Uncompromising Quality",
    description:
      "Every material is hand-selected. Every stone is inspected. Every setting is tested. We never cut corners because your piece deserves nothing less than perfection.",
  },
  {
    title: "Personal Connection",
    description:
      "We work directly with you — no middlemen, no generic processes. Your vision, your input, your piece. It's a true collaboration from start to finish.",
  },
  {
    title: "Timeless Craftsmanship",
    description:
      "Our artisans combine traditional techniques with modern precision. The result is jewelry that looks stunning today and holds its beauty for generations.",
  },
  {
    title: "Meaningful Design",
    description:
      "We believe jewelry should carry meaning. Whether it marks a milestone, honors a memory, or simply expresses who you are — every piece tells a story.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4 block">
              Our Story
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight mb-6">
              The Art of Making It Personal
            </h1>
            <p className="text-base sm:text-lg font-light text-gray-warm leading-relaxed max-w-3xl mx-auto">
              J Rock&apos;s Custom Jewelry was born from a simple belief: the most meaningful pieces
              are the ones designed with intention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm flex items-center justify-center"
            >
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </motion.div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-light tracking-[0.3em] uppercase text-gold mb-4 block">
                How It Started
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-6">
                Built on Passion, Driven by Purpose
              </h2>
              <div className="space-y-4 text-sm font-light text-gray-warm leading-relaxed">
                <p>
                  What started as a deep fascination with metalwork and gemstones has grown into a
                  full-service custom jewelry studio. J Rock&apos;s Custom Jewelry was founded on
                  the idea that everyone deserves a piece of jewelry that truly reflects who they
                  are.
                </p>
                <p>
                  We don&apos;t believe in cookie-cutter designs or mass production. Every piece
                  we create begins with a conversation — understanding your story, your style, and
                  the meaning behind what you want to wear. From there, we design, refine, and
                  handcraft a piece that is entirely yours.
                </p>
                <p>
                  Our studio works with the finest materials — solid gold, platinum, ethically
                  sourced diamonds, and premium gemstones — to ensure every creation meets the
                  highest standards of quality and durability. We take immense pride in our
                  craft, treating every commission as a work of art.
                </p>
                <p>
                  Whether you&apos;re celebrating a milestone, honoring a loved one, or simply
                  expressing your individuality, we&apos;re here to make it happen. At J Rock&apos;s,
                  your vision is our blueprint.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            subtitle="The principles that guide every piece we create."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-sm p-8 border border-gray-100"
              >
                <div className="w-8 h-[2px] bg-gold mb-6" />
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-sm font-light text-gray-warm leading-relaxed">
                  {value.description}
                </p>
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
              Let&apos;s Create Something Extraordinary
            </h2>
            <p className="text-base font-light text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Ready to bring your vision to life? We&apos;d love to hear your ideas and start
              designing your one-of-a-kind piece.
            </p>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Start Your Custom Piece
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
