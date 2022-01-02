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
    getNameById = async (id) => {
        try {
            let a = await servise.GET(`user/getName/${id}`) ;
            return a.data;
        } catch (error) {
            return error
        }
    }
    login = async (userLogin) => {
        try {
            let a = await servise.POST("user/login",userLogin) ;
            return a.data;
        } catch (error) {
            return error
        }
    }
    addNewUser=async(newUser)=>{
        try {
            console.log(newUser);
            debugger;
            let a = await servise.POST("user",newUser) ;
            return a.data;
        } catch (error) {
            return error
        }
    }
}
export default new UserService()