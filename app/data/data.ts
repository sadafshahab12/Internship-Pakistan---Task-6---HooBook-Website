import {
  FeaturedHotelType,
  HotelListType,
  PopularDestination,
} from "./dataTypes";

export const featuredHotel: FeaturedHotelType[] = [
  {
    id: 1,
    name: "Grand Palace Hotel",
    city: "New York",
    image: "/images/featuredhotel1.jpg",
    rating: 4.8,
    price_per_night: 250,
    amenities: ["Free WiFi", "Pool", "Gym", "Spa"],
    reviews: 1200,
  },
  {
    id: 2,
    name: "Seaside Resort",
    city: "Miami",
    image: "/images/featuredhotel1.jpg",
    rating: 4.5,
    price_per_night: 180,
    amenities: ["Beachfront", "Free Breakfast", "WiFi"],
    reviews: 950,
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    city: "Denver",
    image: "/images/featuredhotel1.jpg",
    rating: 4.7,
    price_per_night: 200,
    amenities: ["Mountain View", "Hot Tub", "Ski Rental"],
    reviews: 860,
  },
  {
    id: 4,
    name: "Urban Stay Hotel",
    city: "Los Angeles",
    image: "/images/featuredhotel1.jpg",
    rating: 4.3,
    price_per_night: 150,
    amenities: ["Rooftop Bar", "Gym", "Parking"],
    reviews: 730,
  },
  {
    id: 5,
    name: "Royal Desert Camp",
    city: "Dubai",
    image: "/images/featuredhotel1.jpg",
    rating: 4.9,
    price_per_night: 320,
    amenities: ["Desert Safari", "Luxury Tent", "Private Pool"],
    reviews: 600,
  },
  {
    id: 6,
    name: "Snowy Peaks Inn",
    city: "Aspen",
    image: "/images/featuredhotel1.jpg",
    rating: 4.6,
    price_per_night: 280,
    amenities: ["Ski-In/Ski-Out", "Fireplace", "Spa"],
    reviews: 850,
  },
];
export const popularDestination: PopularDestination[] = [
  {
    id: 1,
    city: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1000",
    description:
      "Experience the charm of the City of Lights with its iconic landmarks and romantic atmosphere.",
    popular_hotels: ["The Ritz Paris", "Shangri-La Hotel", "Le Meurice"],
  },
  {
    id: 2,
    city: "Dubai",
    country: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000",
    description:
      "A city of luxury, innovation, and stunning skyscrapers with world-class hospitality.",
    popular_hotels: [
      "Burj Al Arab",
      "Atlantis The Palm",
      "Jumeirah Beach Hotel",
    ],
  },
  {
    id: 3,
    city: "New York",
    country: "USA",
    image:
      "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?auto=format&fit=crop&q=80&w=1000",
    description:
      "The city that never sleeps, offering iconic sights, Broadway shows, and endless adventures.",
    popular_hotels: [
      "The Plaza",
      "Park Hyatt New York",
      "The St. Regis New York",
    ],
  },
  {
    id: 4,
    city: "Tokyo",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?auto=format&fit=crop&q=80&w=1000",
    description:
      "A perfect blend of tradition and technology, offering ancient temples and modern skyscrapers.",
    popular_hotels: ["Aman Tokyo", "Park Hyatt Tokyo", "The Peninsula Tokyo"],
  },
  {
    id: 5,
    city: "Rome",
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?auto=format&fit=crop&q=80&w=1000",
    description:
      "Step into history with stunning architecture, ancient ruins, and delicious Italian cuisine.",
    popular_hotels: ["Hassler Roma", "Hotel de Russie", "J.K. Place Roma"],
  },
  {
    id: 6,
    city: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?auto=format&fit=crop&q=80&w=1000",
    description:
      "A tropical paradise known for its breathtaking beaches, lush forests, and serene temples.",
    popular_hotels: ["Four Seasons Resort", "The Legian Bali", "The Mulia"],
  },
];

