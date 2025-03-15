import React from "react";

const Search = () => {
  return (
    <div className="p-5 bg-gray-100">
      <div className="bg-white grid grid-cols-1 xs:grid-cols-3 mdl:grid-cols-5 p-5 xxxs:p-8 gap-4 items-end rounded-md">
        <div className="space-y-2">
          <label htmlFor="search" className="search-label">
            Search Hotel by City{" "}
          </label>
          <input
            type="text"
            placeholder="Enter City Name"
            id="search"
            className="search-input"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="checkin" className="search-label">
            Check-in Date{" "}
          </label>
          <input type="date" id="checkin" className="search-input" />
        </div>
        <div className="space-y-2">
          <label htmlFor="checkout" className="search-label">
            Check-out Date
          </label>
          <input type="date" id="checkout" className="search-input" />
        </div>
        <div className="space-y-2">
          <label htmlFor="guest" className="search-label">
            Number of guests
          </label>
          <input type="number" id="guest" className="search-input" />
        </div>
        <div>
          <button className="bg-charcoal text-white text-sm w-full py-3 cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
