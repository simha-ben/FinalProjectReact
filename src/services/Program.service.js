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
    getAllKategories = async () => {
        try {
            let p = await servise.GET("Program/getFields/Type");
            return p.data;
        } catch (error) {
            return error
        }
    }
    getAllTableValues = async (tableName) => {
        try {
            let p = await servise.GET("Program/getFields/" +tableName);
            return p.data;
        } catch (error) {
            return error
        }
    }
    addNewProgram= async (newP) => {
        try {
            let p = await servise.POST("Program",newP);
            return p.data;
        } catch (error) {
            return error
        }
    }

}
export default new ProgramService()