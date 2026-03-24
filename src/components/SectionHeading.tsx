"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <span
          className={`text-xs font-light tracking-[0.3em] uppercase ${
            light ? "text-gray-400" : "text-gold"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold mt-3 mb-4 ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base font-light leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-400" : "text-gray-warm"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
