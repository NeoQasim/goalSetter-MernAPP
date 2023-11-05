import axios from "axios";


const base_Url = 'http://localhost:3005/api/users'
const register = async (userData) => {
    const response = await axios.post(base_Url, userData)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}


const login = async (userData) => {
    const response = await axios.post(`${base_Url}/login`, userData)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}

const logut = async () => {
    localStorage.removeItem("user")
}

const authService = { register, login, logut }
export default authService