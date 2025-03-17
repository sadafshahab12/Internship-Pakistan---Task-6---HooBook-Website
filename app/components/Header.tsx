"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const closeToggle = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`bg-white flex-between h-16 px-5 sm:px-10 text-charcoal fixed w-full z-50 ${
        isScrolled
          ? "bg-white shadow-md text-charcoal"
          : "bg-transparent text-charcoal"
      }`}
    >
      <div className="flex-center gap-3">
        <HiOutlineMenuAlt1
          className="w-5 h-5 cursor-pointer sm:hidden block"
          onClick={handleToggle}
        />
        <h1 className="text-2xl sm:text-3xl font-bold  ">HooBook</h1>
      </div>
      <nav className="space-x-14 text-sm sm:block hidden">
        <Link
          href={"/"}
          className="hover:font-bold transition-all duration-300 ease-in"
        >
          Home{" "}
        </Link>
        <Link
          href={"/hotels"}
          className="hover:font-bold transition-all duration-300 ease-in"
        >
          Hotels{" "}
        </Link>
        <Link
          href={"/booking"}
          className="hover:font-bold transition-all duration-300 ease-in"
        >
          Booking{" "}
        </Link>
        <Link
          href={"/user-dashboard"}
          className="hover:font-bold transition-all duration-300 ease-in"
          onClick={closeToggle}
        >
          User Dashboard{" "}
        </Link>
        <Link
          href={"/admin-dahsboard"}
          className="hover:font-bold transition-all duration-300 ease-in"
          onClick={closeToggle}
        >
          Admin Dashboard{" "}
        </Link>
      </nav>
      {/* mobile menu  */}
      <nav
        className={`flex flex-col gap-10 bg-charcoal text-white text-sm sm:hidden absolute top-0  p-5 h-screen w-[70%] transition-all duration-300 ease-in-out ${
          isOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex-left gap-3 text-white">
          <CgClose
            className="w-5 h-5 cursor-pointer sm:hidden block"
            onClick={closeToggle}
          />
          <h1 className="text-2xl sm:text-3xl font-bold  ">HooBook</h1>
        </div>
        <div className="pl-8 flex flex-col gap-5 ">
          <Link
            href={"/"}
            className="hover:font-bold transition-all duration-300 ease-in"
            onClick={closeToggle}
          >
            Home{" "}
          </Link>
          <Link
            href={"/hotels"}
            className="hover:font-bold transition-all duration-300 ease-in"
            onClick={closeToggle}
          >
            Hotels{" "}
          </Link>
          <Link
            href={"/booking"}
            className="hover:font-bold transition-all duration-300 ease-in"
            onClick={closeToggle}
          >
            Booking{" "}
          </Link>
          <Link
            href={"/user-dashboard"}
            className="hover:font-bold transition-all duration-300 ease-in"
            onClick={closeToggle}
          >
            User Dashboard{" "}
          </Link>
          <Link
            href={"/admin-dahsboard"}
            className="hover:font-bold transition-all duration-300 ease-in"
            onClick={closeToggle}
          >
            Admin Dashboard{" "}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
