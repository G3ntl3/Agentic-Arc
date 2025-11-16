import React from "react";
import heroimg from '../assets/img/circle.png'
import {usePrivy} from '@privy-io/react-auth';
import Connect from "./Connect";
import Disconnect from "./Disconnect";

const Hero = () => {
 const { ready, authenticated } = usePrivy();

   

  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse items-center justify-center pb-10 lg:px-10 md:px-6 px-2 lg:py-10 md:py-5 py-0 mx-auto h-[100vh] lg:mt-10 md:mt-5 mt-0">
        <div className="w-[100%] lg:w-[60%] md:w-[80%] lg:mb-0 mb-16 text-center">
          <div className="flex flex-col lg:space-y-2 md:space-y-1 space-y-0 lg:mb-10 md:mb-6 mb-4 items-center">
            <div className="gradient-text bg-gradient-to-r pb-2 from-[#00BFA6] to-[#016179] text-2xl md:text-4xl lg:text-5xl text-start font-bold glowtext">
              Telling the Stories of the AI
            </div>
            <div className="glowtext gradient-text text-start pb-4 bg-gradient-to-r from-[#00BFA6] to-[#016179] text-2xl md:text-4xl lg:text-5xl">
              Agents Shaping the Future
            </div>
          </div>
          <div className="lg:text-2xl md:text-xl text-base lg:px-0 px-2 text-center lg:text-start text-white font-light mb-6 lg:w-[80%] md:w-[90%] w-full">
            Making AI projects simple and connecting creators with their
            audience through powerful storytelling.
          </div>
          <div className="flex gap-2 lg:justify-normal justify-center mx-auto">
            <Connect />
          </div>
        </div>
        <img
          src={heroimg}
          className="items-center m-auto lg:w-[43%] md:w-[50%] w-[80%]"
          alt=""
        />
      </div>

    </>
  );
};

export default Hero;
