import axios from 'axios'

export const getArticles = () => 
    axios.get("http://localhost:3001/api/articles").then(res => {
        return res.data
    })

export const getArticle = (id) => 
    axios.get(`http://localhost:3001/articles/${id}`).then(res => {
        return res.data
    })

export const postArticleRequest = (newArticle) => {
    const { title, subtitle, markdown, imgURL, token } = newArticle
    let header = ""

    if (token) {
        header = {"authorization": `Bearer ${token}`}
    }

    return axios.post("http://localhost:3001/api/article", {title, subtitle, markdown, imgURL}, {headers: header}).then(res => {
        return res.data
    })
}

export const deleteArticleRequest = (data) => {
    const {id, token} = data
    let header = ""

    if (token) {
        header = {"authorization": `Bearer ${token}`}
    }

    console.log("header", header)

    return axios.delete(`http://localhost:3001/api/article/${id}`, {headers: header}).then(res => {
        return res.data
    })
}

export const editArticleRequest = (article) => {
    const { title, subtitle, markdown, imgURL, token } = article
    let header = ""

    if (token) {
        header = {"authorization": `Bearer ${token}`}
    }

    return axios.put(`http://localhost:3001/api/article/${article.id}`, {title, subtitle, markdown, imgURL}, {headers: header}).then(res => {
        return res.data
    })
}