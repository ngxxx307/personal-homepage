import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import MarkdownDisplayer from '../Components/MarkdownDisplayer'
import { getArticle } from '../Requests/Request'

const Article = () => {
    const [article, setArticle] = useState({markdown: null})
    const id = useParams().id

    useEffect(()=> {
        getArticle(id).then(res => setArticle(res))
    }, [])

    return (
        <div className='p-24'>
            <div className='p-24 bg-soapStone rounded-2xl bg-opacity-40 '>
                <div className='m-10'>
                    <h1 className='text-5xl font-bold	'>{article?.title}</h1>
                    <h2 className=' text-gray-500 font-normal'>{article?.subtitle}</h2>
                    <p className='text-gray-500 font-normal'>{article?.updatedAt && new Date(article.updatedAt).toLocaleDateString('en-US')}</p>
                </div>
                <MarkdownDisplayer markdown={article?.markdown} className='list-disc' />
            </div>
        </div>
    )
}

export default Article
