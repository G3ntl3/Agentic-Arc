import React from "react";
import bgimg from "../assets/img/bgimg.png";
import shiningbg from '../assets/img/shiningbg.jpg'
const Hero = () => {
  return (
    <div
      div
      className="bg-cover bg-center bg-no-repeat w-[100%] overflow-hidden lg:h-screen "
      style={{ backgroundImage: `url(${shiningbg})` }}
    >
      <div
        className="bg-cover bg-center bg-no-repeat w-[1996px] ml-[-278.43px] overflow-hidden lg:h-screen "
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="absolute inset-0 bg-emerald-950/70  "></div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus libero
        enim dignissimos, numquam totam quidem fugiat ipsa earum placeat?
        Aperiam, quia quo? Vitae totam ipsa vel corrupti repellendus neque nemo?
        lorem6000
      </div>
    </div>
  );
};

export default Hero;
