import axios from 'axios'

const baseURL = import.meta.env.VITE_BACKEND_BASEURL

export const getArticles = () => 
    axios.get(`${baseURL}/api/article`).then(res => {
        return res.data
    })

export const getArticle = (id) => 
    axios.get(`${baseURL}/api/article/${id}`).then(res => {
        return res.data
    })

export const postArticleRequest = (newArticle) => {
    const { title, subtitle, markdown, imgURL, token } = newArticle
    let header = {}

    if (token) {
        header = {"authorization": `Bearer ${token}`}
    }

    return axios.post(`${baseURL}/api/article`, {title, subtitle, markdown, imgURL}, {headers: header}).then(res => {
        return res.data
    })
}

export const deleteArticleRequest = (data) => {
    const {id, token} = data
    let header = {}

    if (token) {
        header = {"authorization": `Bearer ${token}`}
    }

    console.log("header", header)

    return axios.delete(`${baseURL}/api/article/${id}`, {headers: header}).then(res => {
        return res.data
    })
}

export const editArticleRequest = (article) => {
    const { title, subtitle, markdown, imgURL, token } = article
    let header = {}

    if (token) {
        header = {"authorization": `Bearer ${token}`}
    }

    return axios.put(`${baseURL}/api/article/${article.id}`, {title, subtitle, markdown, imgURL}, {headers: header}).then(res => {
        return res.data
    })
}