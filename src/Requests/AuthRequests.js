import axios from 'axios'

export const login = (user) => 
    axios.post("http://localhost:3001/api/auth", user).then(res => {
        return res
    })

export const register = (user) => 
    axios.post("http://localhost:3001/api/auth/register", user).then(res => {
        return res
    })