import React from "react";
import { motion } from "framer-motion";

import { fadeInDropAnimation } from "../Animation/Animation"
import ArticleList from "../Components/Blog/ArticleList";

const Blog = () => {
  return (
    <div className="w-full">
      <div className="px-24">
        <motion.p className="text-oliveGreen font-syne text-center text-9xl my-8 font-semibold" {...fadeInDropAnimation}>
            Blog
        </motion.p>
      </div>
      <ArticleList />
    </div>
  );
};

export default Blog;
