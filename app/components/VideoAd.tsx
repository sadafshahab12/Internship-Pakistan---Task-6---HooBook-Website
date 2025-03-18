import React from "react";

const VideoAd = ({ videoSrc }: { videoSrc: string }) => {
  return (
    <div className=" h-100 w-full mb-5">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className=" w-full h-60 xs:h-80 sm:h-full object-cover object-center"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoAd;
