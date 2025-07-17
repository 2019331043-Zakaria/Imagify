import React from "react";
import { assets } from "../assets/assets";
import { Link, Links } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <Link to="/">
        <img src={assets.newlogo} width={150} alt="" />
      </Link>
      <p className="flex-1 border-l border-gray-500 text-sm text-gray-500 pl-4 max-sm:hidden">
        Copyright @zack.dev | All right reserved.
      </p>

      <div className="flex gap-2.5">
        <img src={assets.facebook_icon} width={35} alt="" />
        <img src={assets.twitter_icon} width={35} alt="" />
        <img src={assets.instagram_icon} width={35} alt="" />
      </div>
    </div>
  );
};

export default Footer;
