import React from "react";
import Home from "../Components/Homepage/Home";
import About from "../Components/Homepage/About";
import Contact from "../Components/Homepage/Contact";

const Homepage = () => {
  return (
    <div className="px-4 lg:px-24"> 
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default Homepage;
