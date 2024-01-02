import React from "react";
import { motion } from "framer-motion";
import Card from "../Card";
import PhotoSlider from "../PhotoSlider";
import { fadeInDropAnimation } from "../../Animation/Animation";

import reactIcon from "../../assets/FrontendIcon/react.png";
import htmlIcon from "../../assets/FrontendIcon/html.png";
import reduxIcon from "../../assets/FrontendIcon/redux.png";
import cssIcon from "../../assets/FrontendIcon/css.png";
import nodejsIcon from "../../assets/BackendIcon/nodejs.png";
import expressIcon from "../../assets/BackendIcon/expressjs.png";
import transformerImage from "../../assets/MLIcon/machineLearning.png";
import mongodbIcon from "../../assets/DatabaseIcon/MongoDB.png";
import mysqlIcon from "../../assets/DatabaseIcon/mysql.png";
// import { importAll } from "../../utils/utils";
// importAll('../assets/FrontendIcon', '/\.png/')

const FRONTENDIMAGES = [
  { url: reactIcon, alt: "react", id: 1 },
  { url: reduxIcon, alt: "redux", id: 2 },
  { url: htmlIcon, alt: "html", id: 3 },
  { url: cssIcon, alt: "css", id: 4 },
];

const BackendIcons = [
  { url: nodejsIcon, alt: "node.js", id: 5 },
  { url: expressIcon, alt: "express.js", id: 6 },
];

const DatabaseIcons = [
  { url: mysqlIcon, alt: "mysql", id: 5 },
  { url: mongodbIcon, alt: "MongoDB", id: 6 },
];

const Home = () => {
  return (
    <div className="pt-20">
      <motion.div
        id="Home"
        className=" text-oliveGreen font-syne text-center py-10"
        {...fadeInDropAnimation}
      >
        <p className="text-9xl my-2 font-semibold ">Hi. This Is Kurt.</p>
        <p className="text-6xl my-2 font-normal">
          A Software Developer and Data Enthusiast.
        </p>
      </motion.div>
      <div>
        <div className="flex flex-row flex-wrap w-auto overflow-hidden">
          <motion.div
            className="w-2/5 my-10 overflow-hidden"
            {...fadeInDropAnimation}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Card
              className="p-16"
              title="Frontend Tools"
              cardColor="bg-purple"
              text="ReactJS, Redux, HTML, CSS"
              content={<PhotoSlider images={FRONTENDIMAGES} />}
            />
          </motion.div>
          <motion.div
            className="w-3/5 my-10"
            {...fadeInDropAnimation}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Card
              className="p-16"
              title="Backend Tools"
              cardColor="bg-aqua"
              text="Node.js Express.js"
              content={<PhotoSlider images={BackendIcons} />}
              aspectRatio="aspect-auto"
            />
          </motion.div>
          <motion.div className="w-3/5 my-10" {...fadeInDropAnimation}>
            <Card
              className="p-16"
              title="Database"
              cardColor="bg-skyblue"
              text="Mysql, MongoDB"
              content={<PhotoSlider images={DatabaseIcons} />}
              aspectRatio="aspect-auto"
            />
          </motion.div>
          <motion.div className="w-2/5 my-10" {...fadeInDropAnimation}>
            <Card
              title="Machine Learning"
              cardColor="bg-apricot"
              text=""
              content={<img src={transformerImage}></img>}
              aspectRatio="aspect-video"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
