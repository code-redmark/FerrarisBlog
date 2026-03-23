import axios from "axios";

console.log(import.meta.env.VITE_SERVER)

const api = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER}/api`,
    withCredentials: true
})

export default api 