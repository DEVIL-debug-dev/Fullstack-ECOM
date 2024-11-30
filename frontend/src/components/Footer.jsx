import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32 " alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
          StyleSavvy Fashion Wear celebrates self-expression through stylish, modern
            clothing. We offer diverse collections, blending quality and
            creativity to empower confidence. Committed to sustainability and
            ethical production, our designs reflect the latest trends while
            minimizing environmental impact. Discover versatile pieces that
            resonate with your unique style at StyleSavvy.{" "}
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-9330445696</li>
            <li>devildebugdev07@gmail.com</li>
            <a href="https://www.instagram.com/devil.debug07/">instagram</a>
            <a href="https://www.linkedin.com/in/devildebug23a/">Linkedin</a>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024&copy; StyleSavvy.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
