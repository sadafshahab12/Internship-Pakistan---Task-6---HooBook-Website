"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBuilding, FaUser } from "react-icons/fa";
import { CiCalendarDate, CiStar } from "react-icons/ci";
import { BsAward } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const HeroSection: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
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
      className={`relative min-h-screen flex items-center ${
        isDark ? "bg-gray-900" : ""
      }`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070"
          alt="Luxury Hotel"
          className="w-full h-full object-cover"
          width={1000}
          height={500}
        />
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-3 right-30 z-50 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
      >
        <span className="sr-only">Toggle theme</span>
        {isDark ? (
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-200"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Trust Badges */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaUser className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white text-sm">1M+ Happy Travelers</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CiStar className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white text-sm">Top Rated Hotels</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <BsAward className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white text-sm">Best Price Guarantee</span>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
            Find Your Perfect Stay Anywhere in the World
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-200 mb-12 animate-slide-up delay-200">
            Best deals on luxury & budget hotels worldwide
          </h2>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl animate-slide-up delay-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div className="relative">
                <CiCalendarDate className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type="date"
                  placeholder="Check-in"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div className="relative">
                <CiCalendarDate className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type="date"
                  placeholder="Check-out"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/30"
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
              className="mt-6 w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02]"
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
