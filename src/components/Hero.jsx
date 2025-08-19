import React from "react";
import bgimg from "../assets/img/bgimg.png";
import shiningbg from "../assets/img/shiningbg.jpg";
import Topnav from "./Topnav";
const Hero = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat w-[vw] overflow-hidden  lg:h-screen "
        style={{ backgroundImage: `url(${shiningbg})` }}
      >
        <div
          className="bg-cover bg-center bg-no-repeat w-[100%] mt-5 opacity-20  overflow-hidden lg:h-screen "
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        <div className="  absolute inset-0 bg-emerald-950/50  ">
          <Topnav className=" z-40 absolute  text-white" />
          <div className="items-center">
            <div className=" gradient-text bg-gradient-to-r from-[#00BFA6] to-[#016179] border text-6xl px-20 text-center">
              Telling the Stories of the AI Agents  
            </div>
            <div className=" gradient-text bg-gradient-to-r from-[#00BFA6] to-[#016179] border text-6xl px-20 text-center">
                Shaping the Future
            </div>
            <h1 className="text-4xl gradient-text font-bold bg-gradient-to-r from-[#ca3f15] to-[#557901] bg-clip-text text-transparent">
              Gradient Text
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
