import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import RequireAuth from '../../components/RequireAuth';
import agent1 from "../../assets/sevices/faceless.png";
import agent2 from "../../assets/sevices/faced.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";
import FloatingNote from "../../components/FloatingNote/FloatingNote";

const cardStyle = {
  background: "linear-gradient(90deg, #002A24 0%, #023B14 100%)",
  border: "1px solid rgba(61,220,151,0.12)",
  boxShadow: "0 12px 40px rgba(2,8,6,0.6)",
  backdropFilter: "blur(6px)",
  padding:"10px 20px "
};

const slides = [
  { id: 1, img: agent1, avatar: agent1, title: "AI Agent", price: "$0.99" },
  { id: 2, img: agent2, avatar: agent2, title: "AI Agent 2", price: "$0.89" },
  { id: 2, img: agent2, avatar: agent2, title: "AI Agent 2", price: "$0.89" },
  { id: 2, img: agent2, avatar: agent2, title: "AI Agent 2", price: "$0.89" },
  { id: 2, img: agent2, avatar: agent2, title: "AI Agent 2", price: "$0.89" },
  { id: 2, img: agent2, avatar: agent2, title: "AI Agent 2", price: "$0.89" },
  { id: 2, img: agent2, avatar: agent2, title: "AI Agent 2", price: "$0.89" },
  { id: 3, img: agent2, avatar: agent2, title: "AI Agent 2", price: "$0.69" },
  { id: 4, img: agent2, avatar: agent2, title: "AI Agent 2", price: "$0.79" },
  // { id: 5, img: "/agent4.jpg", avatar: "/agent4-avatar.jpg", title: "AI Agent 2", price: "$0.79" },
];
const pages={

}

const Advanced = () => {
    const navigate = useNavigate();
  const { authenticated, login, ready } = usePrivy();
  return (
    <RequireAuth>
      <FloatingNote/>
    <div className="w-full my-30 px-4 md:px-0 ">
       <div className="text-center mb-10">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00e6a5] mb-2">
                Education Hub: Advanced mastery
              </h1>
              <p className="text-white text-base sm:text-lg">
Master the frontier of AI agents              </p>
            </div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: -50, // pushes cards inside each other
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-5xl mx-auto"
        breakpoints={{
          320: { slidesPerView: 1.05, spaceBetween: 12 },
          640: { slidesPerView: 1.6, spaceBetween: 20 },
          768: { slidesPerView: 2.2, spaceBetween: 24 },
          1024: { slidesPerView: 2.8, spaceBetween: 32 },
          1280: { slidesPerView: 3.2, spaceBetween: 40 },
        }}
      >
        {slides.map((card) => (
          <SwiperSlide key={card.id} className="flex justify-center">
            <div
              style={cardStyle}
              className="rounded-2xl red overflow-hidden p-4 h-[450px] w-[100%] sm:w-[80%] md:w-[78%] lg:w-[auto] relative"
            >
              <div className="relative">
                <img
                  src={card.img}
                  alt="agent"
                  className="w-full h-44 object-cover rounded-lg"
                />

                {/* Small avatar overlapping bottom-left of the image */}
                <div className="absolute left-3 -bottom-5">
                  <div className="w-12 h-12 rounded-full border-2 border-[#168bda] overflow-hidden bg-[#022b20]">
                    <img
                      src={card.avatar}
                      alt="avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="text-white mt-6">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-green-300 text-sm">Genesis Project</span>
                  <span className="text-green-300 text-sm">{card.price}</span>
                </div>

                <p className="mt-3 text-gray-300 text-sm leading-relaxed min-h-[64px]">
                  Show up as the face of your brand. Record authentic, high-impact
                  videos that connect directly with your audience and build trust...
                </p>
              </div>

              <button className="mt-4 bg-transparent text-green-300 border border-green-300 px-4 py-2 rounded-lg text-sm hover:bg-green-300 hover:text-black transition">
                Learn More →
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
         {/* FOOTER LINKS */}
   

        <div className="text-center mt-14 space-y-3">
        <p className="text-gray-300">
          I Know A Little About Web3{" "}
          <button 
            onClick={() => {
              if (!ready) return;
              if (!authenticated) return login();
                navigate(`/intermediate`)

            }} 
            className="text-[#33ffc0] underline hover:text-[#25ffa0] transition-colors"
          >
            Go to Intermediate
          </button>
        </p>

        <p className="text-gray-300">
          I'm a complete beginner{" "}
          <button 
            onClick={() => {
              if (!ready) return;
              if (!authenticated) return login();
              navigate('/basic')
            }} 
            className="text-[#33ffc0] underline hover:text-[#25ffa0] transition-colors"
          >
            Go to Basic
          </button>
        </p>
      </div>
    </div></RequireAuth>
  );
};

export default Advanced;
