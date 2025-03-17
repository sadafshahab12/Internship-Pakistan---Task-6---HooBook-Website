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
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/ff/0d/ae/grand-palace-hotel.jpg?w=700&h=-1&s=1",
    rating: 4.8,
    price_per_night: 250,
    amenities: ["Free WiFi", "Pool", "Gym", "Spa"],
    reviews: 1200,
  },
  {
    id: 2,
    name: "Seaside Resort",
    city: "Miami",
    image:
      "https://www.solemiami.com/wp-content/uploads/2020/02/POOL-BEACH-2-horz-1024x768.jpg",
    rating: 4.5,
    price_per_night: 180,
    amenities: ["Beachfront", "Free Breakfast", "WiFi"],
    reviews: 950,
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    city: "Denver",
    image:
      "https://www.hotelcliocherrycreek.com/content/uploads/2022/01/Presidential_Living_Room_-crop-1646151371-1920x1000.jpg",
    rating: 4.7,
    price_per_night: 200,
    amenities: ["Mountain View", "Hot Tub", "Ski Rental"],
    reviews: 860,
  },
  {
    id: 4,
    name: "Urban Stay Hotel",
    city: "Los Angeles",
    image:
      "https://www.kayak.com/rimg/himg/7d/06/6c/expedia_group-4244828-4ba218ca-654627.jpg?width=836&height=607&crop=true",
    rating: 4.3,
    price_per_night: 150,
    amenities: ["Rooftop Bar", "Gym", "Parking"],
    reviews: 730,
  },
  {
    id: 5,
    name: "Royal Desert Camp",
    city: "Dubai",
    image:
      "https://desert-knight.com/wp-content/uploads/2022/08/Royal-Sahara-Desert-Fortress-View.webp",
    rating: 4.9,
    price_per_night: 320,
    amenities: ["Desert Safari", "Luxury Tent", "Private Pool"],
    reviews: 600,
  },
  {
    id: 6,
    name: "Snowy Peaks Inn",
    city: "Aspen",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a3/e4/2f/the-new-bernti-s.jpg?w=1200&h=-1&s=1",
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
    image: "https://live.staticflickr.com/2878/11784782446_8e24732771_b.jpg",
    description:
      "Experience the charm of the City of Lights with its iconic landmarks and romantic atmosphere.",
    popular_hotels: ["The Ritz Paris", "Shangri-La Hotel", "Le Meurice"],
  },
  {
    id: 2,
    city: "Dubai",
    country: "United Arab Emirates",
    image:
      "https://images.locationscout.net/2020/03/khalifa-tower-united-arab-emirates.webp?h=1400&q=80",
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
      "https://images.pexels.com/photos/24460820/pexels-photo-24460820/free-photo-of-illuminated-street-in-new-york-city-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      "https://static.wixstatic.com/media/nsplsh_616c59365f4f7064775251~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_616c59365f4f7064775251~mv2.jpg",
    description:
      "A perfect blend of tradition and technology, offering ancient temples and modern skyscrapers.",
    popular_hotels: ["Aman Tokyo", "Park Hyatt Tokyo", "The Peninsula Tokyo"],
  },
  {
    id: 5,
    city: "Rome",
    country: "Italy",
    image:
      "https://images.stockcake.com/public/2/6/9/269a3c00-dfc2-4fb9-a126-2be71fa3cb9e_large/colosseum-golden-hour-stockcake.jpg",
    description:
      "Step into history with stunning architecture, ancient ruins, and delicious Italian cuisine.",
    popular_hotels: ["Hassler Roma", "Hotel de Russie", "J.K. Place Roma"],
  },
  {
    id: 6,
    city: "Bali",
    country: "Indonesia",
    image:
      "https://us.canvasartrocks.com/cdn/shop/products/Beautiful_tropical_beach_with_palm_trees_Wall_Mural_Wallpaper_a_1400x.jpg?v=1735833327",
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
    id: 3,
    name: "The Plaza",
    image: "https://res.cloudinary.com/grand-luxury/image/upload/w_1920/remote_glh/original/75534-root-exteriors-front-door.jpg",
    description:
      "The Plaza is an iconic luxury hotel in New York City, offering timeless elegance, world-class service, and breathtaking views of Central Park. With opulent suites, a renowned spa, and top-tier dining, it provides an unforgettable experience in the heart of Manhattan.",
    location: {
      city: "New York",
      country: "USA",
      address: "768 5th Ave, New York, NY 10019, USA",
    },
    room_types: [
      {
        type: "Deluxe King Room",
        price_per_night: 550,
      },
      {
        type: "Terrace Suite",
        price_per_night: 1200,
      },
      {
        type: "Royal Plaza Suite",
        price_per_night: 3500,
      },
    ],
    amenities: [
      "Central Park View",
      "Butler Service",
      "Luxury Spa",
      "Fine Dining",
      "Fitness Center",
      "Afternoon Tea Lounge",
      "Free Wi-Fi",
    ],
    rating: 4.8,
    reviews: 1340,
    book_now_url: "https://www.theplazany.com/",
  },

  {
    id: 4,
    name: "Aman Tokyo",
    image: "https://harpersbazaaruk.cdnds.net/17/17/2560x1706/gallery-1493044604-lobby.jpg",
    description:
      "Aman Tokyo is a tranquil urban sanctuary that blends traditional Japanese aesthetics with modern luxury. Offering breathtaking skyline views, a serene Zen garden, and an infinity pool, it provides an exclusive retreat in the heart of Tokyo.",
    location: {
      city: "Tokyo",
      country: "Japan",
      address:
        "Otemachi Tower, 1-5-6 Otemachi, Chiyoda City, Tokyo 100-0004, Japan",
    },
    room_types: [
      {
        type: "Deluxe Room",
        price_per_night: 750,
      },
      {
        type: "Corner Suite",
        price_per_night: 1500,
      },
      {
        type: "Aman Suite",
        price_per_night: 3000,
      },
    ],
    amenities: [
      "Infinity Pool",
      "Zen Garden",
      "Skyline Views",
      "Japanese Onsen Spa",
      "Fine Dining",
      "Private Tea Ceremony Room",
      "Free Wi-Fi",
      "Fitness Center",
    ],
    rating: 4.7,
    reviews: 920,
    book_now_url: "https://www.aman.com/resorts/aman-tokyo",
  },

  {
    id: 5,
    name: "The Peninsula Bangkok",
    image: "https://www.peninsula.com/en/-/media/images/bangkok/new/rooms/the-peninsula-bangkok_exterior-night-(2).jpg?mw=905&hash=2A8F54E2BF2134C3E2060D4234177488",
    description:
      "The Peninsula Bangkok offers a luxurious riverside retreat with world-class hospitality and stunning views of the Chao Phraya River. Featuring elegant accommodations, award-winning Thai cuisine, and a serene spa, it is the perfect escape in the heart of Bangkok.",
    location: {
      city: "Bangkok",
      country: "Thailand",
      address:
        "333 Charoen Nakhon Rd, Khlong Ton Sai, Khlong San, Bangkok 10600, Thailand",
    },
    room_types: [
      {
        type: "Deluxe Room",
        price_per_night: 320,
      },
      {
        type: "Grand Balcony Suite",
        price_per_night: 650,
      },
      {
        type: "The Peninsula Suite",
        price_per_night: 2200,
      },
    ],
    amenities: [
      "Riverside Dining",
      "Spa",
      "Thai Cuisine",
      "Infinity Pool",
      "Fitness Center",
      "Free Wi-Fi",
      "Afternoon Tea Lounge",
      "Private Riverboat Tours",
    ],
    rating: 4.6,
    reviews: 780,
    book_now_url: "https://www.peninsula.com/en/bangkok",
  },

  {
    id: 6,
    name: "Four Seasons Bali",
    image: "https://i.ytimg.com/vi/kcPrHQXPSJw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDO7njVmnDl0gGcqjhthleJe_3p_Q",
    description:
      "Nestled in the heart of Bali, Four Seasons offers an exquisite blend of tropical luxury and Balinese tradition. With private villas, breathtaking oceanfront views, and a world-class wellness spa, it provides an idyllic retreat for travelers seeking serenity and sophistication.",
    location: {
      city: "Bali",
      country: "Indonesia",
      address: "Jalan Bukit Permai, Jimbaran, Bali 80361, Indonesia",
    },
    room_types: [
      {
        type: "Garden Villa",
        price_per_night: 600,
      },
      {
        type: "Oceanfront Suite",
        price_per_night: 1200,
      },
      {
        type: "Royal Three-Bedroom Villa",
        price_per_night: 3500,
      },
    ],
    amenities: [
      "Private Villas",
      "Oceanfront View",
      "Wellness Spa",
      "Infinity Pool",
      "Traditional Balinese Massage",
      "Fine Dining",
      "Yoga & Meditation Classes",
      "Free Wi-Fi",
    ],
    rating: 4.9,
    reviews: 1150,
    book_now_url: "https://www.fourseasons.com/jimbaranbay/",
  },

  {
    id: 7,
    name: "The Savoy",
    image: "https://images.suitcasemag.com/wp-content/uploads/2023/10/10170632/the-savoy-london_6532950dc79c2.jpeg",
    description:
      "The Savoy is one of London's most prestigious hotels, offering a blend of historic charm and modern luxury. Located in the heart of the theatre district, it provides world-class fine dining, elegant accommodations, and exceptional service.",
    location: {
      city: "London",
      country: "UK",
      address: "Strand, London WC2R 0EZ, United Kingdom",
    },
    room_types: [
      {
        type: "Luxury King Room",
        price_per_night: 480,
      },
      {
        type: "River View Suite",
        price_per_night: 950,
      },
      {
        type: "Royal Suite",
        price_per_night: 3500,
      },
    ],
    amenities: [
      "Historic Charm",
      "Theatre District",
      "Fine Dining",
      "Afternoon Tea",
      "Butler Service",
      "Rooftop Bar",
      "Free Wi-Fi",
      "Fitness Center",
    ],
    rating: 4.8,
    reviews: 970,
    book_now_url: "https://www.thesavoylondon.com/",
  },

  {
    id: 8,
    name: "Raffles Singapore",
    image: "https://www.ahstatic.com/photos/a5e1_ho_00_p_1024x768.jpg",
    description:
      "Raffles Singapore is an iconic colonial-style luxury hotel, renowned for its timeless elegance, impeccable service, and rich heritage. With personal butlers, world-class dining, and its famous Singapore Sling cocktail, it offers an unparalleled experience in the heart of the city.",
    location: {
      city: "Singapore",
      country: "Singapore",
      address: "1 Beach Rd, Singapore 189673",
    },
    room_types: [
      {
        type: "Courtyard Suite",
        price_per_night: 680,
      },
      {
        type: "Palm Court Suite",
        price_per_night: 1200,
      },
      {
        type: "Presidential Suite",
        price_per_night: 4200,
      },
    ],
    amenities: [
      "Colonial Elegance",
      "Personal Butler",
      "Signature Cocktails",
      "Luxury Spa",
      "Fine Dining",
      "Private Verandas",
      "Free Wi-Fi",
      "Heritage Tours",
    ],
    rating: 4.9,
    reviews: 850,
    book_now_url: "https://www.raffles.com/singapore/",
  },

  {
    id: 9,
    name: "Hotel de Russie",
    image: "https://www.travelandleisure.com/thmb/Sp5c-hY03EDOex4fky2MWvfj-1s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-exterior-hotel-de-russie-BESTROMEHTL0324-c13230e4dc4c48659a598f6f75198d7a.jpg",
    description:
      "Hotel de Russie is a luxurious oasis in the heart of Rome, offering an exquisite blend of classical elegance and modern comfort. Featuring a serene private garden, a world-class spa, and a Michelin-starred restaurant, it provides a refined retreat near the city's historic landmarks.",
    location: {
      city: "Rome",
      country: "Italy",
      address: "Via del Babuino, 9, 00187 Roma RM, Italy",
    },
    room_types: [
      {
        type: "Classic Room",
        price_per_night: 410,
      },
      {
        type: "Garden View Suite",
        price_per_night: 900,
      },
      {
        type: "Nijinsky Suite",
        price_per_night: 4500,
      },
    ],
    amenities: [
      "Luxury Spa",
      "Garden View",
      "Michelin-star Restaurant",
      "Private Terraces",
      "Fine Dining",
      "Fitness Center",
      "Free Wi-Fi",
      "Concierge Service",
    ],
    rating: 4.7,
    reviews: 760,
    book_now_url:
      "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/",
  },

  {
    id: 10,
    name: "Mandarin Oriental Hong Kong",
    image: "https://assets-us-01.kc-usercontent.com/9e9a95c0-1d15-00d5-e878-50f070203f13/57876dcf-1d10-432e-8d39-e7001c93c6c6/MO-Exterior.jpg",
    description:
      "Mandarin Oriental Hong Kong is an iconic luxury hotel, blending timeless elegance with modern sophistication. Overlooking Victoria Harbour, it offers world-class dining, impeccable service, and luxurious suites designed for ultimate comfort.",
    location: {
      city: "Hong Kong",
      country: "China",
      address: "5 Connaught Road Central, Central, Hong Kong",
    },
    room_types: [
      {
        type: "Deluxe Room",
        price_per_night: 720,
      },
      {
        type: "Harbor View Suite",
        price_per_night: 1400,
      },
      {
        type: "Presidential Suite",
        price_per_night: 5000,
      },
    ],
    amenities: [
      "Harbor View",
      "Luxury Suites",
      "World-Class Dining",
      "Exclusive Spa",
      "Rooftop Bar",
      "Fitness Center",
      "Free Wi-Fi",
      "Afternoon Tea Lounge",
    ],
    rating: 4.9,
    reviews: 920,
    book_now_url: "https://www.mandarinoriental.com/hong-kong",
  },

  {
    id: 11,
    name: "The Oberoi Udaivilas",
    image: "https://media.cntraveler.com/photos/5c06e5a701ffc86b13da2528/16:9/w_2560,c_limit/The-Oberoi-Udaivilas,-Udaipur__2018_Premier-Lake-View-Rooms-with-Semi-Private-Pools---The-Oberoi-Udaivilas,-Udaipur-01.jpg",
    description:
      "The Oberoi Udaivilas is a magnificent palace hotel set on the banks of Lake Pichola, offering breathtaking views and royal Rajasthani hospitality. Featuring grand architecture, luxurious rooms, and exquisite fine dining, it is a perfect destination for a regal retreat.",
    location: {
      city: "Udaipur",
      country: "India",
      address:
        "Haridasji Ki Magri, Mulla Talai, Udaipur, Rajasthan 313001, India",
    },
    room_types: [
      {
        type: "Premier Room",
        price_per_night: 530,
      },
      {
        type: "Luxury Suite with Private Pool",
        price_per_night: 1200,
      },
      {
        type: "Kohinoor Suite",
        price_per_night: 4500,
      },
    ],
    amenities: [
      "Lake View",
      "Royal Decor",
      "Fine Dining",
      "Private Courtyards",
      "Luxury Spa",
      "Traditional Boat Rides",
      "Fitness Center",
      "Free Wi-Fi",
    ],
    rating: 4.8,
    reviews: 990,
    book_now_url:
      "https://www.oberoihotels.com/hotels-in-udaipur-udaivilas-resort/",
  },

  {
    id: 12,
    name: "Fairmont Banff Springs",
    image: "https://banfflakelouise.bynder.com/m/b1e860e9fd3add0/2000x1080_jpg-2021_FairmontBanffSprings_Winter_Accommodation.jpg",
    description:
      "Fairmont Banff Springs, known as the 'Castle in the Rockies,' is a luxurious mountain retreat offering breathtaking views, world-class skiing, and rejuvenating hot springs. Nestled in Banff National Park, this iconic resort combines rustic elegance with modern comforts.",
    location: {
      city: "Banff",
      country: "Canada",
      address: "405 Spray Ave, Banff, AB T1L 1J4, Canada",
    },
    room_types: [
      {
        type: "Fairmont Room",
        price_per_night: 380,
      },
      {
        type: "Deluxe Mountain View Room",
        price_per_night: 620,
      },
      {
        type: "Fairmont Gold Suite",
        price_per_night: 1600,
      },
    ],
    amenities: [
      "Mountain Lodge",
      "Skiing",
      "Hot Springs",
      "Luxury Spa",
      "Golf Course",
      "Fine Dining",
      "Fitness Center",
      "Free Wi-Fi",
    ],
    rating: 4.7,
    reviews: 870,
    book_now_url: "https://www.fairmont.com/banff-springs/",
  },

  {
    id: 13,
    name: "The Langham, Melbourne",
    image: "https://www.langhamhotels.com/content/dam/langhamhotels/dynamicmedia/pacific/the-langham-melbourne-tlmel/home/tlmel-home-did-you-know-hotel-lobby-chandelier.jpg",
    description:
      "The Langham, Melbourne is a sophisticated riverside retreat offering stunning Yarra River views, an indulgent luxury spa, and a world-famous high tea experience. With elegant accommodations and impeccable service, it provides an unforgettable stay in the heart of the city.",
    location: {
      city: "Melbourne",
      country: "Australia",
      address: "1 Southgate Ave, Southbank VIC 3006, Australia",
    },
    room_types: [
      {
        type: "Superior Room",
        price_per_night: 460,
      },
      {
        type: "Deluxe River View Room",
        price_per_night: 650,
      },
      {
        type: "Executive Terrace Suite",
        price_per_night: 1800,
      },
    ],
    amenities: [
      "Yarra River View",
      "Luxury Spa",
      "High Tea Experience",
      "Heated Indoor Pool",
      "Fine Dining",
      "Fitness Center",
      "Free Wi-Fi",
      "24-Hour Concierge Service",
    ],
    rating: 4.8,
    reviews: 940,
    book_now_url: "https://www.langhamhotels.com/en/the-langham/melbourne/",
  },
  {
    id: 14,
    name: "Rosewood Beijing",
    image: "https://images.squarespace-cdn.com/content/v1/549d41a3e4b003c6ce131926/1457265614422-6HLP8O947NIQ5YYBN7MJ/image-asset.jpeg?format=1500w",
    description:
      "Rosewood Beijing is a sophisticated urban sanctuary, blending traditional Chinese aesthetics with modern luxury. Featuring stunning skyline views, spacious suites, and an exquisite culinary experience, this hotel offers unparalleled elegance in the heart of Beijing.",
    location: {
      city: "Beijing",
      country: "China",
      address: "Jing Guang Centre, Hujialou, Chaoyang, Beijing, China",
    },
    room_types: [
      {
        type: "Deluxe Room",
        price_per_night: 500,
      },
      {
        type: "Executive Suite",
        price_per_night: 950,
      },
      {
        type: "Manor Suite",
        price_per_night: 2500,
      },
    ],
    amenities: [
      "Luxury Suites",
      "Skyline View",
      "Authentic Cuisine",
      "Exclusive Spa",
      "Indoor Pool",
      "Fitness Center",
      "Personalized Butler Service",
      "Free Wi-Fi",
    ],
    rating: 4.9,
    reviews: 880,
    book_now_url: "https://www.rosewoodhotels.com/en/beijing",
  },

  {
    id: 15,
    name: "Hotel Bel-Air",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/28/b1/57/e4/the-restaurant-at-hotel.jpg",
    description:
      "Nestled in a secluded canyon, Hotel Bel-Air is an iconic retreat offering timeless Hollywood glamour, lush gardens, and world-class luxury. With an exclusive spa, a serene outdoor pool, and fine dining, it is a sanctuary of elegance in Los Angeles.",
    location: {
      city: "Los Angeles",
      country: "USA",
      address: "701 Stone Canyon Rd, Los Angeles, CA 90077, USA",
    },
    room_types: [
      {
        type: "Deluxe Room",
        price_per_night: 750,
      },
      {
        type: "Bel-Air Suite",
        price_per_night: 1500,
      },
      {
        type: "Presidential Suite",
        price_per_night: 5000,
      },
    ],
    amenities: [
      "Hollywood Glamour",
      "Outdoor Pool",
      "Luxury Spa",
      "Fine Dining",
      "Private Patios",
      "Lush Gardens",
      "Fitness Center",
      "Free Wi-Fi",
    ],
    rating: 4.9,
    reviews: 960,
    book_now_url:
      "https://www.dorchestercollection.com/en/los-angeles/hotel-bel-air/",
  },
  {
    "id": 16,
    "name": "Signiel Seoul",
    "image": "https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/6/0/82/974/400/SIGNIEL_SEOUL_1_O.jpg?tr=w-1200%2Cfo-auto",
    "description": "Located in Lotte World Tower, Signiel Seoul offers breathtaking city views, Michelin-star dining, and world-class luxury in the heart of South Korea’s capital.",
    "location": {
      "city": "Seoul",
      "country": "South Korea",
      "address": "300 Olympic-ro, Songpa-gu, Seoul, South Korea"
    },
    "room_types": [
      {
        "type": "Deluxe Room",
        "price_per_night": 450
      },
      {
        "type": "Premier Suite",
        "price_per_night": 1200
      },
      {
        "type": "Royal Suite",
        "price_per_night": 5000
      }
    ],
    "amenities": [
      "Skyline Views",
      "Infinity Pool",
      "Luxury Spa",
      "Fine Dining",
      "Exclusive Lounge",
      "Fitness Center",
      "Free Wi-Fi"
    ],
    "rating": 4.8,
    "reviews": 1100,
    "book_now_url": "https://www.signielseoul.com"
  },
  {
    "id": 17,
    "name": "Four Seasons Hotel Seoul",
    "image": "https://hospitality-on.com/sites/default/files/import/contenu/FourSeasonsSoeul.jpg",
    "description": "A sophisticated blend of modern luxury and traditional Korean elegance, Four Seasons Hotel Seoul offers top-tier hospitality, award-winning restaurants, and a prime location near Gwanghwamun.",
    "location": {
      "city": "Seoul",
      "country": "South Korea",
      "address": "97 Saemunan-ro, Jongno-gu, Seoul, South Korea"
    },
    "room_types": [
      {
        "type": "Premier Room",
        "price_per_night": 550
      },
      {
        "type": "Executive Suite",
        "price_per_night": 1300
      },
      {
        "type": "Presidential Suite",
        "price_per_night": 6000
      }
    ],
    "amenities": [
      "Luxury Spa",
      "Indoor Golf Simulator",
      "Fine Dining",
      "Rooftop Bar",
      "Heated Indoor Pool",
      "Fitness Center",
      "Free Wi-Fi"
    ],
    "rating": 4.9,
    "reviews": 1450,
    "book_now_url": "https://www.fourseasons.com/seoul/"
  },
  {
    "id": 18,
    "name": "The Shilla Seoul",
    "image": "https://static-new.lhw.com/HotelImages/Final/LW1808/lw1808_59949052_720x450.jpg",
    "description": "A landmark of Korean hospitality, The Shilla Seoul combines traditional elegance with modern luxury, offering serene gardens, exquisite dining, and a world-class wellness spa.",
    "location": {
      "city": "Seoul",
      "country": "South Korea",
      "address": "249 Dongho-ro, Jung-gu, Seoul, South Korea"
    },
    "room_types": [
      {
        "type": "Deluxe Room",
        "price_per_night": 400
      },
      {
        "type": "Grand Suite",
        "price_per_night": 1000
      },
      {
        "type": "Presidential Suite",
        "price_per_night": 4500
      }
    ],
    "amenities": [
      "Garden Views",
      "Luxury Spa",
      "Michelin-Star Dining",
      "Outdoor Pool",
      "Designer Boutiques",
      "Fitness Center",
      "Free Wi-Fi"
    ],
    "rating": 4.8,
    "reviews": 1250,
    "book_now_url": "https://www.shillahotels.com/seoul"
  }
  
  
];
