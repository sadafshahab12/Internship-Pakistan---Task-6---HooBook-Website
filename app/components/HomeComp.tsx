import React from "react";
import Hero from "./HomeComp/Hero";
import Search from "./HomeComp/Search";
import FeaturedHotel from "./HomeComp/FeaturedHotel";
import PopularDestinations from "./HomeComp/PopularDestination";
import VideoAd from "./VideoAd";
import Videos from "./HomeComp/Videos";
import Footer from "./Footer";

const HomeComp = () => {
  return (
    <div>
      <Hero />
      <Search />
      <FeaturedHotel />
      <VideoAd videoSrc="https://cdn.pixabay.com/video/2016/06/27/3625-172488382_large.mp4" />
      <PopularDestinations />
      <Videos />
      <Footer/>
    </div>
  );
};

export default HomeComp;
