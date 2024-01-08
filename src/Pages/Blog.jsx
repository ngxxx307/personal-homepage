import React, { useState } from "react";
import { motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { fadeInDropAnimation } from "../Animation/Animation"
import ArticleList from "../Components/Blog/ArticleList";

const Blog = () => {
  const [createPopup, setCreatePopup] = useState(false);

  return (
    <div>
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
