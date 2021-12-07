import axios from 'axios';
import servise from './Main.service';

 class ProgramService {

   

    getAllProgram = async () => {
        try {
            let p = await servise.GET("program");
            return p.data;
        } catch (error) {
            return error
        }

    }
   


   

}
export default new ProgramService()