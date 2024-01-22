import React from "react";
import { motion } from "framer-motion";
import { fadeInDropAnimation } from "../../Animation/Animation";

import gopherIcon from "../../assets/SchoolsIcon/umn.png";
import lseIcon from "../../assets/SchoolsIcon/lse.webp";
import profilePicture from "../../assets/profilePicture.jpg"

const About = () => {
  return (
    <div>
      <div id="About" className=" text-oliveGreen font-syne text-center py-10">
        <motion.p className="text-7xl lg:text-9xl my-2 font-semibold " {...fadeInDropAnimation}>
          My Journey 
        </motion.p>
        <motion.div className="flex flex-wrap w-full px-0 lg:px-12 py-10" {...fadeInDropAnimation} transition={{ duration: 0.3, delay: 0.4 }}>
          <div className="w-full lg:w-1/4 p-10">
            <img src={profilePicture} className="rounded-t-full"></img>
          </div>
          <div className="w-full lg:w-3/4 p-10 text-left	">
            <p>
            I graduated with a BSc in Psychology from the University of Minnesota 
            and became a QA engineer afterwards. During my QA job, I had the opportunity
             to get exposed to different automated testing technologies, such as 
             Selenium and Cypress. I enjoy taking on challenges and therefore built
              a backend API service for testing the synchronization between frontend 
              display and backend storage.
              <br></br>
              <br></br>
              Later on, I started pursuing a Master’s degree in Applied Social Data Science. 
              I believe that artificial intelligence will fundamentally change the way we 
              live in the future. Studying advanced statistical topics such as Bayesian 
              Machine Learning is challenging, but it has enlightened my passion in the 
              realms of mathematics and statistics. Reading and learning mathematics has 
              since become my hobby. I have just finished the book <i>How to Prove It</i> and 
              started reading <i>Understanding Analysis</i>.
              <br></br>
              <br></br>
              My dream is to build a software system that utilize the power of AI
              to solve human's everyday issue and change the world in the future.
              Feel free to drop a message below if you have any questions or would
              like to discuss this further, please don’t hesitate to reach out to me! 
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-wrap h-full">
        <div className="w-full lg:w-1/3 group relative flex items-center p-10">
        <div className="group/UMN relative">
          <img className="w-full rounded-md group-hover:-translate-y-4 transition-all ease=in" src={gopherIcon}></img>
          <div className="absolute flex flex-row-reverse items-center rounded-md lg:px-10 opacity-0 bottom-0 left-0 h-[15%] w-full group-hover/UMN:opacity-70 group-hover/UMN:-translate-y-4 transition-all ease-in-out duration-300">
                <div className="rounded-md text-center bg-oliveGrey p-2 font-inter font-medium text-oliveDark">
                  University of Minnesota
                </div>
            </div>
        </div>
        </div>
        <div className="w-full lg:w-2/3  px-10">
          <div className="group relative">
            <img className="relative rounded-md group-hover:-translate-y-4 transition-all ease-in-out duration-300" src={lseIcon}></img>
            <div className="absolute flex flex-row-reverse items-center rounded-md lg:px-10 opacity-0 bottom-0 left-0 h-[15%] w-full group-hover:opacity-70 group-hover:-translate-y-4 transition-all ease-in-out duration-300">
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
