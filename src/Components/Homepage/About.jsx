import React from "react";
import { motion } from "framer-motion";
import { fadeInDropAnimation } from "../../Animation/Animation";

import gopherIcon from "../../assets/SchoolsIcon/umn.png";
import lseIcon from "../../assets/SchoolsIcon/lse.webp";

const About = () => {
  return (
    <div className="py-20">
      <div id="About" className=" text-oliveGreen font-syne text-center py-10">
        <motion.p
          className="text-9xl my-2 font-semibold "
          {...fadeInDropAnimation}
        >
          About Me.
        </motion.p>
        <motion.div
          className="flex w-full px-24 py-10"
          {...fadeInDropAnimation}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="w-1/4 px-10">
            <div></div>
            <img src="https://www.seanhalpin.xyz/about/faces.jpg" className="rounded-t-full"></img>
          </div>
          <div className="w-3/4 px-10 text-left	">
            <p>
              (chatGPT generated content) As a recent graduate with a Bachelor
              of Science in Psychology from the University of Minnesota, I have
              developed a strong foundation in understanding human behavior and
              mental processes. My passion for psychology has driven me to
              pursue a Master of Science in Applied Social Data Science from the
              London School of Economics, \ I gained expertise in using data
              to solve real-world problems. Since graduating two years ago, I
              have been applying my knowledge and skills to make a positive
              impact in the field. I am excited to leverage my expertise to help
              organizations make data-driven decisions that improve people’s
              lives.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex items-stretch h-full">
        <div className="group relative flex items-center w-1/3 p-10">
          <img className="w-full rounded-md group-hover:-translate-y-4 transition-all ease=in" src={gopherIcon}></img>
          <div className="absolute flex flex-row-reverse items-center rounded-md px-10 opacity-0 bottom-0 left-0 h-[15%] w-full group-hover:opacity-70 group-hover:-translate-y-4 transition-all ease-in-out duration-300">
                <div className="rounded-md text-center bg-oliveGrey p-2 font-inter font-medium text-oliveDark">
                  University of Minnesota
                </div>
            </div>
        </div>
        <div className="w-2/3 px-10">
          <div className="group relative">
            <img className="relative rounded-md group-hover:-translate-y-4 transition-all ease-in-out duration-300" src={lseIcon}></img>
            <div className="absolute flex flex-row-reverse items-center rounded-md px-10 opacity-0 bottom-0 left-0 h-[15%] w-full group-hover:opacity-70 group-hover:-translate-y-4 transition-all ease-in-out duration-300">
                <div className="rounded-md text-center bg-oliveGrey p-2 font-inter font-medium text-oliveDark">
                  London School of Economics
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
