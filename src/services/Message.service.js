import axios from 'axios';
import servise from './Main.service';

 class MessageService { 

    sendMessage = async (data) => {
        try {
            let p = await servise.POST("message",data);
            return p.data;
        } catch (error) {
            return error
        }
    }
    getMessages = async (type,id) => {
        try {
            let p = await servise.GET(`message/${type}/${id}`);
            
            return p.data;
        } 
        catch (error) {
            return error
        }
    }
}
export default new MessageService()