import React from "react";

const Hero = () => {
  return (
    <section className="pt-16">
      <div className="relative w-full h-[80vh] sm:h-screen flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2023/02/17/151054-800027519_large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 w-auto mdl:max-w-3xl space-y-10 mdl:p-0 p-5 text-white">
          <h1 className="text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl font-bold text-center mdl:text-right">
            Indulge in Luxury – Stay at the {`World's`} Finest Hotels!
          </h1>
          <p className="text-center mdl:text-right text-14 xs:text-lg mdl:text-xl">
            Discover <strong className="capitalize">top-rated</strong> hotels,
            unbeatable prices, and{" "}
            <strong className="capitalize">hassle-free</strong> booking. Your
            dream stay is just a click away!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
