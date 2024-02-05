import React, { useState } from "react";
import { motion } from "framer-motion";

import { fadeInDropAnimation } from "../Animation/Animation"
import ArticleList from "../Components/Blog/ArticleList";
import SearchBar from "../Components/SearchBar";
import { useDebounce } from '../hooks/hooks';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  const debouncedQuery = useDebounce(searchQuery)

  return (
    <div className="w-full">
      <div className="px-24">
        <motion.p className="text-oliveGreen font-syne text-center text-7xl lg:text-9xl py-8 font-semibold" {...fadeInDropAnimation}>
            Blog
        </motion.p>
      </div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <ArticleList debouncedQuery={debouncedQuery} searchQuery={searchQuery} selectedTags={selectedTags} />
    </div>
  );
};

export default Blog;
