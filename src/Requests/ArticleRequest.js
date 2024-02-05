import api, { addHeader } from './BaseAPI'

export const getArticles = ({queryKey}) => {
    addHeader()
    return api.get(`/api/article`,{params: {title: queryKey[1], hashtags: queryKey[2]}}).then(res => {
        return res.data
    })
}

export const getArticle = (id) => {
    return api.get(`/api/article/${id}`).then(res => {
        return res.data
    })}

export const getHashtags = () => {
    addHeader()
    return api.get(`/api/article/hashtags`).then(res => {
        return res.data
    })}

export const postArticleRequest = (newArticle) => {
    const { title, subtitle, markdown, imgURL, hashtags, publicStatus} = newArticle

    addHeader()
    return api.post(`/api/article`, {title, subtitle, markdown, imgURL, hashtags, publicStatus:publicStatus}).then(res => {
        return res.data
    })
}

export const deleteArticleRequest = (data) => {
    const {id, token} = data
    addHeader()

    return api.delete(`/api/article/${id}`).then(res => {
        return res.data
    })
}

export const editArticleRequest = (article) => {
    const { title, subtitle, markdown, imgURL, hashtags, publicStatus } = article
    addHeader()

    return api.put(`/api/article/${article.id}`, {title, subtitle, markdown, imgURL, hashtags, public:publicStatus}).then(res => {
        return res.data
    })
}