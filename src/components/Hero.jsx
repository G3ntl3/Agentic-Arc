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
        <div className=" items-center  absolute inset-0 bg-emerald-950/50  ">
          <Topnav className=" z-40 absolute  text-white" />

          {/* centered text  */}

          <div className="absolute inset-0   flex items-center justify-center flex-col">
            <div className="text-center space-y-4">
              <div className="gradient-text bg-gradient-to-r from-[#00BFA6] to-[#016179] text-6xl px-20 font-bold glowtext">
                Telling the Stories of the AI Agents
              </div>
              <div className="glowtext gradient-text bg-gradient-to-r from-[#00BFA6] to-[#016179] text-6xl px-20">
                Shaping the Future
              </div>
            </div>
            <div className="text-[36px] text-white px-30 mt-10 text-center">
              Making AI projects simple and connecting creators with
            </div>{" "}
            <div className="text-[36px] text-white px-30 text-center">
              their audience through powerful storytelling.
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
