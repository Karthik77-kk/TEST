"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { destinations, type Destination } from "@/data";
import { cn } from "@/utilities";

export function DestinationGrid() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <section id="destinations" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-aurora-cyan/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-aurora-cyan text-sm font-medium uppercase tracking-wider">
            Curated Escapes
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-aurora-text mt-4 mb-6">
            Exceptional <span className="gradient-text">Destinations</span>
          </h2>
          <p className="text-aurora-text-muted max-w-2xl mx-auto text-lg">
            Handpicked locations where luxury meets adventure. Each destination offers 
            exclusive access and experiences unavailable to the ordinary traveler.
          </p>
        </motion.div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DestinationCard
                destination={destination}
                onClick={() => setSelectedDestination(destination)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </section>
  );
}

function DestinationCard({
  destination,
  onClick,
}: {
  destination: Destination;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer text-left transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora-cyan shimmer"
      aria-label={`View ${destination.name} destination details`}
    >
      {/* Image */}
      <Image
        src={destination.image}
        alt={`${destination.name} - ${destination.region}`}
        fill
        className={cn(
          "object-cover transition-transform duration-700",
          isHovered && "scale-110"
        )}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-aurora-dark via-aurora-dark/40 to-transparent" />

      {/* Animated Border */}
      <div
        className={cn(
          "absolute inset-0 border-2 rounded-2xl transition-all duration-300",
          isHovered
            ? "border-aurora-cyan/50"
            : "border-transparent"
        )}
      />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Region Badge */}
        <span className="text-aurora-cyan text-xs font-medium uppercase tracking-wider mb-2">
          {destination.region}
        </span>

        {/* Name */}
        <h3 className="text-2xl font-bold font-heading text-aurora-text mb-2">
          {destination.name}
        </h3>

        {/* Vibe */}
        <p className="text-aurora-text-muted text-sm mb-4 line-clamp-2">
          {destination.vibe}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold gradient-text">
            {destination.price}
          </span>
          <span
            className={cn(
              "text-aurora-text-muted text-sm flex items-center gap-1 transition-transform duration-300",
              isHovered && "translate-x-1"
            )}
          >
            View details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>

        {/* Quick Facts (revealed on hover) */}
        <motion.div
          initial={false}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 space-y-2">
            {destination.quickFacts.map((fact, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-aurora-text-muted"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-aurora-cyan" />
                {fact}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </button>
  );
}

function DestinationModal({
  destination,
  onClose,
}: {
  destination: Destination;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-aurora-dark/90 backdrop-blur-md" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl glass rounded-3xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-aurora-text hover:text-aurora-cyan transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative h-64 sm:h-80">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-aurora-card to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="text-aurora-cyan text-sm font-medium uppercase tracking-wider">
            {destination.region}
          </span>
          <h3 className="text-3xl font-bold font-heading text-aurora-text mt-2 mb-4">
            {destination.name}
          </h3>
          <p className="text-aurora-text-muted mb-6">{destination.vibe}</p>

          <div className="space-y-3 mb-8">
            <h4 className="text-sm font-medium text-aurora-text uppercase tracking-wider">
              Exclusive Experiences
            </h4>
            {destination.quickFacts.map((fact, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-aurora-text-muted"
              >
                <div className="w-6 h-6 rounded-full bg-aurora-cyan/10 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-aurora-cyan" />
                </div>
                {fact}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-aurora-text-muted text-sm">Starting from</span>
              <div className="text-2xl font-bold gradient-text">{destination.price}</div>
            </div>
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-aurora-cyan to-aurora-purple text-white font-medium hover:glow-cyan transition-all">
              Request Details
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
