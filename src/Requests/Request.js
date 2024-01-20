import api, {addHeader} from './BaseAPI'

export const getArticles = () => {
    addHeader()
    return api.get(`/api/article`).then(res => {
        return res.data
    })
}

export const getArticle = (id) => {
    return api.get(`/api/article/${id}`).then(res => {
        return res.data
    })}

export const postArticleRequest = (newArticle) => {
    const { title, subtitle, markdown, imgURL} = newArticle
    addHeader()

    return api.post(`/api/article`, {title, subtitle, markdown, imgURL}).then(res => {
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
    const { title, subtitle, markdown, imgURL, publicStatus } = article
    addHeader()

    return api.put(`/api/article/${article.id}`, {title, subtitle, markdown, imgURL, public:publicStatus}).then(res => {
        return res.data
    })
}