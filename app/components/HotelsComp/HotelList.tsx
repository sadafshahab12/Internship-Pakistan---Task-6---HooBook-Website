"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import FilterHotel from "./FilterHotel";
import { useRouter } from "next/navigation";
import SkeletonCard from "./SkeletonCard";
import { FilterState } from "@/app/data/dataTypes";
import { HotelListTypes } from "@/app/data/data";

const HotelListing = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulate data fetching delay
  }, []);
  const [filters, setFilters] = useState<FilterState>({
    minPrice: 0,
    maxPrice: 1500,
    rating: 0,
    amenities: [],
    sortBy: "rating-desc",
  });
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <FaStarHalf
          key="half"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }
    return stars;
  };

  const filteredHotels = useMemo(() => {
    return HotelListTypes.filter((hotel) => {
      const minRoomPrice = hotel.room_types.reduce(
        (min, room) => Math.min(min, room.price_per_night),
        Infinity
      );
      const matchesPrice =
        minRoomPrice >= filters.minPrice &&
        (filters.maxPrice === 0 || minRoomPrice <= filters.maxPrice);

      const matchesRating = hotel.rating >= filters.rating;
      const matchesAmenities =
        filters.amenities.length === 0 ||
        filters.amenities.every((amenity) => hotel.amenities.includes(amenity));
      return matchesPrice && matchesRating && matchesAmenities;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case "price-asc":
          return (
            a.room_types[0].price_per_night - b.room_types[0].price_per_night
          );
        case "price-desc":
          return (
            b.room_types[0].price_per_night - a.room_types[0].price_per_night
          );
        case "rating-desc":
          return b.rating - a.rating;
        case "reviews-desc":
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });
  }, [filters]);

  if (loading) {
    return (
      <section className="p-10">
        <FilterHotel filters={filters} onFilterChange={setFilters} />
        <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="p-10">
      <FilterHotel filters={filters} onFilterChange={setFilters} />
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
        {filteredHotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                width={1000}
                height={500}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {hotel.name}
                </h3>
                <span className="text-lg font-bold text-charcoal">
                  ${hotel.room_types[0].price_per_night}
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    /night
                  </span>
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {hotel.location.city}, {hotel.location.country}
              </p>

              <div className="flex items-center mb-4">
                <div className="flex mr-2">{renderStars(hotel.rating)}</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({hotel.reviews} reviews)
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {hotel.amenities.slice(0, 3).map((amenity) => (
                  <div
                    key={amenity}
                    className="flex-left gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-12"
                  >
                    <span className="capitalize">{amenity}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => router.push(`/hotels/${hotel.id}`)}
                className="w-full bg-charcoal text-white font-medium py-2 px-4 rounded-lg duration-200 text-sm cursor-pointer active:scale-95 transition-all"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelListing;
