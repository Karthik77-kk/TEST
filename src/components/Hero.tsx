"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=2400&h=1400&fit=crop"
          alt="Luxury travel destination"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-aurora-dark/80 via-aurora-dark/60 to-aurora-dark" />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-aurora-cyan/10 via-transparent to-aurora-magenta/10 animate-pulse" />
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 z-0 noise-overlay" />

      {/* Aurora Blob */}
      <div className="absolute inset-0 z-0 aurora-blob" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-aurora-cyan animate-pulse" />
            <span className="text-sm text-aurora-text-muted">
              Ultra-Premium Concierge Travel
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-6"
          >
            <span className="text-aurora-text">Beyond</span>
            <br />
            <span className="gradient-text">First Class.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-aurora-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Your personal gateway to the world&apos;s most extraordinary destinations.
            White-glove service, curated experiences, and memories that transcend the ordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection("#concierge")}
              className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-magenta text-white font-medium text-lg overflow-hidden transition-transform hover:scale-105 hover:glow-cyan"
            >
              <span className="relative z-10">Design My Trip</span>
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-magenta via-aurora-purple to-aurora-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <button
              onClick={() => scrollToSection("#destinations")}
              className="w-full sm:w-auto px-8 py-4 rounded-full glass text-aurora-text font-medium text-lg hover:bg-aurora-glass transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Explore Destinations
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: "500+", label: "Exclusive Destinations" },
              { value: "50+", label: "Private Jets" },
              { value: "24/7", label: "Concierge Service" },
              { value: "15K+", label: "Elite Members" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold font-heading gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-aurora-text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-aurora-text-muted flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-aurora-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
