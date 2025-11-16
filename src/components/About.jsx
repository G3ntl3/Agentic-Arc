import React from "react";
import about from "../assets/img/about.png";
const About = () => {
  return (
    <div className="px-5 mt-20 lg:mt-0">
      <div className="text-center glowtext gradient-text text-2xl lg:text-4xl">
        About Us
      </div>
      <div className="text-white lg:text-3xl font-extralight text-center">
        Shaping the Future of Intelligent digital experiences.
      </div>

      <div className="flex lg:flex-row flex-col justify-between lg:px-10 lg:mt-20 mt-8 w-full border-amber-100 items-center">
        <div className="text lg:w-[50%] w-full text-white">
          <p className="text-2xl lg:text-4xl lg:text-start text-center">
            We don't just <span className="gradient-text">create</span>, we{" "}
            <span className="gradient-text">solve, enhance,</span> and{" "}
            <span className="gradient-text">elevate.</span>
          </p>
          <p className="my-3 lg:text-start font-extralight">
            Agentic Arc is a next-generation platform that blends AI, Web3, and
            automation to help creators, brands, and innovators build smarter
            digital experiences.
          </p>{" "}
          <p className="my-3  font-extralight">
            From AI-powered content generation to decentralized collaboration
            tools, we’re reimagining how people interact, create, and scale
            their ideas in the digital age.
          </p>
          <p className="my-3  font-extralight">
            We believe in creating a seamless bridge between humans and
            intelligent agents, empowering teams and individuals to work faster,
            smarter, and more creatively.
          </p>
          <p className="my-3  font-extralight">
            Our mission is simple: to give you the tools, insights, and automation to turn bold ideas into powerful realities.
          </p>
        </div>

        <img src={about} alt="about" />
      </div>
    </div>
  );
};

export default About;
