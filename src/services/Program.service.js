import axios from 'axios';
class ProgramService {

    constructor() {
        this.url = "http://localhost:57828/api"
    }

    _getProgram = (url) => {
        return axios.get(url)
    }


    getAllProgram = async () => {
        try {
            let p = await this._getProgram(`${this.url}/Program`);
            return p.data;
        } catch (error) {
            return error
        }

    }
   


   

}
export default new ProgramService()