import React from "react";
import insta from "../assets/Instagram.png";
import facbook from "../assets/facbook.png";
import youtube from "../assets/youtube.png";
import x from "../assets/x.png";
import linkdin from "../assets/linkdin.png";
import teligram from "../assets/teligram.png";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center bg-black sm:text-center sm:justify-between">
      <div className="flex relative mx-4 py-3 space-x-2 flex-row">
        <img src={facbook} alt="" />
        <img src={x} alt="" />
        <img src={youtube} alt="" />
        <img src={linkdin} alt="" />
        <img src={insta} alt="" />
        <img src={teligram} alt="" />
      </div>
      <div>
        <a
          href="www.niftytrader.in"
          className="text-white mx-4 md:text-base underline"
        >
          {" "}
          www.niftytrader.in
        </a>
      </div>
    </div>
  );
};

export default Footer;
