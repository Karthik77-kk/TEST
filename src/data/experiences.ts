export interface Experience {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Private Jet Hops",
    description:
      "Island-hop across destinations aboard your personal aircraft, with champagne service and custom flight routes.",
    icon: "✈️",
    highlights: [
      "Gulfstream G650 fleet",
      "In-flight spa treatments",
      "24/7 flight concierge",
    ],
  },
  {
    id: "2",
    title: "Yacht Week Odyssey",
    description:
      "Seven days sailing the world's most exclusive coastlines with your private crew and onboard sommelier.",
    icon: "🛥️",
    highlights: [
      "120ft+ superyachts",
      "Water toy collection",
      "Sunset fine dining",
    ],
  },
  {
    id: "3",
    title: "Michelin Trails",
    description:
      "A curated journey through the world's finest kitchens, with private chef's table access and wine pairings.",
    icon: "🍷",
    highlights: [
      "Three-star experiences",
      "Kitchen masterclasses",
      "Rare vintage cellar tours",
    ],
  },
  {
    id: "4",
    title: "Desert Stargazing",
    description:
      "Sleep under pristine night skies in luxury desert camps with private astronomers and Bedouin hospitality.",
    icon: "🌟",
    highlights: [
      "Observatory access",
      "Luxury glamping",
      "Camel sunset journeys",
    ],
  },
  {
    id: "5",
    title: "Alpine Retreat",
    description:
      "Exclusive mountain escapes with private ski instructors, thermal spa sanctuaries, and gourmet alpine cuisine.",
    icon: "🏔️",
    highlights: [
      "Heli-skiing adventures",
      "Chalet chef service",
      "Après-ski champagne",
    ],
  },
];
