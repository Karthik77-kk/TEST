export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  vibe: string;
  price: string;
  image: string;
  quickFacts: string[];
}

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "maldives-paradise",
    name: "Maldives",
    region: "Indian Ocean",
    vibe: "Overwater serenity with endless horizon views",
    price: "from €12,500",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=900&fit=crop",
    quickFacts: [
      "Private island access",
      "Underwater dining",
      "Personal butler service",
    ],
  },
  {
    id: "2",
    slug: "tokyo-nights",
    name: "Tokyo",
    region: "Japan",
    vibe: "Neon-lit streets meet ancient tradition",
    price: "from €9,800",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=900&fit=crop",
    quickFacts: [
      "Michelin-star omakase",
      "Private tea ceremony",
      "Helicopter night tour",
    ],
  },
  {
    id: "3",
    slug: "swiss-alps",
    name: "Swiss Alps",
    region: "Switzerland",
    vibe: "Peak luxury in pristine alpine wonder",
    price: "from €15,200",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=900&fit=crop",
    quickFacts: [
      "Private ski concierge",
      "Chalet with mountain chef",
      "Glacier hiking guides",
    ],
  },
  {
    id: "4",
    slug: "dubai-opulence",
    name: "Dubai",
    region: "UAE",
    vibe: "Ultra-modern marvels in the desert",
    price: "from €11,000",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=900&fit=crop",
    quickFacts: [
      "Penthouse suite stays",
      "Desert safari by luxury SUV",
      "Private yacht dinner",
    ],
  },
  {
    id: "5",
    slug: "safari-luxury",
    name: "Kenya Safari",
    region: "East Africa",
    vibe: "Wild encounters with five-star comfort",
    price: "from €18,500",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=900&fit=crop",
    quickFacts: [
      "Exclusive game reserves",
      "Hot air balloon sunrise",
      "Bush dining experiences",
    ],
  },
  {
    id: "6",
    slug: "mediterranean-yacht",
    name: "Mediterranean",
    region: "Southern Europe",
    vibe: "Crystal waters and coastal glamour",
    price: "from €25,000",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=900&fit=crop",
    quickFacts: [
      "Private yacht charter",
      "Hidden cove exploration",
      "Onboard Michelin chef",
    ],
  },
];
