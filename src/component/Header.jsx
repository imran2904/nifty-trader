import React from "react";
import logo from "../assets/Logo.png";
import Background from "./Background";
import group from "../assets/Group 2564.png";

const Header = () => {
  return (
    <div className="  sm:overflow-hidden  gradient-background">
      <Background />
      <header className="bg-slate-400 h-16 sm:h-auto bg-opacity-60 p-2 flex justify-between items-center fixed top-0 w-full z-10">
        <img className="w-32" src={logo} alt="Logo" />
        <button className="border bg-transparent hover:bg-white hover:text-black text-white px-4 rounded">
          Visit Website
        </button>
      </header>

      <div className="sm:flex-row flex flex-col mt-16 justify-between relative z-10">
        <div className="ml-7 mt-14 space-y-3 text-white">
          <h1 className="text-4xl font-serif">STOCK SCREENING SIMPLIFIED!</h1>
          <p>
            Find Winning Stock Faster With Nifty Trader's
            <br /> Advance Stock Screening Tool
          </p>
          <button className="w-32 hover:bg-transparent hover:text-sky-500 bg-sky-400 hover:border text-white font-bold hover:border-blue-400 p-2 rounded">
            Free Trial
          </button>
        </div>
        <div className="flex justify-center  items-center mt-10 sm:mt-0 sm:mr-10 w-full sm:w-96">
          <img
            className="w-full max-w-sm h-40  sm:h-60 sm:w-96"
            src={group}
            alt="Group Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
