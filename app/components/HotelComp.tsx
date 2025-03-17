import React from "react";
import HotelListing from "./HotelsComp/HotelList";
import HeroSection from "./HotelsComp/HeroSection";

const HotelComp = () => {
  return (
    <div>
      <HeroSection />
      <HotelListing />
    </div>
  );
};

export default HotelComp;
