import React from "react";
import Home from "../Components/Homepage/Home";
import About from "../Components/Homepage/About";
import Contact from "../Components/Homepage/Contact";
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="px-24"> 
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default Homepage;
