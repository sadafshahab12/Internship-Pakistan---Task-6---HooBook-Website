"use client";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { HotelListTypes } from "../data/data";
import { FilterState, HotelContextProps } from "../data/dataTypes";

export const HotelContext = createContext<HotelContextProps | undefined>(
  undefined
);

export const HotelContextProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<FilterState>({
    minPrice: 0,
    maxPrice: 1000,
    rating: 0,
    amenities: [],
    sortBy: "rating-desc",
  });

  const filteredHotels = useMemo(() => {
    return HotelListTypes.filter((hotel) => {
      const matchesPrice =
        hotel.price_per_night >= filters.minPrice &&
        (filters.maxPrice === 0 || hotel.price_per_night <= filters.maxPrice);
      const matchesRating = hotel.rating >= filters.rating;
      const matchesAmenities =
        hotel.amenities.length === 0 ||
        filters.amenities.every((amenity) => hotel.amenities.includes(amenity));
      return matchesPrice && matchesRating && matchesAmenities;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case "price-asc":
          return a.price_per_night - b.price_per_night;
        case "price-desc":
          return b.price_per_night - a.price_per_night;
        case "rating-desc":
          return b.rating - a.rating;
        case "reviews-desc":
          return a.reviews - b.reviews;
        default:
          return 0;
      }
    });
  }, [filters]);
  return (
    <HotelContext.Provider value={{ filters, setFilters, filteredHotels }}>
      {children}
    </HotelContext.Provider>
  );
};
export const useHotelContext = () => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error(
      "useHotelContext must be used within a HotelContextProvider"
    );
  }
  return context;
};
