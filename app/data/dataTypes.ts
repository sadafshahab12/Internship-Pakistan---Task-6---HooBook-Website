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
  city: string;
  country: string;
  image: string;
  rating: number;
  price_per_night: number;
  amenities: string[];
  reviews: number;
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
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  filteredHotels: HotelListType[];
}
