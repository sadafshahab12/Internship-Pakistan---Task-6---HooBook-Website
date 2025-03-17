"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  FilterState,
  HotelContextProps,
  HotelListType,
} from "../data/dataTypes";

export const HotelContext = createContext<HotelContextProps | undefined>(
  undefined
);

export const HotelContextProvider = ({ children }: { children: ReactNode }) => {
  const [hotelData, setHotelData] = useState<HotelListType[]>([]);

  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    minPrice: 0,
    maxPrice: 1500,
    rating: 0,
    amenities: [],
    sortBy: "rating-desc",
  });
  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await fetch("../api/hotel-list");
        const data = await response.json();
        setHotelData(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchHotelData();
  }, []);

  const filteredHotels = useMemo(() => {
    return hotelData
      .filter((hotel) => {
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
          filters.amenities.every((amenity) =>
            hotel.amenities.includes(amenity)
          );
        return matchesPrice && matchesRating && matchesAmenities;
      })
      .sort((a, b) => {
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
  }, [filters, hotelData]);
  return (
    <HotelContext.Provider
      value={{ filters, setFilters, filteredHotels, loading, hotelData }}
    >
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
