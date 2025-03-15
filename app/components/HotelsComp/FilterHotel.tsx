import React from "react";
import { LuSlidersHorizontal } from "react-icons/lu";
import { FilterProps, SortOption } from "@/app/data/dataTypes";

const sortOption: { value: SortOption; label: string }[] = [
  {
    value: "price-asc",
    label: "Price: Low to High",
  },
  {
    value: "price-desc",
    label: "Price: High to Low",
  },
  {
    value: "rating-desc",
    label: "Highest Rated",
  },
  {
    value: "reviews-desc",
    label: "Most Reviewed",
  },
];

const amenityOptions = [
  "Luxury Spa",
  "Fine Dining",
  "Luxury Suites",
  "Skyline View",
  "Oceanfront View",
  "Harbor View",
];
const FilterHotel = ({ filters, onFilterChange }: FilterProps) => {
  return (
    <section>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
        <div className="flex items-center gap-2 mb-6">
          <LuSlidersHorizontal className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Filters</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Price Range
            </label>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    minPrice: Number(e.target.value),
                  })
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    maxPrice: Number(e.target.value),
                  })
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
                placeholder="Max"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Minimum Rating
            </label>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={filters.rating}
              onChange={(e) =>
                onFilterChange({ ...filters, rating: Number(e.target.value) })
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {filters.rating} stars
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  sortBy: e.target.value as SortOption,
                })
              }
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
            >
              {sortOption.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Amenities</label>
            <div className="flex flex-wrap gap-2">
              {amenityOptions.map((amenity) => (
                <label key={amenity} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={(e) => {
                      const newAmenities = e.target.checked
                        ? [...filters.amenities, amenity]
                        : filters.amenities.filter((a) => a !== amenity);
                      onFilterChange({ ...filters, amenities: newAmenities });
                    }}
                    className="rounded border-gray-300 text-emerald-600 shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm capitalize">{amenity}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterHotel;
