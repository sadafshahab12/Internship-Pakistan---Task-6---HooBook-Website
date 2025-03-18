"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className=" h-full">
      <div className="sidenav bg-gray-100 h-full">
        <nav className="space-y-3 p-5">
          <Link
            href="/admin-dashboard"
            className={`py-3 px-4 w-full block  text-sm rounded-md ${
              pathname === "/admin-dashboard"
                ? "bg-gray-300 text-charcoal border-2  border-charcoal"
                : "bg-charcoal text-white"
            }`}
          >
           Dashboard
          </Link>
          <Link
            href="/admin-dashboard/added-hotels"
            className={`py-3 px-4 w-full block  text-sm rounded-md ${
              pathname === "/admin-dashboard/added-hotels"
                ? "bg-gray-300 text-charcoal border-2  border-charcoal"
                : "bg-charcoal text-white"
            }`}
          >
           Added Hotels
          </Link>
          <Link
            href="/admin-dashboard/all-book"
            className={`py-3 px-4 w-full block  text-sm rounded-md ${
              pathname === "/admin-dashboard/all-book"
                ? "bg-gray-300 text-charcoal border-2  border-charcoal"
                : "bg-charcoal text-white"
            }`}
          >
           View All Booking
          </Link>
      
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
