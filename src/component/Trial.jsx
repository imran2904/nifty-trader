import React from "react";
import Maskimg from "../assets/Mask group.png";

const Trial = () => {
  return (
    <div className="relative mb-5 flex justify-end mt-10 px-4 sm:px-20">
      <img
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src={Maskimg}
        alt="Background"
      />

      <div className="flex  flex-col  w-full  max-w-lg p-4 space-y-4   justify-end  rounded-lg ">
        <h1 className="text-xl sm:text-2xl font-semibold">
          Screening Like a Pro With
        </h1>
        <p className="text-2xl sm:text-3xl font-bold">Nifty Trader</p>
        <p className="text-slate-400 text-base sm:text-lg">
          Stop wasting time and start winning! Get access to Nifty Trader's
          Stock Screeners today!
        </p>
        <button className="p-2 w-auto  sm:w-56 rounded hover:bg-transparent hover:text-sky-600 hover:border bg-sky-500 text-white">
          Start Free Trial Now
        </button>
      </div>
    </div>
  );
};

export default Trial;
