import axios from 'axios'

const token = localStorage.getItem('duka-token')

const BASE_URL = axios.create({
    baseURL: 'http://138.68.189.32:8081',
    headers: {'Authorization' : `Bearer ${token}`}
})

export default BASE_URL;