import React from "react";
import bgImg from "../assets/Ellipse 91.png";

const Background = () => {
  return (
    <div className=" ">
      <img
        className="absolute z-[1] -left-16 mt-16 w-96 h-96 object-cover "
        src={bgImg}
        alt="Background"
      />
    </div>
  );
};

export default Background;
