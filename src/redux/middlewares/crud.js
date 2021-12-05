
import programService from "../../services/Program.service";
import { actions } from "../Action";


export const getProgramFromServer =  ({ dispatch, getState }) => next => action => {
async function getPrograms(){
     const programs = await programService.getAllProgram();
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