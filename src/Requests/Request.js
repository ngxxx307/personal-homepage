import axios from 'axios'

export const getArticles = () => 
    axios.get("http://localhost:3001/articles").then(res => {
        return res.data
    })

export const getArticle = (id) => 
    axios.get(`http://localhost:3001/articles/${id}`).then(res => {
        return res.data
    })

export const postArticle = (newArticle) => {
    return axios.post("http://localhost:3001/articles", newArticle).then(res => {
        return res.data
    })
}

export const deleteArticle = (id) => {
    return axios.delete(`http://localhost:3001/articles/${id}`).then(res => {
        return res.data
    })
}

export const putArticle = (article) => {
    return axios.put(`http://localhost:3001/articles/${article.id}`, article).then(res => {
        return res.data
    })
}