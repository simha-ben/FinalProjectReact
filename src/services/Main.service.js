import axios from 'axios';
class MainService {

    constructor() {
        this.baseUrl = "http://localhost:63312/api"
    }
    GET = (url) => {
        return axios.get(`${this.baseUrl}/${url}`)
    }
}
export default new MainService();