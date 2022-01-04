import programService from "../../services/Program.service";
import { actions } from "../Action";


export const getProgramFromServer =  ({ dispatch, getState }) => next => action => {
async function getPrograms(){
     const programs = await programService.getAllProgram();
     debugger
     dispatch(actions.setProgram(programs));
    await getTables();
}
async function getTables(){
    debugger
    let all=['Type','Subject','SumOfParticipants','Language','Age','Migdar'];
    // all.forEach(element => {
    // const table = await programService.getAllTableValues(element);
    // dispatch(actions.setKategories({key:element,value:table}))
        
   // });
    for (let index = 0; index < all.length; index++) {
        const table = await programService.getAllTableValues(all[index]);
        dispatch(actions.setKategories({key:all[index],value:table}))
        
    }
}
    if (action.type === 'SET_PROGRAMS_FROM_SERVER') {
        try {
            getPrograms();
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
//          debugger         
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