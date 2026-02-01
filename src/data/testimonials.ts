export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Victoria Sterling",
    title: "CEO, Sterling Ventures",
    quote:
      "Aurora Luxe transformed our anniversary trip into something beyond imagination. The private island experience in the Maldives was flawless—every detail anticipated before we even thought of it.",
    avatar: "VS",
    rating: 5,
  },
  {
    id: "2",
    name: "James Chen",
    title: "Tech Entrepreneur",
    quote:
      "I've traveled first class for 20 years. This is different. The concierge team secured reservations I couldn't get myself, and the Swiss Alps retreat was the most peaceful week of my life.",
    avatar: "JC",
    rating: 5,
  },
  {
    id: "3",
    name: "Sophia Marchetti",
    title: "Art Collector",
    quote:
      "The Mediterranean yacht experience exceeded every expectation. From the onboard chef to the hidden coves we explored—this is what true luxury feels like.",
    avatar: "SM",
    rating: 5,
  },
  {
    id: "4",
    name: "Alexander Volkov",
    title: "Private Investor",
    quote:
      "The Obsidian membership has paid for itself ten times over. Having a personal travel curator who understands my preferences is invaluable. Simply the best.",
    avatar: "AV",
    rating: 5,
  },
];
