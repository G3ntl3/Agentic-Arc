import React from "react";
import { useNavigate } from "react-router-dom";
import { usePrivy } from '@privy-io/react-auth';
import basiclogo from "../assets/icon/basic.png";
import advancedlogo from "../assets/icon/advanced.png";
import intermediatelogo from "../assets/icon/intermediate.png";
// import NotepadWidget from "../components/NotepadWidget";
const plans = [
  {
    title: "Basic",
    img: basiclogo,
    items: [
      "Basic Introduction To Defi",
      "Agentic Economy",
      "How To Contribute To AI Economy",
      "Use Cases",
    ],
  },
  {
    title: "Intermediate",
    img: intermediatelogo,
    items: ["Neurobro", "Arbus", "Swarm", "Backram"],
  },
  {
    title: "Advanced",
    img: advancedlogo,
    items: [
      "Using Agents For Their Purpose",
      "Trading",
      "Types Of AI Agents",
      "Analytics To Get Insights",
    ],
  },
];

const EducationHub = () => {
  const navigate = useNavigate();
  const { authenticated, login, ready } = usePrivy();

  return (
    <>
    {/* <NotepadWidget/> */}
    
    <div className="w-full py-16 px-4 md:px-10 bg-[#020b0a] text-white lg:mt-10">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold gradient-text">
          Education Hub
        </h2>
        <p className="text-gray-300 mt-2 text-lg lg:text-3xl">
          Learn, grow, and stay ahead with AI-driven insights.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="rounded-xl p-8 bg-gradient-to-b shadow-xl"
            style={{
              background:
                "linear-gradient(90deg, #002A24 0%,  #023B14 100%)",
              border: "1px solid rgba(61,220,151,0.12)",
              boxShadow: "0 12px 40px rgba(2,8,6,0.6)",
              backdropFilter: "blur(6px)",
            }}
          >
            {/* Title */}
            <div className="flex flex-row justify-center mb-8 items-center">
              <img src={plan.img} alt="" className="w-10 mr-2" />
              <h3 className="text-xl font-semibold text-[#b6ffe2]">
                {plan.title}
              </h3>
            </div>
            {/* List */}
            <ul className="space-y-4 mb-8">
              {plan.items.map((item, j) => (
                <li key={j} className="flex items-center space-x-3">
                  {/* Tailwind Checkmark */}
                  <span className="text-[#31e48f] text-lg">✓</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={() => {
                if (!ready) return;
                if (!authenticated) return login();
                navigate(`/${plan.title.toLowerCase()}`)
              }}
              className="
                w-full
                py-3
                rounded-full
                font-medium cursor-pointer
                bg-gradient-to-r from-[#25654d] to-[#33ffc0]
                transition-all duration-300
                hover:to-[#03442b]
                text-black
                shadow-lg
              "
            >
              Get Started →
            </button>
          </div>
        ))}
      </div>

      {/* Bottom quick links */}
      <div className="text-center mt-14 space-y-3">
        <p className="text-gray-300">
          I Know A Little About Web3{" "}
          <button 
            onClick={() => {
              if (!ready) return;
              if (!authenticated) return login();
              navigate('/intermediate')
            }} 
            className="text-[#33ffc0] underline hover:text-[#25ffa0] transition-colors"
          >
            Go to Intermediate
          </button>
        </p>

        <p className="text-gray-300">
          I'm Experienced In Web3{" "}
          <button 
            onClick={() => {
              if (!ready) return;
              if (!authenticated) return login();
              navigate('/advanced')
            }} 
            className="text-[#33ffc0] underline hover:text-[#25ffa0] transition-colors"
          >
            Go to Advanced
          </button>
        </p>
      </div>
    </div></>
  );
};

export default EducationHub;