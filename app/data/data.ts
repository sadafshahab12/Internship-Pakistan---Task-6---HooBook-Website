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
    image:
      "https://images.pexels.com/photos/17394906/pexels-photo-17394906/free-photo-of-facade-of-ritz-paris-hotel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2s",
    description:
      "The Ritz Paris is a world-renowned luxury hotel offering elegance and sophistication in the heart of Paris. Featuring lavish rooms, Michelin-starred dining, and a historic spa, it provides an unparalleled experience for guests seeking the finest accommodations.",
    location: {
      city: "Paris",
      country: "France",
      address: "15 Place Vendôme, 75001 Paris, France",
    },
    room_types: [
      {
        type: "Deluxe Room",
        price_per_night: 450,
      },
      {
        type: "Executive Suite",
        price_per_night: 850,
      },
      {
        type: "Presidential Suite",
        price_per_night: 2500,
      },
    ],
    amenities: [
      "Free Wi-Fi",
      "Spa",
      "Fine Dining",
      "Pool",
      "Gym",
      "Concierge Service",
    ],
    rating: 4.9,
    reviews: 1020,
    book_now_url: "https://www.ritzparis.com/en",
  },

  {
    id: 2,
    name: "Burj Al Arab",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/457389536.jpg?k=1b5b93930a67d2372178da9df3c090ec47fb1f5622f5664dde18c4362f31b355&o=&hp=1",
    description:
      "The Burj Al Arab is an iconic luxury hotel in Dubai, renowned for its sail-shaped design, lavish suites, and world-class hospitality. Guests enjoy an unparalleled experience with private beaches, personal butlers, and fine dining restaurants offering breathtaking views.",
    location: {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Jumeirah St - Umm Suqeim 3, Dubai, UAE",
    },
    room_types: [
      {
        type: "Deluxe One-Bedroom Suite",
        price_per_night: 1200,
      },
      {
        type: "Panoramic Suite",
        price_per_night: 2500,
      },
      {
        type: "Royal Two-Bedroom Suite",
        price_per_night: 5000,
      },
    ],
    amenities: [
      "Private Beach",
      "Luxury Suites",
      "Helipad",
      "Free Wi-Fi",
      "Infinity Pool",
      "Spa",
      "Fine Dining",
      "Personal Butler Service",
    ],
    rating: 5.0,
    reviews: 890,
    book_now_url:
      "https://www.jumeirah.com/en/stay/dubai/burj-al-arab-jumeirah",
  },

  {
    "id": 3,
    "name": "The Plaza",
    "image": "https://source.unsplash.com/600x400/?hotel,newyork",
    "description": "The Plaza is an iconic luxury hotel in New York City, offering timeless elegance, world-class service, and breathtaking views of Central Park. With opulent suites, a renowned spa, and top-tier dining, it provides an unforgettable experience in the heart of Manhattan.",
    "location": {
      "city": "New York",
      "country": "USA",
      "address": "768 5th Ave, New York, NY 10019, USA"
    },
    "room_types": [
      {
        "type": "Deluxe King Room",
        "price_per_night": 550
      },
      {
        "type": "Terrace Suite",
        "price_per_night": 1200
      },
      {
        "type": "Royal Plaza Suite",
        "price_per_night": 3500
      }
    ],
    "amenities": [
      "Central Park View",
      "Butler Service",
      "Luxury Spa",
      "Fine Dining",
      "Fitness Center",
      "Afternoon Tea Lounge",
      "Free Wi-Fi"
    ],
    "rating": 4.8,
    "reviews": 1340,
    "book_now_url": "https://www.theplazany.com/"
  },
  
  {
    "id": 4,
    "name": "Aman Tokyo",
    "image": "https://source.unsplash.com/600x400/?hotel,tokyo",
    "description": "Aman Tokyo is a tranquil urban sanctuary that blends traditional Japanese aesthetics with modern luxury. Offering breathtaking skyline views, a serene Zen garden, and an infinity pool, it provides an exclusive retreat in the heart of Tokyo.",
    "location": {
      "city": "Tokyo",
      "country": "Japan",
      "address": "Otemachi Tower, 1-5-6 Otemachi, Chiyoda City, Tokyo 100-0004, Japan"
    },
    "room_types": [
      {
        "type": "Deluxe Room",
        "price_per_night": 750
      },
      {
        "type": "Corner Suite",
        "price_per_night": 1500
      },
      {
        "type": "Aman Suite",
        "price_per_night": 3000
      }
    ],
    "amenities": [
      "Infinity Pool",
      "Zen Garden",
      "Skyline Views",
      "Japanese Onsen Spa",
      "Fine Dining",
      "Private Tea Ceremony Room",
      "Free Wi-Fi",
      "Fitness Center"
    ],
    "rating": 4.7,
    "reviews": 920,
    "book_now_url": "https://www.aman.com/resorts/aman-tokyo"
  },
  
  {
    "id": 5,
    "name": "The Peninsula Bangkok",
    "image": "https://source.unsplash.com/600x400/?hotel,bangkok",
    "description": "The Peninsula Bangkok offers a luxurious riverside retreat with world-class hospitality and stunning views of the Chao Phraya River. Featuring elegant accommodations, award-winning Thai cuisine, and a serene spa, it is the perfect escape in the heart of Bangkok.",
    "location": {
      "city": "Bangkok",
      "country": "Thailand",
      "address": "333 Charoen Nakhon Rd, Khlong Ton Sai, Khlong San, Bangkok 10600, Thailand"
    },
    "room_types": [
      {
        "type": "Deluxe Room",
        "price_per_night": 320
      },
      {
        "type": "Grand Balcony Suite",
        "price_per_night": 650
      },
      {
        "type": "The Peninsula Suite",
        "price_per_night": 2200
      }
    ],
    "amenities": [
      "Riverside Dining",
      "Spa",
      "Thai Cuisine",
      "Infinity Pool",
      "Fitness Center",
      "Free Wi-Fi",
      "Afternoon Tea Lounge",
      "Private Riverboat Tours"
    ],
    "rating": 4.6,
    "reviews": 780,
    "book_now_url": "https://www.peninsula.com/en/bangkok"
  },
  
  {
    "id": 6,
    "name": "Four Seasons Bali",
    "image": "https://source.unsplash.com/600x400/?hotel,bali",
    "description": "Nestled in the heart of Bali, Four Seasons offers an exquisite blend of tropical luxury and Balinese tradition. With private villas, breathtaking oceanfront views, and a world-class wellness spa, it provides an idyllic retreat for travelers seeking serenity and sophistication.",
    "location": {
      "city": "Bali",
      "country": "Indonesia",
      "address": "Jalan Bukit Permai, Jimbaran, Bali 80361, Indonesia"
    },
    "room_types": [
      {
        "type": "Garden Villa",
        "price_per_night": 600
      },
      {
        "type": "Oceanfront Suite",
        "price_per_night": 1200
      },
      {
        "type": "Royal Three-Bedroom Villa",
        "price_per_night": 3500
      }
    ],
    "amenities": [
      "Private Villas",
      "Oceanfront View",
      "Wellness Spa",
      "Infinity Pool",
      "Traditional Balinese Massage",
      "Fine Dining",
      "Yoga & Meditation Classes",
      "Free Wi-Fi"
    ],
    "rating": 4.9,
    "reviews": 1150,
    "book_now_url": "https://www.fourseasons.com/jimbaranbay/"
  },
  
  {
    "id": 7,
    "name": "The Savoy",
    "image": "https://source.unsplash.com/600x400/?hotel,london",
    "description": "The Savoy is one of London's most prestigious hotels, offering a blend of historic charm and modern luxury. Located in the heart of the theatre district, it provides world-class fine dining, elegant accommodations, and exceptional service.",
    "location": {
      "city": "London",
      "country": "UK",
      "address": "Strand, London WC2R 0EZ, United Kingdom"
    },
    "room_types": [
      {
        "type": "Luxury King Room",
        "price_per_night": 480
      },
      {
        "type": "River View Suite",
        "price_per_night": 950
      },
      {
        "type": "Royal Suite",
        "price_per_night": 3500
      }
    ],
    "amenities": [
      "Historic Charm",
      "Theatre District",
      "Fine Dining",
      "Afternoon Tea",
      "Butler Service",
      "Rooftop Bar",
      "Free Wi-Fi",
      "Fitness Center"
    ],
    "rating": 4.8,
    "reviews": 970,
    "book_now_url": "https://www.thesavoylondon.com/"
  },
  
  {
    "id": 8,
    "name": "Raffles Singapore",
    "image": "https://source.unsplash.com/600x400/?hotel,singapore",
    "description": "Raffles Singapore is an iconic colonial-style luxury hotel, renowned for its timeless elegance, impeccable service, and rich heritage. With personal butlers, world-class dining, and its famous Singapore Sling cocktail, it offers an unparalleled experience in the heart of the city.",
    "location": {
      "city": "Singapore",
      "country": "Singapore",
      "address": "1 Beach Rd, Singapore 189673"
    },
    "room_types": [
      {
        "type": "Courtyard Suite",
        "price_per_night": 680
      },
      {
        "type": "Palm Court Suite",
        "price_per_night": 1200
      },
      {
        "type": "Presidential Suite",
        "price_per_night": 4200
      }
    ],
    "amenities": [
      "Colonial Elegance",
      "Personal Butler",
      "Signature Cocktails",
      "Luxury Spa",
      "Fine Dining",
      "Private Verandas",
      "Free Wi-Fi",
      "Heritage Tours"
    ],
    "rating": 4.9,
    "reviews": 850,
    "book_now_url": "https://www.raffles.com/singapore/"
  },
  
  {
    "id": 9,
    "name": "Hotel de Russie",
    "image": "https://source.unsplash.com/600x400/?hotel,rome",
    "description": "Hotel de Russie is a luxurious oasis in the heart of Rome, offering an exquisite blend of classical elegance and modern comfort. Featuring a serene private garden, a world-class spa, and a Michelin-starred restaurant, it provides a refined retreat near the city's historic landmarks.",
    "location": {
      "city": "Rome",
      "country": "Italy",
      "address": "Via del Babuino, 9, 00187 Roma RM, Italy"
    },
    "room_types": [
      {
        "type": "Classic Room",
        "price_per_night": 410
      },
      {
        "type": "Garden View Suite",
        "price_per_night": 900
      },
      {
        "type": "Nijinsky Suite",
        "price_per_night": 4500
      }
    ],
    "amenities": [
      "Luxury Spa",
      "Garden View",
      "Michelin-star Restaurant",
      "Private Terraces",
      "Fine Dining",
      "Fitness Center",
      "Free Wi-Fi",
      "Concierge Service"
    ],
    "rating": 4.7,
    "reviews": 760,
    "book_now_url": "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/"
  },
  
  {
    "id": 10,
    "name": "Mandarin Oriental Hong Kong",
    "image": "https://source.unsplash.com/600x400/?hotel,hongkong",
    "description": "Mandarin Oriental Hong Kong is an iconic luxury hotel, blending timeless elegance with modern sophistication. Overlooking Victoria Harbour, it offers world-class dining, impeccable service, and luxurious suites designed for ultimate comfort.",
    "location": {
      "city": "Hong Kong",
      "country": "China",
      "address": "5 Connaught Road Central, Central, Hong Kong"
    },
    "room_types": [
      {
        "type": "Deluxe Room",
        "price_per_night": 720
      },
      {
        "type": "Harbor View Suite",
        "price_per_night": 1400
      },
      {
        "type": "Presidential Suite",
        "price_per_night": 5000
      }
    ],
    "amenities": [
      "Harbor View",
      "Luxury Suites",
      "World-Class Dining",
      "Exclusive Spa",
      "Rooftop Bar",
      "Fitness Center",
      "Free Wi-Fi",
      "Afternoon Tea Lounge"
    ],
    "rating": 4.9,
    "reviews": 920,
    "book_now_url": "https://www.mandarinoriental.com/hong-kong"
  },
  
  {
    "id": 11,
    "name": "The Oberoi Udaivilas",
    "image": "https://source.unsplash.com/600x400/?hotel,udaipur",
    "description": "The Oberoi Udaivilas is a magnificent palace hotel set on the banks of Lake Pichola, offering breathtaking views and royal Rajasthani hospitality. Featuring grand architecture, luxurious rooms, and exquisite fine dining, it is a perfect destination for a regal retreat.",
    "location": {
      "city": "Udaipur",
      "country": "India",
      "address": "Haridasji Ki Magri, Mulla Talai, Udaipur, Rajasthan 313001, India"
    },
    "room_types": [
      {
        "type": "Premier Room",
        "price_per_night": 530
      },
      {
        "type": "Luxury Suite with Private Pool",
        "price_per_night": 1200
      },
      {
        "type": "Kohinoor Suite",
        "price_per_night": 4500
      }
    ],
    "amenities": [
      "Lake View",
      "Royal Decor",
      "Fine Dining",
      "Private Courtyards",
      "Luxury Spa",
      "Traditional Boat Rides",
      "Fitness Center",
      "Free Wi-Fi"
    ],
    "rating": 4.8,
    "reviews": 990,
    "book_now_url": "https://www.oberoihotels.com/hotels-in-udaipur-udaivilas-resort/"
  },
  
  {
    "id": 12,
    "name": "Fairmont Banff Springs",
    "image": "https://source.unsplash.com/600x400/?hotel,banff",
    "description": "Fairmont Banff Springs, known as the 'Castle in the Rockies,' is a luxurious mountain retreat offering breathtaking views, world-class skiing, and rejuvenating hot springs. Nestled in Banff National Park, this iconic resort combines rustic elegance with modern comforts.",
    "location": {
      "city": "Banff",
      "country": "Canada",
      "address": "405 Spray Ave, Banff, AB T1L 1J4, Canada"
    },
    "room_types": [
      {
        "type": "Fairmont Room",
        "price_per_night": 380
      },
      {
        "type": "Deluxe Mountain View Room",
        "price_per_night": 620
      },
      {
        "type": "Fairmont Gold Suite",
        "price_per_night": 1600
      }
    ],
    "amenities": [
      "Mountain Lodge",
      "Skiing",
      "Hot Springs",
      "Luxury Spa",
      "Golf Course",
      "Fine Dining",
      "Fitness Center",
      "Free Wi-Fi"
    ],
    "rating": 4.7,
    "reviews": 870,
    "book_now_url": "https://www.fairmont.com/banff-springs/"
  },
  
  {
    "id": 13,
    "name": "The Langham, Melbourne",
    "image": "https://source.unsplash.com/600x400/?hotel,melbourne",
    "description": "The Langham, Melbourne is a sophisticated riverside retreat offering stunning Yarra River views, an indulgent luxury spa, and a world-famous high tea experience. With elegant accommodations and impeccable service, it provides an unforgettable stay in the heart of the city.",
    "location": {
      "city": "Melbourne",
      "country": "Australia",
      "address": "1 Southgate Ave, Southbank VIC 3006, Australia"
    },
    "room_types": [
      {
        "type": "Superior Room",
        "price_per_night": 460
      },
      {
        "type": "Deluxe River View Room",
        "price_per_night": 650
      },
      {
        "type": "Executive Terrace Suite",
        "price_per_night": 1800
      }
    ],
    "amenities": [
      "Yarra River View",
      "Luxury Spa",
      "High Tea Experience",
      "Heated Indoor Pool",
      "Fine Dining",
      "Fitness Center",
      "Free Wi-Fi",
      "24-Hour Concierge Service"
    ],
    "rating": 4.8,
    "reviews": 940,
    "book_now_url": "https://www.langhamhotels.com/en/the-langham/melbourne/"
  },
  {
    "id": 14,
    "name": "Rosewood Beijing",
    "image": "https://source.unsplash.com/600x400/?hotel,beijing",
    "description": "Rosewood Beijing is a sophisticated urban sanctuary, blending traditional Chinese aesthetics with modern luxury. Featuring stunning skyline views, spacious suites, and an exquisite culinary experience, this hotel offers unparalleled elegance in the heart of Beijing.",
    "location": {
      "city": "Beijing",
      "country": "China",
      "address": "Jing Guang Centre, Hujialou, Chaoyang, Beijing, China"
    },
    "room_types": [
      {
        "type": "Deluxe Room",
        "price_per_night": 500
      },
      {
        "type": "Executive Suite",
        "price_per_night": 950
      },
      {
        "type": "Manor Suite",
        "price_per_night": 2500
      }
    ],
    "amenities": [
      "Luxury Suites",
      "Skyline View",
      "Authentic Cuisine",
      "Exclusive Spa",
      "Indoor Pool",
      "Fitness Center",
      "Personalized Butler Service",
      "Free Wi-Fi"
    ],
    "rating": 4.9,
    "reviews": 880,
    "book_now_url": "https://www.rosewoodhotels.com/en/beijing"
  },
  
