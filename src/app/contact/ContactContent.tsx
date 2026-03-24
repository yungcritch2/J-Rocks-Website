"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    label: "Email",
    value: "info@jrockscustomjewelry.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "(555) 123-4567",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "By Appointment Only",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Pinterest", href: "#" },
];

export default function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-light tracking-[0.4em] uppercase text-gold mb-4 block">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight mb-6">
              Start Your Custom Piece
            </h1>
            <p className="text-base sm:text-lg font-light text-gray-warm leading-relaxed max-w-2xl mx-auto">
              Have an idea for a custom piece? We&apos;d love to hear about it. Fill out the form
              below and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-sm p-8 sm:p-10 border border-gray-100 shadow-sm">
                <h2 className="font-heading text-2xl font-semibold text-charcoal mb-2">
                  Custom Jewelry Inquiry
                </h2>
                <p className="text-sm font-light text-gray-warm mb-8">
                  Tell us about the piece you envision and we&apos;ll take it from there.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Contact Details */}
                <div className="bg-white rounded-sm p-8 border border-gray-100 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-6">
                    Contact Details
                  </h3>
                  <ul className="space-y-5">
                    {contactInfo.map((info) => (
                      <li key={info.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-gold flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-xs font-light tracking-wider uppercase text-gray-400 mb-0.5">
                            {info.label}
                          </p>
                          <p className="text-sm font-light text-charcoal">{info.value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social */}
                <div className="bg-white rounded-sm p-8 border border-gray-100 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-6">
                    Follow Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-xs font-light tracking-wider uppercase border border-gray-200 text-gray-warm hover:border-gold hover:text-gold rounded-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-charcoal rounded-sm p-8">
                  <h3 className="font-heading text-xl font-semibold text-white mb-4">
                    Response Time
                  </h3>
                  <p className="text-sm font-light text-gray-400 leading-relaxed">
                    We respond to all inquiries within 24 hours. For urgent requests, please
                    call us directly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
