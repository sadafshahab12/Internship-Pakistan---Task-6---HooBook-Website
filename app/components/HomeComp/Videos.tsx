import React from "react";

const Videos = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:gap-4 max-w-6xl mx-auto mb-5">
        <video
          autoPlay
          loop
          muted
          className=" w-full h-full object-cover object-center row-span-2"
        >
          <source
            src="https://cdn.pixabay.com/video/2024/08/25/228180_tiny.mp4"
            type="video/mp4"
          />
        </video>
        <video
          autoPlay
          loop
          muted
          className=" w-full h-full object-cover object-center"
        >
          <source
            src="https://cdn.pixabay.com/video/2024/11/22/242673_large.mp4"
            type="video/mp4"
          />
        </video>
        <video
          autoPlay
          loop
          muted
          className=" w-full h-full object-cover object-center row-span-2"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/08/06/126924-737187450_large.mp4"
            type="video/mp4"
          />
        </video>
        <video
          autoPlay
          loop
          muted
          className=" w-full h-full object-cover object-center"
        >
          <source
            src="https://cdn.pixabay.com/video/2021/03/09/67509-522170714_tiny.mp4"
            type="video/mp4"
          />
        </video>
        <video
          autoPlay
          loop
          muted
          className=" w-full  object-cover object-center col-span-3 h-30 xs:h-40 sm:h-60"
        >
          <source
            src="https://cdn.pixabay.com/video/2024/12/13/246526_large.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default Videos;
