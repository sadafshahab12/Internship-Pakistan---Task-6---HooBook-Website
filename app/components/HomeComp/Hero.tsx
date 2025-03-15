import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex-center relative ">
        <div className=" h-[80vh] sm:h-screen w-full bg-fixed hero-bg-image opacity-40"></div>
        <div className="absolute z-10 w-auto  mdl:max-w-3xl space-y-10 mdl:p-0 p-5 ">
          <h1 className="text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl font-bold text-center mdl:text-right">Indulge in Luxury – Stay at the {`World's`} Finest Hotels!</h1>
          <p className="text-center mdl:text-right text-14 xs:text-lg mdl:text-xl">Discover <strong className="capitalize">top-rated</strong> hotels, unbeatable prices, and <strong className="capitalize">hassle-free</strong> booking. Your dream stay is just a click away!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
