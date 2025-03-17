"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="sidenav  bg-gray-100 h-screen">
        <nav className="space-y-3 p-5">
          <Link
            href={"/user-dashboard/curr-book"}
            className={`${pathname === "/curr-book" ? "bg-blue-400" : "bg-charcoal" } py-3 px-4 w-full block text-white text-sm rounded-md`}
          >
            Current Booking
          </Link>
          <Link
            href={"/user-dashboard/past-book"}
            className="bg-charcoal py-3 px-4 w-full block text-white text-sm rounded-md"
          >
            Past Booking
          </Link>
          <Link
            href={"/user-dashboard/profile"}
            className="bg-charcoal py-3 px-4 w-full block text-white text-sm rounded-md"
          >
            Profile Settings
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
