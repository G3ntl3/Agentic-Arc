import React from "react";
import RequireAuth from '../../components/RequireAuth';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";
import basicimg from '../../assets/img/ai.png'
const cardStyle = {
  background: "linear-gradient(90deg, #002A24 0%,  #023B14 100%)",
  border: "1px solid rgba(61,220,151,0.12)",
  boxShadow: "0 12px 40px rgba(2,8,6,0.6)",
  backdropFilter: "blur(6px)",
};

const cards = [
  {
    title: "Basic Introduction To DeFi",
    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora Forem ipsum dolor sit amet, consectetur adipiscing elit.             Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl. torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
    img:basicimg // replace with real image
  },
  {
    title: "Basic Introduction To DeFi",
    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora Forem ipsum dolor sit amet, consectetur adipiscing elit.             Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl. torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
    img:basicimg // replace with real image
  },
  {
    title: "Basic Introduction To DeFi",
    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora Forem ipsum dolor sit amet, consectetur adipiscing elit.             Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl. torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
    img:basicimg // replace with real image
  },
  {
    title: "Basic Introduction To DeFi",
    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora Forem ipsum dolor sit amet, consectetur adipiscing elit.             Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl. torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
    img:basicimg // replace with real image
  },
  {
    title: "Basic Introduction To DeFi",
    text: "A simple breakdown of blockchain basics, tokens, wallets, smart contracts, and more...",
    img: basicimg
  },
];

const Basic = () => {
      const navigate = useNavigate();
  const { authenticated, login, ready } = usePrivy();
  return (
    <RequireAuth>
      <div className="w-full flex flex-col items-center text-center mt-20 mb-10">
      {/* HEADER */}
      <h2 className="text-2xl md:text-4xl font-semibold text-[#37dca1]">
        Education Hub: Basic Foundations
      </h2>
      <p className="text-gray-300 mt-2 text-lg">
        Learn the basics
      </p>

      {/* DESKTOP VIEW (grid) */}
      <div className="hidden md:grid grid-cols-3 gap-6 mt-10 w-[90%] lg:w-[90%]">
        {cards.map((c, i) => (
          <div
            key={i}
            style={cardStyle}
            className="rounded-xl p-4 flex flex-col text-left"
          >
            <div className="relative flex-shrink-0">
        <img
          src={c.img}
          alt={c.title}
          className="w-full p-3 h-48 md:h-52 object-cover rounded-t-2xl"
        />
        <div className="absolute left-2 bottom-2">
          <img
            src={c.avatar || c.img}
            alt={`${c.title} avatar`}
            className="w-12 h-12 rounded-full border-2 border-[#168bda] object-cover"
          />
        </div>
      </div>
            <h3 className=" text-xl font-semibold mb-2 text-[#37dca1]">{c.title}</h3>
            <p className=" text text- text-sm leading-relaxed text-[#37dca1]">
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
         I Am Experienced In Web3{" "}
          <button 
            onClick={() => {
              if (!ready) return;
              if (!authenticated) return login();
              navigate('/advanced')
            }} 
            className="text-[#33ffc0] underline hover:text-[#25ffa0] transition-colors"
          >
            Go to advanced
          </button>
        </p>
      </div></div>
    </RequireAuth>
  );
};

export default Basic;
