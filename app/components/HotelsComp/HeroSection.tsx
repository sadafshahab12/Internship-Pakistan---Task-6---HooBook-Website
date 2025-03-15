"use client";
import React, { useState } from "react";
import { FaBuilding, FaUser } from "react-icons/fa";
import { CiCalendarDate, CiStar } from "react-icons/ci";
import { BsAward } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const HeroSection: React.FC = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <section
      className={`relative min-h-screen flex items-center `}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className=" h-[80vh] sm:h-screen w-full bg-fixed hotel-bg-image opacity-40"></div>
      </div>


      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Trust Badges */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaUser className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-charcoal text-sm">1M+ Happy Travelers</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CiStar className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-charcoal text-sm">Top Rated Hotels</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <BsAward className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-charcoal text-sm">Best Price Guarantee</span>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-4 animate-slide-up">
            Find Your Perfect Stay Anywhere in the World
          </h1>
          <h2 className="text-xl md:text-2xl text-charcoal mb-12 animate-slide-up delay-200">
            Best deals on luxury & budget hotels worldwide
          </h2>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl animate-slide-up delay-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/70 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-white/10 border border-white/80 rounded-xl py-3 pl-12 pr-4 text-charcoal placeholder:text-charcoal focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div className="relative">
                <CiCalendarDate className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/70 w-5 h-5" />
                <input
                  type="date"
                  placeholder="Check-in"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-white/10 border border-white/80 rounded-xl py-3 pl-12 pr-4 text-charcoal placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div className="relative">
                <CiCalendarDate className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/70 w-5 h-5" />
                <input
                  type="date"
                  placeholder="Check-out"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-white/10 border border-white/80 rounded-xl py-3 pl-12 pr-4 text-charcoal placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/70 w-5 h-5" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-white/10 border border-white/80 rounded-xl py-3 pl-12 pr-4 text-charcoal appearance-none focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <option value="" className="text-gray-900">
                    Guests
                  </option>
                  <option value="1" className="text-gray-900">
                    1 Guest
                  </option>
                  <option value="2" className="text-gray-900">
                    2 Guests
                  </option>
                  <option value="3" className="text-gray-900">
                    3 Guests
                  </option>
                  <option value="4" className="text-gray-900">
                    4+ Guests
                  </option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full md:w-auto px-4 py-2 bg-gradient-to-r bg-charcoal text-white transition-all duration-300 hover:scale-[1.02] cursor-pointer rounded-md"
            >
              <div className="flex items-center justify-center">
                <BiSearch className="w-5 h-5 mr-2" />
                Search Hotels
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
