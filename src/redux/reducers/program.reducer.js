import createReducer from './reducerUtils';

import produce from 'immer'

const initialState = {
   programs:[] ,
   kategories:[] 
}

const programFunc = {
   setProgram(state,action){
       state.programs=action.payload
   },
   setKategories(state,action){
      debugger
      state.kategories=action.payload
  },
}

export default produce((state, action) => createReducer(state, action, programFunc), initialState);
