import React from "react";
import { popularDestination } from "@/app/data/data";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { LuHotel } from "react-icons/lu";
import { BiChevronRight } from "react-icons/bi";

const PopularDestinations: React.FC = () => {
  return (
    <section className="py-16 px-4  max-w-6xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Popular Destinations
        </h2>
        <p className="text-gray-600 mb-12">
          Discover our most sought-after travel destinations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDestination.map((destination, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10" />
              <Image
                src={destination.image}
                alt={destination.city}
                className="w-full h-[300px] xxs:h-[400px] object-cover"
                width={1000}
                height={500}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center mb-2">
                  <FiMapPin className="w-5 h-5 text-white/80 mr-2" />
                  <span className="text-white/80 text-sm">
                    {destination.country}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {destination.city}
                </h3>
                <p className="text-white/90 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <LuHotel className="w-4 h-4 text-white/80 mr-2" />
                    <span className="text-white/80 text-sm">
                      Popular Hotels
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {destination.popular_hotels.map((hotel, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
                      >
                        {hotel}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="flex items-center text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-sm group-hover:bg-white/30">
                  Explore More
                  <BiChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
