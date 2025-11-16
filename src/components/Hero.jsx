import React from "react";
import heroimg from '../assets/img/circle.png'
const Hero = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse items-center lg:px-10 lg:py-10 py-0 mx-auto h-[100vh]   ">
        <div className=" w-[90%]  lg:w-[60%] px-2 ">
          <div className=" flex flex-col lg:space-y-2 mb-2 lg:mb-10">
            <div className="gradient-text bg-gradient-to-r from-[#00BFA6] to-[#016179] text-2xl lg:text-5xl  font-bold glowtext">
              Telling the Stories of the AI
            </div>
            <div className="glowtext gradient-text bg-gradient-to-r from-[#00BFA6] to-[#016179] text-2xl lg:text-5xl ">
              Agents Shaping the Future
            </div>

          </div>
          <div className="lg:text-2xl lg:px-0 px-2 text-center lg:text-start  text-white font-light  mb-8 lg:w-[80%]">
            Making AI projects simple and connecting creators with their
            audience through powerful storytelling.
          </div>
          <div className="flex gap-2  lg:justify-normal justify-center mx-auto">
            <button className="bg-blue600 text-white px-4 py-2 logbtn rounded-3xl ">
              Get Started ➡️
            </button>
            <button className="text-blue-400 px-8 py-2 border border-blue-400 rounded-3xl">
              Login ➡️
            </button>
          </div>
        </div>
        <img
          src={heroimg}
          className=" items-center m-auto   lg:w-[43%] "
          alt=""
        />
      </div>

    </>
  );
};

export default Hero;
