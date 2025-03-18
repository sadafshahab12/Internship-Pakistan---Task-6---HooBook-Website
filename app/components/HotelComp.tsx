import React from "react";
import HotelListing from "./HotelsComp/HotelList";
import HeroSection from "./HotelsComp/HeroSection";
import Footer from "./Footer";

const HotelComp = () => {
  return (
    <div>
      <HeroSection />
      <HotelListing />
      <Footer/>
    </div>
  );
};

export default HotelComp;
