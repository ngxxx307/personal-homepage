import React, { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import ArticleCell from '../ArticleCell';
import { getArticles } from '../../Requests/Request';
import { CreateArticle } from '../Popup/Popup';
import CreateButton from '../../assets/Buttons/CreateButton.png'

const ArticleList = () => {
    const [createPopup, setCreatePopup] = useState(false);

    const queryClient = useQueryClient()
    const result = useQuery({
        queryKey: ['articles'],
        queryFn: getArticles
      })

    if ( result.isLoading ) {
        return <div>loading data...</div>
      }
      if ( result.isError ) {
        return <div>Error</div>
      }
    const articles = result.data

  return (
    <div className='px-24'>
      <div id="BlogList" className=" bg-soapStone rounded-2xl bg-opacity-40 divide-y divide-dark" onClick={() => queryClient.invalidateQueries({ queryKey: ['articles'] })}>
        {articles.map(blogData => 
            <div key={blogData.id} className='mx-8 p-4'>
                <ArticleCell article={blogData} />
            </div>
                )}
      </div>
      <button onClick={() => setCreatePopup(!createPopup) } >
        <img src={CreateButton} className='object-contain	h-6 w-6 mx-1'></img>
      </button>
      {createPopup && <CreateArticle popup={createPopup} setPopup={setCreatePopup} />}
    </div>
  )
}

export default ArticleList
