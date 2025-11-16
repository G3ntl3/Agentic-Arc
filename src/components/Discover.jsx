import React from "react";

const Discover = () => {
  return (
    <div className="discoverbg px-4 md:px-15 primaryfont py-6 md:py-10">
      <div className="max-w-4xl w-full mx-auto lg:w-[70%] py-6 sm:py-8 md:py-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 sm:px-6 md:p-6 shadow-lg ring-1 ring-white/5">
        <h1 className="text-white font-semibold my-1 sm:my-2 text-xl sm:text-2xl md:text-4xl lg:text-6xl px-2 sm:px-3 md:px-5 leading-tight">
          Discover the Future of AI - Learn About Agents!
        </h1>
        
        <p className="font-normal md:font-bold text-white text-xs sm:text-sm md:text-xl lg:text-2xl px-2 sm:px-3 md:px-5 my-4 sm:my-6 md:my-8 leading-relaxed">
          Explore the world of AI agents—how they work, how to build them, and
          how they can transform industries. Start your AI learning journey
          today and stay ahead of the curve!
        </p>
        
        <button className="bg-blue600 text-white px-4 sm:px-5 md:px-6 mx-2 sm:mx-3 md:mx-5 py-1.5 sm:py-2 md:py-3 mt-2 sm:mt-4 md:mt-10 logbtn rounded-3xl text-xs sm:text-sm md:text-base hover:opacity-90 transition-opacity">
          Learn More ➡️
        </button>
      </div>
    </div>
  );
};

export default Discover;