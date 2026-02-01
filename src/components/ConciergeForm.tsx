"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/utilities";

const interests = [
  "Private Jets",
  "Yacht Charters",
  "Fine Dining",
  "Adventure",
  "Wellness & Spa",
  "Cultural Tours",
  "Photography",
  "Wildlife Safari",
  "Skiing & Snow",
  "Beach & Islands",
];

const budgetOptions = [
  { value: "10k-25k", label: "€10,000 – €25,000" },
  { value: "25k-50k", label: "€25,000 – €50,000" },
  { value: "50k-100k", label: "€50,000 – €100,000" },
  { value: "100k+", label: "€100,000+" },
];

interface FormData {
  name: string;
  email: string;
  dates: string;
  travelers: string;
  interests: string[];
  budget: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  dates?: string;
  travelers?: string;
  budget?: string;
}

export function ConciergeForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    dates: "",
    travelers: "",
    interests: [],
    budget: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.dates.trim()) {
      newErrors.dates = "Travel dates are required";
    }

    if (!formData.travelers.trim()) {
      newErrors.travelers = "Number of travelers is required";
    } else if (isNaN(parseInt(formData.travelers)) || parseInt(formData.travelers) < 1) {
      newErrors.travelers = "Please enter a valid number";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Aurora Luxe Travel - Trip Request from ${formData.name}`);
    const body = encodeURIComponent(
      `New Trip Request\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Travel Dates: ${formData.dates}\n` +
      `Number of Travelers: ${formData.travelers}\n` +
      `Interests: ${formData.interests.join(", ") || "Not specified"}\n` +
      `Budget Range: ${formData.budget}\n` +
      `Additional Notes: ${formData.notes || "None"}\n`
    );
    
    // Open mailto link
    window.open(`mailto:iammr2002vip@gmail.com?subject=${subject}&body=${body}`, "_blank");

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        dates: "",
        travelers: "",
        interests: [],
        budget: "",
        notes: "",
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <section id="concierge" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-aurora-dark via-aurora-darker to-aurora-dark" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-aurora-cyan/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-aurora-magenta/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-aurora-cyan text-sm font-medium uppercase tracking-wider">
            Start Your Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-aurora-text mt-4 mb-6">
            Design Your <span className="gradient-text">Dream Trip</span>
          </h2>
          <p className="text-aurora-text-muted max-w-2xl mx-auto text-lg">
            Share your vision with our travel curators. We&apos;ll craft a bespoke 
            itinerary tailored to your every desire.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 sm:p-12"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-purple flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-white"
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
              </div>
              <h3 className="text-2xl font-bold font-heading text-aurora-text mb-4">
                Request Received!
              </h3>
              <p className="text-aurora-text-muted">
                Our travel curators will be in touch within 24 hours to begin
                crafting your extraordinary journey.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  error={errors.name}
                  required
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  error={errors.email}
                  required
                />
              </div>

              {/* Dates & Travelers Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  label="Preferred Travel Dates"
                  name="dates"
                  type="text"
                  placeholder="e.g., March 15-25, 2025"
                  value={formData.dates}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, dates: e.target.value }))
                  }
                  error={errors.dates}
                  required
                />
                <FormField
                  label="Number of Travelers"
                  name="travelers"
                  type="number"
                  placeholder="2"
                  value={formData.travelers}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, travelers: e.target.value }))
                  }
                  error={errors.travelers}
                  required
                  min={1}
                />
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-aurora-text mb-3">
                  Travel Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                        formData.interests.includes(interest)
                          ? "bg-gradient-to-r from-aurora-cyan to-aurora-purple text-white"
                          : "glass text-aurora-text-muted hover:text-aurora-text hover:bg-aurora-glass"
                      )}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-aurora-text mb-3">
                  Budget Range <span className="text-aurora-magenta">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {budgetOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, budget: option.value }))
                      }
                      className={cn(
                        "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-center",
                        formData.budget === option.value
                          ? "bg-gradient-to-r from-aurora-cyan to-aurora-purple text-white"
                          : "glass text-aurora-text-muted hover:text-aurora-text hover:bg-aurora-glass"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                {errors.budget && (
                  <p className="text-aurora-magenta text-sm mt-2">{errors.budget}</p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-aurora-text mb-3"
                >
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  placeholder="Tell us about your dream trip, special occasions, or any specific requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-aurora-glass border border-aurora-border text-aurora-text placeholder-aurora-text-muted/50 focus:outline-none focus:ring-2 focus:ring-aurora-cyan/50 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 rounded-full font-medium text-lg text-white transition-all duration-300",
                  isSubmitting
                    ? "bg-aurora-glass cursor-not-allowed"
                    : "bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-magenta hover:scale-[1.02] hover:glow-cyan"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  required,
  min,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  min?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-aurora-text mb-2">
        {label} {required && <span className="text-aurora-magenta">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        className={cn(
          "w-full px-4 py-3 rounded-xl bg-aurora-glass border text-aurora-text placeholder-aurora-text-muted/50 focus:outline-none focus:ring-2 focus:ring-aurora-cyan/50 focus:border-transparent transition-all",
          error ? "border-aurora-magenta" : "border-aurora-border"
        )}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={error ? "true" : "false"}
      />
      {error && (
        <p id={`${name}-error`} className="text-aurora-magenta text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
