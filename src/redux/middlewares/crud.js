import programService from "../../services/Program.service";
import { actions } from "../Action";


export const getProgramFromServer =  ({ dispatch, getState }) => next => action => {
async function getPrograms(){
     const programs = await programService.getAllProgram();
     debugger
     dispatch(actions.setProgram(programs))
}
    if (action.type === 'SET_PROGRAMS_FROM_SERVER') {
        try {
            getPrograms();
        } catch (err) {
            console.log(err);
        }
    }
    return next(action)
}

export const getKategoriesFromServer =  ({ dispatch, getState }) => next => action => {
    async function getKategories(){
         const kategories = await programService.getAllKategories();
         debugger         
         dispatch(actions.setKategories(kategories))
    }
        if (action.type === 'GET_KATEGORIES_FROM_SERVER') {
            try {
                getKategories();
            } catch (err) {
                console.log(err);
            }
        }
        return next(action)
    }