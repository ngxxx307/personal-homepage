import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import MarkdownDisplayer from '../Components/MarkdownDisplayer'
import { getArticle } from '../Requests/Request'
import backIcon from "../assets/backIcon.png"

const Article = () => {
    const [article, setArticle] = useState({markdown: null})
    const id = useParams().id
    const navigate = useNavigate()

    useEffect(()=> {
        getArticle(id).then(res => setArticle(res))
    }, [])

    return (
        <div className='pb-24 px-4 lg:p-24 font-roboto'>
            <div className='p-12 lg:p-24 bg-soapStone rounded-2xl bg-opacity-40 relative'>
                <button className='absolute top-0 right-0 p-4' onClick={() => navigate('/blog')}>
                    <img src={backIcon} className='object-contain h-8 w-8'/>
                </button>
                <h1 className='text-5xl font-semibold oliveDark font-roboto'>{article?.title}</h1>
                <h2 className=' text-gray-500 font-normal'>{article?.subtitle}</h2>
                <p className=''>{article?.updatedAt && new Date(article.updatedAt).toLocaleDateString('en-US')}</p>
                <MarkdownDisplayer markdown={article?.markdown} className='list-disc' />
            </div>
        </div>
    )
}

export default Article
