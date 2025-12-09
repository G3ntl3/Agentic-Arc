import React from 'react';
import faceless from '../../assets/sevices/faced.png';
 
const Intermediate = () => {
  const courses = [
    {
      id: 1,
      title: "AI Agent 2",
      price: "$0.99",
      category: "Growth Project",
      image: faceless,
      avatar: faceless,
      description: "Show up as the 'face' of your brand. Record authentic, high-impact videos that connect directly with your audience and build trust..."
    },
    {
      id: 2,
      title: "AI Agent 2",
      price: "$0.99",
      category: "Growth Project",
      image: faceless,
      avatar: faceless,
      description: "Show up as the 'face' of your brand. Record authentic, high-impact videos that connect directly with your audience and build trust..."
    },
    {
      id: 3,
      title: "AI Agent 2",
      price: "$0.99",
      category: "Growth Project",
      image:faceless,
      avatar:faceless,
      description: "Show up as the 'face' of your brand. Record authentic, high-impact videos that connect directly with your audience and build trust..."
    },
    {
      id: 4,
      title: "AI Agent 2",
      price: "$0.99",
      category: "Growth Project",
      image: faceless,
      avatar: faceless,
      description: "Show up as the 'face' of your brand. Record authentic, high-impact videos that connect directly with your audience and build trust..."
    },
    {
      id: 5,
      title: "AI Agent 2",
      price: "$0.99",
      category: "Growth Project",
      image: faceless,
      avatar: faceless,
      description: "Show up as the 'face' of your brand. Record authentic, high-impact videos that connect directly with your audience and build trust..."
    },
    {
      id: 6,
      title: "AI Agent 2",
      price: "$0.99",
      category: "Growth Project",
      image:faceless,
      avatar:faceless,
      description: "Show up as the 'face' of your brand. Record authentic, high-impact videos that connect directly with your audience and build trust..."
    },
    {
      id: 7,
      title: "AI Agent 2",
      price: "$0.99",
      category: "Growth Project",
      image: faceless,
      avatar: faceless,
      description: "Show up as the 'face' of your brand. Record authentic, high-impact videos that connect directly with your audience and build trust..."
    },
    {
      id: 8,
      title: "AI Agent 2",
      price: "$0.99",
      category: "Growth Project",
      image: faceless,
      avatar: faceless,
      description: "Show up as the 'face' of your brand. Record authentic, high-impact videos that connect directly with your audience and build trust..."
    },
    {
      id: 9,
      title: "AI Agent 2",
      price: "$0.99",
      category: "Growth Project",
      image:faceless,
      avatar:faceless,
      description: "Show up as the 'face' of your brand. Record authentic, high-impact videos that connect directly with your audience and build trust..."
    }
  ];

  return (
    <div className="bg-[#0a1f1c] min-h-screen py-10 px-4 sm:px-6 lg:px-20 lg:pt-30 pt-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00e6a5] mb-2">
          Education Hub: Intermediate Pathways
        </h1>
        <p className="text-white text-base sm:text-lg">
          Go beyond the basics
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{
               background: "linear-gradient(90deg, #002A24 0%,  #023B14 100%)",
  border: "1px solid rgba(61,220,151,0.12)",
  boxShadow: "0 12px 40px rgba(2,8,6,0.6)",
  backdropFilter: "blur(6px)",
            }}
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 sm:h-40 lg:h-48 object-cover p-2 rounded-t-2xl"
              />
              <div className="absolute left-2 bottom-2">
                <img
                  src={course.avatar}
                  alt={`${course.title} avatar`}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#00e6a5] object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4 flex-1 flex flex-col">
              {/* Title and Price */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#00e6a5]">
                  {course.title}
                </h3>
                <span className="text-xs sm:text-sm text-white font-medium">
                  {course.price}
                </span>
              </div>

              {/* Category Badge */}
              <span className="inline-block text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-[#1a4d3f] text-[#00e6a5] mb-2 sm:mb-3 w-fit">
                {course.category}
              </span>

              {/* Description */}
              <p className="text-[10px] sm:text-xs lg:text-sm text-gray-300 mb-3 sm:mb-4 flex-1 leading-relaxed">
                {course.description}
              </p>

              {/* Learn More Button */}
              <button className="w-full py-2 sm:py-2.5 border border-[#00e6a5] text-[#00e6a5] bg-transparent rounded-xl hover:bg-[#00e6a5]/10 transition-all text-xs sm:text-sm font-medium">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intermediate;