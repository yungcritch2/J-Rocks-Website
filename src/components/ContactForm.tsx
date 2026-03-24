"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pieceType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your inquiry! We will be in touch shortly.");
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm font-light text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-colors duration-200";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-light tracking-wider uppercase text-gray-warm mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-light tracking-wider uppercase text-gray-warm mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-light tracking-wider uppercase text-gray-warm mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="pieceType" className="block text-xs font-light tracking-wider uppercase text-gray-warm mb-2">
            Type of Piece *
          </label>
          <select
            id="pieceType"
            name="pieceType"
            required
            value={formData.pieceType}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select piece type</option>
            <option value="chain">Custom Chain</option>
            <option value="pendant">Custom Pendant</option>
            <option value="ring">Custom Ring</option>
            <option value="bracelet">Custom Bracelet</option>
            <option value="earrings">Custom Earrings</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="budget" className="block text-xs font-light tracking-wider uppercase text-gray-warm mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select budget range</option>
            <option value="under-500">Under $500</option>
            <option value="500-1000">$500 - $1,000</option>
            <option value="1000-2500">$1,000 - $2,500</option>
            <option value="2500-5000">$2,500 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000+">$10,000+</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-xs font-light tracking-wider uppercase text-gray-warm mb-2">
            Desired Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select timeline</option>
            <option value="flexible">Flexible</option>
            <option value="1-2-weeks">1-2 Weeks</option>
            <option value="2-4-weeks">2-4 Weeks</option>
            <option value="1-2-months">1-2 Months</option>
            <option value="3-months+">3+ Months</option>
          </select>
        </div>
      </div>

      {/* Inspiration Upload Placeholder */}
      <div>
        <label className="block text-xs font-light tracking-wider uppercase text-gray-warm mb-2">
          Upload Inspiration Images
        </label>
        <div className="border-2 border-dashed border-gray-200 rounded-sm p-8 text-center hover:border-gold/40 transition-colors duration-200 cursor-pointer">
          <svg
            className="w-8 h-8 mx-auto mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm font-light text-gray-400">
            Drag &amp; drop images here or click to browse
          </p>
          <p className="text-xs font-light text-gray-300 mt-1">PNG, JPG up to 10MB</p>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-light tracking-wider uppercase text-gray-warm mb-2">
          Describe Your Vision *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about the custom piece you envision — materials, style, meaning, or any inspiration..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-8 py-4 bg-charcoal text-white text-sm font-light tracking-wider uppercase hover:bg-gold transition-colors duration-300 rounded-sm"
      >
        Submit Inquiry
      </motion.button>
    </motion.form>
  );
}
