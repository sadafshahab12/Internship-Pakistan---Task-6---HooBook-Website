"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen">
      <div className="sidenav bg-gray-100 h-full">
        <nav className="space-y-3 p-5">
          <Link
            href="/user-dashboard/curr-book"
            className={`py-3 px-4 w-full block  text-sm rounded-md ${
              pathname === "/user-dashboard/curr-book"
                ? "bg-gray-300 text-charcoal border-2  border-charcoal"
                : "bg-charcoal text-white"
            }`}
          >
            Current Booking
          </Link>
          <Link
            href="/user-dashboard/past-book"
            className={`py-3 px-4 w-full block  text-sm rounded-md ${
              pathname === "/user-dashboard/past-book"
                ? "bg-gray-300 text-charcoal border-2  border-charcoal"
                : "bg-charcoal text-white"
            }`}
          >
            Past Booking
          </Link>
          <Link
            href="/user-dashboard/profile"
            className={`py-3 px-4 w-full block  text-sm rounded-md ${
              pathname === "/user-dashboard/profile"
                ? "bg-gray-300 text-charcoal border-2  border-charcoal"
                : "bg-charcoal text-white"
            }`}
          >
            Profile Settings
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
