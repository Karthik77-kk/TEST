"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utilities";

const navItems = [
  { name: "Destinations", href: "#destinations" },
  { name: "Experiences", href: "#experiences" },
  { name: "Membership", href: "#membership" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navItems.map((item) =>
        item.href.replace("#", "")
      );
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass py-3" : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              aria-label="Aurora Luxe Travel - Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-aurora-cyan via-aurora-purple to-aurora-magenta flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-lg font-heading">A</span>
              </div>
              <span className="text-lg font-bold font-heading text-aurora-text hidden sm:block">
                AURORA <span className="gradient-text">LUXE</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-300",
                    activeSection === item.href.replace("#", "")
                      ? "text-aurora-cyan"
                      : "text-aurora-text-muted hover:text-aurora-text"
                  )}
                >
                  {item.name}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-aurora-cyan to-aurora-purple"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection("#concierge")}
                className="hidden sm:flex animated-border rounded-full px-6 py-2.5 text-sm font-medium text-aurora-text hover:glow-cyan transition-all duration-300"
              >
                Request Itinerary
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-aurora-text"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden"
            >
              <div className="p-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200",
                      activeSection === item.href.replace("#", "")
                        ? "bg-aurora-glass text-aurora-cyan"
                        : "text-aurora-text-muted hover:bg-aurora-glass hover:text-aurora-text"
                    )}
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("#concierge")}
                  className="w-full animated-border rounded-lg px-4 py-3 text-sm font-medium text-aurora-text text-center mt-4"
                >
                  Request Itinerary
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Floating Mobile CTA */}
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => scrollToSection("#concierge")}
        className="fixed bottom-6 right-6 z-40 sm:hidden animated-border rounded-full p-4 glow-purple"
        aria-label="Request Itinerary"
      >
        <svg
          className="w-6 h-6 text-aurora-text"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </motion.button>
    </>
  );
}
