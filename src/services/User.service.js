import axios from 'axios';
import servise from './Main.service';
class UserService {

   
    getAll = async () => {
        try {
            let a = await servise.GET("user") ;
            return a.data;
        } catch (error) {
            return error
        }
    }

}
export default new UserService()