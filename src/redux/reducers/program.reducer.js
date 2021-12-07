import createReducer from './reducerUtils';

import produce from 'immer'

const initialState = {
   programs:[]
  
}

const programFunc = {
   setProgram(state,action){
       state.programs=action.payload
   },
}

export default produce((state, action) => createReducer(state, action, programFunc), initialState);
