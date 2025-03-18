import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiMiniArrowLongLeft } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <div className="search-user bg-gray-100 h-20 grid grid-cols-2 items-center px-8">
      <div className="flex-left gap-5">
        <Link title="go to home"
          href={"/"}
          className="h-8 w-8 bg-charcoal text-white rounded-full flex-center cursor-pointer"
        >
          <HiMiniArrowLongLeft />
        </Link>
        <h1 className="font-bold text-2xl">Admin Dashbaord</h1>
      </div>
      <div className="flex-left gap-4 border px-4 rounded-md w-full">
        <input
          type="text"
          placeholder="search hotels"
          className=" w-full py-2 outline-none "
        />
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBar;
