import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        className="w-full hidden md:block"
        alt="banner"
      />
      <img
        src={assets.main_banner_bg_sm}
        className="w-full md:hidden"
        alt="banner"
      />
    </div>
  );
};

export default Banner;
