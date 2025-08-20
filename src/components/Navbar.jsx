import React from 'react'
import voteicon from "../assets/icon/vote.svg"
const Navbar = () => {
  return (
    <>
      {/* Sticky Bottom Navigation */}
      <div className="fixed bottom-0 z-50  left-0 right-0  ">
        <div className="flex justify-center items-center   py-4">
          <div className="flex bg-white/10 backdrop-blur-md gap-10 py-3 px-10 rounded-2xl p-1">
            {/* Education Hub Button */}
            <button className="bg-[#005466] text-white px-6 py-3 rounded-2xl  flex items-center space-x-2">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
              <span className="text-xl">Education Hub</span>
            </button>

            {/* Voting Button */}
            <button className=" text-white px-6 py-3 rounded-md font-medium flex items-center space-x-2">
              {/* <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                ></path>
              </svg> */}
              <img src={voteicon} alt="voting" />

              <span className="text-xl">Voting</span>
            </button>

            {/* Services Button */}
            <button className=" text-white px-6 py-3 rounded-md font-medium flex items-center space-x-2">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                ></path>
              </svg>
              <span className="text-xl">Services</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
