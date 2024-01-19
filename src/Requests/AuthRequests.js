import api from './BaseAPI'

export const login = (user) => 
    api.post("api/auth", user)
    .then(res => {
        return res
    })

export const register = (user) => 
    api.post("api/auth/register", user).then(res => {
        return res
    })

export const refresh = () => 
    api.post("api/auth/refresh").then(res => {
        return res
    })

export const logout = () => 
    api.post("api/auth/logout").then(res => {
        return res
    })
