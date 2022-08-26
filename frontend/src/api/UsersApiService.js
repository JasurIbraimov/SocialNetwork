import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default class UsersApiService {
    constructor() {}
    getUserProfile(id) {
        return axios.get(`${API_URL}/api/users/${id}`).then(response => response.data)
    }
}