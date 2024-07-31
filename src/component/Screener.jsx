import React, { useState } from "react";
import advacne_option from "../assets/advance option.png";
import advacne_option1 from "../assets/advance option 1.png";
import advance_stock from "../assets/advance stock.png";
import advance_stock1 from "../assets/advance stock 1.png";
import live_market from "../assets/live market.png";
import live_market1 from "../assets/live market 1.png";
import option_screen from "../assets/option screen.png";
import option_screen1 from "../assets/option screen 1.png";

const images = [
  { img1: advacne_option, img2: advacne_option1 },
  { img1: advance_stock, img2: advance_stock1 },
  { img1: live_market, img2: live_market1 },
  { img1: option_screen, img2: option_screen1 },
];

const Screener = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col sm:flex-row mb-10 mx-7 w-auto gap-7">
      {images.map((image, index) => (
        <div
          key={index}
          onMouseOver={() => setHoveredIndex(index)}
          onMouseOut={() => setHoveredIndex(null)}
        >
          <img
            className="w-full"
            src={hoveredIndex === index ? image.img2 : image.img1}
            alt={`Image ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Screener;
