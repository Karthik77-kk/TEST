"use client";

import { motion } from "framer-motion";
import { tiers } from "@/data";
import { cn } from "@/utilities";

export function Tiers() {
  return (
    <section id="membership" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-aurora-dark via-aurora-darker to-aurora-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-aurora-purple/5 via-aurora-magenta/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-aurora-magenta text-sm font-medium uppercase tracking-wider">
            Exclusive Access
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-aurora-text mt-4 mb-6">
            Membership <span className="gradient-text">Tiers</span>
          </h2>
          <p className="text-aurora-text-muted max-w-2xl mx-auto text-lg">
            Join an elite community of travelers who expect nothing less than extraordinary.
            Choose the tier that matches your aspirations.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <TierCard tier={tier} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: (typeof tiers)[0] }) {
  const accentColors = {
    cyan: {
      bg: "from-aurora-cyan/20 to-aurora-cyan/5",
      border: "border-aurora-cyan/30",
      glow: "group-hover:glow-cyan",
      text: "text-aurora-cyan",
      button: "from-aurora-cyan to-aurora-purple",
    },
    purple: {
      bg: "from-aurora-purple/20 to-aurora-purple/5",
      border: "border-aurora-purple/30",
      glow: "group-hover:glow-purple",
      text: "text-aurora-purple",
      button: "from-aurora-purple to-aurora-magenta",
    },
    gold: {
      bg: "from-aurora-gold/20 to-aurora-gold/5",
      border: "border-aurora-gold/30",
      glow: "group-hover:glow-gold",
      text: "text-aurora-gold",
      button: "from-aurora-gold to-aurora-magenta",
    },
  };

  const accent = accentColors[tier.accent as keyof typeof accentColors];

  return (
    <div
      className={cn(
        "group relative h-full glass rounded-2xl p-8 transition-all duration-300",
        accent.glow,
        tier.popular && "ring-2 ring-aurora-purple/50"
      )}
    >
      {/* Popular Badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-aurora-purple to-aurora-magenta text-white text-sm font-medium">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        {/* Icon */}
        <div
          className={cn(
            "w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6",
            accent.bg,
            accent.border,
            "border"
          )}
        >
          <span className={cn("text-2xl font-bold font-heading", accent.text)}>
            {tier.name[0]}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-2xl font-bold font-heading text-aurora-text mb-2">
          {tier.name}
        </h3>

        {/* Tagline */}
        <p className="text-aurora-text-muted text-sm">{tier.tagline}</p>

        {/* Price */}
        <div className="mt-6">
          <span className={cn("text-3xl font-bold font-heading", accent.text)}>
            {tier.price.split(" / ")[0]}
          </span>
          <span className="text-aurora-text-muted text-sm ml-2">/ year</span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {tier.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                accent.bg
              )}
            >
              <svg
                className={cn("w-3 h-3", accent.text)}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-aurora-text-muted text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        className={cn(
          "w-full py-3 rounded-full font-medium text-white transition-all duration-300 hover:scale-[1.02]",
          tier.popular
            ? `bg-gradient-to-r ${accent.button}`
            : "glass border border-aurora-border hover:bg-aurora-glass"
        )}
      >
        {tier.popular ? "Join Now" : "Learn More"}
      </button>
    </div>
  );
}
