import React from "react";

const Loader = () => {
  return (
    <>
      <section className="flex justify-center items-center h-[50vh]">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
      </section>
    </>
  );
};

export default Loader;
