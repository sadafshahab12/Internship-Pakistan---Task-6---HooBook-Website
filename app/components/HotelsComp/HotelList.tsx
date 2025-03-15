import { HotelListTypes } from "@/app/data/data";
import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const HotelListing = () => {
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
  const []
  return (
    <section className="p-10">
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
        {HotelListTypes.map((hotel, index) => (
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
                  ${hotel.price_per_night}
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    /night
                  </span>
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {hotel.city}, {hotel.country}
              </p>

              <div className="flex items-center mb-4">
                <div className="flex mr-2">{renderStars(hotel.rating)}</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({hotel.reviews} reviews)
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {hotel.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex-left gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-12"
                  >
                    <span className="capitalize">{amenity}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-charcoal text-white font-medium py-2 px-4 rounded-lg duration-200 text-sm cursor-pointer active:scale-95 transition-all">
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
