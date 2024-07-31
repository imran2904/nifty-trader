import React from "react";
import img1 from "../assets/Testimonial.png";
import img2 from "../assets/Testimonial (1).png";
import img3 from "../assets/Testimonial (2).png";
import img4 from "../assets/Testimonial (3).png";
import img5 from "../assets/Testimonial (4).png";
import img6 from "../assets/Testimonial (5).png";
import img7 from "../assets/Testimonial (6).png";
import img8 from "../assets/Testimonial (7).png";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="flex flex-col mx-7   w-auto justify-center items-center text-center">
      <h1 className="text-2xl font-bold mb-4">Client Testimonial</h1>
      <div className="relative space-y-5 overflow-hidden">
        {/* First Row */}
        <div className=" space-x-10  row-slide-left-right">
          <img
            className="flex-shrink-0 w-1/2 object-cover"
            src={img1}
            alt="Client 1"
          />
          <img
            className="flex-shrink-0 w-1/2  object-cover"
            src={img2}
            alt="Client 2"
          />
          <img
            className="flex-shrink-0 w-1/2   object-cover"
            src={img3}
            alt="Client 3"
          />
          <img
            className="flex-shrink-0  w-1/2  object-cover"
            src={img4}
            alt="Client 4"
          />
        </div>

        {/* Second Row */}
        <div className=" space-x-10 row-slide-right-left">
          <img
            className=" w-1/2 h-auto max-w-full object-cover"
            src={img5}
            alt="Client 5"
          />
          <img
            className=" w-1/2  h-auto max-w-full object-cover"
            src={img6}
            alt="Client 6"
          />
          <img
            className="w-1/2  h-auto max-w-full object-cover"
            src={img7}
            alt="Client 7"
          />
          <img
            className=" w-1/2  h-auto max-w-full object-cover"
            src={img8}
            alt="Client 8"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
