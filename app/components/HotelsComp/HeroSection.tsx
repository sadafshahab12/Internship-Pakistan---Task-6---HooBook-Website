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
    <section className="relative min-h-screen flex-center pt-30 md:pt-20 pb-10">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2023/04/24/160346-821086333_tiny.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className=" px-5 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Trust Badges */}
          <div className="hidden sm:flex justify-center gap-6 mb-8">
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
          <h1 className="text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl font-bold text-white mb-4 animate-slide-up">
            Find Your Perfect Stay Anywhere in the World
          </h1>
          <p className="mb-5 text-14 xs:text-lg sm:text-xl md:text-2xl text-white  animate-slide-up delay-200">
            Best deals on luxury & budget hotels worldwide
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl animate-slide-up delay-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="relative">
                <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-white/10 border border-white/80 rounded-md sm:rounded-xl py-3 pl-12 pr-4 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/30 sm:text-14 text-12 "
                />
              </div>

              <div className="relative">
                <CiCalendarDate className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-white/10 border border-white/80 rounded-md sm:rounded-xl py-3 pl-12 pr-4 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/30 sm:text-14 text-12"
                />
              </div>

              <div className="relative">
                <CiCalendarDate className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-white/10 border border-white/80 rounded-md sm:rounded-xl py-3 pl-12 pr-4 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/30 sm:text-14 text-12"
                />
              </div>

              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-white/10 border border-white/80 rounded-md sm:rounded-xl py-3 pl-12 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/30 sm:text-14 text-12"
                >
                  <option value="" className="text-charcoal">
                    Guests
                  </option>
                  <option value="1" className="text-charcoal">
                    1 Guest
                  </option>
                  <option value="2" className="text-charcoal">
                    2 Guests
                  </option>
                  <option value="3" className="text-charcoal">
                    3 Guests
                  </option>
                  <option value="4" className="text-charcoal">
                    4+ Guests
                  </option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full md:w-auto px-4 py-2 bg-charcoal text-white transition-all duration-300 hover:scale-[1.02] cursor-pointer rounded-md"
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
