"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import GalleryCard from "@/components/GalleryCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";

const categories = [
  {
    title: "Custom Chains",
    description: "Bold, elegant chains tailored to your exact specifications.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Custom Pendants",
    description: "One-of-a-kind pendants that carry your story and style.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Custom Rings",
    description: "Rings designed to mark your moments with lasting elegance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Ring band */}
        <circle cx="12" cy="15" r="6" strokeWidth={1} />
        {/* Prongs connecting diamond to ring */}
        <line x1="10.5" y1="9.5" x2="11" y2="7" strokeWidth={1} />
        <line x1="13.5" y1="9.5" x2="13" y2="7" strokeWidth={1} />
        {/* Diamond gem */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.5 5L9.5 3h5l1 2H8.5zM8.5 5L12 8l3.5-3" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    title: "Share Your Idea",
    description: "Tell us your vision — a sketch, a photo, or just a feeling. We start with you.",
  },
  {
    title: "Design Consultation",
    description: "We refine your concept together, choosing materials, dimensions, and details.",
  },
  {
    title: "Crafting Your Piece",
    description: "Our artisans bring your design to life with meticulous craftsmanship.",
  },
  {
    title: "Final Delivery",
    description: "Your finished piece, beautifully presented and ready to wear with pride.",
  },
];

const galleryItems = [
  { title: "Diamond Cuban Link", category: "Chains" },
  { title: "Custom Name Pendant", category: "Pendants" },
  { title: "Princess Cut Solitaire Ring", category: "Rings", image: "/Open Art Ring Photo 2.png" },
  { title: "Iced Tennis Bracelet", category: "Bracelets" },
  { title: "Gold Rope Chain", category: "Chains" },
  { title: "Heart Locket Pendant", category: "Pendants" },
];

const testimonials = [
  {
    quote: "J Rock turned my rough sketch into the most incredible chain I've ever owned. The attention to detail was unreal. This is my go-to jeweler for life.",
    name: "Marcus T.",
    piece: "Custom Cuban Link Chain",
  },
  {
    quote: "I wanted something truly unique for my wife's anniversary gift. They designed a pendant that brought her to tears. Absolute perfection.",
    name: "David R.",
    piece: "Custom Diamond Pendant",
  },
  {
    quote: "From the first consultation to the final reveal, the experience was seamless and luxurious. The ring exceeded every expectation I had.",
    name: "Alicia M.",
    piece: "Custom Engagement Ring",
  },
];

const whyChooseUs = [
  {
    title: "One-of-One Designs",
    description: "Every piece is uniquely crafted. No templates, no mass production — just your vision brought to life.",
  },
  {
    title: "Premium Materials",
    description: "We source only the finest gold, platinum, diamonds, and gemstones for lasting quality.",
  },
  {
    title: "Expert Craftsmanship",
    description: "Decades of combined experience ensure every detail is executed with precision.",
  },
  {
    title: "Personal Service",
    description: "Work directly with our designers for a truly personalized and collaborative experience.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Marble background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Marble Background.jpg')" }}
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-white/40" />

        <div className="relative max-w-5xl mx-auto px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs font-light tracking-[0.4em] uppercase text-gold mb-6">
              Luxury Custom Jewelry
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-charcoal leading-[1.1] mb-6"
          >
            Custom Jewelry, Made to{" "}
            <span className="text-gold-gradient">Mean Something</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg font-light text-gray-warm leading-relaxed mb-10"
          >
            We design and craft one-of-a-kind jewelry pieces tailored to your vision. From concept
            to creation, every detail is intentional — because your piece should be as unique as
            you are.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CTAButton href="/contact" variant="primary" size="lg">
              Start Your Custom Piece
            </CTAButton>
            <CTAButton href="/gallery" variant="outline" size="lg">
              View Gallery
            </CTAButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 border border-gray-300 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What We Create"
            title="Custom Categories"
            subtitle="From chains to rings, every piece is designed from scratch and built around your personal style."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href="/gallery"
                  className="block bg-white rounded-sm p-8 text-center border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-cream flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm font-light text-gray-warm leading-relaxed">
                    {cat.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="The Process"
            title="How It Works"
            subtitle="Bringing your vision to life in four simple steps."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, i) => (
              <ProcessStep
                key={step.title}
                number={i + 1}
                title={step.title}
                description={step.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED GALLERY ===== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Work"
            title="Featured Pieces"
            subtitle="A glimpse into the custom creations we've brought to life for our clients."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <GalleryCard
                key={item.title}
                title={item.title}
                category={item.category}
                image={item.image}
                index={i}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/gallery" variant="outline">
              View Full Gallery
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="The Difference"
            title="Why Choose J Rock's"
            subtitle="We don't just make jewelry — we create pieces that carry meaning."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-sm hover:bg-cream/50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-gold rounded-full" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-gray-warm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Client Stories"
            title="What Our Clients Say"
            subtitle="Real experiences from real clients who trusted us with their vision."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                piece={t.piece}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-light tracking-[0.3em] uppercase text-gold-light mb-4 block">
              Ready to Begin?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Turn Your Vision Into a One-of-One Piece
            </h2>
            <p className="text-base font-light text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you have a detailed design in mind or just a spark of inspiration, we&apos;re
              here to make it real. Start the conversation today.
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