export const HotelListTypes: HotelListType[] = [
  {
    id: 1,
    name: "The Ritz Paris",
    city: "Paris",
    country: "France",
    image: "https://source.unsplash.com/600x400/?hotel,paris",
    rating: 4.9,
    price_per_night: 450,
    amenities: ["Free Wi-Fi", "Spa", "Fine Dining"],
    reviews: 1020,
  },
  {
    id: 2,
    name: "Burj Al Arab",
    city: "Dubai",
    country: "United Arab Emirates",
    image: "https://source.unsplash.com/600x400/?hotel,dubai",
    rating: 5.0,
    price_per_night: 1200,
    amenities: ["Private Beach", "Luxury Suites", "Helipad"],
    reviews: 890,
  },
  {
    id: 3,
    name: "The Plaza",
    city: "New York",
    country: "USA",
    image: "https://source.unsplash.com/600x400/?hotel,newyork",
    rating: 4.8,
    price_per_night: 550,
    amenities: ["Central Park View", "Butler Service", "Luxury Spa"],
    reviews: 1340,
  },
  {
    id: 4,
    name: "Aman Tokyo",
    city: "Tokyo",
    country: "Japan",
    image: "https://source.unsplash.com/600x400/?hotel,tokyo",
    rating: 4.7,
    price_per_night: 750,
    amenities: ["Infinity Pool", "Zen Garden", "Skyline Views"],
    reviews: 920,
  },
  {
    id: 5,
    name: "The Peninsula",
    city: "Bangkok",
    country: "Thailand",
    image: "https://source.unsplash.com/600x400/?hotel,bangkok",
    rating: 4.6,
    price_per_night: 320,
    amenities: ["Riverside Dining", "Spa", "Thai Cuisine"],
    reviews: 780,
  },
  {
    id: 6,
    name: "Four Seasons Bali",
    city: "Bali",
    country: "Indonesia",
    image: "https://source.unsplash.com/600x400/?hotel,bali",
    rating: 4.9,
    price_per_night: 600,
    amenities: ["Private Villas", "Oceanfront View", "Wellness Spa"],
    reviews: 1150,
  },
  {
    id: 7,
    name: "The Savoy",
    city: "London",
    country: "UK",
    image: "https://source.unsplash.com/600x400/?hotel,london",
    rating: 4.8,
    price_per_night: 480,
    amenities: ["Historic Charm", "Theatre District", "Fine Dining"],
    reviews: 970,
  },
  {
    id: 8,
    name: "Raffles Singapore",
    city: "Singapore",
    country: "Singapore",
    image: "https://source.unsplash.com/600x400/?hotel,singapore",
    rating: 4.9,
    price_per_night: 680,
    amenities: ["Colonial Elegance", "Personal Butler", "Signature Cocktails"],
    reviews: 850,
  },
  {
    id: 9,
    name: "Hotel de Russie",
    city: "Rome",
    country: "Italy",
    image: "https://source.unsplash.com/600x400/?hotel,rome",
    rating: 4.7,
    price_per_night: 410,
    amenities: ["Luxury Spa", "Garden View", "Michelin-star Restaurant"],
    reviews: 760,
  },
  {
    id: 10,
    name: "Mandarin Oriental",
    city: "Hong Kong",
    country: "China",
    image: "https://source.unsplash.com/600x400/?hotel,hongkong",
    rating: 4.9,
    price_per_night: 720,
    amenities: ["Harbor View", "Luxury Suites", "World-Class Dining"],
    reviews: 920,
  },
  {
    id: 11,
    name: "The Oberoi Udaivilas",
    city: "Udaipur",
    country: "India",
    image: "https://source.unsplash.com/600x400/?hotel,udaipur",
    rating: 4.8,
    price_per_night: 530,
    amenities: ["Lake View", "Royal Decor", "Fine Dining"],
    reviews: 990,
  },
  {
    id: 12,
    name: "Fairmont Banff Springs",
    city: "Banff",
    country: "Canada",
    image: "https://source.unsplash.com/600x400/?hotel,banff",
    rating: 4.7,
    price_per_night: 380,
    amenities: ["Mountain Lodge", "Skiing", "Hot Springs"],
    reviews: 870,
  },
  {
    id: 13,
    name: "The Langham",
    city: "Melbourne",
    country: "Australia",
    image: "https://source.unsplash.com/600x400/?hotel,melbourne",
    rating: 4.8,
    price_per_night: 460,
    amenities: ["Yarra River View", "Luxury Spa", "High Tea Experience"],
    reviews: 940,
  },
  {
    id: 14,
    name: "Rosewood Beijing",
    city: "Beijing",
    country: "China",
    image: "https://source.unsplash.com/600x400/?hotel,beijing",
    rating: 4.9,
    price_per_night: 500,
    amenities: ["Luxury Suites", "Skyline View", "Authentic Cuisine"],
    reviews: 880,
  },
  {
    id: 15,
    name: "Hotel Bel-Air",
    city: "Los Angeles",
    country: "USA",
    image: "https://source.unsplash.com/600x400/?hotel,losangeles",
    rating: 4.9,
    price_per_night: 750,
    amenities: ["Hollywood Glamour", "Outdoor Pool", "Luxury Spa"],
    reviews: 960,
  },
];
export type SortOption =
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "reviews-desc";
export interface FilterState {
  minPrice: number;
  maxPrice: number;
  rating: number;
  amneties: string;
  sortBy: SortOption;
}
