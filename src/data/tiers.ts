export interface Tier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
  accent: string;
  popular?: boolean;
}

export const tiers: Tier[] = [
  {
    id: "silver",
    name: "Silver",
    tagline: "Your gateway to curated luxury",
    price: "€5,000 / year",
    features: [
      "Priority booking access",
      "Dedicated travel advisor",
      "Complimentary lounge access",
      "24/7 concierge support",
      "Early experience previews",
    ],
    accent: "cyan",
  },
  {
    id: "black",
    name: "Black",
    tagline: "Elevated experiences, amplified",
    price: "€15,000 / year",
    features: [
      "All Silver benefits",
      "Private jet upgrades",
      "Exclusive event invitations",
      "Personal travel curator",
      "Complimentary spa credits",
      "Suite upgrades guaranteed",
    ],
    accent: "purple",
    popular: true,
  },
  {
    id: "obsidian",
    name: "Obsidian",
    tagline: "The pinnacle of bespoke travel",
    price: "€50,000 / year",
    features: [
      "All Black benefits",
      "Unlimited private jet access",
      "Yacht charter priority",
      "Personal chef on demand",
      "Custom itinerary design",
      "Global emergency support",
      "Exclusive property access",
    ],
    accent: "gold",
  },
];