{
  "id": 15,
  "name": "Hotel Bel-Air",
  "image": "https://source.unsplash.com/600x400/?hotel,losangeles",
  "description": "Nestled in a secluded canyon, Hotel Bel-Air is an iconic retreat offering timeless Hollywood glamour, lush gardens, and world-class luxury. With an exclusive spa, a serene outdoor pool, and fine dining, it is a sanctuary of elegance in Los Angeles.",
  "location": {
    "city": "Los Angeles",
    "country": "USA",
    "address": "701 Stone Canyon Rd, Los Angeles, CA 90077, USA"
  },
  "room_types": [
    {
      "type": "Deluxe Room",
      "price_per_night": 750
    },
    {
      "type": "Bel-Air Suite",
      "price_per_night": 1500
    },
    {
      "type": "Presidential Suite",
      "price_per_night": 5000
    }
  ],
  "amenities": [
    "Hollywood Glamour",
    "Outdoor Pool",
    "Luxury Spa",
    "Fine Dining",
    "Private Patios",
    "Lush Gardens",
    "Fitness Center",
    "Free Wi-Fi"
  ],
  "rating": 4.9,
  "reviews": 960,
  "book_now_url": "https://www.dorchestercollection.com/en/los-angeles/hotel-bel-air/"
}

];
