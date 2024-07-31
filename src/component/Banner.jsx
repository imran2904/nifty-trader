import React from "react";
import backgroundImage from "../assets/image 127.png";

const BannerWithBackground = () => {
  return (
    <div className="relative shadow-xl  mx-7 mb-10 p-4 md:p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          className="object-cover  h-full absolute right-0 top-0"
          style={{ objectPosition: "right" }}
        />
      </div>
      <div className="relative md:text-black text-white z-10 space-y-2 md:space-y-4 mb-4 md:mb-0">
        <h2 className="text-xl  md:text-2xl lg:text-2xl font-bold">
          Missing Trades Because of Outdated Data?
        </h2>
        <h1 className="text-sm  lg:text-base">
          Get the Live Market Screening with Dynamic Filters
        </h1>
      </div>
      <button className="relative z-10 bg-sky-950 hover:border-2 hover:text-sky-700 hover:bg-transparent duration-300 text-white font-bold py-2 px-4 rounded">
        Get Free Trial
      </button>
    </div>
  );
};

export default BannerWithBackground;
