import React from 'react'
import Select from 'react-select';
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getHashtags } from '../Requests/ArticleRequest';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const SearchBar = ({searchQuery, setSearchQuery, selectedTags, setSelectedTags}) => {
    
    
    const hashtagsResult = useQuery({
        queryKey: ["hashtags"],
        queryFn: getHashtags,
    });

    if (hashtagsResult.isLoading) {
        return <div></div>;
    }
    if (hashtagsResult.isError) {
        return <div></div>;
    }
    
    const hashtags = hashtagsResult.data;

    const hashtagsOptions = []

    for (const key in hashtags) {
      hashtagsOptions.push({
        value: hashtags[key],
        label: key
      })
    }

    
  return (
    <div className='px-8'>
      <div className="flex bg-white bg-opacity-50 rounded-3xl px-8 py-4 m-4  items-center transition-all duration-100">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input className="grow mx-4 px-4 py-2 inline-block align-baseline bg-transparent outline-none focus:text-3xl transition-all duration-100" placeholder="Title"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
          >
          </input>
          <Select
              isMulti
              options={hashtagsOptions}
              components={animatedComponents}
              onChange={(change) => {
                  setSelectedTags(change?.map(selected => selected.label))
          }}
          className="w-[25%]"
      />
      </div>
    </div>
  )
}

export default SearchBar
