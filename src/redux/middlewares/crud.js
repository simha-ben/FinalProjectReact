import programService from "../../services/Program.service";
import { actions } from "../Action";


export  const  getProgramFromServer =  ({ dispatch, getState }) => next =>async action => {
    async function getPrograms() {
        const programs = await programService.getAllProgram();       
        dispatch(actions.setProgram(programs));
        await getTables();
    }
    async function getTables() {
        
        let all = ['Type', 'Subject', 'SumOfParticipants', 'Language', 'Age', 'Migdar'];

        for (let index = 0; index < all.length; index++) {
            const table = await programService.getAllTableValues(all[index]);
            dispatch(actions.setKategories({ key: all[index], value: table }))

        }
    }
    if (action.type === 'SET_PROGRAMS_FROM_SERVER') {
        try {
           await getPrograms();
            // getTables();
        } catch (err) {
            console.log(err);
        }
    }
    return next(action)
}

// export const getKategoriesFromServer =  ({ dispatch, getState }) => next => action => {
//     async function getKategories(){
//          const kategories = await programService.getAllKategories();
//          
//          dispatch(actions.setKategories(kategories))
//     }
//         if (action.type === 'GET_KATEGORIES_FROM_SERVER') {
//             try {
//                 getKategories();
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//         return next(action)
//     }