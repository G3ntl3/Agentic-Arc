import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const cardStyle = {
  background: "linear-gradient(90deg, #002A24 0%,  #023B14 100%)",
  border: "1px solid rgba(61,220,151,0.12)",
  boxShadow: "0 12px 40px rgba(2,8,6,0.6)",
  backdropFilter: "blur(6px)",
};

const cards = [
  {
    title: "Basic Introduction To DeFi",
    text: "Learn what decentralization means, how blockchains work, and why DeFi matters for the future...",
    img: "/placeholder.jpg", // replace with real image
  },
  {
    title: "Basic Introduction To DeFi",
    text: "A simple breakdown of blockchain basics, tokens, wallets, smart contracts, and more...",
    img: "/placeholder.jpg",
  },
];

const Basic = () => {
  return (
    <div className="w-full flex flex-col items-center text-center my-10">
      {/* HEADER */}
      <h2 className="text-2xl md:text-4xl font-semibold text-[#37dca1]">
        Education Hub: Basic Foundations
      </h2>
      <p className="text-gray-300 mt-2 text-lg">
        Learn the basics
      </p>

      {/* DESKTOP VIEW (grid) */}
      <div className="hidden md:grid grid-cols-2 gap-6 mt-10 w-[90%] lg:w-[70%]">
        {cards.map((c, i) => (
          <div
            key={i}
            style={cardStyle}
            className="rounded-xl p-4 flex flex-col text-left"
          >
            <img
              src={c.img}
              alt="card"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-white text-xl font-semibold mb-2">{c.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {c.text}
            </p>
          </div>
        ))}
      </div>

      {/* MOBILE VIEW (carousel) */}
      <div className="md:hidden w-full mt-10 px-4">
        <Swiper spaceBetween={20} slidesPerView={1.1}>
          {cards.map((c, i) => (
            <SwiperSlide key={i}>
              <div
                style={cardStyle}
                className="rounded-xl p-4 flex flex-col text-left"
              >
                <img
                  src={c.img}
                  alt="card"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-white text-lg font-semibold mb-2">
                  {c.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {c.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* FOOTER LINKS */}
      <div className="mt-12">
        <p className="text-white text-sm mb-2">
          I'm A Complete Beginner —{" "}
          <a href="#" className="text-blue-300 underline">Go to Basics</a>
        </p>
        <p className="text-white text-sm">
          I Am Experienced In Web3 —{" "}
          <a href="#" className="text-blue-300 underline">Go to Advanced</a>
        </p>
      </div>
    </div>
  );
};

export default Basic;
