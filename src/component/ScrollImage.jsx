import React, { useState, useEffect } from "react";
import image1 from "../assets/Property 1=Default (1).png";
import image2 from "../assets/Property 1=Variant2.png";
import image3 from "../assets/Property 1=Variant3 (1).png";
import image4 from "../assets/Property 1=Variant4.png";
import image5 from "../assets/Property 1=Variant5 (1).png";
import image6 from "../assets/Property 1=Variant6.png";
const images = [image1, image2, image3, image4, image5, image6];

const ScrollImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  w-full h-72 my-5 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-contain transition-opacity duration-1000 linear ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } ${
            index === (currentIndex + 1) % images.length
              ? "animate-slide-in"
              : ""
          } ${
            index === (currentIndex - 1 + images.length) % images.length
              ? "animate-slide-out"
              : ""
          }`}
        />
      ))}
    </div>
  );
};

export default ScrollImage;
