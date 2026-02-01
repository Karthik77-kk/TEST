"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data";
import { cn } from "@/utilities";

export function ExperienceList() {
  return (
    <section id="experiences" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-aurora-purple/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-aurora-magenta/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-aurora-purple text-sm font-medium uppercase tracking-wider">
            Beyond Ordinary
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-aurora-text mt-4 mb-6">
            Signature <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-aurora-text-muted max-w-2xl mx-auto text-lg">
            Curated moments that transcend travel. Each experience is designed 
            to create memories that last a lifetime.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group relative",
                index === experiences.length - 1 && experiences.length % 3 === 1 && "md:col-start-1 lg:col-start-2",
                index === experiences.length - 2 && experiences.length % 3 === 2 && "lg:col-start-1",
                index === experiences.length - 1 && experiences.length % 3 === 2 && "lg:col-start-3"
              )}
            >
              <ExperienceCard experience={experience} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const accents = [
    "from-aurora-cyan to-aurora-purple",
    "from-aurora-purple to-aurora-magenta",
    "from-aurora-magenta to-aurora-cyan",
    "from-aurora-gold to-aurora-magenta",
    "from-aurora-cyan to-aurora-gold",
  ];

  const accent = accents[index % accents.length];

  return (
    <div className="h-full glass rounded-2xl p-6 hover:bg-aurora-glass transition-all duration-300 group-hover:glow-purple">
      {/* Icon */}
      <div
        className={cn(
          "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300",
          accent
        )}
      >
        {experience.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold font-heading text-aurora-text mb-3 group-hover:gradient-text transition-all duration-300">
        {experience.title}
      </h3>

      {/* Description */}
      <p className="text-aurora-text-muted text-sm mb-6 leading-relaxed">
        {experience.description}
      </p>

      {/* Highlights */}
      <div className="space-y-2">
        {experience.highlights.map((highlight, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm text-aurora-text-muted"
          >
            <svg
              className="w-4 h-4 text-aurora-cyan flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {highlight}
          </div>
        ))}
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:animated-border transition-all duration-300 pointer-events-none" />
    </div>
  );
}
