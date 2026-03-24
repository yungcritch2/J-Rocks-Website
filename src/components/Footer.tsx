import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/process", label: "Custom Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "TikTok" },
  { href: "#", label: "Pinterest" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-semibold tracking-wide mb-4">
              J Rock&apos;s
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
              Crafting one-of-a-kind custom jewelry pieces that tell your story. Every piece is
              designed with intention and built to last a lifetime.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-light tracking-[0.2em] uppercase text-gray-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-gray-300 hover:text-gold-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-light tracking-[0.2em] uppercase text-gray-400 mb-4">
              Follow Us
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-gray-300 hover:text-gold-light transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-light tracking-[0.2em] uppercase text-gray-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-light text-gray-300">
              <li>info@jrockscustomjewelry.com</li>
              <li>(555) 123-4567</li>
              <li>By Appointment Only</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-gray-500">
            &copy; {new Date().getFullYear()} J Rock&apos;s Custom Jewelry. All rights reserved.
          </p>
          <p className="text-xs font-light text-gray-500">
            Luxury Custom Jewelry &mdash; Designed With Intention
          </p>
        </div>
      </div>
    </footer>
  );
}
