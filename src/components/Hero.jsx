import React from "react";
import bgimg from "../assets/img/bgimg.png";
import shiningbg from "../assets/img/shiningbg.jpg";
import Topnav from "./Topnav";
const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-[vw] overflow-hidden  lg:h-screen "
      style={{ backgroundImage: `url(${shiningbg})` }}
    >
      <div
        className="bg-cover bg-center bg-no-repeat w-[100%] mt-5 opacity-30  overflow-hidden lg:h-screen "
        style={{ backgroundImage: `url(${bgimg})` }}
      ></div>
      <div className="  absolute inset-0 bg-emerald-950/70  ">
        <Topnav className=" z-40 absolute  text-white" />
      </div>
    </div>
  );
};

export default Hero;
