export interface FeaturedHotelType {
  id: number;
  name: string;
  city: string;
  image: string;
  rating: number;
  price_per_night: number;
  amenities: string[];
  reviews: number;
}
export interface PopularDestination {
  id: number;
  city: string;
  country: string;
  image: string;
  description: string;
  popular_hotels: string[];
}
export interface HotelListType {
  id: number;
  name: string;
  image: string;
  rating: number;
  description: string;
  location: {
    city: string;
    country: string;
    address: string;
  };
  amenities: string[];
  reviews: number;
  room_types: {
    type: string;
    price_per_night: number;
    max_guests: number;
    availability: {
      check_in: string;
      check_out: string;
    }[];
  }[];
  book_now_url: string;
}
export type SortOption =
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "reviews-desc";
export interface FilterState {
  minPrice: number;
  maxPrice: number;
  rating: number;
  amenities: string[];
  sortBy: SortOption;
}

export interface FilterProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}
export interface HotelContextProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  filteredHotels: HotelListType[];
  hotelData: HotelListType[];
  loading: boolean;
}
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "user" | "admin";
}
