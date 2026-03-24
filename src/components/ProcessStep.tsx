"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  index: number;
}

export default function ProcessStep({ number, title, description, index }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="text-center group"
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
        <span className="font-heading text-2xl font-semibold text-gold">
          {number}
        </span>
      </div>
      <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
        {title}
      </h3>
      <p className="text-sm font-light text-gray-warm leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </motion.div>
  );
}
