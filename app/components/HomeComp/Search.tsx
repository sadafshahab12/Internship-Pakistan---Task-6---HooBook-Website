"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();

  // State for search inputs
  const [searchQuery, setSearchQuery] = useState({
    city: "",
    checkin: "",
    checkout: "",
    guests: 1,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery({ ...searchQuery, [e.target.id]: e.target.value });
  };

  // Handle search action
  const handleSearch = () => {
    if (!searchQuery.city || !searchQuery.checkin || !searchQuery.checkout) {
      alert("Please fill in all fields before searching.");
      return;
    }

    // Redirect to hotel search results page with query parameters
    router.push(
      `/hotels?city=${searchQuery.city}&checkin=${searchQuery.checkin}&checkout=${searchQuery.checkout}&guests=${searchQuery.guests}`
    );
  };

  return (
    <div className="p-5 bg-gray-100">
      <div className="bg-white grid grid-cols-1 xs:grid-cols-3 mdl:grid-cols-5 p-5 xxxs:p-8 gap-4 items-end rounded-md">
        <div className="space-y-2">
          <label htmlFor="city" className="search-label">
            Search Hotel by City{" "}
          </label>
          <input
            type="text"
            placeholder="Enter City Name"
            id="city"
            className="search-input"
            value={searchQuery.city}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="checkin" className="search-label">
            Check-in Date{" "}
          </label>
          <input
            type="date"
            id="checkin"
            className="search-input"
            value={searchQuery.checkin}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="checkout" className="search-label">
            Check-out Date
          </label>
          <input
            type="date"
            id="checkout"
            className="search-input"
            value={searchQuery.checkout}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="guests" className="search-label">
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            className="search-input"
            min="1"
            value={searchQuery.guests}
            onChange={(e) =>
              setSearchQuery({ ...searchQuery, guests: Number(e.target.value) })
            }
          />
        </div>
        <div>
          <button
            className="bg-charcoal text-white text-sm w-full py-3 cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
