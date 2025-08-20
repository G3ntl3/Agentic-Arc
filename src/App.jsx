import React from "react";
import Education from "./page/Education";
import Navbar from "./components/Navbar";

import Slide from "./components/Slide";
// import ReactPlay from "./components/ReactPlay";
// import ReactPlayerCarousel from "./components/ReactPlayerCarousel";

const App = () => {
  return (
    <div>
      <div className="">
        <Education />

        <Navbar />
        {/* <ReactPlayerCarousel />
        <ReactPlay/> */}
         {/* <Slide /> */}
      </div>
    </div>
  );
};

export default App;
