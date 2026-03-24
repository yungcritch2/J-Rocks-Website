"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GalleryCard from "@/components/GalleryCard";
import Lightbox from "@/components/Lightbox";
import CTAButton from "@/components/CTAButton";

const allPieces = [
  { title: "Diamond Cuban Link Chain", category: "Chains" },
  { title: "Gold Rope Chain", category: "Chains" },
  { title: "Platinum Franco Chain", category: "Chains" },
  { title: "Custom Name Pendant", category: "Pendants" },
  { title: "Heart Locket Pendant", category: "Pendants" },
  { title: "Diamond Cross Pendant", category: "Pendants" },
  { title: "Emerald Signet Ring", category: "Rings" },
  { title: "Custom Engagement Ring", category: "Rings" },
  { title: "Diamond Pinky Ring", category: "Rings" },
  { title: "Iced Tennis Bracelet", category: "Bracelets" },
  { title: "Gold Cuff Bracelet", category: "Bracelets" },
  { title: "Charm Link Bracelet", category: "Bracelets" },
];

const filters = ["All", "Chains", "Pendants", "Rings", "Bracelets"];

export default function GalleryContent() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<{ title: string; category: string } | null>(null);

  const filtered = active === "All" ? allPieces : allPieces.filter((p) => p.category === active);

  return (
    <>
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Portfolio"
            title="Custom Jewelry Gallery"
            subtitle="Every piece in our gallery was designed from scratch for a real client. Browse our work and imagine what we can create for you."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 text-xs font-light tracking-wider uppercase rounded-sm transition-all duration-200 ${
                  active === f
                    ? "bg-charcoal text-white"
                    : "bg-white text-gray-warm border border-gray-200 hover:border-gold/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((piece, i) => (
                <GalleryCard
                  key={piece.title}
                  title={piece.title}
                  category={piece.category}
                  index={i}
                  onClick={() => setLightbox(piece)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
            Like What You See?
          </h2>
          <p className="text-base font-light text-gray-warm leading-relaxed mb-8">
            Every piece starts with an idea. Let&apos;s talk about yours.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Start Your Custom Piece
          </CTAButton>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
        title={lightbox?.title ?? ""}
        category={lightbox?.category ?? ""}
      />
    </>
  );
}
