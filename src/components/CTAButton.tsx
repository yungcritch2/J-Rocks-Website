"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
}: CTAButtonProps) {
  const baseClasses =
    "inline-block font-light tracking-wider uppercase transition-all duration-300 rounded-sm text-center";

  const sizeClasses = {
    sm: "px-5 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-sm",
  };

  const variantClasses = {
    primary: "bg-charcoal text-white hover:bg-gold",
    secondary: "bg-gold text-white hover:bg-charcoal",
    outline:
      "bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
