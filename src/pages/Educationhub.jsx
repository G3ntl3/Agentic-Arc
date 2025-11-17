import React from "react";

const plans = [
  {
    title: "Basic",
    items: [
      "Basic Introduction To Defi",
      "Agentic Economy",
      "How To Contribute To AI Economy",
      "Use Cases",
    ],
  },
  {
    title: "Intermediate",
    items: ["Neurobro", "Arbus", "Swarm", "Backram"],
  },
  {
    title: "Advanced",
    items: [
      "Using Agents For Their Purpose",
      "Trading",
      "Types Of AI Agents",
      "Analytics To Get Insights",
    ],
  },
];

const EducationHub = () => {
  return (
    <div className="w-full py-16 px-4 md:px-10 bg-[#020b0a] text-white red lg:mt-10">
      {/* Header */}
      <div className="text-center mb-14 ">
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
            className="rounded-xl p-8 bg-gradient-to-b from-[#0d302a] to-[#07201c] border border-[#1b5247] shadow-xl"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-6 text-[#b6ffe2]">
              {plan.title}
            </h3>

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
              className="
                w-full 
                py-3 
                rounded-full 
                font-medium 
                bg-gradient-to-r from-[#14b57a] to-[#33ffc0]
                transition-all duration-300 
                hover:to-[#0e8a5a]
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
          <a href="#" className="text-[#33ffc0] underline">
            Go to Intermediate
          </a>
        </p>

        <p className="text-gray-300">
          I'm Experienced In Web3{" "}
          <a href="#" className="text-[#33ffc0] underline">
            Go to Advanced
          </a>
        </p>
      </div>
    </div>
  );
};

export default EducationHub;
