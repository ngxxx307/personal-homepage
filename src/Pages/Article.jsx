import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { getArticle } from '../Query/ArticlesQuery'
import MarkdownDisplayer from '../Components/MarkdownDisplayer'

const Article = () => {
    const [article, setArticle] = useState({markdown: null})
    const id = useParams().id

    useEffect(()=> {
        getArticle(id).then(res => setArticle(res))
    }, [])

    console.log(article)

    return (
        <div className='m-24 p-24 bg-soapStone rounded-2xl bg-opacity-40 '>
            <div>
                <h1>{article.title}</h1>
                <h2>{article.subtitle}</h2>
                <p>{article.date}</p>
            </div>
            <MarkdownDisplayer markdown={article.markdown} className='list-disc' />
        </div>
    )
}

export default Article
