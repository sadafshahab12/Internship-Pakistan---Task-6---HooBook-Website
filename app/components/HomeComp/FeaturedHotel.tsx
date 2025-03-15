import { featuredHotel } from "@/app/data/data";
import Image from "next/image";
import React from "react";
import { BiChevronRight, BiMapPin } from "react-icons/bi";
import { CiStar } from "react-icons/ci";

const FeaturedHotel = () => {
  return (
    <section className="py-10">
      <div className="pb-5 space-y-3">
        <h1 className="text-5xl text-center font-black ">Featured Hotel</h1>
        <p className="text-center text-gray-500 text-lg">
          Discover Top Stays for Your Perfect Getaway!
        </p>
        <p className="text-sm text-center">
          Book your dream stay at the best hotels with top amenities and
          stunning views.
        </p>
        <p className="bg-charcoal text-white w-full text-center py-3 font-semibold tracking-widest">
          Flash Sale: Up to 30% Off on Featured Stays!
        </p>
      </div>

      <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto justify-items-center">
        {featuredHotel.map((hotel, index) => (
          <div
            key={index}
            className="max-w-md w-full bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="relative h-50 xxs:h-64">
              <Image
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
                width={1000}
                height={500}
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between flex-col xxs:flex-row mb-4">
                <div className="flex justify-between xxs:justify-normal xxs:w-auto w-full xxs:block ">
                  <h2 className=" text-xl xxs:text-2xl font-bold text-charcoal mb-1">
                    {hotel.name}
                  </h2>
                  <div className="flex items-center text-gray-600">
                    <BiMapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{hotel.city}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center mb-1">
                    <CiStar className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold text-charcoal">
                      {hotel.rating}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      ({hotel.reviews})
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-between mb-4 xxs:mb-6 py-2 xxs:py-4 border-y border-gray-100">
                {hotel.amenities.map((amnety, index) => (
                  <div key={index}>
                    <span className="text-12 xxs:text-sm text-gray-600">
                      {amnety}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center flex-col gap-4 xxs:flex-row justify-between">
                <div>
                  <span className="text-2xl xxs:text-3xl font-bold text-charcoal">
                    {hotel.price_per_night}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">per night</span>
                </div>
                <button className="bg-charcoal text-white w-full xxs:w-auto text-sm flex-center gsp-2 px-4  py-3 cursor-pointer">
                  Book Now
                  <BiChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedHotel;
